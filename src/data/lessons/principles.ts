import type { Track } from '../types';

/**
 * The twelve principles. Each lesson is deliberately tiny: a comparison you
 * watch, one line of why, and a link out. They are meant to be re-watched,
 * not read once.
 */
export const principles: Track = {
  id: 'principles',
  title: '12 Animation Principles',
  glyph: '⚡',
  accent: '#56d98a',
  blurb: 'The Disney twelve, shown as motion. Every one has a with/without pair you can watch side by side.',
  lessons: [
    {
      id: 'pr-intro',
      title: 'Why these twelve',
      tagline: 'Frank Thomas and Ollie Johnston wrote them down in 1981. Nothing has replaced them.',
      minutes: 8,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'pr-squash-good', caption: 'Every principle is a rule about how the eye reads motion. They apply to 2D, 3D, games and UI equally.' },
        {
          kind: 'video',
          title: '12 Principles of Animation — Official Full Series',
          id: 'uDqjIdI4bF4',
          channel: 'Alan Becker',
          why: 'The definitive explainer. Watch the whole thing once, then use the lessons below as reference.',
        },
        {
          kind: 'checklist',
          title: 'How to use this track',
          items: [
            'Watch each pair until you can see the difference without reading the label.',
            'You do not memorise these. You notice them missing.',
            'Come back after every animation attempt and find which one you skipped.',
          ],
        },
      ],
    },

    {
      id: 'pr-squash',
      title: '1 · Squash and stretch',
      tagline: 'Deform on impact. Volume stays the same, shape does not.',
      minutes: 5,
      level: 'starter',
      blocks: [
        {
          kind: 'compare',
          title: 'Watch both',
          badDemo: 'pr-squash-bad',
          goodDemo: 'pr-squash-good',
          badLabel: 'Rigid — a sticker sliding around',
          goodLabel: 'Squash on contact — mass and give',
        },
        { kind: 'demo', title: 'The rule', demo: 'pr-squash-good', caption: 'Squash flat on impact, stretch along the direction of travel. Keep the total volume constant or it looks like it is inflating.' },
        {
          kind: 'video',
          title: '1. Squash & Stretch',
          id: 'haa7n3UGyDc',
          channel: 'Alan Becker',
          why: 'The original, and still the clearest three minutes on the subject.',
        },
      ],
    },

    {
      id: 'pr-anticipation',
      title: '2 · Anticipation',
      tagline: 'Wind back before you move forward, or the audience misses the action entirely.',
      minutes: 5,
      level: 'starter',
      blocks: [
        {
          kind: 'compare',
          title: 'Watch both',
          badDemo: 'pr-antic-bad',
          goodDemo: 'pr-antic-good',
          badLabel: 'No wind-up — the move is already over',
          goodLabel: 'Pull back first — the eye gets warned',
        },
        {
          kind: 'checklist',
          title: 'Where it shows up in anime',
          items: [
            'The crouch before a jump.',
            'The pull-back of the arm before a punch.',
            'The sharp inhale before a shout.',
            'Bigger anticipation reads as more effort. Skip it and the action reads as weightless.',
          ],
        },
      ],
    },

    {
      id: 'pr-staging',
      title: '3 · Staging',
      tagline: 'If the silhouette does not read, nothing else you do matters.',
      minutes: 5,
      level: 'starter',
      blocks: [
        {
          kind: 'compare',
          title: 'Watch both',
          badDemo: 'pr-staging-bad',
          goodDemo: 'pr-staging-good',
          badLabel: 'Arm crossing the body — the pose is mush',
          goodLabel: 'Arm clear of the body — reads as pure black',
        },
        {
          kind: 'checklist',
          title: 'The silhouette test',
          items: [
            'Fill your drawing with flat black. Can you still tell what is happening?',
            'If not, move a limb until you can.',
            'One idea per shot. Two competing ideas means neither lands.',
          ],
        },
      ],
    },

    {
      id: 'pr-sa-ptp',
      title: '4 · Straight ahead & pose to pose',
      tagline: 'Two ways to build a shot. Anime is overwhelmingly the second.',
      minutes: 6,
      level: 'building',
      blocks: [
        {
          kind: 'compare',
          title: 'Two workflows',
          badDemo: 'pr-straightahead',
          goodDemo: 'pr-posetopose',
          badLabel: 'Straight ahead — alive, but hard to control',
          goodLabel: 'Pose to pose — keys first, inbetweens after',
        },
        {
          kind: 'checklist',
          title: 'When to use which',
          items: [
            'Pose to pose for anything with a plan: acting, dialogue, fights.',
            'Straight ahead for fire, water, smoke, hair and cloth.',
            'Most real shots mix them — pose to pose for the body, straight ahead for the effects.',
          ],
        },
      ],
    },

    {
      id: 'pr-follow',
      title: '5 · Follow through & overlapping action',
      tagline: 'Not everything stops on the same frame. Loose parts keep going.',
      minutes: 5,
      level: 'building',
      blocks: [
        {
          kind: 'compare',
          title: 'Watch both',
          badDemo: 'pr-follow-bad',
          goodDemo: 'pr-follow-good',
          badLabel: 'Everything freezes together — mechanical',
          goodLabel: 'Hair keeps going, then settles',
        },
        {
          kind: 'checklist',
          title: 'What lags in an anime character',
          items: [
            'Hair, always. This is the number one anime tell.',
            'Scarves, coats, skirts, ribbons.',
            'Body parts with mass: the chest lags behind the hips in a turn.',
            'Give each element a slightly different lag so they do not move as one unit.',
          ],
        },
      ],
    },

    {
      id: 'pr-ease',
      title: '6 · Slow in and slow out',
      tagline: 'Frames bunch up at the ends of a move. Even spacing looks like a machine.',
      minutes: 5,
      level: 'starter',
      blocks: [
        {
          kind: 'compare',
          title: 'Watch the dot spacing',
          badDemo: 'pr-ease-bad',
          goodDemo: 'pr-ease-good',
          badLabel: 'Even spacing — mechanical',
          goodLabel: 'Bunched at the ends — alive',
        },
        { kind: 'demo', title: 'Where this becomes a chart', demo: 'an-chart', caption: 'In production this decision gets written down as a timing chart and handed to the inbetweener.' },
      ],
    },

    {
      id: 'pr-arcs',
      title: '7 · Arcs',
      tagline: 'Almost nothing in nature travels in a straight line.',
      minutes: 5,
      level: 'starter',
      blocks: [
        {
          kind: 'compare',
          title: 'Watch the path',
          badDemo: 'pr-arcs-bad',
          goodDemo: 'pr-arcs-good',
          badLabel: 'Straight segments — robotic',
          goodLabel: 'One smooth arc — organic',
        },
        { kind: 'demo', title: 'Track it before you draw it', demo: 'an-arctrack', caption: 'Draw the arc as a guide first, then place every frame on it. Hands, feet, heads, props — all of them.' },
      ],
    },

    {
      id: 'pr-secondary',
      title: '8 · Secondary action',
      tagline: 'A smaller action that supports the main one without stealing from it.',
      minutes: 5,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'pr-secondary', caption: 'The walk is the action. The scarf is the secondary. If you notice the scarf more than the walk, it has failed.' },
        {
          kind: 'checklist',
          title: 'Good secondary actions',
          items: [
            'A character talking while walking — the walk is primary.',
            'Hair swinging during a head turn.',
            'A hand adjusting glasses during a line of dialogue.',
            'Rule: if removing it changes what the shot is about, it was not secondary.',
          ],
        },
      ],
    },

    {
      id: 'pr-timing',
      title: '9 · Timing',
      tagline: 'The same movement over a different number of frames becomes a different thing entirely.',
      minutes: 5,
      level: 'starter',
      blocks: [
        {
          kind: 'compare',
          title: 'Same distance, different frame counts',
          badDemo: 'pr-timing-fast',
          goodDemo: 'pr-timing-slow',
          badLabel: '4 frames — snappy, light',
          goodLabel: '12 frames — heavy, deliberate',
        },
        {
          kind: 'checklist',
          title: 'Timing carries weight',
          items: [
            'Heavy things accelerate slowly and take more frames.',
            'Light things snap. A feather and an anvil falling the same distance is pure timing.',
            'Anime uses extreme timing contrast: a long slow hold, then two frames of violence.',
          ],
        },
      ],
    },

    {
      id: 'pr-exaggeration',
      title: '10 · Exaggeration',
      tagline: 'Whatever you think is enough, it is not. Push it.',
      minutes: 5,
      level: 'building',
      blocks: [
        {
          kind: 'compare',
          title: 'Watch both',
          badDemo: 'pr-exagg-bad',
          goodDemo: 'pr-exagg-good',
          badLabel: 'Timid — the audience misses it',
          goodLabel: 'Pushed — the idea lands',
        },
        {
          kind: 'checklist',
          title: 'How far is too far',
          items: [
            'Exaggerate the idea, not randomly. A sad pose gets sadder, not weirder.',
            'Keep it consistent — if one thing is pushed, everything must be.',
            'Anime lives here: impact frames, dramatic perspective, faces that break their own model sheet.',
          ],
        },
      ],
    },

    {
      id: 'pr-solid',
      title: '11 · Solid drawing',
      tagline: 'Your drawing has to exist in three dimensions, not two.',
      minutes: 6,
      level: 'building',
      blocks: [
        {
          kind: 'compare',
          title: 'Shape vs form',
          badDemo: 'pr-solid-flat',
          goodDemo: 'pr-solid-form',
          badLabel: 'A flat shape — no volume',
          goodLabel: 'Cross-contours — it occupies space',
        },
        { kind: 'demo', title: 'Where this comes from', demo: 'fx-box', caption: 'This is Track 1 and Track 2 paying off. Solid drawing is just construction applied to every frame.' },
      ],
    },

    {
      id: 'pr-appeal',
      title: '12 · Appeal',
      tagline: 'Not "pretty" — readable, distinct, and interesting to look at.',
      minutes: 6,
      level: 'building',
      blocks: [
        {
          kind: 'compare',
          title: 'Watch the cast read',
          badDemo: 'pr-appeal-bland',
          goodDemo: 'pr-appeal-varied',
          badLabel: 'Same shapes — nobody stands out',
          goodLabel: 'Round, square, angular — instant cast',
        },
        {
          kind: 'checklist',
          title: 'How appeal is engineered',
          items: [
            'Shape language: round reads friendly, square reads solid, angular reads dangerous.',
            'Give each character a distinct silhouette. Test it in flat black.',
            'Vary proportions between characters, not just hair and colour.',
            'Villains get sharp shapes. This is not subtle and it works anyway.',
          ],
        },
      ],
    },
  ],
};
