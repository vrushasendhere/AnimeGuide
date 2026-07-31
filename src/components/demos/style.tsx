import { C, Paper, Stage, Tag, strokeDemo } from './kit';

/* ------------------------------------------------------------------
   Track 3 — cel shading and stylistic choices.
   All the shading demos reuse one head so the only thing changing
   between steps is the lighting decision being taught.
   ------------------------------------------------------------------ */

const SKIN = '#f8dcc6';
const SKIN_SH = '#e3ac9f';
const SKIN_SH2 = '#c98d94';
const HAIR = '#5f6fbe';
const HAIR_SH = '#3c4788';
const HAIR_HI = '#96a4e6';
const RIM = '#ffd9a0';
const LINE = '#33303c';

const FACE =
  'M120 36 C158 36 182 62 182 92 C182 122 152 158 120 162 C88 158 58 122 58 92 C58 62 82 36 120 36 Z';
const HAIR_SHAPE =
  'M58 94 C48 44 84 18 120 20 C158 18 192 44 182 94 C176 66 156 52 120 54 C92 52 68 66 58 94 Z';
/** Terminator running down the right side — light is up and to the left. */
const FACE_SHADOW =
  'M182 92 C176 66 156 52 120 54 C142 62 158 78 159 102 C161 128 148 150 128 160 C156 152 182 122 182 92 Z';
/** Contact shadow the hair casts onto the forehead. */
const HAIR_CAST =
  'M60 90 C70 64 92 52 120 54 C150 52 174 66 182 90 C170 74 148 66 120 68 C94 66 72 74 60 90 Z';
const HAIR_BAND =
  'M74 44 C94 26 146 26 168 46 C146 38 96 38 74 44 Z';
const RIM_EDGE =
  'M182 92 C182 120 160 150 130 161 C158 146 175 120 175 92 Z';

const Eyes = () => (
  <g>
    <ellipse cx="98" cy="104" rx="11" ry="13" fill="#2c3352" />
    <ellipse cx="142" cy="104" rx="11" ry="13" fill="#2c3352" />
    <circle cx="94" cy="99" r="4" fill="#fff" />
    <circle cx="138" cy="99" r="4" fill="#fff" />
    <path d="M86 90 C92 84 106 84 111 89" stroke={LINE} strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <path d="M130 89 C136 84 149 84 155 90" stroke={LINE} strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <path d="M112 130 Q120 136 128 130" stroke={LINE} strokeWidth="2" fill="none" strokeLinecap="round" />
  </g>
);

/** Shared head. Each flag turns on exactly one shading decision. */
function Head({
  shadow = false,
  second = false,
  hairHi = false,
  rim = false,
  soft = false,
  animate = false,
}: {
  shadow?: boolean;
  second?: boolean;
  hairHi?: boolean;
  rim?: boolean;
  soft?: boolean;
  animate?: boolean;
}) {
  return (
    <>
      <defs>
        <linearGradient id="softgrad" x1="0.1" y1="0" x2="1" y2="0.6">
          <stop offset="35%" stopColor={SKIN} />
          <stop offset="100%" stopColor={SKIN_SH} />
        </linearGradient>
        <clipPath id="faceclip">
          <path d={FACE} />
        </clipPath>
      </defs>

      <path d={FACE} fill={soft ? 'url(#softgrad)' : SKIN} />

      <g clipPath="url(#faceclip)">
        {shadow && !soft && (
          <g className={animate ? 'cel-shadow' : undefined}>
            <path d={FACE_SHADOW} fill={SKIN_SH} />
            <path d={HAIR_CAST} fill={SKIN_SH} />
          </g>
        )}
        {second && (
          <g className={animate ? 'cel-light' : undefined}>
            <path d="M182 92 C178 74 168 62 152 56 C164 70 168 84 168 100 C168 126 154 148 136 158 C162 148 182 120 182 92 Z" fill={SKIN_SH2} />
          </g>
        )}
      </g>

      <path d={HAIR_SHAPE} fill={HAIR} />
      {shadow && (
        <path
          d="M58 94 C48 44 84 18 120 20 C130 20 140 22 149 26 C112 30 82 52 76 96 C70 78 64 84 58 94 Z"
          fill={HAIR_SH}
          className={animate ? 'cel-shadow' : undefined}
          opacity="0.9"
          transform="translate(48 0)"
        />
      )}
      {hairHi && (
        <path d={HAIR_BAND} fill={HAIR_HI} className={animate ? 'cel-light' : undefined} />
      )}

      <Eyes />

      <path d={FACE} fill="none" stroke={LINE} strokeWidth="2.6" />
      <path d={HAIR_SHAPE} fill="none" stroke={LINE} strokeWidth="2.6" />

      {rim && (
        <path d={RIM_EDGE} fill={RIM} className={animate ? 'cel-rim' : undefined} opacity="0.95" />
      )}
    </>
  );
}

const HeadPaper = (props: Parameters<typeof Head>[0]) => (
  <Paper vb="0 0 240 180">
    <Head {...props} />
  </Paper>
);

export const StFlat = () => (
  <>
    <HeadPaper />
  </>
);

export const StShadow = () => <HeadPaper shadow />;
export const StSecondShadow = () => <HeadPaper shadow second />;
export const StHairLight = () => <HeadPaper shadow second hairHi />;
export const StRim = () => <HeadPaper shadow second hairHi rim />;

/** The whole cel build looping, so the order of operations is obvious. */
export const StCelBuild = () => (
  <Paper vb="0 0 240 190">
    <Head shadow second hairHi rim animate />
    <Tag x={120} y={184} color={C.mid} size={9}>flat → shadow → light → rim</Tag>
  </Paper>
);

export const StSoft = () => (
  <Paper vb="0 0 240 180">
    <Head soft />
  </Paper>
);

/** Shadows shift hue — they are not the base colour with the brightness pulled down. */
export const StHueShift = () => (
  <Paper vb="0 0 260 160">
    <rect x="24" y="28" width="90" height="44" rx="6" fill={SKIN} />
    <rect x="24" y="72" width="90" height="44" rx="6" fill="#c9b3a1" />
    <text x="69" y="132" fontSize="9" textAnchor="middle" fill={C.red} fontFamily="Poppins, sans-serif" fontWeight="700">
      just darker — muddy
    </text>
    <rect x="146" y="28" width="90" height="44" rx="6" fill={SKIN} />
    <rect x="146" y="72" width="90" height="44" rx="6" fill={SKIN_SH} />
    <text x="191" y="132" fontSize="9" textAnchor="middle" fill={C.green} fontFamily="Poppins, sans-serif" fontWeight="700">
      darker + warmer hue
    </text>
    <text x="130" y="152" fontSize="8.5" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="600">
      rotate the hue as you darken
    </text>
  </Paper>
);

/** Cel shading is a hard edge. That edge is the whole style. */
export const StEdgeCompare = () => (
  <Paper vb="0 0 260 150">
    <defs>
      <linearGradient id="edgesoft" x1="0" y1="0" x2="1" y2="0">
        <stop offset="10%" stopColor={SKIN} />
        <stop offset="90%" stopColor={SKIN_SH2} />
      </linearGradient>
    </defs>
    <circle cx="70" cy="66" r="42" fill="url(#edgesoft)" stroke={LINE} strokeWidth="2" />
    <text x="70" y="128" fontSize="9.5" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700">
      airbrush — not anime
    </text>
    <circle cx="190" cy="66" r="42" fill={SKIN} stroke={LINE} strokeWidth="2" />
    <path d="M190 24 A42 42 0 0 1 190 108 C214 96 220 44 190 24 Z" fill={SKIN_SH2} />
    <circle cx="190" cy="66" r="42" fill="none" stroke={LINE} strokeWidth="2" />
    <text x="190" y="128" fontSize="9.5" textAnchor="middle" fill={C.accent} fontFamily="Poppins, sans-serif" fontWeight="700">
      one hard edge — anime
    </text>
  </Paper>
);

/** Line weight: thick where forms turn away or sit in shadow. */
export const StLineWeight = () => (
  <Paper vb="0 0 260 150">
    <ellipse cx="70" cy="66" rx="34" ry="42" fill="none" stroke={LINE} strokeWidth="2" />
    <path d="M52 56 Q70 68 88 56" stroke={LINE} strokeWidth="2" fill="none" />
    <text x="70" y="126" fontSize="9.5" textAnchor="middle" fill={C.red} fontFamily="Poppins, sans-serif" fontWeight="700">
      uniform — flat
    </text>
    <path d="M190 24 C214 24 224 44 224 66 C224 92 210 108 190 108" stroke={LINE} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M190 108 C168 108 156 92 156 66 C156 44 168 24 190 24" stroke={LINE} strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M172 56 Q190 68 208 56" stroke={LINE} strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <text x="190" y="126" fontSize="9.5" textAnchor="middle" fill={C.green} fontFamily="Poppins, sans-serif" fontWeight="700">
      weighted — solid
    </text>
  </Paper>
);

/** Style is a dial, not a binary. Same construction, three settings. */
export const StStyleDial = strokeDemo({
  vb: '0 0 300 160',
  layers: [
    { circle: [56, 62, 34], stroke: C.ink, w: 2.4, delay: 0, dur: 0.5 },
    { d: 'M26 76 C30 104 44 122 56 126 C68 122 82 104 86 76', stroke: C.ink, w: 2.4, delay: 0.3, dur: 0.5 },
    { ellipse: [44, 82, 9, 11], stroke: 'none', fill: C.ink, mode: 'pop', delay: 0.7 },
    { ellipse: [68, 82, 9, 11], stroke: 'none', fill: C.ink, mode: 'pop', delay: 0.75 },
    { text: { x: 56, y: 148, t: 'moe · huge eyes', size: 9 }, fill: C.accent, delay: 1 },

    { circle: [150, 60, 32], stroke: C.ink, w: 2.4, delay: 0.5, dur: 0.5 },
    { d: 'M122 74 C126 102 140 122 150 128 C160 122 174 102 178 74', stroke: C.ink, w: 2.4, delay: 0.8, dur: 0.5 },
    { d: 'M134 82 L146 82 M154 82 L166 82', stroke: C.ink, w: 4, delay: 1.2, dur: 0.3 },
    { text: { x: 150, y: 148, t: 'shonen · sharp', size: 9 }, fill: C.cyan, delay: 1.4 },

    { circle: [244, 58, 30], stroke: C.ink, w: 2.4, delay: 1, dur: 0.5 },
    { d: 'M218 72 C222 98 234 120 244 128 C254 120 266 98 270 72', stroke: C.ink, w: 2.4, delay: 1.3, dur: 0.5 },
    { d: 'M230 80 L240 80 M248 80 L258 80', stroke: C.ink, w: 2.2, delay: 1.7, dur: 0.3 },
    { text: { x: 244, y: 148, t: 'seinen · realistic', size: 9 }, fill: C.mid, delay: 1.9 },
  ],
});

/** Anime lighting is theatrical: pick one key, let everything else fall dark. */
export const StKeyLight = () => (
  <Stage vb="0 0 300 190">
    <circle cx="52" cy="46" r="16" fill={RIM} opacity="0.9" style={{ filter: 'drop-shadow(0 0 14px rgba(255,217,160,0.8))' }} />
    {[0, 1, 2, 3, 4].map((i) => (
      <line
        key={i}
        x1="60"
        y1="56"
        x2={104 + i * 8}
        y2={92 + i * 16}
        stroke={RIM}
        strokeWidth="1.2"
        opacity="0.35"
        className="blink"
        style={{ animationDelay: `${i * 0.12}s` }}
      />
    ))}
    <g transform="translate(96 34) scale(0.78)">
      <path d={FACE} fill={SKIN} />
      <path d={FACE_SHADOW} fill={SKIN_SH} />
      <path d={HAIR_SHAPE} fill={HAIR} />
      <path d={FACE} fill="none" stroke={LINE} strokeWidth="2.6" />
      <path d={HAIR_SHAPE} fill="none" stroke={LINE} strokeWidth="2.6" />
      <path d={RIM_EDGE} fill={RIM} />
    </g>
    <Tag x={150} y={182} color={RIM} size={10}>one key light decides every shadow shape</Tag>
  </Stage>
);
