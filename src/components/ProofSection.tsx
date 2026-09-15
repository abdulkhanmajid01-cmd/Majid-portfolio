import { Boxes, BrainCircuit, Globe } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/SectionHeading";
import { proofCards } from "@/data/stats";

const icons = [BrainCircuit, Boxes, Globe];

export function ProofSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Proof of Work"
          title="From experimental systems to production websites."
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-3 gap-4">
          {proofCards.map((card, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="group h-full rounded-xl border border-border bg-surface p-8 text-center transition-all duration-300 hover:border-accent/40">
                  <div className="mx-auto w-12 h-12 rounded-xl border border-accent/30 bg-accent/5 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}