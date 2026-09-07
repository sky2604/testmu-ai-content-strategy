import { createFileRoute } from "@tanstack/react-router";
import { ArchitectureDiagram } from "@/components/architecture";
import { CaseLayout, Section } from "@/components/case-layout";
import { TableWrap, Th, Td } from "@/components/table-wrap";
import { pageMeta } from "@/data/site";
import { BUILD_ORDER } from "@/data/assignment";

export const Route = createFileRoute("/content")({
  component: ContentPage,
  head: () =>
    pageMeta(
      "/content",
      "Content and topic architecture",
      "Hub-and-spoke topical authority for TestMu AI visual testing: one money page, commercial supporting URLs, and an informational cluster that feeds them.",
    ),
});

function ContentPage() {
  return (
    <CaseLayout
      path="/content"
      title="The money page should not be an island."
      lede="Once the cannibalization fix is applied, the cluster becomes a hub-and-spoke system: one canonical commercial page, purpose-built supporting URLs, and informational posts that pass authority upward."
    >
      <Section kicker="Ecosystem" title="Pillar, commercial spokes, informational feed">
        <ArchitectureDiagram />
      </Section>

      <Section kicker="Build order" title="Which pages first, and why">
        <TableWrap>
          <thead>
            <tr>
              <Th>Order</Th>
              <Th>Action</Th>
              <Th>Rationale</Th>
            </tr>
          </thead>
          <tbody>
            {BUILD_ORDER.map((row) => (
              <tr key={row.order}>
                <Td className="font-medium text-paper">{row.order}</Td>
                <Td>{row.action}</Td>
                <Td>{row.rationale}</Td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
      </Section>

      <Section kicker="Internal linking" title="Anchor text with a job">
        <ul className="space-y-3 text-sm leading-relaxed text-white/75">
          <li className="rounded-2xl border border-white/10 p-5">
            Every informational post links to its most relevant Tier 2 page using
            descriptive, varied anchor text (visual testing for Playwright, not
            click here) and to the pillar page using the primary term (AI-native
            visual testing tool).
          </li>
          <li className="rounded-2xl border border-white/10 p-5">
            Tier 2 pages link up to the pillar with the money term as anchor text,
            and sideways to each other sparingly. Framework pages cross-link also
            supports Cypress and Selenium rather than duplicating full framework
            coverage.
          </li>
          <li className="rounded-2xl border border-white/10 p-5">
            The pillar page links down to every Tier 2 page through a single Visual
            testing by framework and use case module, replacing the current pattern
            of near-duplicate standalone pages with one clear hub-and-spoke
            structure.
          </li>
        </ul>
      </Section>
    </CaseLayout>
  );
}
