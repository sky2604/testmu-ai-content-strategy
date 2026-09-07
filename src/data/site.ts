export const SITE = {
  name: "Winning Commercial Search",
  short: "nexum",
  author: "Akash Sinha (Sky)",
  role: "Senior Content Strategist assignment",
  date: "September 2026",
  targetPath: "/visual-testing-tool/",
  targetUrl: "https://www.testmuai.com/visual-testing-tool/",
  company: "TestMu AI",
  product: "SmartUI",
  description:
    "An SEO, GEO, and AEO growth strategy for TestMu AI commercial search around visual testing. A hiring assignment by Akash Sinha (Sky), September 2026.",
};

export type AppPath =
  | "/"
  | "/audit"
  | "/serp"
  | "/competitors"
  | "/keywords"
  | "/content"
  | "/geo"
  | "/conversion"
  | "/redesign"
  | "/roadmap"
  | "/measurement"
  | "/conclusion";

export type NavItem = {
  href: AppPath;
  label: string;
  number: string;
  title: string;
};

export const NAV: NavItem[] = [
  { href: "/", label: "Brief", number: "00", title: "Opening brief" },
  { href: "/audit", label: "Audit", number: "01", title: "Current-state audit" },
  { href: "/serp", label: "SERP", number: "02", title: "Search landscape" },
  { href: "/competitors", label: "Rivals", number: "03", title: "Competitive teardown" },
  { href: "/keywords", label: "Keywords", number: "04", title: "Keyword strategy" },
  { href: "/content", label: "Content", number: "05", title: "Content architecture" },
  { href: "/geo", label: "GEO", number: "06", title: "GEO and AEO" },
  { href: "/conversion", label: "Convert", number: "07", title: "Conversion system" },
  { href: "/redesign", label: "Redesign", number: "08", title: "Above-the-fold rewrite" },
  { href: "/roadmap", label: "90 Days", number: "09", title: "First 90 days" },
  { href: "/measurement", label: "Measure", number: "10", title: "GSC KPIs" },
  { href: "/conclusion", label: "Close", number: "11", title: "Final recommendation" },
];

export const PRIMARY_NAV: AppPath[] = ["/", "/audit", "/competitors", "/redesign", "/roadmap"];

export function pageMeta(path: AppPath, title: string, description: string) {
  const full = `${title} · ${SITE.name}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { name: "author", content: SITE.author },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export function adjacent(path: string) {
  const i = NAV.findIndex((n) => n.href === path);
  return {
    prev: i > 0 ? NAV[i - 1] : null,
    next: i >= 0 && i < NAV.length - 1 ? NAV[i + 1] : null,
    current: NAV[i] ?? NAV[0],
  };
}
