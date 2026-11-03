const tiers = [
  {
    code: "01",
    name: "Holding level",
    line: "Goals set once, at holding level",
  },
  {
    code: "02",
    name: "Business units",
    line: "Units measured the same way",
  },
  {
    code: "03",
    name: "Subsidiaries",
    line: "Results reported back for evaluation",
  },
];

/**
 * A line drawing of the holding-wide evaluation framework:
 * one goal spine distributing into units and reporting back.
 */
export function EvaluationFramework() {
  return (
    <figure className="border-t border-ink/12 pt-6">
      <figcaption className="code-label">
        Evaluation framework · holding to subsidiary
      </figcaption>

      {/* Drawing, from small screens up */}
      <div className="hidden sm:block">
        <svg
          viewBox="0 0 660 172"
          role="img"
          aria-label="Diagram: a goal spine connects the holding level to business units, subsidiaries and consolidated reporting."
          className="mt-6 h-auto w-full max-w-[720px]"
        >
          {/* goal spine */}
          <line x1="90" y1="26" x2="570" y2="26" className="stroke-ink/25" strokeWidth="1" />
          <line x1="90" y1="26" x2="90" y2="58" className="stroke-ink/25" strokeWidth="1" />
          <line x1="330" y1="26" x2="330" y2="58" className="stroke-ink/40" strokeWidth="1" />
          <line x1="570" y1="26" x2="570" y2="58" className="stroke-ink/25" strokeWidth="1" />

          <circle cx="90" cy="26" r="2.5" className="fill-ink/30" />
          <circle cx="330" cy="26" r="3" className="fill-ember" />
          <circle cx="570" cy="26" r="2.5" className="fill-ink/30" />

          <text x="330" y="14" textAnchor="middle" className="fill-ink-3 text-[11px]">
            Goal spine
          </text>

          {/* tiers */}
          {tiers.map((tier, index) => {
            const x = index * 240;
            const emphasized = index === 1;
            return (
              <g key={tier.code}>
                <rect
                  x={x}
                  y={58}
                  width="180"
                  height="64"
                  rx="10"
                  className={
                    emphasized ? "fill-raised stroke-ember/50" : "fill-surface stroke-ink/20"
                  }
                  strokeWidth="1"
                />
                <text x={x + 16} y="82" className="fill-ink-3 text-[11px]">
                  {tier.code}
                </text>
                <text
                  x={x + 16}
                  y="104"
                  className={emphasized ? "fill-ink text-[14px]" : "fill-ink-2 text-[14px]"}
                >
                  {tier.name}
                </text>

                {index < tiers.length - 1 ? (
                  <g>
                    <line
                      x1={x + 180}
                      y1="90"
                      x2={x + 240}
                      y2="90"
                      className="stroke-ink/25"
                      strokeWidth="1"
                    />
                    <circle cx={x + 210} cy="90" r="2" className="fill-ink/30" />
                  </g>
                ) : null}
              </g>
            );
          })}

          {/* reporting return */}
          <path
            d="M570 138 L570 152 L330 152 L330 138"
            fill="none"
            className="stroke-ink/20"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          <text x="450" y="166" textAnchor="middle" className="fill-ink-3 text-[11px]">
            Consolidated reporting
          </text>
        </svg>

        <ul className="mt-6 grid max-w-[720px] gap-x-10 gap-y-3 border-t border-ink/8 pt-5 sm:grid-cols-3">
          {tiers.map((tier) => (
            <li key={tier.code} className="text-[0.8125rem] leading-[1.6] text-ink-2">
              {tier.line}
            </li>
          ))}
        </ul>
      </div>

      {/* The same structure, stacked, where a drawing would shrink too far */}
      <ol className="mt-5 border-t border-ink/12 sm:hidden">
        {tiers.map((tier) => (
          <li key={tier.code} className="border-b border-ink/8 py-4">
            <span className="code-label">{tier.code}</span>
            <h3 className="mt-2 font-display text-[1.125rem] leading-snug">{tier.name}</h3>
            <p className="mt-1 text-[0.8125rem] leading-[1.6] text-ink-2">{tier.line}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
