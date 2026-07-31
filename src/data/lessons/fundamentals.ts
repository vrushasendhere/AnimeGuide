import type { Track } from '../types';

export const fundamentals: Track = {
  id: 'fundamentals',
  title: 'Line Control',
  glyph: '✏️',
  accent: '#ff5d8f',
  blurb: 'Before anything looks like anime, your hand has to do what you tell it.',
  lessons: [
    {
      id: 'fx-posture',
      title: 'Where the line comes from',
      tagline: 'Your fingers can draw 3cm. Your shoulder can draw the whole page.',
      minutes: 5,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'fx-pivots', caption: 'Bigger joint = bigger, smoother arc. This is the whole reason beginner lines wobble.' },
        {
          kind: 'steps',
          title: 'Set up before you draw anything',
          steps: [
            { label: 'Sit back from the page', demo: 'fx-pivots', note: 'Arm floating, not resting on the wrist.' },
            { label: 'Lock the wrist', demo: 'fx-ghost', note: 'The wrist steers. It does not drive.' },
            { label: 'Drive from the elbow', demo: 'fx-dot2dot', note: 'Elbow for most lines, shoulder for long ones.' },
          ],
        },
        {
          kind: 'practice',
          title: 'Get a feel for it',
          exercise: 'free-sketch',
          goal: 'Scribble long arcs across the whole pad using only your elbow. Nothing is scored here.',
        },
        {
          kind: 'checklist',
          title: 'Remember',
          items: [
            'Short strokes come from fingers, long strokes from the shoulder.',
            'If your hand is resting on the surface, you cannot draw a long line.',
            'Rotate the paper instead of contorting your arm.',
          ],
        },
      ],
    },

    {
      id: 'fx-straight-line',
      title: 'The straight line',
      tagline: 'Four moves. Every clean line in every anime frame uses all four.',
      minutes: 10,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'fx-ghost', caption: 'Rehearse the motion in the air two or three times, then put it down once.' },
        {
          kind: 'steps',
          title: 'The four moves',
          steps: [
            { label: 'Plant on the first dot', demo: 'fx-dot2dot', note: 'Pen touches down exactly where you mean it to.' },
            { label: 'Ghost the motion', demo: 'fx-ghost', note: 'Hover and swing 2–3 times. Free.' },
            { label: 'Look at the END dot', demo: 'fx-dot2dot', note: 'Your hand goes where your eyes go.' },
            { label: 'One fast pass', demo: 'fx-fast', note: 'Speed is what removes the wobble.' },
          ],
        },
        {
          kind: 'compare',
          title: 'Why slow lines fail',
          badDemo: 'fx-slow',
          goodDemo: 'fx-fast',
          badLabel: 'Slow — every tremor gets recorded',
          goodLabel: 'Fast — momentum straightens it for you',
        },
        {
          kind: 'practice',
          title: 'Drill: dot to dot',
          exercise: 'line-dots',
          goal: 'Hit both dots with one confident stroke. Aim for 85+ before moving on.',
        },
        { kind: 'demo', title: 'The hook problem', demo: 'fx-hook', caption: 'Hooked ends come from decelerating. Carry the stroke past the dot instead.' },
        {
          kind: 'video',
          title: 'Best Drawing Exercises — Asking Pros',
          id: 'HjUv0Zv0T8o',
          channel: 'Proko',
          why: '17 professional artists on which drills actually moved the needle for them.',
        },
      ],
    },

    {
      id: 'fx-line-control',
      title: 'Repeatable lines',
      tagline: 'One good line is luck. Three identical lines is skill.',
      minutes: 12,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'fx-superimposed', caption: 'Superimposed lines: same start, same end, stacked. This is how you test control.' },
        {
          kind: 'steps',
          title: 'Two drills that build control',
          steps: [
            { label: 'Superimposed lines', demo: 'fx-superimposed', note: 'Redraw over the same line 3×. Never scrub back and forth.' },
            { label: 'Break long contours', demo: 'fx-linelength', note: 'Three confident arcs beat one nervous crawl.' },
          ],
        },
        {
          kind: 'practice',
          title: 'Drill: ghosted repeats',
          exercise: 'line-ghost',
          goal: 'Three passes on the same line. Repeatability is scored higher than straightness.',
        },
        {
          kind: 'practice',
          title: 'Drill: full-width line',
          exercise: 'line-long',
          goal: 'Corner to corner in one pass. This is where wrist-drawing gets exposed.',
        },
      ],
    },

    {
      id: 'fx-curves',
      title: 'Curves with intent',
      tagline: 'Hair, jaws, cloth, arcs of motion — anime is mostly curves.',
      minutes: 8,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'fx-curve3', caption: 'Plot the points a curve must pass through, then sweep through them in one motion.' },
        {
          kind: 'steps',
          title: 'How to place a curve',
          steps: [
            { label: 'Mark 3 points', demo: 'fx-curve3', note: 'Start, peak, end.' },
            { label: 'Ghost the arc', demo: 'fx-ghost', note: 'Let the shoulder find the sweep.' },
            { label: 'One pass, no corrections', demo: 'fx-fast', note: 'A corrected curve always looks corrected.' },
          ],
        },
        {
          kind: 'practice',
          title: 'Drill: curve through three',
          exercise: 'curve-3',
          goal: 'One smooth arc through all three dots. Smoothness counts more than accuracy.',
        },
      ],
    },

    {
      id: 'fx-ellipses',
      title: 'Ellipses',
      tagline: 'Eyes, wheels, cups, shoulders, tunnels. Get these and half of construction is solved.',
      minutes: 15,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'fx-ellipse-orbit', caption: 'Orbit the shape three times above the surface, then let the pen land into the motion already happening.' },
        {
          kind: 'steps',
          title: 'The two rules that fix ellipses',
          steps: [
            { label: 'Degree = viewing angle', demo: 'fx-ellipse-degree', note: 'Edge-on is thin. Face-on is a circle.' },
            { label: 'Minor axis stays perpendicular', demo: 'fx-ellipse-axis', note: 'To the centre line of the form. Always.' },
            { label: 'Never stop mid-loop', demo: 'fx-ellipse-orbit', note: 'One constant speed all the way round.' },
          ],
        },
        {
          kind: 'practice',
          title: 'Drill: ellipse on target',
          exercise: 'ellipse-trace',
          goal: 'Trace the ghost shape in one continuous loop. The overlay will show where you drifted.',
        },
        {
          kind: 'practice',
          title: 'Drill: three matching ellipses',
          exercise: 'ellipse-repeat',
          goal: 'No guide. Same size, same angle, three times — this is the one that actually transfers.',
        },
        {
          kind: 'video',
          title: 'How to Practice Sketching Ellipses',
          id: 'J-ox0EJjd9U',
          channel: 'YouTube',
          why: 'Straight to the practice routine rather than the theory.',
        },
        {
          kind: 'video',
          title: 'How to Draw Perfect Ellipses',
          id: 'D4_DNarfEio',
          channel: 'YouTube',
          why: 'The minor-axis rule demonstrated properly — the bit most tutorials skip.',
        },
      ],
    },

    {
      id: 'fx-circles',
      title: 'Circles',
      tagline: 'A circle is an ellipse seen head on. Build it in a box and check it by flipping.',
      minutes: 8,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'fx-circle', caption: 'Square first, cross the centre, then round the corners. Freehand circles cheat by using the box.' },
        {
          kind: 'practice',
          title: 'Drill: freehand circle',
          exercise: 'circle-free',
          goal: 'No guide, no box. Fast is what makes it round.',
        },
        {
          kind: 'video',
          title: 'Improving Ellipses — Boost Your Skills',
          id: 's4ZF2-hPa2c',
          channel: 'YouTube',
          why: 'A structured practice ladder rather than "just draw more".',
        },
      ],
    },

    {
      id: 'fx-boxes',
      title: 'Boxes and perspective',
      tagline: 'Every solid thing you will ever draw fits inside a box first.',
      minutes: 18,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'fx-box', caption: 'A box you can rotate in your head is the foundation of heads, torsos, buildings and props.' },
        {
          kind: 'steps',
          title: 'Three levels of perspective',
          steps: [
            { label: 'One point', demo: 'fx-persp1', note: 'Facing you straight on. Corridors, rooms.' },
            { label: 'Two point', demo: 'fx-persp2', note: 'The everyday three-quarter view.' },
            { label: 'Three point', demo: 'fx-persp3', note: 'Looking up or down. Drama shots.' },
          ],
        },
        {
          kind: 'practice',
          title: 'Free pad: boxes',
          exercise: 'free-sketch',
          goal: 'Draw twenty boxes at random angles. Do not erase any of them.',
        },
        {
          kind: 'video',
          title: 'Perspective Drawing — Drawing Ellipses',
          id: 'jYdcOJBcFeY',
          channel: 'YouTube',
          why: 'Where ellipses and perspective meet — cylinders in space.',
        },
      ],
    },

    {
      id: 'fx-hatching',
      title: 'Hatching and value',
      tagline: 'Controlled repetition is how a line drawing becomes a shaded one.',
      minutes: 10,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'fx-hatch', caption: 'Same angle, same gap. The moment the angle fans out it reads as texture instead of tone.' },
        { kind: 'demo', title: 'Going darker', demo: 'fx-hatch-cross', caption: 'Cross a second layer over the first rather than pressing harder.' },
        {
          kind: 'practice',
          title: 'Drill: even hatching',
          exercise: 'hatch',
          goal: 'Eight parallel strokes in the box. Parallelism and spacing are what get scored.',
        },
      ],
    },

    {
      id: 'fx-warmup',
      title: 'The five-minute warm-up',
      tagline: 'The routine you run before every single session, forever.',
      minutes: 5,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'fx-warmup', caption: 'Lines, ellipses, boxes. Five minutes. Non-negotiable.' },
        {
          kind: 'checklist',
          title: 'The routine',
          items: [
            '20 ghosted straight lines, alternating direction.',
            '20 ellipses at three different degrees.',
            '10 boxes in random rotations.',
            'Never erase during warm-up. The bad ones are data.',
            'Then start your real work — with the hand already calibrated.',
          ],
        },
        {
          kind: 'practice',
          title: 'Run it now',
          exercise: 'free-sketch',
          goal: 'Use the free pad. Lines, then ellipses, then boxes.',
        },
      ],
    },
  ],
};
