import type { ComponentType } from 'react';
import * as F from './fundamentals';
import * as Ct from './construction';
import * as St from './style';
import * as Pr from './principles';
import * as An from './animation';
import * as Wf from './workflow';
import * as Cp from './composition';
import * as Fx from './effects';
import * as Cl from './colour';
import * as Ps from './perspective';
import * as Cm from './cinematography';
import * as Cd from './cute';

/**
 * Lookup used by every block that renders a figure. Lesson data refers to
 * demos by string so the content files stay free of imports and JSX.
 */
export const DEMOS: Record<string, ComponentType> = {
  /* --- Track 1: fundamentals --- */
  'fx-pivots': F.FxPivots,
  'fx-ghost': F.FxGhost,
  'fx-dot2dot': F.FxDotToDot,
  'fx-slow': F.FxSlowLine,
  'fx-fast': F.FxFastLine,
  'fx-superimposed': F.FxSuperimposed,
  'fx-linelength': F.FxLineLength,
  'fx-hook': F.FxHook,
  'fx-ellipse-orbit': F.FxEllipseOrbit,
  'fx-ellipse-degree': F.FxEllipseDegree,
  'fx-ellipse-axis': F.FxEllipseAxis,
  'fx-circle': F.FxCircle,
  'fx-curve3': F.FxCurve3,
  'fx-box': F.FxBox,
  'fx-persp1': F.FxPersp1,
  'fx-persp2': F.FxPersp2,
  'fx-persp3': F.FxPersp3,
  'fx-hatch': F.FxHatch,
  'fx-hatch-cross': F.FxHatchCross,
  'fx-warmup': F.FxWarmup,

  /* --- Track 2: construction --- */
  'ct-ball': Ct.CtBall,
  'ct-sideplane': Ct.CtSidePlane,
  'ct-jaw': Ct.CtJaw,
  'ct-guides': Ct.CtGuides,
  'ct-proportion': Ct.CtAnimeProportion,
  'ct-headturn': Ct.CtHeadTurn,
  'ct-eye-lash': Ct.CtEyeLash,
  'ct-eye-lid': Ct.CtEyeLid,
  'ct-eye-iris': Ct.CtEyeIris,
  'ct-eye-shine': Ct.CtEyeShine,
  'ct-hair-skull': Ct.CtHairSkull,
  'ct-hair-clumps': Ct.CtHairClumps,
  'ct-hair-tips': Ct.CtHairTips,
  'ct-lineofaction': Ct.CtLineOfAction,
  'ct-masses': Ct.CtMasses,
  'ct-limbs': Ct.CtLimbs,
  'ct-headcounts': Ct.CtHeadCounts,
  'ct-hand-mitt': Ct.CtHandMitt,
  'ct-hand-fingers': Ct.CtHandFingers,
  'ct-expressions': Ct.CtExpressions,

  /* --- Track 3: style and shading --- */
  'st-flat': St.StFlat,
  'st-shadow': St.StShadow,
  'st-second': St.StSecondShadow,
  'st-hairlight': St.StHairLight,
  'st-rim': St.StRim,
  'st-celbuild': St.StCelBuild,
  'st-soft': St.StSoft,
  'st-hueshift': St.StHueShift,
  'st-edge': St.StEdgeCompare,
  'st-lineweight': St.StLineWeight,
  'st-styledial': St.StStyleDial,
  'st-keylight': St.StKeyLight,

  /* --- Track 4: the twelve principles --- */
  'pr-squash-bad': Pr.PrSquashBad,
  'pr-squash-good': Pr.PrSquashGood,
  'pr-antic-bad': Pr.PrAnticBad,
  'pr-antic-good': Pr.PrAnticGood,
  'pr-staging-bad': Pr.PrStagingBad,
  'pr-staging-good': Pr.PrStagingGood,
  'pr-straightahead': Pr.PrStraightAhead,
  'pr-posetopose': Pr.PrPoseToPose,
  'pr-follow-bad': Pr.PrFollowBad,
  'pr-follow-good': Pr.PrFollowGood,
  'pr-ease-bad': Pr.PrEaseBad,
  'pr-ease-good': Pr.PrEaseGood,
  'pr-arcs-bad': Pr.PrArcsBad,
  'pr-arcs-good': Pr.PrArcsGood,
  'pr-secondary': Pr.PrSecondary,
  'pr-timing-fast': Pr.PrTimingFast,
  'pr-timing-slow': Pr.PrTimingSlow,
  'pr-exagg-bad': Pr.PrExaggBad,
  'pr-exagg-good': Pr.PrExaggGood,
  'pr-solid-flat': Pr.PrSolidFlat,
  'pr-solid-form': Pr.PrSolidForm,
  'pr-appeal-bland': Pr.PrAppealBland,
  'pr-appeal-varied': Pr.PrAppealVaried,

  /* --- Track 5: advanced animation --- */
  'an-keys': An.AnKeys,
  'an-breakdown': An.AnBreakdown,
  'an-inbetween': An.AnInbetween,
  'an-chart': An.AnTimingChart,
  'an-onion': An.AnOnionSkin,
  'an-smear': An.AnSmear,
  'an-onestwos': An.AnOnesTwos,
  'an-walk': An.AnWalk,
  'an-arctrack': An.AnArcTrack,
  'an-loop': An.AnLoop,
  'an-multiples': An.AnMultiples,

  /* --- Composition --- */
  'cp-centered': Cp.CpCentered,
  'cp-thirds': Cp.CpThirds,
  'cp-leadinglines': Cp.CpLeadingLines,
  'cp-eyepath': Cp.CpEyePath,
  'cp-notan': Cp.CpNotan,
  'cp-threevalues': Cp.CpThreeValues,
  'cp-focal-flat': Cp.CpFocalFlat,
  'cp-focal-contrast': Cp.CpFocalContrast,
  'cp-depth': Cp.CpDepth,
  'cp-atmospheric': Cp.CpAtmospheric,
  'cp-shotsizes': Cp.CpShotSizes,
  'cp-angles': Cp.CpAngles,
  'cp-dutch': Cp.CpDutch,
  'cp-negative': Cp.CpNegativeSpace,
  'cp-balance': Cp.CpBalance,
  'cp-bigshape': Cp.CpBigShape,

  /* --- Cute characters and depth --- */
  'cd-babyschema': Cd.CdBabySchema,
  'cd-proportions': Cd.CdProportions,
  'cd-shapes': Cd.CdShapeLanguage,
  'cd-simplify': Cd.CdSimplify,
  'cd-expressions': Cd.CdExpressions,
  'cd-flat': Cd.CdFlat,
  'cd-form': Cd.CdForm,
  'cd-cel': Cd.CdCel,
  'cd-occlusion': Cd.CdOcclusion,
  'cd-bounce': Cd.CdBounce,
  'cd-highlight': Cd.CdHighlight,
  'cd-full': Cd.CdFull,
  'cd-sep-flat': Cd.CdSeparationFlat,
  'cd-sep-depth': Cd.CdSeparationDepth,
  'cd-polish': Cd.CdPolish,

  /* --- Cinematography --- */
  'cm-ladder': Cm.CmLadder,
  'cm-ews': Cm.CmExtremeWide,
  'cm-ws': Cm.CmWide,
  'cm-fs': Cm.CmFull,
  'cm-ms': Cm.CmMedium,
  'cm-mcu': Cm.CmMediumClose,
  'cm-cu': Cm.CmCloseUp,
  'cm-ecu': Cm.CmExtremeClose,
  'cm-low': Cm.CmLowAngle,
  'cm-eye': Cm.CmEyeLevel,
  'cm-high': Cm.CmHighAngle,
  'cm-birds': Cm.CmBirdsEye,
  'cm-dutch': Cm.CmDutch,
  'cm-pan': Cm.CmPan,
  'cm-tilt': Cm.CmTilt,
  'cm-dolly': Cm.CmDolly,
  'cm-crane': Cm.CmCrane,
  'cm-handheld': Cm.CmHandheld,
  'cm-tu': Cm.CmTrackUp,
  'cm-headroom-bad': Cm.CmHeadroomBad,
  'cm-headroom-good': Cm.CmHeadroomGood,
  'cm-leadroom-bad': Cm.CmLeadRoomBad,
  'cm-leadroom-good': Cm.CmLeadRoomGood,
  'cm-ots': Cm.CmOverShoulder,
  'cm-twoshot': Cm.CmTwoShot,
  'cm-180-good': Cm.Cm180Good,
  'cm-180-bad': Cm.Cm180Bad,
  'cm-eyeline': Cm.CmEyeline,
  'cm-sceneflow': Cm.CmSceneFlow,
  'cm-pillow': Cm.CmPillowShot,

  /* --- Emotional effects --- */
  'ef-neutral': Fx.FxNeutral,
  'ef-whiteout': Fx.FxWhiteout,
  'ef-rays': Fx.FxGodRays,
  'ef-speedlines': Fx.FxSpeedLines,
  'ef-focuslines': Fx.FxFocusLines,
  'ef-impact': Fx.FxImpactFrame,
  'ef-sparkle': Fx.FxSparkle,
  'ef-dread': Fx.FxDread,
  'ef-rage': Fx.FxRageField,
  'ef-despair': Fx.FxDespairField,
  'ef-screentone': Fx.FxScreentone,
  'ef-overloaded': Fx.FxOverloaded,
  'ef-restrained': Fx.FxRestrained,

  /* --- Colour and light --- */
  'cl-dials': Cl.ClDials,
  'cl-valuefirst': Cl.ClValueFirst,
  'cl-complementary': Cl.ClComplementary,
  'cl-analogous': Cl.ClAnalogous,
  'cl-triadic': Cl.ClTriadic,
  'cl-palette': Cl.ClPaletteRoles,
  'cl-lightlocal': Cl.ClLightVsLocal,
  'cl-formlight': Cl.ClFormLight,
  'cl-timeofday': Cl.ClTimeOfDay,
  'cl-satfocal': Cl.ClSaturationFocal,
  'cl-shadowhue': Cl.ClShadowHue,

  /* --- Perspective and backgrounds --- */
  'ps-eyelevel': Ps.PsEyeLevel,
  'ps-abovebelow': Ps.PsAboveBelow,
  'ps-cubes': Ps.PsCubes,
  'ps-ellipse': Ps.PsEllipsePersp,
  'ps-interior': Ps.PsInterior,
  'ps-figurescale': Ps.PsFigureScale,
  'ps-bglayers': Ps.PsBgLayers,
  'ps-clouds': Ps.PsClouds,
  'ps-bgdetail': Ps.PsBgDetail,

  /* --- Track 6: smart work --- */
  'wf-layers': Wf.WfLayers,
  'wf-limited': Wf.WfLimited,
  'wf-reuse': Wf.WfReuse,
  'wf-thumbnails': Wf.WfThumbnails,
  'wf-flip': Wf.WfFlip,
  'wf-detail': Wf.WfDetailBudget,
  'wf-shortcuts': Wf.WfShortcuts,
  'wf-canvassize': Wf.WfCanvasSize,
  'wf-versions': Wf.WfVersions,
  'wf-batch': Wf.WfBatch,
  'wf-reference': Wf.WfReference,
};

/** Renders a demo by key, or a visible placeholder if the key is wrong. */
export function Demo({ name }: { name: string }) {
  const Cmp = DEMOS[name];
  if (!Cmp) {
    return (
      <div style={{ color: '#ff6b6b', fontSize: 12, fontFamily: 'monospace', padding: 12 }}>
        missing demo: {name}
      </div>
    );
  }
  return <Cmp />;
}
