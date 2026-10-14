"use client";

import { useState, type CSSProperties } from "react";
import { Section } from "./Section";
import { skills } from "@/lib/data";
import { techIcons } from "@/lib/techIcons";

const categories = ["all", ...skills.map((s) => s.category)];

const categoryLabels: Record<string, string> = {
  all: "Todas",
  Frontend: "Frontend",
  Backend: "Backend",
  "Base de Datos": "Base de Datos",
  "DevOps & Tools": "DevOps y Herramientas",
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills.flatMap((s) =>
          s.items.map((item) => ({ ...item, category: s.category }))
        )
      : (skills
          .find((s) => s.category === activeCategory)
          ?.items.map((item) => ({
            ...item,
            category: activeCategory,
          })) ?? []);

  return (
    <Section id="skills" index="03" label="Habilidades" meta="Stack técnico">
      <div className="px-6 py-14 md:px-10 md:py-20">
        <h2
          id="skills-heading"
          className="display max-w-3xl text-3xl text-ink-strong md:text-5xl"
        >
          Tecnologías y{" "}
          <span className="text-accent-ink">habilidades</span>.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Herramientas y tecnologías que uso para construir aplicaciones
          modernas y escalables.
        </p>

        {/* Filtro por categoría */}
        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filtrar tecnologías por categoría"
        >
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={active}
                className={`hud-label border px-3 py-2 transition-colors focus:outline-none ${
                  active
                    ? "border-transparent bg-invert-bg text-invert-fg"
                    : "border-line text-muted hover:border-line-strong hover:text-ink"
                }`}
              >
                {categoryLabels[category] ?? category}
              </button>
            );
          })}
        </div>

        {/* Rejilla de tecnologías */}
        <div
          role="tabpanel"
          aria-label={`${categoryLabels[activeCategory] ?? activeCategory} habilidades`}
          className="mt-10 grid grid-cols-3 gap-px border border-line bg-line sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        >
          {filteredSkills.map((skill) => {
            const icons = techIcons[skill.name] ?? [];

            return (
              <article
                key={skill.name}
                className="skill-tile relative flex aspect-square flex-col items-center justify-center gap-3 bg-bg p-4 text-center transition-colors"
                style={
                  icons[0]
                    ? ({
                        "--brand-light": icons[0].light,
                        "--brand-dark": icons[0].dark,
                      } as CSSProperties)
                    : undefined
                }
              >
                <span className="sr-only">
                  {skill.name}: {skill.level} por ciento
                </span>

                {/* Nivel (visible para quien ve la rejilla) */}
                <span
                  className="hud-label absolute right-2.5 top-2.5 text-faint"
                  aria-hidden="true"
                >
                  {skill.level}
                </span>

                {icons.length > 0 ? (
                  <>
                    <span
                      className="flex items-center justify-center gap-2"
                      aria-hidden="true"
                    >
                      {icons.map((icon, i) => (
                        <svg
                          key={i}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="skill-logo h-7 w-7 shrink-0 text-ink-strong"
                          style={
                            {
                              "--brand-light": icon.light,
                              "--brand-dark": icon.dark,
                            } as CSSProperties
                          }
                        >
                          <path d={icon.path} />
                        </svg>
                      ))}
                    </span>
                    <span className="hud-label skill-name text-faint transition-colors">
                      {skill.name}
                    </span>
                  </>
                ) : (
                  <span className="font-display px-1 text-sm font-medium leading-tight tracking-[-0.02em] text-ink-strong">
                    {skill.name}
                  </span>
                )}
              </article>
            );
          })}
        </div>

        <p className="hud-label mt-8 text-faint">
          Pasa el cursor sobre cada tecnología para ver su color de marca
        </p>
      </div>
    </Section>
  );
}
