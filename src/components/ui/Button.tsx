import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Com `href` vira link; sem, é um <button>. */
  href?: string;
  target?: string;
  variant?: "primary" | "outline" | "outline-light" | "dark";
  children: ReactNode;
}

const styles = {
  primary:
    "bg-gradient-to-r from-yellow to-yellow-dark text-ink shadow-lg shadow-yellow/30 hover:shadow-xl hover:shadow-yellow/40 hover:-translate-y-0.5",
  outline: "border border-ink/25 text-ink hover:bg-ink hover:text-white",
  "outline-light":
    "border border-white/25 bg-gradient-to-r from-white/10 to-white/5 text-white backdrop-blur hover:border-white/50 hover:from-white/20 hover:to-white/10",
  /** Botão escuro sobre fundo amarelo (ex.: CTA no header). */
  dark: "bg-ink text-yellow shadow-lg shadow-ink/25 hover:bg-ink-soft hover:-translate-y-0.5",
};

export default function Button({ href, target, variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider transition-all duration-300",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
