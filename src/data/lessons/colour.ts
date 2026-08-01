import type { Track } from '../types';

export const colour: Track = {
  id: 'colour',
  title: 'Colour & Light',
  glyph: '🌈',
  accent: '#34d399',
  blurb: 'Three dials, one of which does most of the work. Where self-taught artists usually plateau.',
  lessons: [
    {
      id: 'cl-dials',
      title: 'The three dials',
      tagline: 'Hue, saturation, value. Most colour problems are someone moving the wrong one.',
      minutes: 12,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'cl-dials', caption: 'Hue is which colour. Saturation is how much. Value is how light. They move independently — that is the entire point.' },
        {
          kind: 'checklist',
          title: 'What each dial is for',
          items: [
            'VALUE does the structural work. It creates form, depth and readability.',
            'SATURATION directs attention. Saturated things come forward and get looked at.',
            'HUE carries mood and temperature. It matters least for whether the image reads.',
            'When something looks wrong, check value first. It is nearly always value.',
          ],
        },
        {
          kind: 'video',
          title: 'Hue vs Value vs Saturation — What Artists Get Wrong',
          id: 'I707tSfcFnc',
          channel: 'YouTube',
          why: 'Directly about the confusion this lesson exists to fix.',
        },
        {
          kind: 'video',
          title: 'Colour Theory Basics for Digital Painters',
          id: 'P0P8iGs2jWI',
          channel: 'Marco Bucci',
          why: 'One of the genuinely great colour teachers. Worth watching more than once.',
        },
      ],
    },

    {
      id: 'cl-value',
      title: 'Value first',
      tagline: 'If the greyscale version fails, no colour choice will rescue it.',
      minutes: 14,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'cl-valuefirst', caption: 'The image flips to grey every few seconds. If it still reads there, your colour has something solid to sit on.' },
        {
          kind: 'checklist',
          title: 'Working value-first',
          items: [
            'Block the whole image in greyscale before choosing any colour.',
            'Three values minimum, clearly separated. Squint — if they merge, push them apart.',
            'Keep a greyscale check layer at the top of your stack and toggle it constantly.',
            'Two colours can be wildly different in hue and identical in value. That is what makes an image go flat.',
          ],
        },
        {
          kind: 'demo',
          title: 'Where you already met this',
          demo: 'cp-notan',
          caption: 'This is the notan idea from Composition, applied to colour instead of layout. Same principle, different stage.',
        },
        {
          kind: 'video',
          title: 'Light and Shadow — 10 Minutes to Better Painting',
          id: 'xcCJ2CU-bFw',
          channel: 'YouTube',
          why: 'Value structure explained fast and without fluff.',
        },
      ],
    },

    {
      id: 'cl-light',
      title: 'How light actually works',
      tagline: 'Five zones on every lit form. Learn them once and shading stops being guesswork.',
      minutes: 18,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'cl-formlight', caption: 'Highlight, light, core shadow, reflected light, cast shadow. Every rendered form in every medium is these five zones.' },
        {
          kind: 'reference',
          title: 'The five zones',
          columns: ['Zone', 'What it is'],
          rows: [
            { k: 'Highlight', v: 'Direct reflection of the light source', note: 'Smallest and brightest. Sharp on shiny things, soft on matte.' },
            { k: 'Light', v: 'The lit plane facing the source' },
            { k: 'Core shadow', v: 'The darkest band, where the form turns away', note: 'NOT at the edge — slightly inside it. Getting this wrong flattens everything.' },
            { k: 'Reflected light', v: 'Bounce from surroundings, lifting the shadow edge', note: 'Always darker than the lit side. Beginners overdo this.' },
            { k: 'Cast shadow', v: 'The shadow the object throws', note: 'Sharpest nearest the object, softening with distance.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Cel-shading translation',
          items: [
            'Anime compresses these five zones into two or three flat steps.',
            'The core shadow becomes your main hard-edged shadow shape.',
            'Reflected light usually becomes the rim light.',
            'Knowing the full five is what makes your two-step version land in the right place.',
          ],
        },
        {
          kind: 'video',
          title: 'Shading Light and Form — Basics',
          id: 'V3WmrWUEIJo',
          channel: 'Proko',
          why: 'The clearest treatment of the five zones anywhere.',
        },
        {
          kind: 'video',
          title: 'How to Draw Bounce Light, Core Shadows and Cast Shadows',
          id: 'XYrE8yVUCiY',
          channel: 'YouTube',
          why: 'Focused on the three that beginners get wrong.',
        },
      ],
    },

    {
      id: 'cl-harmony',
      title: 'Colour harmony',
      tagline: 'Three relationships on the wheel cover almost every palette worth having.',
      minutes: 16,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'cl-complementary', caption: 'Complementary: opposite sides of the wheel. Maximum contrast, maximum energy.' },
        {
          kind: 'steps',
          title: 'The three that matter',
          steps: [
            { label: 'Complementary', demo: 'cl-complementary', note: 'Opposites. High energy — use one as accent, not 50/50.' },
            { label: 'Analogous', demo: 'cl-analogous', note: 'Neighbours. Calm and unified. Safest choice.' },
            { label: 'Triadic', demo: 'cl-triadic', note: 'Three evenly spaced. Vivid but still balanced.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Using harmony without it looking mechanical',
          items: [
            'Never split a palette evenly. Dominant, secondary, accent — roughly 60/30/10.',
            'Complementary works best when one side is heavily desaturated.',
            'Analogous palettes need a single complementary accent or they go monotonous.',
            'Pick harmony AFTER value structure. Harmony on a broken value plan fixes nothing.',
          ],
        },
        {
          kind: 'video',
          title: 'Foolproof Method for Colour Harmony in Your Digital Art',
          id: 'Qwxw21sFVzY',
          channel: 'YouTube',
          why: 'A repeatable method rather than wheel theory.',
        },
        {
          kind: 'video',
          title: 'How to Actually Pick Harmonious Colours',
          id: 'Ejp74Picub0',
          channel: 'YTartschool',
          why: 'Practical picking process, which is the part most theory videos skip.',
        },
      ],
    },

    {
      id: 'cl-palette',
      title: 'Building a palette',
      tagline: 'Five colours with jobs, not five colours you liked in isolation.',
      minutes: 15,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'cl-palette', caption: 'Every colour has a role. One accent — that is what makes it an accent.' },
        {
          kind: 'steps',
          title: 'Building one',
          steps: [
            { label: 'Pick the mood first', note: 'Name the feeling in a word before you touch a colour picker.' },
            { label: 'Choose the darkest and lightest', note: 'These set your value range. Everything else fits between.' },
            { label: 'Fill the midtones', note: 'Two or three, related by harmony.' },
            { label: 'Add exactly one accent', note: 'Highest saturation in the image. Goes on the focal point.' },
            { label: 'Test in greyscale', note: 'If two swatches match in value, change one.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Practical rules',
          items: [
            'Limit yourself. Five colours forces decisions; thirty hides them.',
            'Reuse the shadow colour across every material for unity.',
            'Steal palettes from anime screenshots and film stills. Everyone does this.',
            'Save palettes you like. Build a library, exactly like the brush library.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Build a Colour Palette — Digital Painting Workshop',
          id: 'MG9Mmyg-HLw',
          channel: 'YouTube',
          why: 'Palette construction as a process you can repeat.',
        },
      ],
    },

    {
      id: 'cl-lightcolour',
      title: 'Light colour vs local colour',
      tagline: 'What the object is, versus what is landing on it. Two different questions.',
      minutes: 14,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'cl-lightlocal', caption: 'The same red object under three lights. Local colour never changed — only the light did.' },
        { kind: 'demo', title: 'Which is why shadows shift hue', demo: 'cl-shadowhue', caption: 'A shadow is not less of the local colour. It is the ambient light instead of the key light, and the ambient light has its own colour.' },
        {
          kind: 'checklist',
          title: 'The mental model',
          items: [
            'Local colour: the hue an object would be under neutral white light.',
            'Light colour: what the source is adding — warm sun, cold moon, a neon sign.',
            'What you paint is the two multiplied together, never the local colour alone.',
            'Warm key light means cool shadows. Cool key means warm shadows. Almost always.',
            'This is why grey shadows look dead: grey is nobody\'s ambient light.',
          ],
        },
        {
          kind: 'video',
          title: 'Understanding Shadow Colours (Ambient Light)',
          id: 'gwLQ0cDb4cE',
          channel: 'YouTube',
          why: 'Exactly the local-vs-light distinction, in depth.',
        },
      ],
    },

    {
      id: 'cl-mood',
      title: 'Colour as storytelling',
      tagline: 'Same drawing, four times of day, four completely different scenes.',
      minutes: 16,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'cl-timeofday', caption: 'Identical linework. Morning, noon, sunset, night. Mood is entirely a palette decision.' },
        { kind: 'demo', title: 'Saturation as a focal tool', demo: 'cl-satfocal', caption: 'Mute everything, saturate one thing. The eye has no choice about where to go.' },
        {
          kind: 'reference',
          title: 'Time-of-day palettes',
          columns: ['Time', 'Palette'],
          rows: [
            { k: 'Morning', v: 'Pale warm light, cool blue shadows, low contrast', note: 'Reads as hope and fresh starts.' },
            { k: 'Noon', v: 'High contrast, near-white light, short hard shadows' },
            { k: 'Golden hour', v: 'Saturated orange key, long purple shadows', note: 'The anime default for emotional scenes. Overused for a reason.' },
            { k: 'Night', v: 'Blue-dominant, low saturation, isolated warm light sources', note: 'One warm window in a blue field does enormous work.' },
            { k: 'Overcast', v: 'Flat, desaturated, almost no cast shadows', note: 'Melancholy, ordinariness, waiting.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Colour scripts',
          items: [
            'Plan the palette across a whole sequence, not shot by shot.',
            'Let the colour arc track the emotional arc — warm to cold as things go wrong.',
            'Reserve your most saturated palette for the climax. It only lands once.',
            'Thumbnail the colour script as tiny blocks before rendering anything.',
          ],
        },
        {
          kind: 'video',
          title: 'Creating Colour Scripts for 2D Animation',
          id: 'MCBg5Fl86x8',
          channel: 'YouTube',
          why: 'How to plan colour across a sequence rather than per drawing.',
        },
        {
          kind: 'video',
          title: 'Cinematography Basics: The Emotion of Colour',
          id: 'JpCmnN0ijUc',
          channel: 'YouTube',
          why: 'The emotional side, from film — which is where anime took it from.',
        },
      ],
    },
  ],
};
