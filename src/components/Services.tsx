import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you."
          description="From product idea to production deployment — full ownership across the stack."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-accent">
                  {service.number}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted/50 group-hover:text-accent transition-colors" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}