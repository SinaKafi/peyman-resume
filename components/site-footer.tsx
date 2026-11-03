import { identity } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/12 bg-surface">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-10">
        <div>
          <p className="text-[0.9375rem] font-medium text-ink">{identity.name}</p>
          <p className="mt-1 text-[0.8125rem] text-ink-3">{identity.title}</p>
        </div>

        <div className="flex flex-col gap-1 sm:items-end">
          <div className="flex items-center gap-4 text-[0.8125rem]">
            <a href={`mailto:${identity.email}`} className="text-ink-2 hover:text-ink">
              Email
            </a>
            <a
              href={`tel:${identity.phoneHref}`}
              className="text-ink-2 hover:text-ink"
            >
              Phone
            </a>
            <a href="#top" className="text-ink-2 hover:text-ink">
              Back to top
            </a>
          </div>
          <p className="text-[0.75rem] text-ink-3">
            Professional portfolio · content based on the current resume
          </p>
        </div>
      </div>
    </footer>
  );
}
