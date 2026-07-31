/**
 * Stroke maths for the practice canvas.
 *
 * Everything here works on raw pointer polylines in canvas-space pixels and
 * returns a 0-100 score, so the exercises can stay declarative.
 */

export interface Pt {
  x: number;
  y: number;
}

export const dist = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y);

export const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

/** Map a "how bad is it" ratio into a 0-100 score with a soft tail. */
export const ratioScore = (deviation: number, tolerance: number) =>
  Math.round(100 * clamp01(1 - deviation / tolerance));

export function polylineLength(pts: Pt[]): number {
  let t = 0;
  for (let i = 1; i < pts.length; i++) t += dist(pts[i - 1], pts[i]);
  return t;
}

export function centroid(pts: Pt[]): Pt {
  let x = 0;
  let y = 0;
  for (const p of pts) {
    x += p.x;
    y += p.y;
  }
  return { x: x / pts.length, y: y / pts.length };
}

/** Evenly re-space a stroke by arc length so comparisons are fair. */
export function resample(pts: Pt[], n: number): Pt[] {
  if (pts.length === 0) return [];
  if (pts.length === 1) return Array.from({ length: n }, () => pts[0]);

  const total = polylineLength(pts);
  if (total === 0) return Array.from({ length: n }, () => pts[0]);

  const step = total / (n - 1);
  const out: Pt[] = [pts[0]];
  let carried = 0;
  let prev = pts[0];
  let i = 1;

  while (out.length < n && i < pts.length) {
    const seg = dist(prev, pts[i]);
    if (carried + seg >= step && seg > 0) {
      const t = (step - carried) / seg;
      const next = {
        x: prev.x + (pts[i].x - prev.x) * t,
        y: prev.y + (pts[i].y - prev.y) * t,
      };
      out.push(next);
      prev = next;
      carried = 0;
    } else {
      carried += seg;
      prev = pts[i];
      i++;
    }
  }
  while (out.length < n) out.push(pts[pts.length - 1]);
  return out;
}

/** Perpendicular distance from p to the infinite line through a and b. */
export function perpDist(p: Pt, a: Pt, b: Pt): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  if (len === 0) return dist(p, a);
  return Math.abs(dy * p.x - dx * p.y + b.x * a.y - b.y * a.x) / len;
}

/**
 * How straight a stroke is, judged against its own chord.
 * Pros land under 0.5% deviation; 3% is where a line starts to look nervous.
 */
export function straightness(pts: Pt[]): number {
  if (pts.length < 3) return 0;
  const a = pts[0];
  const b = pts[pts.length - 1];
  const chord = dist(a, b);
  if (chord < 8) return 0;

  const s = resample(pts, 48);
  let sum = 0;
  for (const p of s) sum += perpDist(p, a, b);
  return ratioScore(sum / s.length / chord, 0.03);
}

/**
 * Total turning along a stroke, in radians. A clean line is near 0; a clean
 * closed ellipse is near 2π. Anything beyond that is wobble.
 */
export function turning(pts: Pt[]): number {
  const s = resample(pts, 44);
  let total = 0;
  for (let i = 2; i < s.length; i++) {
    const a1 = Math.atan2(s[i - 1].y - s[i - 2].y, s[i - 1].x - s[i - 2].x);
    const a2 = Math.atan2(s[i].y - s[i - 1].y, s[i].x - s[i - 1].x);
    let d = a2 - a1;
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    total += Math.abs(d);
  }
  return total;
}

/** Penalise turning beyond what the shape actually requires. */
export function smoothness(pts: Pt[], idealTurn: number): number {
  const excess = Math.max(0, turning(pts) - idealTurn);
  return ratioScore(excess, idealTurn > 0 ? idealTurn * 0.65 : 1.3);
}

export interface EllipseT {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

/** Mean normalised radial error against a known ellipse. */
export function ellipseFit(pts: Pt[], e: EllipseT): number {
  const s = resample(pts, 64);
  let sum = 0;
  for (const p of s) {
    const r = Math.hypot((p.x - e.cx) / e.rx, (p.y - e.cy) / e.ry);
    sum += Math.abs(r - 1);
  }
  return ratioScore(sum / s.length, 0.14);
}

/** How well a loop closes, relative to its own size. */
export function closure(pts: Pt[]): number {
  const perim = polylineLength(pts);
  if (perim < 20) return 0;
  return ratioScore(dist(pts[0], pts[pts.length - 1]) / perim, 0.1);
}

/** Radius consistency around the centroid — used when there is no target. */
export function roundness(pts: Pt[]): number {
  const s = resample(pts, 64);
  const c = centroid(s);
  const radii = s.map((p) => dist(p, c));
  const mean = radii.reduce((a, b) => a + b, 0) / radii.length;
  if (mean < 10) return 0;
  const variance = radii.reduce((a, r) => a + (r - mean) ** 2, 0) / radii.length;
  return ratioScore(Math.sqrt(variance) / mean, 0.14);
}

/** Distance from a stroke endpoint to the dot it was aiming at. */
export function hitScore(p: Pt, target: Pt, tolerancePx = 26): number {
  return ratioScore(dist(p, target), tolerancePx);
}

/** Closest approach of a stroke to a point — for "pass through this dot". */
export function passScore(pts: Pt[], target: Pt, tolerancePx = 26): number {
  const s = resample(pts, 90);
  let best = Infinity;
  for (const p of s) best = Math.min(best, dist(p, target));
  return ratioScore(best, tolerancePx);
}

/** Mean point-to-point difference between repeated strokes. */
export function consistency(strokes: Pt[][]): number {
  if (strokes.length < 2) return 0;
  const rs = strokes.map((s) => resample(s, 24));
  let sum = 0;
  let n = 0;
  for (let i = 0; i < rs.length; i++) {
    for (let j = i + 1; j < rs.length; j++) {
      for (let k = 0; k < 24; k++) {
        sum += dist(rs[i][k], rs[j][k]);
        n++;
      }
    }
  }
  return ratioScore(sum / n, 26);
}

/** Chord angle of a stroke, folded to [0, π). */
export function strokeAngle(pts: Pt[]): number {
  const a = pts[0];
  const b = pts[pts.length - 1];
  let ang = Math.atan2(b.y - a.y, b.x - a.x);
  if (ang < 0) ang += Math.PI;
  if (ang >= Math.PI) ang -= Math.PI;
  return ang;
}

/** Circular spread of hatch angles. */
export function parallelism(strokes: Pt[][]): number {
  if (strokes.length < 2) return 0;
  const angles = strokes.map(strokeAngle);
  // Double the angle so 0 and π (the same direction) average correctly.
  let sx = 0;
  let sy = 0;
  for (const a of angles) {
    sx += Math.cos(2 * a);
    sy += Math.sin(2 * a);
  }
  const r = Math.hypot(sx, sy) / angles.length;
  const spread = Math.sqrt(Math.max(0, -2 * Math.log(Math.max(r, 1e-6)))) / 2;
  return ratioScore(spread, 0.22);
}

/** Evenness of the gaps between hatch lines. */
export function spacingEvenness(strokes: Pt[][]): number {
  if (strokes.length < 3) return 0;
  const angles = strokes.map(strokeAngle);
  const mean = angles.reduce((a, b) => a + b, 0) / angles.length;
  // Project each stroke's midpoint onto the normal of the mean direction.
  const nx = -Math.sin(mean);
  const ny = Math.cos(mean);
  const proj = strokes
    .map((s) => {
      const m = centroid(s);
      return m.x * nx + m.y * ny;
    })
    .sort((a, b) => a - b);

  const gaps: number[] = [];
  for (let i = 1; i < proj.length; i++) gaps.push(Math.abs(proj[i] - proj[i - 1]));
  const g = gaps.reduce((a, b) => a + b, 0) / gaps.length;
  if (g < 2) return 0;
  const v = gaps.reduce((a, x) => a + (x - g) ** 2, 0) / gaps.length;
  return ratioScore(Math.sqrt(v) / g, 0.5);
}

/** Average a set of sub-scores with weights. */
export function weighted(parts: Array<[number, number]>): number {
  const total = parts.reduce((a, [, w]) => a + w, 0);
  return Math.round(parts.reduce((a, [v, w]) => a + v * w, 0) / total);
}
