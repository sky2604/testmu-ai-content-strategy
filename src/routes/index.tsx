import { createFileRoute, Link } from "@tanstack/react-router";
import { NexumHero } from "@/components/nexum-hero";
import { CaseNav } from "@/components/case-nav";
import { SourceBadge } from "@/components/source-badge";
import { NAV, pageMeta, SITE } from "@/data/site";
import { THESIS, CANNIBAL_PAGES, STRENGTHS } from "@/data/assignment";
import { LIVE_NOTES } from "@/data/live";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageMeta(
      "/",
      "Winning Commercial Search for Visual Testing",
      SITE.description,
    ),
});

function Home() {
  return (
    <div className="bg-void text-paper">
      <NexumHero
        onEnter={() => {
          document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div id="brief">
        <CaseNav />
      </div>
      <main className="px-5 pb-24 sm:px-8 lg:px-12">
        <header className="mx-auto max-w-6xl border-b border-white/10 pb-12 pt-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
            {SITE.company} · {SITE.role} · {SITE.date}
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Winning commercial search for visual testing
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            An SEO + GEO + AEO growth strategy for {SITE.targetPath}. Prepared by{" "}
            {SITE.author}. The page is not weak. The architecture is.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <SourceBadge kind="assignment" />
            <span className="text-xs text-white/40">
              Target: {SITE.targetUrl}
            </span>
          </div>
        </header>

        <section className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
              The problem
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {THESIS.problem}
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
              The opportunity
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {THESIS.opportunity}
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
              The thesis
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {THESIS.oneLiner}
            </p>
          </article>
        </section>

        <section className="mx-auto max-w-6xl pb-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                The finding that matters
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Five pages. One product. Split signal.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                TestMu AI has built five separate, live pages that all pitch SmartUI
                to the same searcher. Their titles and above-the-fold pitches are
                close to interchangeable. This is textbook keyword cannibalization,
                happening on the exact terms this assignment is about.
              </p>
              <ul className="mt-6 space-y-2">
                {CANNIBAL_PAGES.map((p) => (
                  <li
                    key={p.url}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm"
                  >
                    <span className="font-mono text-xs text-white/80">{p.url}</span>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                      {p.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                What already works
              </p>
              <ul className="mt-4 space-y-3">
                {STRENGTHS.map((s) => (
                  <li
                    key={s.slice(0, 24)}
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm leading-relaxed text-white/75"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl border-t border-white/10 py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                Live check
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Assignment findings, verified in September 2026
              </h3>
            </div>
            <SourceBadge kind="live" />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {LIVE_NOTES.slice(0, 4).map((n) => (
              <article
                key={n.topic}
                className="rounded-2xl border border-white/10 p-5"
              >
                <p className="text-sm font-medium">{n.topic}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{n.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl border-t border-white/10 py-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
            The journey
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            Diagnosis, then the commercial system
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {NAV.filter((n) => n.href !== "/").map((n) => (
              <Link
                key={n.href}
                to={n.href}
                className="group rounded-2xl border border-white/10 p-4 hover:bg-white/5"
              >
                <p className="text-[10px] tracking-[0.18em] text-white/40">
                  {n.number}
                </p>
                <p className="mt-2 text-sm font-medium group-hover:text-white">
                  {n.label}
                </p>
                <p className="mt-1 text-xs text-white/45">{n.title}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/audit"
              className="cta-gradient inline-flex rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Start with the audit
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
