# AnimeGuide

A local, visual-first guide for going from "I can't draw" to drawing and animating anime.

Every lesson is built out of moving pictures: hand-authored SVG/CSS animations, an
interactive drawing pad that grades your strokes, and embedded YouTube lessons.
Text is capped at short labels — if a block needs a paragraph, it's the wrong block.

## Run it

```bash
npm install
```

```bash
npm run dev
```

Opens at http://localhost:5180. Progress and drill scores are saved to
`localStorage`, so closing the tab loses nothing.

## The thirteen tracks

108 lessons, ordered as a path: hand control, then what to draw, then the space
it sits in, then how to frame, arrange, colour and finish it, then motion.

| Track | What it covers |
| --- | --- |
| **Line Control** | Posture and pivots, straight lines, ghosting, curves, ellipses, boxes, perspective, hatching, the daily warm-up |
| **Construction** | Loomis head, the anime proportion edit, eyes, hair, expressions, figure, hands |
| **Perspective & Backgrounds** | Eye level, cubes and convergence, ellipses in perspective, interiors and figure scale, layered background plates, skies and clouds |
| **Composition** | Frame and thirds, leading the eye, notan and value structure, focal point, depth, balance and negative space |
| **Cinematography** | The seven shot sizes, which shot when, camera height and angle, camera movement, framing rules, the 180 rule and eyelines, how anime shoots, storyboarding |
| **Colour & Light** | The three dials, value first, the five zones of light, harmony, building a palette, light vs local colour, colour as storytelling |
| **Style & Cel Shading** | The four cel passes, shadow colour and hue shift, key lighting, line weight, style dials |
| **Cute Characters & Depth** | The baby schema, chibi proportions, shape language, simplification, cute expressions — then the rendering passes (form, occlusion, bounce, specular, rim, subsurface) that turn a flat drawing into a solid one |
| **Emotion & Effects** | White-outs, light rays, speed and focus lines, impact frames, sparkles, dread, colour fields — and when not to use any of them |
| **12 Animation Principles** | All twelve, each with a with/without pair you watch side by side |
| **Advanced Animation** | Keys, breakdowns, inbetweens, timing charts, spacing, onion skin, ones/twos/threes, walk cycles, smears, sakuga |
| **Clip Studio Paint** | Setup, interface, brushes, vector line art, layers and blend modes, flatting, cel shading, the brush engine, custom brushes, rulers and 3D, animation, auto actions |
| **Smart Work** | Layers and versioning, limited animation, thumbnails, catching your own errors, detail budget, shortcuts, reference, a practice plan |

Colour & Light comes before Style & Cel Shading deliberately: cel shading is an
application of colour theory, not a substitute for it.

Every shot-size demo in Cinematography is the *same* scene at a different scale,
so the comparison is purely about camera distance rather than seven separately
drawn pictures. The rendering demos in Cute Characters & Depth work the same
way: one chibi, re-rendered with each pass switched on in turn.

The Clip Studio track carries no drawn figures on purpose — a hand-authored SVG
of someone else's UI would be a guess. Exact values live in reference tables and
the demonstration is left to video.

## The practice pad

Nine drills. Eight of them score the stroke you actually drew and tell you which
specific thing went wrong:

- **Dot to dot** — straightness, start and end accuracy
- **Ghosted repeats** — repeatability across three passes
- **Full-width line** — long-stroke control and commitment
- **Curve through three** — accuracy plus smoothness
- **Ellipse on target** — fit against a known ellipse, closure, smoothness
- **Three matching ellipses** — no guide; consistency is the score
- **Freehand circle** — radius evenness
- **Even hatching** — angle spread and gap consistency
- **Free pad** — unscored

## The practice journal

Every drill attempt is kept, not just your best — a single high-water mark
throws away the curve, and the curve is the thing that tells you whether you are
actually improving. `#/journal` shows:

- **Streak, practice days, total attempts, lessons completed**
- **A score-over-time chart per drill**, with your personal best as a reference line
- **Trend**: mean of your last five attempts minus your first five. Hidden until
  you have ten attempts, because anything less is noise.
- **An 18-week practice heatmap**

Nothing is entered by hand. A journal you have to remember to fill in is a
journal you stop using.

Storage is `animeguide.progress.v2` in localStorage, and it migrates `v1`
forward rather than resetting anyone's progress.

## Grading

Grading lives in `src/components/practice/geometry.ts` (stroke maths) and
`exercises.ts` (each drill's targets, scoring weights and coaching lines).
The feedback overlay recolours your stroke green→red by how far each point
drifted from the ideal.

## Adding a lesson

Lessons are data. Add an entry to the relevant file in `src/data/lessons/` using
the block types in `src/data/types.ts` — `hero`, `steps`, `demo`, `compare`,
`video`, `practice`, `checklist`.

Blocks reference animations by string key. Register a new one in
`src/components/demos/index.tsx`. Most step figures are declarative: build them
with `strokeDemo({ layers: [...] })` from `demos/kit.tsx` rather than writing a
component.

`steps` entries may omit `demo` — the whole block then renders as a compact
text-only procedure, which is what the software track uses. `reference` renders a
two-column lookup table for exact settings and shortcuts.

## Notes

- Animations are authored as SVG/CSS rather than hotlinked GIFs — nothing rots,
  nothing has licensing questions, and it all works offline.
- Videos need internet. They load on click (a poster stands in until then) so a
  lesson with several videos doesn't boot several players at once.
- All 113 embedded video IDs were checked against live YouTube thumbnails.
- Respects `prefers-reduced-motion`.
