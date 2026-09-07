import { cn } from "@/lib/utils";
import type { SourceKind } from "@/data/assignment";

const COPY: Record<SourceKind, { label: string; className: string }> = {
  assignment: {
    label: "Assignment",
    className: "text-[#9ecbff] border-[#9ecbff]/30",
  },
  live: {
    label: "Live research",
    className: "text-[#c8f27a] border-[#c8f27a]/30",
  },
  interpretation: {
    label: "Interpretation",
    className: "text-[#e8c27a] border-[#e8c27a]/30",
  },
};

export function SourceBadge({ kind }: { kind: SourceKind }) {
  const c = COPY[kind];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em]",
        c.className,
      )}
    >
      {c.label}
    </span>
  );
}
