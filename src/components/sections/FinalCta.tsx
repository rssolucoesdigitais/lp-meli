import { MessageCircle } from "lucide-react";
import GlassPanel from "@/components/ui/GlassPanel";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/data/site";

export default function FinalCta() {
  return (
    <section id="cta-final" className="relative overflow-hidden bg-white py-12 sm:py-20 md:py-24">
      <div className="glow-orb absolute -right-24 -top-24 h-80 w-80 bg-gradient-to-bl from-yellow/30 to-transparent" aria-hidden="true" />
      <div className="glow-orb absolute -bottom-20 -left-20 h-72 w-72 bg-gradient-to-tr from-yellow-dark/20 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-4 md:px-8">
        <div data-reveal>
          <GlassPanel className="p-10 text-center md:p-14">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-ink md:text-5xl">
              Estruture hoje a operação que sua empresa quer ter <span className="yellow-highlight">amanhã</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Se o Mercado Livre faz parte dos planos da sua empresa, comece construindo uma base mais organizada
              para o e-commerce. Não espere a operação crescer para perceber que produtos, processos e gestão não
              estão preparados.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              A RS Soluções Digitais pode ajudar sua empresa a estruturar essa operação desde o início ou organizar
              o que já existe.
            </p>

            <p className="mx-auto mt-8 max-w-xl rounded-2xl border border-ink/10 bg-yellow/10 p-5 text-left font-display text-xl font-bold text-ink">
              Pare de apenas pensar em entrar no Mercado Livre.
              <br />
              Prepare sua empresa para operar de verdade no e-commerce.
            </p>

            <div className="mt-10">
              <Button href={whatsappLink()} target="_blank" className="px-10 py-4 text-base">
                <span className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Quero estruturar meu e-commerce com a RS
                </span>
              </Button>
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
