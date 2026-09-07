import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TableWrap({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      {caption ? (
        <p className="border-b border-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/40">
          {caption}
        </p>
      ) : null}
      <table className="min-w-full text-left text-sm">{children}</table>
    </div>
  );
}

export function Th({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <th
      className={cn(
        "whitespace-nowrap border-b border-white/10 bg-white/5 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white/50",
        className,
      )}
    >
      {children}
    </th>
  );
}

export function Td({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <td
      className={cn(
        "border-b border-white/5 px-4 py-3 align-top text-white/80",
        className,
      )}
    >
      {children}
    </td>
  );
}
