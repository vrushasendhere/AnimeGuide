import type { CSSProperties, ReactNode } from 'react';

/** Palette tuned for graphite-on-cream so the demos read like real sketches. */
export const C = {
  ink: '#2b2b33',
  mid: '#7d7768',
  light: '#c3bcac',
  faint: '#e2ddd1',
  accent: '#ff5d8f',
  cyan: '#1f97ad',
  red: '#dc4b4b',
  green: '#2f9e5e',
  gold: '#d99a1f',
  blue: '#3f6fd8',
  paper: '#f7f4ee',
  night: '#141824',
};

export function Paper({
  children,
  vb = '0 0 240 160',
  style,
}: {
  children: ReactNode;
  vb?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox={vb} style={{ width: '100%', height: '100%', display: 'block', ...style }}>
      {children}
    </svg>
  );
}

/** Dark stage used by the motion demos where a glow reads better than paper. */
export function Stage({
  children,
  vb = '0 0 320 200',
  style,
}: {
  children: ReactNode;
  vb?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox={vb} style={{ width: '100%', height: '100%', display: 'block', ...style }}>
      <defs>
        <linearGradient id="stagebg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b2030" />
          <stop offset="100%" stopColor="#0f1220" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" rx="10" fill="url(#stagebg)" />
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------
   Declarative stroke demos.

   Most "step" figures are just a few pen strokes appearing in order.
   Describing them as data keeps ~40 of the demos readable instead of
   forty near-identical components.
   ------------------------------------------------------------------ */

export interface Layer {
  /** SVG path data. Rendered with a pen-reveal animation by default. */
  d?: string;
  /** Shorthand shapes, for when a path would be noise. */
  circle?: [number, number, number];
  ellipse?: [number, number, number, number];
  rect?: [number, number, number, number, number?];
  line?: [number, number, number, number];
  text?: { x: number; y: number; t: string; size?: number; anchor?: 'start' | 'middle' | 'end' };
  stroke?: string;
  fill?: string;
  w?: number;
  dash?: string;
  /** Seconds before this layer starts. */
  delay?: number;
  /** Seconds the reveal takes. */
  dur?: number;
  mode?: 'draw' | 'fade' | 'pop' | 'none';
  opacity?: number;
  className?: string;
  transform?: string;
}

export interface StrokeSpec {
  vb?: string;
  bg?: 'paper' | 'dark' | 'none';
  layers: Layer[];
}

function renderLayer(l: Layer, i: number) {
  const mode = l.mode ?? (l.d || l.line ? 'draw' : 'fade');
  const dur = l.dur ?? (mode === 'draw' ? 0.9 : 0.45);
  const delay = l.delay ?? 0;

  const cls =
    l.className ?? (mode === 'draw' ? 'dw' : mode === 'pop' ? 'pop' : mode === 'fade' ? 'fade' : '');

  const style: CSSProperties = {
    animationDelay: `${delay}s`,
    animationDuration: `${dur}s`,
  };

  const common = {
    stroke: l.stroke ?? C.ink,
    strokeWidth: l.w ?? 2,
    fill: l.fill ?? 'none',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeDasharray: mode === 'draw' ? undefined : l.dash,
    opacity: l.opacity,
    className: cls,
    style,
    transform: l.transform,
  };

  // pathLength normalises the dash reveal regardless of real path length.
  const drawProps = mode === 'draw' ? { pathLength: 100 } : {};

  if (l.d) return <path key={i} d={l.d} {...common} {...drawProps} />;
  if (l.line) {
    const [x1, y1, x2, y2] = l.line;
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} {...common} {...drawProps} />;
  }
  if (l.circle) {
    const [cx, cy, r] = l.circle;
    return <circle key={i} cx={cx} cy={cy} r={r} {...common} {...drawProps} />;
  }
  if (l.ellipse) {
    const [cx, cy, rx, ry] = l.ellipse;
    return <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} {...common} {...drawProps} />;
  }
  if (l.rect) {
    const [x, y, w, h, rx] = l.rect;
    return <rect key={i} x={x} y={y} width={w} height={h} rx={rx ?? 0} {...common} {...drawProps} />;
  }
  if (l.text) {
    const { x, y, t, size = 11, anchor = 'middle' } = l.text;
    return (
      <text
        key={i}
        x={x}
        y={y}
        fontSize={size}
        textAnchor={anchor}
        fill={l.fill ?? l.stroke ?? C.mid}
        stroke="none"
        fontFamily="Poppins, Segoe UI, sans-serif"
        fontWeight={600}
        opacity={l.opacity}
        className={cls}
        style={style}
      >
        {t}
      </text>
    );
  }
  return null;
}

/** Build a demo component from a declarative spec. */
export function strokeDemo(spec: StrokeSpec) {
  const Wrapper = spec.bg === 'dark' ? Stage : Paper;
  const Comp = () => (
    <Wrapper vb={spec.vb ?? '0 0 240 160'}>{spec.layers.map(renderLayer)}</Wrapper>
  );
  return Comp;
}

/** Dots + a caption, the recurring "target markers" motif. */
export function Dot({
  x,
  y,
  r = 4,
  fill = C.accent,
  delay = 0,
  className = 'pop',
}: {
  x: number;
  y: number;
  r?: number;
  fill?: string;
  delay?: number;
  className?: string;
}) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={fill}
      className={className}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

/** Small caption baked into the SVG, kept to a couple of words. */
export function Tag({
  x,
  y,
  children,
  color = C.mid,
  size = 10,
  delay = 0,
  anchor = 'middle',
}: {
  x: number;
  y: number;
  children: string;
  color?: string;
  size?: number;
  delay?: number;
  anchor?: 'start' | 'middle' | 'end';
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      textAnchor={anchor}
      fill={color}
      fontFamily="Poppins, Segoe UI, sans-serif"
      fontWeight={700}
      letterSpacing="0.04em"
      className="fade"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </text>
  );
}
