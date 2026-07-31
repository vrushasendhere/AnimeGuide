/**
 * Content model.
 *
 * A lesson is a list of blocks. Blocks are deliberately visual-first: every
 * one of them renders a moving or interactive picture, and text is capped at a
 * short label. If a block needs a paragraph to make sense, it's the wrong block.
 */

export type Block =
  | HeroBlock
  | StepsBlock
  | DemoBlock
  | PracticeBlock
  | VideoBlock
  | CompareBlock
  | ChecklistBlock;

/** Big animated opener that states the idea in one motion. */
export interface HeroBlock {
  kind: 'hero';
  /** Key into the demo registry (src/components/demos/index.tsx). */
  demo: string;
  caption: string;
}

/** Ordered step cards. Each step gets its own small animated figure. */
export interface StepsBlock {
  kind: 'steps';
  title: string;
  steps: Step[];
}

export interface Step {
  /** 2-6 words. This is a label, not a sentence. */
  label: string;
  /** Key into the demo registry. */
  demo: string;
  /** Optional one-line "why", shown small and muted. */
  note?: string;
}

/** A single standalone animated demo with a replay control. */
export interface DemoBlock {
  kind: 'demo';
  title: string;
  demo: string;
  caption?: string;
}

/** Hands-on canvas drill that grades the stroke you actually draw. */
export interface PracticeBlock {
  kind: 'practice';
  title: string;
  /** Key into the exercise registry (src/components/practice/exercises.ts). */
  exercise: string;
  goal: string;
}

/** Embedded YouTube lesson. */
export interface VideoBlock {
  kind: 'video';
  title: string;
  /** YouTube video id. */
  id: string;
  channel: string;
  why: string;
}

/** Side-by-side "weak vs strong" animated comparison. */
export interface CompareBlock {
  kind: 'compare';
  title: string;
  badDemo: string;
  goodDemo: string;
  badLabel: string;
  goodLabel: string;
}

/** Short scannable takeaways. Used sparingly, at the end of a lesson. */
export interface ChecklistBlock {
  kind: 'checklist';
  title: string;
  items: string[];
}

export interface Lesson {
  id: string;
  title: string;
  /** One line shown in the sidebar and lesson header. */
  tagline: string;
  /** Rough minutes of practice, shown as a chip. */
  minutes: number;
  level: 'starter' | 'building' | 'advanced';
  blocks: Block[];
}

export interface Track {
  id: string;
  title: string;
  /** Emoji used as the track glyph in the rail. */
  glyph: string;
  blurb: string;
  /** CSS colour used to tint the whole track. */
  accent: string;
  lessons: Lesson[];
}
