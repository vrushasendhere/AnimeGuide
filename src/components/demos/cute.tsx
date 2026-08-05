import { useId } from 'react';
import { C, Paper, strokeDemo } from './kit';

/* ------------------------------------------------------------------
   Cute Characters & Depth.

   One chibi is drawn once and re-rendered with different rendering
   passes switched on, so every demo in the second half of the track is
   the SAME character — what changes is only the depth decision.
   ------------------------------------------------------------------ */

const SKIN = '#ffdcc4';
const SKIN_SH = '#e8ab9d';
const SKIN_OCC = '#c98494';
const HAIR = '#6b5bd6';
const HAIR_SH = '#4a3ca8';
const HAIR_HI = '#a99bf0';
const LINE = '#3a3145';
const RIM = '#ffe9b8';
const CLOTH = '#5fc9c4';
const CLOTH_SH = '#3d9b9c';

interface ChibiProps {
  /** Soft form shadow — the basic "it is round" pass. */
  form?: boolean;
  /** Ambient occlusion in the crevices. */
  occlusion?: boolean;
  /** Bounce light on the underside. */
  bounce?: boolean;
  /** Specular highlights. */
  highlight?: boolean;
  /** Rim light separating it from the background. */
  rim?: boolean;
  /** Warm subsurface glow at thin edges. */
  sss?: boolean;
  /** Hard cel edge instead of a soft gradient. */
  cel?: boolean;
}

/**
 * The shared chibi. Gradient ids are namespaced per instance because SVG
 * ids are document-global and several of these render on one page.
 */
export function Chibi(props: ChibiProps) {
  const { form, occlusion, bounce, highlight, rim, sss, cel } = props;
  const uid = useId().replace(/:/g, '');
  const g = (n: string) => `${n}-${uid}`;

  return (
    <>
      <defs>
        <radialGradient id={g('face')} cx="36%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#fff0e2" />
          <stop offset="52%" stopColor={SKIN} />
          <stop offset="100%" stopColor={SKIN_SH} />
        </radialGradient>
        <radialGradient id={g('hair')} cx="34%" cy="24%" r="80%">
          <stop offset="0%" stopColor={HAIR_HI} />
          <stop offset="55%" stopColor={HAIR} />
          <stop offset="100%" stopColor={HAIR_SH} />
        </radialGradient>
        <linearGradient id={g('body')} x1="0.2" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor={CLOTH} />
          <stop offset="100%" stopColor={CLOTH_SH} />
        </linearGradient>
        <radialGradient id={g('sss')} cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ff9d7a" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#ff9d7a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* contact shadow on the ground — the cheapest depth cue there is */}
      {(form || occlusion) && <ellipse cx="120" cy="185" rx="42" ry="7" fill="#2b2434" opacity="0.22" />}

      {/* --- body --- */}
      <path
        d="M96 140 C96 132 144 132 144 140 L148 174 C148 180 92 180 92 174 Z"
        fill={form && !cel ? `url(#${g('body')})` : CLOTH}
        stroke={LINE}
        strokeWidth="2.4"
      />
      {cel && <path d="M126 133 C142 134 146 140 146 146 L148 174 C148 178 134 179 128 179 C138 168 136 146 126 133 Z" fill={CLOTH_SH} />}
      {/* mitten hands */}
      <circle cx="88" cy="158" r="11" fill={form && !cel ? `url(#${g('face')})` : SKIN} stroke={LINE} strokeWidth="2.2" />
      <circle cx="152" cy="158" r="11" fill={form && !cel ? `url(#${g('face')})` : SKIN} stroke={LINE} strokeWidth="2.2" />
      {sss && <circle cx="152" cy="158" r="9" fill={`url(#${g('sss')})`} />}

      {/* --- head --- */}
      <circle cx="120" cy="88" r="50" fill={form && !cel ? `url(#${g('face')})` : SKIN} />
      {cel && <path d="M170 88 A50 50 0 0 1 132 136 C152 122 158 104 156 88 Z" fill={SKIN_SH} />}

      {/* occlusion: under the hairline and under the chin */}
      {occlusion && (
        <>
          <path d="M72 78 C80 52 100 40 120 40 C140 40 160 52 168 78 C152 62 136 56 120 56 C104 56 88 62 72 78 Z" fill={SKIN_OCC} opacity="0.5" />
          <path d="M96 136 C104 142 136 142 144 136 C136 146 104 146 96 136 Z" fill={SKIN_OCC} opacity="0.45" />
        </>
      )}

      {/* bounce light along the lower edge */}
      {bounce && (
        <path d="M78 106 C82 128 100 140 120 140 C140 140 158 128 162 106 C154 130 140 138 120 138 C100 138 86 130 78 106 Z" fill="#ffd0a8" opacity="0.4" />
      )}

      {sss && <ellipse cx="168" cy="92" rx="10" ry="16" fill={`url(#${g('sss')})`} />}

      {/* eyes — big, and low on the face. This is most of "cute". */}
      <ellipse cx="100" cy="100" rx="14" ry="17" fill="#2d2a3d" />
      <ellipse cx="140" cy="100" rx="14" ry="17" fill="#2d2a3d" />
      <circle cx="95" cy="93" r="5.5" fill="#fff" />
      <circle cx="135" cy="93" r="5.5" fill="#fff" />
      <circle cx="105" cy="107" r="2.6" fill="#fff" opacity="0.85" />
      <circle cx="145" cy="107" r="2.6" fill="#fff" opacity="0.85" />

      {/* blush */}
      <ellipse cx="82" cy="112" rx="9" ry="5" fill="#ff9db0" opacity="0.55" />
      <ellipse cx="158" cy="112" rx="9" ry="5" fill="#ff9db0" opacity="0.55" />

      {/* tiny nose + mouth, sitting low */}
      <path d="M116 118 Q120 122 124 118" stroke={LINE} strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* hair cap */}
      <path
        d="M70 84 C70 46 92 30 120 30 C148 30 170 46 170 84 C162 62 144 54 120 54 C96 54 78 62 70 84 Z"
        fill={form && !cel ? `url(#${g('hair')})` : HAIR}
        stroke={LINE}
        strokeWidth="2.4"
      />
      {cel && <path d="M120 30 C148 30 170 46 170 84 C162 62 144 54 120 54 C132 46 136 36 120 30 Z" fill={HAIR_SH} />}
      {highlight && (
        <path d="M84 62 C94 46 112 40 128 42 C110 46 96 54 88 68 Z" fill={HAIR_HI} opacity="0.9" />
      )}

      <circle cx="120" cy="88" r="50" fill="none" stroke={LINE} strokeWidth="2.6" />

      {/* rim light last, so it sits over everything */}
      {rim && (
        <>
          <path d="M170 84 C172 108 160 130 140 138 C158 126 166 106 164 84 Z" fill={RIM} />
          <path d="M148 140 L150 172 C150 176 144 177 142 176 L142 142 Z" fill={RIM} opacity="0.85" />
        </>
      )}
    </>
  );
}

/**
 * Bare figure, no baked caption: these render inside compare tiles and step
 * cards, which supply their own label. Repeating it inside the SVG printed
 * the same sentence twice.
 */
const ChibiBox = (p: ChibiProps) => (
  <Paper vb="0 0 240 192">
    <Chibi {...p} />
  </Paper>
);

/* --- Design half --- */

/** What actually triggers "cute": the baby schema, annotated. */
export const CdBabySchema = () => (
  <Paper vb="0 0 300 200">
    <g transform="translate(30 0) scale(0.86)">
      <Chibi form highlight />
    </g>
    {[
      { x: 133, y: 40, tx: 60, t: 'head ≈ 1/2 the body' },
      { x: 116, y: 90, tx: 78, t: 'eyes BELOW halfway' },
      { x: 155, y: 100, tx: 42, t: 'huge irises' },
      { x: 133, y: 118, tx: 62, t: 'tiny nose + mouth' },
      { x: 105, y: 152, tx: -60, t: 'short round limbs' },
    ].map((m, i) => (
      <g key={m.t} className="fade" style={{ animationDelay: `${0.3 + i * 0.22}s` }}>
        <circle cx={m.x} cy={m.y} r="2.6" fill={C.accent} />
        <line x1={m.x} y1={m.y} x2={m.x + m.tx} y2={m.y} stroke={C.accent} strokeWidth="1" />
        <text
          x={m.x + m.tx + (m.tx > 0 ? 4 : -4)}
          y={m.y + 3}
          fontSize="8.5"
          textAnchor={m.tx > 0 ? 'start' : 'end'}
          fill={C.ink}
          fontFamily="Poppins, sans-serif"
          fontWeight="700"
        >
          {m.t}
        </text>
      </g>
    ))}
  </Paper>
);

/** Head-count ladder from chibi to realistic. */
export const CdProportions = () => {
  const set = [
    { heads: 2, label: '2 heads', note: 'maximum cute' },
    { heads: 3, label: '3 heads', note: 'classic chibi' },
    { heads: 5, label: '5 heads', note: 'cartoon' },
    { heads: 7, label: '7 heads', note: 'realistic' },
  ];
  return (
    <svg viewBox="0 0 320 180" style={{ width: '100%', height: '100%', display: 'block' }}>
      {set.map((s, i) => {
        const total = 120;
        const headR = total / s.heads / 2;
        const x = 46 + i * 76;
        const top = 26;
        return (
          <g key={s.label}>
            {Array.from({ length: s.heads }, (_, k) => (
              <line
                key={k}
                x1={x - 30}
                y1={top + k * headR * 2}
                x2={x + 30}
                y2={top + k * headR * 2}
                stroke={C.faint}
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            ))}
            <circle cx={x} cy={top + headR} r={headR} fill={SKIN} stroke={LINE} strokeWidth="1.6" />
            <path
              d={`M${x - headR * 0.62} ${top + headR * 2.1} L${x + headR * 0.62} ${top + headR * 2.1} L${x + headR * 0.8} ${top + total} L${x - headR * 0.8} ${top + total} Z`}
              fill={CLOTH}
              stroke={LINE}
              strokeWidth="1.6"
            />
            <ellipse cx={x - headR * 0.36} cy={top + headR * 1.2} rx={headR * 0.2} ry={headR * 0.26} fill="#2d2a3d" />
            <ellipse cx={x + headR * 0.36} cy={top + headR * 1.2} rx={headR * 0.2} ry={headR * 0.26} fill="#2d2a3d" />
            <text x={x} y={162} fontSize="10" textAnchor="middle" fill={C.ink} fontFamily="Poppins, sans-serif" fontWeight="700">
              {s.label}
            </text>
            <text x={x} y={174} fontSize="8.5" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="600">
              {s.note}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

/** Shape language: the same character read three ways. */
export const CdShapeLanguage = () => {
  const kinds = [
    { label: 'round', note: 'friendly, soft, safe', fill: '#ffb3c7' },
    { label: 'square', note: 'sturdy, reliable, slow', fill: '#8fd0a0' },
    { label: 'triangle', note: 'sharp, tricky, dangerous', fill: '#ffb870' },
  ];
  return (
    <svg viewBox="0 0 300 180" style={{ width: '100%', height: '100%', display: 'block' }}>
      {kinds.map((k, i) => {
        const x = 56 + i * 96;
        return (
          <g key={k.label}>
            {i === 0 && <circle cx={x} cy="72" r="42" fill={k.fill} stroke={LINE} strokeWidth="2.4" />}
            {i === 1 && <rect x={x - 40} y="32" width="80" height="80" rx="8" fill={k.fill} stroke={LINE} strokeWidth="2.4" />}
            {i === 2 && <path d={`M${x} 26 L${x + 44} 112 L${x - 44} 112 Z`} fill={k.fill} stroke={LINE} strokeWidth="2.4" strokeLinejoin="round" />}
            <ellipse cx={x - 14} cy={i === 2 ? 86 : 74} rx="7" ry="9" fill="#2d2a3d" />
            <ellipse cx={x + 14} cy={i === 2 ? 86 : 74} rx="7" ry="9" fill="#2d2a3d" />
            <circle cx={x - 16.5} cy={(i === 2 ? 86 : 74) - 3} r="2.6" fill="#fff" />
            <circle cx={x + 11.5} cy={(i === 2 ? 86 : 74) - 3} r="2.6" fill="#fff" />
            <text x={x} y="140" fontSize="11" textAnchor="middle" fill={C.ink} fontFamily="Poppins, sans-serif" fontWeight="800">
              {k.label}
            </text>
            <text x={x} y="156" fontSize="8.5" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="600">
              {k.note}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

/** Simplification: cut detail, keep identity. */
export const CdSimplify = strokeDemo({
  vb: '0 0 300 140',
  layers: [
    // busy version
    { circle: [56, 66, 30], stroke: C.ink, w: 2.2, delay: 0.2, dur: 0.4 },
    ...Array.from({ length: 9 }, (_, i) => ({
      d: `M${34 + i * 5} 44 C${32 + i * 5} 34 ${40 + i * 5} 30 ${44 + i * 5} 40`,
      stroke: C.ink,
      w: 1.2,
      delay: 0.4 + i * 0.04,
      dur: 0.2,
    })),
    { ellipse: [46, 68, 5, 6], stroke: C.ink, w: 1.4, delay: 0.8, dur: 0.2 },
    { ellipse: [66, 68, 5, 6], stroke: C.ink, w: 1.4, delay: 0.85, dur: 0.2 },
    { text: { x: 56, y: 116, t: 'busy', size: 9 }, fill: C.red, delay: 1 },

    { circle: [150, 66, 30], stroke: C.ink, w: 2.4, delay: 1.1, dur: 0.4 },
    { d: 'M124 48 C130 32 170 32 176 48 C166 40 134 40 124 48 Z', stroke: C.ink, fill: 'rgba(58,49,69,0.85)', w: 2, delay: 1.3, dur: 0.4 },
    { ellipse: [140, 70, 6, 7.5], stroke: 'none', fill: C.ink, mode: 'pop', delay: 1.6 },
    { ellipse: [160, 70, 6, 7.5], stroke: 'none', fill: C.ink, mode: 'pop', delay: 1.65 },
    { text: { x: 150, y: 116, t: 'right', size: 9 }, fill: C.green, delay: 1.8 },

    { circle: [244, 66, 30], stroke: C.ink, w: 2.4, delay: 1.9, dur: 0.4 },
    { circle: [236, 68, 2.4], stroke: 'none', fill: C.ink, mode: 'pop', delay: 2.2 },
    { circle: [252, 68, 2.4], stroke: 'none', fill: C.ink, mode: 'pop', delay: 2.25 },
    { text: { x: 244, y: 116, t: 'too far — anyone', size: 9 }, fill: C.red, delay: 2.4 },
  ],
});

/** Cute expressions live in eye shape and mouth alone. */
export const CdExpressions = () => {
  const faces = [
    { label: 'happy', eye: 'arc', mouth: 'M-8 12 Q0 20 8 12' },
    { label: 'shocked', eye: 'big', mouth: 'M0 14 m-5 0 a5 5.5 0 1 0 10 0 a5 5.5 0 1 0 -10 0' },
    { label: 'sulky', eye: 'half', mouth: 'M-8 16 Q0 10 8 16' },
    { label: 'sleepy', eye: 'line', mouth: 'M-5 15 Q0 19 5 15' },
  ];
  return (
    <svg viewBox="0 0 300 150" style={{ width: '100%', height: '100%', display: 'block' }}>
      {faces.map((f, i) => {
        const x = 48 + i * 68;
        return (
          <g key={f.label} transform={`translate(${x} 60)`} className="pop" style={{ animationDelay: `${i * 0.12}s`, transformBox: 'fill-box', transformOrigin: 'center' }}>
            <circle cx="0" cy="0" r="30" fill={SKIN} stroke={LINE} strokeWidth="2.2" />
            <path d="M-27 -14 C-22 -32 22 -32 27 -14 C18 -22 -18 -22 -27 -14 Z" fill={HAIR} stroke={LINE} strokeWidth="2" />
            {f.eye === 'arc' && (
              <>
                <path d="M-16 4 Q-11 -4 -6 4" stroke={LINE} strokeWidth="2.6" fill="none" strokeLinecap="round" />
                <path d="M6 4 Q11 -4 16 4" stroke={LINE} strokeWidth="2.6" fill="none" strokeLinecap="round" />
              </>
            )}
            {f.eye === 'big' && (
              <>
                <ellipse cx="-11" cy="2" rx="7" ry="9" fill="#2d2a3d" />
                <ellipse cx="11" cy="2" rx="7" ry="9" fill="#2d2a3d" />
                <circle cx="-13" cy="-2" r="2.6" fill="#fff" />
                <circle cx="9" cy="-2" r="2.6" fill="#fff" />
              </>
            )}
            {f.eye === 'half' && (
              <>
                <path d="M-17 0 L-5 0" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
                <path d="M5 0 L17 0" stroke={LINE} strokeWidth="3" strokeLinecap="round" />
                <ellipse cx="-11" cy="5" rx="5" ry="5" fill="#2d2a3d" />
                <ellipse cx="11" cy="5" rx="5" ry="5" fill="#2d2a3d" />
              </>
            )}
            {f.eye === 'line' && (
              <>
                <path d="M-17 2 Q-11 8 -5 2" stroke={LINE} strokeWidth="2.6" fill="none" strokeLinecap="round" />
                <path d="M5 2 Q11 8 17 2" stroke={LINE} strokeWidth="2.6" fill="none" strokeLinecap="round" />
              </>
            )}
            <ellipse cx="-21" cy="9" rx="6" ry="3.4" fill="#ff9db0" opacity="0.6" />
            <ellipse cx="21" cy="9" rx="6" ry="3.4" fill="#ff9db0" opacity="0.6" />
            <path d={f.mouth} stroke={LINE} strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <text x="0" y="52" fontSize="9" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700">
              {f.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

/* --- Depth half --- */

export const CdFlat = () => <ChibiBox />;
export const CdForm = () => <ChibiBox form />;
export const CdCel = () => <ChibiBox cel />;
export const CdOcclusion = () => <ChibiBox form occlusion />;
export const CdBounce = () => <ChibiBox form occlusion bounce />;
export const CdHighlight = () => <ChibiBox form occlusion bounce highlight />;
export const CdFull = () => <ChibiBox form occlusion bounce highlight rim sss />;

/** Character against a background: flat vs fully separated. */
function SceneChibi({ separated }: { separated: boolean }) {
  const uid = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 300 190" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <filter id={`blur-${uid}`}>
          <feGaussianBlur stdDeviation={separated ? 3.4 : 0} />
        </filter>
        <linearGradient id={`bgsky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={separated ? '#3d5a80' : '#6f8fae'} />
          <stop offset="100%" stopColor={separated ? '#7d9bb5' : '#8fa9bf'} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="300" height="190" rx="8" fill={`url(#bgsky-${uid})`} />
      <g filter={`url(#blur-${uid})`} opacity={separated ? 0.82 : 1}>
        {[30, 96, 210, 268].map((x, i) => (
          <g key={x}>
            <rect x={x - 14} y={70 + (i % 2) * 12} width="28" height="80" rx="3" fill={separated ? '#5b7796' : '#6d7f92'} />
          </g>
        ))}
        <path d="M0 148 C60 138 120 152 190 144 C240 138 280 148 300 144 L300 190 L0 190 Z" fill={separated ? '#4a6580' : '#5f7285'} />
      </g>
      <g transform="translate(150 100) scale(0.66) translate(-120 -100)">
        <Chibi form occlusion bounce highlight rim={separated} sss={separated} />
      </g>
    </svg>
  );
}

export const CdSeparationFlat = () => <SceneChibi separated={false} />;
export const CdSeparationDepth = () => <SceneChibi separated />;

/** The finishing pass, annotated. */
export const CdPolish = () => (
  <Paper vb="0 0 300 200">
    <g transform="translate(30 0) scale(0.86)">
      <Chibi form occlusion bounce highlight rim sss />
    </g>
    {[
      { x: 158, y: 52, tx: 46, t: 'occlusion under hair' },
      { x: 168, y: 92, tx: 36, t: 'subsurface at thin edges' },
      { x: 108, y: 128, tx: -52, t: 'bounce light underneath' },
      { x: 165, y: 118, tx: 40, t: 'rim separates from BG' },
      { x: 133, y: 162, tx: 52, t: 'contact shadow grounds it' },
    ].map((m, i) => (
      <g key={m.t} className="fade" style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
        <circle cx={m.x} cy={m.y} r="2.6" fill={C.cyan} />
        <line x1={m.x} y1={m.y} x2={m.x + m.tx} y2={m.y} stroke={C.cyan} strokeWidth="1" />
        <text
          x={m.x + m.tx + (m.tx > 0 ? 4 : -4)}
          y={m.y + 3}
          fontSize="8"
          textAnchor={m.tx > 0 ? 'start' : 'end'}
          fill={C.ink}
          fontFamily="Poppins, sans-serif"
          fontWeight="700"
        >
          {m.t}
        </text>
      </g>
    ))}
  </Paper>
);
