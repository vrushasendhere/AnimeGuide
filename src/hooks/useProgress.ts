import { useSyncExternalStore } from 'react';

/**
 * localStorage-backed store for lesson completion, drill scores and the
 * practice log.
 *
 * Every attempt is kept, not just the best one: the curve over weeks is the
 * thing that actually tells you whether you are improving, and a single
 * high-water mark throws that away.
 */

const KEY = 'animeguide.progress.v2';
const LEGACY_KEY = 'animeguide.progress.v1';

/** Ring-buffer cap per drill, so a year of daily practice cannot bloat storage. */
const MAX_ATTEMPTS = 400;

export interface Attempt {
  /** Epoch ms. */
  t: number;
  /** 0-100. */
  s: number;
}

export interface ProgressState {
  done: Record<string, true>;
  best: Record<string, number>;
  attempts: Record<string, Attempt[]>;
  /** ISO yyyy-mm-dd for every day with at least one attempt. */
  sessions: string[];
}

const empty: ProgressState = { done: {}, best: {}, attempts: {}, sessions: [] };

export const todayISO = () => new Date().toLocaleDateString('en-CA');

function read(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw) as Partial<ProgressState>;
      return {
        done: p.done ?? {},
        best: p.best ?? {},
        attempts: p.attempts ?? {},
        sessions: p.sessions ?? [],
      };
    }
    // Carry v1 forward rather than silently resetting someone's progress.
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) {
      const p = JSON.parse(legacy) as Partial<ProgressState>;
      return { done: p.done ?? {}, best: p.best ?? {}, attempts: {}, sessions: [] };
    }
    return empty;
  } catch {
    return empty;
  }
}

let state: ProgressState = typeof localStorage === 'undefined' ? empty : read();
const listeners = new Set<() => void>();

function commit(next: ProgressState) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* private mode or quota — progress just won't persist */
  }
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useProgress(): ProgressState {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => empty,
  );
}

export function toggleDone(lessonId: string) {
  const done = { ...state.done };
  if (done[lessonId]) delete done[lessonId];
  else done[lessonId] = true;
  commit({ ...state, done });
}

/** Log an attempt. Always recorded, even when it is worse than your best. */
export function recordScore(exerciseId: string, score: number) {
  const prior = state.attempts[exerciseId] ?? [];
  const next = [...prior, { t: Date.now(), s: score }].slice(-MAX_ATTEMPTS);

  const day = todayISO();
  const sessions = state.sessions.includes(day) ? state.sessions : [...state.sessions, day];

  commit({
    ...state,
    attempts: { ...state.attempts, [exerciseId]: next },
    best: { ...state.best, [exerciseId]: Math.max(score, state.best[exerciseId] ?? 0) },
    sessions,
  });
}

export function resetProgress() {
  commit({ done: {}, best: {}, attempts: {}, sessions: [] });
}

/* ---------------- derived stats ---------------- */

const dayMs = 86400000;

/** Consecutive practice days ending today or yesterday. */
export function currentStreak(sessions: string[]): number {
  if (sessions.length === 0) return 0;
  const set = new Set(sessions);
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  // A streak survives until the end of today, so start from yesterday if needed.
  let cursor = now.getTime();
  if (!set.has(new Date(cursor).toLocaleDateString('en-CA'))) {
    cursor -= dayMs;
    if (!set.has(new Date(cursor).toLocaleDateString('en-CA'))) return 0;
  }

  let n = 0;
  while (set.has(new Date(cursor).toLocaleDateString('en-CA'))) {
    n++;
    cursor -= dayMs;
  }
  return n;
}

export function longestStreak(sessions: string[]): number {
  if (sessions.length === 0) return 0;
  const days = [...new Set(sessions)].sort();
  let best = 1;
  let run = 1;
  for (let i = 1; i < days.length; i++) {
    const prev = new Date(days[i - 1]).getTime();
    const cur = new Date(days[i]).getTime();
    run = Math.round((cur - prev) / dayMs) === 1 ? run + 1 : 1;
    if (run > best) best = run;
  }
  return best;
}

/**
 * Improvement signal: mean of the last few attempts minus mean of the first few.
 * Returns null until there is enough data for the comparison to mean anything.
 */
export function trend(attempts: Attempt[], window = 5): number | null {
  if (attempts.length < window * 2) return null;
  const mean = (a: Attempt[]) => a.reduce((s, x) => s + x.s, 0) / a.length;
  return Math.round(mean(attempts.slice(-window)) - mean(attempts.slice(0, window)));
}
