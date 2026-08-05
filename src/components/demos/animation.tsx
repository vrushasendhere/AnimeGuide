import type { CSSProperties } from 'react';
import { C, Paper, Stage, Tag, strokeDemo } from './kit';

/* ------------------------------------------------------------------
   Track 5 — how a shot actually gets built: keys, breakdowns,
   inbetweens, charts, and the cheats that make it affordable.
   ------------------------------------------------------------------ */

const Pose = ({
  x,
  lift,
  color,
  scale = 1,
  opacity = 1,
  className,
  style,
}: {
  x: number;
  lift: number;
  color: string;
  scale?: number;
  opacity?: number;
  className?: string;
  style?: CSSProperties;
}) => (
  <g transform={`translate(${x} ${lift}) scale(${scale})`} opacity={opacity} className={className} style={style}>
    <circle cx="0" cy="-40" r="9" fill={color} />
    <line x1="0" y1="-31" x2="0" y2="-4" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="0" y1="-4" x2="-9" y2="18" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="0" y1="-4" x2="9" y2="18" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="0" y1="-24" x2="-13" y2="-10" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <line x1="0" y1="-24" x2="13" y2="-10" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
  </g>
);

/** Step 1 — only the two poses that carry the idea. */
export const AnKeys = () => (
  <Stage vb="0 0 320 190">
    <Pose x={64} lift={130} color={C.accent} className="pop" style={{ animationDelay: '0s' }} />
    <Pose x={256} lift={100} color={C.accent} className="pop" style={{ animationDelay: '0.25s' }} />
    <Tag x={64} y={172} color={C.accent} size={10}>KEY 1</Tag>
    <Tag x={256} y={172} color={C.accent} size={10}>KEY 2</Tag>
    <Tag x={160} y={30} color="#96a0b8" size={10}>draw the extremes first — nothing else</Tag>
  </Stage>
);

/** Step 2 — the breakdown decides the flavour. It is never the halfway pose. */
export const AnBreakdown = () => (
  <Stage vb="0 0 320 190">
    <Pose x={64} lift={130} color="#4a5570" opacity={0.55} />
    <Pose x={256} lift={100} color="#4a5570" opacity={0.55} />
    <line x1="160" y1="46" x2="160" y2="160" stroke="#4a5570" strokeWidth="1.5" strokeDasharray="4 4" />
    <Pose x={198} lift={104} color={C.gold} className="pop" style={{ animationDelay: '0.4s' }} />
    <Tag x={160} y={40} color="#6b7690" size={9}>halfway</Tag>
    <Tag x={210} y={172} color={C.gold} size={10}>BREAKDOWN</Tag>
    <Tag x={160} y={186} color="#96a0b8" size={9}>pushed off centre = character</Tag>
  </Stage>
);

/** Step 3 — inbetweens are the cheap frames. They carry no decisions. */
export const AnInbetween = () => (
  <Stage vb="0 0 320 190">
    <Pose x={64} lift={130} color={C.accent} />
    <Pose x={198} lift={104} color={C.gold} />
    <Pose x={256} lift={100} color={C.accent} />
    {[110, 152, 228].map((x, i) => (
      <Pose
        key={x}
        x={x}
        lift={126 - i * 8}
        color={C.cyan}
        opacity={0.9}
        className="fillin"
        style={{ animationDelay: `${i * 0.12}s` }}
      />
    ))}
    <Tag x={160} y={182} color={C.cyan} size={10}>inbetweens fill the gaps last</Tag>
  </Stage>
);

/** The chart tells the inbetweener exactly where each frame sits. */
const Chart = ({
  title,
  ts,
  color,
  x,
}: {
  title: string;
  ts: number[];
  color: string;
  x: number;
}) => (
  <g>
    <line x1={x} y1="34" x2={x} y2="132" stroke={C.ink} strokeWidth="2" />
    {ts.map((t, i) => {
      const y = 34 + t * 98;
      const isKey = i === 0 || i === ts.length - 1;
      return (
        <g key={i}>
          <line
            x1={x - (isKey ? 18 : 11)}
            y1={y}
            x2={x + (isKey ? 18 : 11)}
            y2={y}
            stroke={isKey ? C.accent : color}
            strokeWidth={isKey ? 3 : 1.8}
          />
          <text
            x={x + 24}
            y={y + 3.5}
            fontSize="8.5"
            fill={isKey ? C.accent : C.mid}
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
          >
            {i + 1}
          </text>
        </g>
      );
    })}
    <text x={x} y="150" fontSize="9" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700">
      {title}
    </text>
  </g>
);

const evenTs = [0, 0.25, 0.5, 0.75, 1];
const slowInTs = [0, 0.42, 0.7, 0.89, 1];
const slowOutTs = [0, 0.11, 0.3, 0.58, 1];

export const AnTimingChart = () => (
  <Paper vb="0 0 300 165">
    <Chart title="even" ts={evenTs} color={C.mid} x={54} />
    <Chart title="slow in" ts={slowInTs} color={C.cyan} x={150} />
    <Chart title="slow out" ts={slowOutTs} color={C.gold} x={246} />
  </Paper>
);

/** Onion skin: the previous drawings stay faintly visible while you work. */
export const AnOnionSkin = () => (
  <Paper vb="0 0 300 175">
    <g className="ghostpulse">
      <Pose x={80} lift={120} color={C.red} opacity={0.35} />
      <Pose x={110} lift={114} color={C.red} opacity={0.5} />
    </g>
    <Pose x={150} lift={108} color={C.ink} />
    <g className="ghostpulse">
      <Pose x={190} lift={112} color={C.cyan} opacity={0.5} />
      <Pose x={220} lift={118} color={C.cyan} opacity={0.35} />
    </g>
    <Tag x={90} y={158} color={C.red} size={9}>past</Tag>
    <Tag x={150} y={158} color={C.ink} size={9}>now</Tag>
    <Tag x={212} y={158} color={C.cyan} size={9}>next</Tag>
  </Paper>
);

/** One distorted frame the audience never consciously sees. */
export const AnSmear = () => (
  <Stage vb="0 0 320 180">
    <g className="smear-solid">
      <circle cx="90" cy="96" r="20" fill={C.accent} />
    </g>
    <g className="smear-flash">
      <path d="M70 96 C110 74 200 74 244 92 C200 116 110 118 70 96 Z" fill={C.accent} opacity="0.7" />
      <ellipse cx="244" cy="94" rx="12" ry="18" fill={C.accent} />
    </g>
    <g className="smear-solid">
      <circle cx="244" cy="96" r="20" fill={C.accent} opacity="0" />
    </g>
  </Stage>
);

/** On ones vs on twos: half the drawings, most of the smoothness. */
export const AnOnesTwos = () => (
  <Stage vb="0 0 320 190">
    <text x="24" y="52" fontSize="10" fill="#96a0b8" fontFamily="Poppins, sans-serif" fontWeight="700">
      1s
    </text>
    {Array.from({ length: 12 }, (_, i) => (
      <rect key={i} x={54 + i * 21} y="36" width="17" height="22" rx="3" fill={C.cyan} opacity="0.85" />
    ))}
    <text x="24" y="104" fontSize="10" fill="#96a0b8" fontFamily="Poppins, sans-serif" fontWeight="700">
      2s
    </text>
    {Array.from({ length: 6 }, (_, i) => (
      <rect key={i} x={54 + i * 42} y="88" width="38" height="22" rx="3" fill={C.gold} opacity="0.85" />
    ))}
    <text x="24" y="156" fontSize="10" fill="#96a0b8" fontFamily="Poppins, sans-serif" fontWeight="700">
      3s
    </text>
    {Array.from({ length: 4 }, (_, i) => (
      <rect key={i} x={54 + i * 63} y="140" width="59" height="22" rx="3" fill={C.accent} opacity="0.85" />
    ))}
    <Tag x={196} y={182} color="#96a0b8" size={9}>TV anime lives on 2s and 3s</Tag>
  </Stage>
);

/** The walk cycle: the first cycle worth owning. */
export const AnWalk = () => (
  <Stage vb="0 0 320 190">
    <line x1="40" y1="164" x2="280" y2="164" stroke={C.cyan} strokeWidth="1.5" opacity="0.3" />
    <g transform="translate(160 0)" className="bodybob">
      <circle cx="0" cy="58" r="15" fill={C.accent} style={{ filter: 'drop-shadow(0 0 8px rgba(255,93,143,0.5))' }} />
      <rect x="-11" y="74" width="22" height="46" rx="8" fill="#4a5570" />
      <g className="legA">
        <rect x="-6" y="116" width="9" height="48" rx="4" fill="#3b4356" />
      </g>
      <g className="legB">
        <rect x="-3" y="116" width="9" height="48" rx="4" fill="#5a6580" />
      </g>
      <g className="legB">
        <rect x="-20" y="78" width="8" height="38" rx="4" fill="#3b4356" />
      </g>
      <g className="legA">
        <rect x="12" y="78" width="8" height="38" rx="4" fill="#5a6580" />
      </g>
    </g>
    <Tag x={160} y={182} color="#96a0b8" size={9}>contact · down · pass · up — then mirror it</Tag>
  </Stage>
);

/** Track the arc before you touch a single inbetween. */
export const AnArcTrack = strokeDemo({
  vb: '0 0 300 170',
  layers: [
    { d: 'M34 128 Q150 14 266 128', stroke: C.accent, w: 2, dash: '5 4', delay: 0, dur: 0.8 },
    ...[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const t = i / 6;
      const x = (1 - t) * (1 - t) * 34 + 2 * (1 - t) * t * 150 + t * t * 266;
      const y = (1 - t) * (1 - t) * 128 + 2 * (1 - t) * t * 14 + t * t * 128;
      return {
        circle: [x, y, 5] as [number, number, number],
        stroke: 'none',
        fill: C.ink,
        mode: 'pop' as const,
        delay: 0.6 + i * 0.09,
      };
    }),
    { text: { x: 150, y: 160, t: 'every hand, foot and prop travels an arc', size: 9 }, fill: C.mid, delay: 1.5 },
  ],
});

/** A cycle only works if the last frame hands off cleanly to the first. */
export const AnLoop = () => (
  <Paper vb="0 0 280 170">
    <path
      id="loopring"
      d="M140 30 A 74 52 0 1 1 139.9 30"
      fill="none"
      stroke={C.faint}
      strokeWidth="14"
    />
    <path d="M140 30 A 74 52 0 1 1 139.9 30" fill="none" stroke={C.light} strokeWidth="2" />
    {Array.from({ length: 8 }, (_, i) => {
      const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
      return (
        <circle
          key={i}
          cx={140 + Math.cos(a) * 74}
          cy={82 + Math.sin(a) * 52}
          r="6"
          fill={i === 0 ? C.accent : C.ink}
          className="pop"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      );
    })}
    <g style={{ offsetPath: 'path("M140 30 A 74 52 0 1 1 139.9 30")' }} className="reuseflow">
      <circle cx="0" cy="0" r="9" fill={C.cyan} />
    </g>
    <Tag x={140} y={162} color={C.mid} size={9}>frame 8 must lead back into frame 1</Tag>
  </Paper>
);

/** Multiples: draw the limb several times instead of a blur. */
export const AnMultiples = strokeDemo({
  vb: '0 0 280 160',
  layers: [
    { circle: [70, 80, 22], stroke: C.ink, w: 2.6, delay: 0, dur: 0.5 },
    ...[0, 1, 2, 3].map((i) => ({
      d: `M88 ${74 + i * 4} C${130 + i * 6} ${46 + i * 14} ${170 + i * 8} ${58 + i * 12} ${208 + i * 6} ${74 + i * 8}`,
      stroke: C.ink,
      w: 2.2,
      opacity: 1 - i * 0.18,
      delay: 0.4 + i * 0.12,
      dur: 0.35,
    })),
    { text: { x: 150, y: 136, t: '4 arms on one frame = speed', size: 9 }, fill: C.accent, delay: 1.2 },
  ],
});
