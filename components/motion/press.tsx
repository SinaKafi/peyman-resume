"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ComponentProps } from "react";
import { pressDepth, springs } from "./springs";

type PressLinkProps = {
  /**
   * How far the surface gives under the pointer. Controls take the default;
   * full-width rows must use `pressDepth.row`, because 0.972 on a 700px row
   * would pull ~20px off each edge.
   */
  scale?: number;
} & ComponentProps<typeof m.a>;

type PressButtonProps = {
  scale?: number;
} & ComponentProps<typeof m.button>;

/**
 * A pointer-down that reads as weight: fast on the way down, a spring on the
 * way back. Under reduced motion the control simply does not move.
 */
export function PressLink({ scale = pressDepth.control, ...props }: PressLinkProps) {
  const reduce = useReducedMotion();

  return (
    <m.a
      {...props}
      whileTap={reduce ? undefined : { scale }}
      transition={springs.press}
    />
  );
}

export function PressButton({ scale = pressDepth.control, ...props }: PressButtonProps) {
  const reduce = useReducedMotion();

  return (
    <m.button
      {...props}
      whileTap={reduce ? undefined : { scale }}
      transition={springs.press}
    />
  );
}
