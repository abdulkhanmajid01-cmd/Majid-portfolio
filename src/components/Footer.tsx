import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { GitHubIcon } from "@/components/icons";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              {site.name.toUpperCase()}
            </p>
            <p className="mt-3 text-sm text-muted max-w-sm">
              Full-Stack Developer building real-world digital products.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
            >
              GitHub
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted">© 2026 {site.name}</p>
          <p className="text-xs text-muted flex items-center gap-1.5">
            Built with Next.js
            <GitHubIcon className="w-3.5 h-3.5" />
          </p>
        </div>
      </div>
    </footer>
  );
}