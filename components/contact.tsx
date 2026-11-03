import { ArrowUpRight, MapPin } from "lucide-react";
import { identity, languages } from "@/content/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section className="border-t border-ink/12">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          id="contact"
          code="07"
          label="Contact"
          title="Direct contact"
          note={identity.location}
          lead="Email or call directly. For roles in operations, project control and procurement, the details below are the fastest route."
        />

        <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <a
              href={`mailto:${identity.email}`}
              className="group block border-t border-ink/12 pt-6"
            >
              <span className="code-label">Email</span>
              <span className="mt-3 flex items-baseline gap-3 font-display text-[1.5rem] leading-tight transition-colors group-hover:text-ember sm:text-[2rem]">
                {identity.email}
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden
                  className="shrink-0 translate-y-0.5 text-ink-3 transition-[transform,color] group-hover:-translate-y-0.5 group-hover:text-ember"
                />
              </span>
            </a>

            <a
              href={`tel:${identity.phoneHref}`}
              className="group mt-10 block border-t border-ink/12 pt-6"
            >
              <span className="code-label">Phone</span>
              <span className="mt-3 block font-display text-[1.5rem] leading-tight transition-colors group-hover:text-ember sm:text-[2rem]">
                <span dir="ltr" className="inline-block">
                  {identity.phone}
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-5">
            <dl className="border-t border-ink/12">
              <div className="flex items-baseline justify-between gap-6 border-b border-ink/8 py-4">
                <dt className="code-label flex items-center gap-2">
                  <MapPin size={16} strokeWidth={1.5} aria-hidden />
                  Location
                </dt>
                <dd className="text-[0.875rem] text-ink-2">{identity.location}</dd>
              </div>
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-baseline justify-between gap-6 border-b border-ink/8 py-4"
                >
                  <dt className="code-label">{language.name}</dt>
                  <dd className="text-[0.875rem] text-ink-2">{language.level}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
