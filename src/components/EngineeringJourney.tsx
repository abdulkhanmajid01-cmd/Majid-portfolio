"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/SectionHeading";
import { approach, engineeringJourney } from "@/data/stats";

export function EngineeringJourney() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Experience"
          title="Engineering Journey"
          description="Independent development, academic work and real-world production projects."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-16">
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
            />
            <div className="space-y-10">
              {engineeringJourney.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08} className="relative pl-8">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent bg-background"
                  />
                  <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent">
                Developer Approach
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                How I Build
              </h3>
            </Reveal>
            <div className="mt-8 space-y-3">
              {approach.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-5 rounded-xl border border-border bg-surface px-6 py-4"
                  >
                    <span className="font-mono text-sm text-accent">
                      {step.number}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{step.title}</p>
                      <p className="text-xs text-muted mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}