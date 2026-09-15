"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Expand,
  Globe,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectCover } from "@/components/ProjectCover";
import { GitHubIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onOpen, index }: ProjectCardProps) {
  const isLarge = index === 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "group relative rounded-2xl border border-border bg-surface overflow-hidden",
        "hover:border-accent/40 transition-colors duration-300",
        isLarge && "md:col-span-2"
      )}
    >
      <button
        onClick={() => onOpen(project)}
        aria-label={`Open case study for ${project.title}`}
        className="block w-full text-left"
      >
        <div className="relative aspect-[16/9] md:aspect-[16/8] overflow-hidden bg-background">
          <ProjectCover type={project.cover} />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          <span className="absolute top-4 right-4 p-2 rounded-full bg-background/70 backdrop-blur border border-border text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Expand className="w-4 h-4" />
          </span>
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

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-accent">
                PROJECT {project.number}
              </p>
              <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </div>
            <span className="font-mono text-xs text-muted/60 shrink-0">
              {project.year}
            </span>
          </div>

          <p className="mt-3 text-sm text-muted leading-relaxed">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, isLarge ? 7 : 5).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-border bg-surface-2 text-muted"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > (isLarge ? 7 : 5) && (
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-border text-muted">
                +{project.stack.length - (isLarge ? 7 : 5)} more
              </span>
            )}
          </div>
        </div>
      </button>

      <div className="px-6 md:px-8 pb-6 md:pb-8 flex flex-wrap items-center gap-3">
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
        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors ml-auto"
        >
          Case Study
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.article>
  );
}