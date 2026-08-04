import type { Track } from '../types';

/**
 * Cinematography. Composition asks "where in the frame"; this track asks
 * "where is the camera, and why there". Every shot-size demo is the same
 * scene at a different scale, so the comparison is purely about distance.
 */
export const cinematography: Track = {
  id: 'cinematography',
  title: 'Cinematography',
  glyph: '🎥',
  accent: '#f472b6',
  blurb: 'Which shot to use when. Shot sizes, camera height, movement, framing and scene grammar.',
  lessons: [
    {
      id: 'cm-shotsizes',
      title: 'The seven shot sizes',
      tagline: 'One decision — how far away is the camera — and it changes everything.',
      minutes: 18,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'cm-ladder', caption: 'The same scene, seven distances, stepping automatically. Watch what you gain and what you give up at each rung.' },
        {
          kind: 'steps',
          title: 'The ladder, wide to tight',
          steps: [
            { label: 'Extreme wide', demo: 'cm-ews', note: 'Where are we — and how small is he in it.' },
            { label: 'Wide', demo: 'cm-ws', note: 'Figure and space, together.' },
            { label: 'Full', demo: 'cm-fs', note: 'Head to toe. Body language and action.' },
            { label: 'Medium', demo: 'cm-ms', note: 'Waist up. The dialogue workhorse.' },
            { label: 'Medium close', demo: 'cm-mcu', note: 'Chest up. Sincerity, quiet talk.' },
            { label: 'Close-up', demo: 'cm-cu', note: 'The face fills it. Emotion.' },
            { label: 'Extreme close', demo: 'cm-ecu', note: 'Eyes only. Maximum intensity, zero context.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'The trade you are always making',
          items: [
            'Wider = more information, less feeling. The audience observes.',
            'Tighter = more feeling, less information. The audience is inside it.',
            'You cannot have both in one shot. That is why scenes cut.',
            'The tighter you go, the longer you can hold it before it gets boring.',
          ],
        },
        {
          kind: 'video',
          title: 'Ultimate Guide to Camera Shots — Every Shot Size Explained',
          id: 'AyML8xuKfoc',
          channel: 'StudioBinder',
          why: 'The definitive shot-size reference, with film examples for each rung.',
        },
        {
          kind: 'video',
          title: 'All Camera Shot Sizes Explained',
          id: '53C4JPULu68',
          channel: 'YouTube',
          why: 'Shorter second pass if the first one was a lot.',
        },
      ],
    },

    {
      id: 'cm-decide',
      title: 'Which shot when',
      tagline: 'The decision table. Start from what the moment needs, not from what looks cool.',
      minutes: 15,
      level: 'starter',
      blocks: [
        { kind: 'hero', demo: 'cm-sceneflow', caption: 'The default scene moves from context to feeling, tightening as it goes. Learn the pattern, then break it on purpose.' },
        {
          kind: 'reference',
          title: 'Pick the shot from the job',
          columns: ['You need to…', 'Use'],
          rows: [
            { k: 'Open a new location', v: 'Extreme wide / establishing', note: 'Once, at the top. Repeating it stalls the scene.' },
            { k: 'Show scale or loneliness', v: 'Extreme wide, subject tiny and off-centre' },
            { k: 'Show a fight or full-body action', v: 'Full or wide', note: 'Cut tighter and the audience loses the choreography.' },
            { k: 'Show how two people relate', v: 'Two-shot, or a wide with both in frame' },
            { k: 'Ordinary dialogue', v: 'Medium, alternating with over-the-shoulder' },
            { k: 'Someone being honest', v: 'Medium close-up', note: 'Close enough to read, not so close it feels aggressive.' },
            { k: 'A single emotional beat', v: 'Close-up, and hold it' },
            { k: 'Shock, rage, resolve', v: 'Extreme close-up on the eyes', note: 'Spend these. Two per episode and they stop working.' },
            { k: 'Draw attention to an object', v: 'Insert / extreme close on the object' },
            { k: 'Show a decision being made', v: 'Slow dolly in on a close-up' },
            { k: 'End a scene', v: 'Crane or pull back to wide', note: 'Widening reads as release, as letting go.' },
            { k: 'Convey fate or helplessness', v: "Bird's eye / drone straight down" },
          ],
        },
        {
          kind: 'checklist',
          title: 'The three questions, in order',
          items: [
            'What does the audience need to KNOW right now? That sets your minimum width.',
            'What should they FEEL? That sets how tight you can afford to go.',
            'What did the previous shot already say? Do not repeat information.',
            'If two shots in a row are the same size, one of them is probably unnecessary.',
          ],
        },
        {
          kind: 'video',
          title: 'Framing and Shot Composition — Storyboarding and Animation',
          id: 'aWqslzkEt5Q',
          channel: 'YouTube',
          why: 'Shot choice specifically for animation, where every frame is drawn and therefore expensive.',
        },
      ],
    },

    {
      id: 'cm-height',
      title: 'Camera height and angle',
      tagline: 'Where you put the camera vertically is an opinion about the character.',
      minutes: 14,
      level: 'building',
      blocks: [
        {
          kind: 'steps',
          title: 'Three heights',
          steps: [
            { label: 'Low — powerful', demo: 'cm-low', note: 'Looking up. Threat, heroism, dominance.' },
            { label: 'Eye level — neutral', demo: 'cm-eye', note: 'The viewer is an equal. The honest default.' },
            { label: 'High — vulnerable', demo: 'cm-high', note: 'Looking down. Small, losing, watched.' },
          ],
        },
        { kind: 'demo', title: "Bird's eye and drone", demo: 'cm-birds', caption: 'Straight down turns people into pieces on a board. Fate, surveillance, isolation — and the reason drone shots feel cold.' },
        { kind: 'demo', title: 'The dutch tilt', demo: 'cm-dutch', caption: 'Tilt the horizon and the audience feels wrong before they can say why. Use once, and never for a calm scene.' },
        {
          kind: 'checklist',
          title: 'Using height honestly',
          items: [
            'The angle is a claim. A low angle on a coward is a joke or a lie — make sure you meant it.',
            'Height can change within a scene as power shifts. That is often the whole scene.',
            'Anime pushes this much further than live action: extreme lows for transformations, extreme highs for despair.',
            'Eye level is not boring. It is the baseline that makes the other two mean something.',
          ],
        },
        {
          kind: 'video',
          title: '19 Essential Camera Angles & Techniques',
          id: 'zzMe4BjBaH0',
          channel: 'YouTube',
          why: 'The full vocabulary of angles for storyboard artists in one video.',
        },
        {
          kind: 'video',
          title: 'Unlocking Cinematic Perspectives — High and Low Angles on Storyboards',
          id: 'b_XbzgpN2xY',
          channel: 'YouTube',
          why: 'Specifically how to draw these angles rather than shoot them.',
        },
      ],
    },

    {
      id: 'cm-movement',
      title: 'Camera movement',
      tagline: 'A moving camera makes a statement. A still one lets the actor make it.',
      minutes: 18,
      level: 'building',
      blocks: [
        {
          kind: 'steps',
          title: 'The moves worth knowing',
          steps: [
            { label: 'Pan', demo: 'cm-pan', note: 'Pivot left/right. Follow, reveal, link two things.' },
            { label: 'Tilt', demo: 'cm-tilt', note: 'Pivot up/down. Reveal height or a slow character reveal.' },
            { label: 'Dolly in', demo: 'cm-dolly', note: 'The camera travels. Growing realisation.' },
            { label: 'Crane out', demo: 'cm-crane', note: 'Rise and pull back. Endings and scale.' },
            { label: 'Handheld', demo: 'cm-handheld', note: 'Never still. Panic, immediacy.' },
          ],
        },
        { kind: 'demo', title: 'The anime TU', demo: 'cm-tu', caption: 'Track up: a hard, fast push held on the new size. Not a travel move — punctuation. Usually paired with a sound cue and speed lines.' },
        {
          kind: 'reference',
          title: 'Dolly vs zoom — the one people confuse',
          columns: ['Move', 'What happens'],
          rows: [
            { k: 'Dolly / track', v: 'The camera physically moves closer', note: 'Background shifts relative to subject. Feels like you are walking in.' },
            { k: 'Zoom', v: 'The lens changes; the camera stays put', note: 'No parallax. Feels observational, slightly artificial — often deliberate.' },
            { k: 'In 2D animation', v: 'Both are just scaling a layer', note: 'You fake a dolly by scaling background and character at DIFFERENT rates.' },
            { k: 'Dolly zoom', v: 'Dolly one way, zoom the other', note: 'The vertigo effect. Reserve for one moment in a whole project.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Rules for moving the camera',
          items: [
            'Every move needs a reason. "It looked static" is not a reason.',
            'Start and end on a composition that works as a still. The move connects two good frames.',
            'Slow moves feel inevitable. Fast moves feel urgent. Match the scene.',
            'In animation a camera move costs real money — this is why anime holds still and then snaps.',
          ],
        },
        {
          kind: 'video',
          title: 'Ultimate Guide to Camera Movement — Every Technique Explained',
          id: 'IiyBo-qLDeM',
          channel: 'StudioBinder',
          why: 'Every move with film examples and what each one means emotionally.',
        },
        {
          kind: 'video',
          title: 'Learn Camera Movement Basics: Pan, Tilt, Truck, Dolly, Roll, Pedestal',
          id: '87e4DN-86NE',
          channel: 'YouTube',
          why: 'The plain vocabulary, if the terms are new.',
        },
      ],
    },

    {
      id: 'cm-framing',
      title: 'Framing rules',
      tagline: 'Headroom, lead room, and the shots that put you inside a conversation.',
      minutes: 14,
      level: 'building',
      blocks: [
        {
          kind: 'compare',
          title: 'Headroom',
          badDemo: 'cm-headroom-bad',
          goodDemo: 'cm-headroom-good',
          badLabel: 'Too much headroom — the subject sinks',
          goodLabel: 'Eyes on the upper third',
        },
        {
          kind: 'compare',
          title: 'Lead room',
          badDemo: 'cm-leadroom-bad',
          goodDemo: 'cm-leadroom-good',
          badLabel: 'Crushed against the edge they face',
          goodLabel: 'Space in the direction they look',
        },
        { kind: 'demo', title: 'Over-the-shoulder', demo: 'cm-ots', caption: 'The near shoulder frames the far character and puts the viewer in the conversation instead of watching it.' },
        { kind: 'demo', title: 'The two-shot', demo: 'cm-twoshot', caption: 'When the relationship between two characters is the subject, keep them in one frame. Cutting between them separates them.' },
        {
          kind: 'reference',
          title: 'Framing quick rules',
          columns: ['Rule', 'Why'],
          rows: [
            { k: 'Eyes on the upper third', v: 'The face is what we read; put it where the eye goes' },
            { k: 'Lead room', v: 'Space ahead of a look or a movement, or it feels blocked' },
            { k: 'Never cut at a joint', v: 'Crop mid-thigh or mid-upper-arm, not at knee, ankle or wrist' },
            { k: 'Keep them in frame together', v: 'For connection. Separate frames read as distance' },
            { k: 'Insert shot', v: 'Cut to the object. The hand, the letter, the blade' },
            { k: 'POV shot', v: 'What the character sees. Always preceded by them looking' },
          ],
        },
      ],
    },

    {
      id: 'cm-grammar',
      title: 'Scene grammar',
      tagline: 'The 180 rule and the eyeline. Break these and your scene stops making spatial sense.',
      minutes: 16,
      level: 'advanced',
      blocks: [
        {
          kind: 'compare',
          title: 'The 180 degree rule',
          badDemo: 'cm-180-bad',
          goodDemo: 'cm-180-good',
          badLabel: 'Camera 4 crossed the line — A and B swap sides',
          goodLabel: 'All cameras one side — screen direction holds',
        },
        { kind: 'demo', title: 'Eyeline match', demo: 'cm-eyeline', caption: 'A look off-frame is a promise about the next shot. If she looks right, the thing must be on the right of the cut.' },
        {
          kind: 'checklist',
          title: 'The rules that keep space coherent',
          items: [
            'Draw an imaginary line between your two characters. Keep every camera on one side of it.',
            'Cross it and the audience thinks the characters swapped places or changed who they face.',
            'Screen direction: a character walking left keeps walking left across cuts, or they read as turning back.',
            'Cut on action — a movement started in one shot and completed in the next hides the cut.',
            'You may cross the line deliberately, to disorient. Do it when disorientation is the point.',
          ],
        },
        {
          kind: 'video',
          title: 'The 180 Degree Rule in Film (and How to Break the Line)',
          id: 'iW0bKUfvH2c',
          channel: 'YouTube',
          why: 'The rule and the legitimate ways around it.',
        },
        {
          kind: 'video',
          title: 'What Is Continuity Editing?',
          id: '33eWqDZ6sRc',
          channel: 'YouTube',
          why: '180 rule, match on action and eyeline as one connected system.',
        },
      ],
    },

    {
      id: 'cm-anime',
      title: 'How anime shoots',
      tagline: 'Limited animation turned budget constraints into a distinctive camera language.',
      minutes: 16,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'cm-pillow', caption: 'The pillow shot: no character, no plot, held for seconds. Anime uses emptiness as punctuation in a way live-action rarely dares.' },
        {
          kind: 'reference',
          title: 'The anime camera toolkit',
          columns: ['Technique', 'What it is'],
          rows: [
            { k: 'Held cel + camera move', v: 'One drawing, panned or scaled across', note: 'Motion for the price of a still. The foundation of TV anime.' },
            { k: 'Vertical pan on a tall BG', v: 'A single tall painting scrolled through', note: 'Towers, waterfalls, a character looking up.' },
            { k: 'TU / TB', v: 'Track up / track back — hard snap in or out', note: 'A beat, not a journey. Usually with a sound cue.' },
            { k: 'Pillow shot', v: 'An empty cutaway held between scenes', note: 'Sky, a cable, a cicada. Gives the audience room to feel.' },
            { k: 'The long hold', v: 'A still frame held far past comfort', note: 'Cheap AND dramatic. Anime\'s signature move.' },
            { k: 'Speed-line zoom', v: 'A tight push with radial lines drawn in', note: 'Straight from the Effects track — shock, realisation.' },
            { k: 'Bank / stock shots', v: 'Reused transformation and attack sequences', note: 'Budget technique that became an identity.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'What to steal from it',
          items: [
            'Contrast stillness with sudden motion. The hold is what makes the snap land.',
            'A camera move over a still drawing costs you one drawing. Use it constantly.',
            'Empty frames are allowed. Silence is a shot.',
            'Plan your expensive cut first, then make every other shot cheap enough to afford it.',
          ],
        },
        {
          kind: 'video',
          title: 'Cinematography (in Anime)',
          id: 'WVRJiY8rcc8',
          channel: 'YouTube',
          why: 'Analysis of anime camera language specifically. The most on-point video in this track.',
        },
        {
          kind: 'video',
          title: 'How Do Ekonte (Storyboards) Shape an Anime Director\'s Vision?',
          id: 'h9580i68VGQ',
          channel: 'YouTube',
          why: 'How shot decisions actually get made in an anime production.',
        },
      ],
    },

    {
      id: 'cm-storyboard',
      title: 'Putting it on paper',
      tagline: 'A storyboard is where all of this stops being theory.',
      minutes: 20,
      level: 'advanced',
      blocks: [
        { kind: 'hero', demo: 'cm-sceneflow', caption: 'Board the whole scene small before you draw anything properly. Shot choices are cheap to change here and expensive to change later.' },
        {
          kind: 'steps',
          title: 'Boarding a scene',
          steps: [
            { label: 'Write the beats first', note: 'One line per moment. No drawing yet.' },
            { label: 'Pick a shot size per beat', note: 'Use the decision table. Say why out loud.' },
            { label: 'Thumbnail each panel tiny', note: 'Matchbox size. Silhouette only.' },
            { label: 'Mark camera moves with arrows', note: 'Start frame, end frame, arrow between.' },
            { label: 'Check the 180 line', note: 'Sketch the overhead map. Confirm every camera is one side.' },
            { label: 'Read it through as a sequence', note: 'Two shots the same size in a row? Cut one.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Storyboard conventions',
          items: [
            'Arrows show camera movement; a second dashed frame shows where it ends.',
            'Note the shot size in the corner of every panel — WS, MS, CU.',
            'Write the dialogue or action under the panel, not inside it.',
            'A storyboard is for communication, not for looking good. Ugly and clear beats pretty and vague.',
          ],
        },
        {
          kind: 'practice',
          title: 'Free pad: board a scene',
          exercise: 'free-sketch',
          goal: 'Six panels. A character enters a room, sees something, and reacts. Pick a shot size for each and label it.',
        },
        {
          kind: 'video',
          title: 'Storyboarding a 2D Animation — Shot Types, Camera Moves and Tips',
          id: 'xpDQ5q7-S8M',
          channel: 'YouTube',
          why: 'A real board being built, with the shot reasoning spoken aloud.',
        },
        {
          kind: 'video',
          title: 'Storyboarding Tutorial: 5 Tips for Better Camera & Staging',
          id: 'ljN69G4QVtI',
          channel: 'YouTube',
          why: 'Camera and staging decisions, which is exactly this track applied.',
        },
      ],
    },
  ],
};
