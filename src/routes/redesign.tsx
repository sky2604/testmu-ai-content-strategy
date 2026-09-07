import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, Section } from "@/components/case-layout";
import { HeroMock } from "@/components/hero-mock";
import { TableWrap, Th, Td } from "@/components/table-wrap";
import { pageMeta } from "@/data/site";
import { HERO_AFTER, HERO_BEFORE, PAGE_SECTIONS } from "@/data/assignment";

export const Route = createFileRoute("/redesign")({
  component: RedesignPage,
  head: () =>
    pageMeta(
      "/redesign",
      "Above-the-fold rewrite and page architecture",
      "Proof-led hero rewrite for TestMu AI SmartUI, targeting AI visual testing tool, with dual CTAs, a named comparison strip, and a 12-section page architecture.",
    ),
});

function RedesignPage() {
  return (
    <CaseLayout
      path="/redesign"
      title="Lead with the number the company can prove."
      lede="Target keyword: AI visual testing tool, plus visual testing tool. Intent: commercial investigation, with a secondary CTA serving transactional visitors who land from a vs or alternative search."
    >
      <Section kicker="Execution" title="Before and after, as a product experience">
        <HeroMock />
      </Section>

      <Section kicker="Copy" title="Verbatim current vs recommended">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 p-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
              Before
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-white/40">H1</dt>
                <dd className="mt-1">{HERO_BEFORE.h1}</dd>
              </div>
              <div>
                <dt className="text-white/40">Subhead</dt>
                <dd className="mt-1 text-white/75">{HERO_BEFORE.sub}</dd>
              </div>
              <div>
                <dt className="text-white/40">CTAs</dt>
                <dd className="mt-1">
                  {HERO_BEFORE.primary} · {HERO_BEFORE.secondary}
                </dd>
              </div>
            </dl>
          </article>
          <article className="rounded-2xl border border-white/10 p-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
              After
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-white/40">H1</dt>
                <dd className="mt-1">{HERO_AFTER.h1}</dd>
              </div>
              <div>
                <dt className="text-white/40">Supporting copy</dt>
                <dd className="mt-1 text-white/75">{HERO_AFTER.sub}</dd>
              </div>
              <div>
                <dt className="text-white/40">CTAs</dt>
                <dd className="mt-1">
                  {HERO_AFTER.primary} · {HERO_AFTER.secondary}
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </Section>

      <Section kicker="Rationale" title="Why this structure">
        <div className="grid gap-3 sm:grid-cols-2">
          <article className="rounded-2xl border border-white/10 p-5">
            <h3 className="font-semibold">SEO</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              It leads with the specific, verifiable proof point (95%) instead of a
              generic AI-category label every competitor now also claims. Percy's
              own H1 literally opens with AI powered. A quantified, ownable claim
              in the H1 gives both search engines and human visitors a specific
              reason to remember this page.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 p-5">
            <h3 className="font-semibold">Conversion</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Dual CTAs route comparison-shoppers to the answer they came for
              immediately, instead of making them scroll past ten headings to find
              the existing (currently buried) comparison table. The stat row puts
              product-level proof under the claim, not company-wide user counts.
            </p>
          </article>
        </div>
      </Section>

      <Section kicker="Elsewhere on the page" title="Three additional content changes">
        <ol className="space-y-3">
          {[
            {
              t: "Promote the comparison content and give it dedicated URLs",
              d: "Move the existing SmartUI vs other visual testing tools table from its buried mid-page position to directly beneath the trust bar, with named competitors (Applitools, Percy) instead of other tools. Then split it into /percy-alternative/ and /applitools-alternative/.",
            },
            {
              t: "Add visible pricing and free-tier information",
              d: "Add a concise pricing/free-tier line on the page itself (matching Percy's clarity), plus an Is SmartUI free? FAQ entry. This closes both a conversion-friction gap and an AEO gap with one change.",
            },
            {
              t: "Add FAQPage schema and two new FAQ entries",
              d: "Mark up the existing 13-question FAQ block with FAQPage schema, and add Is SmartUI free? and How does SmartUI compare to Percy? This is the fastest, lowest-effort way to compete for PAA boxes and AI Overview citations.",
            },
          ].map((item, i) => (
            <li key={item.t} className="rounded-2xl border border-white/10 p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                0{i + 1}
              </p>
              <h3 className="mt-2 font-semibold">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="Full page" title="Proposed architecture, keep what already works">
        <TableWrap>
          <thead>
            <tr>
              <Th>#</Th>
              <Th>Section</Th>
              <Th>Purpose</Th>
              <Th>Intent</Th>
              <Th>SEO</Th>
              <Th>CRO</Th>
              <Th>Format</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {PAGE_SECTIONS.map((s) => (
              <tr key={s.n}>
                <Td>{s.n}</Td>
                <Td className="font-medium text-paper">{s.name}</Td>
                <Td>{s.purpose}</Td>
                <Td>{s.intent}</Td>
                <Td>{s.seo}</Td>
                <Td>{s.cro}</Td>
                <Td>{s.format}</Td>
                <Td className="whitespace-nowrap text-[10px] uppercase tracking-[0.14em] text-white/40">
                  {s.keep ? "Keep" : "New / rewrite"}
                </Td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
      </Section>
    </CaseLayout>
  );
}
