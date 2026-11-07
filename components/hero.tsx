import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { identity } from "@/content/portfolio";
import { ControlBoard } from "@/components/control-board";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { PressLink } from "@/components/motion/press";
import { TypeLine } from "@/components/motion/type-line";
import { GravityTilt } from "./motion/gravity-tilt";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal className="max-w-[34rem]">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-ink/25" />
              <span className="code-label">{identity.location}</span>
            </div>

            <TypeLine
              as="h1"
              text={identity.name}
              delay={180}
              speed={42}
              className="mt-6 font-display text-[2.75rem] leading-[1.02] tracking-[-0.02em] sm:text-[3.5rem] lg:text-[4.25rem]"
            />

            <TypeLine
              as="p"
              text={identity.title}
              delay={180 + identity.name.length * 42 + 140}
              speed={20}
              className="mt-5 text-[1.0625rem] font-medium leading-snug text-ink sm:text-[1.1875rem]"
            />
            <p className="mt-2.5 text-[0.8125rem] leading-[1.6] text-ink-3">
              {identity.discipline}
            </p>

            <p className="mt-7 max-w-[46ch] border-t border-ink/12 pt-6 text-[0.9375rem] leading-[1.75] text-ink-2">
              {identity.positioning}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <PressLink
                  href={`mailto:${identity.email}`}
                  className="inline-flex h-11 items-center gap-2 rounded-[10px] bg-ink px-5 text-[0.875rem] font-medium text-paper transition-colors hover:bg-ink-soft"
                >
                  <Mail size={16} strokeWidth={1.5} aria-hidden />
                  {identity.email}
                </PressLink>
              </Magnetic>
              <PressLink
                href={`tel:${identity.phoneHref}`}
                className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-ink/15 bg-surface px-5 text-[0.875rem] font-medium text-ink transition-colors hover:border-ink/30 hover:bg-raised"
              >
                <Phone size={16} strokeWidth={1.5} aria-hidden />
                {identity.phone}
              </PressLink>
            </div>

            <a
              href="#experience"
              className="mt-8 inline-flex items-center gap-1.5 text-[0.8125rem] text-ink-2 hover:text-ink"
            >
              Review the full experience record
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />
            </a>

            <dl className="mt-10 grid gap-x-10 gap-y-4 border-t border-ink/12 pt-5 sm:grid-cols-2">
              <div>
                <dt className="code-label">Languages</dt>
                <dd className="mt-2 text-[0.8125rem] text-ink-2">
                  Persian (native) · English (professional)
                </dd>
              </div>
              <div>
                <dt className="code-label">Record</dt>
                <dd className="mt-2 text-[0.8125rem] text-ink-2">
                  Seven organizations, 2017 — present
                </dd>
              </div>
            </dl>
          </Reveal>
          <GravityTilt>
            <Reveal delay={0.08} weight="panel" className="lg:pl-4">
              <ControlBoard />
            </Reveal>
          </GravityTilt>
        </div>
      </div>
    </section>
  );
}
