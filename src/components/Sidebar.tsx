import { useState } from 'react';
import { TOTAL_LESSONS, TRACKS } from '../data/curriculum';
import { currentStreak, resetProgress, useProgress } from '../hooks/useProgress';

export default function Sidebar({
  currentId,
  onSelect,
}: {
  currentId: string;
  onSelect: (id: string) => void;
}) {
  const progress = useProgress();
  const doneCount = Object.keys(progress.done).length;
  const streak = currentStreak(progress.sessions);

  // The track holding the current lesson starts open; the rest collapse.
  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const owner = TRACKS.find((t) => t.lessons.some((l) => l.id === currentId));
    return owner ? { [owner.id]: true } : { [TRACKS[0].id]: true };
  });

  return (
    <aside className="rail">
      <div className="rail__brand">
        <div className="rail__logo">
          <span className="mark">◈</span>
          AnimeGuide
        </div>
        <div className="rail__tagline">zero → anime, one drill at a time</div>
      </div>

      <nav className="rail__scroll">
        <button
          className={`journallink ${currentId === 'journal' ? 'active' : ''}`}
          onClick={() => onSelect('journal')}
        >
          <span className="journallink__glyph">📓</span>
          <span className="journallink__label">Practice journal</span>
          {streak > 0 && <span className="journallink__streak">{streak}🔥</span>}
        </button>

        {TRACKS.map((track) => {
          const isOpen = open[track.id] ?? false;
          const trackDone = track.lessons.filter((l) => progress.done[l.id]).length;
          return (
            <div className="track" key={track.id} style={{ ['--tint' as string]: track.accent }}>
              <button
                className="track__head"
                onClick={() => setOpen((o) => ({ ...o, [track.id]: !isOpen }))}
              >
                <span className={`track__chevron ${isOpen ? 'open' : ''}`}>▶</span>
                <span className="track__glyph">{track.glyph}</span>
                <span className="track__title">{track.title}</span>
                <span className="track__count">
                  {trackDone}/{track.lessons.length}
                </span>
              </button>
              {isOpen && (
                <div className="track__lessons">
                  {track.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      className={`lessonlink ${lesson.id === currentId ? 'active' : ''}`}
                      onClick={() => onSelect(lesson.id)}
                    >
                      <span className={`lessonlink__dot ${progress.done[lesson.id] ? 'done' : ''}`} />
                      {lesson.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="rail__progress">
        <div className="rail__progress-top">
          <span>progress</span>
          <span>
            {doneCount}/{TOTAL_LESSONS}
          </span>
        </div>
        <div className="meter">
          <div className="meter__fill" style={{ width: `${(doneCount / TOTAL_LESSONS) * 100}%` }} />
        </div>
        {doneCount > 0 && (
          <button
            className="rail__reset"
            onClick={() => {
              if (confirm('Reset all lesson progress and drill scores?')) resetProgress();
            }}
          >
            reset progress
          </button>
        )}
      </div>
    </aside>
  );
}
