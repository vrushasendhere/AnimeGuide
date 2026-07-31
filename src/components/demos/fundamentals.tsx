import { C, Paper, Dot, Tag, strokeDemo } from './kit';

/* ------------------------------------------------------------------
   Track 1 — line, ellipse and box control.
   These are the figures that sit on the step cards, so each one has to
   land its idea in about a second with no reading required.
   ------------------------------------------------------------------ */

/** Which joint you pivot from decides how long a clean stroke can be. */
export const FxPivots = () => (
  <Paper>
    <circle cx="16" cy="132" r="4" fill={C.accent} />
    <path d="M40 128 Q55 116 70 128" stroke={C.light} strokeWidth="2" fill="none" className="dw" pathLength={100} style={{ animationDelay: '0s' }} />
    <path d="M32 128 Q62 98 92 128" stroke={C.mid} strokeWidth="2" fill="none" className="dw" pathLength={100} style={{ animationDelay: '0.35s' }} />
    <path d="M24 128 Q74 70 124 128" stroke={C.cyan} strokeWidth="2.4" fill="none" className="dw" pathLength={100} style={{ animationDelay: '0.7s' }} />
    <path d="M16 128 Q98 34 180 128" stroke={C.accent} strokeWidth="2.8" fill="none" className="dw" pathLength={100} style={{ animationDelay: '1.05s' }} />
    <Tag x={70} y={144} delay={0.2} size={9}>fingers</Tag>
    <Tag x={112} y={144} color={C.cyan} delay={0.9} size={9}>elbow</Tag>
    <Tag x={182} y={144} color={C.accent} delay={1.3} size={9} anchor="end">shoulder</Tag>
  </Paper>
);

/** Rehearse the stroke in the air a few times, then put it down once. */
export const FxGhost = () => (
  <Paper>
    <Dot x={45} y={80} r={5} />
    <Dot x={195} y={80} r={5} delay={0.15} />
    <line x1="45" y1="80" x2="195" y2="80" stroke={C.faint} strokeWidth="8" strokeLinecap="round" />
    <g className="ghostpass">
      <circle cx="45" cy="80" r="7" fill="none" stroke={C.cyan} strokeWidth="2" />
      <circle cx="45" cy="80" r="2.5" fill={C.cyan} />
    </g>
    <line
      x1="45"
      y1="80"
      x2="195"
      y2="80"
      stroke={C.ink}
      strokeWidth="3"
      strokeLinecap="round"
      className="commitline"
      pathLength={100}
    />
    <Tag x={120} y={112} color={C.mid} size={9}>hover · hover · commit</Tag>
  </Paper>
);

/** Look at the target dot, not at the pen. */
export const FxDotToDot = () => (
  <Paper>
    <Dot x={40} y={112} r={5} />
    <Dot x={200} y={44} r={5} delay={0.1} />
    <circle cx="200" cy="44" r="14" fill="none" stroke={C.accent} strokeWidth="1.5" opacity="0.5" className="blink" />
    <line
      x1="40"
      y1="112"
      x2="200"
      y2="44"
      stroke={C.ink}
      strokeWidth="3"
      strokeLinecap="round"
      className="dw"
      pathLength={100}
      style={{ animationDelay: '0.5s', animationDuration: '0.35s' }}
    />
    <Tag x={196} y={26} color={C.accent} size={9} delay={0.3} anchor="end">eyes here</Tag>
  </Paper>
);

/** Drawing slowly is what makes the line shake. */
export const FxSlowLine = () => (
  <Paper vb="0 0 240 120">
    <path
      d="M30 60 Q45 54 58 61 T85 58 T112 63 T140 57 T168 62 T196 58 L210 60"
      stroke={C.red}
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      className="slowdraw"
      pathLength={100}
    />
    <Tag x={120} y={94} color={C.red} size={10}>slow = wobble</Tag>
  </Paper>
);

/** One committed pass, straight from the shoulder. */
export const FxFastLine = () => (
  <Paper vb="0 0 240 120">
    <line
      x1="30"
      y1="60"
      x2="210"
      y2="60"
      stroke={C.green}
      strokeWidth="3"
      strokeLinecap="round"
      className="fastdraw"
      pathLength={100}
    />
    <Tag x={120} y={94} color={C.green} size={10}>fast = clean</Tag>
  </Paper>
);

/** Stack repeats of the same stroke instead of scrubbing back and forth. */
export const FxSuperimposed = strokeDemo({
  vb: '0 0 240 140',
  layers: [
    { line: [36, 70, 204, 66], stroke: C.light, w: 2.5, delay: 0, dur: 0.4 },
    { line: [36, 71, 204, 68], stroke: C.mid, w: 2.5, delay: 0.4, dur: 0.35 },
    { line: [36, 70, 204, 67], stroke: C.ink, w: 3, delay: 0.8, dur: 0.3 },
    { text: { x: 120, y: 104, t: '3 passes · same start, same end' }, mode: 'fade', delay: 1.2, fill: C.mid },
  ],
});

/** Break a long contour into a few confident arcs, not one nervous crawl. */
export const FxLineLength = strokeDemo({
  vb: '0 0 240 150',
  layers: [
    { d: 'M28 46 C70 30 130 34 208 44', stroke: C.red, w: 2.6, dash: '4 4', mode: 'draw', delay: 0, dur: 2.4 },
    { text: { x: 120, y: 30, t: 'one long timid stroke', size: 9 }, fill: C.red, delay: 0.3 },
    { d: 'M28 100 C52 88 74 86 96 90', stroke: C.green, w: 3, delay: 1.2, dur: 0.28 },
    { d: 'M96 90 C122 95 142 96 166 92', stroke: C.green, w: 3, delay: 1.55, dur: 0.28 },
    { d: 'M166 92 C186 89 198 90 210 94', stroke: C.green, w: 3, delay: 1.9, dur: 0.28 },
    { text: { x: 120, y: 126, t: 'three confident arcs', size: 9 }, fill: C.green, delay: 2.2 },
  ],
});

/** Orbit the shape a few times before letting the pen touch down. */
export const FxEllipseOrbit = () => (
  <Paper>
    <ellipse cx="120" cy="78" rx="62" ry="34" fill="none" stroke={C.faint} strokeWidth="8" />
    <g className="orbit">
      <circle cx="182" cy="78" r="5" fill={C.cyan} />
    </g>
    <ellipse
      cx="120"
      cy="78"
      rx="62"
      ry="34"
      fill="none"
      stroke={C.ink}
      strokeWidth="3"
      className="landellipse"
      pathLength={100}
    />
    <Tag x={120} y={136} color={C.mid} size={9}>orbit 3× · then land</Tag>
  </Paper>
);

/** Degree = how open the ellipse is. It tracks the angle you view it from. */
export const FxEllipseDegree = strokeDemo({
  vb: '0 0 260 150',
  layers: [
    { ellipse: [48, 70, 34, 6], stroke: C.ink, w: 2.4, delay: 0, dur: 0.7 },
    { ellipse: [130, 70, 34, 17], stroke: C.ink, w: 2.4, delay: 0.35, dur: 0.7 },
    { ellipse: [212, 70, 34, 30], stroke: C.ink, w: 2.4, delay: 0.7, dur: 0.7 },
    { text: { x: 48, y: 116, t: '10°', size: 11 }, fill: C.accent, delay: 0.9 },
    { text: { x: 130, y: 116, t: '30°', size: 11 }, fill: C.accent, delay: 1.05 },
    { text: { x: 212, y: 116, t: '60°', size: 11 }, fill: C.accent, delay: 1.2 },
    { text: { x: 130, y: 138, t: 'edge-on  →  face-on', size: 9 }, fill: C.mid, delay: 1.4 },
  ],
});

/** The minor axis must stay perpendicular to the object's centre line. */
export const FxEllipseAxis = strokeDemo({
  vb: '0 0 240 160',
  layers: [
    { line: [120, 24, 120, 140], stroke: C.light, w: 1.6, dash: '5 5', mode: 'none', delay: 0 },
    { ellipse: [120, 52, 52, 18], stroke: C.ink, w: 2.6, delay: 0.2, dur: 0.7 },
    { ellipse: [120, 118, 52, 18], stroke: C.ink, w: 2.6, delay: 0.55, dur: 0.7 },
    { line: [120, 34, 120, 70], stroke: C.accent, w: 2.4, delay: 1, dur: 0.35 },
    { line: [68, 52, 172, 52], stroke: C.cyan, w: 1.8, dash: '4 3', delay: 1.2, dur: 0.4 },
    { text: { x: 178, y: 40, t: 'minor axis', size: 9, anchor: 'start' }, fill: C.accent, delay: 1.4 },
    { line: [120, 52, 120, 118], stroke: C.accent, w: 2, opacity: 0.35, delay: 1.5, dur: 0.4 },
  ],
});

/** A circle is just an ellipse whose axes match — check it by flipping. */
export const FxCircle = strokeDemo({
  vb: '0 0 240 160',
  layers: [
    { rect: [72, 32, 96, 96, 2], stroke: C.light, w: 1.6, dash: '5 4', delay: 0, dur: 0.7 },
    { line: [72, 80, 168, 80], stroke: C.light, w: 1.2, delay: 0.5, dur: 0.3 },
    { line: [120, 32, 120, 128], stroke: C.light, w: 1.2, delay: 0.6, dur: 0.3 },
    { circle: [120, 80, 48], stroke: C.ink, w: 3, delay: 0.9, dur: 0.8 },
    { text: { x: 120, y: 150, t: 'box first · then the round', size: 9 }, fill: C.mid, delay: 1.6 },
  ],
});

/** Curves need targets too — plot three dots and sweep through them. */
export const FxCurve3 = () => (
  <Paper>
    <Dot x={36} y={106} r={4.5} />
    <Dot x={120} y={40} r={4.5} delay={0.12} />
    <Dot x={204} y={104} r={4.5} delay={0.24} />
    <path
      d="M36 106 Q120 4 204 104"
      stroke={C.ink}
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      className="dw"
      pathLength={100}
      style={{ animationDelay: '0.6s', animationDuration: '0.5s' }}
    />
    <Tag x={120} y={138} color={C.mid} size={9}>plot 3 · sweep once</Tag>
  </Paper>
);

/** Slowing down at the ends is what produces those hooked tails. */
export const FxHook = strokeDemo({
  vb: '0 0 240 150',
  layers: [
    { d: 'M34 48 C60 40 170 40 198 48 C206 50 206 56 198 58', stroke: C.red, w: 2.8, delay: 0, dur: 0.9 },
    { text: { x: 120, y: 78, t: 'hooked ends', size: 9 }, fill: C.red, delay: 0.9 },
    { line: [34, 108, 206, 108], stroke: C.green, w: 2.8, delay: 1.2, dur: 0.3 },
    { text: { x: 120, y: 134, t: 'follow through past the dot', size: 9 }, fill: C.green, delay: 1.5 },
  ],
});

/** Every solid form starts as a box you can rotate in your head. */
export const FxBox = strokeDemo({
  vb: '0 0 240 160',
  layers: [
    { d: 'M60 62 L140 46 L196 68 L114 88 Z', stroke: C.ink, w: 2.4, delay: 0, dur: 0.8 },
    { line: [60, 62, 60, 112], stroke: C.ink, w: 2.4, delay: 0.7, dur: 0.3 },
    { line: [140, 46, 140, 96], stroke: C.light, w: 1.8, dash: '4 3', delay: 0.85, dur: 0.3 },
    { line: [196, 68, 196, 118], stroke: C.ink, w: 2.4, delay: 1, dur: 0.3 },
    { line: [114, 88, 114, 138], stroke: C.ink, w: 2.4, delay: 1.15, dur: 0.3 },
    { d: 'M60 112 L114 138 L196 118', stroke: C.ink, w: 2.4, delay: 1.35, dur: 0.5 },
    { d: 'M60 112 L140 96 L196 118', stroke: C.light, w: 1.8, dash: '4 3', delay: 1.6, dur: 0.5 },
  ],
});

/** One vanishing point: everything runs to a single spot on the horizon. */
export const FxPersp1 = strokeDemo({
  vb: '0 0 240 150',
  layers: [
    { line: [12, 62, 228, 62], stroke: C.cyan, w: 1.6, dash: '6 4', delay: 0, dur: 0.5 },
    { circle: [176, 62, 4], stroke: 'none', fill: C.accent, mode: 'pop', delay: 0.5 },
    { rect: [40, 74, 66, 50], stroke: C.ink, w: 2.4, delay: 0.7, dur: 0.6 },
    { line: [40, 74, 176, 62], stroke: C.light, w: 1.5, delay: 1.2, dur: 0.4 },
    { line: [106, 74, 176, 62], stroke: C.light, w: 1.5, delay: 1.3, dur: 0.4 },
    { line: [106, 124, 176, 62], stroke: C.light, w: 1.5, delay: 1.4, dur: 0.4 },
    { text: { x: 120, y: 144, t: '1 point', size: 10 }, fill: C.mid, delay: 1.8 },
  ],
});

/** Two vanishing points: the classic three-quarter box. */
export const FxPersp2 = strokeDemo({
  vb: '0 0 240 150',
  layers: [
    { line: [4, 56, 236, 56], stroke: C.cyan, w: 1.6, dash: '6 4', delay: 0, dur: 0.5 },
    { circle: [10, 56, 4], stroke: 'none', fill: C.accent, mode: 'pop', delay: 0.5 },
    { circle: [230, 56, 4], stroke: 'none', fill: C.accent, mode: 'pop', delay: 0.6 },
    { d: 'M120 74 L64 88 L64 128 L120 118 Z', stroke: C.ink, w: 2.4, delay: 0.8, dur: 0.7 },
    { d: 'M120 74 L178 86 L178 126 L120 118', stroke: C.ink, w: 2.4, delay: 1.3, dur: 0.7 },
    { line: [120, 74, 120, 118], stroke: C.ink, w: 2.4, delay: 1.9, dur: 0.25 },
    { text: { x: 120, y: 146, t: '2 point', size: 10 }, fill: C.mid, delay: 2.1 },
  ],
});

/** Three points: add a vertical one and the box towers or plunges. */
export const FxPersp3 = strokeDemo({
  vb: '0 0 240 160',
  layers: [
    { line: [4, 40, 236, 40], stroke: C.cyan, w: 1.6, dash: '6 4', delay: 0, dur: 0.5 },
    { circle: [8, 40, 4], stroke: 'none', fill: C.accent, mode: 'pop', delay: 0.4 },
    { circle: [232, 40, 4], stroke: 'none', fill: C.accent, mode: 'pop', delay: 0.5 },
    { circle: [120, 156, 4], stroke: 'none', fill: C.gold, mode: 'pop', delay: 0.6 },
    { d: 'M120 58 L72 70 L84 128 L120 120 Z', stroke: C.ink, w: 2.4, delay: 0.8, dur: 0.7 },
    { d: 'M120 58 L170 70 L156 128 L120 120', stroke: C.ink, w: 2.4, delay: 1.3, dur: 0.7 },
    { line: [120, 58, 120, 120], stroke: C.ink, w: 2.4, delay: 1.9, dur: 0.25 },
    { text: { x: 120, y: 150, t: '3 point', size: 10 }, fill: C.gold, delay: 2.1 },
  ],
});

/** Parallel strokes at even spacing read as a value, not as scribble. */
export const FxHatch = strokeDemo({
  vb: '0 0 240 150',
  layers: [
    ...Array.from({ length: 11 }, (_, i) => ({
      line: [46 + i * 14, 34, 30 + i * 14, 108] as [number, number, number, number],
      stroke: C.ink,
      w: 2,
      delay: i * 0.07,
      dur: 0.22,
    })),
    { text: { x: 120, y: 134, t: 'same angle · same gap', size: 9 }, fill: C.mid, delay: 1 },
  ],
});

/** Cross a second layer over the first to deepen the value. */
export const FxHatchCross = strokeDemo({
  vb: '0 0 240 150',
  layers: [
    ...Array.from({ length: 9 }, (_, i) => ({
      line: [44 + i * 16, 32, 30 + i * 16, 100] as [number, number, number, number],
      stroke: C.mid,
      w: 1.8,
      delay: i * 0.05,
      dur: 0.2,
    })),
    ...Array.from({ length: 7 }, (_, i) => ({
      line: [36, 44 + i * 9, 176, 30 + i * 9] as [number, number, number, number],
      stroke: C.ink,
      w: 1.8,
      delay: 0.6 + i * 0.06,
      dur: 0.2,
    })),
    { text: { x: 120, y: 130, t: 'second pass = darker', size: 9 }, fill: C.mid, delay: 1.3 },
  ],
});

/** The five-minute warm-up you run before any real drawing. */
export const FxWarmup = strokeDemo({
  vb: '0 0 260 150',
  layers: [
    ...Array.from({ length: 6 }, (_, i) => ({
      line: [24, 26 + i * 12, 84, 26 + i * 12] as [number, number, number, number],
      stroke: C.ink,
      w: 1.8,
      delay: i * 0.08,
      dur: 0.2,
    })),
    ...Array.from({ length: 4 }, (_, i) => ({
      ellipse: [130, 40 + i * 24, 26, 9] as [number, number, number, number],
      stroke: C.ink,
      w: 1.8,
      delay: 0.6 + i * 0.12,
      dur: 0.35,
    })),
    { d: 'M180 30 L226 24 L238 40 L192 48 Z', stroke: C.ink, w: 1.8, delay: 1.2, dur: 0.5 },
    { d: 'M180 30 L180 62 L192 80 L192 48', stroke: C.ink, w: 1.8, delay: 1.5, dur: 0.5 },
    { d: 'M192 80 L238 72 L238 40', stroke: C.ink, w: 1.8, delay: 1.8, dur: 0.5 },
    { text: { x: 54, y: 122, t: 'lines', size: 9 }, fill: C.mid, delay: 2 },
    { text: { x: 130, y: 122, t: 'ellipses', size: 9 }, fill: C.mid, delay: 2.1 },
    { text: { x: 209, y: 122, t: 'boxes', size: 9 }, fill: C.mid, delay: 2.2 },
    { text: { x: 130, y: 142, t: '5 minutes, every session', size: 9 }, fill: C.accent, delay: 2.4 },
  ],
});
