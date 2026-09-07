"use client";

import { useState } from "react";
import { HERO_AFTER, HERO_BEFORE } from "@/data/assignment";
import { cn } from "@/lib/utils";

export function HeroMock() {
  const [after, setAfter] = useState(true);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm text-white/60">
          Toggle the live mock. Same page, different commercial argument.
        </p>
        <div className="flex rounded-full bg-white/10 p-1">
          <button
            type="button"
            onClick={() => setAfter(false)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm",
              !after ? "bg-paper text-ink" : "text-white/70",
            )}
          >
            Before
          </button>
          <button
            type="button"
            onClick={() => setAfter(true)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm",
              after ? "bg-paper text-ink" : "text-white/70",
            )}
          >
            After
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d12]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/50">
          <span>testmuai.com/visual-testing-tool/</span>
          <span>{after ? "Proposed rewrite" : "Current live copy"}</span>
        </div>
        {after ? <AfterHero /> : <BeforeHero />}
      </div>
    </div>
  );
}

function BeforeHero() {
  return (
    <div className="px-6 py-10 sm:px-12 sm:py-14">
      <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
        SmartUI
      </p>
      <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        {HERO_BEFORE.h1}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
        {HERO_BEFORE.sub}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink">
          Start free with Google
        </span>
        <span className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white">
          Start free with Email
        </span>
        <span className="rounded-full px-5 py-2.5 text-sm text-white/70">
          Explore Kane CLI
        </span>
      </div>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/45">
        <span>3M+ users</span>
        <span>1.5B+ tests</span>
        <span>18K+ enterprises</span>
      </div>
    </div>
  );
}

function AfterHero() {
  return (
    <div className="px-6 py-10 sm:px-12 sm:py-14">
      <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
        SmartUI · Visual AI
      </p>
      <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        {HERO_AFTER.h1}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
        {HERO_AFTER.sub}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink">
          {HERO_AFTER.primary}
        </span>
        <span className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white">
          {HERO_AFTER.secondary}
        </span>
      </div>
      <div className="mt-8 grid gap-3 text-xs text-white/70 sm:grid-cols-2 lg:grid-cols-4">
        {HERO_AFTER.proof.split(" · ").map((item) => (
          <div key={item} className="rounded-xl border border-white/10 px-3 py-3">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-dashed border-white/15 px-4 py-6 text-center text-xs text-white/45">
        Suggested visual: looped clip of Smart Ignore auto-filtering rendering
        noise. Caption: Real customer diff, noise auto-filtered by Smart Ignore.
      </div>
    </div>
  );
}
