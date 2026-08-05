import type { ReactNode } from 'react';
import { FW, FH, Frame } from './frame';

/* ------------------------------------------------------------------
   Cinematography.

   Every shot-size demo is the SAME scene at a different scale, because
   that is exactly what a shot size is — one subject, one distance
   decision. Scaling a shared scene rather than drawing seven separate
   pictures keeps the comparison honest.
   ------------------------------------------------------------------ */

/** Head sits here; every zoom is anchored relative to it. */
const HEAD_X = 160;
const HEAD_Y = 104;

/** A figure with an actual face, so close-ups have something to land on. */
const Actor = ({ x = HEAD_X, flip = false }: { x?: number; flip?: boolean }) => (
  <g transform={`translate(${x} 0) ${flip ? 'scale(-1 1)' : ''}`}>
    {/* body */}
    <path d="M-11 116 L11 116 L14 150 L-14 150 Z" fill="#2f3550" />
    <rect x="-9" y="150" width="7" height="22" rx="3" fill="#252a40" />
    <rect x="2" y="150" width="7" height="22" rx="3" fill="#252a40" />
    {/* neck + head */}
    <rect x="-3" y="110" width="6" height="6" fill="#e0a98d" />
    <circle cx="0" cy={HEAD_Y} r="9" fill="#f2c6a8" />
    <path d="M-9 101 C-8 93 8 93 9 101 C7 97 -6 96 -9 101 Z" fill="#3a2b44" />
    {/* face */}
    <ellipse cx="-3.2" cy="104" rx="1.5" ry="1.9" fill="#2b2434" />
    <ellipse cx="3.2" cy="104" rx="1.5" ry="1.9" fill="#2b2434" />
    <path d="M-1.6 107.6 Q0 108.6 1.6 107.6" stroke="#a9715c" strokeWidth="0.7" fill="none" strokeLinecap="round" />
  </g>
);

/**
 * Background drawn far outside the frame so that zooming out to an
 * extreme wide still fills it rather than exposing the edges.
 */
const SceneBg = () => (
  <>
    <rect x="-600" y="-400" width="1520" height="1000" fill="#7fa8cc" />
    <circle cx="52" cy="30" r="18" fill="#ffeec4" opacity="0.85" />
    <path d="M-600 128 C-200 96 -40 126 160 112 C360 98 520 126 920 108 L920 600 L-600 600 Z" fill="#5f7f7a" />
    <path d="M-600 150 C-160 138 40 158 160 148 C300 136 540 158 920 146 L920 600 L-600 600 Z" fill="#3f5a52" />
    <rect x="-600" y="172" width="1520" height="440" fill="#2d4038" />
    {/* trees, so a wide shot has something to be wide about */}
    {[-40, 40, 250, 320].map((tx) => (
      <g key={tx}>
        <rect x={tx - 2} y="140" width="4" height="34" fill="#2a3a30" />
        <circle cx={tx} cy={134} r="14" fill="#4a6b52" />
      </g>
    ))}
  </>
);

/** One shot size: the shared scene, scaled around a focus point. */
function Shot({
  zoom,
  focusY = HEAD_Y,
  badge,
}: {
  zoom: number;
  focusY?: number;
  badge: string;
}) {
  return (
    <Frame tone="none">
      <g transform={`translate(${HEAD_X} ${focusY}) scale(${zoom}) translate(${-HEAD_X} ${-focusY})`}>
        <SceneBg />
        <Actor />
      </g>
      <rect x="8" y="8" width={badge.length * 7.4 + 14} height="18" rx="4" fill="rgba(11,13,20,0.72)" />
      <text x={15} y="21" fontSize="10" fill="#ffd9a0" fontFamily="Poppins, sans-serif" fontWeight="800" letterSpacing="0.06em">
        {badge}
      </text>
    </Frame>
  );
}

/* --- The seven shot sizes --- */

export const CmExtremeWide = () => (
  <Shot zoom={0.5} focusY={130} badge="EWS" />
);
export const CmWide = () => (
  <Shot zoom={1} focusY={126} badge="WS" />
);
export const CmFull = () => (
  <Shot zoom={1.55} focusY={130} badge="FS" />
);
export const CmMedium = () => (
  <Shot zoom={2.7} focusY={122} badge="MS" />
);
export const CmMediumClose = () => (
  <Shot zoom={4.2} focusY={113} badge="MCU" />
);
export const CmCloseUp = () => (
  <Shot zoom={7} focusY={HEAD_Y} badge="CU" />
);
export const CmExtremeClose = () => (
  <Shot zoom={15} focusY={103.5} badge="ECU" />
);

/** The whole ladder, stepping automatically. */
export const CmLadder = () => (
  <Frame tone="none">
    <g className="shotladder">
      <SceneBg />
      <Actor />
    </g>
  </Frame>
);

/* --- Camera height --- */

function HeightShot({
  camY,
  badge,
  skew,
}: {
  camY: number;
  badge: string;
  skew: number;
}) {
  return (
    <Frame tone="none">
      <g transform={`translate(${HEAD_X} ${HEAD_Y}) scale(3.4) translate(${-HEAD_X} ${-HEAD_Y}) translate(0 ${camY})`}>
        <SceneBg />
        {/* Vertical squash fakes the foreshortening of looking up or down. */}
        <g transform={`translate(${HEAD_X} ${HEAD_Y}) scale(1 ${skew}) translate(${-HEAD_X} ${-HEAD_Y})`}>
          <Actor />
        </g>
      </g>
      <rect x="8" y="8" width={badge.length * 7.4 + 14} height="18" rx="4" fill="rgba(11,13,20,0.72)" />
      <text x={15} y="21" fontSize="10" fill="#ffd9a0" fontFamily="Poppins, sans-serif" fontWeight="800">
        {badge}
      </text>
    </Frame>
  );
}

export const CmLowAngle = () => (
  <HeightShot camY={-14} skew={1.18} badge="LOW" />
);
export const CmEyeLevel = () => (
  <HeightShot camY={0} skew={1} badge="EYE" />
);
export const CmHighAngle = () => (
  <HeightShot camY={13} skew={0.84} badge="HIGH" />
);

/** Bird's eye / drone: straight down, the map view. */
export const CmBirdsEye = () => (
  <Frame tone="none">
    <rect x="0" y="0" width={FW} height={FH} fill="#4a6b52" />
    <path d="M0 40 L320 24 L320 56 L0 74 Z" fill="#6b6357" />
    <path d="M0 112 L320 96 L320 128 L0 146 Z" fill="#6b6357" />
    {[40, 130, 210, 290].map((x, i) => (
      <rect key={x} x={x} y={i % 2 ? 62 : 78} width="34" height="30" rx="2" fill="#3d4a52" />
    ))}
    {/* the figure from directly above: head disc plus shoulders */}
    <g transform="translate(168 90)">
      <ellipse cx="0" cy="0" rx="9" ry="7" fill="#2f3550" />
      <circle cx="0" cy="-1" r="5.5" fill="#3a2b44" />
    </g>
    <circle cx="168" cy="90" r="30" fill="none" stroke="#ffd9a0" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.7" />
  </Frame>
);

export const CmDutch = () => (
  <Frame tone="none">
    <g transform="rotate(-12 160 84)">
      <g transform={`translate(${HEAD_X} ${HEAD_Y}) scale(3) translate(${-HEAD_X} ${-HEAD_Y})`}>
        <SceneBg />
        <Actor />
      </g>
    </g>
  </Frame>
);

/* --- Camera movement --- */

function MoveShot({
  className,
  badge,
  parallax,
}: {
  className: string;
  badge: string;
  parallax?: boolean;
}) {
  return (
    <Frame tone="none">
      {parallax ? (
        <>
          <g className="cam-dolly-bg">
            <SceneBg />
          </g>
          <g className="cam-dolly">
            <Actor />
          </g>
        </>
      ) : (
        <g className={className}>
          <g transform={`translate(${HEAD_X} ${HEAD_Y}) scale(2.4) translate(${-HEAD_X} ${-HEAD_Y})`}>
            <SceneBg />
            <Actor />
          </g>
        </g>
      )}
      <rect x="8" y="8" width={badge.length * 7.4 + 14} height="18" rx="4" fill="rgba(11,13,20,0.72)" />
      <text x={15} y="21" fontSize="10" fill="#ffd9a0" fontFamily="Poppins, sans-serif" fontWeight="800">
        {badge}
      </text>
    </Frame>
  );
}

export const CmPan = () => (
  <MoveShot className="cam-pan" badge="PAN" />
);
export const CmTilt = () => (
  <MoveShot className="cam-tilt" badge="TILT" />
);
export const CmDolly = () => (
  <MoveShot className="cam-dolly" badge="DOLLY IN" parallax />
);
export const CmCrane = () => (
  <MoveShot className="cam-crane" badge="CRANE" />
);
export const CmHandheld = () => (
  <MoveShot className="cam-handheld" badge="HANDHELD" />
);

/** Anime TU: a hard snap-in used as punctuation, not as a travel move. */
export const CmTrackUp = () => (
  <Frame tone="none">
    <g className="cam-tu">
      <g transform={`translate(${HEAD_X} ${HEAD_Y}) scale(2.2) translate(${-HEAD_X} ${-HEAD_Y})`}>
        <SceneBg />
        <Actor />
      </g>
    </g>
  </Frame>
);

/* --- Framing --- */

const FrameGuide = ({ children, ok }: { children: ReactNode; ok: boolean }) => (
  <Frame tone="none">
    {children}
    <rect
      x="1.5"
      y="1.5"
      width={FW - 3}
      height={FH - 3}
      fill="none"
      stroke={ok ? '#56d98a' : '#ff6b6b'}
      strokeWidth="2.5"
      opacity="0.75"
    />
  </Frame>
);

const HeadShot = ({ dx, dy }: { dx: number; dy: number }) => (
  <g transform={`translate(${dx} ${dy})`}>
    <g transform={`translate(${HEAD_X} ${HEAD_Y}) scale(4.6) translate(${-HEAD_X} ${-HEAD_Y})`}>
      <SceneBg />
      <Actor />
    </g>
  </g>
);

export const CmHeadroomBad = () => (
  <FrameGuide ok={false}>
    <HeadShot dx={0} dy={44} />
  </FrameGuide>
);

export const CmHeadroomGood = () => (
  <FrameGuide ok>
    <HeadShot dx={0} dy={-6} />
  </FrameGuide>
);

export const CmLeadRoomBad = () => (
  <FrameGuide ok={false}>
    <g transform="translate(96 -6)">
      <g transform={`translate(${HEAD_X} ${HEAD_Y}) scale(4.6) translate(${-HEAD_X} ${-HEAD_Y})`}>
        <SceneBg />
        <Actor />
      </g>
    </g>
  </FrameGuide>
);

export const CmLeadRoomGood = () => (
  <FrameGuide ok>
    <g transform="translate(-72 -6)">
      <g transform={`translate(${HEAD_X} ${HEAD_Y}) scale(4.6) translate(${-HEAD_X} ${-HEAD_Y})`}>
        <SceneBg />
        <Actor />
      </g>
    </g>
  </FrameGuide>
);

/** Over the shoulder: the standard dialogue shot. */
export const CmOverShoulder = () => (
  <Frame tone="none">
    <g transform={`translate(${HEAD_X} ${HEAD_Y}) scale(3.6) translate(${-HEAD_X} ${-HEAD_Y}) translate(14 0)`}>
      <SceneBg />
      <Actor />
    </g>
    {/* the near shoulder, blurred and dark, framing the far character */}
    <path d="M-10 168 L-10 96 C22 70 66 62 88 74 C104 84 108 128 104 168 Z" fill="#151a2a" opacity="0.94" />
    <circle cx="52" cy="52" r="34" fill="#151a2a" opacity="0.94" />
  </Frame>
);

export const CmTwoShot = () => (
  <Frame tone="none">
    <g transform={`translate(${HEAD_X} ${HEAD_Y}) scale(2.1) translate(${-HEAD_X} ${-HEAD_Y})`}>
      <SceneBg />
      <Actor x={HEAD_X - 22} />
      <Actor x={HEAD_X + 22} flip />
    </g>
  </Frame>
);

/* --- Continuity: the 180 degree rule --- */

function AxisDiagram({ crossed }: { crossed: boolean }) {
  const tone = crossed ? '#ff6b6b' : '#56d98a';
  return (
    <svg viewBox="0 0 320 190" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect x="0" y="0" width="320" height="190" rx="8" fill="#141a28" />
      {/* the line of action between the two characters */}
      <line x1="70" y1="86" x2="250" y2="86" stroke={tone} strokeWidth="2" strokeDasharray="7 5" />
      <circle cx="70" cy="86" r="13" fill="#4a5570" />
      <text x="70" y="90" fontSize="11" textAnchor="middle" fill="#fff" fontFamily="Poppins, sans-serif" fontWeight="800">A</text>
      <circle cx="250" cy="86" r="13" fill="#4a5570" />
      <text x="250" y="90" fontSize="11" textAnchor="middle" fill="#fff" fontFamily="Poppins, sans-serif" fontWeight="800">B</text>

      {/* camera positions */}
      {[
        { x: 108, y: 142, n: '1', bad: false },
        { x: 160, y: 154, n: '2', bad: false },
        { x: 212, y: 142, n: '3', bad: false },
        { x: 160, y: 30, n: '4', bad: true },
      ]
        .filter((c) => (crossed ? true : !c.bad))
        .map((c) => (
          <g key={c.n}>
            <path
              d={`M${c.x - 9} ${c.y + 7} L${c.x + 9} ${c.y + 7} L${c.x + 9} ${c.y - 5} L${c.x + 16} ${c.y - 10} L${c.x + 16} ${c.y + 2} L${c.x + 9} ${c.y - 2}`}
              fill={c.bad ? '#ff6b6b' : '#7dd3fc'}
            />
            <text x={c.x} y={c.y + 22} fontSize="9" textAnchor="middle" fill={c.bad ? '#ff6b6b' : '#7dd3fc'} fontFamily="Poppins, sans-serif" fontWeight="700">
              {c.n}
            </text>
          </g>
        ))}
    </svg>
  );
}

export const Cm180Good = () => <AxisDiagram crossed={false} />;
export const Cm180Bad = () => <AxisDiagram crossed />;

/** Eyeline match: what they look at is the next shot. */
export const CmEyeline = () => (
  <svg viewBox="0 0 320 175" style={{ width: '100%', height: '100%', display: 'block' }}>
    <g transform="translate(6 10)">
      <rect x="0" y="0" width="140" height="80" rx="4" fill="#3f4763" />
      <g transform="translate(70 56) scale(1.5)">
        <circle cx="0" cy="-12" r="9" fill="#f2c6a8" />
        <path d="M-9 -15 C-8 -23 8 -23 9 -15 C7 -19 -6 -20 -9 -15 Z" fill="#3a2b44" />
        <ellipse cx="-2" cy="-12" rx="1.5" ry="1.9" fill="#2b2434" />
        <ellipse cx="4.4" cy="-12" rx="1.5" ry="1.9" fill="#2b2434" />
        <path d="M-11 -3 L11 -3 L14 12 L-14 12 Z" fill="#2f3550" />
      </g>
      <text x="70" y="94" fontSize="9" textAnchor="middle" fill="#96a0b8" fontFamily="Poppins, sans-serif" fontWeight="700">
        she looks off-frame right
      </text>
    </g>
    <path d="M152 46 L172 46 M166 41 L172 46 L166 51" stroke="#ffd9a0" strokeWidth="2" fill="none" strokeLinecap="round" />
    <g transform="translate(178 10)">
      <rect x="0" y="0" width="136" height="80" rx="4" fill="#2a3348" />
      <circle cx="68" cy="40" r="22" fill="#ffd9a0" opacity="0.85" />
      <path d="M0 62 C30 52 96 66 136 56 L136 80 L0 80 Z" fill="#1d2436" />
      <text x="68" y="94" fontSize="9" textAnchor="middle" fill="#96a0b8" fontFamily="Poppins, sans-serif" fontWeight="700">
        …so we cut to what is there
      </text>
    </g>
  </svg>
);

/** Standard scene coverage: how a scene is actually assembled. */
export const CmSceneFlow = () => {
  const beats = [
    { label: 'establish', zoom: 0.5, note: 'where' },
    { label: 'wide', zoom: 1.1, note: 'who' },
    { label: 'medium', zoom: 2.4, note: 'talk' },
    { label: 'close', zoom: 5.4, note: 'feel' },
    { label: 'insert', zoom: 11, note: 'detail' },
  ];
  return (
    <svg viewBox="0 0 320 150" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <clipPath id="cmflowclip">
          <rect x="0" y="0" width="56" height="42" rx="3" />
        </clipPath>
      </defs>
      {beats.map((b, i) => (
        <g key={b.label} transform={`translate(${8 + i * 62} 22)`}>
          <g clipPath="url(#cmflowclip)">
            <g transform={`translate(28 21) scale(${(b.zoom * 56) / 320}) translate(${-HEAD_X} ${-HEAD_Y})`}>
              <SceneBg />
              <Actor />
            </g>
          </g>
          <rect x="0" y="0" width="56" height="42" rx="3" fill="none" stroke="#8b93ad" strokeWidth="1" opacity="0.6" />
          <text x="28" y="56" fontSize="9" textAnchor="middle" fill="#e8ecf5" fontFamily="Poppins, sans-serif" fontWeight="700">
            {b.label}
          </text>
          <text x="28" y="68" fontSize="8" textAnchor="middle" fill="#96a0b8" fontFamily="Poppins, sans-serif" fontWeight="600">
            {b.note}
          </text>
          {i < beats.length - 1 && (
            <path d={`M58 21 L62 21 M60 18 L62 21 L60 24`} stroke="#ffd9a0" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          )}
        </g>
      ))}
    </svg>
  );
};

/** The pillow shot: anime's held, empty cutaway. */
export const CmPillowShot = () => (
  <Frame tone="none">
    <rect x="0" y="0" width={FW} height={FH} fill="#c9dcea" />
    <rect x="0" y="0" width={FW} height={96} fill="#9dc4de" />
    <circle cx="248" cy="34" r="16" fill="#fff6e2" opacity="0.9" />
    <path d="M0 96 C60 88 120 100 190 94 C250 89 290 98 320 94 L320 168 L0 168 Z" fill="#7c9a86" />
    <rect x="42" y="72" width="9" height="46" fill="#4a4038" />
    <path d="M46 74 C24 62 26 40 46 34 C66 40 68 62 46 74 Z" fill="#6d8f6a" />
    {[86, 128, 176].map((x, i) => (
      <rect key={x} x={x} y={110 + i * 4} width="26" height="3" rx="1.5" fill="#5c7a66" opacity="0.8" />
    ))}
    <g className="fx-twinkle" style={{ animationDuration: '5s' }}>
      <circle cx="120" cy="42" r="2.4" fill="#ffffff" opacity="0.8" />
    </g>
  </Frame>
);
