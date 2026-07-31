import type { Track } from '../types';

export const style: Track = {
  id: 'style',
  title: 'Style & Cel Shading',
  glyph: '🎨',
  accent: '#ffc857',
  blurb: 'The hard-edged look that makes a drawing read as anime rather than illustration.',
  lessons: [
    {
      id: 'st-cel',
      title: 'Cel shading, step by step',
      tagline: 'Four passes. Flat, shadow, light, rim. That is the entire technique.',
      minutes: 20,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'st-celbuild', caption: 'Watch the order: flat colour, then one shadow shape, then the hair light, then the rim.' },
        {
          kind: 'steps',
          title: 'The four passes',
          steps: [
            { label: 'Flat colours', demo: 'st-flat', note: 'One solid colour per material. No blending.' },
            { label: 'One shadow shape', demo: 'st-shadow', note: 'Hard edge. Decide the light direction first.' },
            { label: 'Second shadow', demo: 'st-second', note: 'Only in the deepest pockets. Use sparingly.' },
            { label: 'Hair light + rim', demo: 'st-rim', note: 'The band on the hair, then the edge glow.' },
          ],
        },
        {
          kind: 'compare',
          title: 'The edge is the style',
          badDemo: 'st-soft',
          goodDemo: 'st-flat',
          badLabel: 'Airbrushed gradient — reads as digital painting',
          goodLabel: 'Flat base, ready for a hard-edged shadow',
        },
        { kind: 'demo', title: 'Hard vs soft, side by side', demo: 'st-edge', caption: 'One clean terminator line does more for the anime look than any amount of rendering.' },
        {
          kind: 'video',
          title: 'Anime Cel Shading Tutorial — Beginner Guide',
          id: 'lCm4Hv7RBnw',
          channel: 'YouTube',
          why: 'Colour basics, then skin, hair and clothes shaded in order. Start here.',
        },
        {
          kind: 'video',
          title: 'How to Colour Your Drawings — Anime Cel-Shading Method',
          id: '93lmcrNqhXc',
          channel: 'YouTube',
          why: 'The colouring workflow end to end.',
        },
      ],
    },

    {
      id: 'st-shadow-colour',
      title: 'Choosing shadow colours',
      tagline: 'A shadow is not the base colour with the brightness turned down.',
      minutes: 12,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'st-hueshift', caption: 'Darken AND rotate the hue. Skipping the hue shift is why beginner shading looks muddy.' },
        {
          kind: 'checklist',
          title: 'The recipe',
          items: [
            'Drop the brightness — but only by about 15–25%, not half.',
            'Rotate the hue toward the ambient light (usually blue or purple).',
            'Raise the saturation slightly. Desaturated shadows look grey and dead.',
            'Use the SAME shadow colour across the whole character for unity.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Master Cel Shading — Studying S-Tier Anime Artists',
          id: 'XwZ8PC7_ICg',
          channel: 'YouTube',
          why: 'Colour choices pulled apart from artists who do this professionally.',
        },
      ],
    },

    {
      id: 'st-lighting',
      title: 'Lighting like a scene',
      tagline: 'Pick one key light and let it dictate every shadow shape on the character.',
      minutes: 15,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'st-keylight', caption: 'The key light is a decision you make once. Every shadow on the character then follows from it.' },
        {
          kind: 'checklist',
          title: 'How anime lights a shot',
          items: [
            'One dominant key. Everything else is fill or rim.',
            'Shadow shapes describe the form — under the chin, under the hair, along the neck.',
            'Rim light on the side away from the key separates the character from the background.',
            'Sunset and night scenes just move the key and change its colour. Same technique.',
          ],
        },
        {
          kind: 'video',
          title: 'Manga to Anime Adaptation — Cel Shading Tutorial',
          id: 'x-iui_K09Po',
          channel: 'YouTube',
          why: 'Taking flat line art all the way to a lit anime frame.',
        },
      ],
    },

    {
      id: 'st-lineweight',
      title: 'Line weight',
      tagline: 'Uniform lines look like clip art. Weighted lines look drawn.',
      minutes: 10,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'st-lineweight', caption: 'Thicker where the form turns away from the light or sits in contact with something.' },
        {
          kind: 'checklist',
          title: 'Where the line gets thick',
          items: [
            'The shadow side of any form.',
            'Where two objects overlap — the closer one gets the heavy line.',
            'The outer silhouette, always heavier than interior detail.',
            'Under the jaw, under the hair, inside the eye — the classic anime weight points.',
          ],
        },
        {
          kind: 'practice',
          title: 'Drill: control before weight',
          exercise: 'line-ghost',
          goal: 'Line weight is useless without line control. Come back here whenever your lines get shaky.',
        },
      ],
    },

    {
      id: 'st-styles',
      title: 'Picking a style',
      tagline: 'Style is a set of dials, not a personality. You can move them deliberately.',
      minutes: 12,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'st-styledial', caption: 'Same construction underneath all three. Only eye size, jaw sharpness and line weight changed.' },
        {
          kind: 'checklist',
          title: 'The dials worth naming',
          items: [
            'Eye size and roundness — the single biggest style signal.',
            'Jaw and chin sharpness — soft for moe, angular for shonen and seinen.',
            'Head-to-body ratio — 3 heads is chibi, 7–8 is heroic.',
            'Line weight variation — flat and even for modern digital, heavy and varied for 90s.',
            'Copy one artist you love, then move exactly one dial. That is how a personal style starts.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Shade Like Anime — Cel Shading Tutorial',
          id: 'dLLYb5B_Is4',
          channel: 'YouTube',
          why: 'A different artist, a different set of dial positions. Useful contrast.',
        },
      ],
    },
  ],
};
