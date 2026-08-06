import type { ReactNode } from 'react';
import { C, Paper } from './kit';

/* ------------------------------------------------------------------
   Character Design.

   One figure is drawn once and then re-dressed and re-coloured, so the
   costume and palette lessons are genuine comparisons: the body never
   changes, only the design decision does.
   ------------------------------------------------------------------ */

export interface Palette {
  skin: string;
  hair: string;
  /** ~60% of the design. */
  main: string;
  /** ~30%. */
  sub: string;
  /** ~10%. The thing you remember. */
  accent: string;
}

/**
 * Outline sits inside the blue family rather than off on its own purple, so
 * the "limited palette" demo actually demonstrates a limited palette.
 */
const LINE = '#262f40';

const DEFAULT_PAL: Palette = {
  skin: '#f5d2b8',
  hair: '#2e3b52',
  main: '#4a6fa5',
  sub: '#2f3d57',
  accent: '#ffb638',
};

type Outfit = 'coat' | 'armour' | 'casual';

/**
 * The shared figure. `silhouette` fills everything flat black, which is the
 * readability test the whole track keeps coming back to.
 */
export function DesignFigure({
  outfit = 'coat',
  pal = DEFAULT_PAL,
  silhouette = false,
  showAccent = true,
}: {
  outfit?: Outfit;
  pal?: Palette;
  silhouette?: boolean;
  showAccent?: boolean;
}) {
  const f = (c: string) => (silhouette ? '#15121d' : c);
  const stroke = silhouette ? 'none' : LINE;
  const sw = silhouette ? 0 : 1.6;

  return (
    <g>
      {/* legs */}
      <path d="M68 128 L66 196 L78 196 L79 128 Z" fill={f(pal.sub)} stroke={stroke} strokeWidth={sw} />
      <path d="M81 128 L82 196 L94 196 L92 128 Z" fill={f(pal.sub)} stroke={stroke} strokeWidth={sw} />
      <path d="M62 196 L80 196 L80 206 L60 206 Z" fill={f(LINE)} stroke={stroke} strokeWidth={sw} />
      <path d="M80 196 L98 196 L100 206 L80 206 Z" fill={f(LINE)} stroke={stroke} strokeWidth={sw} />

      {/* torso */}
      <path d="M62 54 L98 54 L96 112 L64 112 Z" fill={f(pal.main)} stroke={stroke} strokeWidth={sw} />

      {outfit === 'coat' && (
        <>
          {/* long coat — reads as traveller, authority, secrecy */}
          <path d="M60 54 L54 150 L70 150 L68 54 Z" fill={f(pal.main)} stroke={stroke} strokeWidth={sw} />
          <path d="M100 54 L106 150 L90 150 L92 54 Z" fill={f(pal.main)} stroke={stroke} strokeWidth={sw} />
          <path d="M68 54 L80 62 L92 54 L92 96 L68 96 Z" fill={f(pal.sub)} stroke={stroke} strokeWidth={sw} />
          {showAccent && <rect x="64" y="104" width="32" height="7" rx="2" fill={f(pal.accent)} />}
        </>
      )}

      {outfit === 'armour' && (
        <>
          {/* pauldrons and plate — mass on the shoulders reads as power */}
          <path d="M52 50 C52 38 74 36 76 50 C70 46 58 46 52 50 Z" fill={f(pal.sub)} stroke={stroke} strokeWidth={sw} />
          <path d="M108 50 C108 38 86 36 84 50 C90 46 102 46 108 50 Z" fill={f(pal.sub)} stroke={stroke} strokeWidth={sw} />
          <path d="M52 50 L52 66 C62 70 70 70 76 66 L76 50 Z" fill={f(pal.sub)} stroke={stroke} strokeWidth={sw} />
          <path d="M108 50 L108 66 C98 70 90 70 84 66 L84 50 Z" fill={f(pal.sub)} stroke={stroke} strokeWidth={sw} />
          <path d="M66 58 L94 58 L92 100 L80 108 L68 100 Z" fill={f(pal.sub)} stroke={stroke} strokeWidth={sw} />
          {showAccent && <path d="M80 64 L86 76 L80 88 L74 76 Z" fill={f(pal.accent)} />}
        </>
      )}

      {outfit === 'casual' && (
        <>
          {/* short sleeves, shorts — nothing hidden, nothing to prove */}
          <path d="M62 54 L54 78 L66 82 L68 58 Z" fill={f(pal.main)} stroke={stroke} strokeWidth={sw} />
          <path d="M98 54 L106 78 L94 82 L92 58 Z" fill={f(pal.main)} stroke={stroke} strokeWidth={sw} />
          <path d="M64 112 L96 112 L94 140 L66 140 Z" fill={f(pal.sub)} stroke={stroke} strokeWidth={sw} />
          {showAccent && <circle cx="80" cy="76" r="9" fill={f(pal.accent)} />}
        </>
      )}

      {/* arms */}
      {outfit !== 'casual' && (
        <>
          <path d="M60 56 L52 106 L62 108 L68 58 Z" fill={f(pal.main)} stroke={stroke} strokeWidth={sw} />
          <path d="M100 56 L108 106 L98 108 L92 58 Z" fill={f(pal.main)} stroke={stroke} strokeWidth={sw} />
        </>
      )}
      <circle cx="56" cy="112" r="6" fill={f(pal.skin)} stroke={stroke} strokeWidth={sw} />
      <circle cx="104" cy="112" r="6" fill={f(pal.skin)} stroke={stroke} strokeWidth={sw} />

      {/* neck + head */}
      <rect x="75" y="44" width="10" height="12" fill={f(pal.skin)} stroke={stroke} strokeWidth={sw} />
      <ellipse cx="80" cy="32" rx="15" ry="17" fill={f(pal.skin)} stroke={stroke} strokeWidth={sw} />
      {!silhouette && (
        <>
          <ellipse cx="74" cy="34" rx="2.4" ry="3" fill={LINE} />
          <ellipse cx="86" cy="34" rx="2.4" ry="3" fill={LINE} />
        </>
      )}
      {/* hair — the biggest silhouette decision on most characters */}
      <path
        d="M64 30 C62 10 98 10 96 30 C96 20 88 16 80 16 C72 16 64 20 64 30 Z"
        fill={f(pal.hair)}
        stroke={stroke}
        strokeWidth={sw}
      />
      <path d="M64 28 C58 40 56 56 60 66 C58 48 62 36 66 30 Z" fill={f(pal.hair)} stroke={stroke} strokeWidth={sw} />
      <path d="M96 28 C102 40 104 56 100 66 C102 48 98 36 94 30 Z" fill={f(pal.hair)} stroke={stroke} strokeWidth={sw} />
    </g>
  );
}

const FigBox = ({
  children,
  vb = '0 0 160 220',
}: {
  children: ReactNode;
  vb?: string;
}) => <Paper vb={vb}>{children}</Paper>;

/* --- 1. The brief --- */

export const ChdBrief = () => (
  <Paper vb="0 0 320 200">
    <rect x="14" y="24" width="126" height="150" rx="6" fill="#fff" stroke={C.light} strokeWidth="1.8" />
    {[
      { y: 48, k: 'WHO', v: 'disgraced court mage' },
      { y: 78, k: 'DOES', v: 'walks between cities' },
      { y: 108, k: 'FEELS', v: 'guarded, tired' },
      { y: 138, k: 'WORLD', v: 'cold, rain, no magic left' },
    ].map((r, i) => (
      <g key={r.k} className="fade" style={{ animationDelay: `${0.2 + i * 0.18}s` }}>
        <text x="26" y={r.y} fontSize="7.5" fill={C.accent} fontFamily="Poppins, sans-serif" fontWeight="800" letterSpacing="0.1em">
          {r.k}
        </text>
        <text x="26" y={r.y + 12} fontSize="9" fill={C.ink} fontFamily="Poppins, sans-serif" fontWeight="600">
          {r.v}
        </text>
      </g>
    ))}
    <path d="M152 100 L176 100 M168 94 L176 100 L168 106" stroke={C.accent} strokeWidth="2" fill="none" strokeLinecap="round" />
    <g transform="translate(150 -6) scale(0.86)" className="fade" style={{ animationDelay: '1.1s' }}>
      <DesignFigure outfit="coat" />
    </g>
  </Paper>
);

/* --- 2. Silhouette thumbnails --- */

/** Twenty rough silhouettes; one gets circled. That is the whole process. */
export const ChdThumbs = () => {
  const shapes = [
    'M14 46 L8 20 L20 20 Z', 'M6 46 L6 22 L22 22 L22 46 Z', 'M14 16 L24 46 L4 46 Z',
    'M14 18 C24 18 24 34 14 46 C4 34 4 18 14 18 Z', 'M4 46 L10 16 L18 16 L24 46 Z',
    'M14 14 C22 22 22 38 14 46 C6 38 6 22 14 14 Z', 'M4 20 L24 20 L18 46 L10 46 Z',
    'M14 14 L26 30 L14 46 L2 30 Z', 'M8 16 L20 16 L24 46 L4 46 Z', 'M14 16 C26 24 20 46 14 46 C8 46 2 24 14 16 Z',
    'M6 16 L22 16 L22 32 L14 46 L6 32 Z', 'M14 16 L22 24 L18 46 L10 46 L6 24 Z',
  ];
  return (
    <svg viewBox="0 0 320 160" style={{ width: '100%', height: '100%', display: 'block' }}>
      {shapes.map((d, i) => {
        const x = 14 + (i % 6) * 50;
        const y = 18 + Math.floor(i / 6) * 66;
        const chosen = i === 7;
        return (
          <g key={i} transform={`translate(${x} ${y})`} className="pop" style={{ animationDelay: `${i * 0.05}s`, transformBox: 'fill-box', transformOrigin: 'center' }}>
            <rect x="-4" y="-4" width="36" height="58" rx="3" fill="#fff" stroke={chosen ? C.accent : C.faint} strokeWidth={chosen ? 2.4 : 1} />
            <path d={d} fill="#15121d" />
            {chosen && <circle cx="14" cy="30" r="26" fill="none" stroke={C.accent} strokeWidth="2" strokeDasharray="4 3" />}
          </g>
        );
      })}
    </svg>
  );
};

/** The readability test: fill it black and see if it still reads. */
export const ChdSilhouetteGood = () => (
  <FigBox>
    <DesignFigure outfit="coat" silhouette />
  </FigBox>
);

export const ChdSilhouetteWeak = () => (
  <FigBox>
    {/* Same character with the read stripped out: no hair shape, no coat flare. */}
    <g>
      <path d="M68 128 L66 196 L78 196 L79 128 Z" fill="#15121d" />
      <path d="M81 128 L82 196 L94 196 L92 128 Z" fill="#15121d" />
      <path d="M64 54 L96 54 L94 130 L66 130 Z" fill="#15121d" />
      <path d="M62 56 L58 110 L68 110 L68 58 Z" fill="#15121d" />
      <path d="M98 56 L102 110 L92 110 L92 58 Z" fill="#15121d" />
      <rect x="75" y="44" width="10" height="12" fill="#15121d" />
      <ellipse cx="80" cy="32" rx="15" ry="17" fill="#15121d" />
      <path d="M65 26 C64 14 96 14 95 26 Z" fill="#15121d" />
    </g>
  </FigBox>
);

/* --- 3. Proportion across a cast --- */

export const ChdCast = () => {
  const cast = [
    { s: 1.0, pal: DEFAULT_PAL, outfit: 'coat' as Outfit },
    { s: 0.74, pal: { ...DEFAULT_PAL, main: '#c76b6b', sub: '#8f4747', hair: '#5b2f2f', accent: '#ffe08a' }, outfit: 'casual' as Outfit },
    { s: 1.18, pal: { ...DEFAULT_PAL, main: '#5b6b56', sub: '#3b4838', hair: '#2b2b2b', accent: '#d9a441' }, outfit: 'armour' as Outfit },
  ];
  return (
    <svg viewBox="0 0 340 250" style={{ width: '100%', height: '100%', display: 'block' }}>
      <line x1="10" y1="242" x2="330" y2="242" stroke={C.light} strokeWidth="1.5" />
      {cast.map((c, i) => (
        <g key={i} transform={`translate(${20 + i * 108} ${242 - 206 * c.s}) scale(${c.s})`}>
          <DesignFigure outfit={c.outfit} pal={c.pal} />
        </g>
      ))}
    </svg>
  );
};

export const ChdCastSilhouette = () => {
  const cast = [
    { s: 1.0, outfit: 'coat' as Outfit },
    { s: 0.74, outfit: 'casual' as Outfit },
    { s: 1.18, outfit: 'armour' as Outfit },
  ];
  return (
    <svg viewBox="0 0 340 250" style={{ width: '100%', height: '100%', display: 'block' }}>
      <line x1="10" y1="242" x2="330" y2="242" stroke={C.light} strokeWidth="1.5" />
      {cast.map((c, i) => (
        <g key={i} transform={`translate(${20 + i * 108} ${242 - 206 * c.s}) scale(${c.s})`}>
          <DesignFigure outfit={c.outfit} silhouette />
        </g>
      ))}
    </svg>
  );
};

/* --- 4. Costume --- */

export const ChdCostumes = () => {
  const looks: Array<{ outfit: Outfit; label: string; note: string }> = [
    { outfit: 'casual', label: 'casual', note: 'nothing to hide' },
    { outfit: 'coat', label: 'long coat', note: 'travelling, guarded' },
    { outfit: 'armour', label: 'armour', note: 'expects violence' },
  ];
  return (
    <svg viewBox="0 0 340 250" style={{ width: '100%', height: '100%', display: 'block' }}>
      {looks.map((l, i) => (
        <g key={l.label}>
          <g transform={`translate(${16 + i * 108} 6)`}>
            <DesignFigure outfit={l.outfit} />
          </g>
          <text x={96 + i * 108} y="234" fontSize="11" textAnchor="middle" fill={C.ink} fontFamily="Poppins, sans-serif" fontWeight="800">
            {l.label}
          </text>
          <text x={96 + i * 108} y="246" fontSize="8.5" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="600">
            {l.note}
          </text>
        </g>
      ))}
    </svg>
  );
};

/* --- 5. Palette --- */

/** Hues scattered right round the wheel — no family, nothing dominant. */
const BUSY: Palette = { skin: '#f5d2b8', hair: '#8e44ad', main: '#27ae60', sub: '#e67e22', accent: '#2980b9' };
/** Hair, main and sub all sit within ~5° of each other; gold is the lone accent. */
const TIGHT: Palette = { skin: '#f5d2b8', hair: '#2e3b52', main: '#4a6fa5', sub: '#2f3d57', accent: '#ffb638' };

export const ChdPaletteBusy = () => (
  <FigBox>
    <DesignFigure outfit="coat" pal={BUSY} />
  </FigBox>
);

export const ChdPaletteTight = () => (
  <FigBox>
    <DesignFigure outfit="coat" pal={TIGHT} />
  </FigBox>
);

/** The 60/30/10 split, drawn as the bar it actually is. */
export const ChdPaletteRatio = () => (
  <svg viewBox="0 0 320 170" style={{ width: '100%', height: '100%', display: 'block' }}>
    <g transform="translate(6 -14) scale(0.78)">
      <DesignFigure outfit="coat" pal={TIGHT} />
    </g>
    <g transform="translate(150 34)">
      {[
        { w: 96, c: TIGHT.main, k: '60%', v: 'dominant' },
        { w: 48, c: TIGHT.sub, k: '30%', v: 'secondary' },
        { w: 16, c: TIGHT.accent, k: '10%', v: 'accent' },
      ].map((b, i) => {
        const x = i === 0 ? 0 : i === 1 ? 96 : 144;
        return (
          <g key={b.k}>
            <rect x={x} y="0" width={b.w} height="30" fill={b.c} className="pop" style={{ animationDelay: `${i * 0.14}s`, transformBox: 'fill-box', transformOrigin: 'center' }} />
            <text x={x + b.w / 2} y="46" fontSize="9" textAnchor="middle" fill={C.ink} fontFamily="Poppins, sans-serif" fontWeight="800">
              {b.k}
            </text>
            <text x={x + b.w / 2} y="58" fontSize="7.5" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="600">
              {b.v}
            </text>
          </g>
        );
      })}
      <g transform="translate(0 80)">
        {[TIGHT.skin, TIGHT.hair, TIGHT.main, TIGHT.sub, TIGHT.accent].map((c, i) => (
          <rect key={i} x={i * 34} y="0" width="30" height="30" rx="3" fill={c} stroke={C.light} strokeWidth="1" />
        ))}
      </g>
    </g>
  </svg>
);

/* --- 6. Signature detail --- */

export const ChdSignature = () => (
  <Paper vb="0 0 200 220">
    <DesignFigure outfit="coat" pal={TIGHT} />
    <circle cx="80" cy="107" r="26" fill="none" stroke={C.accent} strokeWidth="2" strokeDasharray="4 3" className="blink" />
    <line x1="106" y1="107" x2="140" y2="107" stroke={C.accent} strokeWidth="1.2" />
    <text x="144" y="104" fontSize="9" fill={C.ink} fontFamily="Poppins, sans-serif" fontWeight="800">
      the one thing
    </text>
    <text x="144" y="116" fontSize="8" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="600">
      people will draw
    </text>
  </Paper>
);

/* --- 7. Model sheet --- */

/** Front, three-quarter, side, back — locked to shared height guides. */
export const ChdTurnaround = () => {
  const views = ['front', '3/4', 'side', 'back'];
  return (
    <svg viewBox="0 0 340 250" style={{ width: '100%', height: '100%', display: 'block' }}>
      {[26, 50, 118, 208, 242].map((y, i) => (
        <g key={y}>
          <line x1="8" y1={y} x2="332" y2={y} stroke={C.faint} strokeWidth="1" strokeDasharray="4 4" />
          <text x="4" y={y - 3} fontSize="6.5" fill={C.light} fontFamily="Poppins, sans-serif" fontWeight="700">
            {['top', 'chin', 'waist', 'ankle', 'floor'][i]}
          </text>
        </g>
      ))}
      {views.map((v, i) => (
        <g key={v}>
          <g transform={`translate(${10 + i * 82} 10) scale(0.94)`}>
            {/* the turn is faked by shifting the face and hair mass sideways */}
            <g transform={`translate(${[0, 4, 7, 0][i]} 0)`}>
              <DesignFigure outfit="coat" pal={TIGHT} />
            </g>
            {i >= 2 && <rect x="66" y="16" width="30" height="34" fill={TIGHT.hair} />}
            {i === 3 && <rect x="64" y="14" width="34" height="40" rx="6" fill={TIGHT.hair} />}
          </g>
          <text x={86 + i * 82} y="248" fontSize="9" textAnchor="middle" fill={C.ink} fontFamily="Poppins, sans-serif" fontWeight="800">
            {v}
          </text>
        </g>
      ))}
    </svg>
  );
};

/** Expression sheet: the same head, many moods, one page. */
export const ChdExpressionSheet = () => {
  const set = [
    { label: 'neutral', brow: 'M-9 -6 L-3 -6 M3 -6 L9 -6', mouth: 'M-4 8 L4 8' },
    { label: 'angry', brow: 'M-9 -8 L-3 -4 M3 -4 L9 -8', mouth: 'M-5 9 Q0 6 5 9' },
    { label: 'sad', brow: 'M-9 -4 L-3 -8 M3 -8 L9 -4', mouth: 'M-5 10 Q0 6 5 10' },
    { label: 'joy', brow: 'M-9 -8 Q-6 -11 -3 -8 M3 -8 Q6 -11 9 -8', mouth: 'M-6 6 Q0 12 6 6' },
    { label: 'shock', brow: 'M-10 -10 L-2 -10 M2 -10 L10 -10', mouth: 'M0 9 m-4 0 a4 4.5 0 1 0 8 0 a4 4.5 0 1 0 -8 0' },
    { label: 'smug', brow: 'M-9 -7 L-3 -5 M3 -8 L9 -6', mouth: 'M-5 8 Q0 8 5 5' },
  ];
  return (
    <svg viewBox="0 0 320 170" style={{ width: '100%', height: '100%', display: 'block' }}>
      {set.map((e, i) => {
        const x = 40 + (i % 3) * 110;
        const y = 42 + Math.floor(i / 3) * 78;
        return (
          <g key={e.label} transform={`translate(${x} ${y})`} className="pop" style={{ animationDelay: `${i * 0.09}s`, transformBox: 'fill-box', transformOrigin: 'center' }}>
            <ellipse cx="0" cy="0" rx="21" ry="24" fill={TIGHT.skin} stroke={LINE} strokeWidth="1.6" />
            <path d="M-21 -4 C-23 -24 23 -24 21 -4 C19 -16 10 -20 0 -20 C-10 -20 -19 -16 -21 -4 Z" fill={TIGHT.hair} />
            <ellipse cx="-6" cy="1" rx="2.6" ry="3.2" fill={LINE} />
            <ellipse cx="6" cy="1" rx="2.6" ry="3.2" fill={LINE} />
            <path d={e.brow} stroke={LINE} strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d={e.mouth} stroke={LINE} strokeWidth="1.8" fill="none" strokeLinecap="round" />
            <text x="0" y="40" fontSize="8.5" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="700">
              {e.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

/* --- 8. Consistency --- */

/** The measurements that must not drift between drawings. */
export const ChdConsistency = () => (
  <Paper vb="0 0 260 230">
    <g transform="translate(20 4)">
      <DesignFigure outfit="coat" pal={TIGHT} />
    </g>
    {[
      { y: 22, t: 'hair mass = 1.1× head width' },
      { y: 52, t: 'eyes at 55% down the head' },
      { y: 132, t: 'belt at 2.6 heads' },
      { y: 210, t: 'total = 6.5 heads' },
    ].map((m, i) => (
      <g key={m.t} className="fade" style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
        <line x1="126" y1={m.y} x2="146" y2={m.y} stroke={C.cyan} strokeWidth="1" />
        <circle cx="126" cy={m.y} r="2.4" fill={C.cyan} />
        <text x="150" y={m.y + 3} fontSize="8" fill={C.ink} fontFamily="Poppins, sans-serif" fontWeight="700">
          {m.t}
        </text>
      </g>
    ))}
  </Paper>
);

/* --- 9. Iteration funnel --- */

export const ChdFunnel = () => (
  <svg viewBox="0 0 320 160" style={{ width: '100%', height: '100%', display: 'block' }}>
    {[
      { x: 12, n: 20, w: 90, label: 'explore', note: '20 silhouettes' },
      { x: 118, n: 3, w: 74, label: 'shortlist', note: '3 developed' },
      { x: 210, n: 1, w: 96, label: 'commit', note: '1 finished' },
    ].map((s, i) => (
      <g key={s.label}>
        <rect x={s.x} y="18" width={s.w} height="86" rx="5" fill="#fff" stroke={i === 2 ? C.accent : C.light} strokeWidth={i === 2 ? 2.4 : 1.4} />
        {Array.from({ length: s.n }, (_, k) => {
          const cols = i === 0 ? 5 : i === 1 ? 3 : 1;
          const cw = s.w / cols;
          const cx = s.x + (k % cols) * cw + cw / 2;
          const cy = 30 + Math.floor(k / cols) * (i === 0 ? 20 : i === 1 ? 60 : 40);
          const h = i === 0 ? 14 : i === 1 ? 56 : 70;
          return (
            <rect
              key={k}
              x={cx - (i === 0 ? 5 : i === 1 ? 9 : 18)}
              y={cy - (i === 2 ? 4 : 0)}
              width={i === 0 ? 10 : i === 1 ? 18 : 36}
              height={h}
              rx="2"
              fill="#15121d"
              opacity={i === 2 ? 1 : 0.55}
              className="pop"
              style={{ animationDelay: `${i * 0.25 + k * 0.03}s`, transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          );
        })}
        <text x={s.x + s.w / 2} y="122" fontSize="10" textAnchor="middle" fill={C.ink} fontFamily="Poppins, sans-serif" fontWeight="800">
          {s.label}
        </text>
        <text x={s.x + s.w / 2} y="136" fontSize="8" textAnchor="middle" fill={C.mid} fontFamily="Poppins, sans-serif" fontWeight="600">
          {s.note}
        </text>
        {i < 2 && (
          <path d={`M${s.x + s.w + 4} 60 L${s.x + s.w + 14} 60 M${s.x + s.w + 10} 56 L${s.x + s.w + 14} 60 L${s.x + s.w + 10} 64`} stroke={C.accent} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        )}
      </g>
    ))}
  </svg>
);
