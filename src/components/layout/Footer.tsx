import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer id="contato" className="bg-ink text-sm text-slate-300">
      <div className="h-px bg-gradient-to-r from-transparent via-yellow to-transparent" aria-hidden="true" />

      <div data-reveal className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-center md:grid-cols-2 md:px-8 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">{site.slogan}.</p>
        </div>

        <div className="flex flex-col items-center border-t border-white/10 pt-8 md:items-end md:border-t-0 md:pt-0 md:text-right">
          <h3 className="sheet-index text-xs uppercase tracking-widest text-white">Contato</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-yellow to-yellow-dark">
                <Phone className="h-3.5 w-3.5 text-ink" aria-hidden="true" />
              </span>
              <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="transition hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-yellow to-yellow-dark">
                <Mail className="h-3.5 w-3.5 text-ink" aria-hidden="true" />
              </span>
              <a href={`mailto:${site.email}`} className="break-all transition hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-3 text-center text-xs text-slate-500 md:px-8">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
