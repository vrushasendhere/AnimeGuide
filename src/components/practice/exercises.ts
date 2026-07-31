import {
  closure,
  consistency,
  ellipseFit,
  hitScore,
  parallelism,
  passScore,
  polylineLength,
  resample,
  roundness,
  smoothness,
  spacingEvenness,
  straightness,
  weighted,
  type EllipseT,
  type Pt,
} from './geometry';

export const CANVAS_W = 860;
export const CANVAS_H = 470;

export interface Target {
  dots: Pt[];
  ellipse?: EllipseT;
  rect?: { x: number; y: number; w: number; h: number };
}

export interface Metric {
  label: string;
  value: number;
}

export interface Grade {
  score: number;
  metrics: Metric[];
  /** Advice aimed at whichever metric came out worst. */
  verdict: string;
  overlay?: (ctx: CanvasRenderingContext2D) => void;
}

export interface Exercise {
  id: string;
  name: string;
  prompt: string;
  /** How many strokes to collect before grading. */
  strokes: number;
  /** Free-draw pads are never graded. */
  free?: boolean;
  build(rnd: () => number): Target;
  guide(ctx: CanvasRenderingContext2D, t: Target): void;
  grade(strokes: Pt[][], t: Target): Grade;
}

/* ---------------- shared drawing helpers ---------------- */

const GHOST = 'rgba(43,43,51,0.13)';
const MARK = '#ff5d8f';

function dot(ctx: CanvasRenderingContext2D, p: Pt, r = 9, color = MARK) {
  ctx.beginPath();
  ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(p.x, p.y, r + 9, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255,93,143,0.35)';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function ghostEllipse(ctx: CanvasRenderingContext2D, e: EllipseT) {
  ctx.beginPath();
  ctx.ellipse(e.cx, e.cy, e.rx, e.ry, 0, 0, Math.PI * 2);
  ctx.strokeStyle = GHOST;
  ctx.lineWidth = 16;
  ctx.stroke();
}

function dashedLine(ctx: CanvasRenderingContext2D, a: Pt, b: Pt, color = MARK) {
  ctx.save();
  ctx.setLineDash([9, 9]);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
  ctx.restore();
}

/** Recolour the drawn stroke by how far each sample sits from the ideal. */
function deviationOverlay(pts: Pt[], errAt: (p: Pt) => number, tolerance: number) {
  return (ctx: CanvasRenderingContext2D) => {
    const s = resample(pts, 90);
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    for (let i = 1; i < s.length; i++) {
      const e = Math.min(1, errAt(s[i]) / tolerance);
      const r = Math.round(60 + e * 195);
      const g = Math.round(190 - e * 130);
      const b = Math.round(120 - e * 40);
      ctx.strokeStyle = `rgb(${r},${g},${b})`;
      ctx.beginPath();
      ctx.moveTo(s[i - 1].x, s[i - 1].y);
      ctx.lineTo(s[i].x, s[i].y);
      ctx.stroke();
    }
  };
}

/** Pick the weakest sub-score and return the coaching line attached to it. */
function coach(metrics: Metric[], tips: Record<string, string>, good: string): string {
  const worst = metrics.reduce((a, b) => (b.value < a.value ? b : a));
  if (worst.value >= 85) return good;
  return tips[worst.label] ?? good;
}

const rangeRnd = (rnd: () => number, lo: number, hi: number) => lo + rnd() * (hi - lo);

/* ---------------- the drills ---------------- */

export const EXERCISES: Record<string, Exercise> = {
  /* 1. The core line drill. */
  'line-dots': {
    id: 'line-dots',
    name: 'Dot to dot',
    prompt: 'One confident stroke from the first dot to the second. Do not go slow.',
    strokes: 1,
    build(rnd) {
      const a = { x: rangeRnd(rnd, 90, 300), y: rangeRnd(rnd, 80, 390) };
      const b = { x: rangeRnd(rnd, 560, 780), y: rangeRnd(rnd, 80, 390) };
      return { dots: [a, b] };
    },
    guide(ctx, t) {
      dot(ctx, t.dots[0]);
      dot(ctx, t.dots[1]);
    },
    grade(strokes, t) {
      const s = strokes[0];
      const start = hitScore(s[0], t.dots[0]);
      const end = hitScore(s[s.length - 1], t.dots[1]);
      const straight = straightness(s);
      const metrics = [
        { label: 'Straightness', value: straight },
        { label: 'Start accuracy', value: start },
        { label: 'End accuracy', value: end },
      ];
      const a = t.dots[0];
      const b = t.dots[1];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.hypot(dx, dy);
      return {
        score: weighted([
          [straight, 3],
          [start, 1],
          [end, 1.4],
        ]),
        metrics,
        verdict: coach(
          metrics,
          {
            Straightness: 'Your line bowed. Draw from the shoulder and move faster — speed is what straightens it.',
            'Start accuracy': 'Plant the pen on the dot before you move. Ghost the stroke twice first.',
            'End accuracy': 'Look at the END dot the whole time. Your hand goes where your eyes are.',
          },
          'Clean. Now do it again without slowing down.',
        ),
        overlay: (ctx) => {
          dashedLine(ctx, a, b);
          deviationOverlay(
            s,
            (p) => Math.abs(dy * p.x - dx * p.y + b.x * a.y - b.y * a.x) / len,
            len * 0.03,
          )(ctx);
        },
      };
    },
  },

  /* 2. Ghosting: repeat the same stroke, judged on repeatability. */
  'line-ghost': {
    id: 'line-ghost',
    name: 'Ghosted repeats',
    prompt: 'Draw the SAME line three times. Rehearse above the screen between each one.',
    strokes: 3,
    build(rnd) {
      const y = rangeRnd(rnd, 140, 330);
      return {
        dots: [
          { x: 120, y },
          { x: 740, y: y + rangeRnd(rnd, -60, 60) },
        ],
      };
    },
    guide(ctx, t) {
      dot(ctx, t.dots[0]);
      dot(ctx, t.dots[1]);
    },
    grade(strokes) {
      const straight = Math.round(
        strokes.reduce((a, s) => a + straightness(s), 0) / strokes.length,
      );
      const repeat = consistency(strokes);
      const metrics = [
        { label: 'Straightness', value: straight },
        { label: 'Repeatability', value: repeat },
      ];
      return {
        score: weighted([
          [straight, 1],
          [repeat, 1.6],
        ]),
        metrics,
        verdict: coach(
          metrics,
          {
            Straightness: 'Each pass is bowing the same way — that is your arm arc. Rotate the paper or angle your body.',
            Repeatability: 'The three lines drifted apart. Ghost the motion three times BEFORE the first real stroke.',
          },
          'That is the drill working. Repeatability is the whole skill.',
        ),
      };
    },
  },

  /* 3. Long strokes, where control actually breaks down. */
  'line-long': {
    id: 'line-long',
    name: 'Full-width line',
    prompt: 'Corner to corner in one pass. This is a shoulder movement, not a wrist one.',
    strokes: 1,
    build(rnd) {
      const flip = rnd() > 0.5;
      return {
        dots: [
          { x: 80, y: flip ? 70 : 400 },
          { x: 780, y: flip ? 400 : 70 },
        ],
      };
    },
    guide(ctx, t) {
      dot(ctx, t.dots[0]);
      dot(ctx, t.dots[1]);
    },
    grade(strokes, t) {
      const s = strokes[0];
      const straight = straightness(s);
      const end = hitScore(s[s.length - 1], t.dots[1], 34);
      const speed = polylineLength(s) > 600 ? 100 : 55;
      const metrics = [
        { label: 'Straightness', value: straight },
        { label: 'End accuracy', value: end },
        { label: 'Commitment', value: speed },
      ];
      return {
        score: weighted([
          [straight, 3],
          [end, 1.2],
          [speed, 0.8],
        ]),
        metrics,
        verdict: coach(
          metrics,
          {
            Straightness: 'Long lines expose wrist drawing. Lock the wrist, pivot at the shoulder.',
            'End accuracy': 'Overshoot slightly rather than easing in — easing is what creates hooks.',
            Commitment: 'You stopped short. Commit to the whole distance in one motion.',
          },
          'Excellent. Full-width control is where most people stall.',
        ),
        overlay: (ctx) => dashedLine(ctx, t.dots[0], t.dots[1]),
      };
    },
  },

  /* 4. Curves need targets too. */
  'curve-3': {
    id: 'curve-3',
    name: 'Curve through three',
    prompt: 'One smooth arc that passes through all three dots. No corners.',
    strokes: 1,
    build(rnd) {
      const y = rangeRnd(rnd, 300, 400);
      const lift = rangeRnd(rnd, 140, 240);
      return {
        dots: [
          { x: 130, y },
          { x: 430, y: y - lift },
          { x: 730, y },
        ],
      };
    },
    guide(ctx, t) {
      t.dots.forEach((d) => dot(ctx, d));
    },
    grade(strokes, t) {
      const s = strokes[0];
      // Endpoints are judged on the actual stroke ends, the middle dot on
      // however close the stroke ever got to it.
      const hits = [
        hitScore(s[0], t.dots[0], 34),
        passScore(s, t.dots[1], 34),
        hitScore(s[s.length - 1], t.dots[2], 34),
      ];
      const acc = Math.round((hits[0] + hits[1] + hits[2]) / 3);
      const smooth = smoothness(s, Math.PI * 0.85);
      const metrics = [
        { label: 'Dot accuracy', value: acc },
        { label: 'Smoothness', value: smooth },
      ];
      return {
        score: weighted([
          [acc, 1.3],
          [smooth, 1.7],
        ]),
        metrics,
        verdict: coach(
          metrics,
          {
            'Dot accuracy': 'Ghost the whole arc first so your hand already knows the path.',
            Smoothness: 'You corrected mid-stroke. One motion — accept the imperfect arc and move on.',
          },
          'Smooth and on target. This is the stroke every hair clump is made of.',
        ),
        overlay: (ctx) => {
          ctx.save();
          ctx.setLineDash([9, 9]);
          ctx.strokeStyle = MARK;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(t.dots[0].x, t.dots[0].y);
          ctx.quadraticCurveTo(
            t.dots[1].x,
            t.dots[1].y - (t.dots[0].y - t.dots[1].y),
            t.dots[2].x,
            t.dots[2].y,
          );
          ctx.stroke();
          ctx.restore();
        },
      };
    },
  },

  /* 5. Trace a known ellipse — fit is measurable. */
  'ellipse-trace': {
    id: 'ellipse-trace',
    name: 'Ellipse on target',
    prompt: 'Orbit the shape three times in the air, then lay down one continuous loop.',
    strokes: 1,
    build(rnd) {
      const rx = rangeRnd(rnd, 130, 230);
      const ry = rx * rangeRnd(rnd, 0.3, 0.72);
      return { dots: [], ellipse: { cx: 430, cy: 235, rx, ry } };
    },
    guide(ctx, t) {
      if (t.ellipse) ghostEllipse(ctx, t.ellipse);
    },
    grade(strokes, t) {
      const s = strokes[0];
      const e = t.ellipse!;
      const fit = ellipseFit(s, e);
      const close = closure(s);
      const smooth = smoothness(s, Math.PI * 2);
      const metrics = [
        { label: 'Fit', value: fit },
        { label: 'Closure', value: close },
        { label: 'Smoothness', value: smooth },
      ];
      return {
        score: weighted([
          [fit, 2],
          [close, 1],
          [smooth, 1.4],
        ]),
        metrics,
        verdict: coach(
          metrics,
          {
            Fit: 'You drifted off the shape. Orbit longer before touching down — the loop should already be moving.',
            Closure: 'Overshoot past your start point instead of aiming for it. Overlap is fine, gaps are not.',
            Smoothness: 'Corners and flat spots mean you slowed down. An ellipse is one continuous speed.',
          },
          'That is a clean ellipse. Now do it at three different degrees.',
        ),
        overlay: (ctx) => {
          ctx.save();
          ctx.setLineDash([9, 9]);
          ctx.strokeStyle = MARK;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(e.cx, e.cy, e.rx, e.ry, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
          deviationOverlay(
            s,
            (p) => Math.abs(Math.hypot((p.x - e.cx) / e.rx, (p.y - e.cy) / e.ry) - 1) * e.ry,
            e.ry * 0.14,
          )(ctx);
        },
      };
    },
  },

  /* 6. No guide — can you repeat yourself? */
  'ellipse-repeat': {
    id: 'ellipse-repeat',
    name: 'Three matching ellipses',
    prompt: 'Draw three ellipses of the same size and angle. No guide this time.',
    strokes: 3,
    build() {
      return { dots: [] };
    },
    guide() {
      /* deliberately blank — repeating without a target is the point */
    },
    grade(strokes) {
      const round = Math.round(strokes.reduce((a, s) => a + roundness(s), 0) / strokes.length);
      const close = Math.round(strokes.reduce((a, s) => a + closure(s), 0) / strokes.length);
      const match = consistency(strokes.map((s) => s));
      const metrics = [
        { label: 'Evenness', value: round },
        { label: 'Closure', value: close },
        { label: 'Match', value: match },
      ];
      return {
        score: weighted([
          [round, 1.5],
          [close, 1],
          [match, 1.2],
        ]),
        metrics,
        verdict: coach(
          metrics,
          {
            Evenness: 'One side is flatter than the other. Keep the orbit speed constant all the way round.',
            Closure: 'Let the loop overlap itself rather than trying to meet exactly.',
            Match: 'Sizes drifted. Fix your elbow position and let the same motion repeat.',
          },
          'Repeatable ellipses. That is the hard one — wheels and eyes both live here.',
        ),
      };
    },
  },

  /* 7. Freehand circle, judged on radius consistency. */
  'circle-free': {
    id: 'circle-free',
    name: 'Freehand circle',
    prompt: 'One circle, drawn fast. Fast is what makes it round.',
    strokes: 1,
    build() {
      return { dots: [] };
    },
    guide() {
      /* no guide */
    },
    grade(strokes) {
      const s = strokes[0];
      const round = roundness(s);
      const close = closure(s);
      const smooth = smoothness(s, Math.PI * 2);
      const metrics = [
        { label: 'Roundness', value: round },
        { label: 'Closure', value: close },
        { label: 'Smoothness', value: smooth },
      ];
      return {
        score: weighted([
          [round, 2],
          [close, 1],
          [smooth, 1],
        ]),
        metrics,
        verdict: coach(
          metrics,
          {
            Roundness: 'Egg-shaped. Rotate your wrist position — you are drawing the arc your joint prefers.',
            Closure: 'Carry the stroke past its start point.',
            Smoothness: 'Slowing down mid-circle adds flat spots. One speed, all the way round.',
          },
          'Round and closed. Circles are just ellipses viewed head-on.',
        ),
      };
    },
  },

  /* 8. Hatching: value control, judged on angle and spacing. */
  hatch: {
    id: 'hatch',
    name: 'Even hatching',
    prompt: 'Fill the box with eight parallel strokes. Same angle, same gap, every time.',
    strokes: 8,
    build(rnd) {
      const w = 380;
      const h = 250;
      return {
        dots: [],
        rect: { x: rangeRnd(rnd, 160, 320), y: rangeRnd(rnd, 90, 140), w, h },
      };
    },
    guide(ctx, t) {
      if (!t.rect) return;
      ctx.save();
      ctx.setLineDash([8, 8]);
      ctx.strokeStyle = 'rgba(43,43,51,0.35)';
      ctx.lineWidth = 2;
      ctx.strokeRect(t.rect.x, t.rect.y, t.rect.w, t.rect.h);
      ctx.restore();
    },
    grade(strokes) {
      const para = parallelism(strokes);
      const space = spacingEvenness(strokes);
      const straight = Math.round(
        strokes.reduce((a, s) => a + straightness(s), 0) / strokes.length,
      );
      const metrics = [
        { label: 'Parallelism', value: para },
        { label: 'Spacing', value: space },
        { label: 'Straightness', value: straight },
      ];
      return {
        score: weighted([
          [para, 1.5],
          [space, 1.5],
          [straight, 1],
        ]),
        metrics,
        verdict: coach(
          metrics,
          {
            Parallelism: 'Your angle fanned out. Keep the arm fixed and move only along one axis.',
            Spacing: 'Gaps are uneven, which reads as texture instead of value. Set a rhythm and keep it.',
            Straightness: 'Individual strokes are bowing. Shorter, faster strokes will fix this.',
          },
          'Even value. This is what turns line art into shading.',
        ),
      };
    },
  },

  /* 9. Open pad, no scoring. */
  'free-sketch': {
    id: 'free-sketch',
    name: 'Free pad',
    prompt: 'Nothing is being measured here. Warm up, or try what the lesson just showed you.',
    strokes: 999,
    free: true,
    build() {
      return { dots: [] };
    },
    guide() {
      /* blank paper */
    },
    grade() {
      return { score: 0, metrics: [], verdict: '' };
    },
  },
};
