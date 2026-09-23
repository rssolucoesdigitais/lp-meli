import { ClipboardList, GraduationCap, Headset, Package, ShoppingCart, Store } from "lucide-react";
import Button from "@/components/ui/Button";
import GlassPanel from "@/components/ui/GlassPanel";
import SectionTitle from "@/components/ui/SectionTitle";
import { revealDelay } from "@/lib/utils";
import { services, whatsappLink } from "@/data/site";

const icons = [Store, Package, ShoppingCart, ClipboardList, GraduationCap, Headset];

export default function Solution() {
  return (
    <section id="solucao" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <SectionTitle
          index={2}
          eyebrow="A solução"
          title="Estruture sua operação de e-commerce com a RS"
          description="A RS Soluções Digitais vai além da simples publicação de produtos. Nosso trabalho é ajudar sua empresa a estruturar os principais pontos da operação para que o Mercado Livre faça parte de um processo mais organizado, profissional e fácil de administrar."
        />

        <GlassPanel className="divide-y divide-ink/10 p-2">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                data-reveal
                style={revealDelay(i, 70)}
                className="grid gap-3 rounded-2xl p-4 transition-colors hover:bg-yellow/[0.06] sm:grid-cols-[2.75rem_1fr] sm:items-start sm:gap-6 sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow to-yellow-dark shadow-md shadow-yellow/25">
                  <Icon className="h-5 w-5 text-ink" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </GlassPanel>

        <div data-reveal className="mt-10">
          <Button href={whatsappLink()} target="_blank">
            Quero entender como funciona
          </Button>
        </div>
      </div>
    </section>
  );
}
