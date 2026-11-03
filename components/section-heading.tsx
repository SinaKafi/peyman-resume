import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  code: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  note?: string;
};

export function SectionHeading({
  id,
  code,
  label,
  title,
  lead,
  note,
}: SectionHeadingProps) {
  return (
    <header id={id} className="scroll-mt-24">
      <div className="flex items-baseline justify-between gap-6 border-b border-ink/12 pb-3">
        <span className="code-label">
          {code}
          <span aria-hidden className="mx-2 text-ink-3/70">
            —
          </span>
          {label}
        </span>
        {note ? <span className="code-label hidden sm:block">{note}</span> : null}
      </div>

      <div className="mt-10 grid gap-x-16 gap-y-5 lg:grid-cols-12">
        <h2 className="font-display text-[1.875rem] leading-[1.12] sm:text-[2.25rem] lg:col-span-5 lg:text-[2.5rem]">
          {title}
        </h2>
        {lead ? (
          <div className="max-w-[52ch] text-[0.9375rem] leading-[1.7] text-ink-2 lg:col-span-6 lg:col-start-7 lg:text-base">
            {lead}
          </div>
        ) : null}
      </div>
    </header>
  );
}
