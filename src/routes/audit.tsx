import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, Callout, Section } from "@/components/case-layout";
import { SourceBadge } from "@/components/source-badge";
import { TableWrap, Th, Td } from "@/components/table-wrap";
import { pageMeta } from "@/data/site";
import { CANNIBAL_PAGES, LIMITS, ON_PAGE, STRENGTHS } from "@/data/assignment";

export const Route = createFileRoute("/audit")({
  component: AuditPage,
  head: () =>
    pageMeta(
      "/audit",
      "Current-state audit of /visual-testing-tool/",
      "On-page facts, strengths, and the six growth limits on TestMu AI's visual testing money page, including five-page keyword cannibalization.",
    ),
});

function AuditPage() {
  return (
    <CaseLayout
      path="/audit"
      title="The page is strong. The cluster is fighting itself."
      lede="Audited live at testmuai.com/visual-testing-tool/. Quotes are verbatim from the live page. The content quality is not the ceiling. Architecture and framing are."
    >
      <Section kicker="On-page facts" title="What is actually on the money page">
        <TableWrap caption="Captured from the live page, September 2026">
          <thead>
            <tr>
              <Th>Element</Th>
              <Th>What's there</Th>
            </tr>
          </thead>
          <tbody>
            {ON_PAGE.map((row) => (
              <tr key={row.element}>
                <Td className="whitespace-nowrap font-medium text-paper">
                  {row.element}
                </Td>
                <Td>{row.value}</Td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
      </Section>

      <Section kicker="Observed strength" title="What is already working">
        <div className="grid gap-3 sm:grid-cols-2">
          {STRENGTHS.map((s) => (
            <article
              key={s.slice(0, 20)}
              className="rounded-2xl border border-white/10 p-5 text-sm leading-relaxed text-white/80"
            >
              {s}
            </article>
          ))}
        </div>
      </Section>

      <Section kicker="Primary issue" title="Five live pages, one product">
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-white/70">
          Four other live TestMu AI pages target the same product and near-identical
          intent. Every one pitches SmartUI, uses the same Start free with
          Google/Email CTA, and covers overlapping feature sets (Smart Ignore,
          Visual AI, false-positive reduction).
        </p>
        <TableWrap>
          <thead>
            <tr>
              <Th>URL</Th>
              <Th>Title tag</Th>
              <Th>H1</Th>
            </tr>
          </thead>
          <tbody>
            {CANNIBAL_PAGES.map((p) => (
              <tr key={p.url}>
                <Td className="font-mono text-xs">
                  {p.url}
                  <span className="ml-2 text-[10px] uppercase tracking-[0.14em] text-white/40">
                    {p.role}
                  </span>
                </Td>
                <Td>{p.title}</Td>
                <Td>{p.h1}</Td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
        <Callout title="Why this matters">
          Google has to choose which of five near-identical pages deserves to rank
          for visual testing tool and its close variants. Splitting internal links,
          anchor text and topical signal five ways works against all five. This is
          a self-inflicted ceiling on the money page's ranking potential,
          independent of content quality.
        </Callout>
      </Section>

      <Section kicker="What's limiting growth" title="Six issues, ranked by commercial cost">
        <ol className="space-y-4">
          {LIMITS.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-white/10 p-5 sm:p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                0{item.id}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="Rebrand context" title="LambdaTest became TestMu AI on 12 January 2026">
        <div className="flex flex-wrap gap-2">
          <SourceBadge kind="assignment" />
          <SourceBadge kind="live" />
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
          Historical backlinks, brand search volume and domain trust likely still
          point to LambdaTest as an entity. Several product pages still carry
          (Formerly LambdaTest) in the title tag, which dilutes an already crowded
          title with brand-transition language instead of the buyer's problem.
          Needs validation: whether Search Console shows a post-rebrand
          impression/click dip that would reprioritize technical rebrand SEO above
          the content work in this brief.
        </p>
      </Section>
    </CaseLayout>
  );
}
