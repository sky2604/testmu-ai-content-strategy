export function ArchitectureDiagram() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-8">
      <p className="mb-6 text-center text-[11px] uppercase tracking-[0.2em] text-white/40">
        Visual testing content and topical authority architecture
      </p>
      <div className="mx-auto max-w-xl rounded-2xl border border-white/20 bg-white/10 px-4 py-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
          Money page
        </p>
        <p className="mt-1 text-sm font-semibold sm:text-base">
          Visual Testing Tool · /visual-testing-tool/
        </p>
      </div>
      <div className="mx-auto my-3 h-6 w-px bg-white/20" />
      <p className="mb-3 text-center text-[10px] uppercase tracking-[0.18em] text-white/40">
        Tier 2 commercial pages (bottom funnel)
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {[
          "Percy alternatives",
          "Applitools alternatives",
          "Playwright / Cypress / Selenium",
          "PDF visual testing",
          "Figma visual testing",
          "AI visual testing pillar",
        ].map((label) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs leading-snug text-white/85"
          >
            {label}
          </div>
        ))}
      </div>
      <div className="mx-auto my-3 h-6 w-px bg-white/20" />
      <p className="mb-3 text-center text-[10px] uppercase tracking-[0.18em] text-white/40">
        Tier 3 informational cluster (top of funnel)
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {[
          "What is visual testing",
          "Visual vs functional",
          "How visual regression works",
          "Best practices",
          "Visual testing in CI/CD",
          "Reducing false positives",
        ].map((label) => (
          <div
            key={label}
            className="rounded-xl border border-dashed border-white/15 px-3 py-3 text-center text-xs leading-snug text-white/70"
          >
            {label}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-white/45">
        Authority and internal links flow upward. Informational posts earn topical
        relevance and links. Commercial pages capture demand. Both point at the
        money page.
      </p>
    </div>
  );
}
