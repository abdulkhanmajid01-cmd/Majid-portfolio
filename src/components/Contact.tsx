"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Send, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/SectionHeading";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/data/site";

const inputClass =
  "w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  // Your HubSpot Portal ID & Form GUID
  const PORTAL_ID = "246572008";
  const FORM_GUID = "08a8edfa-8580-4e7c-9409-d2d4e234831d";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Split Name into First Name & Last Name for HubSpot
    const nameParts = name.trim().split(" ");
    const firstname = nameParts[0] || "";
    const lastname = nameParts.slice(1).join(" ") || "";

    const payload = {
      fields: [
        { name: "firstname", value: firstname },
        { name: "lastname", value: lastname },
        { name: "email", value: email },
        { name: "project_type", value: projectType }, // Internal property name
        { name: "budget", value: budget },             // Internal property name
        { name: "message", value: message },
      ],
      context: {
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: typeof document !== "undefined" ? document.title : "",
      },
    };

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setProjectType("");
        setBudget("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("HubSpot submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="Have a product idea, an existing application that needs improvement, or a technical problem to solve?"
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface p-6 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-muted mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-type"
                    className="block text-xs font-medium text-muted mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="">Select a type</option>
                    <option>Full-Stack Web App</option>
                    <option>SaaS Platform</option>
                    <option>AI / RAG System</option>
                    <option>Backend / API</option>
                    <option>WordPress / E-Commerce</option>
                    <option>Automation / Python</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="contact-budget"
                    className="block text-xs font-medium text-muted mb-2"
                  >
                    Budget
                  </label>
                  <select
                    id="contact-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="">Select a range</option>
                    <option>Under $500</option>
                    <option>$500 – $1,500</option>
                    <option>$1,500 – $5,000</option>
                    <option>$5,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-accent text-background rounded-lg px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    Sending...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Success / Error Status Notifications */}
              {status === "success" && (
                <p className="text-xs text-emerald-400 font-medium pt-1">
                  Thank you! Your message has been sent successfully. Check your email for details.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-rose-400 font-medium pt-1">
                  Something went wrong. Please try again or reach out via email.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center justify-between rounded-xl border border-border bg-surface p-5 hover:border-accent/40 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted" />
                  <span>
                    <span className="block text-sm font-medium">Email Me</span>
                    <span className="block text-xs text-muted mt-0.5">
                      {site.email}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted/50" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-border bg-surface p-5 hover:border-accent/40 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <GitHubIcon className="w-5 h-5 text-muted" />
                  <span>
                    <span className="block text-sm font-medium">GitHub</span>
                    <span className="block text-xs text-muted mt-0.5">
                      {site.githubHandle}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted/50" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-border bg-surface p-5 hover:border-accent/40 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <LinkedInIcon className="w-5 h-5 text-muted" />
                  <span>
                    <span className="block text-sm font-medium">LinkedIn</span>
                    <span className="block text-xs text-muted mt-0.5">
                      Profile
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted/50" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}