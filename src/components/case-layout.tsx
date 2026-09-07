import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CaseNav } from "@/components/case-nav";
import { adjacent, SITE } from "@/data/site";
import { SourceBadge } from "@/components/source-badge";

export function CaseLayout({
  path,
  eyebrow,
  title,
  lede,
  children,
}: {
  path: string;
  eyebrow?: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  const { prev, next, current } = adjacent(path);

  return (
    <div className="min-h-screen bg-void text-paper">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <CaseNav />
      <main id="content" className="px-5 pb-24 sm:px-8 lg:px-12">
        <header className="mx-auto max-w-6xl border-b border-white/10 pb-10 pt-6 sm:pt-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
            {current.number} · {eyebrow ?? current.title}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {lede}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <SourceBadge kind="assignment" />
            <SourceBadge kind="live" />
            <SourceBadge kind="interpretation" />
          </div>
        </header>
        <div className="mx-auto max-w-6xl pt-10">{children}</div>
        <nav
          aria-label="Section pagination"
          className="mx-auto mt-16 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:justify-between"
        >
          {prev ? (
            <Link
              to={prev.href}
              className="flex items-center gap-3 rounded-2xl border border-white/10 px-5 py-4 text-sm hover:bg-white/5"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Previous
                </span>
                {prev.label}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={next.href}
              className="flex items-center justify-end gap-3 rounded-2xl border border-white/10 px-5 py-4 text-sm hover:bg-white/5"
            >
              <span className="text-right">
                <span className="block text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Next
                </span>
                {next.label}
              </span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </nav>
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-xs text-white/40 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Prepared by {SITE.author} · {SITE.role} · {SITE.date}
          </p>
          <p>
            Target: {SITE.targetPath} · Evidence from the assignment unless marked
            live research
          </p>
        </div>
      </footer>
    </div>
  );
}

export function Section({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-16">
      {kicker ? (
        <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-white/45">
          {kicker}
        </p>
      ) : null}
      <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Callout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
      <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">{title}</p>
      <div className="mt-3 text-sm leading-relaxed text-white/80">{children}</div>
    </aside>
  );
}
