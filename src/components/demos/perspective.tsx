import { C, Paper, strokeDemo } from './kit';
import { FW, FH, Frame, Fig, Hills, Ground } from './frame';

/* ------------------------------------------------------------------
   Perspective & Backgrounds. The organising idea is that the horizon
   is your eye level, and almost every perspective mistake is really a
   mistake about where the viewer is standing.
   ------------------------------------------------------------------ */

/** The horizon is not "where the ground ends" — it is your own eye height. */
export const PsEyeLevel = () => {
  const views = [
    { label: 'lying down', hz: 128 },
    { label: 'standing', hz: 78 },
    { label: 'on a roof', hz: 26 },
  ];
  return (
    <svg viewBox="0 0 320 160" style={{ width: '100%', height: '100%', display: 'block' }}>
      {views.map((v, i) => (
        <g key={v.label} transform={`translate(${10 + i * 102} 8)`}>
          <rect x="0" y="0" width="94" height="104" rx="3" fill="#3f4763" />
          <rect x="0" y={v.hz * 0.62} width="94" height={104 - v.hz * 0.62} fill="#2b3049" />
          <line x1="0" y1={v.hz * 0.62} x2="94" y2={v.hz * 0.62} stroke="#ffd9a0" strokeWidth="1.6" />
          <g transform={`translate(58 ${v.hz * 0.62 + 26}) scale(0.62)`}>
            <circle cx="0" cy="-30" r="6.5" fill="#0e1120" />
            <path d="M-6 -23 L6 -23 L8 2 L-8 2 Z" fill="#0e1120" />
            <rect x="-6" y="2" width="4.5" height="20" rx="2" fill="#0e1120" />
            <rect x="1.5" y="2" width="4.5" height="20" rx="2" fill="#0e1120" />
          </g>
          <text x="47" y="120" fontSize="9" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700">
            {v.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

/** Above the horizon you see undersides; below it you see tops. */
export const PsAboveBelow = strokeDemo({
  vb: '0 0 300 170',
  layers: [
    { line: [10, 84, 290, 84], stroke: C.cyan, w: 2, dash: '6 4', delay: 0, dur: 0.5 },
    { text: { x: 274, y: 78, t: 'eye level', size: 9, anchor: 'end' }, fill: C.cyan, delay: 0.4 },

    { d: 'M52 30 L112 22 L136 34 L76 44 Z', stroke: C.ink, w: 2.2, delay: 0.6, dur: 0.5 },
    { d: 'M52 30 L52 52 L76 66 L76 44', stroke: C.ink, w: 2.2, delay: 0.9, dur: 0.4 },
    { d: 'M76 66 L136 56 L136 34', stroke: C.ink, w: 2.2, delay: 1.1, dur: 0.4 },
    { text: { x: 94, y: 14, t: 'above — you see the bottom', size: 8.5 }, fill: C.mid, delay: 1.4 },

    { d: 'M170 108 L230 100 L254 112 L194 122 Z', stroke: C.light, w: 1.8, dash: '3 3', delay: 1.5, dur: 0.5 },
    { d: 'M170 108 L170 130 L194 144 L194 122', stroke: C.ink, w: 2.2, delay: 1.8, dur: 0.4 },
    { d: 'M194 144 L254 134 L254 112', stroke: C.ink, w: 2.2, delay: 2, dur: 0.4 },
    { d: 'M170 108 L230 100 L254 112', stroke: C.ink, w: 2.2, delay: 2.2, dur: 0.4 },
    { text: { x: 212, y: 162, t: 'below — you see the top', size: 8.5 }, fill: C.mid, delay: 2.4 },
  ],
});

/** Rotating a cube around the horizon is the whole of two-point perspective. */
export const PsCubes = strokeDemo({
  vb: '0 0 300 160',
  layers: [
    { line: [6, 62, 294, 62], stroke: C.cyan, w: 1.8, dash: '6 4', delay: 0, dur: 0.5 },
    { circle: [10, 62, 3.5], stroke: 'none', fill: C.accent, mode: 'pop', delay: 0.4 },
    { circle: [290, 62, 3.5], stroke: 'none', fill: C.accent, mode: 'pop', delay: 0.5 },

    { d: 'M70 76 L44 84 L44 116 L70 110 Z', stroke: C.ink, w: 2.2, delay: 0.7, dur: 0.5 },
    { d: 'M70 76 L100 84 L100 116 L70 110', stroke: C.ink, w: 2.2, delay: 1, dur: 0.5 },
    { line: [70, 76, 70, 110], stroke: C.ink, w: 2.2, delay: 1.3, dur: 0.25 },

    { d: 'M170 74 L138 86 L138 118 L170 110 Z', stroke: C.ink, w: 2.2, delay: 1.4, dur: 0.5 },
    { d: 'M170 74 L196 82 L196 114 L170 110', stroke: C.ink, w: 2.2, delay: 1.7, dur: 0.5 },
    { line: [170, 74, 170, 110], stroke: C.ink, w: 2.2, delay: 2, dur: 0.25 },

    { d: 'M254 78 L232 84 L232 116 L254 112 Z', stroke: C.ink, w: 2.2, delay: 2.1, dur: 0.5 },
    { d: 'M254 78 L286 88 L286 120 L254 112', stroke: C.ink, w: 2.2, delay: 2.4, dur: 0.5 },
    { line: [254, 78, 254, 112], stroke: C.ink, w: 2.2, delay: 2.7, dur: 0.25 },

      ],
});

/** Ellipse degree opens up the further it sits from eye level. */
export const PsEllipsePersp = strokeDemo({
  vb: '0 0 260 170',
  layers: [
    { line: [10, 40, 250, 40], stroke: C.cyan, w: 1.8, dash: '6 4', delay: 0, dur: 0.5 },
    { text: { x: 240, y: 34, t: 'eye level', size: 8.5, anchor: 'end' }, fill: C.cyan, delay: 0.3 },
    { ellipse: [130, 40, 46, 2.5], stroke: C.ink, w: 2.2, delay: 0.5, dur: 0.5 },
    { ellipse: [130, 74, 46, 11], stroke: C.ink, w: 2.2, delay: 0.8, dur: 0.5 },
    { ellipse: [130, 108, 46, 20], stroke: C.ink, w: 2.2, delay: 1.1, dur: 0.5 },
    { ellipse: [130, 142, 46, 29], stroke: C.ink, w: 2.2, delay: 1.4, dur: 0.5 },
    { line: [84, 40, 84, 142], stroke: C.light, w: 1.4, dash: '4 4', delay: 1.7, dur: 0.4 },
    { line: [176, 40, 176, 142], stroke: C.light, w: 1.4, dash: '4 4', delay: 1.8, dur: 0.4 },
      ],
});

/** A room is one vanishing point and five planes. */
export const PsInterior = strokeDemo({
  vb: '0 0 300 175',
  layers: [
    { rect: [16, 14, 268, 132, 2], stroke: C.ink, w: 2.4, delay: 0, dur: 0.7 },
    { rect: [104, 58, 96, 50, 2], stroke: C.ink, w: 2.4, delay: 0.6, dur: 0.6 },
    { circle: [152, 83, 3.5], stroke: 'none', fill: C.accent, mode: 'pop', delay: 1.1 },
    { line: [16, 14, 104, 58], stroke: C.light, w: 1.6, delay: 1.2, dur: 0.4 },
    { line: [284, 14, 200, 58], stroke: C.light, w: 1.6, delay: 1.3, dur: 0.4 },
    { line: [16, 146, 104, 108], stroke: C.light, w: 1.6, delay: 1.4, dur: 0.4 },
    { line: [284, 146, 200, 108], stroke: C.light, w: 1.6, delay: 1.5, dur: 0.4 },
    { d: 'M40 146 L40 118 L74 104 L74 132 Z', stroke: C.ink, w: 2, delay: 1.8, dur: 0.5 },
    { d: 'M228 132 L228 104 L258 118 L258 146 Z', stroke: C.ink, w: 2, delay: 2.1, dur: 0.5 },
      ],
});

/** Figures scale off the horizon, not off each other. */
export const PsFigureScale = strokeDemo({
  vb: '0 0 300 160',
  layers: [
    { line: [8, 56, 292, 56], stroke: C.cyan, w: 1.8, dash: '6 4', delay: 0, dur: 0.5 },
    { text: { x: 282, y: 50, t: 'eye level', size: 8.5, anchor: 'end' }, fill: C.cyan, delay: 0.3 },
    ...[
      { x: 60, top: 20, bot: 130 },
      { x: 150, top: 34, bot: 104 },
      { x: 232, top: 44, bot: 82 },
    ].flatMap((f, i) => [
      { line: [f.x, f.top, f.x, f.bot] as [number, number, number, number], stroke: C.ink, w: 3.4, delay: 0.6 + i * 0.25, dur: 0.35 },
      { circle: [f.x, f.top - 5, 5] as [number, number, number], stroke: C.ink, w: 2.2, delay: 0.8 + i * 0.25, dur: 0.25 },
    ]),
    { line: [60, 56, 232, 56], stroke: C.accent, w: 1.6, delay: 1.6, dur: 0.4 },
      ],
});

/** Anime backgrounds are stacked flat layers, not one rendered scene. */
export const PsBgLayers = () => (
  <Frame>
    <rect x="0" y="0" width={FW} height={FH} fill="#8fc7e8" />
    <circle cx="252" cy="34" r="22" fill="#fff4d6" opacity="0.9" />
    <Hills y={90} fill="#a9b8d6" opacity={0.85} />
    <Hills y={112} fill="#7d9a86" opacity={0.95} />
    <Hills y={132} fill="#4f6b52" />
    <Ground y={146} fill="#2f4436" />
    <path d="M-10 168 L-10 136 C22 128 46 150 70 142 L70 168 Z" fill="#16261c" />
    <Fig x={196} y={148} s={0.9} fill="#1b2c20" />
  </Frame>
);

/** Anime clouds are hard-edged stacked shapes with a flat lit top. */
export const PsClouds = () => (
  <Frame tone="none">
    <rect x="0" y="0" width={FW} height={FH} fill="#7cc0e6" />
    {[
      { x: 70, y: 70, s: 1 },
      { x: 200, y: 48, s: 0.72 },
      { x: 250, y: 108, s: 0.55 },
    ].map((c, i) => (
      <g key={i} transform={`translate(${c.x} ${c.y}) scale(${c.s})`}>
        <path
          d="M-58 22 C-72 22 -76 4 -60 -2 C-64 -20 -42 -30 -28 -18 C-20 -38 12 -40 20 -18 C40 -26 58 -10 50 6 C64 10 62 24 46 22 Z"
          fill="#ffffff"
        />
        <path
          d="M-58 22 C-72 22 -76 4 -60 -2 C-52 6 -30 10 -8 8 C16 6 38 0 50 6 C64 10 62 24 46 22 Z"
          fill="#c3d9ec"
        />
        <path d="M-28 -18 C-20 -38 12 -40 20 -18 C6 -26 -14 -26 -28 -18 Z" fill="#fffdf4" />
      </g>
    ))}
  </Frame>
);

/** Detail belongs where the character is, not spread evenly. */
export const PsBgDetail = () => (
  <Paper vb="0 0 300 165">
    <rect x="14" y="14" width="272" height="118" rx="3" fill="#f2efe6" stroke={C.light} strokeWidth="1.5" />
    <path d="M14 96 C60 82 96 96 140 88 C186 80 232 96 286 88 L286 132 L14 132 Z" fill="#dcd6c8" />
    <circle cx="150" cy="74" r="34" fill="#fff" opacity="0.75" />
    <circle cx="150" cy="72" r="20" fill="none" stroke={C.ink} strokeWidth="2.4" />
    <ellipse cx="142" cy="70" rx="4" ry="5.5" fill={C.ink} />
    <ellipse cx="158" cy="70" rx="4" ry="5.5" fill={C.ink} />
    <path d="M30 118 C48 108 62 114 76 118" stroke={C.light} strokeWidth="1.5" fill="none" />
    <path d="M226 118 C244 110 262 114 274 120" stroke={C.light} strokeWidth="1.5" fill="none" />
    <path d="M40 60 L52 44 L64 60 Z" fill="none" stroke={C.light} strokeWidth="1.4" />
    <path d="M240 56 L252 40 L264 56 Z" fill="none" stroke={C.light} strokeWidth="1.4" />
  </Paper>
);
