import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, Callout, Section } from "@/components/case-layout";
import { PriorityMatrix } from "@/components/priority-matrix";
import { TableWrap, Th, Td } from "@/components/table-wrap";
import { pageMeta } from "@/data/site";
import { DAYS_30, DAYS_60, DAYS_90, RANKING_ETA, RECS } from "@/data/assignment";

export const Route = createFileRoute("/roadmap")({
  component: RoadmapPage,
  head: () =>
    pageMeta(
      "/roadmap",
      "13 recommendations and the first 90 days",
      "Prioritized SEO and content roadmap for TestMu AI visual testing: cannibalization fix, hero rewrite, comparison pages, then 30 / 60 / 90 day execution.",
    ),
});

function RoadmapPage() {
  const high = RECS.filter((r) => r.impact === "High");
  const med = RECS.filter((r) => r.impact === "Medium" || r.impact === "Med-High");
  const low = RECS.filter((r) => r.impact === "Low" || r.impact === "Low-Medium");

  return (
    <CaseLayout
      path="/roadmap"
      title="Would this change what the team does next Monday?"
      lede="Thirteen recommendations, ruthlessly cut to what actually matters. Written as if this page is one of the first priorities after joining."
    >
      <Section kicker="Prioritization" title="Effort versus business impact">
        <PriorityMatrix />
      </Section>

      <Section kicker="High impact" title="Ship these first">
        <RecTable rows={high} />
      </Section>
      <Section kicker="Medium impact" title="Sequence after the foundation">
        <RecTable rows={med} />
      </Section>
      <Section kicker="Low impact" title="Do not let these jump the queue">
        <RecTable rows={low} />
      </Section>

      <Section kicker="Days 1-30" title="Fix + launch">
        <PhaseTable rows={DAYS_30} />
      </Section>
      <Section kicker="Days 31-60" title="Measure + optimize">
        <PhaseTable rows={DAYS_60} />
      </Section>
      <Section kicker="Days 61-90" title="Scale">
        <PhaseTable rows={DAYS_90} />
      </Section>

      <Section kicker="Ranking ETA" title="A scenario, not a promise">
        <div className="grid gap-3 sm:grid-cols-2">
          {RANKING_ETA.map((r) => (
            <article key={r.window} className="rounded-2xl border border-white/10 p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                {r.window}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{r.what}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Callout title="Stated assumptions">
            Domain authority, current indexing status, and backlink profile were not
            directly measurable in this exercise (no Ahrefs/Semrush/GSC access).
            All ETAs above are directional scenarios, meant to be validated against
            real Domain Rating, referring-domain, and Search Console impression data
            in week one on the job, and revised from there.
          </Callout>
        </div>
      </Section>
    </CaseLayout>
  );
}

function RecTable({
  rows,
}: {
  rows: typeof RECS;
}) {
  return (
    <TableWrap>
      <thead>
        <tr>
          <Th>#</Th>
          <Th>Recommendation</Th>
          <Th>Why</Th>
          <Th>Impact</Th>
          <Th>Effort</Th>
          <Th>ETA</Th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.n}>
            <Td className="font-medium text-paper">{r.n}</Td>
            <Td>{r.title}</Td>
            <Td>{r.why}</Td>
            <Td>{r.impact}</Td>
            <Td>{r.effort}</Td>
            <Td className="whitespace-nowrap">{r.eta}</Td>
          </tr>
        ))}
      </tbody>
    </TableWrap>
  );
}

function PhaseTable({
  rows,
}: {
  rows: typeof DAYS_30;
}) {
  return (
    <TableWrap>
      <thead>
        <tr>
          <Th>Action</Th>
          <Th>Why</Th>
          <Th>Expected outcome</Th>
          <Th>Owner</Th>
          <Th>KPI</Th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.action}>
            <Td className="font-medium text-paper">{r.action}</Td>
            <Td>{r.why}</Td>
            <Td>{r.outcome}</Td>
            <Td className="whitespace-nowrap">{r.owner}</Td>
            <Td>{r.kpi}</Td>
          </tr>
        ))}
      </tbody>
    </TableWrap>
  );
}
