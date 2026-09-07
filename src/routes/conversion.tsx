import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, Callout, Section } from "@/components/case-layout";
import { TableWrap, Th, Td } from "@/components/table-wrap";
import { pageMeta } from "@/data/site";
import { CONVERT_MAP } from "@/data/assignment";

const FUNNEL = [
  { step: "Search", note: "Head term, alternative, or framework query" },
  { step: "Land", note: "The right URL for that intent, not one of five duplicates" },
  { step: "Understand", note: "Proof-led H1, not a category label" },
  { step: "Trust", note: "Enterprise logos, analyst badges, named outcomes" },
  { step: "Try / Demo", note: "Trial CTA or comparison-shopper CTA, not one style for both" },
  { step: "Qualified lead", note: "Visible free-tier or pricing removes a qualifying click-away" },
  { step: "Pipeline", note: "Organic-to-signup/demo rate is the number that matters" },
];

export const Route = createFileRoute("/conversion")({
  component: ConversionPage,
  head: () =>
    pageMeta(
      "/conversion",
      "Commercial conversion system",
      "How TestMu AI should connect keyword, intent, landing message, proof, and CTA so SEO traffic becomes qualified trial and demo demand.",
    ),
});

function ConversionPage() {
  return (
    <CaseLayout
      path="/conversion"
      title="If someone searches visual testing tool and lands here, why choose TestMu right now?"
      lede="Audited as a landing page, not only as an SEO asset. SEO improvements should be judged on qualified conversions, not sessions."
    >
      <Section kicker="Mechanism" title="Search to pipeline">
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-7">
          {FUNNEL.map((s, i) => (
            <li
              key={s.step}
              className="rounded-2xl border border-white/10 p-4"
            >
              <p className="text-[10px] tracking-[0.16em] text-white/40">
                0{i + 1}
              </p>
              <p className="mt-2 text-sm font-semibold">{s.step}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{s.note}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="Map" title="Keyword → intent → message → proof → CTA">
        <TableWrap>
          <thead>
            <tr>
              <Th>Keyword</Th>
              <Th>Intent</Th>
              <Th>Landing message</Th>
              <Th>Proof to show</Th>
              <Th>CTA</Th>
            </tr>
          </thead>
          <tbody>
            {CONVERT_MAP.map((row) => (
              <tr key={row.keyword}>
                <Td className="font-medium text-paper">{row.keyword}</Td>
                <Td>{row.intent}</Td>
                <Td>{row.message}</Td>
                <Td>{row.proof}</Td>
                <Td>{row.cta}</Td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
      </Section>

      <Section kicker="Friction" title="Three conversion gaps on the current page">
        <ul className="space-y-3 text-sm leading-relaxed text-white/75">
          <li className="rounded-2xl border border-white/10 p-5">
            No visible pricing or free-tier limit on the page itself, unlike Percy's
            explicit 5,000 screenshots/month. A buyer has to leave the page to
            answer a basic qualifying question.
          </li>
          <li className="rounded-2xl border border-white/10 p-5">
            No demo video or product GIF was found in the extracted content. The
            page describes Smart Ignore and Visual AI in text but does not show a
            diff being filtered in real time.
          </li>
          <li className="rounded-2xl border border-white/10 p-5">
            A single CTA style (Start free with Google/Email) is repeated regardless
            of visitor intent. A bottom-funnel comparison-shopper and a first-time
            visitor see the identical prompt.
          </li>
        </ul>
        <div className="mt-6">
          <Callout title="The point">
            Bringing in more visual testing tool traffic without also fixing the
            pricing-visibility and single-CTA issues risks growing top-of-funnel
            volume that never converts at the rate the existing enterprise proof
            should support. No conversion rates are invented here. The mechanism is
            the recommendation.
          </Callout>
        </div>
      </Section>
    </CaseLayout>
  );
}
