import logoMl from "@/assets/logo-ml.png";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/data/site";

const layers = ["Produtos", "Processos", "Gestão", "Marketplace"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-yellow/10 via-yellow/[0.03] to-white pt-24 md:pt-28">
      <div className="glow-orb absolute -left-24 -top-24 h-96 w-96 bg-gradient-to-br from-yellow/20 to-transparent" aria-hidden="true" />
      <div className="glow-orb absolute -right-32 top-1/3 h-[28rem] w-[28rem] bg-gradient-to-bl from-yellow-dark/12 to-transparent" aria-hidden="true" />
      <img
        src={logoMl}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-16 w-[28rem] rotate-6 opacity-[0.07] md:w-[36rem]"
        style={{ maskImage: "radial-gradient(circle at 60% 40%, #000 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-4 pb-20 pt-8 md:px-8 md:pb-28 lg:grid-cols-2 lg:items-center">
        <div data-reveal>
          <p className="sheet-index mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-ink/70 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
            Implantação no Mercado Livre
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] text-ink md:text-5xl">
            Sua empresa está pronta para vender no <span className="yellow-highlight">Mercado Livre</span>?
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            Entrar no Mercado Livre é fácil. Ter uma operação de e-commerce organizada, profissional e preparada
            para funcionar de verdade exige estrutura.
          </p>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-600">
            A RS Soluções Digitais ajuda sua empresa a organizar produtos, processos, gestão e operação para atuar
            no Mercado Livre de forma mais profissional.
          </p>
          <p className="mt-6 max-w-lg font-display text-xl font-bold text-ink">
            Não é só entrar no Mercado Livre. É entrar com <span className="yellow-highlight">estrutura</span>.
          </p>

          <div className="mt-10">
            <Button href={whatsappLink()} target="_blank">
              Quero estruturar minha operação
            </Button>
          </div>
        </div>

        <div data-reveal className="relative mx-auto flex w-full max-w-xs flex-col items-stretch">
          {layers.map((label) => (
            <div key={label}>
              <div className="cursor-default rounded-2xl border border-ink/10 bg-white px-4 py-3.5 text-center font-mono text-xs uppercase tracking-[0.15em] text-ink/70 shadow-sm transition-all duration-300 hover:scale-105 hover:border-yellow hover:shadow-md">
                {label}
              </div>
              <div className="mx-auto flex h-6 w-px flex-col items-center bg-gradient-to-b from-yellow-dark to-yellow-dark/10" aria-hidden="true" />
            </div>
          ))}
          <div className="cursor-default rounded-2xl border-2 border-yellow-dark bg-gradient-to-br from-yellow to-yellow-dark px-4 py-5 text-center font-display text-sm font-bold uppercase tracking-wide text-ink shadow-lg shadow-yellow/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow/50">
            Operação estruturada no Mercado Livre
          </div>
        </div>
      </div>
    </section>
  );
}
