import { SectionHeading } from "@/components/SectionHeading";
import { stats } from "@/data/stats";

const disciplines = [
  "Frontend",
  "Backend",
  "Databases",
  "AI",
  "APIs",
  "Automation",
  "Deployment",
];

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="About"
          title="I build complete software systems."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-muted">
            <p>
              I build complete software systems — from user interfaces and APIs
              to databases, authentication, AI pipelines and deployment. I work
              across the full stack, and I ship the whole system, not just a
              slice of it.
            </p>
            <p>
              This portfolio demonstrates both academic and personal
              engineering projects — SaaS platforms, AI / RAG systems and
              automation tools — alongside real-world production work, such as
              a live e-commerce website deployed for a business.
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
      </div>
    </section>
  );
}