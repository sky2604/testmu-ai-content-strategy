"use client";

import { useMemo, useState } from "react";
import { KEYWORDS, TIERS, type KeywordRow } from "@/data/assignment";
import { TableWrap, Th, Td } from "@/components/table-wrap";
import { cn } from "@/lib/utils";

const PRIORITIES = ["All", "P1", "P2", "P3"] as const;
const FUNNELS = ["All", "TOFU", "TOFU/MOFU", "MOFU", "BOFU"] as const;

export function KeywordBoard() {
  const [priority, setPriority] = useState<(typeof PRIORITIES)[number]>("All");
  const [funnel, setFunnel] = useState<(typeof FUNNELS)[number]>("All");

  const rows = useMemo(
    () =>
      KEYWORDS.filter((k) => (priority === "All" ? true : k.priority === priority)).filter(
        (k) => {
          if (funnel === "All") return true;
          if (funnel === "TOFU") return k.funnel.startsWith("TOFU");
          if (funnel === "MOFU") return k.funnel.includes("MOFU");
          return k.funnel === "BOFU";
        },
      ),
    [priority, funnel],
  );

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {PRIORITIES.map((p) => (
          <FilterChip
            key={p}
            active={priority === p}
            onClick={() => setPriority(p)}
            label={p === "All" ? "All priorities" : p}
          />
        ))}
        <span className="mx-2 hidden h-6 w-px bg-white/10 sm:inline-block" />
        {FUNNELS.map((f) => (
          <FilterChip
            key={f}
            active={funnel === f}
            onClick={() => setFunnel(f)}
            label={f === "All" ? "All funnel" : f}
          />
        ))}
      </div>
      <p className="mb-3 text-xs text-white/40">
        {rows.length} of {KEYWORDS.length} keywords. Difficulty and business value
        are directional judgments based on observed SERP competition, not
        tool-sourced scores. Validate in Ahrefs/Semrush.
      </p>
      <TableWrap>
        <thead>
          <tr>
            <Th>Keyword</Th>
            <Th>Intent</Th>
            <Th>Difficulty</Th>
            <Th>Value</Th>
            <Th>Funnel</Th>
            <Th>Priority</Th>
            <Th>Why</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((k) => (
            <KeywordRowView key={k.keyword} k={k} />
          ))}
        </tbody>
      </TableWrap>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {TIERS.map((t) => (
          <article key={t.tier} className="rounded-2xl border border-white/10 p-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
              {t.tier}
            </p>
            <p className="mt-2 text-sm font-medium">{t.where}</p>
            <p className="mt-3 text-xs leading-relaxed text-white/60">{t.keywords}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function KeywordRowView({ k }: { k: KeywordRow }) {
  return (
    <tr>
      <Td className="whitespace-nowrap font-medium text-paper">{k.keyword}</Td>
      <Td>{k.intent}</Td>
      <Td className="whitespace-nowrap">{k.difficulty}</Td>
      <Td className="whitespace-nowrap">{k.value}</Td>
      <Td className="whitespace-nowrap">{k.funnel}</Td>
      <Td className="whitespace-nowrap">{k.priority}</Td>
      <Td>{k.why}</Td>
    </tr>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1.5 text-xs",
        active ? "bg-paper text-ink" : "bg-white/5 text-white/70 hover:bg-white/10",
      )}
    >
      {label}
    </button>
  );
}
