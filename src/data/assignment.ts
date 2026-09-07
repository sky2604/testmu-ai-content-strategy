export type SourceKind = "assignment" | "live" | "interpretation";

export const THESIS = {
  oneLiner:
    "TestMu AI does not need a content overhaul to win commercial search for visual testing. It needs discipline.",
  problem:
    "Five live pages pitch the same SmartUI product to the same searcher. The hero leads with a category label every competitor now also claims. There is no dedicated URL for Percy alternatives or Applitools alternatives.",
  opportunity:
    "Win the searches competitors are not fighting for (PDF testing, Figma comparison, framework-specific buyers, switcher intent) while fixing the internal cannibalization that is suppressing the head terms TestMu already has the enterprise proof to compete for.",
  recommendation:
    "Consolidate the cannibalizing cluster into one canonical money page plus a small number of purpose-built pages. Rewrite the hero to lead with a provable, ownable number. Ship dedicated comparison pages for Percy and Applitools before either of them builds the equivalent against TestMu.",
};

export const ON_PAGE = [
  {
    element: "Title tag",
    value: "SmartUI: AI-Native Visual Testing Tool | TestMu AI",
  },
  {
    element: "Meta description",
    value:
      "SmartUI is TestMu AI's AI-native visual testing tool. Cut false positives up to 95% and catch real UI bugs across browsers, devices, and PDFs.",
  },
  {
    element: "H1",
    value: "SmartUI: AI-Native Visual Testing Tool for Web and Mobile UI",
  },
  {
    element: "Primary CTAs",
    value: "Start free with Google / Start free with Email / Explore Kane CLI",
  },
  {
    element: "Trust signals",
    value:
      "Microsoft, OpenAI, NVIDIA, Workday, GitHub, Estée Lauder logos; Gartner Challenger 2025; Forrester Wave Q4 2025; 3M+ users, 1.5B+ tests, 18K+ enterprises",
  },
  {
    element: "Proof",
    value:
      "Named customer testimonials with metrics (Boomi: 78% faster execution; Transavia: 70% faster; Dashlane: 50% reduction)",
  },
  {
    element: "FAQ",
    value: "13 questions, including How does SmartUI compare with Applitools?",
  },
  {
    element: "Comparison content",
    value: 'One on-page table: SmartUI vs. unnamed "other visual testing tools"',
  },
  {
    element: "Framework coverage",
    value:
      "Selenium, Playwright, Cypress, Puppeteer, Appium, Espresso, XCUITest, Jest; 120+ integrations",
  },
  {
    element: "Pricing",
    value: "Not shown on page; links out to /pricing/",
  },
];

export const STRENGTHS = [
  "Enterprise-grade trust signals: recognizable logos, named analyst recognition (Gartner, Forrester), and testimonials that carry specific, quantified outcomes rather than vague praise.",
  "Real, verifiable product differentiation: PDF visual testing and Figma-to-live comparison were not mentioned on any of the three competitor pages reviewed in the assignment (Applitools, Percy, Chromatic).",
  "Agentic positioning (KaneAI, natural-language test authoring) is forward-looking and matches where AI-search and buyer expectations are heading in 2026.",
  "A comprehensive 13-question FAQ block already covers most of the definitional questions AI answer engines look for.",
];

export const LIMITS = [
  {
    id: "1",
    title: "Keyword cannibalization across five live pages",
    body: "The single largest issue found in this audit. Four other live TestMu AI pages target the same product and near-identical intent as the money page. Google has to choose which of five near-identical pages deserves to rank. Splitting internal links, anchor text and topical signal five ways works against all five.",
  },
  {
    id: "2",
    title: "Above-the-fold leads with a label, not a differentiator",
    body: '"AI-Native Visual Testing Tool" is accurate, but Percy\'s own H1 opens with "AI powered Visual Testing". Every serious competitor now claims the AI label. The page\'s most specific, ownable proof point (cut false positives up to 95%) sits in the meta description, not the H1.',
  },
  {
    id: "3",
    title: "No dedicated comparison or alternative pages",
    body: "The page already picks a fight with Applitools in its FAQ and comparison table, but there is no /applitools-alternative/ or /percy-alternative/ URL to capture the switcher actually typing that query.",
  },
  {
    id: "4",
    title: "Pricing and free-tier friction",
    body: 'Percy states its free-tier limit in the page copy itself ("5,000 screenshots/month"). TestMu AI\'s page has no visible pricing or free-tier detail. An AI assistant asked "is SmartUI free" cannot answer from this page today.',
  },
  {
    id: "5",
    title: "Rebrand messaging sits mid-funnel",
    body: 'The H2 "LambdaTest is now TestMu AI" appears mid-page on a commercial, conversion-oriented page. It is necessary context for returning LambdaTest customers, but its placement on the highest-intent commercial page is a distraction. Needs validation: whether this section is currently earning meaningful assisted conversions from legacy LambdaTest brand search before it is moved.',
  },
  {
    id: "6",
    title: "Product-level proof gap",
    body: 'The headline claim is specific ("cut false positives up to 95%"), but the trust bar shows company-wide scale metrics (3M+ users, 1.5B+ tests) rather than a SmartUI-specific efficacy number.',
  },
];

export const CANNIBAL_PAGES = [
  {
    url: "/visual-testing-tool/",
    role: "Target",
    title: "SmartUI: AI-Native Visual Testing Tool | TestMu AI",
    h1: "SmartUI: AI-Native Visual Testing Tool for Web and Mobile UI",
  },
  {
    url: "/visual-comparison-tool/",
    role: "Duplicate",
    title: "Visual Comparison Tool - AI Diffs, Not Noise | TestMu AI",
    h1: "Visual Comparison Tool That Catches Real UI Bugs",
  },
  {
    url: "/ui-comparison-tool/",
    role: "Duplicate",
    title: "SmartUI: UI Comparison Tool for Visual Testing | TestMu AI",
    h1: "UI Comparison Tool for Pixel-Perfect Interfaces",
  },
  {
    url: "/visual-ai-testing/",
    role: "Duplicate",
    title: "SmartUI: The Ultimate Visual AI Testing Solution... | TestMu AI",
    h1: "Instantly Detect UI Issues with SmartUI's Visual AI Testing",
  },
  {
    url: "/visual-ai-engine/",
    role: "Duplicate",
    title: "SmartUI: The Ultimate Visual AI Engine... | TestMu AI",
    h1: "Detect UI Flaws Instantly with SmartUI's Visual AI Engine",
  },
];

export const SERP_ROWS = [
  {
    query: "visual testing tool",
    presence: "Applitools (own product page), category listicles (TheCTOClub, Sparkbox)",
    intent: "Commercial investigation",
    rewarding: "Product pages with a clear category claim; comparison listicles",
  },
  {
    query: "visual regression testing tool",
    presence: "TestGrid, Sauce Labs, Percy, Bug0 listicles",
    intent: "Commercial investigation",
    rewarding: "Long-form best tools roundups over single product pages",
  },
  {
    query: "AI visual testing",
    presence: "BrowserStack guide (browserstack.com/guide/ai-visual-testing) ranks #1",
    intent: "Solution-aware / commercial",
    rewarding:
      "A ~3,500-word definitional guide with a table of contents, comparison table and 7 tool reviews, published by a company that also sells the product",
  },
  {
    query: "Percy alternatives",
    presence: "Chromatic (/compare/percy), Autonoma, SaaSHub, Medium",
    intent: "Transactional / comparison",
    rewarding: "Dedicated, templated vs-pages with feature tables",
  },
  {
    query: "Applitools alternatives",
    presence: "BrowserStack, Testsigma, Chromatic (/compare/applitools), CB Insights",
    intent: "Transactional / comparison",
    rewarding: "Vendor-authored comparison pages beat directories",
  },
  {
    query: "visual testing Playwright",
    presence: "Chromatic, Playwright's own docs, Checkly, TestDino",
    intent: "Solution-aware / how-to",
    rewarding: "Practical, code-level how-to content, not product pages",
  },
  {
    query: "visual testing Cypress",
    presence: "TestGrid, BrowserStack, Cypress docs, Percy blog",
    intent: "Solution-aware / how-to",
    rewarding: "Framework-specific tutorials; product vendors rank when they publish the tutorial themselves",
  },
  {
    query: "best visual testing tools 2026",
    presence:
      "Sauce Labs, TestSprite, Delta-QA, TestMu AI's own blog (13 Best Visual Regression Testing Tools)",
    intent: "Commercial investigation",
    rewarding:
      "TestMu already ranks here with a listicle: evidence the domain can compete when the content format matches intent",
  },
  {
    query: "visual testing vs functional testing",
    presence: "DZone, Kobiton, River Journal, DEV Community",
    intent: "Informational / problem-aware",
    rewarding: "Clear, short definitional articles. A gap TestMu's blog does not yet fill",
  },
  {
    query: "TestMu AI SmartUI review",
    presence: "Third-party review sites (TheCTOClub, HumanTestsAI) rank above TestMu's own product pages for some review-intent queries",
    intent: "Commercial investigation",
    rewarding: "Independent, comparison-style review content",
  },
];

export const COMPETITORS = [
  {
    name: "Applitools",
    why: "Owns the head-term category page and the Top 10 Visual AI Testing Tools listicle. Explicitly named as the benchmark in TestMu's own FAQ and comparison table.",
    serp: "Ranks for the head term visual testing tool with its own /solutions/visual-testing/ page and dominates the visual testing tools listicle SERP with a self-authored Top 10 post.",
    fold: 'H1 is simply "Visual Testing." The subheadline carries the entire emotional hook: "A bug is still a bug, even if your assertions pass." Category label comes after the pain point, not before it.',
    ctas: "Try for free (primary) and Get a demo (secondary). Offers both a low-friction and a high-touch path from the first screen.",
    proof: "One snapshot replaces hundreds of assertions and hundreds of browser and device combinations. Qualitative, not a headline number.",
    advantage:
      "Applitools reaches the buyer's emotional trigger (a green test suite that still shipped a visual bug) in the first sentence a visitor reads. TestMu's H1 reaches for the product category first and the trigger (false positives) second, in the meta description a visitor never sees on-page.",
  },
  {
    name: "Percy (by BrowserStack)",
    why: "Owns the #1 result for AI visual testing via BrowserStack's guide. Closest audience and framework overlap to TestMu (Playwright, Cypress, Selenium). The explicit target of TestMu's stated positioning against noise.",
    serp: "BrowserStack's own guide (browserstack.com/guide/ai-visual-testing) ranks #1 for AI visual testing. Percy's product and blog content dominate Percy alternatives defensively and visual regression testing tool roundups.",
    fold: 'H1: "AI powered Visual Testing for Websites for Every Commit with Less Noise for Fast Reviews." Subhead names the old, painful way (fragile pixel-to-pixel comparisons) before the new way.',
    ctas: "Get started free + Get a demo + Talk to us.",
    proof: "Product-specific, quantified stats sit directly under the hero: 528M+ screenshots compared, 2.4M+ bugs caught, 441M+ minutes saved, 150x coverage growth. All about Percy the product, not BrowserStack the company.",
    advantage:
      "Percy's proof stats are scoped to the product being sold on that exact page. TestMu's trust bar (3M+ users, 1.5B+ tests, 18K+ enterprises) describes the whole company, not SmartUI specifically.",
  },
  {
    name: "Chromatic",
    why: "Appears in both Percy alternatives and Applitools alternatives SERPs through a templated /compare/ page pattern TestMu does not currently use anywhere on its domain.",
    serp: "Ranks inside both Percy alternatives and Applitools alternatives search results via dedicated URLs: /compare/percy, /compare/applitools, and (per its own footer) at least nine more.",
    fold: "Direct competitive framing on comparison pages.",
    ctas: "Sign up + Request demo.",
    proof: "Positioning: more intuitive, faster, and more cost-effective, backed by named features (TurboSnap, unlimited parallelization, SOC 2 Type 2).",
    advantage:
      "Chromatic has industrialized the exact page type TestMu needs most (a named-competitor alternative page) into a repeatable template. TestMu has the raw material already, its own on-page comparison table, but has never promoted it to a standalone, indexable URL.",
  },
];

export const MATRIX = [
  {
    element: "Above-fold clarity",
    testmu: "Product name first, pain point in meta only",
    applitools: "Pain point in H1/subhead",
    percy: "Old-way-vs-new-way framing",
    chromatic: "Direct competitive framing",
    rec: "Lead with the 95% false-positive stat, not the category label",
  },
  {
    element: "H1 style",
    testmu: "Brand + category label",
    applitools: "One-word category + emotional subhead",
    percy: "Category + explicit outcome",
    chromatic: "N/A (comparison page)",
    rec: "Outcome-led H1",
  },
  {
    element: "CTA",
    testmu: "Start free (single style, repeated)",
    applitools: "Try free + Get a demo",
    percy: "Get started free + Get a demo + Talk to us",
    chromatic: "Sign up + Request demo",
    rec: "Add a comparison-shopper CTA distinct from the trial CTA",
  },
  {
    element: "Product-level proof",
    testmu: "Company-wide stats only",
    applitools: 'Qualitative ("hundreds of combinations")',
    percy: "Product-specific stats (528M+ screenshots)",
    chromatic: "N/A",
    rec: "Publish a SmartUI-specific efficacy number",
  },
  {
    element: "Commercial intent pages",
    testmu: "None dedicated (on-page table only)",
    applitools: "None found",
    percy: "None found beyond own blog",
    chromatic: "11+ templated /compare/ pages",
    rec: "Build /percy-alternative/ and /applitools-alternative/ first",
  },
  {
    element: "Use cases",
    testmu: "Feature-organized, not persona-organized",
    applitools: "Feature-organized",
    percy: "Feature-organized",
    chromatic: "Storybook / component-team framed",
    rec: "Add role-based use-case section",
  },
  {
    element: "FAQs",
    testmu: "13 questions, no visible schema",
    applitools: "None found",
    percy: "7 questions",
    chromatic: "None found",
    rec: "Add FAQPage schema; add pricing + comparison FAQs",
  },
  {
    element: "Comparison content",
    testmu: "One buried on-page table",
    applitools: "None found",
    percy: "None found on this page",
    chromatic: "Dedicated page per competitor",
    rec: "Promote table, then split into dedicated URLs",
  },
  {
    element: "Technical depth",
    testmu: "Strong: PDF, Figma, agentic authoring, RCA",
    applitools: "Strong: element-level Visual AI",
    percy: "Strong: DOM snapshotting, branching",
    chromatic: "Strong: Storybook-native",
    rec: "Lead marketing with PDF/Figma, the least contested ground",
  },
  {
    element: "Trust signals",
    testmu: "Gartner, Forrester, Microsoft/NVIDIA logos",
    applitools: "Not observed on this page",
    percy: "Google, Amazon, Stripe logos",
    chromatic: "Not observed on this page",
    rec: "Keep. This is a genuine strength. Do not dilute it.",
  },
  {
    element: "AI-search readiness",
    testmu: "Rich FAQ, no visible schema",
    applitools: "Minimal FAQ",
    percy: "Concise FAQ",
    chromatic: "Minimal FAQ",
    rec: "TestMu has the most raw material to win here if structured correctly",
  },
];

export const DIFF_GAPS = [
  {
    weakness: "No competitor page reviewed states a headline AI-accuracy number",
    opportunity: 'Own "95% fewer false positives" as the category-defining stat',
    content: "Lead H1, title tags and meta across the whole cluster with the number",
    conversion: "Repeat the stat in the comparison table row and in a matching customer quote",
  },
  {
    weakness: "Neither Applitools nor Percy mention PDF visual testing (assignment review)",
    opportunity: 'Near-uncontested SERP for "PDF visual testing"',
    content: "Dedicated /pdf-visual-testing/ page",
    conversion:
      "CTA targeted at compliance/fintech/document-heavy buyer personas. Needs product validation on which industries are the actual current buyers.",
  },
  {
    weakness: 'Both describe mobile via "SDK" or "add-on" language',
    opportunity:
      "Native Appium/XCUITest/Espresso support as a differentiator. Needs product validation on true parity.",
    content: "Framework-specific mobile testing content",
    conversion: "Use-case section speaking directly to mobile QA leads",
  },
  {
    weakness: "Neither Applitools nor Percy run a templated named-competitor comparison page",
    opportunity: "First-mover advantage on the /alternative/ page format inside this category",
    content: "Build /percy-alternative/ and /applitools-alternative/ before they do",
    conversion:
      "Migration-focused CTA. Needs product validation on actual migration effort/time.",
  },
];

export type KeywordRow = {
  keyword: string;
  intent: string;
  difficulty: "High" | "Med-High" | "Medium" | "Low-Med" | "Low";
  value: "Very high" | "High" | "Med-High" | "Medium";
  funnel: "TOFU" | "TOFU/MOFU" | "MOFU" | "BOFU";
  priority: "P1" | "P2" | "P3";
  why: string;
  tier: 1 | 2 | 3;
};

export const KEYWORDS: KeywordRow[] = [
  {
    keyword: "visual testing tool",
    intent: "Commercial investigation",
    difficulty: "High",
    value: "High",
    funnel: "MOFU",
    priority: "P1",
    why: "Head term. Current H1 already targets it but competes against 4 of TestMu's own duplicate pages.",
    tier: 1,
  },
  {
    keyword: "visual regression testing tool",
    intent: "Commercial investigation",
    difficulty: "High",
    value: "High",
    funnel: "MOFU",
    priority: "P1",
    why: "Near-synonym of the head term. Same cannibalization exposure.",
    tier: 1,
  },
  {
    keyword: "AI visual testing",
    intent: "Solution-aware / commercial",
    difficulty: "High",
    value: "High",
    funnel: "MOFU",
    priority: "P1",
    why: "BrowserStack's guide owns #1 today. TestMu's AI-native positioning is genuinely strong and underexploited here.",
    tier: 1,
  },
  {
    keyword: "visual testing software",
    intent: "Commercial investigation",
    difficulty: "Med-High",
    value: "Med-High",
    funnel: "MOFU",
    priority: "P2",
    why: "Buyer-language variant of the head term.",
    tier: 1,
  },
  {
    keyword: "automated visual testing",
    intent: "Solution-aware",
    difficulty: "Medium",
    value: "Medium",
    funnel: "MOFU",
    priority: "P2",
    why: "Slightly broader, still squarely on-topic.",
    tier: 1,
  },
  {
    keyword: "visual regression testing",
    intent: "Problem/solution-aware",
    difficulty: "High",
    value: "High",
    funnel: "TOFU/MOFU",
    priority: "P2",
    why: "Pillar/hub term. Needs its own page distinct from the tool page.",
    tier: 2,
  },
  {
    keyword: "AI-powered visual testing",
    intent: "Commercial",
    difficulty: "Medium",
    value: "Med-High",
    funnel: "MOFU",
    priority: "P2",
    why: "Close variant worth covering inside the AI visual testing page, not a new URL.",
    tier: 1,
  },
  {
    keyword: "visual testing automation",
    intent: "Solution-aware",
    difficulty: "Medium",
    value: "Medium",
    funnel: "MOFU",
    priority: "P3",
    why: "Supporting term, folds into the pillar page.",
    tier: 3,
  },
  {
    keyword: "visual UI testing",
    intent: "Commercial investigation",
    difficulty: "Medium",
    value: "Medium",
    funnel: "MOFU",
    priority: "P3",
    why: "Supporting term.",
    tier: 3,
  },
  {
    keyword: "Percy alternatives",
    intent: "Transactional / comparison",
    difficulty: "Medium",
    value: "Very high",
    funnel: "BOFU",
    priority: "P1",
    why: "Zero TestMu-owned competition today. Switcher intent converts well.",
    tier: 2,
  },
  {
    keyword: "Applitools alternatives",
    intent: "Transactional / comparison",
    difficulty: "Medium",
    value: "Very high",
    funnel: "BOFU",
    priority: "P1",
    why: "TestMu already positions against Applitools on-page but owns no dedicated URL.",
    tier: 2,
  },
  {
    keyword: "visual testing Playwright",
    intent: "Solution-aware / comparison",
    difficulty: "Low-Med",
    value: "High",
    funnel: "BOFU",
    priority: "P1",
    why: "Framework already chosen by the searcher. TestMu supports Playwright natively.",
    tier: 2,
  },
  {
    keyword: "visual testing Cypress",
    intent: "Solution-aware / comparison",
    difficulty: "Low-Med",
    value: "High",
    funnel: "BOFU",
    priority: "P1",
    why: "Same rationale as Playwright.",
    tier: 2,
  },
  {
    keyword: "visual testing Selenium",
    intent: "Solution-aware / comparison",
    difficulty: "Low-Med",
    value: "Med-High",
    funnel: "BOFU",
    priority: "P2",
    why: "Same pattern, slightly lower modern-stack overlap.",
    tier: 2,
  },
  {
    keyword: "visual regression testing tools",
    intent: "Commercial investigation",
    difficulty: "High",
    value: "Medium",
    funnel: "TOFU",
    priority: "P3",
    why: "Listicle-dominated SERP. Lower direct conversion, useful for topical coverage.",
    tier: 3,
  },
  {
    keyword: "visual testing for mobile apps",
    intent: "Solution-aware",
    difficulty: "Low",
    value: "Medium",
    funnel: "MOFU",
    priority: "P3",
    why: "TestMu's native Appium/XCUITest/Espresso support is a real differentiator here.",
    tier: 3,
  },
  {
    keyword: "Figma to code visual testing",
    intent: "Problem-aware",
    difficulty: "Low",
    value: "High",
    funnel: "BOFU",
    priority: "P2",
    why: "Near-unique TestMu capability. Very low observed competition.",
    tier: 2,
  },
  {
    keyword: "PDF visual testing",
    intent: "Problem-aware",
    difficulty: "Low",
    value: "High",
    funnel: "BOFU",
    priority: "P1",
    why: "No competitor reviewed in the assignment offers this. Effectively uncontested at time of audit.",
    tier: 2,
  },
  {
    keyword: "reduce false positives visual testing",
    intent: "Problem-aware",
    difficulty: "Low",
    value: "High",
    funnel: "MOFU",
    priority: "P2",
    why: "Matches TestMu's core stated differentiator directly.",
    tier: 3,
  },
  {
    keyword: "AI visual testing tool for CI/CD",
    intent: "Solution-aware",
    difficulty: "Low-Med",
    value: "Med-High",
    funnel: "MOFU",
    priority: "P3",
    why: "Developer-workflow-specific long tail.",
    tier: 3,
  },
];

export const TIERS = [
  {
    tier: "Tier 1",
    where: "The consolidated /visual-testing-tool/ money page, once the duplicate pages are resolved",
    keywords:
      "visual testing tool, visual regression testing tool, AI visual testing, visual testing software, automated visual testing",
  },
  {
    tier: "Tier 2",
    where: "New or repurposed standalone URLs, interlinked to the money page",
    keywords:
      "Percy alternatives, Applitools alternatives, visual testing Playwright/Cypress/Selenium, PDF visual testing, Figma to code visual testing, visual regression testing (pillar)",
  },
  {
    tier: "Tier 3",
    where: "Blog and cluster content feeding the Tier 2 pages",
    keywords:
      "visual UI testing, visual testing automation, visual testing for mobile apps, reduce false positives, AI visual testing for CI/CD, visual regression testing tools (plural)",
  },
];

export const BUILD_ORDER = [
  {
    order: 1,
    action: "Consolidate the 5-page cannibalization cluster",
    rationale:
      "Removes an active ceiling on every other recommendation. No new content required, mostly redirects and rewrites.",
  },
  {
    order: 2,
    action: "Publish /percy-alternative/ and /applitools-alternative/",
    rationale: "Highest intent, lowest competition, fastest realistic path to new indexed rankings.",
  },
  {
    order: 3,
    action: "Publish framework pages: Playwright, Cypress, Selenium",
    rationale: "High commercial intent. Buyer has already self-qualified by framework choice.",
  },
  {
    order: 4,
    action: "Rebuild /pdf-visual-testing/ and /figma-visual-testing/ from existing duplicate pages",
    rationale: "Reuses existing content investment. Near-uncontested SERPs.",
  },
  {
    order: 5,
    action: 'Rebuild /visual-ai-testing/ into the "AI visual testing" pillar page',
    rationale:
      "Competes directly with BrowserStack's #1 guide. Needs the most content investment, sequenced last for that reason.",
  },
  {
    order: 6,
    action:
      "Informational cluster: what is visual testing, visual vs. functional testing, best practices, CI/CD, false positives",
    rationale: "Builds sustained topical authority and internal links pointing up to Tier 2 and the pillar.",
  },
];

export const ANSWER_BLOCKS = [
  {
    q: "What is visual testing?",
    a: "Visual testing compares how a web or mobile interface actually renders, screenshot by screenshot, against an approved baseline, to catch layout, styling and rendering bugs that functional tests (which only check that code executes correctly) cannot see.",
  },
  {
    q: "What is visual regression testing?",
    a: "Visual regression testing re-runs visual comparisons after every code change to catch unintended UI differences introduced by new commits, distinguishing it from a one-time visual test by its continuous, CI/CD-integrated nature.",
  },
  {
    q: "How does AI visual testing reduce false positives?",
    a: "AI visual testing uses a trained visual model, not raw pixel diffing, to tell a genuine UI bug apart from harmless noise like anti-aliasing, font rendering shifts or a layout element that moved position without changing appearance, so only real regressions reach a human reviewer.",
  },
  {
    q: "What is the difference between visual testing and functional testing?",
    a: "Functional testing verifies that a feature behaves correctly (a button submits a form). Visual testing verifies that it looks correct (the button is visible, aligned and styled as designed). A test suite can pass functionally while a visual bug ships undetected. That is the core justification for running both.",
  },
];

export const ENTITY_CHAIN = [
  "TestMu AI",
  "SmartUI",
  "Visual Testing",
  "Visual Regression",
  "Visual AI / false-positive filtering",
  "Cross-browser and cross-device coverage",
  "Native mobile (Appium, XCUITest, Espresso)",
  "CI/CD (Jenkins, GitHub Actions, GitLab)",
  "Frameworks (Playwright, Cypress, Selenium, Puppeteer)",
  "Figma comparison",
  "PDF comparison",
  "Root cause analysis (Smart RCA)",
  "Agentic authoring (KaneAI)",
];

export const CONVERT_MAP = [
  {
    keyword: "visual testing tool",
    intent: "Commercial investigation",
    message: "Catch real bugs, not noise",
    proof: "3,000+ browser/device combos; Gartner/Forrester; customer testimonials",
    cta: "Start free (low friction, correct for MOFU)",
  },
  {
    keyword: "Percy alternatives / Applitools alternatives",
    intent: "Transactional / BOFU",
    message: "Direct, named feature-by-feature comparison plus migration ease",
    proof: "Comparison table; a stated migration effort/time (needs product validation)",
    cta: "Talk to us / Compare plans. A higher-touch CTA than a generic trial signup.",
  },
  {
    keyword: "visual testing Playwright",
    intent: "Solution-aware / BOFU",
    message: "Native Playwright support, no plugin required",
    proof: "Docs link, code snippet",
    cta: "View Playwright integration docs, then signup",
  },
];

export const HERO_BEFORE = {
  h1: "SmartUI: AI-Native Visual Testing Tool for Web and Mobile UI",
  sub: "SmartUI catches real UI bugs, not rendering noise, whether an AI coding agent authors the check or you configure it with the SmartUI SDK. Test across browsers, devices, apps, and PDFs with confidence.",
  primary: "Start free with Google / Start free with Email",
  secondary: "Explore Kane CLI",
};

export const HERO_AFTER = {
  h1: "SmartUI: The AI Visual Testing Tool That Cuts False Positives by 95%",
  sub: "Every visual regression tool floods your review queue with noise: anti-aliasing shifts, font-rendering diffs, one-pixel layout jitter. SmartUI's Visual AI tells a real UI bug from rendering noise the way a human reviewer would, then hands you the root cause instead of another diff to triage. Test across 3,000+ browser and device combinations, plus PDFs and Figma designs, without adding QA headcount.",
  primary: "Start testing free",
  secondary: "See SmartUI vs. Applitools and Percy",
  proof: "95% fewer false positives · 3,000+ browser & device combos · Trusted by Microsoft, NVIDIA, Workday · Gartner Challenger 2025",
  visual:
    "A short looped clip of an actual visual diff review, showing Smart Ignore auto-filtering a rendering-noise flag in real time, captioned Real customer diff, noise auto-filtered by Smart Ignore. Show the claim, don't just state it.",
};

export const PAGE_SECTIONS = [
  {
    n: "01",
    name: "Hero (rewritten)",
    purpose: "Hook with a provable, specific claim",
    intent: "Commercial + transactional (via secondary CTA)",
    seo: "High",
    cro: "High",
    format: "Headline, subhead, dual CTA, stat row",
    keep: false,
  },
  {
    n: "02",
    name: "Trust bar",
    purpose: "Establish enterprise credibility fast",
    intent: "All",
    seo: "Medium",
    cro: "High",
    format: "Logo strip + analyst badges",
    keep: true,
  },
  {
    n: "03",
    name: "Named comparison strip",
    purpose: "Serve BOFU switchers immediately",
    intent: "Transactional",
    seo: "High",
    cro: "High",
    format: "Condensed 4-5 row table + link to full comparison pages",
    keep: false,
  },
  {
    n: "04",
    name: "What visual testing solves",
    purpose: "Frame the 3 core pain points before features",
    intent: "Problem-aware",
    seo: "Medium",
    cro: "Medium",
    format: "3-column problem/outcome blocks",
    keep: false,
  },
  {
    n: "05",
    name: "Product demonstration",
    purpose: "Show, not tell, the noise-filtering claim",
    intent: "Commercial",
    seo: "Low-Medium",
    cro: "High",
    format: "Short looped video/GIF",
    keep: false,
  },
  {
    n: "06",
    name: "Key capabilities grid",
    purpose: "Consolidate 6 sequential feature H2s into one scannable grid",
    intent: "Commercial",
    seo: "Medium",
    cro: "Medium",
    format: "Icon grid: Smart RCA, Visual AI, Smart Ignore, KaneAI, PDF, Figma",
    keep: false,
  },
  {
    n: "07",
    name: "Supported frameworks/platforms",
    purpose: "Let developers self-qualify by stack",
    intent: "Solution-aware",
    seo: "High",
    cro: "Medium",
    format: "Logo grid, each linking to its Tier 2 page",
    keep: false,
  },
  {
    n: "08",
    name: "Use cases by role",
    purpose: "Help QA engineer / dev team / design-system team / enterprise self-identify",
    intent: "Mixed",
    seo: "Medium",
    cro: "High",
    format: "4-persona tab or accordion layout",
    keep: false,
  },
  {
    n: "09",
    name: "Customer proof",
    purpose: "Reinforce trust with specific outcomes",
    intent: "All",
    seo: "Medium",
    cro: "High",
    format: "Testimonials + case study links; add one false-positive-specific quote",
    keep: true,
  },
  {
    n: "10",
    name: "Pricing/plans snapshot",
    purpose: "Remove the click-away-to-check-pricing friction",
    intent: "Commercial + transactional",
    seo: "Low",
    cro: "High",
    format: "Visible starting price or free-tier detail + link to full pricing",
    keep: false,
  },
  {
    n: "11",
    name: "FAQ",
    purpose: "Answer objections and win AEO surfaces",
    intent: "All",
    seo: "High",
    cro: "Medium",
    format: "Expandable Q&A with FAQPage schema",
    keep: true,
  },
  {
    n: "12",
    name: "Final CTA",
    purpose: "Convert both trial-ready and evaluation-stage visitors",
    intent: "All",
    seo: "Low",
    cro: "High",
    format: 'Dual CTA: "Start free" and "Talk to sales"',
    keep: true,
  },
];

export const RECS = [
  {
    n: 1,
    title: "Fix keyword cannibalization across the 5-page cluster",
    why: "Actively suppresses ranking potential for every page in the cluster, including the money page",
    impact: "High" as const,
    effort: "Medium" as const,
    eta: "30 days",
    x: 42,
    y: 88,
  },
  {
    n: 2,
    title: "Rewrite the above-the-fold hero",
    why: "Current hero leads with a claim every competitor now also makes",
    impact: "High" as const,
    effort: "Low" as const,
    eta: "1-2 weeks",
    x: 18,
    y: 84,
  },
  {
    n: 3,
    title: "Build /percy-alternative/ and /applitools-alternative/",
    why: "Zero TestMu-owned competition today on high-intent bottom-funnel terms",
    impact: "High" as const,
    effort: "Medium" as const,
    eta: "30-45 days",
    x: 48,
    y: 90,
  },
  {
    n: 4,
    title: "Promote comparison content + add FAQPage schema",
    why: "Strong content exists but is buried and unstructured for machines",
    impact: "High" as const,
    effort: "Low-Medium" as const,
    eta: "2-3 weeks",
    x: 28,
    y: 78,
  },
  {
    n: 5,
    title: "Add visible pricing / free-tier info + FAQ entry",
    why: "Removes a documented, already-solved-by-Percy conversion gap",
    impact: "High" as const,
    effort: "Low" as const,
    eta: "1 week",
    x: 14,
    y: 76,
  },
  {
    n: 6,
    title: "Build framework pages (Playwright, Cypress, Selenium)",
    why: "Lower-competition, high-intent, direct framework-to-buyer match",
    impact: "Med-High" as const,
    effort: "Medium" as const,
    eta: "45-60 days",
    x: 58,
    y: 68,
  },
  {
    n: 7,
    title: "Rebuild /pdf-visual-testing/ and /figma-visual-testing/",
    why: "Near-uncontested SERPs for genuinely unique capabilities",
    impact: "Medium" as const,
    effort: "Medium" as const,
    eta: "45-60 days",
    x: 62,
    y: 58,
  },
  {
    n: 8,
    title: "Add role-based use-case section to main page",
    why: "Helps different buyer personas self-identify faster",
    impact: "Medium" as const,
    effort: "Low-Medium" as const,
    eta: "30 days",
    x: 34,
    y: 54,
  },
  {
    n: 9,
    title: "Publish the informational cluster",
    why: "Builds topical authority and captures top-of-funnel demand",
    impact: "Medium" as const,
    effort: "Medium-High" as const,
    eta: "60-90 days",
    x: 78,
    y: 52,
  },
  {
    n: 10,
    title: "Add a SmartUI-specific proof stat near the hero",
    why: "Buyers evaluating this product need product-level proof, not company-wide scale",
    impact: "Medium" as const,
    effort: "Low" as const,
    eta: "2-3 weeks",
    x: 22,
    y: 50,
  },
  {
    n: 11,
    title: "Alt-text audit across framework/integration logos",
    why: "Incremental accessibility and image-search value",
    impact: "Low" as const,
    effort: "Low" as const,
    eta: "Ongoing",
    x: 16,
    y: 18,
  },
  {
    n: 12,
    title: "Produce a demo GIF of Smart Ignore in action",
    why: "Show don't tell trust-builder. Page already has strong trust signals.",
    impact: "Low-Medium" as const,
    effort: "Medium" as const,
    eta: "30-45 days",
    x: 52,
    y: 28,
  },
  {
    n: 13,
    title: "Move rebrand messaging off the commercial page",
    why: "Reduces distraction on a conversion page. Needs validation on legacy-brand traffic value first.",
    impact: "Low" as const,
    effort: "Low" as const,
    eta: "2 weeks",
    x: 20,
    y: 14,
  },
];

export const RANKING_ETA = [
  {
    window: "0-30 days",
    what: "Technical/content fixes ship: cannibalization consolidation, hero rewrite, schema, pricing visibility. Expect mostly indexing and re-crawl impact, not yet ranking movement. Architectural fixes take a cycle to be recognized and consolidated.",
  },
  {
    window: "30-90 days",
    what: 'Early movement likely on lower-competition long-tail and framework terms if the Tier 2 pages ship in this window. The existing blog listicle already ranking for "best visual testing tools" style queries suggests the domain carries some usable topical authority.',
  },
  {
    window: "3-6 months",
    what: "Meaningful movement plausible on Percy/Applitools alternatives and framework terms once those pages have earned some internal linking and (ideally) a modest external link count. Overtaking Applitools or BrowserStack outright on raw head-term volume is unlikely in this window without a dedicated backlink effort.",
  },
  {
    window: "6-12 months",
    what: "Top 3-5 for the consolidated head terms is realistic if the cannibalization fix, the content cluster, and a genuine digital-PR effort (leveraging the Gartner/Forrester recognition and customer case studies) are executed together. Top 10 for alternative/framework terms is realistic sooner, by month 3-6, given comparatively lower competition.",
  },
];

export const DAYS_30 = [
  {
    action: "Consolidate the 5-page cannibalization cluster (redirects + rewrites)",
    why: "Removes the single largest ceiling on ranking potential",
    outcome: "One clear canonical URL for the head-term cluster",
    owner: "Content + Eng (redirects)",
    kpi: "Indexed-URL count for the cluster drops from 5 to 1-2 without a drop in total cluster impressions",
  },
  {
    action: "Rewrite the above-the-fold hero and promote the comparison section",
    why: "Current hero is undifferentiated. Comparison content is buried.",
    outcome: "A proof-led hero live on the money page",
    owner: "Content + Design",
    kpi: "Hero CTR / scroll depth vs. baseline",
  },
  {
    action: "Add FAQPage schema + expand FAQ (pricing, Percy comparison)",
    why: "Fast, low-effort AEO and PAA win using content that already exists",
    outcome: "FAQ eligible for rich results and AI citation",
    owner: "Content + Eng",
    kpi: "FAQ rich-result impressions in GSC",
  },
  {
    action: "Add visible pricing / free-tier snippet",
    why: "Closes a documented conversion and AEO gap",
    outcome: "Fewer drop-offs to the pricing page before signup",
    owner: "Content + PMM",
    kpi: "Trial signup rate on the page",
  },
];

export const DAYS_60 = [
  {
    action: "Pull GSC data on which queries/pages in the consolidated cluster gained or lost impressions",
    why: "Validates whether the consolidation worked before building more on top of it",
    outcome: "A clear before/after read on the cannibalization fix",
    owner: "SEO",
    kpi: "Impressions + average position for the Tier 1 keyword set",
  },
  {
    action: "Ship /percy-alternative/ and /applitools-alternative/",
    why: "Highest-intent, lowest-competition opportunity identified in this audit",
    outcome: "Two new indexed, ranking-eligible URLs",
    owner: "Content",
    kpi: 'Impressions for "Percy alternatives" / "Applitools alternatives"',
  },
  {
    action: "Ship the first 2 framework pages (prioritized by GSC query data once available)",
    why: "Framework buyers are high-intent and currently unserved by a dedicated page",
    outcome: "2 new Tier 2 pages live",
    owner: "Content",
    kpi: "New keyword impressions in the framework set",
  },
  {
    action: "Test the new hero CTA structure against baseline conversion",
    why: "Confirms the rewrite actually improves conversion, not just aesthetics",
    outcome: "A data-backed decision to keep or iterate the hero",
    owner: "Growth/CRO",
    kpi: "Conversion rate, hero variant vs. baseline",
  },
];

export const DAYS_90 = [
  {
    action: "Publish the remaining framework page, plus /pdf-visual-testing/ and /figma-visual-testing/",
    why: "Completes the Tier 2 layer with near-uncontested, genuinely differentiated content",
    outcome: "Full Tier 2 cluster live",
    owner: "Content",
    kpi: "Top-10 keyword coverage across the full keyword set",
  },
  {
    action: "Publish the first 2-3 informational cluster posts, interlinked to the pillar",
    why: "Starts building sustained topical authority beneath the commercial layer",
    outcome: "Early TOFU traffic feeding the cluster",
    owner: "Content",
    kpi: "New non-branded organic clicks to the cluster",
  },
  {
    action: "Begin outreach leveraging Gartner/Forrester recognition and case studies",
    why: "The cluster needs external authority signal, not just internal structure, to compete long-term",
    outcome: "First referring domains into the pillar and comparison pages",
    owner: "SEO/PR",
    kpi: "New referring domains to the cluster",
  },
];

export const KPIS_LEADING = [
  {
    kpi: "Impressions for the defined visual-testing keyword set",
    why: "The earliest possible signal, visible before any ranking or click movement, and the first place a failed consolidation or a mis-targeted new page would show up.",
  },
  {
    kpi: "Average position for the Tier 1 keyword set",
    why: "Tracks real ranking movement independent of the volume noise that raw impressions carry.",
  },
  {
    kpi: "Top-10 keyword coverage count within the cluster",
    why: 'A leading indicator of how many "doors are open" before clicks and conversions can compound. Directly measures whether the Tier 2 build-out is working.',
  },
];

export const KPIS_OUTCOMES = [
  {
    kpi: "Non-branded organic clicks to the cluster",
    why: 'Excludes "TestMu," "LambdaTest" and "SmartUI" branded queries, isolating genuinely new demand capture rather than people who already knew the product name.',
  },
  {
    kpi: "Organic-to-signup/demo conversion rate from the cluster's landing pages",
    why: "The number that actually ties this work back to pipeline. Tracked via CRM or an analytics goal alongside Search Console, since GSC alone cannot show conversion.",
  },
];

export const ASSUMPTIONS = [
  "Search volume and keyword difficulty figures were not available in this exercise (no Ahrefs/Semrush/GSC access). Treat any difficulty label as a directional estimate to validate in Ahrefs/Semrush/GSC.",
  "Domain authority, current indexing status, and backlink profile were not directly measurable. All ranking ETAs are directional scenarios, meant to be validated against real Domain Rating, referring-domain, and Search Console impression data in week one on the job.",
  "Whether the LambdaTest rebrand section is currently earning meaningful assisted conversions from legacy brand search needs validation before it is moved.",
  "The exact competitive gap on native mobile testing and migration effort from Percy/Applitools needs product validation, since TestMu's own comparison table is self-authored and may be dated relative to competitors' current docs.",
  "Relative Domain Rating / referring domains vs Applitools and BrowserStack were not measurable in this exercise.",
];

export const FINAL_CLOSE =
  "TestMu AI does not need a content overhaul to win commercial search for visual testing. It needs discipline: stop five pages from competing with each other, lead the buyer-facing message with the one number the company can actually prove, and go build the two comparison pages that switchers are already searching for today. Everything else in this document, the framework pages, the PDF and Figma pages, the informational cluster, compounds on top of that foundation. None of it fixes the foundation by itself.";
