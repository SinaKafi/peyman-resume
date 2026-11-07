"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { identity, sections } from "@/content/portfolio";
import { PressButton, PressLink } from "@/components/motion/press";
import { dropDistance, EASE, springs } from "@/components/motion/springs";
import { Magnetic } from "./motion/magnetic";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: [0, 0.15, 0.4] },
    );

    sections.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/12 bg-paper">
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[0.9375rem] font-medium tracking-[-0.005em] text-ink"
        >
          <span aria-hidden className="h-3.5 w-[3px] rounded-[1px] bg-ember" />
          {identity.name}
        </a>

        <nav
          aria-label="Sections"
          className="hidden items-center gap-7 md:flex"
        >
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative text-[0.8125rem] leading-none ${
                  isActive ? "text-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {section.label}
                <span
                  aria-hidden
                  className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-ember transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Magnetic>
            <PressLink
              href={`mailto:${identity.email}`}
              className="hidden h-9 items-center rounded-lg border border-ink/15 bg-surface px-4 text-[0.8125rem] font-medium text-ink hover:border-ink/25 hover:bg-raised sm:inline-flex"
            >
              Email
            </PressLink>
          </Magnetic>

          <PressButton
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink/15 text-ink-2 hover:text-ink md:hidden"
          >
            {open ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <Menu size={18} strokeWidth={1.5} />
            )}
          </PressButton>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <m.nav
            id="mobile-menu"
            aria-label="Sections"
            initial={reduce ? false : { opacity: 0, y: -dropDistance.text }}
            animate={{ opacity: 1, y: 0 }}
            exit={
              reduce ? { opacity: 0 } : { opacity: 0, y: -dropDistance.text }
            }
            transition={{
              y: { ...springs.fall },
              opacity: { duration: 0.24, ease: EASE },
            }}
            className="border-t border-ink/12 bg-paper md:hidden"
          >
            <ul className="mx-auto w-full max-w-[1240px] px-5 py-2 sm:px-8">
              {sections.map((section) => (
                <li
                  key={section.id}
                  className="border-b border-ink/8 last:border-b-0"
                >
                  <a
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 py-3.5 text-[0.9375rem] text-ink-2 hover:text-ink"
                  >
                    <span className="code-label">{section.code}</span>
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
