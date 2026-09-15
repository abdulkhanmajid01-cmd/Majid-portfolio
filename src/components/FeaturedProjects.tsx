"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { projects, projectFilters } from "@/data/projects";
import type { Project, ProjectFilter } from "@/data/projects";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filters.includes(activeFilter));

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects I've designed, engineered and shipped."
          />
          <div className="flex flex-wrap gap-2 shrink-0">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200",
                  activeFilter === filter
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted hover:text-foreground hover:border-accent/40"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-14 grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-border hover:border-accent/60 rounded-lg px-6 py-3 text-sm font-medium transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}