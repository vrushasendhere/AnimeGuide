import type { Lesson, Track } from './types';
import { fundamentals } from './lessons/fundamentals';
import { construction } from './lessons/construction';
import { perspective } from './lessons/perspective';
import { composition } from './lessons/composition';
import { cinematography } from './lessons/cinematography';
import { colour } from './lessons/colour';
import { style } from './lessons/style';
import { cute } from './lessons/cute';
import { chardesign } from './lessons/chardesign';
import { effects } from './lessons/effects';
import { principles } from './lessons/principles';
import { advanced } from './lessons/advanced';
import { clipstudio } from './lessons/clipstudio';
import { workflow } from './lessons/workflow';

/**
 * Ordered as a path: hand control, then what to draw, then the space it sits
 * in, then how to arrange, colour and finish it, then motion.
 *
 * Colour & Light comes before Style & Cel Shading because cel shading is an
 * application of colour theory, not a substitute for it. The software track
 * sits late — it is far more useful once you know what to ask the tool for.
 */
export const TRACKS: Track[] = [
  fundamentals,
  construction,
  perspective,
  composition,
  cinematography,
  colour,
  style,
  cute,
  chardesign,
  effects,
  principles,
  advanced,
  clipstudio,
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
