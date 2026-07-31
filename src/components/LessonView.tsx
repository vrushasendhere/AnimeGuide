import type { Lesson, Track } from '../data/types';
import { neighbours } from '../data/curriculum';
import { toggleDone, useProgress } from '../hooks/useProgress';
import { BlockView } from './blocks';

const LEVEL_LABEL: Record<Lesson['level'], string> = {
  starter: 'starter',
  building: 'building',
  advanced: 'advanced',
};

export default function LessonView({
  lesson,
  track,
  onNavigate,
}: {
  lesson: Lesson;
  track: Track;
  onNavigate: (id: string) => void;
}) {
  const progress = useProgress();
  const done = !!progress.done[lesson.id];
  const { prev, next } = neighbours(lesson.id);

  return (
    <div className="wrap" style={{ ['--tint' as string]: track.accent }}>
      <header className="lhead">
        <div className="lhead__crumb">
          <span>{track.glyph}</span>
          {track.title}
        </div>
        <h1>{lesson.title}</h1>
        <p className="lhead__tagline">{lesson.tagline}</p>
        <div className="chips">
          <span className="chip chip--level">{LEVEL_LABEL[lesson.level]}</span>
          <span className="chip">~{lesson.minutes} min</span>
          {done && <span className="chip">✓ done</span>}
        </div>
      </header>

      {lesson.blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}

      <footer className="lfoot">
        <button className="btn" disabled={!prev} onClick={() => prev && onNavigate(prev.lesson.id)}>
          ← {prev ? prev.lesson.title : 'Start'}
        </button>
        <button className="btn" disabled={!next} onClick={() => next && onNavigate(next.lesson.id)}>
          {next ? next.lesson.title : 'End'} →
        </button>
        <button className={`btn btn--done ${done ? 'is-done' : ''}`} onClick={() => toggleDone(lesson.id)}>
          {done ? '✓ Completed' : 'Mark complete'}
        </button>
      </footer>
    </div>
  );
}
