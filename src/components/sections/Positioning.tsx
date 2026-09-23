import logoMl from "@/assets/logo-ml.png";
import GlassPanel from "@/components/ui/GlassPanel";

export default function Positioning() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="glow-orb absolute -left-20 -top-20 h-72 w-72 bg-gradient-to-br from-yellow/25 to-transparent" aria-hidden="true" />
      <div className="glow-orb absolute -bottom-24 -right-20 h-80 w-80 bg-gradient-to-tl from-yellow-dark/20 to-transparent" aria-hidden="true" />
      <img
        src={logoMl}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 w-96 -rotate-12 opacity-[0.06]"
        style={{ maskImage: "radial-gradient(circle at 30% 70%, #000 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <div data-reveal>
          <GlassPanel className="p-10 text-center md:p-16">
            <p className="sheet-index mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-yellow/10 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-ink/60">
              <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
              Posicionamento
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-ink md:text-4xl">
              O Mercado Livre é o canal. <span className="yellow-highlight">A estrutura é o que sustenta a operação.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Criar uma conta e publicar produtos é apenas uma parte do processo. Quando entram pedidos, estoque,
              preços, atualizações, anúncios, integrações e gestão, sua empresa precisa de uma estrutura capaz de
              manter tudo organizado.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              Sem isso, a operação pode começar a depender de improvisos e processos manuais difíceis de acompanhar.
              Com uma estrutura bem definida, sua empresa passa a ter mais clareza sobre como o e-commerce funciona
              e como cada parte da operação se conecta.
            </p>

            <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-3">
              {["Menos improviso.", "Mais organização.", "Mais controle sobre a operação."].map((phrase) => (
                <span
                  key={phrase}
                  className="rounded-full border border-yellow-dark/40 bg-gradient-to-r from-yellow to-yellow-dark px-4 py-2 font-display text-sm font-bold text-ink"
                >
                  {phrase}
                </span>
              ))}
            </div>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
