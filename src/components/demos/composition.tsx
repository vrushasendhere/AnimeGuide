import { C, Tag } from './kit';
import { FW, FH, Frame, Fig, Hills, Ground } from './frame';

/* ------------------------------------------------------------------
   Composition track. Every demo is a 16:9 frame, because composition
   only means anything relative to the edges you are composing inside.
   ------------------------------------------------------------------ */

/* --- Rule of thirds --- */

const ThirdsGrid = ({ className = '' }: { className?: string }) => (
  <g className={className} stroke="#ffd9a0" strokeWidth="1" opacity="0.55">
    <line x1={FW / 3} y1="0" x2={FW / 3} y2={FH} />
    <line x1={(FW / 3) * 2} y1="0" x2={(FW / 3) * 2} y2={FH} />
    <line x1="0" y1={FH / 3} x2={FW} y2={FH / 3} />
    <line x1="0" y1={(FH / 3) * 2} x2={FW} y2={(FH / 3) * 2} />
  </g>
);

export const CpCentered = () => (
  <Frame caption="dead centre — static and airless">
    <Hills y={120} fill="#4a3f63" opacity={0.75} />
    <Ground />
    <Fig x={160} y={132} s={1.15} />
    <ThirdsGrid className="gridpulse" />
    <circle cx={160} cy={84} r="13" fill="none" stroke={C.red} strokeWidth="2" />
  </Frame>
);

export const CpThirds = () => (
  <Frame caption="subject on an intersection — the frame breathes">
    <Hills y={120} fill="#4a3f63" opacity={0.75} />
    <Ground />
    <Fig x={(FW / 3) * 2} y={132} s={1.15} />
    <ThirdsGrid className="gridpulse" />
    <circle cx={(FW / 3) * 2} cy={(FH / 3) * 2} r="13" fill="none" stroke={C.green} strokeWidth="2" />
  </Frame>
);

/* --- Eye path and leading lines --- */

export const CpLeadingLines = () => (
  <Frame caption="lines aim the eye where you want it">
    <Ground />
    <Hills y={118} fill="#4a3f63" opacity={0.6} />
    <path d="M-10 168 L128 108 L192 108 L330 168 Z" fill="#2e2740" />
    <path d="M-10 168 L128 108" stroke="#ffd9a0" strokeWidth="1.6" opacity="0.8" />
    <path d="M330 168 L192 108" stroke="#ffd9a0" strokeWidth="1.6" opacity="0.8" />
    <Fig x={160} y={112} s={0.85} />
    <circle cx={160} cy={92} r="20" fill="#ffd9a0" opacity="0.16" />
  </Frame>
);

const EYE_PATH = 'M40 40 C120 30 210 62 274 46 C210 96 90 92 46 118 C130 128 220 122 286 138';

export const CpEyePath = () => (
  <Frame caption="the eye enters, travels, and should not fall out">
    <Hills y={124} fill="#4a3f63" opacity={0.5} />
    <Ground />
    <path d={EYE_PATH} fill="none" stroke="#ffd9a0" strokeWidth="1.6" strokeDasharray="5 5" opacity="0.7" />
    <g style={{ offsetPath: `path("${EYE_PATH}")` }} className="reuseflow">
      <circle cx="0" cy="0" r="6" fill="#ffd9a0" style={{ filter: 'drop-shadow(0 0 6px rgba(255,217,160,0.9))' }} />
    </g>
    <circle cx="40" cy="40" r="4" fill={C.green} />
    <circle cx="286" cy="138" r="4" fill={C.accent} />
  </Frame>
);

/* --- Notan / value structure --- */

export const CpNotan = () => (
  <Frame caption="squint test: does it still read at two values?">
    <Hills y={112} fill="#5b4a72" opacity={0.9} />
    <Hills y={130} fill="#3d3352" />
    <Ground />
    <Fig x={214} y={132} s={1.1} />
    <circle cx="72" cy="46" r="19" fill="#ffd9a0" opacity="0.85" />
    {/* The two-value reduction flips in on top every few seconds. */}
    <g className="notanflip">
      <rect x="-10" y="-10" width="340" height="190" fill="#f2efe6" />
      <path d={`M-10 112 C40 90 80 106 130 96 C180 86 230 108 280 98 L330 104 L330 178 L-10 178 Z`} fill="#141824" />
      <Fig x={214} y={132} s={1.1} fill="#141824" />
      <circle cx="72" cy="46" r="19" fill="#141824" opacity="0.12" />
    </g>
  </Frame>
);

export const CpThreeValues = () => (
  <Frame caption="three values, clearly separated — light, mid, dark" tone="flat">
    <rect x="0" y="0" width={FW} height={FH} fill="#d8d3c6" />
    <path d="M-10 96 C50 74 90 92 140 84 C190 76 240 98 290 88 L330 92 L330 178 L-10 178 Z" fill="#8a8496" />
    <path d="M-10 132 L330 124 L330 178 L-10 178 Z" fill="#241f2e" />
    <Fig x={228} y={130} s={1.1} />
    <text x="40" y="52" fontSize="10" fill="#5a5560" fontFamily="Poppins, sans-serif" fontWeight="700">light</text>
    <text x="40" y="112" fontSize="10" fill="#efeae0" fontFamily="Poppins, sans-serif" fontWeight="700">mid</text>
    <text x="40" y="156" fontSize="10" fill="#c9c3d6" fontFamily="Poppins, sans-serif" fontWeight="700">dark</text>
  </Frame>
);

/* --- Focal point --- */

export const CpFocalFlat = () => (
  <Frame caption="everything equally lit — nowhere to look" tone="flat">
    <Ground />
    {[52, 108, 164, 220, 268].map((x) => (
      <Fig key={x} x={x} y={132} s={1} fill="#2b3049" />
    ))}
  </Frame>
);

export const CpFocalContrast = () => (
  <Frame caption="one value break decides where the eye lands">
    <Ground />
    {[52, 108, 220, 268].map((x) => (
      <Fig key={x} x={x} y={132} s={1} fill="#221d33" />
    ))}
    <circle cx="164" cy="104" r="30" fill="#ffd9a0" opacity="0.18" />
    <Fig x={164} y={132} s={1.12} fill="#ffe6bb" />
  </Frame>
);

/* --- Depth --- */

export const CpDepth = () => (
  <Frame caption="foreground, midground, background — three separated planes">
    <Hills y={104} fill="#7d6f96" opacity={0.55} />
    <Hills y={124} fill="#544a70" opacity={0.8} />
    <Ground />
    <Fig x={186} y={130} s={0.85} fill="#2a2440" />
    <path d="M-10 168 L-10 128 C24 120 44 140 66 132 L66 168 Z" fill="#0d0b16" />
    <path d="M300 168 L300 118 C312 128 322 112 330 120 L330 168 Z" fill="#0d0b16" />
    <text x="30" y="150" fontSize="9" fill="#8b93ad" fontFamily="Poppins, sans-serif" fontWeight="700">FG</text>
    <text x="186" y="150" fontSize="9" fill="#8b93ad" fontFamily="Poppins, sans-serif" fontWeight="700">MG</text>
    <text x="140" y="60" fontSize="9" fill="#b7aecb" fontFamily="Poppins, sans-serif" fontWeight="700">BG</text>
  </Frame>
);

export const CpAtmospheric = () => (
  <Frame caption="further away = lighter, bluer, lower contrast">
    {[
      { y: 92, fill: '#8f86a8', op: 0.45 },
      { y: 108, fill: '#6d6392', op: 0.65 },
      { y: 124, fill: '#4a4070', op: 0.85 },
      { y: 142, fill: '#241f38', op: 1 },
    ].map((l, i) => (
      <Hills key={i} y={l.y} fill={l.fill} opacity={l.op} />
    ))}
    <Fig x={252} y={150} s={1.05} fill="#100d1c" />
  </Frame>
);

/* --- Shot sizes and camera angles --- */

export const CpShotSizes = () => (
  <Frame caption="wide → medium → close → extreme close">
    <g className="shotstep">
      <Hills y={126} fill="#4a3f63" opacity={0.7} />
      <Ground />
      <Fig x={160} y={132} s={1.1} />
    </g>
  </Frame>
);

const AngleFrame = ({
  label,
  tilt,
  camY,
  tone,
}: {
  label: string;
  tilt: number;
  camY: number;
  tone: string;
}) => (
  <g>
    <text x="0" y="-6" fontSize="9" fill="#96a0b8" fontFamily="Poppins, sans-serif" fontWeight="700">
      {label}
    </text>
    <rect x="0" y="0" width="94" height="76" rx="3" fill={tone} stroke="#8b93ad" strokeWidth="1" opacity="0.95" />
    <g transform={`translate(47 ${camY}) rotate(${tilt})`}>
      <Fig x={0} y={0} s={0.95} fill="#141824" />
    </g>
  </g>
);

export const CpAngles = () => (
  <svg viewBox="0 0 320 130" style={{ width: '100%', height: '100%', display: 'block' }}>
    <g transform="translate(8 22)">
      <AngleFrame label="low — powerful" tilt={0} camY={72} tone="#4d4470" />
    </g>
    <g transform="translate(113 22)">
      <AngleFrame label="eye level — neutral" tilt={0} camY={58} tone="#3f4763" />
    </g>
    <g transform="translate(218 22)">
      <AngleFrame label="high — vulnerable" tilt={0} camY={44} tone="#5a4b5e" />
    </g>
    <text x="160" y="122" fontSize="9" textAnchor="middle" fill="#96a0b8" fontFamily="Poppins, sans-serif" fontWeight="600">
      the camera's height is a statement about the character
    </text>
  </svg>
);

export const CpDutch = () => (
  <Frame caption="tilted horizon — unease, and the reason it works is that it is wrong">
    <g transform="rotate(-11 160 84)">
      <Hills y={120} fill="#4a3f63" opacity={0.8} />
      <rect x="-40" y="132" width="400" height="80" fill="#241f2e" />
      <Fig x={196} y={132} s={1.1} />
    </g>
  </Frame>
);

/* --- Balance and shape --- */

export const CpNegativeSpace = () => (
  <Frame caption="the empty side is doing as much work as the subject" tone="flat">
    <rect x="0" y="0" width={FW} height={FH} fill="#e6e1d6" />
    <Fig x={248} y={140} s={1.6} fill="#141824" />
    <rect x="16" y="16" width="180" height="130" fill="none" stroke={C.accent} strokeWidth="1.4" strokeDasharray="6 5" />
    <text x="106" y="86" fontSize="11" textAnchor="middle" fill={C.accent} fontFamily="Poppins, sans-serif" fontWeight="700">
      negative space
    </text>
  </Frame>
);

export const CpBalance = () => (
  <Frame caption="one big mass balanced by a small bright one" tone="flat">
    <rect x="0" y="0" width={FW} height={FH} fill="#dfd9cc" />
    <circle cx="96" cy="88" r="46" fill="#2a2536" />
    <circle cx="238" cy="70" r="13" fill="#e8663f" />
    <line x1="0" y1={FH - 1} x2={FW} y2={FH - 1} stroke="#8b93ad" strokeWidth="2" />
    <text x="96" y="152" fontSize="9" textAnchor="middle" fill="#5a5560" fontFamily="Poppins, sans-serif" fontWeight="700">
      large + quiet
    </text>
    <text x="238" y="152" fontSize="9" textAnchor="middle" fill="#a8402a" fontFamily="Poppins, sans-serif" fontWeight="700">
      small + loud
    </text>
  </Frame>
);

export const CpBigShape = () => (
  <svg viewBox="0 0 320 170" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect x="0" y="0" width="150" height="130" rx="4" fill="#f2efe6" stroke="#8b93ad" strokeWidth="1" />
    {[24, 52, 80, 108].map((x, i) => (
      <rect key={i} x={x} y={30 + (i % 2) * 8} width="18" height="60" rx="3" fill="#8a8496" />
    ))}
    <text x="75" y="150" fontSize="9.5" textAnchor="middle" fill={C.red} fontFamily="Poppins, sans-serif" fontWeight="700">
      scattered — no shape
    </text>
    <rect x="170" y="0" width="150" height="130" rx="4" fill="#f2efe6" stroke="#8b93ad" strokeWidth="1" />
    <path d="M186 96 C196 46 230 26 258 38 C288 50 296 84 292 96 Z" fill="#2a2536" />
    <circle cx="240" cy="52" r="9" fill="#e8663f" />
    <text x="245" y="150" fontSize="9.5" textAnchor="middle" fill={C.green} fontFamily="Poppins, sans-serif" fontWeight="700">
      one big read
    </text>
    <Tag x={160} y={166} color="#96a0b8" size={9}>group small things into one silhouette</Tag>
  </svg>
);
