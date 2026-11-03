import { methodologies, tools } from "@/content/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Tools() {
  return (
    <section className="border-t border-ink/12">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHeading
          id="tools"
          code="05"
          label="Tools & methodologies"
          title="The instruments behind the process"
          note="Applied in role"
          lead="Software used for planning, tracking and reporting, and the delivery frameworks applied alongside it."
        />

        <div className="mt-16 grid gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="code-label">Tools</span>
            <ul className="mt-5 grid border-t border-ink/12 sm:grid-cols-2">
              {tools.map((tool, index) => (
                <li
                  key={tool}
                  className="flex items-baseline gap-4 border-b border-ink/8 py-4 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
                >
                  <span className="code-label">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[0.9375rem] text-ink">{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <span className="code-label">Methodologies</span>
            <ul className="mt-5 border-t border-ink/12">
              {methodologies.map((method) => (
                <Reveal
                  as="li"
                  key={method.name}
                  className="border-b border-ink/8 py-4"
                >
                  <h3 className="font-display text-[1.25rem] leading-snug">
                    {method.name}
                  </h3>
                  <p className="mt-1.5 text-[0.875rem] leading-[1.65] text-ink-2">
                    {method.line}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
