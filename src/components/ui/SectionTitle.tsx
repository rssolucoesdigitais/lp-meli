import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  index?: number;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionTitle({ index, eyebrow, title, description, light, center }: SectionTitleProps) {
  return (
    <div data-reveal className={cn("relative mb-10", center && "text-center")}>
      {index !== undefined && (
        <span
          aria-hidden="true"
          className={cn(
            "sheet-index absolute right-0 top-0 text-5xl font-bold md:text-7xl",
            light ? "text-white/[0.06]" : "text-ink/[0.05]",
          )}
        >
          {String(index).padStart(2, "0")}
        </span>
      )}
      {eyebrow && (
        <p
          className={cn(
            "sheet-index mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.15em]",
            light ? "border-white/15 bg-white/5 text-white/70" : "border-ink/10 bg-gradient-to-r from-yellow/10 to-transparent text-ink/60",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-yellow to-yellow-dark" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className={cn("text-4xl font-extrabold leading-[1.1] md:text-5xl", light ? "text-white" : "text-ink")}>{title}</h2>
      {description && (
        <p className={cn("mt-4 max-w-2xl text-lg leading-relaxed", center && "mx-auto", light ? "text-white/70" : "text-slate-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
