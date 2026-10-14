export const personalInfo = {
  name: "Alberto Hernández",
  title: "Fullstack Developer",
  shortBio: "Desarrollador apasionado por crear soluciones web modernas y escalables",
  email: "albertojhdez01@gmail.com",
  location: "Ciudad, País",
  avatar: "/portafolio/profile.jpg", // Si tienes imagen, pon la ruta aquí: "/avatar.jpg"
  social: {
    github: "https://github.com/albehdez",
    linkedin: "https://www.linkedin.com/in/alberto-hern%C3%A1ndez-4b113b215/",
    email: "albertojhdez01@gmail.com",
  },
};

export const aboutInfo = {
  paragraphs: [
    "Soy un Fullstack Developer con experiencia construyendo aplicaciones web completas usando tecnologías modernas del ecosistema JavaScript/TypeScript. Me especializo en el desarrollo de interfaces de usuario reactivas y APIs robustas.",
    "Mi stack principal incluye React, Next.js, Node.js, TypeScript, Tailwind CSS y bases de datos como MongoDB y PostgreSQL. También tengo experiencia con Docker, AWS y prácticas de CI/CD para despliegues automatizados.",
    "Me apasiona escribir código limpio, mantenible y escalable. Disfruto aprendiendo nuevas tecnologías, contribuyendo a proyectos open source y resolviendo problemas complejos con soluciones elegantes.",
  ],
};

export const skills = [
  {
    category: "Frontend",
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
    category: "Backend",
    items: [
      { name: "Nest.js", level: 82 },
    ],
  },
  {
    category: "Base de Datos",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", level: 75 },
      { name: "Git/GitHub", level: 90 },
      { name: "CI/CD", level: 75 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Kribb",
    description: "Plataforma para comprar bienes inmuebles",
    tags: ["Expo", "Supabase", "Clerck"],
    github: "https://github.com/tuusuario/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    image: "/portafolio/projects/ecommerce.svg",
    featured: false,
  },
  {
    id: 2,
    title: "Grocify",
    description: "Aplicación movil para el trackeo de listas de compras.",
    tags: ["Expo", "Supabase", "Clerck"],
    github: "https://github.com/tuusuario/taskmanager",
    demo: "https://taskmanager-demo.vercel.app",
    image: "/portafolio/projects/taskmanager.svg",
    featured: false,
  },
];