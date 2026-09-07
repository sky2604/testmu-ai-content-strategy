export const LIVE_CHECKED = "7 September 2026";

export const LIVE_NOTES = [
  {
    topic: "Target page still matches the audit",
    source: "live" as const,
    body: "Live fetch of testmuai.com/visual-testing-tool/ confirms the assignment's on-page facts: title SmartUI: AI-Native Visual Testing Tool | TestMu AI, H1 SmartUI: AI-Native Visual Testing Tool for Web and Mobile UI, no pricing on page, PDF and Figma claims present, LambdaTest is now TestMu AI rebrand block still on the commercial page, Gartner Challenger 2025 and Forrester Wave Q4 2025 still cited.",
  },
  {
    topic: "Applitools still leads with pain",
    source: "live" as const,
    body: 'Applitools /solutions/visual-testing/ still frames the category with "A bug is still a bug, even if your assertions pass." Dual CTA path (try / docs) remains. Live page now also links a dedicated /solutions/pdf-testing/ use case, which the assignment did not observe on the reviewed page in September.',
  },
  {
    topic: "Percy product-level proof is still on-page",
    source: "live" as const,
    body: "Percy still publishes 528M+ screenshots compared, 2.4M+ visual bugs caught, 441M+ minutes saved, 150x coverage growth, and states a free plan of 5,000 screenshots/month in FAQ copy. No PDF or Figma mention observed on the Percy product page.",
  },
  {
    topic: "Chromatic already compares LambdaTest",
    source: "live" as const,
    body: "Chromatic's compare footer still lists /compare/percy, /compare/applitools, and at least nine more templated URLs. Live research found /compare/lambdatest is already live. The assignment's first-mover argument for named-competitor pages still holds for TestMu-owned URLs, but Chromatic is already framing the comparison from the other side.",
  },
  {
    topic: "Rebrand is still leaking into third-party SERPs",
    source: "live" as const,
    body: "LambdaTest rebranded to TestMu AI on 12 January 2026 (confirmed on testmuai.com/lambdatest/ and SiliconANGLE). 2026 roundups still refer to LambdaTest SmartUI as an Applitools alternative. Brand-entity consolidation remains a real ranking risk, matching the assignment's validation item.",
  },
  {
    topic: "PDF gap is less absolute than the assignment captured",
    source: "live" as const,
    body: "The assignment found no PDF or Figma mention on the three reviewed competitor pages. Live research: Applitools now lists PDF testing as a use case. A January 2026 third-party comparison also attributes a Figma plugin to Applitools Eyes 10.22. Do not treat PDF/Figma as uncontested without a fresh product check. TestMu's combination of PDF + Figma-to-live + agentic authoring on one platform is still the distinctive story.",
  },
];
