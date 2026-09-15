import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, Globe } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCover } from "@/components/ProjectCover";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Abdul Majid Khan — SaaS platforms, AI / RAG systems, full-stack applications, automation tools and production websites.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Portfolio"
            title="All projects."
            description="Every system I've designed, engineered and shipped — from SaaS platforms to AI pipelines to production websites."
          />
        </section>
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/40 transition-colors duration-300"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block"
                  aria-label={`Open case study for ${project.title}`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-background">
                    <ProjectCover type={project.cover} />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      {project.badge && (
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border border-accent/50 text-accent bg-background/70 backdrop-blur">
                          {project.badge}
                        </span>
                      )}
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border border-border text-muted bg-background/70 backdrop-blur">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-accent">
                        PROJECT {project.number}
                      </p>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="mt-2 block text-xl md:text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors"
                      >
                        {project.title}
                      </Link>
                    </div>
                    <span className="font-mono text-xs text-muted/60 shrink-0">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-border bg-surface-2 text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-border hover:border-accent/60 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                      >
                        <GitHubIcon className="w-4 h-4" />
                        GitHub
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent text-background rounded-lg px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        <Globe className="w-4 h-4" />
                        {project.liveLabel ?? "Live Demo"}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.apk && (
                      <a
                        href={project.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-accent/50 text-accent rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent/10 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download APK
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors ml-auto"
                    >
                      Case Study
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}