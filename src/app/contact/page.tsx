import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/SectionHeading";
import { Contact } from "@/components/Contact";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Abdul Majid Khan — Full-Stack Developer for web applications, SaaS platforms, AI systems, automation and production websites.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="What I can build for you."
              description="From product idea to production deployment — full ownership across the stack."
            />
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.number}
                className="rounded-xl border border-border bg-surface p-7 hover:border-accent/40 transition-colors"
              >
                <span className="font-mono text-sm text-accent">
                  {service.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}