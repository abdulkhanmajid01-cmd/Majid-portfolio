export type ProjectFilter =
  | "All"
  | "Full-Stack"
  | "SaaS"
  | "AI / ML"
  | "Python"
  | "Web"
  | "Mobile"
  | "Production";

export interface ArchitectureStep {
  label: string;
  detail?: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  filters: ProjectFilter[];
  description: string;
  year: string;
  badge?: string;
  github: string;
  live?: string;
  liveLabel?: string;
  apk?: string;
  stack: string[];
  features: string[];
  cover: "gym" | "business" | "pipeline" | "terminal" | "mobile" | "ecommerce";
  caseStudy: {
    overview: string[];
    problem: string[];
    solution: string[];
    architecture: ArchitectureStep[];
    challenges: string[];
    results: string[];
  };
}

export const projectFilters: ProjectFilter[] = [
  "All",
  "Full-Stack",
  "SaaS",
  "AI / ML",
  "Python",
  "Web",
  "Mobile",
  "Production",
];

export const projects: Project[] = [
  {
    slug: "gymflow-crm",
    number: "01",
    title: "GymFlow CRM",
    category: "Full-Stack SaaS",
    filters: ["Full-Stack", "SaaS"],
    description:
      "Production-oriented gym management SaaS designed to manage members, memberships, staff, attendance, payments and gym operations.",
    year: "2025",
    badge: "Featured",
    github: "https://github.com/abdulkhanmajid01-cmd/GymFlow-CRM",
    stack: [
      "Next.js 16",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "RBAC",
    ],
    features: [
      "Role-based authentication",
      "Admin dashboard",
      "Receptionist dashboard",
      "Trainer dashboard",
      "Member management",
      "Membership plans",
      "Attendance management",
      "Payment management",
      "Staff management",
      "Protected routes",
      "JWT authentication",
    ],
    cover: "gym",
    caseStudy: {
      overview: [
        "GymFlow CRM is a production-oriented gym management SaaS. It centralizes the core operations of a gym into a single application: members, memberships, staff, attendance, payments and daily operations.",
        "The system is organized around role-based dashboards so each actor — admin, receptionist and trainer — sees only the tools their job requires.",
      ],
      problem: [
        "Gym operations are typically scattered across spreadsheets, paper registers and disconnected tools, which makes member tracking, attendance and payment records unreliable and slow to reconcile.",
        "Different staff roles need different views of the same data, and any shared system needs strict access control so that only authorized roles can modify members, plans or payments.",
      ],
      solution: [
        "GymFlow CRM models the full gym workflow: members register against membership plans, check in through attendance tracking, and settle payments recorded against their accounts.",
        "A JWT-based authentication layer with bcrypt-hashed credentials and role-based access control (RBAC) protects every route, while dedicated dashboards give each role a focused interface for its responsibilities.",
      ],
      architecture: [
        { label: "Frontend", detail: "Next.js 16 + React + Tailwind CSS" },
        { label: "API", detail: "REST endpoints consumed by the frontend" },
        { label: "Express", detail: "Node.js backend with route protection" },
        { label: "MongoDB", detail: "Mongoose models for members, plans, staff, attendance, payments" },
      ],
      challenges: [
        "Designing an RBAC model that stays consistent across API middleware and client-side routing so no protected operation is reachable from the wrong role.",
        "Structuring MongoDB schemas so membership plans, payments and attendance remain linked to members without denormalizing into an unmaintainable document graph.",
        "Keeping dashboards responsive while several role views share the same underlying data.",
      ],
      results: [
        "A complete, production-oriented SaaS codebase covering the full gym lifecycle — from member onboarding to payment reconciliation.",
        "Clear separation between admin, receptionist and trainer workflows, with protected routes enforced end to end.",
      ],
    },
  },
  {
    slug: "khan-groups-website",
    number: "02",
    title: "Khan Groups of Technologies",
    category: "Full-Stack Business Platform",
    filters: ["Full-Stack", "Web", "Production"],
    description:
      "Full-stack business platform featuring a modern website, database-driven content, authentication, admin dashboard, blog CMS and lead management.",
    year: "2025",
    badge: "Full-Stack Platform",
    github: "https://github.com/abdulkhanmajid01-cmd/khan-groups-website",
    stack: [
      "Next.js 16",
      "React 19",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Resend",
      "JavaScript",
    ],
    features: [
      "Full website",
      "Admin dashboard",
      "Authentication",
      "Database integration",
      "Blog CMS",
      "Contact / lead management",
      "Protected admin routes",
      "Email notifications",
      "Case studies",
      "Services pages",
      "Blog system",
    ],
    cover: "business",
    caseStudy: {
      overview: [
        "Khan Groups of Technologies is a full-stack business platform: a modern marketing website backed by a database-driven content layer, authentication, an admin dashboard, a blog CMS and lead management.",
        "It demonstrates the architecture of a real business web presence where marketing content and operational data share one system.",
      ],
      problem: [
        "A business website is only useful if the company can manage it. Static sites require a developer for every change, and leads submitted through a contact form often disappear into an inbox with no pipeline.",
        "The platform needed to serve public content while keeping administration, publishing and lead handling behind protected, authenticated workflows.",
      ],
      solution: [
        "Content, blog posts, case studies and leads are stored in PostgreSQL and managed through Prisma, with NextAuth securing admin routes and an admin dashboard for publishing and lead management.",
        "Email notifications via Resend keep the team informed of new submissions, tying the public website to an operational backend.",
      ],
      architecture: [
        { label: "Next.js", detail: "Public website + admin dashboard" },
        { label: "API Routes", detail: "Server actions and route handlers" },
        { label: "Prisma", detail: "Type-safe data layer and migrations" },
        { label: "Supabase / PostgreSQL", detail: "Database for content, users and leads" },
        { label: "Admin / Blog / Leads", detail: "Protected content management workflows" },
      ],
      challenges: [
        "Designing database schemas that support blogs, case studies and services while keeping the admin interface simple to use.",
        "Securing admin routes and API access so the public website remains fast while management stays private.",
        "Integrating transactional email into form flows without blocking the user experience.",
      ],
      results: [
        "A database-driven business platform where content and leads are managed in-house rather than by a developer.",
        "A production-grade stack — Next.js, Supabase, PostgreSQL, Prisma and NextAuth — suitable for a real company website.",
      ],
    },
  },
  {
    slug: "malis",
    number: "03",
    title: "MALIS — Legal Intelligence System",
    category: "AI / RAG / NLP",
    filters: ["AI / ML", "Python"],
    description:
      "AI-powered legal intelligence system that uses RAG, semantic search and NLP techniques to analyze cybercrime-related cases and generate structured legal reports.",
    year: "2025",
    badge: "AI / RAG",
    github: "https://github.com/abdulkhanmajid01-cmd/-MALIS---Legal-Intelligence-System",
    stack: [
      "Python",
      "Gradio",
      "Sentence Transformers",
      "FAISS",
      "PyPDF",
      "NumPy",
      "NLP",
      "RAG",
    ],
    features: [
      "Legal document upload",
      "PDF processing",
      "Semantic search",
      "Vector embeddings",
      "FAISS retrieval",
      "RAG pipeline",
      "Cybercrime pattern detection",
      "Legal reasoning engine",
      "FIR-style report generation",
    ],
    cover: "pipeline",
    caseStudy: {
      overview: [
        "MALIS is an AI-powered legal intelligence system. It combines Retrieval-Augmented Generation (RAG), semantic search and NLP techniques to analyze cybercrime-related case documents and generate structured legal reports.",
        "Built in Python with a Gradio interface, it walks uploaded PDFs through a full pipeline — extraction, embedding, retrieval, reasoning — and produces a structured report.",
      ],
      problem: [
        "Legal analysis of cybercrime cases is document-heavy: case files, FIRs and supporting material must be read, compared and summarized before any structured report can be produced.",
        "Keyword search is too brittle for legal language — the same concept appears with different wording across documents, so retrieval needs to be semantic rather than lexical.",
      ],
      solution: [
        "MALIS processes uploaded PDFs, extracts text, chunks it, and generates dense vector embeddings using Sentence Transformers. FAISS provides fast semantic retrieval over the embedded corpus.",
        "Retrieved passages feed a RAG pipeline with a legal reasoning engine that detects cybercrime-related patterns and composes an FIR-style structured report.",
      ],
      architecture: [
        { label: "Documents", detail: "Cybercrime case files (PDF)" },
        { label: "PyPDF", detail: "Text extraction" },
        { label: "Chunking", detail: "Semantic document segmentation" },
        { label: "Embeddings", detail: "Sentence Transformers" },
        { label: "FAISS", detail: "Vector index + semantic retrieval" },
        { label: "RAG", detail: "Context-augmented generation" },
        { label: "Legal Reasoning", detail: "Pattern detection + reasoning engine" },
        { label: "Report", detail: "Structured FIR-style output" },
      ],
      challenges: [
        "Chunking legal text so that retrieval preserves argument structure instead of splitting mid-document logic.",
        "Tuning embedding and retrieval parameters so semantic search surfaces relevant passages even with paraphrased legal terminology.",
        "Designing the reasoning layer to produce structured, report-ready output rather than free-form text.",
      ],
      results: [
        "An end-to-end RAG system that turns raw legal PDFs into structured, searchable intelligence.",
        "A working demonstration of semantic retrieval, vector search and legal reasoning applied to cybercrime documentation.",
      ],
    },
  },
  {
    slug: "voice-assistant",
    number: "04",
    title: "Voice Assistant",
    category: "Python / Automation / AI",
    filters: ["Python", "AI / ML"],
    description:
      "Python-based voice assistant capable of speech recognition, text-to-speech, web automation, system control, notes, reminders and information lookup.",
    year: "2025",
    github: "https://github.com/abdulkhanmajid01-cmd/VOICE-ASSISTANCE",
    stack: [
      "Python",
      "Speech Recognition",
      "Text-to-Speech",
      "Tkinter",
      "Google Speech API",
      "Wikipedia API",
      "Weather API",
    ],
    features: [
      "Speech recognition",
      "Text-to-speech",
      "Voice commands",
      "Web browsing",
      "Wikipedia search",
      "Weather information",
      "Music control",
      "Notes",
      "Reminders",
      "Alarms",
      "Email functionality",
      "System monitoring",
      "GUI",
      "Wake word support",
    ],
    cover: "terminal",
    caseStudy: {
      overview: [
        "Voice Assistant is a Python application that turns spoken commands into real actions: answering questions, controlling the system, browsing the web, and managing notes, reminders and alarms.",
        "It combines speech recognition, text-to-speech and external APIs (Google Speech, Wikipedia, weather) behind a Tkinter GUI.",
      ],
      problem: [
        "Hands-free interaction with a computer usually requires a heavy commercial assistant or a cloud dependency. The goal was a local, extensible assistant built from Python libraries and public APIs.",
        "Everyday tasks — weather checks, Wikipedia lookups, notes, reminders, alarms — should work through natural voice commands with minimal setup.",
      ],
      solution: [
        "The assistant listens for a wake word, captures speech through Google Speech recognition, parses the command, and routes it to the right handler: web automation, information APIs, notes, timers or system control.",
        "A Tkinter GUI provides a visible interface and status feedback, while text-to-speech closes the loop with spoken responses.",
      ],
      architecture: [
        { label: "Voice Input", detail: "Wake word + Google Speech recognition" },
        { label: "Command Routing", detail: "Intent parsing across handlers" },
        { label: "Skills", detail: "Web, Wikipedia, weather, notes, reminders, alarms, email, system" },
        { label: "Response", detail: "Text-to-speech + Tkinter GUI" },
      ],
      challenges: [
        "Making speech recognition robust to different microphones, accents and background noise while keeping latency acceptable.",
        "Structuring the command dispatcher so new skills can be added without rewriting the core loop.",
        "Coordinating the GUI thread with recognition and audio playback so the interface never freezes.",
      ],
      results: [
        "A complete, locally runnable voice assistant with a wide skill set and an extensible command architecture.",
        "Proof of Python automation capability: APIs, audio, GUI and system control integrated into one product.",
      ],
    },
  },
  {
    slug: "go-helper",
    number: "05",
    title: "Go Helper",
    category: "Mobile / Location / Utility Application",
    filters: ["Mobile"],
    description:
      "Utility application with location search and supporting administrative functionality.",
    year: "2024",
    badge: "APK Release",
    github: "https://github.com/abdulkhanmajid01-cmd/go-helper",
    apk: "https://github.com/abdulkhanmajid01-cmd/go-helper/releases/download/v1.0/GoHelper-v1.0-release.apk",
    stack: [
      "Flutter (Dart)",
      "Google Maps",
      "OpenStreetMap",
      "Location Services",
      "Python Backend",
      "Admin Portal",
    ],
    features: [
      "Mobile application",
      "Location search",
      "Google Maps integration",
      "OpenStreetMap functionality",
      "Admin portal",
      "APK release",
    ],
    cover: "mobile",
    caseStudy: {
      overview: [
        "Go Helper is a Flutter-based mobile application focused on location search, with supporting administrative functionality behind it.",
        "The repository ships with a release-ready Android APK, so the application is built not just as code but as a distributable product.",
      ],
      problem: [
        "Finding places, addresses and points of interest on mobile requires reliable geocoding and map rendering, and an application with a supporting admin side needs structure for both client and management layers.",
      ],
      solution: [
        "The app integrates Google Maps and OpenStreetMap functionality for location search and display, backed by a Python backend and an admin portal for supporting data and administration.",
        "A v1.0 release builds the Flutter app into an installable Android APK.",
      ],
      architecture: [
        { label: "Flutter App", detail: "Dart-based mobile client" },
        { label: "Maps", detail: "Google Maps + OpenStreetMap" },
        { label: "Backend", detail: "Python services for data and admin" },
        { label: "Release", detail: "Packaged Android APK (v1.0)" },
      ],
      challenges: [
        "Working across mobile, backend and mapping SDKs to keep location features consistent between platforms.",
        "Producing a distributable Android release from the Flutter build pipeline.",
      ],
      results: [
        "A mobile application delivered as a packaged APK release, installable on Android devices.",
        "Experience shipping a complete mobile product — from Flutter client to admin portal.",
      ],
    },
  },
  {
    slug: "toheed-watches",
    number: "06",
    title: "Toheed Watches",
    category: "Production Website / WordPress / E-Commerce",
    filters: ["Web", "Production"],
    description:
      "Live e-commerce website developed for Toheed Watches, focused on delivering a polished shopping experience and production-ready frontend.",
    year: "2025",
    badge: "Production Website",
    github: "",
    live: "https://toheedwatches.com/",
    liveLabel: "Live Website",
    stack: ["WordPress", "E-Commerce", "Frontend", "Web Development"],
    features: [
      "Live production deployment",
      "E-commerce product presentation",
      "Polished shopping experience",
      "Production-ready frontend",
      "Responsive design",
    ],
    cover: "ecommerce",
    caseStudy: {
      overview: [
        "Toheed Watches is a live e-commerce website developed for a real business. It is a production deployment focused on presenting the product catalog with a polished, trustworthy shopping experience.",
        "This project represents real-world client work: a deployed, publicly accessible website rather than a local or demo build.",
      ],
      problem: [
        "A watch retailer needs a storefront that makes the catalog look premium, loads reliably, works on phones, and can be maintained without a developer for every product change.",
      ],
      solution: [
        "The site is built and customized on WordPress with an e-commerce-focused frontend, giving the business a manageable product catalog and a professional customer-facing design.",
        "The result is a live production website at toheedwatches.com, demonstrating frontend polish applied to a real commercial context.",
      ],
      architecture: [
        { label: "WordPress", detail: "Content and product management" },
        { label: "E-Commerce", detail: "Product catalog and shopping experience" },
        { label: "Frontend", detail: "Customized, responsive design" },
        { label: "Production", detail: "Live deployment at toheedwatches.com" },
      ],
      challenges: [
        "Customizing the WordPress frontend so the store feels purpose-built rather than template-default, while staying maintainable.",
        "Delivering a production site the client can update themselves through the WordPress admin.",
      ],
      results: [
        "A live, publicly accessible e-commerce website — real-world production work beyond repository projects.",
        "Client-facing delivery: a business website the client owns, edits and ships products through.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}