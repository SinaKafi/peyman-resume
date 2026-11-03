import { education, training } from "@/content/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <section className="border-t border-ink/12 bg-surface">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          id="education"
          code="06"
          label="Education & training"
          title="Formal background, continued training"
          note="Degree and certifications"
          lead="Industrial management as the formal base, extended with project management, Microsoft Project and Scrum training."
        />

        <div className="mt-16 grid gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="code-label">Education</span>
            <div className="mt-5 border-t border-ink/12 pt-6">
              <h3 className="font-display text-[1.5rem] leading-[1.25] lg:text-[1.75rem]">
                {education.degree}
              </h3>
              <p className="mt-3 text-[0.875rem] text-ink-2">{education.institution}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="code-label">Training & professional development</span>
            <ul className="mt-5 border-t border-ink/12">
              {training.map((course, index) => (
                <Reveal
                  as="li"
                  key={course.name}
                  delay={index * 0.04}
                  className="grid gap-x-8 gap-y-1 border-b border-ink/8 py-4 sm:grid-cols-12"
                >
                  <span className="code-label sm:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[0.9375rem] leading-[1.55] text-ink sm:col-span-7">
                    {course.name}
                  </h3>
                  <span className="text-[0.8125rem] text-ink-3 sm:col-span-4 sm:text-right">
                    {course.provider}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
