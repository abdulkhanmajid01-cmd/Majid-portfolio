export interface Service {
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "End-to-end web applications with modern frontend, backend, databases and authentication.",
  },
  {
    number: "02",
    title: "SaaS Development",
    description:
      "Build scalable SaaS products with dashboards, authentication, roles, billing and business logic.",
  },
  {
    number: "03",
    title: "AI & RAG Development",
    description:
      "Build AI-powered applications using RAG, semantic search, embeddings and intelligent automation.",
  },
  {
    number: "04",
    title: "Backend & API Development",
    description:
      "Design secure APIs, authentication systems and database-backed applications.",
  },
  {
    number: "05",
    title: "WordPress & E-Commerce",
    description:
      "Build and customize production-ready WordPress and e-commerce experiences.",
  },
  {
    number: "06",
    title: "Automation & Python",
    description:
      "Create automation tools, voice applications and Python-based productivity systems.",
  },
];