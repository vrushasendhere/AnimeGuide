import type { Track } from '../types';

/**
 * Software track. No drawn figures here on purpose: a hand-authored SVG of a
 * UI would be a guess about someone else's interface. Exact values go in
 * reference tables, and the demonstration is left to video.
 */
export const clipstudio: Track = {
  id: 'clipstudio',
  title: 'Clip Studio Paint',
  glyph: '🖥️',
  accent: '#7dd3fc',
  blurb: 'The software, basics to advanced brush engine. Exact settings, exact menu paths.',
  lessons: [
    {
      id: 'csp-setup',
      title: 'Setup and canvas',
      tagline: 'Get the canvas right once and you never fight resolution again.',
      minutes: 12,
      level: 'starter',
      blocks: [
        {
          kind: 'steps',
          title: 'First launch',
          steps: [
            { label: 'File → New', note: 'Not the default canvas. Always set it deliberately.' },
            { label: 'Pick the preset by purpose', note: 'Illustration, Comic, or Animation — they expose different panels.' },
            { label: 'Set resolution before you draw', note: 'You cannot add detail back after starting too small.' },
            { label: 'Save as .clip immediately', note: 'Layers only survive in .clip. PNG flattens everything.' },
          ],
        },
        {
          kind: 'reference',
          title: 'Canvas settings that matter',
          columns: ['Setting', 'Use this'],
          rows: [
            { k: 'Illustration', v: '2000–3000 px on the long edge, 350 dpi', note: 'Work big, export small — mistakes shrink away.' },
            { k: 'Print / doujin', v: 'B5 or A4 at 600 dpi, monochrome', note: '600 dpi only matters for line art going to print.' },
            { k: 'Animation', v: '1920×1080, 72 dpi, 24 fps', note: 'Higher dpi buys nothing on screen and costs you speed.' },
            { k: 'Colour mode', v: 'RGB for screen, CMYK only if a printer asked', note: 'Never start in CMYK by default.' },
            { k: 'Basic expression colour', v: 'Colour', note: 'Set to Monochrome only for print-bound manga line art.' },
          ],
        },
        {
          kind: 'reference',
          title: 'Preferences worth changing on day one',
          columns: ['Where', 'Change'],
          rows: [
            { k: 'File → Preferences → Tablet', v: 'Confirm the correct tablet driver (Wintab vs Tablet PC)', note: 'This is the fix for "pressure not working".' },
            { k: 'File → Preferences → Performance', v: 'Raise memory allocation to ~70%', note: 'Directly reduces lag on large canvases.' },
            { k: 'File → Preferences → Canvas', v: 'Enable "Use canvas rotation"', note: 'Rotating the canvas is how you draw comfortable arcs.' },
            { k: 'Auto-save', v: 'Turn it on and set 5 minutes', note: 'Off by default in older versions.' },
          ],
        },
        {
          kind: 'video',
          title: 'How to Use Clip Studio Paint STEP BY STEP For Beginners [Complete Guide]',
          id: 'IfcvdjTGKsQ',
          channel: 'YouTube',
          why: 'The single most complete "start here" walkthrough. Watch this before anything else.',
        },
        {
          kind: 'video',
          title: 'Clip Studio Paint Crash Course for Beginners',
          id: '7kiK52An2-c',
          channel: 'YouTube',
          why: 'Faster second pass over the same ground once you have the app open.',
        },
      ],
    },

    {
      id: 'csp-interface',
      title: 'The interface',
      tagline: 'Five panels do 95% of the work. Learn those and ignore the rest for now.',
      minutes: 10,
      level: 'starter',
      blocks: [
        {
          kind: 'reference',
          title: 'The panels that matter',
          columns: ['Panel', 'What it is for'],
          rows: [
            { k: 'Tool', v: 'The tool families — pen, brush, fill, selection, ruler' },
            { k: 'Sub Tool', v: 'The actual variants inside a family', note: 'This is where the real brushes live. Beginners miss it.' },
            { k: 'Tool Property', v: 'Settings for the selected sub tool — size, opacity, stabilization', note: 'The wrench icon at its bottom right opens ALL settings.' },
            { k: 'Layer', v: 'Stack, blend modes, clipping, masks' },
            { k: 'Navigator', v: 'Zoomed-out view + rotation', note: 'Your permanent "does this read small?" check.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Set up your workspace once',
          items: [
            'Drag panels where you want them, then Window → Workspace → Register Workspace.',
            'Make separate workspaces for Illustration and Animation — the panels you need differ.',
            'Add your most-used tools to the Quick Access panel and dock it near the canvas.',
            'If a panel vanishes, it is under Window. Nothing is ever actually gone.',
          ],
        },
        {
          kind: 'video',
          title: 'How to Use CLIP STUDIO PAINT — Digital Art Tutorial for Beginners',
          id: 'Zp4KDLMsQcY',
          channel: 'YouTube',
          why: 'Interface tour with each panel explained as it is used.',
        },
      ],
    },

    {
      id: 'csp-brushes-basic',
      title: 'Brushes: the basics',
      tagline: 'Six sub tools cover almost everything. Stop collecting brushes.',
      minutes: 15,
      level: 'starter',
      blocks: [
        {
          kind: 'reference',
          title: 'The starting six',
          columns: ['Sub tool', 'Use it for'],
          rows: [
            { k: 'Pen → G-pen', v: 'Main line art. Strong pressure taper', note: 'The default anime/manga inking pen.' },
            { k: 'Pen → Mapping pen', v: 'Fine detail lines, eyelashes, thin hair strands' },
            { k: 'Pencil → Real pencil', v: 'Sketching and roughs' },
            { k: 'Brush → Opaque watercolour', v: 'Painterly blending when you want soft edges' },
            { k: 'Airbrush → Soft', v: 'Gradients, blush, glow. Use sparingly in cel style' },
            { k: 'Blend → Blur', v: 'Softening a hard edge after the fact' },
          ],
        },
        {
          kind: 'reference',
          title: 'The three controls you actually adjust',
          columns: ['Control', 'What it does'],
          rows: [
            { k: 'Brush Size', v: '[ and ] to step down/up', note: 'Bind these first. You will use them constantly.' },
            { k: 'Opacity', v: 'Lower for sketching, 100% for line art', note: 'Build value with repeated strokes, not one heavy one.' },
            { k: 'Stabilization', v: '0 for sketching, 5–15 for line art', note: 'Above ~20 the pen lags behind the cursor and feels dead.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Habits worth forming now',
          items: [
            'Right-click drag on canvas changes brush size live — faster than the slider.',
            'Hold Alt with any brush to temporarily become the colour picker.',
            'Sketch at low opacity on a blue-tinted layer, then ink above it.',
            'One pen for line art. Brush-shopping is procrastination with a progress bar.',
          ],
        },
        {
          kind: 'video',
          title: 'Total Beginners Guide to Drawing in Clip Studio Paint',
          id: '6cwfkCl8fwo',
          channel: 'YouTube',
          why: 'Tool-by-tool on an actual drawing rather than a feature list.',
        },
      ],
    },

    {
      id: 'csp-lineart',
      title: 'Line art and vectors',
      tagline: "CSP's vector layers are the reason it beats Photoshop for line art.",
      minutes: 20,
      level: 'building',
      blocks: [
        {
          kind: 'steps',
          title: 'Clean line art workflow',
          steps: [
            { label: 'New vector layer', note: 'Layer → New Layer → Vector Layer.' },
            { label: 'Set stabilization 5–15', note: 'Enough to kill tremor, not enough to feel laggy.' },
            { label: 'Ink with long confident strokes', note: 'Same rule as paper — speed straightens the line.' },
            { label: 'Fix with Correct Line Width', note: 'Thicken or thin a drawn line without redrawing it.' },
            { label: 'Erase to intersection', note: 'Vector eraser set to "Erase up to intersection" — kills overhangs instantly.' },
          ],
        },
        {
          kind: 'reference',
          title: 'What vector layers give you',
          columns: ['Feature', 'Where'],
          rows: [
            { k: 'Erase up to intersection', v: 'Eraser → Vector, set Vector eraser to "Up to intersection"', note: 'The single best feature. Cleans crossing lines in one tap.' },
            { k: 'Correct line width', v: 'Correct → Correct line width', note: 'Add line weight after inking, non-destructively.' },
            { k: 'Reshape a drawn line', v: 'Correct → Control point', note: 'Move, add or delete points on an existing stroke.' },
            { k: 'Scale with no pixelation', v: 'Any transform', note: 'Lines re-render at the new size instead of blurring.' },
            { k: 'Limitation', v: 'No texture brushes, no painting', note: 'Vector layers are for line art only.' },
          ],
        },
        {
          kind: 'video',
          title: 'Easier Line Art Using Vector Layers in Clip Studio Paint',
          id: 'Exs7pA_L4k4',
          channel: 'YouTube',
          why: 'Shows erase-to-intersection and correct-line-width, the two features worth switching for.',
        },
        {
          kind: 'video',
          title: 'How to Get Smooth Lines in Clip Studio Paint (Stabilization)',
          id: 'tKzKAZJ7bRM',
          channel: 'YouTube',
          why: 'Exactly where to set stabilization and why more is not better.',
        },
      ],
    },

    {
      id: 'csp-layers',
      title: 'Layers, clipping and blend modes',
      tagline: 'Clipping is how cel shading gets done without ever going outside the lines.',
      minutes: 18,
      level: 'building',
      blocks: [
        {
          kind: 'reference',
          title: 'Layer features you need',
          columns: ['Feature', 'What it does'],
          rows: [
            { k: 'Clip to Layer Below', v: 'Confines this layer to the pixels of the one under it', note: 'The core cel-shading move. Shadow layer clipped to the skin flat.' },
            { k: 'Lock Transparent Pixels', v: 'Paint only where pixels already exist', note: 'Alternative to clipping when you do not want an extra layer.' },
            { k: 'Layer Mask', v: 'Hide parts non-destructively', note: 'Always prefer a mask over erasing.' },
            { k: 'Reference Layer', v: 'Marks a layer for the fill tool to read', note: 'Set your line art as reference, then fill on a layer below.' },
            { k: 'Draft Layer', v: 'Excluded from export and from fill detection', note: 'Set your sketch to this and stop hiding it manually.' },
            { k: 'Layer Colour', v: 'Recolours a whole layer to one hue', note: 'Turn a sketch blue so your ink reads against it.' },
          ],
        },
        {
          kind: 'reference',
          title: 'Blend modes actually used in anime colouring',
          columns: ['Mode', 'Use'],
          rows: [
            { k: 'Multiply', v: 'Shadows. The one you will use most', note: 'Pick a mid blue-purple and let it darken everything under it.' },
            { k: 'Screen', v: 'Soft light bloom, fog, haze' },
            { k: 'Add (Glow)', v: 'Rim light, highlights, magic effects', note: 'Very strong. Use at 20–40% opacity.' },
            { k: 'Overlay', v: 'Pushing colour temperature into an area' },
            { k: 'Normal', v: 'Flats and hard-edged cel shadows', note: 'Hard cel shadows are often just Normal with a picked colour.' },
          ],
        },
        {
          kind: 'video',
          title: 'How to Choose Which Layer Mode to Use',
          id: 'Y9TGh_phvw0',
          channel: 'YouTube',
          why: 'Goes mode by mode with visible results instead of theory.',
        },
        {
          kind: 'video',
          title: 'Make Changes Easier with Layers — Official CSP Tutorial',
          id: 'jdNzl0O1EIw',
          channel: 'Clip Studio Official',
          why: 'From the developers, so the menu paths are always current.',
        },
      ],
    },

    {
      id: 'csp-flatting',
      title: 'Flatting and the fill tool',
      tagline: 'Reference layers turn twenty minutes of colouring into about two.',
      minutes: 15,
      level: 'building',
      blocks: [
        {
          kind: 'steps',
          title: 'The fast flatting method',
          steps: [
            { label: 'Set line art as Reference Layer', note: 'Lighthouse icon at the top of the Layer panel.' },
            { label: 'New layer below the line art', note: 'Colour goes under, never on the line layer.' },
            { label: 'Fill tool → Refer to other layers', note: 'Now the bucket reads your lines from the layer below.' },
            { label: 'Raise "Close gap" to 2–3', note: 'Fills across small breaks in the line art.' },
            { label: 'Set "Area scaling" to 2–4', note: 'Expands the fill under the line so no white halo remains.' },
            { label: 'One layer per material', note: 'Skin, hair, eyes, clothes — separate layers, each one clippable.' },
          ],
        },
        {
          kind: 'reference',
          title: 'Fill tool settings',
          columns: ['Setting', 'Value'],
          rows: [
            { k: 'Refer to other layers', v: 'On', note: 'The whole point. Without it the bucket only sees its own layer.' },
            { k: 'Close gap', v: '2–3', note: 'Higher if your sketch has gappy lines.' },
            { k: 'Area scaling', v: '2–4 px', note: 'Kills the white fringe between colour and line.' },
            { k: 'Colour error', v: '10–20', note: 'Raise it if anti-aliased lines are blocking the fill.' },
            { k: 'Lasso Fill', v: 'Sub tool under Fill', note: 'Draw a shape and it fills instantly — best for open areas.' },
          ],
        },
        {
          kind: 'video',
          title: 'Clip Studio Paint Tutorial: Master the Fill Tool',
          id: '7ihPsX7X54o',
          channel: 'YouTube',
          why: 'Every fill setting explained with the failure case each one fixes.',
        },
        {
          kind: 'video',
          title: 'Create Colour Flats Using Reference Layers',
          id: '9TooBktORGc',
          channel: 'YouTube',
          why: 'The reference-layer trick specifically, start to finish.',
        },
      ],
    },

    {
      id: 'csp-cel',
      title: 'Cel shading in CSP',
      tagline: 'The Track 3 technique, as an exact click sequence.',
      minutes: 20,
      level: 'building',
      blocks: [
        {
          kind: 'steps',
          title: 'Shading a character',
          steps: [
            { label: 'Select the skin flat layer', note: 'Flats must already be separated per material.' },
            { label: 'New layer above it → Clip to Layer Below', note: 'Now nothing you paint can escape the skin.' },
            { label: 'Set it to Multiply', note: 'Pick a mid blue-purple, not grey.' },
            { label: 'Block shadow with the G-pen', note: 'Hard edge. Use the pen, not the airbrush.' },
            { label: 'Second clipped layer for deep shadow', note: 'Only in the deepest pockets.' },
            { label: 'Add (Glow) layer for rim light', note: 'At 20–40% opacity, on the side away from the key.' },
            { label: 'Repeat per material', note: 'Hair, eyes and cloth each get their own clipped stack.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Why it goes wrong',
          items: [
            'Shadow drawn with a soft airbrush — that is digital painting, not cel. Use a hard pen.',
            'Shadow layer not clipped, so colour spills past the flat.',
            'Grey shadows. Multiply with a saturated blue-purple instead.',
            'Rim light at full opacity. It should suggest light, not repaint the edge.',
          ],
        },
        {
          kind: 'video',
          title: 'The Power of Masking and Blending Modes in Clip Studio Paint',
          id: 'aS7TltA9MMw',
          channel: 'YouTube',
          why: 'Clipping and masking used together on a real illustration.',
        },
      ],
    },

    {
      id: 'csp-brush-settings',
      title: 'Brush settings, in depth',
      tagline: 'The brush engine is the deep end. Six panels control everything.',
      minutes: 25,
      level: 'advanced',
      blocks: [
        {
          kind: 'reference',
          title: 'The Sub Tool Detail panel',
          columns: ['Panel', 'Controls'],
          rows: [
            { k: 'Brush Size', v: 'Size, and what modulates it', note: 'Set Size to be driven by Pen Pressure for tapered strokes.' },
            { k: 'Ink', v: 'Opacity, blending mode, "Combine modes of layer"' },
            { k: 'Brush Tip', v: 'Circle vs a material image, hardness, thickness, angle', note: 'Swapping the tip for an image is how textured brushes are made.' },
            { k: 'Spraying Effect', v: 'Particle size, density, spread', note: 'Turns one tip into foliage, sparkles, star fields.' },
            { k: 'Stroke', v: 'Gap, ribbon, repeat', note: 'Gap makes dotted or chain strokes. Ribbon stretches the tip along the path.' },
            { k: 'Texture', v: 'Paper grain applied to the stroke', note: 'Low density reads as canvas; high reads as noise.' },
            { k: 'Correction', v: 'Stabilization, post correction, taper', note: 'Taper "in and out" is what makes hair brushes feel right.' },
          ],
        },
        {
          kind: 'reference',
          title: 'Recipes worth knowing',
          columns: ['Want', 'Change'],
          rows: [
            { k: 'Tapered ink line', v: 'Correction → Taper: start and end, by pressure' },
            { k: 'Hair brush', v: 'Brush Tip: thin ellipse + Spraying off + strong taper' },
            { k: 'Texture / grain brush', v: 'Brush Tip: image material + Texture at 30–50% density' },
            { k: 'Foliage / crowd brush', v: 'Spraying Effect on, particle density mid, spread wide' },
            { k: 'Blending brush', v: 'Ink → set "Borrow colour" (Mix ground colour) on' },
            { k: 'Chain / dotted stroke', v: 'Stroke → Gap, set to a fixed distance' },
          ],
        },
        {
          kind: 'video',
          title: 'Guide to Clip Studio Paint Brush Settings',
          id: 'P-7AI5xTXTg',
          channel: 'YouTube',
          why: 'A systematic pass through the Sub Tool Detail panels — the reference video for this lesson.',
        },
        {
          kind: 'video',
          title: 'You Should Modify ALL Your Clip Studio Brushes (And How to Do It)',
          id: 'D7wV2JPtZT8',
          channel: 'YouTube',
          why: 'Argues for tuning defaults rather than downloading more brushes. Correct advice.',
        },
      ],
    },

    {
      id: 'csp-custom-brushes',
      title: 'Making your own brushes',
      tagline: 'Any drawing you make can become a brush tip in about four clicks.',
      minutes: 20,
      level: 'advanced',
      blocks: [
        {
          kind: 'steps',
          title: 'Turn a drawing into a brush',
          steps: [
            { label: 'Draw the shape in black on white', note: 'Black becomes the stroke; white becomes transparent.' },
            { label: 'Select it, Edit → Register Material → Image', note: 'Tick "Use for brush tip shape".' },
            { label: 'Duplicate an existing brush', note: 'Never edit a default directly — duplicate first.' },
            { label: 'Sub Tool Detail → Brush Tip → Material', note: 'Delete the circle tip, add your registered material.' },
            { label: 'Tune Spraying, Stroke and Taper', note: 'This is where it stops being a stamp and becomes a brush.' },
            { label: 'Register as a new sub tool', note: 'Give it a clear name so it survives your future self.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Practical notes',
          items: [
            'Multiple tip images in one brush makes strokes look hand-varied instead of stamped.',
            'Set tip Direction to "Random" for foliage, "Along stroke" for hair and fur.',
            'Clip Studio Assets has thousands of free brushes — study their settings, do not just use them.',
            'Export your brushes (right-click a sub tool) so a reinstall does not cost you your kit.',
          ],
        },
        {
          kind: 'video',
          title: 'Tutorial: How To Make Custom Brushes in Clip Studio Paint',
          id: 'M55J0dpZddA',
          channel: 'YouTube',
          why: 'Brush settings, custom tips and textures, plus design advice — the most complete of the set.',
        },
        {
          kind: 'video',
          title: 'How to Create and Customize Textured Brushes',
          id: 'dqg6D6_fsQY',
          channel: 'YouTube',
          why: 'Focused specifically on texture, which is the fiddliest part.',
        },
      ],
    },

    {
      id: 'csp-rulers-3d',
      title: 'Rulers and 3D',
      tagline: 'Perspective you cannot draw wrong, and pose reference you can rotate.',
      minutes: 20,
      level: 'advanced',
      blocks: [
        {
          kind: 'reference',
          title: 'Rulers',
          columns: ['Ruler', 'Use'],
          rows: [
            { k: 'Perspective ruler', v: 'Layer → Ruler/Frame → Create Perspective Ruler', note: 'Pick 1, 2 or 3 point. Every stroke then snaps to a vanishing point.' },
            { k: 'Symmetrical ruler', v: 'Mirrors strokes live', note: 'Faces, mecha, mandalas, wings.' },
            { k: 'Special ruler → Parallel', v: 'Locks strokes to one angle', note: 'Rain, speed lines, hatching.' },
            { k: 'Special ruler → Radial', v: 'All strokes radiate from a point', note: 'Impact lines. Instant manga drama.' },
            { k: 'Snap toggle', v: 'Ctrl+2 or the ruler icon', note: 'Turn snapping off without deleting the ruler.' },
          ],
        },
        {
          kind: 'reference',
          title: '3D features',
          columns: ['Feature', 'What it gives you'],
          rows: [
            { k: '3D drawing figure', v: 'Poseable mannequin, drag it onto the canvas', note: 'Drag a limb to pose; the rest of the body responds.' },
            { k: '3D primitives', v: 'Boxes, cylinders, spheres for construction' },
            { k: 'Pose from a photo', v: 'Drop an image on a 3D figure to auto-pose it', note: 'Works from your own phone photos.' },
            { k: 'Extract lines from 3D', v: 'Layer → Convert to → Convert Layer (LT conversion)', note: 'EX only. Turns a 3D scene into editable line art.' },
            { k: 'Grab perspective from 3D', v: 'Right-click a 3D layer → Create perspective ruler', note: 'Set up a scene in 3D, then draw over it by hand.' },
          ],
        },
        {
          kind: 'video',
          title: 'Perspective Ruler, Vectors & 3D Features — Digital Art Essentials',
          id: 'I5g0rv5dApA',
          channel: 'YouTube',
          why: 'Covers all three of this lesson’s tools in one pass.',
        },
        {
          kind: 'video',
          title: 'Pulling a Perspective Grid Out of a 3D Model',
          id: 'iGM3zo5Upt4',
          channel: 'YouTube',
          why: 'The 3D-to-ruler trick, which is the genuinely powerful one.',
        },
      ],
    },

    {
      id: 'csp-animation',
      title: 'Animating in CSP',
      tagline: 'Everything from Track 5, in the timeline where you will actually do it.',
      minutes: 30,
      level: 'advanced',
      blocks: [
        {
          kind: 'steps',
          title: 'Setting up an animation',
          steps: [
            { label: 'New canvas with the Animation preset', note: '1920×1080, 24 fps, and set the frame count.' },
            { label: 'Window → Timeline', note: 'If there is no timeline, you are not in an animation file.' },
            { label: 'Animation → New animation layer → Animation folder', note: 'Cels must live inside an animation folder to appear on the timeline.' },
            { label: 'Draw the keys first', note: 'Extremes only. Same discipline as Track 5.' },
            { label: 'Enable onion skin', note: 'Animation → Show Animation Cels → Enable Onion Skin.' },
            { label: 'Add inbetweens on new cels', note: 'Right-click the timeline to add a cel at a frame.' },
            { label: 'Export', note: 'File → Export animation → Animated GIF, MP4 or image sequence.' },
          ],
        },
        {
          kind: 'reference',
          title: 'Animation features',
          columns: ['Feature', 'Where / what'],
          rows: [
            { k: 'Onion skin', v: 'Animation → Show Animation Cels → Enable Onion Skin', note: 'Set how many frames before/after in the same submenu.' },
            { k: 'Light table', v: 'Pin any cel as a persistent reference', note: 'Better than onion skin when matching to one specific drawing.' },
            { k: 'On twos', v: 'Drag a cel to span two frames on the timeline', note: 'Halves your drawing count. Standard TV anime practice.' },
            { k: 'Play', v: 'Spacebar or the timeline play button', note: 'Judge by playback, never by looking at single frames.' },
            { k: 'Frame count limit', v: 'PRO caps at 24 frames; EX is unlimited', note: 'The main reason animators upgrade to EX.' },
          ],
        },
        {
          kind: 'video',
          title: 'How to Animate in Clip Studio Paint — Tutorial for Beginners',
          id: 'YEWQy6-KDZM',
          channel: 'YouTube',
          why: 'Timeline, animation folders and cels from zero.',
        },
        {
          kind: 'video',
          title: 'Animating with CSP Part 2: Onion Skin and Light Table',
          id: 't-8QhIWl_Zc',
          channel: 'YouTube',
          why: 'The two reference tools that make inbetweening possible.',
        },
        {
          kind: 'video',
          title: 'Animating with Clip Studio Paint — Part 1',
          id: 'zCnP409JfJk',
          channel: 'YouTube',
          why: 'Start of the series if you want it in order.',
        },
      ],
    },

    {
      id: 'csp-speed',
      title: 'Speed and auto actions',
      tagline: 'Record any repeated sequence once, then replay it with one click forever.',
      minutes: 15,
      level: 'advanced',
      blocks: [
        {
          kind: 'steps',
          title: 'Record an auto action',
          steps: [
            { label: 'Window → Auto Action', note: 'Make a new set so your actions stay organised.' },
            { label: 'Press record', note: 'The circle at the bottom of the panel.' },
            { label: 'Do the sequence once', note: 'e.g. new layer → clip → set Multiply → pick shadow colour.' },
            { label: 'Stop recording', note: 'It is now one button.' },
            { label: 'Bind it to a shortcut', note: 'File → Shortcut Settings → Auto Action.' },
          ],
        },
        {
          kind: 'reference',
          title: 'Shortcuts worth binding',
          columns: ['Key', 'Action'],
          rows: [
            { k: '[ and ]', v: 'Brush size down / up', note: 'The highest-value binding in the app.' },
            { k: 'Alt (hold)', v: 'Temporary colour picker' },
            { k: 'Space (hold)', v: 'Pan the canvas' },
            { k: 'Shift+Space / R', v: 'Rotate the canvas', note: 'Rotate to draw comfortable arcs instead of twisting your wrist.' },
            { k: 'Ctrl+T', v: 'Free transform' },
            { k: 'Ctrl+Shift+Alt+E', v: 'Merge visible to a new layer', note: 'Snapshot before a risky change.' },
            { k: ', and .', v: 'Previous / next animation frame', note: 'Bind these before any animation work.' },
            { k: 'Custom', v: 'Flip canvas horizontally', note: 'Not bound by default. Bind it — you should flip every 10 minutes.' },
          ],
        },
        {
          kind: 'checklist',
          title: 'Auto actions worth recording',
          items: [
            'New clipped Multiply layer, shadow colour pre-picked.',
            'Set current layer as Reference Layer and create a flats layer below it.',
            'Flatten a copy and add a subtle grain texture for the final export.',
            'Convert the sketch layer to a blue Draft Layer at 30% opacity.',
          ],
        },
        {
          kind: 'video',
          title: 'Automating Work with Auto Actions — Official CSP Tutorial',
          id: 'Vr25Ozud5u4',
          channel: 'Clip Studio Official',
          why: 'Straight from the developers, so the panel matches your version.',
        },
        {
          kind: 'video',
          title: 'How to Animate Faster in Clip Studio Paint (5 Tips)',
          id: '6s22SLsJ11o',
          channel: 'YouTube',
          why: 'Animation-specific speed tips once the basics are in place.',
        },
      ],
    },
  ],
};
