/**
 * One physical family for the whole page.
 *
 * Each spring is a damped oscillator: it starts at rest, moves under a force,
 * and stops when it arrives. Amplitudes stay small (press 0.97, fall 8–14px,
 * magnet 6px, tilt 2.2°) so the interface reads as weighted, not alive.
 * Nothing loops.
 *
 * Damping ratios (ζ = damping / 2√(stiffness × mass)):
 *   press       ζ ≈ 0.94  — lands before the pointer lifts, no visible bounce
 *   settle      ζ ≈ 0.85  — small layout transitions, one ~5% overshoot
 *   fall        ζ ≈ 0.71  — a dropped block, one visible overshoot
 *   fallHeavy   ζ ≈ 0.68  — the hero plate, heavier and slower to land
 *   magnet      ζ ≈ 0.94  — pointer pull, settles without wobble
 *   tilt        ζ ≈ 0.89  — the plate under the pointer, no wobble
 */
export const springs = {
  press: { type: "spring", stiffness: 900, damping: 42, mass: 0.55 },
  settle: { type: "spring", stiffness: 280, damping: 26, mass: 0.85 },
  fall: { type: "spring", stiffness: 210, damping: 21, mass: 1.05 },
  fallHeavy: { type: "spring", stiffness: 150, damping: 19, mass: 1.3 },
  magnet: { type: "spring", stiffness: 260, damping: 24, mass: 0.7 },
  tilt: { type: "spring", stiffness: 170, damping: 22, mass: 0.9 },
} as const;

/** Opacity never overshoots — alpha runs on a curve, transforms on springs. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const pressDepth = {
  control: 0.972,
  row: 0.994,
} as const;

/** How far a block falls before it lands, in pixels. */
export const dropDistance = {
  text: 8,
  panel: 14,
} as const;

/** Pointer effects only run where a real cursor exists. */
export function hasFinePointer() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}
