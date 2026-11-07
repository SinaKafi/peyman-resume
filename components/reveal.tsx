"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { dropDistance, EASE, springs } from "@/components/motion/springs";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
  /** `panel` gives the one rendered moment a heavier, longer fall. */
  weight?: "card" | "panel";
};

/**
 * One entrance, used the same way everywhere: the block is dropped from just
 * above its resting place and lands on a gravity spring with a single small
 * overshoot, plus a short fade.
 *
 * The fade is a tween on purpose — opacity that overshoots only clamps, and a
 * spring on alpha makes the block arrive before it has finished appearing.
 *
 * Reduced motion is released in CSS (`[data-enter]`, globals.css) rather than
 * by branching the tree: the static export bakes `opacity: 0` into the HTML,
 * and a JS-only branch would leave the page blank for those visitors.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  weight = "card",
}: RevealProps) {
  const Tag = m[as];
  const isPanel = weight === "panel";
  const spring = isPanel ? springs.fallHeavy : springs.fall;
  const distance = isPanel ? dropDistance.panel : dropDistance.text;

  return (
    <Tag
      data-enter
      className={className}
      initial={{ opacity: 0, y: -distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{
        y: { ...spring, delay },
        opacity: { duration: 0.32, ease: EASE, delay },
      }}
    >
      {children}
    </Tag>
  );
}
