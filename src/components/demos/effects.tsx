import { FW, FH, Frame, Fig, Hills, Ground } from './frame';

/* ------------------------------------------------------------------
   Emotional effects — anime's visual punctuation.

   Each demo is the same base shot with one effect applied, so what you
   are comparing is purely the emotional shift the effect produces.
   ------------------------------------------------------------------ */

/** The neutral shot every effect below is applied to. */
const BaseShot = () => (
  <>
    <Hills y={122} fill="#4a3f63" opacity={0.75} />
    <Ground />
    <Fig x={196} y={132} s={1.15} />
  </>
);

export const FxNeutral = () => (
  <Frame>
    <BaseShot />
  </Frame>
);

/* --- White-out --- */

export const FxWhiteout = () => (
  <Frame caption="white-out: revelation, memory, being overwhelmed">
    <BaseShot />
    <g className="fx-whiteout">
      <rect x="-10" y="-10" width="340" height="190" fill="#ffffff" />
      <Fig x={196} y={132} s={1.15} fill="#e9e4f0" />
      <Fig x={196} y={132} s={1.15} fill="#b9b0cc" opacity={0.55} />
    </g>
  </Frame>
);

/* --- God rays --- */

export const FxGodRays = () => (
  <Frame caption="light rays: hope, nostalgia, something sacred">
    <BaseShot />
    <g className="fx-rays">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${52 + i * 16} -10 L${96 + i * 30} ${FH + 10} L${132 + i * 30} ${FH + 10} L${74 + i * 16} -10 Z`}
          fill="#ffeec4"
          opacity={0.22 + (i % 3) * 0.07}
        />
      ))}
    </g>
    <circle cx="70" cy="16" r="26" fill="#fff3d6" opacity="0.55" />
  </Frame>
);

/* --- Speed lines vs focus lines --- */

export const FxSpeedLines = () => (
  <Frame caption="parallel speed lines: motion, urgency, chase" tone="flat">
    <rect x="0" y="0" width={FW} height={FH} fill="#eae6dc" />
    {Array.from({ length: 16 }, (_, i) => (
      <rect
        key={i}
        x={40 + i * 18}
        y={8 + ((i * 37) % 150)}
        width={30 + ((i * 13) % 60)}
        height="2.4"
        fill="#1b1826"
        className="fx-streak"
        style={{ animationDelay: `${(i % 6) * 0.13}s` }}
      />
    ))}
    <Fig x={140} y={130} s={1.15} fill="#1b1826" />
  </Frame>
);

export const FxFocusLines = () => (
  <Frame caption="radial focus lines: shock, realisation, a hard cut inward" tone="flat">
    <rect x="0" y="0" width={FW} height={FH} fill="#eae6dc" />
    <g className="fx-focus">
      {Array.from({ length: 44 }, (_, i) => {
        const a = (i / 44) * Math.PI * 2;
        const inner = 46 + ((i * 7) % 16);
        return (
          <path
            key={i}
            d={`M${160 + Math.cos(a) * inner} ${84 + Math.sin(a) * inner}
                L${160 + Math.cos(a) * 260} ${84 + Math.sin(a) * 260}`}
            stroke="#1b1826"
            strokeWidth={1 + ((i * 3) % 5) * 0.5}
          />
        );
      })}
    </g>
    <circle cx="160" cy="84" r="30" fill="#eae6dc" />
    <Fig x={160} y={110} s={0.95} fill="#1b1826" />
  </Frame>
);

/* --- Impact frame --- */

export const FxImpactFrame = () => (
  <Frame caption="impact frame: 1–2 frames only. You feel it, you never see it">
    <BaseShot />
    <g className="fx-impact">
      <rect x="-10" y="-10" width="340" height="190" fill="#ffffff" />
      {Array.from({ length: 26 }, (_, i) => {
        const a = (i / 26) * Math.PI * 2;
        return (
          <path
            key={i}
            d={`M160 84 L${160 + Math.cos(a) * 240} ${84 + Math.sin(a) * 240}`}
            stroke="#0b0d14"
            strokeWidth={2 + ((i * 5) % 7)}
          />
        );
      })}
      <circle cx="160" cy="84" r="26" fill="#ffffff" />
    </g>
  </Frame>
);

/* --- Shoujo sparkle --- */

const Sparkle = ({ x, y, r, delay }: { x: number; y: number; r: number; delay: number }) => (
  <path
    d={`M${x} ${y - r} Q${x + r * 0.22} ${y - r * 0.22} ${x + r} ${y}
        Q${x + r * 0.22} ${y + r * 0.22} ${x} ${y + r}
        Q${x - r * 0.22} ${y + r * 0.22} ${x - r} ${y}
        Q${x - r * 0.22} ${y - r * 0.22} ${x} ${y - r} Z`}
    fill="#fff3d6"
    className="fx-twinkle"
    style={{ animationDelay: `${delay}s` }}
  />
);

export const FxSparkle = () => (
  <Frame caption="sparkles and bloom: affection, admiration, shoujo warmth">
    <rect x="0" y="0" width={FW} height={FH} fill="#f6dfe8" />
    <rect x="0" y="0" width={FW} height={FH} fill="#ffd9ea" opacity="0.6" />
    {Array.from({ length: 26 }, (_, i) => (
      <circle
        key={`d${i}`}
        cx={12 + ((i * 47) % 300)}
        cy={10 + ((i * 61) % 150)}
        r={1.6 + ((i * 3) % 3)}
        fill="#ffffff"
        opacity="0.7"
      />
    ))}
    {[
      [48, 40, 13],
      [268, 52, 10],
      [92, 118, 8],
      [232, 120, 12],
      [160, 26, 9],
      [30, 92, 7],
    ].map(([x, y, r], i) => (
      <Sparkle key={i} x={x} y={y} r={r} delay={i * 0.32} />
    ))}
    <Fig x={160} y={140} s={1.25} fill="#7a5a72" />
  </Frame>
);

/* --- Dread --- */

export const FxDread = () => (
  <Frame caption="vertical shadow bars: dread, guilt, the floor dropping out">
    <BaseShot />
    <g className="fx-dread">
      {Array.from({ length: 9 }, (_, i) => (
        <rect
          key={i}
          x={2 + i * 36}
          y="-4"
          width={10 + ((i * 5) % 12)}
          height={FH + 8}
          fill="#0b0d14"
          opacity={0.55 + (i % 3) * 0.12}
        />
      ))}
      <rect x="150" y="52" width="34" height="16" fill="#3c4a6b" opacity="0.85" />
    </g>
  </Frame>
);

/* --- Colour field --- */

export const FxRageField = () => (
  <Frame>
    <BaseShot />
    <g className="fx-wash">
      <rect x="-10" y="-10" width="340" height="190" fill="#c2182b" />
      <Fig x={196} y={132} s={1.15} fill="#3d0209" />
    </g>
  </Frame>
);

export const FxDespairField = () => (
  <Frame>
    <BaseShot />
    <g className="fx-wash">
      <rect x="-10" y="-10" width="340" height="190" fill="#1d3c78" />
      <Fig x={196} y={132} s={1.15} fill="#0a1730" />
    </g>
  </Frame>
);

/* --- Screentone --- */

export const FxScreentone = () => (
  <svg viewBox="0 0 320 150" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <pattern id="tone-fine" width="5" height="5" patternUnits="userSpaceOnUse">
        <circle cx="2.5" cy="2.5" r="1.1" fill="#1b1826" />
      </pattern>
      <pattern id="tone-mid" width="7" height="7" patternUnits="userSpaceOnUse">
        <circle cx="3.5" cy="3.5" r="2.1" fill="#1b1826" />
      </pattern>
      <pattern id="tone-coarse" width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="4.5" cy="4.5" r="3.4" fill="#1b1826" />
      </pattern>
    </defs>
    <rect x="0" y="0" width="320" height="150" fill="#f2efe6" />
    {[
      { x: 16, fill: 'url(#tone-fine)', label: '10%' },
      { x: 96, fill: 'url(#tone-mid)', label: '30%' },
      { x: 176, fill: 'url(#tone-coarse)', label: '60%' },
      { x: 256, fill: '#1b1826', label: 'solid' },
    ].map((t) => (
      <g key={t.x}>
        <rect x={t.x} y="18" width="60" height="72" fill={t.fill} stroke="#1b1826" strokeWidth="1.2" />
        <text x={t.x + 30} y="108" fontSize="10" textAnchor="middle" fill="#5a5560" fontFamily="Poppins, sans-serif" fontWeight="700">
          {t.label}
        </text>
      </g>
    ))}
  </svg>
);

/* --- Restraint --- */

export const FxOverloaded = () => (
  <Frame tone="flat">
    <rect x="0" y="0" width={FW} height={FH} fill="#eae6dc" />
    {Array.from({ length: 30 }, (_, i) => {
      const a = (i / 30) * Math.PI * 2;
      return (
        <path
          key={i}
          d={`M${160 + Math.cos(a) * 50} ${84 + Math.sin(a) * 50} L${160 + Math.cos(a) * 250} ${84 + Math.sin(a) * 250}`}
          stroke="#1b1826"
          strokeWidth="1.6"
        />
      );
    })}
    {Array.from({ length: 12 }, (_, i) => (
      <rect key={`s${i}`} x={12 + i * 26} y={12 + ((i * 41) % 140)} width="44" height="2.4" fill="#c2182b" />
    ))}
    {[
      [40, 34, 11],
      [280, 46, 9],
      [64, 132, 8],
      [252, 128, 10],
    ].map(([x, y, r], i) => (
      <Sparkle key={i} x={x} y={y} r={r} delay={i * 0.2} />
    ))}
    <rect x="-10" y="-10" width="340" height="190" fill="#c2182b" opacity="0.28" />
    <Fig x={160} y={112} s={0.95} fill="#1b1826" />
  </Frame>
);

export const FxRestrained = () => (
  <Frame>
    <BaseShot />
    <g className="fx-rays">
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M${64 + i * 22} -10 L${112 + i * 34} ${FH + 10} L${146 + i * 34} ${FH + 10} L${84 + i * 22} -10 Z`}
          fill="#ffeec4"
          opacity="0.24"
        />
      ))}
    </g>
  </Frame>
);
