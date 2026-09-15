import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Globe,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCover } from "@/components/ProjectCover";
import { GitHubIcon } from "@/components/icons";
import { getProjectBySlug, projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

function ArchitectureDiagram({ steps }: { steps: { label: string; detail?: string }[] }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
      <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent">
        System Architecture
      </p>
      <div className="mt-6 flex flex-col items-start gap-1.5">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-start">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-muted/60 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="border border-accent/40 bg-surface-2 rounded-lg px-5 py-3">
                <p className="text-sm font-medium">{step.label}</p>
                {step.detail && (
                  <p className="text-xs text-muted mt-0.5">{step.detail}</p>
                )}
              </div>
            </div>
            {i < steps.length - 1 && (
              <ArrowDown className="w-4 h-4 text-accent/60 ml-[2.6rem] my-1.5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="mx-auto max-w-6xl px-6 py-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            <div className="aspect-[16/9] md:aspect-[21/9] bg-background">
              <ProjectCover type={project.cover} />
            </div>
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  PROJECT {project.number}
                </span>
                {project.badge && (
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border border-accent/50 text-accent">
                    {project.badge}
                  </span>
                )}
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border border-border text-muted">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-muted/70 ml-auto">
                  {project.year}
                </span>
              </div>
              <h1 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
                {project.title}
              </h1>
              <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-3xl">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border hover:border-accent/60 rounded-lg px-5 py-3 text-sm font-medium transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    Source Code
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-background rounded-lg px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
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
                    className="inline-flex items-center gap-2 border border-accent/50 text-accent rounded-lg px-5 py-3 text-sm font-medium hover:bg-accent/10 transition-colors"
                  >
                    <ArrowDown className="w-4 h-4" />
                    Download APK
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            {[
              {
                title: "Overview",
                paragraphs: project.caseStudy.overview,
              },
              {
                title: "Problem",
                paragraphs: project.caseStudy.problem,
              },
              {
                title: "Solution",
                paragraphs: project.caseStudy.solution,
              },
              {
                title: "Development Challenges",
                paragraphs: project.caseStudy.challenges,
              },
              {
                title: "Results",
                paragraphs: project.caseStudy.results,
              },
            ].map((section) => (
              <div key={section.title} className={section.title === "Overview" ? "lg:col-span-2" : ""}>
                <div className="rounded-2xl border border-border bg-surface p-6 md:p-8 h-full">
                  <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
                    {section.title}
                  </p>
                  <div className="mt-4 space-y-3">
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-sm md:text-base text-muted leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="lg:col-span-2">
              <ArchitectureDiagram steps={project.caseStudy.architecture} />
            </div>
            <div>
              <div className="rounded-2xl border border-border bg-surface p-6 md:p-8 h-full">
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
                  Key Features
                </p>
                <div className="mt-5 grid sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-muted"
                    >
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-border bg-surface p-6 md:p-8 h-full">
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
                  Technology
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3.5 py-2 rounded-lg border border-border bg-surface-2 text-foreground/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 pb-24">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
              More Work
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group rounded-xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
                >
                  <p className="font-mono text-xs text-accent">
                    PROJECT {item.number}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-muted/50 group-hover:text-accent transition-colors" />
                  </div>
                  <p className="mt-2 text-sm text-muted">{item.category}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}