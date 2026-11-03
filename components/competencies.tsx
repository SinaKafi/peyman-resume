import { competencies } from "@/content/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Competencies() {
  return (
    <section className="border-t border-ink/12 bg-surface">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          id="competencies"
          code="04"
          label="Core competencies"
          title="Eight groups, grouped by discipline"
          note="No ratings, no percentages"
          lead="Competencies are listed as practised areas rather than scored skills. Each group maps to work carried out across the roles above."
        />

        <div className="mt-16 grid gap-x-16 lg:grid-cols-2">
          {competencies.map((group, index) => (
            <Reveal
              key={group.code}
              delay={(index % 2) * 0.05}
              className="border-t border-ink/12 py-7"
            >
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="font-display text-[1.3125rem] leading-snug">
                  {group.title}
                </h3>
                <span className="code-label">{group.code}</span>
              </div>
              <p className="mt-4 text-[0.875rem] leading-[1.7] text-ink-2">
                {group.items.join(", ")}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
