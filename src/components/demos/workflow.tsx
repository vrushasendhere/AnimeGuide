import { C, Paper, Stage, Tag, strokeDemo } from './kit';

/* ------------------------------------------------------------------
   Track 6 — working smart. The point of every demo here is the same:
   do the expensive thing once, then arrange for it to pay off twice.
   ------------------------------------------------------------------ */

const plate = (y: number) => `M120 ${y} L212 ${y + 30} L120 ${y + 60} L28 ${y + 30} Z`;

/** A separated stack survives revision. A flattened one does not. */
export const WfLayers = () => (
  <Paper vb="0 0 250 200">
    {[
      { y: 116, fill: 'rgba(255,93,143,0.22)', stroke: C.accent, label: 'sketch', lift: '0px' },
      { y: 88, fill: 'rgba(43,43,51,0.14)', stroke: C.ink, label: 'lineart', lift: '-6px' },
      { y: 60, fill: 'rgba(31,151,173,0.2)', stroke: C.cyan, label: 'flats', lift: '-12px' },
      { y: 32, fill: 'rgba(217,154,31,0.22)', stroke: C.gold, label: 'shading', lift: '-18px' },
    ].map((l, i) => (
      <g
        key={i}
        className="layerlift"
        style={{ ['--lift' as string]: l.lift, animationDelay: `${i * 0.12}s` }}
      >
        <path d={plate(l.y)} fill={l.fill} stroke={l.stroke} strokeWidth="1.8" />
        <text
          x="222"
          y={l.y + 34}
          fontSize="9"
          fill={l.stroke}
          fontFamily="Poppins, sans-serif"
          fontWeight="700"
        >
          {l.label}
        </text>
      </g>
    ))}
    <Tag x={110} y={194} color={C.mid} size={9}>never merge until it ships</Tag>
  </Paper>
);

/** Limited animation: hold the expensive drawing, move the cheap part. */
export const WfLimited = () => (
  <Stage vb="0 0 300 190">
    <g transform="translate(150 20)">
      <circle cx="0" cy="60" r="42" fill="#3b4356" />
      <circle cx="-16" cy="52" r="7" fill={C.cyan} />
      <circle cx="16" cy="52" r="7" fill={C.cyan} />
      <g className="bob" style={{ animationDuration: '0.5s' }}>
        <ellipse cx="0" cy="80" rx="12" ry="7" fill={C.accent} />
      </g>
      <rect x="-34" y="104" width="68" height="60" rx="10" fill="#2f3648" />
    </g>
  </Stage>
);

/** Draw the cycle once, then reuse it across shots. */
export const WfReuse = () => (
  <Paper vb="0 0 280 180">
    <rect x="106" y="26" width="68" height="52" rx="8" fill="rgba(255,93,143,0.16)" stroke={C.accent} strokeWidth="2.2" />
    <text x="140" y="56" fontSize="10" textAnchor="middle" fill={C.accent} fontFamily="Poppins, sans-serif" fontWeight="700">
      1 cycle
    </text>
    {[
      { x: 40, d: 'M132 80 C100 100 70 110 48 120' },
      { x: 140, d: 'M140 82 L140 120' },
      { x: 240, d: 'M148 80 C180 100 210 110 232 120' },
    ].map((s, i) => (
      <g key={i}>
        <path d={s.d} stroke={C.light} strokeWidth="1.8" fill="none" strokeDasharray="4 4" />
        <g style={{ offsetPath: `path("${s.d}")` }} className="reuseflow">
          <circle cx="0" cy="0" r="5" fill={C.cyan} style={{ animationDelay: `${i * 0.25}s` }} />
        </g>
        <rect x={s.x - 28} y="122" width="56" height="34" rx="6" fill="rgba(31,151,173,0.14)" stroke={C.cyan} strokeWidth="1.8" />
        <text x={s.x} y="144" fontSize="9" textAnchor="middle" fill={C.cyan} fontFamily="Poppins, sans-serif" fontWeight="700">
          cut {i + 1}
        </text>
      </g>
    ))}
  </Paper>
);

/** Thumbnails cost minutes. Fixing a finished drawing costs days. */
export const WfThumbnails = strokeDemo({
  vb: '0 0 290 165',
  layers: [
    ...[0, 1, 2, 3].map((i) => ({
      rect: [18 + i * 46, 26, 38, 30, 3] as [number, number, number, number, number],
      stroke: C.light,
      w: 1.6,
      delay: i * 0.1,
      dur: 0.3,
    })),
    ...[0, 1, 2, 3].map((i) => ({
      d: `M${24 + i * 46} ${46 - i * 2} Q${37 + i * 46} ${32 + i * 3} ${50 + i * 46} ${44 + (i % 2) * 4}`,
      stroke: C.ink,
      w: 1.8,
      delay: 0.3 + i * 0.1,
      dur: 0.25,
    })),
    { text: { x: 110, y: 70, t: '4 thumbnails · 6 minutes', size: 9 }, fill: C.mid, delay: 0.9 },
    { rect: [206, 26, 66, 52, 4], stroke: C.accent, w: 2.4, delay: 1, dur: 0.5 },
    { d: 'M216 62 Q239 34 262 58', stroke: C.accent, w: 2.4, delay: 1.4, dur: 0.4 },
    { text: { x: 239, y: 94, t: 'then commit', size: 9 }, fill: C.accent, delay: 1.8 },
  ],
});

/** Flipping the canvas exposes the drift your eye stopped noticing. */
export const WfFlip = () => (
  <Paper vb="0 0 280 170">
    <g>
      <path d="M40 118 C36 70 60 40 92 40 C122 40 142 66 138 116" stroke={C.ink} strokeWidth="2.4" fill="none" />
      <ellipse cx="70" cy="82" rx="9" ry="11" fill={C.ink} />
      <ellipse cx="106" cy="80" rx="9" ry="11" fill={C.ink} />
      <text x="88" y="146" fontSize="9" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700">
        looks fine
      </text>
    </g>
    <g transform="translate(420 0) scale(-1 1)">
      <path d="M40 118 C36 70 60 40 92 40 C122 40 142 66 138 116" stroke={C.red} strokeWidth="2.4" fill="none" />
      <ellipse cx="70" cy="82" rx="9" ry="11" fill={C.red} />
      <ellipse cx="106" cy="80" rx="9" ry="11" fill={C.red} />
    </g>
    <text x="192" y="146" fontSize="9" textAnchor="middle" fill={C.red} fontFamily="Poppins, sans-serif" fontWeight="700">
      flipped — the lean shows
    </text>
    <Tag x={140} y={164} color={C.accent} size={9}>flip every 10 minutes</Tag>
  </Paper>
);

/** Detail is a budget. Spend it on the face, starve the corners. */
export const WfDetailBudget = () => (
  <Paper vb="0 0 280 170">
    <defs>
      <radialGradient id="attn" cx="50%" cy="38%">
        <stop offset="0%" stopColor="rgba(255,93,143,0.5)" />
        <stop offset="60%" stopColor="rgba(255,93,143,0.1)" />
        <stop offset="100%" stopColor="rgba(255,93,143,0)" />
      </radialGradient>
    </defs>
    <rect x="30" y="20" width="220" height="122" rx="8" fill="none" stroke={C.light} strokeWidth="1.8" />
    <circle cx="140" cy="66" r="46" fill="url(#attn)" />
    <circle cx="140" cy="64" r="26" fill="none" stroke={C.ink} strokeWidth="2.6" />
    <ellipse cx="130" cy="62" rx="5" ry="7" fill={C.ink} />
    <ellipse cx="150" cy="62" rx="5" ry="7" fill={C.ink} />
    <path d="M132 78 Q140 84 148 78" stroke={C.ink} strokeWidth="2" fill="none" />
    <path d="M52 128 C74 112 96 118 112 126" stroke={C.light} strokeWidth="1.6" fill="none" />
    <path d="M170 126 C192 116 214 120 230 128" stroke={C.light} strokeWidth="1.6" fill="none" />
  </Paper>
);

/** Keep your hand on the keyboard — the mouse is the slow part. */
export const WfShortcuts = () => {
  const keys = [
    { k: 'B', t: 'brush' },
    { k: 'E', t: 'eraser' },
    { k: '[ ]', t: 'size' },
    { k: 'Alt', t: 'pick colour' },
    { k: 'Ctrl Z', t: 'undo' },
    { k: 'Ctrl T', t: 'transform' },
    { k: ', .', t: 'prev/next frame' },
    { k: 'Space', t: 'pan' },
  ];
  return (
    <Paper vb="0 0 300 180">
      {keys.map((key, i) => {
        const x = 20 + (i % 2) * 148;
        const y = 24 + Math.floor(i / 2) * 38;
        return (
          <g key={key.k} className="pop" style={{ animationDelay: `${i * 0.08}s`, transformBox: 'fill-box', transformOrigin: 'center' }}>
            <rect x={x} y={y} width="58" height="26" rx="5" fill="#fff" stroke={C.ink} strokeWidth="1.8" />
            <rect x={x} y={y + 22} width="58" height="4" rx="2" fill={C.light} />
            <text x={x + 29} y={y + 17} fontSize="10" textAnchor="middle" fill={C.ink} fontFamily="Poppins, sans-serif" fontWeight="700">
              {key.k}
            </text>
            <text x={x + 66} y={y + 17} fontSize="9" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="600">
              {key.t}
            </text>
          </g>
        );
      })}
    </Paper>
  );
};

/** Work oversized, publish small — mistakes shrink away. */
export const WfCanvasSize = strokeDemo({
  vb: '0 0 280 170',
  layers: [
    { rect: [24, 24, 150, 100, 4], stroke: C.accent, w: 2.4, delay: 0, dur: 0.7 },
    { text: { x: 99, y: 78, t: '3000 px', size: 12 }, fill: C.accent, delay: 0.7 },
    { text: { x: 99, y: 142, t: 'work here', size: 9 }, fill: C.mid, delay: 0.9 },
    { rect: [198, 60, 60, 40, 3], stroke: C.cyan, w: 2.2, delay: 1, dur: 0.5 },
    { text: { x: 228, y: 84, t: '1080', size: 9 }, fill: C.cyan, delay: 1.4 },
    { text: { x: 228, y: 142, t: 'ship here', size: 9 }, fill: C.mid, delay: 1.5 },
    { d: 'M180 74 L192 74', stroke: C.mid, w: 2, delay: 1.6, dur: 0.2 },
  ],
});

/** Version as you go, so a bad decision costs one file, not the piece. */
export const WfVersions = strokeDemo({
  vb: '0 0 280 160',
  layers: [
    ...[0, 1, 2, 3].map((i) => ({
      rect: [24 + i * 62, 40, 46, 56, 4] as [number, number, number, number, number],
      stroke: i === 3 ? C.accent : C.light,
      w: i === 3 ? 2.6 : 1.8,
      delay: i * 0.15,
      dur: 0.4,
    })),
    ...[0, 1, 2].map((i) => ({
      d: `M${70 + i * 62} 68 L${86 + i * 62} 68`,
      stroke: C.mid,
      w: 1.8,
      delay: 0.5 + i * 0.12,
      dur: 0.2,
    })),
    { text: { x: 47, y: 116, t: 'v1', size: 9 }, fill: C.mid, delay: 0.9 },
    { text: { x: 109, y: 116, t: 'v2', size: 9 }, fill: C.mid, delay: 1 },
    { text: { x: 171, y: 116, t: 'v3', size: 9 }, fill: C.mid, delay: 1.1 },
    { text: { x: 233, y: 116, t: 'v4', size: 9 }, fill: C.accent, delay: 1.2 },
  ],
});

/** Batch one operation across every frame instead of finishing frames one by one. */
export const WfBatch = () => (
  <Stage vb="0 0 300 180">
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <rect x={26 + i * 52} y="34" width="42" height="52" rx="5" fill="rgba(31,151,173,0.18)" stroke={C.cyan} strokeWidth="1.6" />
        <rect
          x={26 + i * 52}
          y="34"
          width="42"
          height="52"
          rx="5"
          fill="rgba(255,93,143,0.35)"
          className="fillin"
          style={{ animationDelay: `${i * 0.12}s`, animationDuration: '2.4s' }}
        />
      </g>
    ))}
  </Stage>
);

/** Reference is not cheating. Working without it is just slower. */
export const WfReference = strokeDemo({
  vb: '0 0 280 170',
  layers: [
    { rect: [20, 26, 70, 54, 4], stroke: C.cyan, w: 2, delay: 0, dur: 0.4 },
    { rect: [98, 26, 70, 54, 4], stroke: C.cyan, w: 2, delay: 0.15, dur: 0.4 },
    { rect: [20, 90, 70, 54, 4], stroke: C.cyan, w: 2, delay: 0.3, dur: 0.4 },
    { rect: [98, 90, 70, 54, 4], stroke: C.cyan, w: 2, delay: 0.45, dur: 0.4 },
    { text: { x: 94, y: 160, t: 'reference board', size: 9 }, fill: C.cyan, delay: 0.9 },
    { d: 'M176 84 L198 84', stroke: C.mid, w: 2, delay: 1, dur: 0.2 },
    { rect: [206, 40, 60, 88, 4], stroke: C.accent, w: 2.6, delay: 1.15, dur: 0.6 },
    { d: 'M220 100 C224 66 246 62 252 96', stroke: C.accent, w: 2.2, delay: 1.6, dur: 0.5 },
    { text: { x: 236, y: 160, t: 'your drawing', size: 9 }, fill: C.accent, delay: 2 },
  ],
});
