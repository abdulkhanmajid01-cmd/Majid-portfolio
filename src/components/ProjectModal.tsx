"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  X,
} from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectCover } from "@/components/ProjectCover";
import { GitHubIcon } from "@/components/icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ArchitectureDiagram({ project }: { project: Project }) {
  const steps = project.caseStudy.architecture;
  return (
    <div className="rounded-xl border border-border bg-background p-6">
      <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
        System Architecture
      </p>
      <div className="flex flex-col items-start gap-1.5">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted/60 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="border border-accent/40 bg-surface-2 rounded-lg px-4 py-2.5">
                <p className="text-sm font-medium">{step.label}</p>
                {step.detail && (
                  <p className="text-xs text-muted mt-0.5">{step.detail}</p>
                )}
              </div>
            </div>
            {i < steps.length - 1 && (
              <ArrowDown className="w-4 h-4 text-accent/60 ml-[2.35rem] my-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section>
      <h4 className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
        {title}
      </h4>
      <div className="mt-3 space-y-3">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-sm p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden my-auto"
          >
            <div className="relative">
              <div className="aspect-[16/9] bg-background overflow-hidden">
                <ProjectCover type={project.cover} />
              </div>
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur border border-border text-muted hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
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

            <div className="p-6 md:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs text-accent">
                    PROJECT {project.number}
                  </p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted/70 shrink-0 mt-1">
                  {project.year}
                </span>
              </div>

              <div className="mt-8 space-y-8">
                <Section title="Overview" paragraphs={project.caseStudy.overview} />
                <Section title="Problem" paragraphs={project.caseStudy.problem} />
                <Section title="Solution" paragraphs={project.caseStudy.solution} />
                <ArchitectureDiagram project={project} />

                <section>
                  <h4 className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
                    Key Features
                  </h4>
                  <div className="mt-4 grid sm:grid-cols-2 gap-2">
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
                </section>

                <section>
                  <h4 className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
                    Technology
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-md border border-border bg-surface-2 text-foreground/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <Section
                  title="Development Challenges"
                  paragraphs={project.caseStudy.challenges}
                />
                <Section title="Results" paragraphs={project.caseStudy.results} />

                <div className="pt-2 border-t border-border">
                  <h4 className="font-mono text-[11px] tracking-[0.3em] uppercase text-muted">
                    Links
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-border hover:border-accent/60 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
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
                        className="inline-flex items-center gap-2 bg-accent text-background rounded-lg px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        {project.liveLabel ?? "Live Demo"}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.apk && (
                      <a
                        href={project.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-accent/50 text-accent rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent/10 transition-colors"
                      >
                        Download APK
                        <ArrowDown className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      onClick={onClose}
                      className="inline-flex items-center gap-2 border border-border hover:border-accent/60 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
                    >
                      Open Case Study Page
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}