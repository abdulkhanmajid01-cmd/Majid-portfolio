import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export function TechStack() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Technology"
          title="The stack I work with."
          description="A pragmatic toolkit chosen for building real products — from interface to infrastructure."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40 group"
            >
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted group-hover:text-accent transition-colors">
                {group.label}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-border bg-surface-2 text-foreground/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/70" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}