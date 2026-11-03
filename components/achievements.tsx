import { achievements } from "@/content/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { EvaluationFramework } from "@/components/evaluation-framework";
import { Reveal } from "@/components/reveal";

export function Achievements() {
  return (
    <section className="border-t border-ink/12">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          id="achievements"
          code="03"
          label="Selected achievements"
          title="What changed, and where it landed"
          note="Register A-01 — A-08"
          lead="Eight contributions that changed how work is assigned, procured, documented or measured. Each one closed a gap between how a process was described and how it actually ran."
        />

        <ul className="mt-16 border-t border-ink/12">
          {achievements.map((item, index) => (
            <Reveal
              as="li"
              key={item.code}
              delay={index * 0.03}
              className="grid gap-x-8 gap-y-2 border-b border-ink/8 py-6 sm:grid-cols-12"
            >
              <span className="code-label sm:col-span-1">{item.code}</span>
              <h3 className="text-[1rem] font-medium leading-[1.5] text-ink sm:col-span-4">
                {item.title}
              </h3>
              <p className="text-[0.875rem] leading-[1.7] text-ink-2 sm:col-span-5">
                {item.detail}
              </p>
              <span className="text-[0.75rem] leading-[1.6] text-ink-3 sm:col-span-2 sm:text-right">
                {item.scope}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20">
          <EvaluationFramework />
        </Reveal>
      </div>
    </section>
  );
}
