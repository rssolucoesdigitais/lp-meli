import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Logo from "./Logo";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-gradient-to-r from-ink to-ink-soft px-5 py-2.5 transition-shadow duration-300 md:px-6",
          scrolled ? "shadow-xl shadow-black/30" : "shadow-lg shadow-black/10",
        )}
      >
        <a href="#top" aria-label="RS Soluções Digitais - Início">
          <Logo className="h-9" />
        </a>

        <button className="p-2 text-white md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu" aria-expanded={open}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="group relative px-4 py-2 font-mono text-xs uppercase tracking-widest text-white/70 transition-colors"
            >
              {item.label}
              <span
                className="absolute inset-x-4 bottom-1 h-px origin-center scale-x-0 bg-yellow transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#cta-final" className="px-5 py-2.5 text-xs">
            Quero estruturar minha operação
          </Button>
        </div>
      </div>

      {open && (
        <nav
          className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-b from-ink to-ink-soft px-5 py-4 text-white shadow-xl shadow-black/30 md:hidden"
          aria-label="Navegação principal"
          onClick={() => setOpen(false)}
        >
          {navItems.map((item) => (
            <a key={item.to} href={item.to} className="block rounded-full px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-white/70">
              {item.label}
            </a>
          ))}
          <Button href="#cta-final" className="mt-3 w-full px-5 py-3 text-xs">
            Quero estruturar minha operação
          </Button>
        </nav>
      )}
    </header>
  );
}
