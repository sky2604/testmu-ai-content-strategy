import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, Callout, Section } from "@/components/case-layout";
import { pageMeta } from "@/data/site";
import { ASSUMPTIONS, KPIS_LEADING, KPIS_OUTCOMES } from "@/data/assignment";

export const Route = createFileRoute("/measurement")({
  component: MeasurementPage,
  head: () =>
    pageMeta(
      "/measurement",
      "Google Search Console KPIs",
      "Five KPIs for the TestMu AI visual testing cluster: impressions, average position, top-10 coverage, non-branded clicks, and organic-to-signup conversion.",
    ),
});

function MeasurementPage() {
  return (
    <CaseLayout
      path="/measurement"
      title="Leading indicators first. Business outcomes next."
      lede="Five KPIs, split deliberately into leading indicators (visible fast, tell you if the work is being surfaced at all) and business outcomes (the numbers that actually matter to revenue). No fabricated baselines."
    >
      <Section kicker="Leading" title="Visible before rankings move">
        <div className="grid gap-3 lg:grid-cols-3">
          {KPIS_LEADING.map((k, i) => (
            <article key={k.kpi} className="rounded-2xl border border-white/10 p-6">
              <p className="stat-num text-2xl text-paper">0{i + 1}</p>
              <h3 className="mt-4 font-semibold">{k.kpi}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{k.why}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section kicker="Outcomes" title="The numbers that tie this to pipeline">
        <div className="grid gap-3 lg:grid-cols-2">
          {KPIS_OUTCOMES.map((k, i) => (
            <article key={k.kpi} className="rounded-2xl border border-white/10 p-6">
              <p className="stat-num text-2xl text-paper">0{i + 4}</p>
              <h3 className="mt-4 font-semibold">{k.kpi}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{k.why}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section kicker="Feedback loop" title="How week one on the job changes the plan">
        <ol className="space-y-3 text-sm leading-relaxed text-white/75">
          <li className="rounded-2xl border border-white/10 p-5">
            Pull GSC for the five cannibalizing URLs and the defined keyword set.
            If cluster impressions hold while indexed URL count drops, consolidation
            is working.
          </li>
          <li className="rounded-2xl border border-white/10 p-5">
            Validate directional difficulty labels in Ahrefs or Semrush. Re-order
            framework pages if query data disagrees with the Playwright-first
            assumption.
          </li>
          <li className="rounded-2xl border border-white/10 p-5">
            Check post-rebrand branded query trends for LambdaTest vs TestMu AI
            before moving the rebrand block off the money page.
          </li>
        </ol>
      </Section>

      <Section kicker="Assumptions" title="What this brief does not pretend to know">
        <ul className="space-y-3">
          {ASSUMPTIONS.map((a) => (
            <li
              key={a.slice(0, 40)}
              className="rounded-2xl border border-white/10 p-5 text-sm leading-relaxed text-white/70"
            >
              {a}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Callout title="Integrity rule">
            This experience does not invent search volumes, keyword difficulty
            scores, rankings, traffic, conversion rates, or AI-search visibility.
            Where a number appears, it is either on TestMu's own page, on a
            competitor page, or explicitly labeled directional.
          </Callout>
        </div>
      </Section>
    </CaseLayout>
  );
}
