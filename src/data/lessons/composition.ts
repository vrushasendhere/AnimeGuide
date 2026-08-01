import type { Track } from '../types';

export const composition: Track = {
  id: 'composition',
  title: 'Composition',
  glyph: '🖼️',
  accent: '#f0a868',
  blurb: 'Where things go in the frame, and why that decides whether anyone looks.',
  lessons: [
    {
      id: 'comp-frame',
      title: 'The frame and the thirds',
      tagline: 'Composition only exists relative to edges. The frame is your first decision.',
      minutes: 12,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'cp-thirds', caption: 'Divide the frame in thirds. Put what matters on a line, or better, on an intersection.' },
        {
          kind: 'compare',
          title: 'The same subject, two placements',
          badDemo: 'cp-centered',
          goodDemo: 'cp-thirds',
          badLabel: 'Dead centre — static and airless',
          goodLabel: 'On an intersection — the frame breathes',
        },
        {
          kind: 'checklist',
          title: 'Using it honestly',
          items: [
            'Thirds is a starting guess, not a law. It fails you less often than centring does.',
            'Centre deliberately for symmetry, confrontation or stillness — never by accident.',
            'Leave space in the direction a character faces or moves. Crowding the face reads as tension.',
            'Decide the aspect ratio first. A 16:9 shot and a vertical panel want different arrangements.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Use the Rule of Thirds to Improve Your Compositions',
          id: 'OSHtvWeddTI',
          channel: 'YouTube',
          why: 'The rule, then the cases where breaking it is the better call.',
        },
        {
          kind: 'video',
          title: 'How to Use the Rule of Thirds for Digital Art',
          id: 'DlW6xOi8gAg',
          channel: 'YouTube',
          why: 'Applied on a digital canvas with a grid overlay.',
        },
      ],
    },

    {
      id: 'comp-eyepath',
      title: 'Leading the eye',
      tagline: 'You are choosing the order in which someone sees your drawing.',
      minutes: 14,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'cp-eyepath', caption: 'The eye enters somewhere, travels a path, and must not fall out of the frame.' },
        { kind: 'demo', title: 'Leading lines', demo: 'cp-leadinglines', caption: 'Roads, rails, rooftops, arms, gazes — anything linear points, whether you meant it to or not.' },
        {
          kind: 'checklist',
          title: 'Controlling the path',
          items: [
            'Entry point: usually lower left, because that is where reading habits start.',
            'Give the eye a loop, not a straight exit. Lines running off the edge leak attention.',
            'A character looking off-frame sends the viewer with them. Point the gaze inward.',
            'Converging lines are the strongest pointer you have. Aim them at the focal point.',
          ],
        },
        {
          kind: 'video',
          title: 'Framing and Shot Composition — Storyboarding and Animation',
          id: 'aWqslzkEt5Q',
          channel: 'YouTube',
          why: 'Framing decisions specifically for animated shots rather than still illustration.',
        },
      ],
    },

    {
      id: 'comp-values',
      title: 'Value structure and notan',
      tagline: 'If it does not read in two values, colour will not save it.',
      minutes: 18,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'cp-notan', caption: 'Notan: reduce the whole image to black and white. If the read survives, the composition is sound.' },
        { kind: 'demo', title: 'Three-value blocking', demo: 'cp-threevalues', caption: 'Light, mid, dark — clearly separated. Most weak paintings are three values that have drifted into one.' },
        {
          kind: 'checklist',
          title: 'The method',
          items: [
            'Thumbnail in two values before anything else. Two minutes, and it settles the whole image.',
            'Then three values. Group everything into light, mid or dark — nothing in between.',
            'Keep your focal point at the biggest value contrast in the picture.',
            'Squint at your screen. Whatever survives squinting is your actual composition.',
          ],
        },
        {
          kind: 'video',
          title: 'Practice Simplifying Values with Notan Studies',
          id: 'ACJqXFyFVQw',
          channel: 'YouTube',
          why: 'Reducing an image to two or three values as a repeatable exercise.',
        },
        {
          kind: 'video',
          title: 'Using Notan Sketches to Strengthen Composition',
          id: 'TbNOt0FA4y8',
          channel: 'YouTube',
          why: 'Where notan sits in the process, before any rendering.',
        },
      ],
    },

    {
      id: 'comp-focal',
      title: 'The focal point',
      tagline: 'One place to look. Two focal points means none.',
      minutes: 12,
      level: 'building',
      blocks: [
        {
          kind: 'compare',
          title: 'Where does your eye go?',
          badDemo: 'cp-focal-flat',
          goodDemo: 'cp-focal-contrast',
          badLabel: 'Everything equal — nowhere to look',
          goodLabel: 'One value break — the eye lands instantly',
        },
        {
          kind: 'reference',
          title: 'Ways to make something the focal point',
          columns: ['Tool', 'How it works'],
          rows: [
            { k: 'Value contrast', v: 'The lightest light against the darkest dark', note: 'By far the strongest. Use this first.' },
            { k: 'Saturation', v: 'One saturated area in a muted field' },
            { k: 'Detail density', v: 'Rendered detail here, suggestion everywhere else', note: 'Ties directly to the detail-budget idea in Smart Work.' },
            { k: 'Isolation', v: 'Space around the subject while everything else clusters' },
            { k: 'Convergence', v: 'Lines and gazes aiming at it' },
            { k: 'Sharp edges', v: 'Crisp edges read as near and important; soft edges recede' },
          ],
        },
        {
          kind: 'demo',
          title: 'Group small things into one shape',
          demo: 'cp-bigshape',
          caption: 'Scattered elements compete. Grouped into one silhouette, they become a single readable statement.',
        },
      ],
    },

    {
      id: 'comp-depth',
      title: 'Depth',
      tagline: 'Three planes and some atmosphere turn a flat image into a place.',
      minutes: 15,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'cp-depth', caption: 'Foreground, midground, background. Anime backgrounds are almost always built on exactly these three.' },
        { kind: 'demo', title: 'Atmospheric perspective', demo: 'cp-atmospheric', caption: 'Further away means lighter, bluer and lower contrast. It costs nothing and reads instantly.' },
        {
          kind: 'checklist',
          title: 'Building depth',
          items: [
            'Overlap is the cheapest depth cue there is. If A covers B, B is behind.',
            'A dark foreground element framing the shot creates instant space.',
            'Reduce contrast and saturation as things recede — not just size.',
            'Put the character in the midground. Foreground frames, background situates.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Use Foreground, Midground and Background to Clarify Depth',
          id: 'Ozs_uuV8oDg',
          channel: 'YouTube',
          why: 'The three-plane approach demonstrated directly.',
        },
        {
          kind: 'video',
          title: 'How to Create Atmospheric Perspective',
          id: 'bHkjaZzQreE',
          channel: 'YouTube',
          why: 'The colour and contrast shifts that sell distance.',
        },
      ],
    },

    {
      id: 'comp-shots',
      title: 'Shots and camera angles',
      tagline: 'Anime composition is film composition. The camera is a character.',
      minutes: 18,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'cp-shotsizes', caption: 'Shot size is a choice about intimacy: wide for context, close for feeling.' },
        { kind: 'demo', title: 'Camera height', demo: 'cp-angles', caption: 'Low angle makes a character powerful, high angle makes them small. It is that literal.' },
        { kind: 'demo', title: 'The dutch angle', demo: 'cp-dutch', caption: 'Tilt the horizon and the viewer feels something is wrong — before they work out what.' },
        {
          kind: 'reference',
          title: 'Shot sizes',
          columns: ['Shot', 'Use'],
          rows: [
            { k: 'Extreme wide', v: 'Establish the place. Character is tiny or absent' },
            { k: 'Wide / full', v: 'Whole body. Action, fights, body language' },
            { k: 'Medium', v: 'Waist up. Dialogue, the everyday workhorse shot' },
            { k: 'Close-up', v: 'Face. Emotion' },
            { k: 'Extreme close-up', v: 'Eyes, a hand, an object', note: 'Anime leans on this hard for dramatic beats.' },
          ],
        },
        {
          kind: 'video',
          title: '19 Essential Camera Angles & Techniques — Storyboarding & Animation',
          id: 'zzMe4BjBaH0',
          channel: 'YouTube',
          why: 'A complete vocabulary of angles in one video. The reference for this lesson.',
        },
        {
          kind: 'video',
          title: 'Cinematography (in Anime)',
          id: 'WVRJiY8rcc8',
          channel: 'YouTube',
          why: 'Analysis of how anime specifically uses the camera — the most useful one here.',
        },
      ],
    },

    {
      id: 'comp-balance',
      title: 'Balance and negative space',
      tagline: 'What you leave empty is a decision, not leftover room.',
      minutes: 12,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'cp-negative', caption: 'The empty side carries as much weight as the subject. Emptiness is a compositional element.' },
        { kind: 'demo', title: 'Visual weight', demo: 'cp-balance', caption: 'A large quiet mass balances against a small loud one. Weight is size times intensity, not size alone.' },
        {
          kind: 'checklist',
          title: 'Judging balance',
          items: [
            'Symmetry reads as formal, calm, sometimes unsettling. Asymmetry reads as natural and alive.',
            'A small saturated spot balances a large muted mass. Colour is weight.',
            'If one side feels heavy, do not add — take away from the other side.',
            'Flip the canvas horizontally. Balance problems become obvious immediately.',
          ],
        },
        {
          kind: 'practice',
          title: 'Drill: composition thumbnails',
          exercise: 'free-sketch',
          goal: 'Draw six small frames. Same subject, six placements. Pick the best and say out loud why.',
        },
      ],
    },
  ],
};
