"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { heroKeywords } from "@/data/stats";
import { GitHubIcon } from "@/components/icons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const floats = [
  { label: "FULL-STACK", className: "top-[18%] left-[6%]", delay: 0 },
  { label: "AI", className: "top-[38%] right-[8%]", delay: 0.6 },
  { label: "PYTHON", className: "bottom-[30%] left-[4%]", delay: 1.2 },
  { label: "NODE.JS", className: "bottom-[24%] right-[5%]", delay: 1.8 },
  { label: "DATABASES", className: "top-[24%] right-[30%]", delay: 2.4 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-screen pt-24 pb-16 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 35% at 50% 42%, rgba(52,211,153,0.07), transparent 70%)",
        }}
      />

      {floats.map((f) => (
        <motion.span
          key={f.label}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 + f.delay, duration: 1 }}
          className={`hidden xl:block absolute font-mono text-[11px] tracking-[0.25em] text-accent/60 ${f.className}`}
        >
          {f.label}
        </motion.span>
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-6 w-full"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-medium text-muted">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl text-balance"
        >
          Full-Stack Developer building{" "}
          <span className="text-gradient">real-world digital products</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-2xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-accent text-background font-medium rounded-lg px-6 py-3.5 text-sm transition-all hover:shadow-[0_0_24px_rgba(52,211,153,0.35)]"
          >
            View My Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border hover:border-accent/60 rounded-lg px-6 py-3.5 text-sm font-medium text-foreground transition-colors"
          >
            Let&apos;s Work Together
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub Profile
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-0 inset-x-0 border-t border-border bg-background/60 backdrop-blur-sm"
      >
        <div className="flex overflow-hidden whitespace-nowrap animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
              {heroKeywords.map((keyword) => (
                <span
                  key={`${dup}-${keyword}`}
                  className="flex items-center gap-4 px-6 py-3.5 font-mono text-[11px] tracking-[0.25em] text-muted/70"
                >
                  {keyword}
                  <span className="text-accent/50">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}