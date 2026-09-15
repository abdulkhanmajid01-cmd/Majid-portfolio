"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { GitHubIcon } from "@/components/icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b",
          scrolled
            ? "bg-background/85 backdrop-blur-md border-border"
            : "bg-transparent border-transparent"
        )}
      >
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link
            href="#home"
            className="font-semibold tracking-tight text-sm md:text-base"
            onClick={() => setOpen(false)}
          >
            {site.shortName.toUpperCase()}
            <span className="text-accent">.</span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-md border border-border hover:border-accent/60 text-muted hover:text-accent transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-1.5 text-sm font-medium bg-accent text-background px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-md border border-border text-foreground"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-background/98 backdrop-blur-sm pt-16"
          >
            <div className="flex flex-col h-full px-8 py-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="py-3.5 text-xl font-medium border-b border-border text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-8 flex flex-col gap-3"
              >
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-border rounded-lg px-4 py-3.5 text-sm font-medium"
                >
<GitHubIcon className="w-4 h-4" />
                  GitHub Profile
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-accent text-background rounded-lg px-4 py-3.5 text-sm font-medium"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}