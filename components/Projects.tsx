import Image from "next/image";
import { Section } from "./Section";
import { projects, type Project } from "@/lib/data";
import type { Dictionary } from "@/dictionaries";

export function Projects({ dict }: { dict: Dictionary }) {
  const { projects: copy, nav } = dict;

  return (
    <Section
      id="projects"
      index="04"
      label={nav.sections.projects}
      meta={copy.meta}
    >
      <div className="px-6 py-14 md:px-10 md:py-20">
        <h2
          id="projects-heading"
          className="display max-w-3xl text-3xl text-ink-strong md:text-5xl"
        >
          {copy.heading.before}{" "}
          <span className="font-serif italic tracking-normal text-accent-ink">
            {copy.heading.accent}
          </span>
          {copy.heading.after}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} dict={copy} />
          ))}
        </div>
      </div>
    </Section>
  );
}

interface ProjectCardProps {
  project: Project;
  dict: Dictionary["projects"];
}

function ProjectCard({ project, dict }: ProjectCardProps) {
  const primaryHref = project.demo ?? project.github;

  return (
    <article className="group flex flex-col bg-bg transition-colors hover:bg-bg-raised">
      {/* Imagen */}
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden border-b border-line bg-bg-sunken"
        aria-label={`${dict.open} ${project.title}`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${dict.imageAlt} ${project.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-display text-4xl text-faint">
            {project.title.charAt(0)}
          </span>
        )}

        <span className="hud-label absolute left-3 top-3 bg-invert-bg px-2 py-1 font-bold text-invert-fg">
          {String(project.id).padStart(2, "0")}
        </span>

        {project.featured ? (
          <span className="hud-label absolute right-3 top-3 border border-line bg-bg/90 px-2 py-1 text-ink backdrop-blur-sm">
            {dict.featured}
          </span>
        ) : null}
      </a>

      {/* Info */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium tracking-[-0.02em] text-ink-strong">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
          {dict.items[project.slug].description}
        </p>

        {/* Tecnologías */}
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={dict.techLabel}>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="hud-label border border-line px-2 py-1 text-faint"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Enlaces */}
        <div className="mt-6 flex items-center gap-4 border-t border-line pt-4">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hud-label text-muted transition-colors hover:text-ink"
            >
              {dict.demo} ↗
            </a>
          ) : null}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hud-label text-muted transition-colors hover:text-ink"
          >
            {dict.code} ↗
          </a>
        </div>
      </div>
    </article>
  );
}
