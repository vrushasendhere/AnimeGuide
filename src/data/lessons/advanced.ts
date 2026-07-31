import type { Track } from '../types';

export const advanced: Track = {
  id: 'advanced',
  title: 'Advanced Animation',
  glyph: '🎞️',
  accent: '#a78bfa',
  blurb: 'Keys, breakdowns, inbetweens, timing charts, smears — how a shot is actually built.',
  lessons: [
    {
      id: 'an-keys',
      title: 'Keys, breakdowns, inbetweens',
      tagline: 'Three different jobs. Confusing them is why beginner animation takes ten times too long.',
      minutes: 20,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'an-keys', caption: 'Start with only the poses that carry the idea. Two drawings can already be a whole shot.' },
        {
          kind: 'steps',
          title: 'The production order',
          steps: [
            { label: 'Keys — the extremes', demo: 'an-keys', note: 'The poses the shot is about. Nothing else.' },
            { label: 'Breakdown — the flavour', demo: 'an-breakdown', note: 'Deliberately NOT the halfway pose.' },
            { label: 'Inbetweens — the filler', demo: 'an-inbetween', note: 'No decisions here. Pure execution.' },
          ],
        },
        { kind: 'demo', title: 'Why the breakdown matters most', demo: 'an-breakdown', caption: 'The halfway pose is the boring answer. Push the breakdown off centre and the same two keys become a different character.' },
        {
          kind: 'video',
          title: 'The #1 Animation Principle (How To In-Between)',
          id: '6UXjRCORV44',
          channel: 'YouTube',
          why: 'The clearest explanation of what an inbetween actually is and is not.',
        },
        {
          kind: 'video',
          title: 'Timing Chart and Inbetweening Demo in 12 Minutes',
          id: 'i-NqWAoipuY',
          channel: 'YouTube',
          why: 'Watch someone do it in real software, start to finish.',
        },
      ],
    },

    {
      id: 'an-charts',
      title: 'Timing charts',
      tagline: 'The notation that turns "make it feel heavy" into instructions someone else can follow.',
      minutes: 18,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'an-chart', caption: 'Ticks bunched at one end mean the frames crowd there, which means the motion slows down there.' },
        {
          kind: 'checklist',
          title: 'Reading a chart',
          items: [
            'Long ticks are keys. Short ticks are inbetweens.',
            'Evenly spaced ticks = constant speed.',
            'Ticks crowding at the bottom = slowing into that key.',
            'You draw the chart BEFORE the inbetweens, not after.',
          ],
        },
        {
          kind: 'video',
          title: 'All About Timing Charts for Beginners',
          id: '-32EGr19amE',
          channel: 'YouTube',
          why: 'A 2D animation guide aimed exactly at someone seeing charts for the first time.',
        },
        {
          kind: 'video',
          title: 'How to Read Timing Charts (Finally Explained Simply)',
          id: 'uZQ4GCdiCuM',
          channel: 'YouTube',
          why: 'If the first one did not land, this one comes at it from a different angle.',
        },
      ],
    },

    {
      id: 'an-spacing',
      title: 'Timing vs spacing',
      tagline: 'Timing is how many frames. Spacing is where they sit. They are not the same thing.',
      minutes: 15,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'pr-ease-good', caption: 'Same number of frames in both. Only their positions changed — and that is the entire feel of the move.' },
        {
          kind: 'checklist',
          title: 'The distinction that unlocks everything',
          items: [
            'Change the frame COUNT and you change the duration.',
            'Change the frame POSITIONS and you change the weight and personality.',
            'Most beginner animation has correct timing and terrible spacing.',
            'Fix spacing first. It costs no extra drawings.',
          ],
        },
        {
          kind: 'video',
          title: 'Timing and Spacing for Beginners (with examples)',
          id: 'I42YOM5aNKI',
          channel: 'YouTube',
          why: 'Worked examples of the same move with the spacing changed.',
        },
        {
          kind: 'video',
          title: 'The Art of Timing & Spacing — Animation Masterclass',
          id: 'iO41KtMctDE',
          channel: 'YouTube',
          why: 'The deeper version once the basics have clicked.',
        },
      ],
    },

    {
      id: 'an-arcs-onion',
      title: 'Arcs and onion skin',
      tagline: 'Two habits that catch almost every animation error before it becomes expensive.',
      minutes: 12,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'an-onion', caption: 'Onion skin shows the frames either side of the one you are drawing. Errors become obvious instead of invisible.' },
        { kind: 'demo', title: 'Draw the arc first', demo: 'an-arctrack', caption: 'Sketch the path of travel as a guide layer, then place every frame onto it.' },
        {
          kind: 'checklist',
          title: 'The check',
          items: [
            'Turn on onion skin and scrub. Any frame that jumps off the arc is wrong.',
            'Track one point at a time: the hand, then the foot, then the head.',
            'Flip back and forth between two frames rather than staring at one.',
          ],
        },
      ],
    },

    {
      id: 'an-ones-twos',
      title: 'Ones, twos and threes',
      tagline: 'How anime gets 24fps motion out of 8 drawings a second.',
      minutes: 12,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'an-onestwos', caption: 'On twos means each drawing is held for two frames. Half the work, and the eye barely notices.' },
        {
          kind: 'checklist',
          title: 'When to use what',
          items: [
            'On ones: fast action, camera moves, anything where twos would strobe.',
            'On twos: the default for almost all TV anime dialogue and walking.',
            'On threes: slow drifting motion, background characters, held poses.',
            'Mix within a single shot. Snap to ones for the impact, drop back to twos after.',
          ],
        },
        {
          kind: 'video',
          title: 'Animating Dynamically and the Sakuga TU/TB',
          id: 'AtJ38axsaTo',
          channel: 'YouTube',
          why: 'How anime uses frame rate as an expressive tool rather than a constraint.',
        },
      ],
    },

    {
      id: 'an-walk',
      title: 'The walk cycle',
      tagline: 'The first cycle worth owning. Four poses, then mirror them.',
      minutes: 30,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'an-walk', caption: 'Contact, down, passing, up. Then the same four with the legs swapped. That is a walk.' },
        { kind: 'demo', title: 'Making it loop', demo: 'an-loop', caption: 'The last frame has to hand off cleanly into the first. Test by playing it twenty times, not twice.' },
        {
          kind: 'checklist',
          title: 'The four poses',
          items: [
            'CONTACT — both feet down, legs at maximum spread.',
            'DOWN — weight lands, body at its lowest point.',
            'PASSING — one leg swings past the other, body starts rising.',
            'UP — body at its highest, pushing off.',
            'Then mirror all four for the other leg. Eight drawings, infinite walking.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Animate a Walk Cycle — 2D Animation Tutorial',
          id: '1M1wQ61DjD4',
          channel: 'YouTube',
          why: 'The traditional method, drawn out pose by pose.',
        },
        {
          kind: 'video',
          title: 'Mastering a Smooth 2D Walk Cycle in 5 Frames',
          id: '0QZcgpX-LFA',
          channel: 'YouTube',
          why: 'A stripped-down version for when eight drawings feels like too many.',
        },
      ],
    },

    {
      id: 'an-smears',
      title: 'Smears and multiples',
      tagline: 'The frames you are not supposed to consciously see.',
      minutes: 15,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'an-smear', caption: 'One stretched frame bridges a jump too big for a normal inbetween. Freeze any anime punch and you will find one.' },
        { kind: 'demo', title: 'Multiples', demo: 'an-multiples', caption: 'Draw the limb several times on one frame instead of blurring it. Cheaper and reads better.' },
        {
          kind: 'checklist',
          title: 'When to reach for a smear',
          items: [
            'The gap between two keys is so large it would strobe.',
            'You want speed without paying for more drawings.',
            'It only ever lasts one or two frames. Longer and the audience sees the trick.',
          ],
        },
        {
          kind: 'video',
          title: 'A Couple of Ways to Handle Smears in Japanese Animation',
          id: '5VgnF3QxTqM',
          channel: 'YouTube',
          why: 'Specifically the anime approach, not the western cartoon one.',
        },
        {
          kind: 'video',
          title: 'Animation Smears — Learn in Only 1 Minute',
          id: 'FxdB8E26-lw',
          channel: 'YouTube',
          why: 'Sixty second version if you just want the shape of the idea.',
        },
      ],
    },

    {
      id: 'an-sakuga',
      title: 'Sakuga',
      tagline: 'The showcase cuts. Where a studio spends its whole budget on eight seconds.',
      minutes: 20,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'an-multiples', caption: 'Sakuga is not a technique so much as a decision: pick one cut and animate it far past what the schedule allows.' },
        {
          kind: 'checklist',
          title: 'What makes a cut read as sakuga',
          items: [
            'Full limb animation instead of held bodies with moving mouths.',
            'Aggressive perspective — the character moves toward and away from camera.',
            'Impact frames, smears and multiples used heavily.',
            'Timing contrast: long anticipation, two frames of action, long settle.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Animate Anime Sakuga in 2 Steps',
          id: 'q51kVH4XDRU',
          channel: 'YouTube',
          why: 'Aimed at exactly the beginner-to-intermediate jump.',
        },
        {
          kind: 'video',
          title: 'How to Make Anime Character Animation — Clip Studio Paint',
          id: 'V0nFFRk-EVQ',
          channel: 'YouTube',
          why: 'The same ideas in software you can actually afford.',
        },
      ],
    },
  ],
};
