import type { Track } from '../types';

export const perspective: Track = {
  id: 'perspective',
  title: 'Perspective & Backgrounds',
  glyph: '🏙️',
  accent: '#60a5fa',
  blurb: 'Eye level, cubes, interiors, and the layered flat plates anime backgrounds are actually made of.',
  lessons: [
    {
      id: 'ps-eyelevel',
      title: 'Eye level is everything',
      tagline: 'The horizon is not where the ground ends. It is exactly your own eye height.',
      minutes: 15,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ps-eyelevel', caption: 'Same scene, three eye levels. Moving the horizon moves the viewer — that is a storytelling decision, not a technical one.' },
        { kind: 'demo', title: 'Above and below', demo: 'ps-abovebelow', caption: 'Above the horizon you see undersides. Below it you see tops. Every object in your drawing obeys this.' },
        {
          kind: 'checklist',
          title: 'The rules that follow',
          items: [
            'Decide the eye level before you draw anything else. It cannot be fixed later.',
            'Low horizon makes the subject tower — heroism, threat.',
            'High horizon makes the subject small — vulnerability, loneliness.',
            'It connects straight to Composition: this is the camera-height decision, drawn.',
          ],
        },
        {
          kind: 'video',
          title: 'How the Horizon Line Actually Works — Perspective 101',
          id: '6xUqTKQrMr0',
          channel: 'YouTube',
          why: 'Clears up the single most common misunderstanding in perspective.',
        },
        {
          kind: 'video',
          title: 'Eye Level — An Essential Perspective Tip for Artists',
          id: 'qxIcdrE9Vr8',
          channel: 'YouTube',
          why: 'Short and directly on the point of this lesson.',
        },
      ],
    },

    {
      id: 'ps-cubes',
      title: 'Cubes and convergence',
      tagline: 'If you can rotate a box convincingly, you can draw a building, a room or a mecha.',
      minutes: 20,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ps-cubes', caption: 'Verticals stay vertical. Only the horizontals converge. That single rule fixes most wonky drawings.' },
        {
          kind: 'checklist',
          title: 'Getting boxes right',
          items: [
            'Verticals stay vertical in one- and two-point perspective. Always.',
            'Horizontals converge to a vanishing point ON the horizon, never above or below it.',
            'The nearer face is larger. If it is not, your vanishing points are too close together.',
            'Vanishing points that are too close cause that "fish-eye" look beginners get.',
            'Draw through — sketch the hidden back edges. It is the only way to know the box is solid.',
          ],
        },
        {
          kind: 'practice',
          title: 'Drill: box control',
          exercise: 'free-sketch',
          goal: 'Draw a horizon, mark two vanishing points near the edges, then build ten boxes against it. Draw through every one.',
        },
        {
          kind: 'video',
          title: 'What Is the Horizon Line? (Drawing in Perspective)',
          id: 'P1x8ZIILEZ4',
          channel: 'YouTube',
          why: 'Horizon, eye level and picture plane as one connected system.',
        },
      ],
    },

    {
      id: 'ps-ellipses',
      title: 'Ellipses in perspective',
      tagline: 'Circles in space. The rule is simple and almost nobody applies it.',
      minutes: 15,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ps-ellipse', caption: 'The further an ellipse sits from eye level, the rounder it opens. On the horizon it is a straight line.' },
        {
          kind: 'checklist',
          title: 'The rules',
          items: [
            'At eye level an ellipse is a flat line. It opens as it moves away from the horizon.',
            'The minor axis points at the vanishing point — this is the rule people skip.',
            'For a cylinder, the far end is always slightly rounder than the near end.',
            'Wheels, cups, tunnels, tower tops, magic circles — all the same rule.',
          ],
        },
        {
          kind: 'practice',
          title: 'Drill: ellipse control',
          exercise: 'ellipse-trace',
          goal: 'Perspective ellipses need clean ellipses first. Come back to this drill whenever they get wobbly.',
        },
      ],
    },

    {
      id: 'ps-interiors',
      title: 'Interiors and figure scale',
      tagline: 'A room is one vanishing point and five planes. Then people have to fit in it.',
      minutes: 20,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'ps-interior', caption: 'Back wall, four corner lines. Everything else in the room hangs off that scaffold.' },
        { kind: 'demo', title: 'Placing figures', demo: 'ps-figurescale', caption: 'The trick: for people of the same height, their heads all land on the horizon regardless of distance.' },
        {
          kind: 'checklist',
          title: 'Building a room',
          items: [
            'Draw the back wall as a plain rectangle first.',
            'Put the vanishing point inside it — usually off-centre, on a thirds line.',
            'Run lines from each corner of the frame through the VP. Those are your walls, floor and ceiling.',
            'Furniture is boxes. Draw every piece as a box before adding any detail.',
            'For same-height figures at eye level, heads sit on the horizon. Feet move, heads do not.',
          ],
        },
        {
          kind: 'video',
          title: 'BG Drawing 1-Point Perspective: Horizon, Eye Level and Framing',
          id: 'EWb02FkIHDE',
          channel: 'YouTube',
          why: 'Background-specific rather than generic perspective — closest to anime BG practice.',
        },
        {
          kind: 'video',
          title: 'How to Draw Above and Below Eye Level',
          id: '01Tktv3sJMM',
          channel: 'YouTube',
          why: 'Placing objects correctly relative to the horizon once the room exists.',
        },
      ],
    },

    {
      id: 'ps-bglayers',
      title: 'How anime backgrounds are built',
      tagline: 'Not one rendered scene. Five flat plates stacked with air between them.',
      minutes: 18,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'ps-bglayers', caption: 'Sky, far hills, midground, near ground, foreground frame. Each plate is flat; the depth comes from stacking them.' },
        { kind: 'demo', title: 'Detail budget', demo: 'ps-bgdetail', caption: 'Sharp on the character, suggestion everywhere else. A background that competes with the character has failed.' },
        {
          kind: 'checklist',
          title: 'The method',
          items: [
            'Separate layers per plate — this is also what makes camera pans possible.',
            'Each plate gets lighter, bluer and lower-contrast as it recedes.',
            'A dark foreground element framing the shot creates instant depth for almost no work.',
            'Keep the character plate simple behind the head — never put busy detail behind a face.',
            'Anime backgrounds are painted, not lined. Drop the line art on the far plates.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Paint an Animation Background (Sky and Clouds)',
          id: '2nEF2vxAZqo',
          channel: 'YouTube',
          why: 'Actual Japanese animation background production technique.',
        },
      ],
    },

    {
      id: 'ps-skies',
      title: 'Skies and clouds',
      tagline: 'The most recognisable single element in anime backgrounds.',
      minutes: 16,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'ps-clouds', caption: 'Hard rim, flat lit top, one shadow tone underneath. Anime clouds are cel-shaded solids, not soft gradients.' },
        {
          kind: 'checklist',
          title: 'Drawing anime clouds',
          items: [
            'Build the silhouette from stacked bumps of varied size — never evenly repeated.',
            'Flat lit top, one shadow tone below. Two values, hard edge between them.',
            'Clouds obey perspective: bigger and further apart overhead, compressed at the horizon.',
            'A vertical sky gradient — deeper blue at the top, pale at the horizon — does most of the work.',
            'Cumulus for summer optimism, flat stratus for melancholy. Cloud type is a mood choice.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Draw Clouds: Classic Anime Sky',
          id: 'TUPlcPYWdtA',
          channel: 'YouTube',
          why: 'A professional Japanese animator demonstrating the classic sky. The reference video here.',
        },
        {
          kind: 'video',
          title: 'Making Anime-Style Sky and Clouds',
          id: '0G22X5SyUTM',
          channel: 'YouTube',
          why: 'A digital walkthrough if you want to follow along in software.',
        },
      ],
    },
  ],
};
