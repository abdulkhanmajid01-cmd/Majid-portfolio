export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "5+", label: "Major Projects" },
  { value: "Full-Stack", label: "Applications" },
  { value: "AI / RAG", label: "Systems" },
  { value: "Production", label: "Websites" },
];

export interface JourneyItem {
  period: string;
  title: string;
  description: string;
}

export const engineeringJourney: JourneyItem[] = [
  {
    period: "2024 — Present",
    title: "Independent Development",
    description:
      "Designing, building and shipping full-stack systems independently — SaaS platforms, AI / RAG pipelines and automation tools.",
  },
  {
    period: "2024 — 2025",
    title: "Academic Work",
    description:
      "Final year project: Go Helper, a Flutter-based location utility application delivered as a packaged Android APK release.",
  },
  {
    period: "2026",
    title: "Production Websites",
    description:
      "Developed Toheed Watches — a live, production e-commerce website deployed for a real business.",
  },
  {
    period: "Ongoing",
    title: "Projects & Learning",
    description:
      "Continuously building — from GymFlow CRM and Khan Groups of Technologies to MALIS, an AI legal intelligence system.",
  },
];

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export const approach: ApproachStep[] = [
  { number: "01", title: "Discover", description: "Understand the problem." },
  {
    number: "02",
    title: "Architect",
    description: "Design the system and technology choices.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop frontend, backend and integrations.",
  },
  {
    number: "04",
    title: "Test",
    description: "Validate functionality, security and usability.",
  },
  { number: "05", title: "Deploy", description: "Ship the product." },
  {
    number: "06",
    title: "Improve",
    description: "Monitor, maintain and iterate.",
  },
];

export interface ProofCard {
  title: string;
  description: string;
}

export const proofCards: ProofCard[] = [
  {
    title: "AI Systems",
    description: "RAG, NLP, semantic search and intelligent automation.",
  },
  {
    title: "Full-Stack Systems",
    description: "SaaS applications, APIs, databases and authentication.",
  },
  {
    title: "Production Web",
    description: "Real-world website and e-commerce development.",
  },
];

export const heroKeywords = [
  "FULL-STACK",
  "AI",
  "SAAS",
  "PYTHON",
  "NEXT.JS",
  "NODE.JS",
  "DATABASES",
  "AUTOMATION",
];