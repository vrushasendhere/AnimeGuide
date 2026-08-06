import type { Track } from '../types';

/**
 * Character design as a process rather than a drawing skill. Construction
 * teaches how to draw a head; this teaches how to decide whose head it is.
 * The demos re-dress and re-colour one shared figure so each lesson isolates
 * a single design decision.
 */
export const chardesign: Track = {
  id: 'chardesign',
  title: 'Character Design',
  glyph: '🪪',
  accent: '#a78bfa',
  blurb: 'Creating an original character: brief, silhouette, costume, palette, model sheet, and staying on-model.',
  lessons: [
    {
      id: 'chd-brief',
      title: 'Start from a brief, not a drawing',
      tagline: 'Design is answering a question. Without the question you are just doodling.',
      minutes: 12,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'chd-brief', caption: 'Four lines of brief, and the design decisions start making themselves. The coat, the muted palette and the tired posture all came out of those words.' },
        {
          kind: 'reference',
          title: 'The four questions to answer first',
          columns: ['Question', 'What it decides'],
          rows: [
            { k: 'Who are they?', v: 'Role, status, age — sets proportion and costume class' },
            { k: 'What do they DO?', v: 'Their job shapes their body and their gear', note: 'A blacksmith and a scribe do not have the same silhouette.' },
            { k: 'What do they feel?', v: 'Posture, expression, how much they hide' },
            { k: 'What world is this?', v: 'Climate, technology, materials, palette', note: 'Cold wet world means layers. That is a design constraint, not a mood.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Working from a brief',
          items: [
            'Write it in one sentence before you draw. If you cannot, you do not know the character yet.',
            'Constraints help. "Can be anything" is the hardest brief there is.',
            'Every design choice should trace back to a line in the brief. If it cannot, ask why it is there.',
            'Keep the brief visible while you draw. It stops you drifting into "generic cool character".',
          ],
        },
      ],
    },

    {
      id: 'chd-silhouette',
      title: 'Silhouette first',
      tagline: 'If it does not read in black, no amount of rendering will save it.',
      minutes: 16,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'chd-thumbs', caption: 'Twenty rough silhouettes at thumbnail size, then circle the one worth developing. This is the actual professional process, and it takes about fifteen minutes.' },
        {
          kind: 'compare',
          title: 'The black-fill test',
          badDemo: 'chd-sil-weak',
          goodDemo: 'chd-sil-good',
          badLabel: 'Generic outline — could be anyone',
          goodLabel: 'Hair mass and coat flare — instantly a person',
        },
        {
          kind: 'checklist',
          title: 'What makes a silhouette work',
          items: [
            'One big memorable shape, not five competing ones.',
            'Break the outline somewhere — a flare, a spike, an asymmetry the eye can catch.',
            'Negative space counts: a gap between arm and body reads from across a room.',
            'Test it at 32 pixels. If you cannot tell who it is, keep iterating.',
            'Hair and costume outline do most of the work in anime. Bodies are similar; silhouettes are not.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Use Silhouettes for Interesting Character Design',
          id: '4lrSyBbxuOI',
          channel: 'YouTube',
          why: 'The silhouette-first method demonstrated end to end.',
        },
        {
          kind: 'video',
          title: 'Thumbnails: Designing with Shape and Silhouette',
          id: 'btuHCFIfYFM',
          channel: 'YouTube',
          why: 'Part of a concept-design fundamentals series — this is the industry workflow.',
        },
      ],
    },

    {
      id: 'chd-cast',
      title: 'Designing a cast',
      tagline: 'Characters are designed against each other, never in isolation.',
      minutes: 14,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'chd-cast', caption: 'Three characters, three heights, three shape families, three palettes. Nobody gets confused for anybody else.' },
        { kind: 'demo', title: 'The same cast in black', demo: 'chd-cast-sil', caption: 'The real test. If your cast is distinguishable as pure silhouette, the design work is done.' },
        {
          kind: 'checklist',
          title: 'Varying a cast',
          items: [
            'Vary height and proportion first — it is the fastest read at any distance.',
            'Give each one a different dominant shape: round, square, angular.',
            'Vary the density of detail. A busy character next to a clean one reads better than two mid ones.',
            'Palette-separate them. Two characters in the same colour family will be confused.',
            'Line them up side by side regularly. Designs drift apart when made in isolation.',
          ],
        },
        {
          kind: 'demo',
          title: 'Shape language, in depth',
          demo: 'cd-shapes',
          caption: 'The shape vocabulary is covered fully in Cute Characters & Depth. Here it is being applied across a group rather than to one design.',
        },
      ],
    },

    {
      id: 'chd-costume',
      title: 'Costume and props',
      tagline: 'Clothes are the loudest thing you can say about a person without words.',
      minutes: 18,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'chd-costumes', caption: 'Same body, same face, three outfits. Each one tells you something different about how this person expects the world to treat them.' },
        {
          kind: 'reference',
          title: 'What clothing communicates',
          columns: ['Choice', 'Reads as'],
          rows: [
            { k: 'Coverage', v: 'How much they hide', note: 'High collars and long coats read as guarded. Bare arms read as open or reckless.' },
            { k: 'Fit', v: 'Tight = capable or vain · loose = comfortable or hiding something' },
            { k: 'Condition', v: 'Patched, stained, immaculate — status and history in one detail' },
            { k: 'Material', v: 'Leather, silk, canvas. Implies climate, wealth and job' },
            { k: 'Asymmetry', v: 'One pauldron, one glove — instantly more designed' },
            { k: 'Props', v: 'What they carry is what they value', note: 'A prop with wear marks tells a story a clean one cannot.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Designing an outfit',
          items: [
            'Function before fashion. Ask what the job of each garment is.',
            'Three levels of detail: big shapes, medium breakup, small accents. Not evenly spread.',
            'Repeat a motif — a shape, a buckle, a trim — so the outfit reads as one design.',
            'Draw it from behind. Backs are where lazy designs collapse.',
            'Remember an animator has to draw this a thousand times. Every buckle is a cost.',
          ],
        },
        {
          kind: 'video',
          title: 'Design Better Clothing for Your Characters',
          id: 'XSGrm5jrFK0',
          channel: 'YouTube',
          why: 'Clothing as characterisation rather than decoration.',
        },
        {
          kind: 'video',
          title: 'How to Design Outfits for Characters',
          id: 'dIsESg6gTrQ',
          channel: 'DrawlikeaSir',
          why: 'Same channel as the Loomis lesson in Construction — practical and anime-oriented.',
        },
      ],
    },

    {
      id: 'chd-palette',
      title: 'The character palette',
      tagline: 'Three or four colours with jobs. More than that and the character stops reading.',
      minutes: 16,
      level: 'building',
      blocks: [
        {
          kind: 'compare',
          title: 'The same design, two palettes',
          badDemo: 'chd-pal-busy',
          goodDemo: 'chd-pal-tight',
          badLabel: 'Five competing hues — the eye has nowhere to rest',
          goodLabel: 'Limited family plus one accent',
        },
        { kind: 'demo', title: 'The 60/30/10 split', demo: 'chd-pal-ratio', caption: 'A dominant, a secondary and a small accent. The accent goes near the face, because that is where you want people looking.' },
        {
          kind: 'checklist',
          title: 'Rules for character colour',
          items: [
            'Pick a value structure first — dark boots, mid body, light face is the classic.',
            'One accent colour, used two or three times maximum. That is what makes it an accent.',
            'Put the accent near the head. Colour draws the eye; the face is where you want it.',
            'Skin and hair are part of the palette, not separate from it.',
            'Test in greyscale. If the character disappears against a mid background, fix the values.',
          ],
        },
        {
          kind: 'demo',
          title: 'Palette theory, in depth',
          demo: 'cl-palette',
          caption: 'Harmony, value structure and accent logic are covered fully in Colour & Light. This lesson is that theory applied to one person.',
        },
        {
          kind: 'video',
          title: 'Best Techniques for Character Design Colour Palettes',
          id: 'UmG9jC1gv2M',
          channel: 'YouTube',
          why: 'Several palettes built for one character, showing how much mood changes.',
        },
        {
          kind: 'video',
          title: 'How to Choose Colours for Your Characters Easily — 5 Ways',
          id: 'hUomxQGSc68',
          channel: 'YouTube',
          why: 'Five concrete methods rather than general theory.',
        },
      ],
    },

    {
      id: 'chd-signature',
      title: 'The signature detail',
      tagline: 'One thing people will remember, and one thing they will draw in fan art.',
      minutes: 10,
      level: 'building',
      blocks: [
        { kind: 'hero', demo: 'chd-signature', caption: 'Every memorable character has one. A scar, a hairpin, an oversized scarf, a single red glove. Pick yours deliberately rather than hoping one emerges.' },
        {
          kind: 'checklist',
          title: 'Choosing a signature',
          items: [
            'It must survive at silhouette size, or in one flat colour.',
            'It should mean something. The best signatures carry backstory.',
            'One per character. Two signatures is zero signatures.',
            'Put it near the face or the hands — the two places the eye goes.',
            'Ask: if someone drew this character from memory, what would they get right? Design that.',
          ],
        },
      ],
    },

    {
      id: 'chd-modelsheet',
      title: 'The model sheet',
      tagline: 'The document that turns a nice drawing into a character someone else can draw.',
      minutes: 20,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'chd-turnaround', caption: 'Front, three-quarter, side and back, all locked to shared horizontal guides. Every level must line up across all four views.' },
        { kind: 'demo', title: 'Expression sheet', demo: 'chd-expressions', caption: 'The same head across a range of moods. This is where you discover whether the design can actually act.' },
        {
          kind: 'reference',
          title: 'What a full sheet contains',
          columns: ['Sheet', 'Purpose'],
          rows: [
            { k: 'Turnaround', v: 'Front, 3/4, side, back on shared guides', note: 'The core document. Everything else is optional.' },
            { k: 'Expression sheet', v: '6–12 faces covering the emotional range' },
            { k: 'Pose sheet', v: 'Three or four poses showing how they move and stand' },
            { k: 'Detail callouts', v: 'Zoomed views of props, hands, the signature detail' },
            { k: 'Colour callouts', v: 'Swatches with values noted, plus a shadow colour' },
            { k: 'Height comparison', v: 'This character next to the rest of the cast' },
          ],
        },
        {
          kind: 'video',
          title: 'How I Make Character Turnarounds and Sheets',
          id: 'chTb_ic-oVI',
          channel: 'YouTube',
          why: 'A full sheet built start to finish.',
        },
        {
          kind: 'video',
          title: 'How to Draw Character Turnarounds (the Easy Way)',
          id: 'GuWAhysR1qY',
          channel: 'YouTube',
          why: 'The construction shortcuts that keep views aligned.',
        },
        {
          kind: 'video',
          title: 'How to Create a Character Expression Sheet',
          id: 'URFCW4fywlw',
          channel: 'YouTube',
          why: 'Specifically the expression half, and how it builds design consistency.',
        },
      ],
    },

    {
      id: 'chd-consistency',
      title: 'Staying on-model',
      tagline: 'Drawing them the same twice is a different skill from designing them once.',
      minutes: 16,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'chd-consistency', caption: 'Write down the measurements that must not drift. Ratios survive scaling; absolute sizes do not.' },
        {
          kind: 'checklist',
          title: 'How to stay on-model',
          items: [
            'Record key ratios, not measurements: "belt at 2.6 heads", not "belt at 90 pixels".',
            'Pick three landmarks you always check — usually eye line, hair mass, and total head count.',
            'Redraw the character from memory, then compare against the sheet. The gaps are your weak points.',
            'Keep the turnaround open on a second monitor while you work.',
            'Drift is normal and often improves the design. Update the sheet deliberately instead of drifting by accident.',
          ],
        },
        {
          kind: 'practice',
          title: 'Drill: the construction under it',
          exercise: 'ellipse-repeat',
          goal: 'On-model consistency is repeatability. If you cannot draw the same ellipse three times, you cannot draw the same head twice.',
        },
      ],
    },

    {
      id: 'chd-iterate',
      title: 'Iteration',
      tagline: 'Your first idea is a starting point, not a design. Twenty, then three, then one.',
      minutes: 14,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'chd-funnel', caption: 'Explore wide and cheap, shortlist honestly, then commit to one. The mistake is committing at stage one.' },
        {
          kind: 'checklist',
          title: 'Iterating well',
          items: [
            'Twenty thumbnails before any of them get a face. Quantity first, quality later.',
            'Deliberately draw bad ones. They map the edges of the space and make the good ones obvious.',
            'Shortlist by silhouette only. Do not let rendering seduce you into keeping a weak design.',
            'Combine: take the head from #4 and the coat from #11. Designs are made of parts.',
            'Sleep on the shortlist. The one you still like tomorrow is the one.',
            'Keep every rejected sketch. They become other characters later.',
          ],
        },
        {
          kind: 'practice',
          title: 'Free pad: twenty silhouettes',
          exercise: 'free-sketch',
          goal: 'Twenty small filled shapes, no faces, no detail. Ten minutes. Then circle the three that read best.',
        },
        {
          kind: 'video',
          title: 'Character Ideation Focusing on Silhouette',
          id: 'h1F03EWl_3s',
          channel: 'YouTube',
          why: 'The exploration stage specifically — generating options rather than polishing one.',
        },
      ],
    },
  ],
};
