import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, Callout, Section } from "@/components/case-layout";
import { SourceBadge } from "@/components/source-badge";
import { TableWrap, Th, Td } from "@/components/table-wrap";
import { pageMeta } from "@/data/site";
import { COMPETITORS, DIFF_GAPS, MATRIX } from "@/data/assignment";
import { LIVE_NOTES } from "@/data/live";

export const Route = createFileRoute("/competitors")({
  component: CompetitorsPage,
  head: () =>
    pageMeta(
      "/competitors",
      "Competitive teardown: Applitools, Percy, Chromatic",
      "Side-by-side teardown of the three competitors selected from SERP evidence, plus the SERP-to-product-to-conversion differentiation framework.",
    ),
});

function CompetitorsPage() {
  return (
    <CaseLayout
      path="/competitors"
      title="Three rivals, three different jobs, none owning PDF plus Figma plus agentic."
      lede="Competitors were selected using SERP evidence, not by assumption: Applitools owns the head term, Percy owns AI visual testing via BrowserStack's guide, Chromatic owns templated alternatives pages."
    >
      <Section kicker="Profiles" title="What each page is actually doing">
        <div className="grid gap-4 lg:grid-cols-3">
          {COMPETITORS.map((c) => (
            <article
              key={c.name}
              className="flex flex-col rounded-2xl border border-white/10 p-5"
            >
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{c.why}</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                    Above the fold
                  </dt>
                  <dd className="mt-1 text-white/80">{c.fold}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                    Proof
                  </dt>
                  <dd className="mt-1 text-white/80">{c.proof}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                    Advantage vs TestMu
                  </dt>
                  <dd className="mt-1 text-white/80">{c.advantage}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section kicker="Matrix" title="Side by side, then the recommendation">
        <TableWrap>
          <thead>
            <tr>
              <Th>Element</Th>
              <Th>TestMu AI</Th>
              <Th>Applitools</Th>
              <Th>Percy</Th>
              <Th>Chromatic</Th>
              <Th>Recommendation</Th>
            </tr>
          </thead>
          <tbody>
            {MATRIX.map((row) => (
              <tr key={row.element}>
                <Td className="font-medium text-paper">{row.element}</Td>
                <Td>{row.testmu}</Td>
                <Td>{row.applitools}</Td>
                <Td>{row.percy}</Td>
                <Td>{row.chromatic}</Td>
                <Td className="text-paper">{row.rec}</Td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
      </Section>

      <Section kicker="Framework" title="SERP, then product, then conversion">
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-white/70">
          Two different questions, two different answers. Google ranks pages on
          content depth, structure and authority signals. Buyers choose vendors on
          proof and fit. Conflating the two produces generic strategy.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 p-6">
            <h3 className="font-semibold">Why should Google rank TestMu?</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Not by trying to out-rank Applitools and BrowserStack head-on for the
              exact head terms on brand strength alone. Both are older, larger
              domains. Instead, by building genuine topical authority in the
              specific, lower-competition entities TestMu can uniquely and
              verifiably answer today: PDF visual testing, Figma-to-live comparison,
              native mobile testing via Appium/XCUITest/Espresso, and agentic
              no-code authoring.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 p-6">
            <h3 className="font-semibold">Why should a buyer choose TestMu?</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Because TestMu can do things in one platform that the three reviewed
              competitor pages do not claim to do at all: compare a Figma design
              directly to the live build, run visual diffs on PDFs, and let an AI
              agent author the check from a plain-English description rather than a
              script.
            </p>
          </article>
        </div>
        <TableWrap caption="Competitor weakness to TestMu response">
          <thead>
            <tr>
              <Th>Competitor weakness</Th>
              <Th>TestMu opportunity</Th>
              <Th>Content response</Th>
              <Th>Conversion response</Th>
            </tr>
          </thead>
          <tbody>
            {DIFF_GAPS.map((g) => (
              <tr key={g.weakness}>
                <Td>{g.weakness}</Td>
                <Td>{g.opportunity}</Td>
                <Td>{g.content}</Td>
                <Td>{g.conversion}</Td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
      </Section>

      <Section kicker="Live research" title="What changed after the assignment was written">
        <div className="mb-4">
          <SourceBadge kind="live" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {LIVE_NOTES.filter((n) =>
            /Applitools|Percy|Chromatic|PDF/.test(n.topic),
          ).map((n) => (
            <article key={n.topic} className="rounded-2xl border border-white/10 p-5">
              <p className="text-sm font-medium">{n.topic}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{n.body}</p>
            </article>
          ))}
        </div>
        <Callout title="How to read the delta">
          The assignment conclusions stay. Live research does not invent a new
          strategy. It flags that PDF is no longer completely unmentioned by
          Applitools, and that Chromatic already hosts /compare/lambdatest. TestMu
          still does not own the switcher URLs. That remains the first commercial
          page to ship.
        </Callout>
      </Section>
    </CaseLayout>
  );
}
