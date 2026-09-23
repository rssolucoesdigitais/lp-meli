import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

/** Painel claro com borda em degradê amarelo estático, no lugar dos cantos técnicos retos. */
export default function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div className={cn("glass-panel-light relative overflow-hidden rounded-3xl shadow-2xl shadow-black/10", className)}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-yellow/70 to-transparent" />
      {children}
    </div>
  );
}
