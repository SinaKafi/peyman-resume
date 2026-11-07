"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";
import { hasFinePointer, springs } from "./springs";

type MagneticProps = {
  children: ReactNode;
  /** Maximum distance the element travels toward the pointer, in px. */
  strength?: number;
  className?: string;
};

/**
 * Pulls exactly one primary action toward a fine pointer, at most `strength`
 * pixels, and springs it home on leave. Touch and reduced-motion visitors get
 * a wrapper that never moves.
 *
 * The rest box is captured on pointer enter rather than read on every move: a
 * per-move `getBoundingClientRect()` forces layout, and a live rect would
 * include this element's own transform and feed the offset back into itself.
 */
export function Magnetic({ children, strength = 6, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const box = useRef<DOMRect | null>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springs.magnet);
  const springY = useSpring(y, springs.magnet);

  useEffect(() => {
    const reset = () => {
      box.current = null;
      x.set(0);
      y.set(0);
    };

    window.addEventListener("scroll", reset, { passive: true });
    window.addEventListener("resize", reset);
    window.addEventListener("blur", reset);

    return () => {
      window.removeEventListener("scroll", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("blur", reset);
    };
  }, [x, y]);

  function handleEnter(event: PointerEvent<HTMLSpanElement>) {
    if (reduce || !hasFinePointer()) return;
    box.current = event.currentTarget.getBoundingClientRect();
  }

  function handleMove(event: PointerEvent<HTMLSpanElement>) {
    if (reduce || !hasFinePointer()) return;

    const rect = box.current;
    if (!rect) return;

    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    const reach = 28;

    // Normalised offset inside a box 28px wider than the control, clamped ±1.
    const dx = (event.clientX - (rect.left + halfWidth)) / (halfWidth + reach);
    const dy = (event.clientY - (rect.top + halfHeight)) / (halfHeight + reach);

    x.set(Math.max(-1, Math.min(1, dx)) * strength);
    y.set(Math.max(-1, Math.min(1, dy)) * strength);
  }

  function handleLeave() {
    box.current = null;
    x.set(0);
    y.set(0);
  }

  return (
    <m.span
      ref={ref}
      onPointerEnter={handleEnter}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={className}
      style={{ x: springX, y: springY, display: "inline-block" }}
    >
      {children}
    </m.span>
  );
}
