import { C, Stage, Tag } from './kit';

/* ------------------------------------------------------------------
   Track 4 — the twelve principles, as motion rather than prose.
   Every principle ships as a "without" and a "with" demo so the
   difference is something you watch, not something you read about.
   ------------------------------------------------------------------ */

const VB = '0 0 320 210';
const FLOOR = 197;

const Floor = () => (
  <line x1="16" y1={FLOOR} x2="304" y2={FLOOR} stroke={C.cyan} strokeWidth="1.5" opacity="0.35" />
);

const glow = { filter: 'drop-shadow(0 0 8px rgba(255,93,143,0.55))' };

/* --- 1. Squash and stretch --- */

export const PrSquashBad = () => (
  <Stage vb={VB}>
    <Floor />
    <g className="ball-rigid">
      <circle cx="40" cy="32" r="15" fill={C.red} opacity="0.9" />
    </g>
    <Tag x={160} y={26} color={C.red} size={11}>rigid — reads as a sticker</Tag>
  </Stage>
);

export const PrSquashGood = () => (
  <Stage vb={VB}>
    <Floor />
    <g className="ball-arc">
      <circle cx="40" cy="32" r="15" fill={C.accent} style={glow} />
    </g>
    <Tag x={160} y={26} color={C.accent} size={11}>squash on impact — reads as rubber</Tag>
  </Stage>
);

/* --- 2. Anticipation --- */

export const PrAnticBad = () => (
  <Stage vb={VB}>
    <Floor />
    <g className="no-anticip">
      <rect x="40" y="140" width="46" height="52" rx="8" fill={C.red} opacity="0.9" />
    </g>
    <Tag x={160} y={40} color={C.red} size={11}>no wind-up — the move is invisible</Tag>
  </Stage>
);

export const PrAnticGood = () => (
  <Stage vb={VB}>
    <Floor />
    <g className="anticip">
      <rect x="40" y="140" width="46" height="52" rx="8" fill={C.accent} style={glow} />
    </g>
    <Tag x={160} y={40} color={C.accent} size={11}>pull back first — the eye gets warned</Tag>
  </Stage>
);

/* --- 3. Staging --- */

const Figure = ({ armOut }: { armOut: boolean }) => (
  <g fill="currentColor">
    <circle cx="0" cy="-58" r="17" />
    <path d="M-15 -40 L15 -40 L21 24 L-21 24 Z" />
    <rect x="-9" y="24" width="7" height="42" rx="3" />
    <rect x="2" y="24" width="7" height="42" rx="3" />
    {armOut ? (
      <rect x="14" y="-38" width="52" height="9" rx="4.5" transform="rotate(-18 14 -34)" />
    ) : (
      <rect x="-30" y="-24" width="52" height="9" rx="4.5" transform="rotate(22 -30 -20)" />
    )}
  </g>
);

export const PrStagingBad = () => (
  <Stage vb={VB}>
    <Floor />
    <g transform="translate(160 131)" color="#3b4356">
      <Figure armOut={false} />
    </g>
    <Tag x={160} y={30} color={C.red} size={11}>arm crosses the body — pose is mush</Tag>
  </Stage>
);

export const PrStagingGood = () => (
  <Stage vb={VB}>
    <Floor />
    <g transform="translate(140 131)" color="#3b4356">
      <Figure armOut />
    </g>
    <Tag x={160} y={30} color={C.green} size={11}>arm clears the body — pose reads flat black</Tag>
  </Stage>
);

/* --- 4. Straight ahead vs pose to pose --- */

export const PrStraightAhead = () => (
  <Stage vb={VB}>
    {Array.from({ length: 9 }, (_, i) => (
      <circle
        key={i}
        cx={40 + i * 30}
        cy={110 + Math.sin(i * 0.9) * 34}
        r="9"
        fill={C.gold}
        className="pop"
        style={{ animationDelay: `${i * 0.22}s` }}
      />
    ))}
    <Tag x={160} y={34} color={C.gold} size={11}>straight ahead — frame 1, 2, 3, 4…</Tag>
    <Tag x={160} y={186} color="#96a0b8" size={9}>alive and loose, harder to control</Tag>
  </Stage>
);

export const PrPoseToPose = () => (
  <Stage vb={VB}>
    <circle cx="40" cy="126" r="11" fill={C.accent} className="pop" style={{ animationDelay: '0s' }} />
    <circle cx="160" cy="72" r="11" fill={C.accent} className="pop" style={{ animationDelay: '0.2s' }} />
    <circle cx="280" cy="126" r="11" fill={C.accent} className="pop" style={{ animationDelay: '0.4s' }} />
    {[1, 2, 3, 5, 6, 7].map((i) => (
      <circle
        key={i}
        cx={40 + i * 30}
        cy={i < 4 ? 126 - i * 13.5 : 126 - (8 - i) * 13.5}
        r="7"
        fill={C.cyan}
        className="fillin"
        style={{ animationDelay: `${0.6 + i * 0.05}s` }}
      />
    ))}
    <Tag x={160} y={34} color={C.accent} size={11}>pose to pose — keys first, fill after</Tag>
    <Tag x={160} y={186} color="#96a0b8" size={9}>controlled, and how anime is actually made</Tag>
  </Stage>
);

/* --- 5. Follow through and overlapping action --- */

export const PrFollowBad = () => (
  <Stage vb={VB}>
    <Floor />
    <g className="bob" style={{ animationDuration: '1.6s' }}>
      <rect x="140" y="96" width="40" height="80" rx="10" fill="#3b4356" />
      <circle cx="160" cy="82" r="17" fill={C.red} opacity="0.9" />
      <rect x="150" y="60" width="20" height="26" rx="9" fill={C.red} opacity="0.55" />
    </g>
    <Tag x={160} y={32} color={C.red} size={11}>everything stops on the same frame</Tag>
  </Stage>
);

export const PrFollowGood = () => (
  <Stage vb={VB}>
    <Floor />
    <g className="bob" style={{ animationDuration: '1.6s' }}>
      <rect x="140" y="96" width="40" height="80" rx="10" fill="#3b4356" />
      <circle cx="160" cy="82" r="17" fill={C.accent} style={glow} />
      <g className="lag">
        <path d="M152 66 C150 46 168 40 176 52 C182 62 172 70 168 66" fill={C.accent} opacity="0.65" />
      </g>
    </g>
    <Tag x={160} y={32} color={C.accent} size={11}>hair keeps going, then settles</Tag>
  </Stage>
);

/* --- 6. Slow in and slow out --- */

const SpacingRow = ({
  y,
  positions,
  color,
}: {
  y: number;
  positions: number[];
  color: string;
}) => (
  <>
    {positions.map((p, i) => (
      <circle key={i} cx={40 + p * 240} cy={y} r="5" fill={color} opacity="0.75" />
    ))}
  </>
);

const even = Array.from({ length: 9 }, (_, i) => i / 8);
const eased = even.map((t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2));

export const PrEaseBad = () => (
  <Stage vb={VB}>
    <SpacingRow y={84} positions={even} color={C.red} />
    <g className="travel-linear">
      <circle cx="40" cy="130" r="12" fill={C.red} opacity="0.9" />
    </g>
    <Tag x={160} y={44} color={C.red} size={11}>even spacing — mechanical</Tag>
  </Stage>
);

export const PrEaseGood = () => (
  <Stage vb={VB}>
    <SpacingRow y={84} positions={eased} color={C.accent} />
    <g className="travel-ease">
      <circle cx="40" cy="130" r="12" fill={C.accent} style={glow} />
    </g>
    <Tag x={160} y={44} color={C.accent} size={11}>bunched at the ends — alive</Tag>
  </Stage>
);

/* --- 7. Arcs --- */

export const PrArcsBad = () => (
  <Stage vb={VB}>
    <path d="M40 150 L160 60 L280 150" stroke={C.red} strokeWidth="2" fill="none" strokeDasharray="5 5" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const t = i / 6;
      const x = 40 + t * 240;
      const y = t < 0.5 ? 150 - t * 180 : 60 + (t - 0.5) * 180;
      return <circle key={i} cx={x} cy={y} r="5" fill={C.red} opacity="0.7" />;
    })}
    <Tag x={160} y={38} color={C.red} size={11}>straight segments — robotic</Tag>
  </Stage>
);

export const PrArcsGood = () => (
  <Stage vb={VB}>
    <path d="M40 150 Q160 20 280 150" stroke={C.accent} strokeWidth="2" fill="none" strokeDasharray="5 5" opacity="0.6" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const t = i / 6;
      const x = (1 - t) * (1 - t) * 40 + 2 * (1 - t) * t * 160 + t * t * 280;
      const y = (1 - t) * (1 - t) * 150 + 2 * (1 - t) * t * 20 + t * t * 150;
      return <circle key={i} cx={x} cy={y} r="5" fill={C.accent} opacity="0.85" />;
    })}
    <Tag x={160} y={38} color={C.accent} size={11}>one smooth arc — organic</Tag>
  </Stage>
);

/* --- 8. Secondary action --- */

export const PrSecondary = () => (
  <Stage vb={VB}>
    <Floor />
    <g className="bob">
      <rect x="142" y="100" width="36" height="76" rx="9" fill="#3b4356" />
      <circle cx="160" cy="84" r="16" fill={C.accent} style={glow} />
      <g className="sway">
        <path d="M158 96 L150 154 L166 152 Z" fill={C.cyan} opacity="0.8" />
      </g>
    </g>
    <Tag x={160} y={30} color={C.cyan} size={11}>walk = main · scarf = secondary</Tag>
    <Tag x={160} y={190} color="#96a0b8" size={9}>it supports the action, never competes with it</Tag>
  </Stage>
);

/* --- 9. Timing --- */

const FrameTicks = ({ y, n, color }: { y: number; n: number; color: string }) => (
  <>
    {Array.from({ length: n + 1 }, (_, i) => (
      <line
        key={i}
        x1={44 + (i * 220) / n}
        y1={y - 7}
        x2={44 + (i * 220) / n}
        y2={y + 7}
        stroke={color}
        strokeWidth="1.5"
        opacity="0.5"
      />
    ))}
  </>
);

export const PrTimingFast = () => (
  <Stage vb={VB}>
    <FrameTicks y={140} n={4} color={C.gold} />
    <g className="step-fast">
      <circle cx="44" cy="90" r="13" fill={C.gold} />
    </g>
    <Tag x={160} y={44} color={C.gold} size={11}>4 frames — snappy, weightless</Tag>
  </Stage>
);

export const PrTimingSlow = () => (
  <Stage vb={VB}>
    <FrameTicks y={140} n={12} color={C.cyan} />
    <g className="step-slow">
      <circle cx="44" cy="90" r="13" fill={C.cyan} />
    </g>
    <Tag x={160} y={44} color={C.cyan} size={11}>12 frames — heavy, deliberate</Tag>
  </Stage>
);

/* --- 10. Exaggeration --- */

export const PrExaggBad = () => (
  <Stage vb={VB}>
    <Floor />
    <g className="exagg-weak">
      <rect x="134" y="106" width="52" height="88" rx="12" fill={C.red} opacity="0.85" />
    </g>
    <Tag x={160} y={44} color={C.red} size={11}>timid — the audience misses it</Tag>
  </Stage>
);

export const PrExaggGood = () => (
  <Stage vb={VB}>
    <Floor />
    <g className="exagg">
      <rect x="134" y="106" width="52" height="88" rx="12" fill={C.accent} style={glow} />
    </g>
    <Tag x={160} y={44} color={C.accent} size={11}>pushed — the idea lands</Tag>
  </Stage>
);

/* --- 11. Solid drawing --- */

export const PrSolidFlat = () => (
  <Stage vb={VB}>
    <circle cx="160" cy="106" r="52" fill="none" stroke={C.red} strokeWidth="2.5" />
    <Tag x={160} y={186} color={C.red} size={11}>a flat shape — no volume</Tag>
  </Stage>
);

export const PrSolidForm = () => (
  <Stage vb={VB}>
    <defs>
      <radialGradient id="sphere" cx="35%" cy="30%">
        <stop offset="0%" stopColor="#ff9ec0" />
        <stop offset="70%" stopColor="#d63f74" />
        <stop offset="100%" stopColor="#6d1c3a" />
      </radialGradient>
    </defs>
    <circle cx="160" cy="106" r="52" fill="url(#sphere)" />
    <g className="headturn">
      <ellipse
        cx="148"
        cy="106"
        rx="18"
        ry="52"
        fill="none"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.6"
        className="headsquish"
      />
    </g>
    <ellipse cx="160" cy="106" rx="52" ry="16" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.6" />
    <Tag x={160} y={186} color={C.accent} size={11}>cross-contours — it exists in space</Tag>
  </Stage>
);

/* --- 12. Appeal --- */

export const PrAppealBland = () => (
  <Stage vb={VB}>
    {[70, 160, 250].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy="92" r="26" fill="#3b4356" />
        <rect x={x - 20} y="120" width="40" height="56" rx="8" fill="#3b4356" />
      </g>
    ))}
    <Tag x={160} y={40} color={C.red} size={11}>same shapes — nobody stands out</Tag>
  </Stage>
);

export const PrAppealVaried = () => (
  <Stage vb={VB}>
    <g>
      <circle cx="70" cy="98" r="30" fill={C.accent} />
      <path d="M50 126 L90 126 L98 178 L42 178 Z" fill={C.accent} opacity="0.8" />
    </g>
    <g>
      <rect x="140" y="72" width="42" height="42" rx="6" fill={C.cyan} />
      <path d="M138 118 L184 118 L178 178 L144 178 Z" fill={C.cyan} opacity="0.8" />
    </g>
    <g>
      <path d="M250 66 L272 108 L228 108 Z" fill={C.gold} />
      <path d="M234 112 L266 112 L276 178 L224 178 Z" fill={C.gold} opacity="0.8" />
    </g>
    <Tag x={160} y={40} color={C.green} size={11}>round · square · angular — instant cast</Tag>
  </Stage>
);
