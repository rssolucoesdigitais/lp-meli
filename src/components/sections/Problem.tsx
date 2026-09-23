import GlassPanel from "@/components/ui/GlassPanel";
import IndexTag from "@/components/ui/IndexTag";
import SectionTitle from "@/components/ui/SectionTitle";
import { revealDelay } from "@/lib/utils";
import { problemPoints } from "@/data/site";

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="glow-orb absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 bg-gradient-to-br from-yellow/10 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <SectionTitle
          index={1}
          eyebrow="O problema"
          title="Publicar produtos é apenas o começo"
          description="Muitas empresas entram no Mercado Livre acreditando que basta cadastrar produtos, definir preços e começar a vender. Mas, quando a operação começa a ganhar volume, surgem novos desafios:"
        />

        <GlassPanel className="p-3 sm:p-4">
          <ul className="grid gap-1 sm:grid-cols-2">
            {problemPoints.map((point, i) => (
              <li
                key={point}
                data-reveal
                style={revealDelay(i, 60)}
                className="flex items-center gap-4 rounded-2xl px-3 py-3.5 text-sm text-slate-700 transition-colors hover:bg-yellow/[0.06] sm:px-4"
              >
                <IndexTag n={i + 1} className="h-9 w-9 text-xs" />
                {point}
              </li>
            ))}
          </ul>
        </GlassPanel>

        <div data-reveal className="mx-auto mt-10 max-w-2xl">
          <p className="text-lg font-semibold text-ink">O problema não é estar no Mercado Livre.</p>
          <p className="mt-2 text-lg leading-relaxed text-slate-600">
            O problema é tentar operar um e-commerce sem uma estrutura preparada para isso. É justamente essa base
            que a RS ajuda sua empresa a construir.
          </p>
        </div>
      </div>
    </section>
  );
}
