import { ArrowUpRight, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/SectionHeading";
import { GitHubIcon } from "@/components/icons";
import { site } from "@/data/site";

const repos = [
  {
    name: "GymFlow-CRM",
    description: "Gym management SaaS — Next.js, Express, MongoDB, JWT, RBAC.",
  },
  {
    name: "khan-groups-website",
    description: "Business platform — Next.js, Supabase, Prisma, NextAuth.",
  },
  {
    name: "-MALIS---Legal-Intelligence-System",
    description: "AI legal intelligence — RAG, FAISS, NLP, report generation.",
  },
  {
    name: "VOICE-ASSISTANCE",
    description: "Python voice assistant — speech recognition and automation.",
  },
  {
    name: "go-helper",
    description: "Flutter location utility app with APK release.",
  },
];

export function GitHubSection() {
  return (
    <section id="github" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Open Source & Code"
            title="Selected repositories from my GitHub."
            description="Code that ships — SaaS platforms, AI systems, automation and mobile."
          />
          <Reveal delay={0.1} className="shrink-0">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-accent text-background rounded-lg px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <GitHubIcon className="w-4 h-4" />
              View GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-8 font-mono text-sm text-muted">
          {site.githubHandle}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 0.05}>
              <a
                href={`${site.github}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5 h-full"
              >
                <div className="flex items-center justify-between">
                  <Code2 className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-muted/50 group-hover:text-accent transition-colors" />
                </div>
                <p className="mt-4 font-mono text-sm font-medium truncate">
                  {repo.name}
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {repo.description}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}