import Image from "next/image";
import { projects } from "@/lib/data";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-zinc-900"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
          >
            Proyectos 
          </h2>
        </header>

        {/* Other Projects */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 ${featured ? "md:col-span-2" : ""}`}>
      {/* Project Image */}
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Captura de ${project.title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-30">🚀</div>
          </div>
        )}

        {/* Featured badge */}
        {featured && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            Destacado
          </span>
        )}

        {/* Overlay with links */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="w-full flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[120px] px-4 py-2 text-center bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                Ver Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 min-w-[120px] px-4 py-2 text-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
                project.demo
                  ? "bg-zinc-900/80 text-white hover:bg-zinc-900 backdrop-blur-sm"
                  : "bg-white text-zinc-900 hover:bg-zinc-100"
              }`}
            >
              Ver Código
            </a>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">{project.description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2" aria-label="Tecnologías usadas">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-200 dark:border-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}