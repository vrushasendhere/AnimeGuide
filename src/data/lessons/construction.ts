import type { Track } from '../types';

export const construction: Track = {
  id: 'construction',
  title: 'Construction',
  glyph: '🗿',
  accent: '#4fd8e8',
  blurb: 'Heads, faces and figures built from solids — the part that stops drawings looking flat.',
  lessons: [
    {
      id: 'ct-loomis',
      title: 'The Loomis head',
      tagline: 'The single most useful construction method ever invented. Learn it once, use it forever.',
      minutes: 20,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ct-guides', caption: 'Ball, side planes, jaw, guidelines. Same four moves at every angle, every time.' },
        {
          kind: 'steps',
          title: 'Build it in order',
          steps: [
            { label: 'Draw the ball', demo: 'ct-ball', note: 'The cranium is a sphere. Start there.' },
            { label: 'Slice the sides flat', demo: 'ct-sideplane', note: 'Heads are narrower than they are deep.' },
            { label: 'Hang the jaw', demo: 'ct-jaw', note: 'The jaw is attached, not part of the ball.' },
            { label: 'Lay the guidelines', demo: 'ct-guides', note: 'Brow, nose, mouth — only now do features exist.' },
          ],
        },
        { kind: 'demo', title: 'Turning the head', demo: 'ct-headturn', caption: 'The ball never changes shape. Only the centre line moves — and every feature follows it.' },
        {
          kind: 'practice',
          title: 'Free pad: ten heads',
          exercise: 'free-sketch',
          goal: 'Ball, slice, jaw, guides. Ten times, ten different angles. Do not draw features yet.',
        },
        {
          kind: 'video',
          title: 'How to Draw Heads with the Loomis Method',
          id: 'A6KMT4Potss',
          channel: 'DrawlikeaSir',
          why: 'Front, side and perspective in one pass, with the guidelines for every angle.',
        },
        {
          kind: 'video',
          title: 'Loomis Method — Construction for Artists',
          id: 'fON9gxSUmgk',
          channel: 'YouTube',
          why: 'A second angle on the same method. Watch both — the overlap is what sticks.',
        },
      ],
    },

    {
      id: 'ct-anime-head',
      title: 'The anime edit',
      tagline: 'Anime heads are Loomis heads with three numbers changed.',
      minutes: 12,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ct-proportion', caption: 'Bigger cranium, smaller jaw, eyes pushed below the halfway line. That is most of the style.' },
        {
          kind: 'checklist',
          title: 'The three dials',
          items: [
            'Cranium: bigger relative to the face than in life.',
            'Jaw: shorter and narrower, chin often a point.',
            'Eye line: dropped below halfway — this alone reads as "anime".',
            'Nose and mouth: shrunk to almost nothing, or implied with a single mark.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Draw Anime Heads in ANY Angle and Style',
          id: 'Aqxmf_Lgke0',
          channel: 'YouTube',
          why: 'Specifically about bending Loomis into a stylised head — exactly this lesson.',
        },
        {
          kind: 'video',
          title: 'Can You Draw Manga with the Loomis Method?',
          id: 'WWtXXfLX5G8',
          channel: 'YouTube',
          why: 'Answers the question every beginner asks after learning realistic construction.',
        },
      ],
    },

    {
      id: 'ct-eyes',
      title: 'Eyes',
      tagline: 'The highest-value 20 minutes in the whole app. Eyes carry the character.',
      minutes: 20,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ct-eye-shine', caption: 'Heavy lash, thin lid, cropped iris, two highlights. Order matters more than skill here.' },
        {
          kind: 'steps',
          title: 'Draw it in this order',
          steps: [
            { label: 'Heavy upper lash', demo: 'ct-eye-lash', note: 'Thickest line on the whole face.' },
            { label: 'Thin lower lid', demo: 'ct-eye-lid', note: 'Never the same weight as the top.' },
            { label: 'Iris, cropped', demo: 'ct-eye-iris', note: 'The lash cuts the top off. Never a floating circle.' },
            { label: 'Pupil and highlights', demo: 'ct-eye-shine', note: 'One big light, one small. Two lights = alive.' },
          ],
        },
        {
          kind: 'practice',
          title: 'Free pad: eyes',
          exercise: 'free-sketch',
          goal: 'Draw the same eye eight times. Change only the iris size and watch the character change.',
        },
        {
          kind: 'video',
          title: 'How to Draw Anime Eyes — Slow Tutorial for Beginners',
          id: '1ieh4tJ_jp8',
          channel: 'YouTube',
          why: 'Real time, no timelapse, eight different eye styles. The best kind of reference.',
        },
        {
          kind: 'video',
          title: 'How to Draw Anime Eyes — Digital Art Tutorial',
          id: '3lsedNyhBVA',
          channel: 'YouTube',
          why: 'A draw-along if you are working digitally.',
        },
      ],
    },

    {
      id: 'ct-hair',
      title: 'Hair',
      tagline: 'The mistake is drawing strands. Draw three big clumps instead.',
      minutes: 15,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ct-hair-clumps', caption: 'Hair is a solid shape with volume, sitting on top of the skull — not a texture painted onto it.' },
        {
          kind: 'steps',
          title: 'Three moves',
          steps: [
            { label: 'Skull first, then offset', demo: 'ct-hair-skull', note: 'Hair sits ABOVE the scalp. Leave the gap.' },
            { label: 'Block three big clumps', demo: 'ct-hair-clumps', note: 'Front, side, back. Not strands.' },
            { label: 'Taper every tip', demo: 'ct-hair-tips', note: 'Wide at the root, sharp at the point.' },
          ],
        },
        {
          kind: 'practice',
          title: 'Drill: the hair stroke',
          exercise: 'curve-3',
          goal: 'Every hair clump is this stroke. Get it smooth here and hair stops being hard.',
        },
        {
          kind: 'video',
          title: 'How to Draw Anime Hair and Eyes',
          id: 'XjJXJup5muI',
          channel: 'YouTube',
          why: 'Part of a step-by-step character series — hair in the context of the whole head.',
        },
      ],
    },

    {
      id: 'ct-expressions',
      title: 'Expressions',
      tagline: 'Brows and mouth do the work. The eyes get the credit.',
      minutes: 10,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ct-expressions', caption: 'Same face, same eyes. Only the brow angle and the mouth curve changed.' },
        {
          kind: 'checklist',
          title: 'Fast rules',
          items: [
            'Brows in = angry or focused. Brows up = surprised or sad.',
            'The mouth is a curve. Its direction is the emotion.',
            'Push it further than feels reasonable — see the Exaggeration principle.',
            'If an expression is not reading, cover the eyes and check the brows alone.',
          ],
        },
        {
          kind: 'practice',
          title: 'Free pad: eight faces',
          exercise: 'free-sketch',
          goal: 'One head shape, eight expressions. Change only brows and mouth.',
        },
      ],
    },

    {
      id: 'ct-figure',
      title: 'The figure',
      tagline: 'Gesture first, masses second, limbs last. Never the other way round.',
      minutes: 25,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'ct-lineofaction', caption: 'One curve through the whole body, drawn before anything else exists. This is the pose.' },
        {
          kind: 'steps',
          title: 'Four stages',
          steps: [
            { label: 'Line of action', demo: 'ct-lineofaction', note: 'One curve. Whole body. 5 seconds.' },
            { label: 'Head, ribcage, pelvis', demo: 'ct-masses', note: 'Three solids on the line.' },
            { label: 'Limbs as tapered tubes', demo: 'ct-limbs', note: 'Thick at the joint, thin at the end.' },
            { label: 'Check the head count', demo: 'ct-headcounts', note: '7 heads for a hero, 3 for chibi.' },
          ],
        },
        {
          kind: 'video',
          title: 'How to Draw Gesture — Step by Step',
          id: '8j39NqwL7s4',
          channel: 'Proko',
          why: 'Gesture is the skill that separates stiff drawings from living ones.',
        },
        {
          kind: 'video',
          title: 'Figure Drawing Fundamentals — Introduction',
          id: 'rNiBjHymU0k',
          channel: 'Proko',
          why: 'The full construction ladder: gesture, bean, robo-bean, structure.',
        },
      ],
    },

    {
      id: 'ct-hands',
      title: 'Hands',
      tagline: 'Everyone hides them. You will not have to.',
      minutes: 15,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'ct-hand-mitt', caption: 'Block the palm as a flat slab and the thumb as a wedge. Fingers do not exist yet.' },
        {
          kind: 'steps',
          title: 'Two stages, in this order',
          steps: [
            { label: 'Mitt + thumb wedge', demo: 'ct-hand-mitt', note: 'Get the plane and the angle right first.' },
            { label: 'Fingers on an arc', demo: 'ct-hand-fingers', note: 'Fingertips curve. Never a straight row.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'The three things that make hands wrong',
          items: [
            'Fingers all the same length — they arc, and the middle one is longest.',
            'Palm drawn as a rectangle instead of a wedge that tapers to the wrist.',
            'Thumb attached at the side instead of on the front plane of the palm.',
          ],
        },
      ],
    },
  ],
};
