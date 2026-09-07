import { RECS } from "@/data/assignment";
import { cn } from "@/lib/utils";

export function PriorityMatrix() {
  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:aspect-[16/10]">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="border-b border-r border-white/10 p-3">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
              Do first
            </p>
          </div>
          <div className="border-b border-white/10 p-3 text-right">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
              Plan
            </p>
          </div>
          <div className="border-r border-white/10 p-3">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
              Quick polish
            </p>
          </div>
          <div className="p-3 text-right">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
              Defer
            </p>
          </div>
        </div>
        {RECS.map((r) => (
          <div
            key={r.n}
            className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold backdrop-blur-sm"
            style={{ left: `${r.x}%`, top: `${100 - r.y}%` }}
            title={`${r.n}. ${r.title}`}
          >
            {r.n}
          </div>
        ))}
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.16em] text-white/35">
          Effort
        </span>
        <span className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-[0.16em] text-white/35">
          Business impact
        </span>
      </div>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {RECS.map((r) => (
          <li key={r.n} className="flex gap-3 text-sm text-white/70">
            <span
              className={cn(
                "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold",
                r.impact === "High" && "bg-white text-ink",
                r.impact !== "High" && "bg-white/10",
              )}
            >
              {r.n}
            </span>
            <span>
              {r.title}{" "}
              <span className="text-white/40">
                · {r.impact} impact · {r.effort} effort · {r.eta}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
