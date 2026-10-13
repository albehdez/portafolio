export const personalInfo = {
  name: "Alberto Hernández",
  title: "Fullstack Developer",
  shortBio: "Desarrollador apasionado por crear soluciones web modernas y escalables",
  email: "alberto@ejemplo.com",
  location: "Ciudad, País",
  avatar: "/profile.jpg", // Si tienes imagen, pon la ruta aquí: "/avatar.jpg"
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
    icon: "🎨",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Vite", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Next.js API Routes", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "GraphQL", level: 70 },
      { name: "WebSockets", level: 65 },
    ],
  },
  {
    category: "Base de Datos",
    icon: "🗄️",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Prisma ORM", level: 78 },
      { name: "Redis", level: 65 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "☁️",
    items: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "Git/GitHub", level: 90 },
      { name: "CI/CD", level: 75 },
      { name: "Linux/CLI", level: 80 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos, panel de administración y gestión de inventario en tiempo real.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/tuusuario/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    image: "/projects/ecommerce.svg",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas colaborativa con tableros Kanban, drag & drop, notificaciones en tiempo real y trabajo en equipo.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "TypeScript"],
    github: "https://github.com/tuusuario/taskmanager",
    demo: "https://taskmanager-demo.vercel.app",
    image: "/projects/taskmanager.svg",
    featured: true,
  },
  {
    id: 3,
    title: "Blog CMS Personalizado",
    description: "Sistema de gestión de contenido para blog con editor Markdown, SEO optimizado, categorías, tags y modo oscuro/claro.",
    tags: ["Next.js", "TypeScript", "Tailwind", "MDX", "Vercel"],
    github: "https://github.com/tuusuario/blog-cms",
    demo: "https://blog-demo.vercel.app",
    image: "/projects/blogcms.svg",
    featured: false,
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Panel de analíticas en tiempo real con gráficos interactivos, filtros dinámicos, exportación de datos y autenticación JWT.",
    tags: ["React", "Recharts", "Node.js", "PostgreSQL", "JWT", "Docker"],
    github: "https://github.com/tuusuario/dashboard",
    demo: "https://dashboard-demo.vercel.app",
    image: "/projects/dashboard.svg",
    featured: false,
  },
  {
    id: 5,
    title: "Weather App PWA",
    description: "Aplicación del tiempo instalable (PWA) con geolocalización, pronóstico 7 días, alertas meteorológicas y funcionamiento offline.",
    tags: ["React", "TypeScript", "PWA", "OpenWeather API", "Workbox"],
    github: "https://github.com/tuusuario/weather-pwa",
    demo: "https://weather-pwa.vercel.app",
    image: "/projects/weather.svg",
    featured: false,
  },
  {
    id: 6,
    title: "API REST Boilerplate",
    description: "Plantilla base para APIs REST con autenticación, validación, testing, documentación Swagger y estructura escalable.",
    tags: ["Node.js", "Express", "TypeScript", "Jest", "Swagger", "Prisma"],
    github: "https://github.com/tuusuario/api-boilerplate",
    demo: null,
    image: "/projects/api.svg",
    featured: false,
  },
];

export const contactInfo = {
  email: "alberto@ejemplo.com",
  location: "Ciudad, País",
  availability: "Abierto a oportunidades freelance y tiempo completo",
  formEndpoint: "/api/contact", // Si configuras un backend para el formulario
};