import { createFileRoute, Link } from "@tanstack/react-router";
import { CaseLayout, Section } from "@/components/case-layout";
import { pageMeta } from "@/data/site";
import { FINAL_CLOSE, THESIS } from "@/data/assignment";

export const Route = createFileRoute("/conclusion")({
  component: ConclusionPage,
  head: () =>
    pageMeta(
      "/conclusion",
      "Final recommendation",
      "TestMu AI needs discipline, not a content overhaul: consolidate five pages, lead with 95% fewer false positives, and ship Percy and Applitools alternative URLs.",
    ),
});

function ConclusionPage() {
  return (
    <CaseLayout
      path="/conclusion"
      title="This is the plan I would bring to my first Monday on the team."
      lede={THESIS.oneLiner}
    >
      <Section kicker="Close" title="Substance is already there. Architecture is the missing piece.">
        <p className="max-w-3xl text-lg leading-relaxed text-white/80">{FINAL_CLOSE}</p>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/65">
          The evidence in this document says TestMu AI already has the product
          substance to win here: real enterprise proof, real differentiated
          capabilities, and a domain that already ranks for some of the right
          terms. What it has been missing is the architecture to let that substance
          show up in one place, clearly, instead of five.
        </p>
      </Section>

      <Section kicker="Monday" title="Three moves, in order">
        <ol className="grid gap-3 lg:grid-cols-3">
          {[
            {
              n: "01",
              t: "Stop the cluster fighting itself",
              d: "One canonical money page. 301 the pure duplicate. Repurpose the rest toward distinct intent.",
            },
            {
              n: "02",
              t: "Lead with 95%",
              d: "Rewrite the hero, title, and meta around the ownable number. Dual CTA for trial and switcher intent.",
            },
            {
              n: "03",
              t: "Own the switcher URLs",
              d: "Ship /percy-alternative/ and /applitools-alternative/ before the comparison is only told from the other side.",
            },
          ].map((c) => (
            <li key={c.n} className="rounded-2xl border border-white/10 p-6">
              <p className="stat-num text-2xl">{c.n}</p>
              <h3 className="mt-4 font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{c.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="Continue" title="The rest of the system compounds on that foundation">
        <div className="flex flex-wrap gap-3">
          <Link
            to="/roadmap"
            className="cta-gradient rounded-full px-5 py-2.5 text-sm font-medium text-white"
          >
            Open the 90-day plan
          </Link>
          <Link
            to="/redesign"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm"
          >
            See the hero rewrite
          </Link>
          <Link
            to="/audit"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm"
          >
            Re-read the audit
          </Link>
        </div>
      </Section>
    </CaseLayout>
  );
}
