import { useId, type ReactNode } from 'react';

/**
 * Shared 16:9 stage for the Composition and Effects tracks.
 *
 * Gradient and clip ids are namespaced per instance with useId: SVG ids are
 * document-global, so two demos on the same lesson page would otherwise both
 * resolve to whichever <defs> mounted first.
 */

export const FW = 320;
export const FH = 168;
export const FRAME_VB = '0 0 320 190';

export function Frame({
  children,
  caption,
  tone = 'dusk',
  captionColor = '#96a0b8',
}: {
  children: ReactNode;
  caption?: string;
  tone?: 'dusk' | 'flat' | 'none';
  captionColor?: string;
}) {
  const uid = useId().replace(/:/g, '');
  const sky = `sky-${uid}`;
  const clip = `clip-${uid}`;

  return (
    <svg viewBox={FRAME_VB} style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          {tone === 'flat' ? (
            <>
              <stop offset="0%" stopColor="#39415e" />
              <stop offset="100%" stopColor="#59617f" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#2c3358" />
              <stop offset="60%" stopColor="#6b4a6b" />
              <stop offset="100%" stopColor="#c98065" />
            </>
          )}
        </linearGradient>
        <clipPath id={clip}>
          <rect x="0" y="0" width={FW} height={FH} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        {tone !== 'none' && <rect x="0" y="0" width={FW} height={FH} fill={`url(#${sky})`} />}
        {children}
      </g>
      <rect
        x="0.75"
        y="0.75"
        width={FW - 1.5}
        height={FH - 1.5}
        fill="none"
        stroke="#8b93ad"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {caption && (
        <text
          x={FW / 2}
          y={183}
          fontSize="10"
          textAnchor="middle"
          fill={captionColor}
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
        >
          {caption}
        </text>
      )}
    </svg>
  );
}

/** Standing figure silhouette, the recurring subject across both tracks. */
export const Fig = ({
  x,
  y,
  s = 1,
  fill = '#141824',
  opacity = 1,
}: {
  x: number;
  y: number;
  s?: number;
  fill?: string;
  opacity?: number;
}) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} fill={fill} opacity={opacity}>
    <circle cx="0" cy="-30" r="6.5" />
    <path d="M-6 -23 L6 -23 L8 2 L-8 2 Z" />
    <rect x="-6" y="2" width="4.5" height="20" rx="2" />
    <rect x="1.5" y="2" width="4.5" height="20" rx="2" />
  </g>
);

export const Hills = ({ y, fill, opacity = 1 }: { y: number; fill: string; opacity?: number }) => (
  <path
    d={`M-10 ${y} C40 ${y - 22} 80 ${y - 6} 130 ${y - 16} C180 ${y - 26} 230 ${y - 4} 280 ${y - 14} L330 ${y - 8} L330 ${FH + 10} L-10 ${FH + 10} Z`}
    fill={fill}
    opacity={opacity}
  />
);

export const Ground = ({ y = 132, fill = '#241f2e' }: { y?: number; fill?: string }) => (
  <rect x="-10" y={y} width="340" height="60" fill={fill} />
);
