import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/SectionHeading";
import { stats, approach, engineeringJourney } from "@/data/stats";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Abdul Majid Khan — a Full-Stack Developer building scalable web applications, SaaS platforms, AI-powered systems and production websites.",
};

const disciplines = [
  "Frontend",
  "Backend",
  "Databases",
  "AI",
  "APIs",
  "Automation",
  "Deployment",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading eyebrow="About" title="I build complete software systems." />
          <div className="mt-10 grid lg:grid-cols-2 gap-12">
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted">
              <p>
                I build complete software systems — from user interfaces and
                APIs to databases, authentication, AI pipelines and deployment.
                I work across the full stack, and I ship the whole system, not
                just a slice of it.
              </p>
              <p>
                This portfolio demonstrates both academic and personal
                engineering projects — SaaS platforms, AI / RAG systems and
                automation tools — alongside real-world production work, such
                as a live e-commerce website deployed for a business.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {disciplines.map((discipline) => (
                  <span
                    key={discipline}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-surface text-muted"
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-surface p-6 md:p-8 flex flex-col justify-between min-h-36"
                >
                  <p className="text-xl md:text-2xl font-semibold tracking-tight text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent">
              Technology
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
              The stack I work with.
            </h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
              >
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
                  {group.label}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-md border border-border bg-surface-2 text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent">
              Experience
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
              Engineering Journey
            </h2>
          </Reveal>
          <div className="mt-10 space-y-8">
            {engineeringJourney.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} className="relative pl-8">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent bg-background"
                />
                <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted max-w-2xl">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent">
              Developer Approach
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
              How I Build
            </h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {approach.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <span className="font-mono text-sm text-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}