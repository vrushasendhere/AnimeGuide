import type { Lesson, Track } from './types';
import { fundamentals } from './lessons/fundamentals';
import { construction } from './lessons/construction';
import { style } from './lessons/style';
import { principles } from './lessons/principles';
import { advanced } from './lessons/advanced';
import { workflow } from './lessons/workflow';

/** Ordered as a path: hand control first, style and animation later. */
export const TRACKS: Track[] = [
  fundamentals,
  construction,
  style,
  principles,
  advanced,
  workflow,
];

export const ALL_LESSONS: Array<{ lesson: Lesson; track: Track }> = TRACKS.flatMap((track) =>
  track.lessons.map((lesson) => ({ lesson, track })),
);

export const TOTAL_LESSONS = ALL_LESSONS.length;

export function findLesson(id: string) {
  return ALL_LESSONS.find((e) => e.lesson.id === id);
}

export function neighbours(id: string) {
  const i = ALL_LESSONS.findIndex((e) => e.lesson.id === id);
  return {
    prev: i > 0 ? ALL_LESSONS[i - 1] : null,
    next: i >= 0 && i < ALL_LESSONS.length - 1 ? ALL_LESSONS[i + 1] : null,
  };
}
