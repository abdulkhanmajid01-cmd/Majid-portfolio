export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "Python", "APIs", "REST"],
  },
  {
    label: "Database",
    items: ["MongoDB", "PostgreSQL", "Supabase", "Prisma", "Mongoose"],
  },
  {
    label: "AI / ML",
    items: ["RAG", "NLP", "FAISS", "Sentence Transformers", "AI APIs"],
  },
  {
    label: "Auth / Security",
    items: ["JWT", "NextAuth", "bcrypt", "RBAC"],
  },
  {
    label: "Tools / Deployment",
    items: ["Git", "GitHub", "Vercel", "Docker", "REST APIs"],
  },
];