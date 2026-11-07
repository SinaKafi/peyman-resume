"use client";

import { useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type TypeLineProps = {
  text: string;
  as?: "h1" | "p";
  className?: string;
  /** Milliseconds per character. */
  speed?: number;
  /** Milliseconds before the first character appears. */
  delay?: number;
};

/**
 * Types one line in place.
 *
 * Three copies of the text exist:
 *  - an invisible copy in normal flow, which reserves the final line height
 *    and line breaks so nothing below the line moves while typing;
 *  - an absolutely positioned live copy, typed one character at a time;
 *  - an `sr-only` copy, which is the only one exposed to assistive tech.
 *
 * The live copy starts empty on the server, so hydration is clean and the
 * final text never flashes before it is typed. Reduced-motion visitors get the
 * final text before first paint, and the `noscript` release in the root layout
 * turns the visible fallback copy on when script never runs.
 */
export function TypeLine({
  text,
  as = "p",
  className,
  speed = 28,
  delay = 0,
}: TypeLineProps) {
  const typed = useRef<HTMLSpanElement>(null);
  const caret = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const Tag = as;

  useLayoutEffect(() => {
    const node = typed.current;
    if (!node) return;
    const marker = caret.current;

    const instant =
      reduce ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (instant) {
      node.textContent = text;
      if (marker) marker.style.opacity = "0";
      return;
    }

    node.textContent = "";

    let interval = 0;
    let index = 0;

    const start = window.setTimeout(() => {
      // The caret appears only when this line starts, so a waiting line does
      // not show a stray bar beside the line that is currently typing.
      if (marker) marker.style.opacity = "1";

      interval = window.setInterval(() => {
        index += 1;
        node.textContent = text.slice(0, index);

        if (index >= text.length) {
          window.clearInterval(interval);
          if (marker) marker.style.opacity = "0";
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [delay, reduce, speed, text]);

  return (
    <Tag className={`relative ${className ?? ""}`}>
      <span aria-hidden data-type-fallback className="invisible block">
        {text}
      </span>
      <span aria-hidden data-type-live className="absolute inset-0 block">
        <span ref={typed} />
        <span
          ref={caret}
          aria-hidden
          className="ml-0.5 inline-block h-[0.8em] w-0.5 translate-y-[0.04em] bg-ember align-baseline opacity-0 transition-opacity duration-300 motion-reduce:hidden"
        />
      </span>
      <span className="sr-only">{text}</span>
    </Tag>
  );
}
