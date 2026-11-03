import { earlierExperience, majorExperience } from "@/content/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section className="border-t border-ink/12 bg-surface">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          id="experience"
          code="02"
          label="Experience"
          title="Four organizations, one operational thread"
          note="2017 — Present"
          lead="From commercial support into project planning and control, then procurement, document control and organizational development. Each role tightened a different part of the same system."
        />

        <div className="mt-16 space-y-16 lg:space-y-20">
          {majorExperience.map((role) => (
            <Reveal as="article" key={role.company} className="border-t border-ink/12 pt-8">
              <div className="grid gap-x-16 gap-y-6 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <span className="code-label">{role.period}</span>
                  <p className="mt-3 text-[0.8125rem] text-ink-3">{role.location}</p>
                  {role.current ? (
                    <p className="mt-3 inline-flex items-center gap-2 text-[0.75rem] text-ink-2">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ember" />
                      Current position
                    </p>
                  ) : null}
                </div>

                <div className="lg:col-span-9">
                  <h3 className="font-display text-[1.75rem] leading-[1.15] lg:text-[2.125rem]">
                    {role.company}
                  </h3>
                  <p className="mt-3 max-w-[54ch] text-[0.875rem] leading-[1.65] text-ink-2">
                    {role.roles.join(", ")}
                  </p>

                  <ul className="mt-7 border-y border-ink/12">
                    {role.achievements.map((achievement) => (
                      <li
                        key={achievement.title}
                        className="grid gap-x-8 gap-y-1.5 border-b border-ink/8 py-4 last:border-b-0 sm:grid-cols-12"
                      >
                        <h4 className="text-[0.875rem] font-medium leading-[1.55] text-ink sm:col-span-4">
                          {achievement.title}
                        </h4>
                        <p className="text-[0.875rem] leading-[1.7] text-ink-2 sm:col-span-8">
                          {achievement.detail}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-l-2 border-ember/70 pl-4">
                    <span className="code-label">Key impact</span>
                    <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-[1.7] text-ink-2">
                      {role.impact}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Earlier commercial roles, compact */}
        <div className="mt-20 border-t border-ink/12 pt-8">
          <div className="flex items-baseline justify-between gap-6">
            <span className="code-label">Earlier commercial roles</span>
            <span className="code-label hidden sm:block">2017 — 2020</span>
          </div>

          <ul className="mt-6">
            {earlierExperience.map((item) => (
              <li
                key={item.company}
                className="grid gap-x-8 gap-y-1 border-b border-ink/8 py-5 last:border-b-0 sm:grid-cols-12"
              >
                <h4 className="text-[0.9375rem] font-medium text-ink sm:col-span-3">
                  {item.company}
                </h4>
                <p className="text-[0.875rem] text-ink-2 sm:col-span-3">{item.role}</p>
                <p className="text-[0.875rem] leading-[1.7] text-ink-3 sm:col-span-4">
                  {item.line}
                </p>
                <span className="code-label whitespace-nowrap sm:col-span-2 sm:text-right">
                  {item.period}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
