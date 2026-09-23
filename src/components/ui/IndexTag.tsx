import { cn } from "@/lib/utils";

/** Selo circular com preenchimento em degradê dourado — estático, sem giro. */
export default function IndexTag({ n, className }: { n: number; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow to-yellow-dark font-mono text-sm font-bold text-ink shadow-md shadow-yellow/25",
        className,
      )}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}
