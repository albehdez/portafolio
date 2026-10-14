"use client";

import { useState, type CSSProperties } from "react";
import { Section } from "./Section";
import { skills, type SkillCategory } from "@/lib/data";
import { techIcons } from "@/lib/techIcons";
import type { Dictionary } from "@/dictionaries";

type CategoryKey = "all" | SkillCategory;

const categories: CategoryKey[] = ["all", ...skills.map((s) => s.category)];

interface SkillsProps {
  dict: Dictionary["skills"];
  label: string;
}

export function Skills({ dict, label }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const categoryLabel = (category: CategoryKey) =>
    category === "all" ? dict.all : dict.categories[category];

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
    <Section id="skills" index="03" label={label} meta={dict.meta}>
      <div className="px-6 py-14 md:px-10 md:py-20">
        <h2
          id="skills-heading"
          className="display max-w-3xl text-3xl text-ink-strong md:text-5xl"
        >
          {dict.heading.before}{" "}
          <span className="text-accent-ink">{dict.heading.accent}</span>
          {dict.heading.after}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {dict.intro}
        </p>

        {/* Filtro por categoría */}
        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label={dict.filterLabel}
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
                {categoryLabel(category)}
              </button>
            );
          })}
        </div>

        {/* Rejilla de tecnologías */}
        <div
          role="tabpanel"
          aria-label={`${categoryLabel(activeCategory)} ${dict.panelSuffix}`}
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
                  {skill.name}: {skill.level} {dict.levelSuffix}
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

        <p className="hud-label mt-8 text-faint">{dict.hint}</p>
      </div>
    </Section>
  );
}
