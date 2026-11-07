"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * One motion policy for the whole page.
 *
 * `LazyMotion` + `domAnimation` keeps only the features used here (entrances,
 * gestures, exit) in the bundle, and `strict` makes an accidental `motion.*`
 * import fail in development instead of silently pulling in the full build.
 *
 * `reducedMotion="user"` makes Framer skip transform and layout animations for
 * visitors who asked for less motion; the CSS release in globals.css covers
 * the styles the static export bakes into the HTML.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
