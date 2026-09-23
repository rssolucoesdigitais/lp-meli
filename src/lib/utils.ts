import { clsx, type ClassValue } from "clsx";
import type { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Atraso escalonado para a animação data-reveal (ex.: cards de uma grade). */
export const revealDelay = (index: number, step = 100): CSSProperties =>
  ({ "--reveal-delay": `${index * step}ms` }) as CSSProperties;
