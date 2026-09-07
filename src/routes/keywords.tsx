import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, Callout, Section } from "@/components/case-layout";
import { KeywordBoard } from "@/components/keyword-board";
import { pageMeta } from "@/data/site";

export const Route = createFileRoute("/keywords")({
  component: KeywordsPage,
  head: () =>
    pageMeta(
      "/keywords",
      "20 commercial keywords for visual testing",
      "Tiered keyword strategy for TestMu AI SmartUI, from head terms to Percy alternatives, framework queries, and uncontested PDF and Figma demand.",
    ),
});

function KeywordsPage() {
  return (
    <CaseLayout
      path="/keywords"
      title="Twenty keywords. Three tiers. One cannibalization rule."
      lede="Difficulty and business value are directional judgments based on observed SERP competition, not tool-sourced scores. Directional estimate: validate in Ahrefs/Semrush."
    >
      <Section kicker="Map" title="Where each term should live">
        <KeywordBoard />
      </Section>

      <Section kicker="Architecture rule" title="Cannibalization is already live. Prevent it on purpose.">
        <div className="grid gap-3 sm:grid-cols-3">
          <article className="rounded-2xl border border-white/10 p-5">
            <h3 className="font-semibold">Consolidate</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              /visual-testing-tool/ becomes the sole page targeting the Tier 1 head
              terms. /visual-ai-engine/ is a pure feature-page duplicate with no
              distinct search intent and should be merged into the money page, with
              a 301 redirect.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 p-5">
            <h3 className="font-semibold">Repurpose, don't delete</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              /visual-comparison-tool/ and /ui-comparison-tool/ already have unique,
              useful copy about PDF and Figma comparison. Rebuild them as the
              dedicated /pdf-visual-testing/ and /figma-visual-testing/ Tier 2 pages
              rather than discarding the content.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 p-5">
            <h3 className="font-semibold">Repoint, don't duplicate</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              /visual-ai-testing/ has a genuinely distinct, more informational
              intent (what is visual AI testing). Repurpose it as the AI visual
              testing pillar page competing directly with BrowserStack's guide.
            </p>
          </article>
        </div>
        <div className="mt-6">
          <Callout title="Why this matters">
            Five pages splitting internal links and topical signal for the same
            terms is not a minor technical nit. It is very plausibly the single
            biggest reason the money page underperforms its actual content quality.
            Every other recommendation in this document works better once this is
            fixed, and none of them fully compensate for it if it isn't.
          </Callout>
        </div>
      </Section>
    </CaseLayout>
  );
}
