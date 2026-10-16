/**
 * Datos del portafolio que no dependen del idioma (nombres, enlaces, niveles,
 * tecnologías). Todo el texto traducible vive en `dictionaries/*.json`.
 */

export const personalInfo = {
  name: "Alberto Hernández",
  title: "Fullstack Developer",
  email: "albertojhdez01@gmail.com",
  location: "Ciudad, País",
  avatar: "/portafolio/profile.jpg", // Si tienes imagen, pon la ruta aquí: "/avatar.jpg"
  social: {
    github: "https://github.com/albehdez",
    linkedin: "https://www.linkedin.com/in/alberto-hern%C3%A1ndez-4b113b215/",
    email: "albertojhdez01@gmail.com",
  },
};

/** Categorías de la sección Habilidades. Sus etiquetas están en los diccionarios. */
export type SkillCategory = "frontend" | "backend" | "database" | "devops" | "IA";

export const skills: {
  category: SkillCategory;
  items: { name: string; level: number }[];
}[] = [
  {
    category: "frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue", level: 80 },
      { name: "Vite", level: 80 },
    ],
  },
  {
    category: "backend",
    items: [
      { name: "Nest.js", level: 82 },
      { name: "ERPNext", level: 23}
    ],
  },
  {
    category: "database",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    category: "devops",
    items: [
      { name: "Docker", level: 75 },
      { name: "Git/GitHub", level: 90 },
      { name: "CI/CD", level: 75 },
    ],
  },
  {
    category: "IA",
    items: [
      { name: "n8n", level: 75 },
    ],
  },
];

/**
 * Clave de cada proyecto: con ella se busca su descripción en
 * `dictionaries/*.json` (`projects.items[slug].description`).
 */
export type ProjectSlug = "kribb" | "grocify";

export interface Project {
  id: number;
  slug: ProjectSlug;
  title: string;
  tags: readonly string[];
  github: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}

export const projects: readonly Project[] = [
  // {
  //   id: 1,
  //   slug: "kribb",
  //   title: "Kribb",
  //   tags: ["Expo", "Supabase", "Clerck"],
  //   github: "https://github.com/tuusuario/ecommerce",
  //   demo: "https://ecommerce-demo.vercel.app",
  //   image: "/portafolio/projects/ecommerce.svg",
  //   featured: false,
  // },
  // {
  //   id: 2,
  //   slug: "grocify",
  //   title: "Grocify",
  //   tags: ["Expo", "Supabase", "Clerck"],
  //   github: "https://github.com/tuusuario/taskmanager",
  //   demo: "https://taskmanager-demo.vercel.app",
  //   image: "/portafolio/projects/taskmanager.svg",
  //   featured: false,
  // },
];
