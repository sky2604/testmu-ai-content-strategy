import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, Callout, Section } from "@/components/case-layout";
import { pageMeta } from "@/data/site";
import { ANSWER_BLOCKS, ENTITY_CHAIN } from "@/data/assignment";

export const Route = createFileRoute("/geo")({
  component: GeoPage,
  head: () =>
    pageMeta(
      "/geo",
      "GEO and AEO strategy",
      "Make TestMu AI visual testing claims machine-extractable and citable: entity graph, 40-60 word answer blocks, FAQPage schema, and comparison tables AI systems actually quote.",
    ),
});

function GeoPage() {
  return (
    <CaseLayout
      path="/geo"
      title="Write for citation, not for robots."
      lede="GEO and AEO are treated here as a structural discipline, not a buzzword. The goal is to make specific claims machine-extractable and citable, not to write differently for robots. This site does not claim current visibility inside AI Overviews, ChatGPT, Perplexity, Gemini, or Claude."
    >
      <Section kicker="Entity graph" title="Connect TestMu to the full category, not just the head term">
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-white/70">
          Every Tier 2 and Tier 3 page should reinforce two or three of these
          entity links explicitly in its first paragraph, so search engines and
          LLMs can connect TestMu AI to the full breadth of the category.
        </p>
        <ol className="flex flex-wrap gap-2">
          {ENTITY_CHAIN.map((node, i) => (
            <li key={node} className="flex items-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs">
                {node}
              </span>
              {i < ENTITY_CHAIN.length - 1 ? (
                <span className="text-white/25" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="Answer blocks" title="40 to 60 words, immediately after the heading">
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-white/70">
          Each block should be a self-contained paragraph immediately after its
          heading: long enough to answer the question completely, short enough to
          be lifted verbatim into an AI Overview or a chat answer.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          {ANSWER_BLOCKS.map((b) => (
            <article key={b.q} className="rounded-2xl border border-white/10 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/50">
                {b.q}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{b.a}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section kicker="Structure" title="What makes content easier to retrieve and cite">
        <ul className="space-y-3 text-sm leading-relaxed text-white/75">
          <li className="rounded-2xl border border-white/10 p-5">
            Add FAQPage schema to the existing 13-question FAQ block. It is already
            well-written and simply lacks the markup that lets Google and AI
            crawlers extract it as structured Q&A.
          </li>
          <li className="rounded-2xl border border-white/10 p-5">
            Promote the existing SmartUI vs other visual testing tools comparison
            table out of its buried position. Structured comparison tables are
            consistently what LLMs cite over narrative marketing copy.
          </li>
          <li className="rounded-2xl border border-white/10 p-5">
            Write the first 40-60 words after every H2 as a complete, standalone
            answer rather than a lead-in sentence that requires the next paragraph
            for context.
          </li>
          <li className="rounded-2xl border border-white/10 p-5">
            Add two FAQ entries that close current AEO gaps: Is SmartUI free? and
            How does SmartUI compare to Percy? Both are answerable today but not
            yet asked on the page.
          </li>
        </ul>
        <div className="mt-6">
          <Callout title="Citability test">
            If an answer engine is asked is SmartUI free, how does SmartUI compare
            with Applitools, or what is visual testing, the page should contain a
            complete, extractable answer. Today it contains some of those answers
            and none of the schema. That is the cheapest GEO win in the brief.
          </Callout>
        </div>
      </Section>
    </CaseLayout>
  );
}
