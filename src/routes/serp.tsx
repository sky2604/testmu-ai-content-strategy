import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, Callout, Section } from "@/components/case-layout";
import { SourceBadge } from "@/components/source-badge";
import { TableWrap, Th, Td } from "@/components/table-wrap";
import { pageMeta } from "@/data/site";
import { SERP_ROWS } from "@/data/assignment";

export const Route = createFileRoute("/serp")({
  component: SerpPage,
  head: () =>
    pageMeta(
      "/serp",
      "Search intent and SERP landscape",
      "What Google is rewarding across visual testing queries, from head terms to Percy alternatives and framework-specific how-tos.",
    ),
});

function SerpPage() {
  return (
    <CaseLayout
      path="/serp"
      title="Google is rewarding format match, not category claims."
      lede="Findings from live SERP research across the query set in the brief, expanded based on what the SERPs actually returned. Search volume and difficulty were not available in this exercise. Treat any later number as a directional estimate to validate in Ahrefs, Semrush, or GSC."
    >
      <Section kicker="Query set" title="What the SERPs actually returned">
        <div className="mb-4">
          <SourceBadge kind="assignment" />
        </div>
        <TableWrap>
          <thead>
            <tr>
              <Th>Query</Th>
              <Th>Dominant presence</Th>
              <Th>Intent</Th>
              <Th>What Google is rewarding</Th>
            </tr>
          </thead>
          <tbody>
            {SERP_ROWS.map((row) => (
              <tr key={row.query}>
                <Td className="whitespace-nowrap font-medium text-paper">
                  {row.query}
                </Td>
                <Td>{row.presence}</Td>
                <Td className="whitespace-nowrap">{row.intent}</Td>
                <Td>{row.rewarding}</Td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
      </Section>

      <Section kicker="Pattern" title="Four SERP types, four content jobs">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              t: "Head-term commercial",
              d: "visual testing tool. Product pages with a clear category claim plus listicles. Applitools currently owns the product-page slot.",
            },
            {
              t: "Switcher / alternatives",
              d: "Percy alternatives, Applitools alternatives. Dedicated vendor-authored vs pages beat directories. Chromatic already industrializes this.",
            },
            {
              t: "Framework how-to",
              d: "visual testing Playwright / Cypress. Practical, code-level tutorials. Product vendors rank when they publish the tutorial themselves.",
            },
            {
              t: "Definitional / AI",
              d: "AI visual testing. A ~3,500-word BrowserStack guide ranks #1. TestMu's /visual-ai-testing/ is currently a product duplicate, not a guide.",
            },
          ].map((card) => (
            <article
              key={card.t}
              className="rounded-2xl border border-white/10 p-5"
            >
              <h3 className="font-semibold">{card.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{card.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Callout title="Observed fact">
        TestMu AI's own domain already has five live pages competing for overlapping
        visual-testing terms, and a blog listicle that ranks for best visual testing
        tools 2026 style queries. The domain is not starting from zero authority in
        this category. The problem is concentration, not existence, of relevant
        content.
      </Callout>
    </CaseLayout>
  );
}
