import type { Track } from '../types';

/**
 * Anime's emotional shorthand. The organising claim of this track is that
 * these effects are grammar, not decoration — each one means something
 * specific, and using the wrong one reads as badly as a wrong word.
 */
export const effects: Track = {
  id: 'effects',
  title: 'Emotion & Effects',
  glyph: '✨',
  accent: '#c084fc',
  blurb: "White-outs, light rays, focus lines, impact frames. What each one means and when it earns its place.",
  lessons: [
    {
      id: 'ef-intro',
      title: 'Effects are punctuation',
      tagline: 'Not decoration. Each one is a specific emotional claim about the moment.',
      minutes: 10,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'ef-neutral', caption: 'The base shot. Readable, competent, and saying nothing in particular. Every effect in this track gets applied to exactly this image.' },
        {
          kind: 'checklist',
          title: 'The rule behind the whole track',
          items: [
            'An effect answers "what is the character feeling right now?" — nothing else.',
            'If you cannot name the feeling in one word, do not add the effect.',
            'Effects mark the beat. A scene where every panel is marked has no beats at all.',
            'The audience should feel it and never notice it. The moment they notice, it failed.',
          ],
        },
        {
          kind: 'video',
          title: 'Manga Effects: What Are Focus Lines, Speed Lines and Screentone Effects',
          id: 'Omf7qtUeyVU',
          channel: 'YouTube',
          why: 'The best single overview of the vocabulary. Watch this before the rest of the track.',
        },
      ],
    },

    {
      id: 'ef-whiteout',
      title: 'White-out and bloom',
      tagline: 'The frame blows out to pure light. Revelation, memory, being overwhelmed.',
      minutes: 10,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ef-whiteout', caption: 'Everything drops away except the silhouette. The world stops existing for a moment.' },
        {
          kind: 'reference',
          title: 'What a white-out says',
          columns: ['Use it for', 'Because'],
          rows: [
            { k: 'Revelation', v: 'A truth landing — the character understands something', note: 'Detail vanishing mirrors everything else ceasing to matter.' },
            { k: 'Memory / flashback', v: 'Entering or leaving a recollection', note: 'Usually paired with soft focus and desaturation.' },
            { k: 'Being overwhelmed', v: 'Confession scenes, first love, panic', note: 'Emotion exceeding what the character can process.' },
            { k: 'Purity / the sacred', v: 'A character seen as more than human for a beat' },
            { k: 'Do NOT use for', v: 'Ordinary happiness or a merely nice moment', note: 'It is a maximum-intensity effect. Spend it once per episode.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'How to draw it',
          items: [
            'Blow the background to pure white — not light grey. Commit.',
            'Keep the character as a soft silhouette, or lose their outline entirely except the eyes.',
            'Kill your line weight. Heavy black lines fight the effect.',
            'Add a faint warm tint at the edges so it reads as light rather than as missing artwork.',
          ],
        },
      ],
    },

    {
      id: 'ef-rays',
      title: 'Light rays',
      tagline: 'Hope, nostalgia, the sacred. The cheapest way to make a shot feel meaningful.',
      minutes: 10,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ef-rays', caption: 'Rays from a single off-frame source. They imply something above and outside the scene.' },
        {
          kind: 'reference',
          title: 'Where light rays belong',
          columns: ['Situation', 'What they add'],
          rows: [
            { k: 'Morning / windows', v: 'Warmth, a fresh start, safety' },
            { k: 'Forest or cathedral', v: 'Reverence — the classic god-ray context' },
            { k: 'A character standing up again', v: 'Hope returning after a defeat' },
            { k: 'Memory of someone gone', v: 'Nostalgia, gentle grief', note: 'Warm rays read as fond; cold blue rays read as loss.' },
            { k: 'Ray colour', v: 'Warm gold = hope · pale blue = melancholy · white = divine' },
          ],
        },
        {
          kind: 'checklist',
          title: 'How to draw it',
          items: [
            'One source, off-frame. Every ray must be parallel to a line from that point.',
            'Vary the widths. Evenly spaced identical rays look like a pattern, not light.',
            'Low opacity — 15–30%. Screen or Add (Glow) blend mode.',
            'Add floating dust motes. That is what makes rays read as air rather than as shapes.',
          ],
        },
        {
          kind: 'video',
          title: 'How I Make Shoujo Style Backgrounds',
          id: 'owi3dFZHTHI',
          channel: 'YouTube',
          why: 'Rays, bloom and sparkle backgrounds built in practice.',
        },
      ],
    },

    {
      id: 'ef-lines',
      title: 'Speed lines and focus lines',
      tagline: 'Two different lines. Parallel means motion, radial means attention.',
      minutes: 14,
      level: 'building',
      blocks: [
        {
          kind: 'compare',
          title: 'The two, side by side',
          badDemo: 'ef-speedlines',
          goodDemo: 'ef-focuslines',
          badLabel: 'Parallel — the subject is MOVING',
          goodLabel: 'Radial — the subject is being NOTICED',
        },
        {
          kind: 'reference',
          title: 'Choosing between them',
          columns: ['Effect', 'Means'],
          rows: [
            { k: 'Parallel speed lines', v: 'Physical motion. Running, falling, a thrown punch', note: 'Lines run along the direction of travel.' },
            { k: 'Radial focus lines', v: 'Shock, realisation, a sudden turn of attention', note: 'Converge on the subject. This is a zoom, not a movement.' },
            { k: 'Dense and black', v: 'Violence, panic, maximum intensity' },
            { k: 'Sparse and grey', v: 'Mild surprise, comedy beat' },
            { k: 'Curved speed lines', v: 'Swinging or spinning motion' },
          ],
        },
        {
          kind: 'checklist',
          title: 'How to draw them',
          items: [
            'Leave a clean oval around the subject. Lines must never cross the face.',
            'Vary the line weights, or it reads as a machine-made pattern.',
            'In Clip Studio: the Radial ruler for focus lines, the Parallel ruler for speed lines.',
            'Focus lines are usually one frame in animation and one panel in manga. They do not sustain.',
          ],
        },
        {
          kind: 'video',
          title: 'What Are Manga Screentones? Tips and Tricks',
          id: 'X-wuAxXf6xU',
          channel: 'YouTube',
          why: 'Covers effect lines alongside tone, which is how they are actually used together.',
        },
      ],
    },

    {
      id: 'ef-impact',
      title: 'Impact frames',
      tagline: 'One or two frames of pure graphic violence. You feel it without seeing it.',
      minutes: 12,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'ef-impact', caption: 'Inverted colour, radial shards, gone in two frames. Pause any anime fight and you will find these.' },
        {
          kind: 'checklist',
          title: 'What makes an impact frame work',
          items: [
            'One or two frames. Three and the audience consciously sees it.',
            'Invert the values — white where the shot was dark. The jolt is the point.',
            'Abstract shapes, not a drawing. Radial shards, a silhouette, a splash of black.',
            'Place it exactly on the contact frame, never a frame early or late.',
            'Follow it with a held pose. The stillness afterwards is what sells the hit.',
          ],
        },
        {
          kind: 'demo',
          title: 'Where this sits in the timing',
          demo: 'an-smear',
          caption: 'Anticipation → smear → impact frame → hold. The impact frame is one beat inside a sequence you already learned in Advanced Animation.',
        },
        {
          kind: 'video',
          title: 'How to Add Impact Frames to Your Animation',
          id: '6UaUi5fBmJc',
          channel: 'YouTube',
          why: 'Construction and placement in a real timeline.',
        },
        {
          kind: 'video',
          title: 'How to Animate Impact Frames',
          id: '-nOC-UgaLLw',
          channel: 'YouTube',
          why: 'Shorter, more recent, with shonen examples.',
        },
      ],
    },

    {
      id: 'ef-sparkle',
      title: 'Sparkles, bloom and flowers',
      tagline: 'The shoujo register. Affection, admiration, a character seen through fond eyes.',
      minutes: 12,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ef-sparkle', caption: 'Four-point sparkles, pastel wash, soft bloom. This is a point-of-view effect — it tells you how someone is being looked at.' },
        {
          kind: 'reference',
          title: 'The shoujo vocabulary',
          columns: ['Effect', 'Means'],
          rows: [
            { k: 'Four-point sparkles', v: 'Admiration, beauty, a character entering impressively' },
            { k: 'Flower background', v: 'Romantic feeling, gentleness', note: 'Roses read as dramatic, small blossoms as sweet.' },
            { k: 'Bubbles', v: 'Dreaminess, floating, infatuation' },
            { k: 'Pastel wash', v: 'Softens the whole emotional register of the panel' },
            { k: 'Screentone gradient behind the head', v: 'The default "this character is glowing" move' },
            { k: 'Critically', v: 'These are the VIEWER\'s feeling, not the subject\'s', note: 'Sparkles around A mean B is admiring A. That is the whole trick.' },
          ],
        },
        {
          kind: 'video',
          title: 'Shoujo Manga Screentone Tips & Tricks in Clip Studio Paint',
          id: 'u7QhsHrpm1U',
          channel: 'YouTube',
          why: 'The shoujo effect set built in the software you are using.',
        },
      ],
    },

    {
      id: 'ef-dread',
      title: 'Dread, shock and shame',
      tagline: 'The dark half of the vocabulary, and the more useful half.',
      minutes: 12,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'ef-dread', caption: 'Vertical shadow bars descending, eyes lost to shadow. Instantly legible as "something is very wrong".' },
        {
          kind: 'reference',
          title: 'The dark register',
          columns: ['Effect', 'Means'],
          rows: [
            { k: 'Vertical shadow bars', v: 'Dread, guilt, a realisation going bad', note: 'Descending over the frame is the standard reading.' },
            { k: 'Shadow over the eyes', v: 'Menace, dissociation, a character hiding themselves' },
            { k: 'Blue vertical lines on the face', v: 'Shock or horror. Nearly a comedy cliché — use knowingly' },
            { k: 'Heavy vignette', v: 'Closing in, claustrophobia, tunnel vision' },
            { k: 'Cross-hatching over a face', v: 'Embarrassment or unease, lighter than full shadow' },
            { k: 'Empty white background', v: 'Isolation — the opposite reading to the white-out', note: 'Context decides. Blown-out light vs empty void.' },
          ],
        },
      ],
    },

    {
      id: 'ef-colour',
      title: 'Colour fields and screentone',
      tagline: 'Flood the frame with one colour and the emotion is not negotiable.',
      minutes: 14,
      level: 'building',
      blocks: [
        {
          kind: 'compare',
          title: 'Same shot, two floods',
          badDemo: 'ef-rage',
          goodDemo: 'ef-despair',
          badLabel: 'Red — rage, danger, blood in the ears',
          goodLabel: 'Blue — despair, isolation, cold',
        },
        { kind: 'demo', title: 'Screentone density is a value', demo: 'ef-screentone', caption: 'In monochrome manga, tone density replaces colour. Pick the density the way you would pick a grey.' },
        {
          kind: 'reference',
          title: 'Colour field readings',
          columns: ['Colour', 'Reads as'],
          rows: [
            { k: 'Red', v: 'Rage, danger, passion, alarm' },
            { k: 'Blue', v: 'Despair, cold, isolation, calm', note: 'Context decides between despair and calm — usually the pose.' },
            { k: 'Yellow / orange', v: 'Comedy, energy, warmth, absurdity' },
            { k: 'Purple', v: 'Unease, the supernatural, dread' },
            { k: 'Green', v: 'Sickness, wrongness, envy', note: 'Rarely flattering. Use deliberately.' },
            { k: 'Desaturated grey', v: 'Numbness, dissociation, memory' },
          ],
        },
        {
          kind: 'video',
          title: 'Colour Theory: How Anime Chooses Colours',
          id: 'voDvkZm-jXg',
          channel: 'YouTube',
          why: 'Anime-specific colour storytelling, which is exactly this lesson at feature length.',
        },
      ],
    },

    {
      id: 'ef-restraint',
      title: 'When NOT to use them',
      tagline: 'The most important lesson in this track. Effects are a budget, not a toolbox.',
      minutes: 10,
      level: 'advanced',
      blocks: [
        {
          kind: 'compare',
          title: 'The failure mode',
          badDemo: 'ef-overloaded',
          goodDemo: 'ef-restrained',
          badLabel: 'Four effects at once — none of them mean anything',
          goodLabel: 'One effect, on the beat that needed it',
        },
        {
          kind: 'checklist',
          title: 'The discipline',
          items: [
            'One effect per beat. Two competing effects cancel out and read as noise.',
            'An effect on every panel means the reader stops seeing any of them.',
            'The quiet panels are what give the loud one its power. You are buying contrast.',
            'If the drawing already conveys the emotion, the effect is redundant — cut it.',
            'Test: cover the effect. If the panel still works, you did not need it. If the panel dies, the effect was carrying work the drawing should have done.',
          ],
        },
        {
          kind: 'checklist',
          title: 'The order to work in',
          items: [
            'Draw the pose and expression first. Make them carry the emotion alone.',
            'Only then ask whether the moment needs amplifying.',
            'Pick exactly one effect and name the feeling out loud before you draw it.',
            'Put it on a separate layer so you can turn it off and check honestly.',
          ],
        },
      ],
    },
  ],
};
