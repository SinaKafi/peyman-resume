"use client";

import { m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";
import { hasFinePointer, springs, tiltLimit } from "./springs";

type TiltPlateProps = {
  children: ReactNode;
  className?: string;
  /** Maximum lean toward the pointer, in degrees. */
  max?: number;
};

/**
 * The rendered plate behaves like a card on a desk: it leans a couple of
 * degrees toward a fine pointer and springs flat when the pointer leaves.
 *
 * The rest box is captured on pointer enter rather than read on every move —
 * this element's own rotation changes its bounding rect, so measuring live
 * would feed the lean back into itself. Touch and reduced-motion visitors get
 * a wrapper that never transforms.
 */
export function TiltPlate({
  children,
  className,
  max = tiltLimit,
}: TiltPlateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const box = useRef<DOMRect | null>(null);
  const reduce = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const lift = useMotionValue(0);

  const springX = useSpring(rotateX, springs.tilt);
  const springY = useSpring(rotateY, springs.tilt);
  const springLift = useSpring(lift, springs.tilt);

  useEffect(() => {
    const reset = () => {
      box.current = null;
      rotateX.set(0);
      rotateY.set(0);
      lift.set(0);
    };

    window.addEventListener("scroll", reset, { passive: true });
    window.addEventListener("resize", reset);
    window.addEventListener("blur", reset);

    return () => {
      window.removeEventListener("scroll", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("blur", reset);
    };
  }, [lift, rotateX, rotateY]);

  function handleEnter(event: PointerEvent<HTMLDivElement>) {
    if (reduce || !hasFinePointer()) return;
    box.current = event.currentTarget.getBoundingClientRect();
  }

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || !hasFinePointer()) return;

    const rect = box.current;
    if (!rect) return;

    // −0.5 to 0.5 across each axis, so the centre is flat.
    const dx = (event.clientX - rect.left) / rect.width - 0.5;
    const dy = (event.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(dx * max * 2);
    rotateX.set(-dy * max * 2);
    lift.set(-2);
  }

  function handleLeave() {
    box.current = null;
    rotateX.set(0);
    rotateY.set(0);
    lift.set(0);
  }

  return (
    <m.div
      ref={ref}
      onPointerEnter={handleEnter}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        y: springLift,
        transformPerspective: 1400,
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}
