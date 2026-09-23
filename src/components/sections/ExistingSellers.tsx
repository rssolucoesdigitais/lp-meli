import meliLupa from "@/assets/meli-lupa.png";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/data/site";

export default function ExistingSellers() {
  return (
    <section id="ja-vende" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div data-reveal className="grid gap-6 md:grid-cols-[1fr_1.5fr] md:items-center md:gap-10">
          <img
            src={meliLupa}
            alt="Estrutura de operação no Mercado Livre"
            className="order-2 mx-auto w-full max-w-[15rem] md:order-1 md:max-w-sm"
          />

          <div className="order-1 md:order-2">
            <p className="sheet-index mb-3 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-gradient-to-r from-yellow/10 to-transparent px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-ink/50">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-yellow to-yellow-dark" aria-hidden="true" />
              Já vende no Mercado Livre?
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-ink md:text-4xl">
              Sente que a operação está desorganizada?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Você não precisa necessariamente começar do zero. Se sua empresa já vende, mas enfrenta dificuldades
              com organização, produtos, processos ou gestão, a RS pode ajudar a analisar a estrutura atual e
              identificar o que precisa ser melhorado.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Porque o desafio não é apenas começar a vender. É manter uma operação organizada conforme o
              e-commerce evolui.
            </p>

            <div className="mt-8">
              <Button href={whatsappLink()} target="_blank">
                Quero organizar minha operação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
