import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { CANVAS_H, CANVAS_W, EXERCISES, type Grade } from './exercises';
import type { Pt } from './geometry';
import { recordScore, useProgress } from '../../hooks/useProgress';

/**
 * The practice pad. Collects pointer strokes, hands them to the exercise's
 * grader once enough have been drawn, and paints the feedback overlay on top.
 */
export default function DrawCanvas({ exerciseId }: { exerciseId: string }) {
  const ex = EXERCISES[exerciseId];
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const current = useRef<Pt[]>([]);

  const [seed, setSeed] = useState(() => Math.random());
  const [strokes, setStrokes] = useState<Pt[][]>([]);
  const [grade, setGrade] = useState<Grade | null>(null);
  const progress = useProgress();

  const best = progress.best[exerciseId] ?? 0;

  /*
   * Derived during render, not in an effect: the first paint happens before
   * effects flush, so an effect-built target would leave the guide painting
   * against an empty layout.
   */
  const target = useMemo(() => {
    if (!ex) return { dots: [] };
    let s = seed;
    // Deterministic PRNG so a given seed always rebuilds the same layout.
    const rnd = () => {
      s = (s * 16807 + 0.61803398875) % 1;
      return s;
    };
    return ex.build(rnd);
  }, [ex, seed]);

  const reset = useCallback(() => {
    setStrokes([]);
    setGrade(null);
    current.current = [];
  }, []);

  /* Switching drills starts from a clean pad. */
  useEffect(() => {
    reset();
  }, [exerciseId, reset]);

  /* ------------ painting ------------ */

  const paint = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !ex) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    ctx.fillStyle = '#f7f4ee';
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // Faint grid so strokes have something to be judged against by eye.
    ctx.strokeStyle = 'rgba(43,43,51,0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= CANVAS_W; x += 43) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, CANVAS_H);
      ctx.stroke();
    }
    for (let y = 0; y <= CANVAS_H; y += 47) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(CANVAS_W, y);
      ctx.stroke();
    }

    ex.guide(ctx, target);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#2b2b33';
    ctx.lineWidth = 4;
    const all = drawing.current ? [...strokes, current.current] : strokes;
    for (const s of all) {
      if (s.length < 2) continue;
      ctx.beginPath();
      ctx.moveTo(s[0].x, s[0].y);
      for (let i = 1; i < s.length; i++) ctx.lineTo(s[i].x, s[i].y);
      ctx.stroke();
    }

    if (grade?.overlay) grade.overlay(ctx);
  }, [ex, target, strokes, grade]);

  useEffect(() => {
    paint();
  }, [paint]);

  /* Size the backing store to the device pixel ratio once, for crisp strokes. */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_W * dpr;
    canvas.height = CANVAS_H * dpr;
    paint();
    // Deliberately mount-only: resizing the backing store wipes the context.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ------------ input ------------ */

  const toCanvas = (e: ReactPointerEvent<HTMLCanvasElement>): Pt => {
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * CANVAS_W,
      y: ((e.clientY - rect.top) / rect.height) * CANVAS_H,
    };
  };

  const onDown = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!ex) return;
    if (grade) return; // graded — clear or re-roll first
    // Capture keeps the stroke alive if the pointer leaves the canvas, but it
    // throws if the pointer is already gone — never worth losing the stroke over.
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    drawing.current = true;
    current.current = [toCanvas(e)];
    paint();
  };

  const onMove = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    current.current.push(toCanvas(e));
    paint();
  };

  const onUp = () => {
    if (!drawing.current || !ex) return;
    drawing.current = false;
    const stroke = current.current;
    current.current = [];

    // Ignore taps and accidental dots.
    if (stroke.length < 4) {
      paint();
      return;
    }

    const next = [...strokes, stroke];
    setStrokes(next);

    if (!ex.free && next.length >= ex.strokes) {
      const g = ex.grade(next, target);
      setGrade(g);
      recordScore(exerciseId, g.score);
    }
  };

  if (!ex) return <div className="pad__missing">Unknown drill: {exerciseId}</div>;

  const remaining = ex.free ? null : Math.max(0, ex.strokes - strokes.length);
  const scoreTone = grade ? (grade.score >= 85 ? 'great' : grade.score >= 65 ? 'ok' : 'poor') : '';

  return (
    <div className="pad">
      <div className="pad__bar">
        <div className="pad__prompt">
          <strong>{ex.name}</strong>
          <span>{ex.prompt}</span>
        </div>
        <div className="pad__actions">
          {best > 0 && <span className="pad__best">best {best}</span>}
          <button className="pad__btn" onClick={reset}>
            Clear
          </button>
          <button
            className="pad__btn pad__btn--go"
            onClick={() => {
              reset();
              setSeed(Math.random());
            }}
          >
            New attempt
          </button>
        </div>
      </div>

      <div className="pad__canvasWrap">
        <canvas
          ref={canvasRef}
          className="pad__canvas"
          style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        />
        {remaining !== null && remaining > 0 && !grade && (
          <div className="pad__counter">
            {remaining} stroke{remaining === 1 ? '' : 's'} left
          </div>
        )}
      </div>

      {grade && (
        <div className={`pad__result pad__result--${scoreTone}`}>
          <div className="pad__score">
            <span className="pad__scoreNum">{grade.score}</span>
            <span className="pad__scoreOf">/100</span>
          </div>
          <div className="pad__metrics">
            {grade.metrics.map((m) => (
              <div key={m.label} className="pad__metric">
                <div className="pad__metricTop">
                  <span>{m.label}</span>
                  <span>{m.value}</span>
                </div>
                <div className="pad__metricBar">
                  <div
                    className="pad__metricFill"
                    style={{
                      width: `${m.value}%`,
                      background:
                        m.value >= 85 ? '#56d98a' : m.value >= 65 ? '#ffc857' : '#ff6b6b',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="pad__verdict">{grade.verdict}</p>
        </div>
      )}

      {ex.free && <div className="pad__freenote">Free pad — nothing here is scored.</div>}
    </div>
  );
}
