import type { Track } from '../types';

export const workflow: Track = {
  id: 'workflow',
  title: 'Smart Work',
  glyph: '🧠',
  accent: '#4fd8e8',
  blurb: 'How to save your work, cut the work in half, and not burn out before you get good.',
  lessons: [
    {
      id: 'wf-files',
      title: 'Layers and files',
      tagline: 'The habit that decides whether a revision costs ten minutes or a whole evening.',
      minutes: 12,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'wf-layers', caption: 'Sketch, line art, flats, shading — separated. Merging is a decision you make at export, never before.' },
        { kind: 'demo', title: 'Version as you go', demo: 'wf-versions', caption: 'Save a new file at every big decision. A bad idea then costs one file instead of the whole piece.' },
        {
          kind: 'checklist',
          title: 'The setup that saves you',
          items: [
            'One layer per material for flats — skin, hair, clothes, eyes.',
            'Shading on its own layer, clipped to the flats.',
            'Name your layers. Future-you is a different person.',
            'Save v1, v2, v3 rather than overwriting. Disk is cheaper than redrawing.',
            'Keep the sketch layer forever. You will want it back.',
          ],
        },
      ],
    },

    {
      id: 'wf-limited',
      title: 'Limited animation',
      tagline: 'The trick that made an entire industry possible. Hold the expensive part, move the cheap part.',
      minutes: 15,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'wf-limited', caption: 'One held body drawing plus three mouth shapes is a whole dialogue scene. This is most of TV anime.' },
        { kind: 'demo', title: 'Reuse deliberately', demo: 'wf-reuse', caption: 'Draw the cycle once, then use it in three cuts. Build a library instead of a pile of one-offs.' },
        {
          kind: 'checklist',
          title: 'What to hold and what to move',
          items: [
            'Hold: the body, the background, anything the eye is not on.',
            'Move: mouths, eyes, hair, and whatever the shot is actually about.',
            'A pan across a still drawing reads as motion for free.',
            'Repeat cycles. Nobody counts your walk frames.',
          ],
        },
      ],
    },

    {
      id: 'wf-thumbnails',
      title: 'Thumbnail first',
      tagline: 'The cheapest fix is always the earliest one.',
      minutes: 10,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'wf-thumbnails', caption: 'Four thumbnails cost six minutes. Discovering the composition is wrong after rendering costs a day.' },
        {
          kind: 'checklist',
          title: 'How to thumbnail',
          items: [
            'Tiny — no bigger than a matchbox. Detail is impossible, which is the point.',
            'Four minimum. The first idea is almost never the best one.',
            'Judge them squinting, from across the room.',
            'Then scale up the winner and commit.',
          ],
        },
      ],
    },

    {
      id: 'wf-errors',
      title: 'Catching your own errors',
      tagline: 'Your eye adapts to your mistakes within about ten minutes. These tricks reset it.',
      minutes: 10,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'wf-flip', caption: 'Flip the canvas horizontally. Whatever suddenly looks wrong was always wrong.' },
        {
          kind: 'checklist',
          title: 'Four resets',
          items: [
            'Flip horizontally every ten minutes.',
            'Zoom out until the drawing is thumbnail-sized.',
            'Squint until only values remain.',
            'Walk away for five minutes. Genuinely the strongest one.',
          ],
        },
        {
          kind: 'practice',
          title: 'Free pad',
          exercise: 'free-sketch',
          goal: 'Draw a face, then physically flip your head sideways and look again. Same effect, no software needed.',
        },
      ],
    },

    {
      id: 'wf-budget',
      title: 'Spending detail wisely',
      tagline: 'Detail is a budget. Most people spend it evenly, which is the same as spending it badly.',
      minutes: 10,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'wf-detail', caption: '80% of the detail belongs in 20% of the frame — usually the face. The corners can stay suggestions.' },
        { kind: 'demo', title: 'Work big, ship small', demo: 'wf-canvassize', caption: 'Draw oversized and export down. Errors shrink; nothing is gained by working at final size.' },
        {
          kind: 'checklist',
          title: 'Where to spend',
          items: [
            'Face and hands: maximum detail.',
            'Torso and clothing: medium — let the folds imply themselves.',
            'Background and edges: minimum. Suggest, do not render.',
            'If everything is detailed, nothing is important.',
          ],
        },
      ],
    },

    {
      id: 'wf-speed',
      title: 'Working faster',
      tagline: 'Not rushing. Removing the friction between deciding and drawing.',
      minutes: 12,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'wf-shortcuts', caption: 'Every trip to a menu is a break in your attention. Learn eight shortcuts and never take one again.' },
        { kind: 'demo', title: 'Batch, do not finish', demo: 'wf-batch', caption: 'Flats on every frame, THEN shadows on every frame. Switching tools is the tax — pay it once.' },
        {
          kind: 'checklist',
          title: 'Setup, once',
          items: [
            'Bind brush, eraser, size up/down, colour picker, undo, transform.',
            'Bind previous/next frame if you are animating. You will hit these thousands of times.',
            'Keep one brush. Brush-shopping is procrastination with a progress bar.',
            'Templates: a saved canvas with your layer stack already built.',
          ],
        },
      ],
    },

    {
      id: 'wf-reference',
      title: 'Using reference',
      tagline: 'Working without reference is not more authentic. It is just slower and worse.',
      minutes: 10,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'wf-reference', caption: 'Build a board before you start. Pose, lighting, costume, style — four references, not one.' },
        {
          kind: 'checklist',
          title: 'How to use it honestly',
          items: [
            'Reference for information, not for copying — study it, then look away and draw.',
            'Photograph your own hands and face. Free, unlimited, correctly lit.',
            'Collect the shapes you struggle with, not the drawings you admire.',
            'Anime is itself heavily referenced. So is everything else.',
          ],
        },
      ],
    },

    {
      id: 'wf-plan',
      title: 'A practice plan that survives',
      tagline: 'The people who get good are the ones who were still drawing in month nine.',
      minutes: 8,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'fx-warmup', caption: 'Warm up, one focused drill, one real drawing. Thirty minutes. Repeatable on a bad day.' },
        {
          kind: 'checklist',
          title: 'The session',
          items: [
            '5 min — warm-up: lines, ellipses, boxes. Never skip.',
            '10 min — one drill from Track 1, scored. Beat your best.',
            '15 min — one real drawing using whatever you last learned.',
            'Stop on time even if it is going well. Especially if it is going well.',
            'Keep every drawing. Progress is invisible day to day and obvious across months.',
          ],
        },
        {
          kind: 'practice',
          title: 'Warm up right now',
          exercise: 'line-dots',
          goal: 'One drill, one score. That is a complete session on a day when nothing else happens.',
        },
      ],
    },
  ],
};
