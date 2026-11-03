import { focusAreas, languages, profile } from "@/content/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Overview() {
  return (
    <section className="border-t border-ink/12">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          id="overview"
          code="01"
          label="Overview"
          title="The operational surfaces I keep in order"
          note="Focus areas 01 — 06"
          lead={
            <>
              <p>{profile.lead}</p>
              {profile.body.map((paragraph) => (
                <p key={paragraph} className="mt-4">
                  {paragraph}
                </p>
              ))}
            </>
          }
        />

        <ul className="mt-16 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
          {focusAreas.map((area, index) => (
            <Reveal as="li" key={area.code} delay={index * 0.04} className="border-t border-ink/12 py-6">
              <span className="code-label">{area.code}</span>
              <h3 className="mt-4 font-display text-[1.375rem] leading-[1.25]">
                {area.title}
              </h3>
              <p className="mt-2.5 text-[0.875rem] leading-[1.7] text-ink-2">
                {area.line}
              </p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink/12 pt-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-12">
          <span className="code-label">Languages</span>
          <ul className="flex flex-wrap gap-x-10 gap-y-2">
            {languages.map((language) => (
              <li key={language.name} className="flex items-baseline gap-3 text-[0.875rem]">
                <span className="text-ink">{language.name}</span>
                <span className="text-ink-3">{language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
