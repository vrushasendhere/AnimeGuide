import { C } from './kit';
import { Frame, Fig, Hills, Ground } from './frame';

/* ------------------------------------------------------------------
   Colour & Light. The through-line of this track is that colour is
   three independent dials, and that value is the one that carries the
   image. Every demo isolates one dial.
   ------------------------------------------------------------------ */

const ramp = (n: number, f: (t: number) => string) =>
  Array.from({ length: n }, (_, i) => f(i / (n - 1)));

/** Hue, saturation and value as three separate sliders. */
export const ClDials = () => {
  const rows = [
    { label: 'HUE', colors: ramp(12, (t) => `hsl(${t * 330}, 72%, 55%)`), note: 'which colour it is' },
    { label: 'SATURATION', colors: ramp(12, (t) => `hsl(212, ${t * 88}%, 55%)`), note: 'how much colour' },
    { label: 'VALUE', colors: ramp(12, (t) => `hsl(212, 45%, ${8 + t * 82}%)`), note: 'how light or dark' },
  ];
  return (
    <svg viewBox="0 0 320 175" style={{ width: '100%', height: '100%', display: 'block' }}>
      {rows.map((r, ri) => (
        <g key={r.label} transform={`translate(0 ${ri * 56})`}>
          <text x="14" y="22" fontSize="9" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700" letterSpacing="0.08em">
            {r.label}
          </text>
          <text x="306" y="22" fontSize="8.5" textAnchor="end" fill={C.light} fontFamily="Poppins, sans-serif" fontWeight="600">
            {r.note}
          </text>
          {r.colors.map((c, i) => (
            <rect key={i} x={14 + i * 24.4} y="28" width="23" height="24" rx="2" fill={c} />
          ))}
        </g>
      ))}
    </svg>
  );
};

/** The same image in colour and in grey — if the grey fails, the colour was never the problem. */
export const ClValueFirst = () => (
  <Frame>
    <Hills y={104} fill="#7d6f96" opacity={0.6} />
    <Hills y={124} fill="#8a5f74" opacity={0.9} />
    <Ground y={136} fill="#3a2536" />
    <circle cx="62" cy="40" r="20" fill="#ffd98a" />
    <Fig x={224} y={136} s={1.15} fill="#1d1420" />
    <g className="cl-greyflip">
      <Hills y={104} fill="#8d8d8d" opacity={1} />
      <Hills y={124} fill="#6e6e6e" opacity={1} />
      <Ground y={136} fill="#333333" />
      <circle cx="62" cy="40" r="20" fill="#e2e2e2" />
      <Fig x={224} y={136} s={1.15} fill="#141414" />
    </g>
  </Frame>
);

/** The wheel, with the three harmonies that actually get used. */
const Wheel = ({ cx, cy, r, marks }: { cx: number; cy: number; r: number; marks: number[] }) => (
  <g>
    {Array.from({ length: 24 }, (_, i) => {
      const a0 = (i / 24) * Math.PI * 2 - Math.PI / 2;
      const a1 = ((i + 1) / 24) * Math.PI * 2 - Math.PI / 2;
      const inner = r * 0.56;
      return (
        <path
          key={i}
          d={`M${cx + Math.cos(a0) * inner} ${cy + Math.sin(a0) * inner}
              L${cx + Math.cos(a0) * r} ${cy + Math.sin(a0) * r}
              A${r} ${r} 0 0 1 ${cx + Math.cos(a1) * r} ${cy + Math.sin(a1) * r}
              L${cx + Math.cos(a1) * inner} ${cy + Math.sin(a1) * inner}
              A${inner} ${inner} 0 0 0 ${cx + Math.cos(a0) * inner} ${cy + Math.sin(a0) * inner} Z`}
          fill={`hsl(${(i / 24) * 360}, 74%, 56%)`}
        />
      );
    })}
    {marks.map((deg, i) => {
      const a = (deg / 360) * Math.PI * 2 - Math.PI / 2;
      return (
        <circle
          key={i}
          cx={cx + Math.cos(a) * r * 0.78}
          cy={cy + Math.sin(a) * r * 0.78}
          r="6"
          fill="none"
          stroke="#0b0d14"
          strokeWidth="2.5"
        />
      );
    })}
  </g>
);

export const ClComplementary = () => (
  <svg viewBox="0 0 200 175" style={{ width: '100%', height: '100%', display: 'block' }}>
    <Wheel cx={100} cy={78} r={62} marks={[15, 195]} />
    <text x="100" y="158" fontSize="10" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700">
      complementary — maximum contrast
    </text>
  </svg>
);

export const ClAnalogous = () => (
  <svg viewBox="0 0 200 175" style={{ width: '100%', height: '100%', display: 'block' }}>
    <Wheel cx={100} cy={78} r={62} marks={[180, 210, 240]} />
    <text x="100" y="158" fontSize="10" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700">
      analogous — calm and unified
    </text>
  </svg>
);

export const ClTriadic = () => (
  <svg viewBox="0 0 200 175" style={{ width: '100%', height: '100%', display: 'block' }}>
    <Wheel cx={100} cy={78} r={62} marks={[0, 120, 240]} />
    <text x="100" y="158" fontSize="10" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700">
      triadic — vivid but balanced
    </text>
  </svg>
);

/** A working palette has roles, not just five colours you liked. */
export const ClPaletteRoles = () => {
  const swatches = [
    { c: '#f7dcc6', role: 'light / skin' },
    { c: '#e0a48f', role: 'mid' },
    { c: '#8a5f74', role: 'shadow' },
    { c: '#2f2340', role: 'darkest' },
    { c: '#ffd166', role: 'accent' },
  ];
  return (
    <svg viewBox="0 0 320 150" style={{ width: '100%', height: '100%', display: 'block' }}>
      {swatches.map((s, i) => (
        <g key={s.role}>
          <rect
            x={14 + i * 60}
            y="20"
            width="52"
            height="66"
            rx="4"
            fill={s.c}
            className="pop"
            style={{ animationDelay: `${i * 0.1}s`, transformBox: 'fill-box', transformOrigin: 'center' }}
          />
          <text x={40 + i * 60} y="102" fontSize="8.5" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="600">
            {s.role}
          </text>
        </g>
      ))}
    </svg>
  );
};

/** Local colour is what the object is. Light colour is what is landing on it. */
export const ClLightVsLocal = () => {
  const lights = [
    { tint: '#ffd08a', label: 'warm sun', op: 0.55 },
    { tint: '#8fb6ff', label: 'cold moon', op: 0.55 },
    { tint: '#ff7a9c', label: 'sunset', op: 0.5 },
  ];
  return (
    <svg viewBox="0 0 320 160" style={{ width: '100%', height: '100%', display: 'block' }}>
      {lights.map((l, i) => (
        <g key={l.label} transform={`translate(${18 + i * 100} 14)`}>
          <rect x="0" y="0" width="84" height="84" rx="6" fill="#c85a4a" />
          <rect x="0" y="0" width="84" height="84" rx="6" fill={l.tint} opacity={l.op} />
          <path d="M84 0 L84 84 L34 84 C64 64 74 32 84 0 Z" fill="#5a2740" opacity="0.55" />
          <text x="42" y="102" fontSize="9" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700">
            {l.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

/** The five zones on any lit form. This is the whole of shading. */
export const ClFormLight = () => (
  <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <radialGradient id="cl-sphere" cx="34%" cy="28%">
        <stop offset="0%" stopColor="#fff2dd" />
        <stop offset="42%" stopColor="#e8a878" />
        <stop offset="78%" stopColor="#8a4a52" />
        <stop offset="92%" stopColor="#6b3348" />
        <stop offset="100%" stopColor="#9a5560" />
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="320" height="180" fill="#efe7dc" />
    <ellipse cx="176" cy="150" rx="76" ry="15" fill="#b9a894" />
    <circle cx="150" cy="88" r="58" fill="url(#cl-sphere)" />
    {[
      { x: 128, y: 56, t: 'highlight', tx: 44, ty: -14 },
      { x: 138, y: 82, t: 'light', tx: 40, ty: -2 },
      { x: 186, y: 108, t: 'core shadow', tx: 34, ty: 10 },
      { x: 168, y: 134, t: 'reflected', tx: 40, ty: 20 },
      { x: 236, y: 152, t: 'cast shadow', tx: 20, ty: 12 },
    ].map((m, i) => (
      <g key={m.t} className="fade" style={{ animationDelay: `${0.4 + i * 0.22}s` }}>
        <circle cx={m.x} cy={m.y} r="3" fill="#2b2b33" />
        <line x1={m.x} y1={m.y} x2={m.x + m.tx} y2={m.y + m.ty} stroke="#2b2b33" strokeWidth="1" />
        <text
          x={m.x + m.tx + 4}
          y={m.y + m.ty + 3}
          fontSize="9"
          fill="#2b2b33"
          fontFamily="Poppins, sans-serif"
          fontWeight="700"
        >
          {m.t}
        </text>
      </g>
    ))}
  </svg>
);

/** Same scene, four times of day. Only the palette changed. */
export const ClTimeOfDay = () => {
  const times = [
    { label: 'morning', sky: ['#bfe3f5', '#f6dcc0'], ground: '#7a8a6e', fig: '#3a4038' },
    { label: 'noon', sky: ['#7dc4ef', '#cfe9f7'], ground: '#6d8a55', fig: '#2e3a2a' },
    { label: 'sunset', sky: ['#4b3a6b', '#f09b6a'], ground: '#4a3348', fig: '#1d1420' },
    { label: 'night', sky: ['#0f1836', '#283a63'], ground: '#141d33', fig: '#070b16' },
  ];
  return (
    <svg viewBox="0 0 320 170" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        {times.map((t, i) => (
          <linearGradient key={i} id={`tod${i}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={t.sky[0]} />
            <stop offset="100%" stopColor={t.sky[1]} />
          </linearGradient>
        ))}
      </defs>
      {times.map((t, i) => (
        <g key={t.label} transform={`translate(${10 + i * 78} 14)`}>
          <rect x="0" y="0" width="70" height="86" rx="3" fill={`url(#tod${i})`} />
          <path d="M0 60 C16 50 30 58 44 54 C56 51 64 58 70 56 L70 86 L0 86 Z" fill={t.ground} />
          <g transform="translate(46 78) scale(0.62)">
            <circle cx="0" cy="-30" r="6.5" fill={t.fig} />
            <path d="M-6 -23 L6 -23 L8 2 L-8 2 Z" fill={t.fig} />
          </g>
          <text x="35" y="102" fontSize="9" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700">
            {t.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

/** Saturation is a focal tool, not a quality setting. */
export const ClSaturationFocal = () => (
  <Frame>
    <Hills y={106} fill="#6a6478" opacity={0.7} />
    <Hills y={126} fill="#514c5e" />
    <Ground y={138} fill="#37333f" />
    {[46, 96, 250, 292].map((x) => (
      <Fig key={x} x={x} y={138} s={0.9} fill="#3f3a49" />
    ))}
    <circle cx="176" cy="108" r="34" fill="#ff5d3a" opacity="0.16" />
    <Fig x={176} y={138} s={1.15} fill="#ff5d3a" />
  </Frame>
);

/** Grey shadows are the single most common colour mistake. */
export const ClShadowHue = () => (
  <svg viewBox="0 0 320 150" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect x="20" y="20" width="120" height="40" rx="4" fill="#f7d9c4" />
    <rect x="20" y="60" width="120" height="40" rx="4" fill="#bdb1ab" />
    <text x="80" y="120" fontSize="9.5" textAnchor="middle" fill={C.red} fontFamily="Poppins, sans-serif" fontWeight="700">
      value only — dead
    </text>
    <rect x="180" y="20" width="120" height="40" rx="4" fill="#f7d9c4" />
    <rect x="180" y="60" width="120" height="40" rx="4" fill="#b3708f" />
    <text x="240" y="120" fontSize="9.5" textAnchor="middle" fill={C.green} fontFamily="Poppins, sans-serif" fontWeight="700">
      value + hue + saturation
    </text>
    <text x="160" y="142" fontSize="9" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="600">
      darken, rotate the hue toward the ambient light, keep the saturation up
    </text>
  </svg>
);
