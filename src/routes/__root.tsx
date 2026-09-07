import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AppErrorComponent } from "@/lib/error-component";
import { SITE } from "@/data/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE.name },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#050505" },
      { name: "author", content: SITE.author },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Silkscreen:wght@400;700&display=swap",
      },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
  }),
  errorComponent: AppErrorComponent,
  notFoundComponent: NotFound,
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: SITE.name,
              description: SITE.description,
              author: { "@type": "Person", name: SITE.author },
              datePublished: "2026-09-01",
              about: "SEO GEO AEO strategy for TestMu AI visual testing",
            }),
          }}
        />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-void px-6 text-center text-paper">
      <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">404</p>
      <h1 className="mt-4 text-3xl font-semibold">This page is not in the brief</h1>
      <p className="mt-3 max-w-md text-white/60">
        The route you requested is not part of the TestMu AI commercial search case.
      </p>
      <a
        href="/"
        className="cta-gradient mt-8 rounded-full px-6 py-3 text-sm font-medium text-white"
      >
        Back to the brief
      </a>
    </main>
  );
}
