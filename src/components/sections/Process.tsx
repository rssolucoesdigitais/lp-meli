import logoMl from "@/assets/logo-ml.png";
import GlassPanel from "@/components/ui/GlassPanel";
import IndexTag from "@/components/ui/IndexTag";
import SectionTitle from "@/components/ui/SectionTitle";
import { revealDelay } from "@/lib/utils";
import { processSteps } from "@/data/site";

export default function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20">
      <img
        src={logoMl}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 w-96 rotate-6 opacity-[0.06]"
        style={{ maskImage: "radial-gradient(circle at 70% 50%, #000 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle index={3} eyebrow="O caminho" title="Como funciona a estruturação" />

        <div className="grid gap-6 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <div key={step.title} data-reveal style={revealDelay(i, 100)} className="group h-full">
              <GlassPanel className="h-full p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-20px_rgba(255,230,0,0.4)]">
                <IndexTag n={i + 1} className="transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 font-display text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </GlassPanel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
