import { useSyncExternalStore } from 'react';

/**
 * Tiny localStorage-backed store for lesson completion and drill high scores.
 * A module-level store keeps the sidebar meter and the lesson footer in sync
 * without threading state through the tree.
 */

const KEY = 'animeguide.progress.v1';

export interface ProgressState {
  done: Record<string, true>;
  best: Record<string, number>;
}

const empty: ProgressState = { done: {}, best: {} };

function read(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return { done: parsed.done ?? {}, best: parsed.best ?? {} };
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

export function recordScore(exerciseId: string, score: number) {
  if (score <= (state.best[exerciseId] ?? 0)) return;
  commit({ ...state, best: { ...state.best, [exerciseId]: score } });
}

export function resetProgress() {
  commit({ done: {}, best: {} });
}
