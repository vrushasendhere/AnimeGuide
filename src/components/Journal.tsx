import { EXERCISES } from './practice/exercises';
import { TOTAL_LESSONS } from '../data/curriculum';
import {
  currentStreak,
  longestStreak,
  trend,
  useProgress,
  todayISO,
  type Attempt,
} from '../hooks/useProgress';

/* ------------------------------------------------------------------
   The practice log. Everything here is derived from drill attempts and
   lesson completion — nothing has to be entered by hand, because a
   journal you have to remember to fill in is a journal you stop using.
   ------------------------------------------------------------------ */

const dayMs = 86400000;
const HEATMAP_WEEKS = 18;

function Stat({ value, label, tone }: { value: string | number; label: string; tone?: string }) {
  return (
    <div className="jstat">
      <div className="jstat__v" style={tone ? { color: tone } : undefined}>
        {value}
      </div>
      <div className="jstat__l">{label}</div>
    </div>
  );
}

/** Score-over-time line, with the personal best drawn as a reference rule. */
function ScoreChart({ attempts, best }: { attempts: Attempt[]; best: number }) {
  const W = 520;
  const H = 110;
  const pad = 6;

  if (attempts.length < 2) {
    return (
      <div className="jchart__empty">
        {attempts.length === 1
          ? 'One attempt logged. Two more and the curve starts to mean something.'
          : 'No attempts yet.'}
      </div>
    );
  }

  const n = attempts.length;
  const x = (i: number) => pad + (i / (n - 1)) * (W - pad * 2);
  const y = (s: number) => H - pad - (s / 100) * (H - pad * 2);

  const line = attempts.map((a, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(a.s).toFixed(1)}`).join(' ');
  const area = `${line} L${x(n - 1).toFixed(1)} ${H - pad} L${x(0).toFixed(1)} ${H - pad} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="jchart" preserveAspectRatio="none">
      {[25, 50, 75].map((g) => (
        <line key={g} x1={pad} y1={y(g)} x2={W - pad} y2={y(g)} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}
      <line x1={pad} y1={y(best)} x2={W - pad} y2={y(best)} stroke="#ffc857" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
      <path d={area} fill="url(#jgrad)" opacity="0.28" />
      <defs>
        <linearGradient id="jgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff5d8f" />
          <stop offset="100%" stopColor="#ff5d8f" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={line} fill="none" stroke="#ff5d8f" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {attempts.map((a, i) => (
        <circle key={i} cx={x(i)} cy={y(a.s)} r={n > 60 ? 1.4 : 2.4} fill="#ff8fb0" />
      ))}
    </svg>
  );
}

/** Practice-day grid, most recent week on the right. */
function Heatmap({ sessions }: { sessions: string[] }) {
  const set = new Set(sessions);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Wind back to the most recent Sunday so columns line up as weeks.
  const end = today.getTime() - today.getDay() * dayMs + 6 * dayMs;
  const cells: Array<{ iso: string; on: boolean; future: boolean }> = [];

  for (let w = HEATMAP_WEEKS - 1; w >= 0; w--) {
    for (let d = 0; d < 7; d++) {
      const t = end - w * 7 * dayMs - (6 - d) * dayMs;
      const iso = new Date(t).toLocaleDateString('en-CA');
      cells.push({ iso, on: set.has(iso), future: t > today.getTime() });
    }
  }

  return (
    <div className="heat">
      {cells.map((c) => (
        <span
          key={c.iso}
          className={`heat__c ${c.on ? 'on' : ''} ${c.future ? 'future' : ''} ${c.iso === todayISO() ? 'today' : ''}`}
          title={`${c.iso}${c.on ? ' — practised' : ''}`}
        />
      ))}
    </div>
  );
}

export default function Journal({ onNavigate }: { onNavigate: (id: string) => void }) {
  const progress = useProgress();
  const { attempts, best, done, sessions } = progress;

  const drills = Object.keys(attempts)
    .filter((id) => (attempts[id]?.length ?? 0) > 0)
    .sort((a, b) => (attempts[b]?.length ?? 0) - (attempts[a]?.length ?? 0));

  const totalAttempts = drills.reduce((s, id) => s + attempts[id].length, 0);
  const lessonsDone = Object.keys(done).length;
  const streak = currentStreak(sessions);
  const longest = longestStreak(sessions);

  return (
    <div className="wrap" style={{ ['--tint' as string]: '#ffc857' }}>
      <header className="lhead">
        <div className="lhead__crumb">
          <span>📓</span>
          Practice journal
        </div>
        <h1>Your curve</h1>
        <p className="lhead__tagline">
          Every drill attempt is kept, not just your best. Improvement is invisible day to day and
          obvious across weeks — this is where you see it.
        </p>
      </header>

      <div className="block">
        <div className="jstats">
          <Stat value={streak} label={streak === 1 ? 'day streak' : 'day streak'} tone="#ff5d8f" />
          <Stat value={longest} label="longest streak" />
          <Stat value={sessions.length} label="practice days" />
          <Stat value={totalAttempts} label="drill attempts" />
          <Stat value={`${lessonsDone}/${TOTAL_LESSONS}`} label="lessons done" tone="#56d98a" />
        </div>
      </div>

      <div className="block">
        <h3 className="block__title">Practice days</h3>
        <Heatmap sessions={sessions} />
        <p className="practice__goal">
          {sessions.length === 0
            ? 'Nothing logged yet. Run any scored drill and this fills in.'
            : `Last ${HEATMAP_WEEKS} weeks. Gaps are fine — long gaps are the thing to watch.`}
        </p>
      </div>

      {drills.length === 0 ? (
        <div className="block">
          <div className="jempty">
            <p>No drill data yet.</p>
            <button className="btn" onClick={() => onNavigate('fx-straight-line')}>
              Run your first drill →
            </button>
          </div>
        </div>
      ) : (
        <div className="block">
          <h3 className="block__title">Score history</h3>
          <div className="jdrills">
            {drills.map((id) => {
              const list = attempts[id];
              const ex = EXERCISES[id];
              const t = trend(list);
              const latest = list[list.length - 1].s;
              return (
                <section className="jdrill" key={id}>
                  <header className="jdrill__head">
                    <div>
                      <h4>{ex?.name ?? id}</h4>
                      <span className="jdrill__meta">
                        {list.length} attempt{list.length === 1 ? '' : 's'}
                      </span>
                    </div>
                    <div className="jdrill__nums">
                      <span className="jdrill__num">
                        <em>{latest}</em>latest
                      </span>
                      <span className="jdrill__num jdrill__num--best">
                        <em>{best[id] ?? 0}</em>best
                      </span>
                      <span
                        className="jdrill__num"
                        style={{ color: t === null ? undefined : t > 0 ? '#56d98a' : t < 0 ? '#ff6b6b' : undefined }}
                      >
                        <em>{t === null ? '—' : t > 0 ? `+${t}` : t}</em>trend
                      </span>
                    </div>
                  </header>
                  <ScoreChart attempts={list} best={best[id] ?? 0} />
                </section>
              );
            })}
          </div>
          <p className="practice__goal">
            Trend compares your last five attempts against your first five. It only appears once you
            have ten, because anything less is noise.
          </p>
        </div>
      )}
    </div>
  );
}
