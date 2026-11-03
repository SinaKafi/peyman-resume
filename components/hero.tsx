import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { identity } from "@/content/portfolio";
import { ControlBoard } from "@/components/control-board";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal className="max-w-[34rem]">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-ink/25" />
              <span className="code-label">{identity.location}</span>
            </div>

            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] tracking-[-0.02em] sm:text-[3.5rem] lg:text-[4.25rem]">
              {identity.name}
            </h1>

            <p className="mt-5 text-[1.0625rem] font-medium leading-snug text-ink sm:text-[1.1875rem]">
              {identity.title}
            </p>
            <p className="mt-2.5 text-[0.8125rem] leading-[1.6] text-ink-3">
              {identity.discipline}
            </p>

            <p className="mt-7 max-w-[46ch] border-t border-ink/12 pt-6 text-[0.9375rem] leading-[1.75] text-ink-2">
              {identity.positioning}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-[10px] bg-ink px-5 text-[0.875rem] font-medium text-paper transition-colors hover:bg-ink-soft active:scale-[0.99]"
              >
                <Mail size={16} strokeWidth={1.5} aria-hidden />
                {identity.email}
              </a>
              <a
                href={`tel:${identity.phoneHref}`}
                className="inline-flex h-11 items-center gap-2 rounded-[10px] border border-ink/15 bg-surface px-5 text-[0.875rem] font-medium text-ink transition-colors hover:border-ink/30 hover:bg-raised"
              >
                <Phone size={16} strokeWidth={1.5} aria-hidden />
                {identity.phone}
              </a>
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

          <Reveal delay={0.08} className="lg:pl-4">
            <ControlBoard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
