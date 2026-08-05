import type { Track } from '../types';

/**
 * Two halves that belong together: designing a cute cartoon character, and
 * then giving it depth so it reads as a solid thing rather than a sticker.
 * The rendering lessons all use the same chibi, so the only variable is the
 * depth decision being taught.
 */
export const cute: Track = {
  id: 'cute',
  title: 'Cute Characters & Depth',
  glyph: '🧸',
  accent: '#fb7185',
  blurb: 'Chibi and cartoon design, then the digital rendering passes that turn a flat drawing into a solid one.',
  lessons: [
    {
      id: 'cd-why-cute',
      title: 'What actually makes something cute',
      tagline: 'Cuteness is not a vibe. It is a specific set of proportions you can dial.',
      minutes: 12,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'cd-babyschema', caption: 'The baby schema. Every one of these is a lever you can push further or pull back.' },
        {
          kind: 'reference',
          title: 'The cute levers',
          columns: ['Lever', 'Push it toward'],
          rows: [
            { k: 'Head size', v: 'Bigger relative to body', note: 'The single strongest signal. Half the body height is chibi territory.' },
            { k: 'Eye size', v: 'Bigger, and rounder', note: 'Large irises with two highlights read as alert and harmless.' },
            { k: 'Eye position', v: 'Below the halfway line of the head', note: 'High eyes read as adult. This one trips people up constantly.' },
            { k: 'Nose and mouth', v: 'Tiny, or implied with one mark' },
            { k: 'Limbs', v: 'Short, thick, rounded at the ends', note: 'Mitten hands instead of fingers.' },
            { k: 'Corners', v: 'Round everything', note: 'A sharp angle anywhere reads as threat. Use that deliberately.' },
            { k: 'Cheeks', v: 'Full and low, with blush' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Why this works',
          items: [
            'These are infant proportions. The response is instinctive, not cultural.',
            'That is also why the levers are reliable — you are not guessing at taste.',
            'Break one deliberately for contrast: a cute character with sharp eyes reads as mischievous.',
            'Overdo all of them at once and it stops reading as a character and becomes a blob.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Draw the Chibi Art Style — Fun Cute Characters',
          id: 'LXMX66h8szk',
          channel: 'YouTube',
          why: 'A full walkthrough of the style with the proportion reasoning spoken aloud.',
        },
      ],
    },

    {
      id: 'cd-proportions',
      title: 'Chibi proportions',
      tagline: 'Two heads, three heads, five. Pick the dial position and commit to it.',
      minutes: 15,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'cd-proportions', caption: 'The same character at four head-counts. Cuteness and expressiveness trade against each other as you move along it.' },
        {
          kind: 'reference',
          title: 'Choosing a head count',
          columns: ['Ratio', 'Reads as'],
          rows: [
            { k: '2 heads', v: 'Maximum cute. Mascots, emotes, stickers', note: 'Almost no room for body language — the face does everything.' },
            { k: '3 heads', v: 'Classic chibi. Merch, comedy panels, gacha art' },
            { k: '4–5 heads', v: 'Cartoon / kodomo. Still cute, real poses possible' },
            { k: '6 heads', v: 'Stylised teen. Most shoujo and slice-of-life' },
            { k: '7–8 heads', v: 'Heroic and realistic. Shonen action, seinen' },
          ],
        },
        {
          kind: 'checklist',
          title: 'What to cut as you shrink',
          items: [
            'Neck disappears first. At three heads there is no neck at all.',
            'Fingers become mittens. Toes become rounded stubs.',
            'Nose goes entirely, or becomes a single dot.',
            'Keep the hair silhouette — it is what makes the character still recognisable.',
            'Do NOT shrink the eyes. They stay large in absolute terms as the head shrinks.',
          ],
        },
        {
          kind: 'practice',
          title: 'Drill: the circle',
          exercise: 'circle-free',
          goal: 'Chibi is built almost entirely from circles. A wobbly head circle shows immediately at this scale.',
        },
        {
          kind: 'video',
          title: 'Cute Chibi Creations — Mastering 2-3 Head Proportions',
          id: 'Z-TJUcRVUA0',
          channel: 'YouTube',
          why: 'Directly about the ratio decision this lesson is built on.',
        },
        {
          kind: 'video',
          title: 'How to Draw a Chibi Body Step by Step',
          id: 'cf40wAFECNw',
          channel: 'YouTube',
          why: 'Beginner-paced body construction once the head is settled.',
        },
      ],
    },

    {
      id: 'cd-shapes',
      title: 'Shape language',
      tagline: 'The audience reads your character\'s shape before they read its face.',
      minutes: 14,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'cd-shapes', caption: 'Round, square, triangle. Nothing but the outline changed, and you already have three different personalities.' },
        {
          kind: 'reference',
          title: 'What each shape says',
          columns: ['Shape', 'Reads as'],
          rows: [
            { k: 'Circle', v: 'Friendly, soft, safe, young', note: 'The default for cute. Heroes and mascots.' },
            { k: 'Square', v: 'Sturdy, reliable, stubborn, slow', note: 'Strongmen, dads, tanks.' },
            { k: 'Triangle', v: 'Sharp, quick, tricky, dangerous', note: 'Villains — point-down is unstable and menacing.' },
            { k: 'Mixed', v: 'Most real designs', note: 'Pick one dominant shape and let the others accent it.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Designing with shapes',
          items: [
            'Decide the dominant shape before you draw a single feature.',
            'Repeat it — a round character should have round hair, round hands, round shoes.',
            'Contrast within a cast: if everyone is round, nobody reads as distinct.',
            'Silhouette test: fill it black. If you cannot tell who it is, the shape is not doing its job.',
          ],
        },
        {
          kind: 'demo',
          title: 'The silhouette test',
          demo: 'pr-appeal-varied',
          caption: 'Straight from the Appeal principle. Shape language and appeal are the same idea approached from two directions.',
        },
        {
          kind: 'video',
          title: 'Shape Language and Silhouette for Character Design',
          id: '_rEGy5xqQAA',
          channel: 'YouTube',
          why: 'Simplifying shapes and building strong silhouettes — the reference video here.',
        },
        {
          kind: 'video',
          title: 'How to Use Shapes to Create Character Designs',
          id: 'GbG45s1EZvo',
          channel: 'YouTube',
          why: 'Shape theory applied to actual designs rather than explained abstractly.',
        },
      ],
    },

    {
      id: 'cd-simplify',
      title: 'Simplification',
      tagline: 'Cut detail until the character stops being recognisable, then put one thing back.',
      minutes: 14,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'cd-simplify', caption: 'Three levels of detail. Only the middle one is still a specific person.' },
        {
          kind: 'checklist',
          title: 'How to simplify well',
          items: [
            'Find the two or three features that ARE the character — scar, hair shape, one colour.',
            'Delete everything else, then add back only what breaks without it.',
            'Test at thumbnail size. If it survives at 32 pixels, it will survive anywhere.',
            'Simplification is not laziness — it is deciding what matters, which is harder than rendering.',
            'A simplified character is also far faster to animate. This is why anime designs are simple.',
          ],
        },
        {
          kind: 'video',
          title: 'Character Design Fundamentals',
          id: 'mBB-fM1MWhI',
          channel: 'YouTube',
          why: 'Where simplification sits in the wider design process.',
        },
      ],
    },

    {
      id: 'cd-expressions',
      title: 'Cute expressions',
      tagline: 'At chibi scale the face is the whole performance. Eye shape does most of it.',
      minutes: 12,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'cd-expressions', caption: 'Same head every time. Only the eye shape and the mouth curve changed.' },
        {
          kind: 'reference',
          title: 'The cute expression kit',
            columns: ['Expression', 'Eyes + mouth'],
          rows: [
            { k: 'Happy', v: 'Upward arcs for eyes, small open smile', note: 'Closed arc eyes read happier than open ones.' },
            { k: 'Shocked', v: 'Huge round eyes, tiny circle mouth' },
            { k: 'Sulky', v: 'Flat upper lids, pupils pushed low, downward mouth' },
            { k: 'Sleepy', v: 'Downward arcs, tiny wobble mouth' },
            { k: 'Angry (cute)', v: 'Slanted brows, round eyes kept large', note: 'Keep the eyes big or it stops being cute and becomes genuinely angry.' },
            { k: 'Embarrassed', v: 'Wide eyes, heavy blush, wavy mouth' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Rules at this scale',
          items: [
            'Exaggerate far past realistic. There is no room for subtlety on a 3-head character.',
            'Symbols are allowed and expected: sweat drops, cross-pop veins, spiral eyes.',
            'The whole head can squash and stretch with the expression.',
            'Draw the expression before the face details — the emotion decides the drawing.',
          ],
        },
      ],
    },

    {
      id: 'cd-form',
      title: 'From flat to form',
      tagline: 'The moment a drawing stops being a sticker and starts being an object.',
      minutes: 15,
      level: 'building',
      blocks: [
        {
          kind: 'compare',
          title: 'The single biggest jump',
          badDemo: 'cd-flat',
          goodDemo: 'cd-form',
          badLabel: 'Flat colour — a sticker',
          goodLabel: 'Soft form shadow — now it is a ball',
        },
        { kind: 'demo', title: 'Or solve it the anime way', demo: 'cd-cel', caption: 'A hard cel edge answers the same question as a soft gradient. Both give form; they just belong to different styles.' },
        {
          kind: 'checklist',
          title: 'Finding the form',
          items: [
            'Ask what simple solid each part is. A chibi head is a sphere; a limb is a capsule.',
            'Shade the solid, not the drawing. You are lighting a ball that happens to have a face on it.',
            'One light direction for the whole character, decided before the first shadow.',
            'Soft gradient = digital painting. Hard edge = anime cel. Pick one and be consistent.',
          ],
        },
        {
          kind: 'demo',
          title: 'The five zones, again',
          demo: 'cl-formlight',
          caption: 'This is the Colour & Light lesson applied to a cute character. The physics does not change just because the drawing is stylised.',
        },
        {
          kind: 'video',
          title: 'Go From Flat to Realistic Shading',
          id: 'MyrySvbuhsk',
          channel: 'YouTube',
          why: 'Exactly the flat-to-form jump, with light behaviour explained as it goes.',
        },
      ],
    },

    {
      id: 'cd-rendering',
      title: 'The rendering passes',
      tagline: 'Depth is built in layers, in a fixed order. Skip one and it looks off without you knowing why.',
      minutes: 20,
      level: 'advanced',
      blocks: [
        {
          kind: 'steps',
          title: 'The order, one pass at a time',
          steps: [
            { label: 'Flats', demo: 'cd-flat', note: 'One solid colour per material. No shading yet.' },
            { label: 'Form shadow', demo: 'cd-form', note: 'The big soft turn away from the light.' },
            { label: 'Occlusion', demo: 'cd-occlusion', note: 'Dark in the crevices. The hair now SITS on the head.' },
            { label: 'Bounce light', demo: 'cd-bounce', note: 'Light on the underside — the shadow stops being a hole.' },
            { label: 'Specular', demo: 'cd-highlight', note: 'Now you can tell what the surface is made of.' },
            { label: 'Rim + subsurface', demo: 'cd-full', note: 'It finally occupies space rather than sitting on the page.' },
          ],
        },
        {
          kind: 'reference',
          title: 'What each pass is actually for',
          columns: ['Pass', 'Job'],
          rows: [
            { k: 'Form shadow', v: 'Says "this is round"', note: 'Soft-edged, follows the surface turning away.' },
            { k: 'Occlusion', v: 'Says "these two things are touching"', note: 'Tight and dark where surfaces meet. The most-skipped pass.' },
            { k: 'Bounce light', v: 'Says "there is a world around this"', note: 'Keeps shadows from reading as flat black holes.' },
            { k: 'Specular', v: 'Says what the material is', note: 'Sharp = shiny, broad and soft = matte.' },
            { k: 'Rim light', v: 'Says "this is in front of that"' },
            { k: 'Subsurface', v: 'Says "this is flesh, not plastic"', note: 'Warm glow at thin edges — ears, fingers, nose.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Practical notes',
          items: [
            'One pass per layer, always. You will want to dial each one back independently.',
            'Occlusion is what beginners skip, and it is why their work looks pasted together.',
            'Keep bounce light dimmer than the lit side. Overdone bounce flattens everything you just built.',
            'Do the passes in order. Rendering highlights before occlusion means redoing the highlights.',
          ],
        },
        {
          kind: 'video',
          title: 'Tips for Rendering Digital Art (Colouring & Shading)',
          id: 'OvSgbLVTmZI',
          channel: 'YouTube',
          why: 'The full flats-to-finished process on a real piece.',
        },
        {
          kind: 'video',
          title: 'A Complete Guide to Shading',
          id: 'csvX1JMAl6g',
          channel: 'YouTube',
          why: 'Deeper on the individual passes if you want the theory behind each.',
        },
      ],
    },

    {
      id: 'cd-separation',
      title: 'Making the character pop',
      tagline: 'Depth is a relationship. A perfectly rendered character still sinks into a badly handled background.',
      minutes: 16,
      level: 'advanced',
      blocks: [
        {
          kind: 'compare',
          title: 'Same character, two backgrounds',
          badDemo: 'cd-sep-flat',
          goodDemo: 'cd-sep-depth',
          badLabel: 'Same values as the BG — the character sinks',
          goodLabel: 'Rim light + darker, blurrier BG — it pops forward',
        },
        {
          kind: 'reference',
          title: 'Ways to separate figure from ground',
          columns: ['Technique', 'How'],
          rows: [
            { k: 'Value separation', v: 'Light character on dark BG, or the reverse', note: 'The strongest and cheapest. Do this one first.' },
            { k: 'Rim light', v: 'A bright edge on the side away from the key' },
            { k: 'Depth of field', v: 'Blur the background', note: 'Instant camera-like depth. Do not overdo the blur.' },
            { k: 'Saturation', v: 'Character saturated, background muted' },
            { k: 'Colour temperature', v: 'Warm character against a cool background' },
            { k: 'Detail density', v: 'Sharp detail on the character, suggestion behind' },
            { k: 'Contact shadow', v: 'A dark ellipse where they touch the ground', note: 'Without it the character floats, no matter how well rendered.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Diagnosing a flat picture',
          items: [
            'Desaturate it. If the character and background share a value, that is your problem.',
            'Squint. The character should still be one clear shape.',
            'Check the feet — no contact shadow means it will always look pasted on.',
            'You rarely need all seven techniques. Two well-chosen ones are usually enough.',
          ],
        },
        {
          kind: 'video',
          title: 'Watch This Before You Paint Rim Light',
          id: 'NbI-PIkIYZE',
          channel: 'YouTube',
          why: 'Rim light done badly is worse than none. This covers the failure modes.',
        },
        {
          kind: 'video',
          title: 'Basic Rim Lighting — Traditional and Digital',
          id: 'xaqo7y8GUqM',
          channel: 'YouTube',
          why: 'The fundamentals if rim light is new to you.',
        },
      ],
    },

    {
      id: 'cd-polish',
      title: 'The finishing pass',
      tagline: 'The last five percent that separates finished work from nearly-finished work.',
      minutes: 15,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'cd-polish', caption: 'Every annotated detail here is cheap. Together they are the difference between competent and finished.' },
        {
          kind: 'checklist',
          title: 'The finishing checklist',
          items: [
            'Contact shadow under the character. Non-negotiable — it is what puts them on the ground.',
            'Occlusion tightened where hair meets forehead and chin meets neck.',
            'Subsurface warmth at ears, fingertips and the nose.',
            'One or two sharp speculars — in the eyes above all. Eye highlights carry the life.',
            'A very slight overall grain or texture to unify the render.',
            'Flip the canvas one last time. Then stop.',
          ],
        },
        {
          kind: 'demo',
          title: 'Spend the detail where it counts',
          demo: 'wf-detail',
          caption: 'The detail budget from Smart Work applies here too: face and hands get the polish, everything else gets suggestion.',
        },
        {
          kind: 'practice',
          title: 'Free pad: design one',
          exercise: 'free-sketch',
          goal: 'Three-head chibi, one dominant shape, one expression. Silhouette first, features after.',
        },
        {
          kind: 'video',
          title: 'How to Paint Skin Tones Like a Pro (cel shaded and soft shaded)',
          id: 'o9dNt_ApTXc',
          channel: 'YouTube',
          why: 'Covers both style routes side by side, which is exactly the choice this track keeps returning to.',
        },
      ],
    },
  ],
};
