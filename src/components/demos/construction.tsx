import { C, Paper, Tag, strokeDemo } from './kit';

/* ------------------------------------------------------------------
   Track 2 — building a head and a figure out of simple solids.
   Same construction order every time: big form, then division,
   then features. The demos follow that order literally.
   ------------------------------------------------------------------ */

/* --- Loomis head, one step per card --- */

export const CtBall = strokeDemo({
  layers: [
    { circle: [120, 66, 42], stroke: C.ink, w: 2.8, delay: 0, dur: 0.9 },
    { text: { x: 120, y: 140, t: 'the cranium is a ball', size: 9 }, fill: C.mid, delay: 0.9 },
  ],
});

export const CtSidePlane = strokeDemo({
  layers: [
    { circle: [120, 66, 42], stroke: C.light, w: 2, delay: 0, dur: 0.5 },
    { ellipse: [120, 66, 30, 42], stroke: C.accent, w: 2.4, dash: '4 3', delay: 0.4, dur: 0.7 },
    { line: [120, 20, 120, 112], stroke: C.accent, w: 1.6, delay: 1, dur: 0.4 },
    { text: { x: 120, y: 140, t: 'slice the sides flat', size: 9 }, fill: C.accent, delay: 1.3 },
  ],
});

export const CtJaw = strokeDemo({
  layers: [
    { circle: [120, 66, 42], stroke: C.light, w: 2, delay: 0, dur: 0.4 },
    { d: 'M80 84 C84 118 102 142 120 147', stroke: C.ink, w: 2.8, delay: 0.4, dur: 0.6 },
    { d: 'M160 84 C156 118 138 142 120 147', stroke: C.ink, w: 2.8, delay: 0.7, dur: 0.6 },
    { text: { x: 120, y: 158, t: 'jaw hangs off the ball', size: 9 }, fill: C.mid, delay: 1.4 },
  ],
});

export const CtGuides = strokeDemo({
  layers: [
    { circle: [120, 66, 42], stroke: C.light, w: 1.8, delay: 0, dur: 0.4 },
    { d: 'M80 84 C84 118 102 142 120 147 C138 142 156 118 160 84', stroke: C.light, w: 1.8, delay: 0.3, dur: 0.6 },
    { line: [120, 22, 120, 150], stroke: C.accent, w: 1.6, dash: '4 3', delay: 0.8, dur: 0.4 },
    { line: [80, 100, 160, 100], stroke: C.cyan, w: 2, delay: 1.1, dur: 0.35 },
    { line: [92, 122, 148, 122], stroke: C.cyan, w: 1.6, delay: 1.3, dur: 0.3 },
    { line: [102, 134, 138, 134], stroke: C.cyan, w: 1.4, delay: 1.5, dur: 0.3 },
    { text: { x: 176, y: 103, t: 'eyes', size: 8, anchor: 'start' }, fill: C.cyan, delay: 1.6 },
    { text: { x: 176, y: 125, t: 'nose', size: 8, anchor: 'start' }, fill: C.cyan, delay: 1.7 },
    { text: { x: 176, y: 137, t: 'mouth', size: 8, anchor: 'start' }, fill: C.cyan, delay: 1.8 },
  ],
});

/** The anime edit: bigger cranium, smaller jaw, eyes pushed low. */
export const CtAnimeProportion = strokeDemo({
  vb: '0 0 280 170',
  layers: [
    { circle: [76, 62, 36], stroke: C.light, w: 1.8, delay: 0, dur: 0.5 },
    { d: 'M42 76 C46 106 62 128 76 132 C90 128 106 106 110 76', stroke: C.light, w: 1.8, delay: 0.3, dur: 0.6 },
    { line: [42, 76, 110, 76], stroke: C.mid, w: 1.6, dash: '3 3', delay: 0.9, dur: 0.3 },
    { text: { x: 76, y: 152, t: 'realistic: eyes at halfway', size: 8 }, fill: C.mid, delay: 1.1 },
    { circle: [200, 58, 42], stroke: C.ink, w: 2.4, delay: 1.2, dur: 0.6 },
    { d: 'M164 74 C168 100 186 120 200 124 C214 120 232 100 236 74', stroke: C.ink, w: 2.4, delay: 1.6, dur: 0.6 },
    { line: [164, 92, 236, 92], stroke: C.accent, w: 2, delay: 2.2, dur: 0.3 },
    { text: { x: 200, y: 152, t: 'anime: eyes pushed low', size: 8 }, fill: C.accent, delay: 2.4 },
  ],
});

/** The ball keeps its shape as it turns — only the centre line moves. */
export const CtHeadTurn = () => (
  <Paper>
    <circle cx="110" cy="70" r="44" fill="none" stroke={C.ink} strokeWidth="2.6" />
    <g className="headturn">
      <ellipse
        cx="98"
        cy="70"
        rx="26"
        ry="44"
        fill="none"
        stroke={C.accent}
        strokeWidth="2"
        className="headsquish"
      />
    </g>
    <ellipse cx="110" cy="70" rx="44" ry="14" fill="none" stroke={C.cyan} strokeWidth="1.8" opacity="0.7" />
    <Tag x={120} y={140} color={C.mid} size={9}>centre line follows the turn</Tag>
  </Paper>
);

/* --- Eye, in the order a professional actually draws it --- */

export const CtEyeLash = strokeDemo({
  layers: [
    { d: 'M46 74 C78 46 162 44 194 68', stroke: C.ink, w: 7, delay: 0, dur: 0.7 },
    { text: { x: 120, y: 132, t: 'heavy upper lash first', size: 9 }, fill: C.mid, delay: 0.8 },
  ],
});

export const CtEyeLid = strokeDemo({
  layers: [
    { d: 'M46 74 C78 46 162 44 194 68', stroke: C.light, w: 6, delay: 0, dur: 0.3 },
    { d: 'M56 106 C92 122 154 120 188 100', stroke: C.ink, w: 2.4, delay: 0.35, dur: 0.6 },
    { text: { x: 120, y: 140, t: 'thin lower lid — never equal', size: 9 }, fill: C.mid, delay: 1 },
  ],
});

export const CtEyeIris = strokeDemo({
  layers: [
    { d: 'M46 74 C78 46 162 44 194 68', stroke: C.light, w: 6, delay: 0, dur: 0.25 },
    { d: 'M56 106 C92 122 154 120 188 100', stroke: C.light, w: 2.2, delay: 0.2, dur: 0.25 },
    { ellipse: [120, 84, 34, 36], stroke: C.cyan, fill: 'rgba(31,151,173,0.22)', w: 2.6, delay: 0.5, dur: 0.7 },
    { text: { x: 120, y: 146, t: 'iris cropped by the lash', size: 9 }, fill: C.cyan, delay: 1.2 },
  ],
});

export const CtEyeShine = strokeDemo({
  layers: [
    { ellipse: [120, 84, 34, 36], stroke: C.cyan, fill: 'rgba(31,151,173,0.22)', w: 2.4, delay: 0, dur: 0.3 },
    { ellipse: [120, 88, 14, 16], stroke: 'none', fill: C.ink, mode: 'pop', delay: 0.3 },
    { circle: [104, 68, 9], stroke: C.ink, fill: '#ffffff', w: 1.4, mode: 'pop', delay: 0.6 },
    { circle: [136, 100, 4.5], stroke: 'none', fill: '#ffffff', mode: 'pop', delay: 0.8 },
    { d: 'M46 74 C78 46 162 44 194 68', stroke: C.ink, w: 7, delay: 0.9, dur: 0.4 },
    { text: { x: 120, y: 146, t: 'two lights = life', size: 9 }, fill: C.accent, delay: 1.4 },
  ],
});

/* --- Hair --- */

export const CtHairSkull = strokeDemo({
  layers: [
    { circle: [120, 78, 40], stroke: C.light, w: 2, dash: '4 3', delay: 0, dur: 0.6 },
    { circle: [120, 74, 50], stroke: C.ink, w: 2.6, delay: 0.6, dur: 0.8 },
    { text: { x: 120, y: 148, t: 'hair sits ABOVE the skull', size: 9 }, fill: C.accent, delay: 1.5 },
  ],
});

export const CtHairClumps = strokeDemo({
  layers: [
    { circle: [120, 82, 38], stroke: C.light, w: 1.8, dash: '4 3', delay: 0, dur: 0.4 },
    { d: 'M86 62 C74 30 96 14 120 22 C146 12 168 32 154 62', stroke: C.ink, w: 2.6, delay: 0.4, dur: 0.8 },
    { d: 'M92 54 C78 74 70 106 76 126', stroke: C.ink, w: 2.4, delay: 1, dur: 0.5 },
    { d: 'M120 30 C112 62 108 96 116 122', stroke: C.ink, w: 2.4, delay: 1.3, dur: 0.5 },
    { d: 'M150 52 C164 74 172 104 166 126', stroke: C.ink, w: 2.4, delay: 1.6, dur: 0.5 },
    { text: { x: 120, y: 152, t: 'three big clumps, not strands', size: 9 }, fill: C.mid, delay: 2.1 },
  ],
});

export const CtHairTips = strokeDemo({
  layers: [
    { d: 'M60 30 C72 62 70 96 56 122 C68 100 74 74 74 44', stroke: C.ink, fill: 'rgba(43,43,51,0.12)', w: 2.4, delay: 0, dur: 0.8 },
    { d: 'M110 24 C124 58 124 96 112 126 C126 102 132 68 128 36', stroke: C.ink, fill: 'rgba(43,43,51,0.12)', w: 2.4, delay: 0.5, dur: 0.8 },
    { d: 'M164 30 C180 60 182 98 172 124 C186 100 190 66 182 38', stroke: C.ink, fill: 'rgba(43,43,51,0.12)', w: 2.4, delay: 1, dur: 0.8 },
    { text: { x: 120, y: 150, t: 'wide at root · sharp at tip', size: 9 }, fill: C.mid, delay: 1.8 },
  ],
});

/* --- Figure --- */

export const CtLineOfAction = strokeDemo({
  vb: '0 0 200 190',
  layers: [
    { d: 'M76 20 C112 66 88 122 116 176', stroke: C.accent, w: 4, delay: 0, dur: 0.7 },
    { text: { x: 100, y: 188, t: 'one curve, whole body', size: 9 }, fill: C.accent, delay: 0.8 },
  ],
});

export const CtMasses = strokeDemo({
  vb: '0 0 200 190',
  layers: [
    { d: 'M76 20 C112 66 88 122 116 176', stroke: C.light, w: 3, delay: 0, dur: 0.35 },
    { circle: [78, 26, 15], stroke: C.ink, w: 2.4, delay: 0.35, dur: 0.4 },
    { ellipse: [96, 72, 24, 28], stroke: C.ink, w: 2.4, delay: 0.7, dur: 0.6 },
    { ellipse: [98, 122, 20, 18], stroke: C.ink, w: 2.4, delay: 1.1, dur: 0.5 },
    { line: [96, 96, 98, 108], stroke: C.ink, w: 2.4, delay: 1.5, dur: 0.25 },
    { text: { x: 100, y: 186, t: 'head · ribcage · pelvis', size: 9 }, fill: C.mid, delay: 1.7 },
  ],
});

export const CtLimbs = strokeDemo({
  vb: '0 0 200 190',
  layers: [
    { circle: [78, 26, 15], stroke: C.light, w: 2, delay: 0, dur: 0.25 },
    { ellipse: [96, 72, 24, 28], stroke: C.light, w: 2, delay: 0.15, dur: 0.3 },
    { ellipse: [98, 122, 20, 18], stroke: C.light, w: 2, delay: 0.3, dur: 0.3 },
    { d: 'M74 54 C50 72 44 96 52 118', stroke: C.ink, w: 3, delay: 0.5, dur: 0.5 },
    { d: 'M118 56 C142 70 150 96 144 116', stroke: C.ink, w: 3, delay: 0.75, dur: 0.5 },
    { d: 'M86 136 C78 152 76 168 82 182', stroke: C.ink, w: 3.4, delay: 1, dur: 0.5 },
    { d: 'M112 136 C124 152 128 168 124 182', stroke: C.ink, w: 3.4, delay: 1.25, dur: 0.5 },
    { text: { x: 100, y: 188, t: 'limbs are tapered tubes', size: 9 }, fill: C.mid, delay: 1.8 },
  ],
});

export const CtHeadCounts = strokeDemo({
  vb: '0 0 240 190',
  layers: [
    ...Array.from({ length: 7 }, (_, i) => ({
      line: [40, 22 + i * 24, 200, 22 + i * 24] as [number, number, number, number],
      stroke: i === 0 ? C.accent : C.faint,
      w: 1.4,
      dash: '4 4',
      delay: i * 0.07,
      dur: 0.25,
    })),
    { circle: [120, 34, 12], stroke: C.ink, w: 2.2, delay: 0.6, dur: 0.4 },
    { d: 'M108 48 L132 48 L138 104 L102 104 Z', stroke: C.ink, w: 2.2, delay: 0.9, dur: 0.6 },
    { d: 'M108 104 L106 168 M132 104 L134 168', stroke: C.ink, w: 2.6, delay: 1.4, dur: 0.5 },
    { text: { x: 216, y: 26, t: '1', size: 9, anchor: 'start' }, fill: C.accent, delay: 1.6 },
    { text: { x: 216, y: 170, t: '7', size: 9, anchor: 'start' }, fill: C.accent, delay: 1.7 },
    { text: { x: 120, y: 186, t: '7 heads tall · chibi = 3', size: 9 }, fill: C.mid, delay: 1.9 },
  ],
});

/** Hands: block the mitt before you ever think about fingers. */
export const CtHandMitt = strokeDemo({
  layers: [
    { d: 'M78 52 L152 46 L162 92 L86 102 Z', stroke: C.ink, w: 2.6, delay: 0, dur: 0.8 },
    { d: 'M78 60 C60 66 54 84 66 96 C74 104 86 100 88 94', stroke: C.ink, w: 2.6, delay: 0.7, dur: 0.6 },
    { text: { x: 120, y: 132, t: 'palm block + thumb wedge', size: 9 }, fill: C.mid, delay: 1.4 },
  ],
});

export const CtHandFingers = strokeDemo({
  layers: [
    { d: 'M78 52 L152 46 L162 92 L86 102 Z', stroke: C.light, w: 2, delay: 0, dur: 0.3 },
    ...Array.from({ length: 4 }, (_, i) => ({
      d: `M${100 + i * 18} ${48 - i * 2} L${104 + i * 18} ${20 + i * 5}`,
      stroke: C.ink,
      w: 3,
      delay: 0.4 + i * 0.12,
      dur: 0.3,
    })),
    { d: 'M78 60 C58 64 52 84 66 96', stroke: C.ink, w: 3, delay: 0.95, dur: 0.35 },
    { text: { x: 120, y: 132, t: 'fingers arc — never a straight row', size: 9 }, fill: C.accent, delay: 1.3 },
  ],
});

/** Expressions live in the brows and the mouth, not the eyes alone. */
export const CtExpressions = strokeDemo({
  vb: '0 0 300 150',
  layers: [
    ...[0, 1, 2].flatMap((i) => {
      const x = 60 + i * 90;
      const brow: string[] = [
        `M${x - 26} 46 L${x - 8} 42`,
        `M${x - 26} 40 L${x - 8} 48`,
        `M${x - 26} 48 L${x - 8} 38`,
      ];
      const brow2: string[] = [
        `M${x + 8} 42 L${x + 26} 46`,
        `M${x + 8} 48 L${x + 26} 40`,
        `M${x + 8} 38 L${x + 26} 48`,
      ];
      const mouth: string[] = [
        `M${x - 14} 96 Q${x} 106 ${x + 14} 96`,
        `M${x - 14} 100 Q${x} 88 ${x + 14} 100`,
        `M${x - 12} 96 Q${x} 96 ${x + 12} 96`,
      ];
      return [
        { circle: [x, 66, 34] as [number, number, number], stroke: C.light, w: 1.8, delay: i * 0.1, dur: 0.4 },
        { d: brow[i], stroke: C.ink, w: 3, delay: 0.5 + i * 0.15, dur: 0.25 },
        { d: brow2[i], stroke: C.ink, w: 3, delay: 0.55 + i * 0.15, dur: 0.25 },
        { ellipse: [x - 13, 66, 6, 8] as [number, number, number, number], stroke: 'none', fill: C.ink, mode: 'pop' as const, delay: 0.8 + i * 0.12 },
        { ellipse: [x + 13, 66, 6, 8] as [number, number, number, number], stroke: 'none', fill: C.ink, mode: 'pop' as const, delay: 0.85 + i * 0.12 },
        { d: mouth[i], stroke: C.ink, w: 2.4, delay: 1 + i * 0.15, dur: 0.3 },
      ];
    }),
    { text: { x: 60, y: 132, t: 'happy', size: 9 }, fill: C.mid, delay: 1.6 },
    { text: { x: 150, y: 132, t: 'sad', size: 9 }, fill: C.mid, delay: 1.7 },
    { text: { x: 240, y: 132, t: 'angry', size: 9 }, fill: C.mid, delay: 1.8 },
  ],
});
