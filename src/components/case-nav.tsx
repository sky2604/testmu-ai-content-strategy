"use client";

import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { NexumMark } from "@/components/mark";
import { NAV, PRIMARY_NAV } from "@/data/site";
import { cn } from "@/lib/utils";

export function CaseNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setMore(false);
  }, [pathname]);

  const primary = NAV.filter((n) => PRIMARY_NAV.includes(n.href));
  const rest = NAV.filter((n) => !PRIMARY_NAV.includes(n.href));

  return (
    <header className="sticky top-0 z-40">
      <nav className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          to="/"
          className="flex items-center gap-2 text-paper"
          aria-label="Winning Commercial Search home"
        >
          <NexumMark className="h-6 w-6 fill-paper" />
          <span className="text-lg font-semibold">sky</span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative flex items-center gap-1 rounded-full bg-white/10 px-1.5 py-1.5 backdrop-blur-lg">
            {primary.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white",
                  pathname === item.href && "bg-white/10 text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setMore((v) => !v)}
              className="flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-expanded={more}
            >
              Strategy
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {more ? (
              <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-2xl border border-white/10 bg-black/90 p-2 backdrop-blur-xl">
                {rest.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white",
                      pathname === item.href && "bg-white/10 text-white",
                    )}
                  >
                    <span className="mr-2 text-[10px] tracking-widest text-white/40">
                      {item.number}
                    </span>
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link
            to="/audit"
            className="cta-gradient self-stretch rounded-full px-5 text-sm font-medium leading-[2.6] text-white transition-opacity hover:opacity-90"
          >
            Get started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Menu
            className={`absolute h-5 w-5 text-paper transition-all duration-300 ${
              open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <X
            className={`absolute h-5 w-5 text-paper transition-all duration-300 ${
              open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col bg-black/90 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2 overflow-y-auto px-6 pt-24">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(24px)",
                transition: "opacity 400ms ease, transform 400ms ease",
                transitionDelay: open ? `${(i + 1) * 60}ms` : "0ms",
              }}
            >
              <span className="mr-2 text-[10px] tracking-widest text-white/40">
                {item.number}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
        <div
          className="mt-auto px-6 pb-24"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 400ms ease, transform 400ms ease",
            transitionDelay: open ? "300ms" : "0ms",
          }}
        >
          <Link
            to="/audit"
            className="cta-gradient block w-full rounded-full px-6 py-3 text-center text-sm font-medium text-white"
          >
            Get started
          </Link>
        </div>
      </aside>
    </header>
  );
}
