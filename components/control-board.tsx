import { identity } from "@/content/portfolio";

/**
 * The one rendered moment on the page: a control register of the actual
 * operational surfaces Mohammad works on — planning, procurement,
 * workflow and document control. Drawn in code, no invented figures.
 */

const plan = [
  { label: "Initiation", span: 26, state: "done" as const },
  { label: "Execution", span: 52, state: "current" as const },
  { label: "Handover", span: 22, state: "next" as const },
];

const procurement = [
  { label: "Requirements identification", state: "done" as const },
  { label: "Purchase request", state: "done" as const },
  { label: "Supplier coordination", state: "current" as const },
  { label: "Status tracking", state: "next" as const },
];

const workflow = [
  { label: "Backlog", detail: "Prioritized tasks" },
  { label: "In progress", detail: "Owned and tracked" },
  { label: "Review", detail: "Verified before close" },
  { label: "Done", detail: "Recorded" },
];

const documentControl = [
  "Registration",
  "Classification",
  "Numbering",
  "Circulation",
  "Archiving",
];

function StateDot({ state }: { state: "done" | "current" | "next" }) {
  if (state === "current") {
    return (
      <span
        aria-hidden
        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ember-soft"
      />
    );
  }
  return (
    <span
      aria-hidden
      className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${
        state === "done" ? "bg-deep-3-text/70" : "border border-deep-3-text/50"
      }`}
    />
  );
}

export function ControlBoard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-deep-3/60 bg-deep p-5 shadow-[0_18px_40px_-24px_rgba(18,17,15,0.5)] sm:p-6">
      {/* header */}
      <div className="flex items-center justify-between gap-4 border-b border-deep-3 pb-4">
        <div className="flex items-baseline gap-2.5">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ember-soft" />
          <span className="text-[0.8125rem] font-medium text-deep-text">
            Operations control
          </span>
        </div>
        <span className="code-label-deep">{identity.location} · 2026</span>
      </div>

      {/* main element: plan across the project cycle */}
      <div className="pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <span className="code-label-deep">Project cycle</span>
          <span className="code-label-deep">Planning · control</span>
        </div>

        <div className="mt-4 flex h-9 overflow-hidden rounded-md border border-deep-3">
          {plan.map((phase) => (
            <div
              key={phase.label}
              style={{ width: `${phase.span}%` }}
              className={`flex items-center border-r border-deep-3 px-2.5 last:border-r-0 ${
                phase.state === "current"
                  ? "bg-ember/85"
                  : phase.state === "done"
                    ? "bg-deep-3"
                    : "bg-deep-2"
              }`}
            >
              <span
                className={`truncate text-[0.6875rem] tracking-[0.02em] ${
                  phase.state === "current"
                    ? "text-[#fdf3ec]"
                    : phase.state === "done"
                      ? "text-deep-2-text"
                      : "text-deep-3-text"
                }`}
              >
                {phase.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-baseline justify-between">
          <span className="code-label-deep">Initiation</span>
          <span className="code-label-deep">Handover</span>
        </div>
      </div>

      {/* supporting blocks */}
      <div className="mt-6 grid gap-x-8 gap-y-6 border-t border-deep-3 pt-5 sm:grid-cols-2">
        <div>
          <span className="code-label-deep">Procurement flow</span>
          <ul className="mt-3 space-y-2">
            {procurement.map((step) => (
              <li key={step.label} className="flex gap-3">
                <StateDot state={step.state} />
                <span
                  className={`text-[0.75rem] leading-[1.4] ${
                    step.state === "current"
                      ? "text-deep-text"
                      : step.state === "done"
                        ? "text-deep-2-text"
                        : "text-deep-3-text"
                  }`}
                >
                  {step.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="code-label-deep">Workflow · Scrum-ban</span>
          <ul className="mt-3 space-y-2">
            {workflow.map((column) => (
              <li key={column.label} className="flex items-baseline justify-between gap-3">
                <span className="text-[0.75rem] leading-[1.4] text-deep-2-text">
                  {column.label}
                </span>
                <span className="text-[0.75rem] leading-[1.4] text-deep-3-text">
                  {column.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* register strip */}
      <div className="mt-6 border-t border-deep-3 pt-4">
        <div className="flex items-baseline justify-between gap-4">
          <span className="code-label-deep">Document control</span>
          <span className="code-label-deep">Register · retain · retrieve</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {documentControl.map((step, index) => (
            <span
              key={step}
              className="flex items-baseline gap-2 text-[0.75rem] text-deep-2-text"
            >
              <span className="text-[0.6875rem] text-deep-3-text">
                {String(index + 1).padStart(2, "0")}
              </span>
              {step}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
