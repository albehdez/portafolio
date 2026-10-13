"use client";

import { useState } from "react";
import { skills } from "@/lib/data";

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

  const filteredSkills = activeCategory === "all"
    ? skills.flatMap((s) => s.items.map((item) => ({ ...item, category: s.category, icon: s.icon })))
    : skills
        .find((s) => s.category === activeCategory)
        ?.items.map((item) => ({ ...item, category: activeCategory, icon: skills.find((s) => s.category === activeCategory)?.icon || "⚙️" })) || [];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
          >
            Tecnologías y Habilidades
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Herramientas y tecnologías que uso para construir aplicaciones modernas y escalables
          </p>
        </header>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          role="tablist"
          aria-label="Filtrar tecnologías por categoría"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              }`}
              role="tab"
              aria-selected={activeCategory === category}
              aria-controls={`skills-panel-${category.toLowerCase()}`}
            >
              {categoryLabels[category] ?? category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          id={`skills-panel-${activeCategory.toLowerCase()}`}
          role="tabpanel"
          aria-label={`${categoryLabels[activeCategory] ?? activeCategory} habilidades`}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
            Los niveles indican mi familiaridad y experiencia práctica con cada tecnología
          </p>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: { name: string; level: number; category: string; icon: string } }) {
  return (
    <article className="group relative p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      {/* Category icon */}
      <div className="absolute top-4 right-4 text-2xl opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true">
        {skill.icon}
      </div>

      {/* Skill name */}
      <h3 className="font-semibold text-zinc-900 dark:text-white mb-4 text-lg">{skill.name}</h3>

      {/* Progress bar */}
      <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name}: ${skill.level}%`}>
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>

      {/* Level text */}
      <div className="flex justify-between mt-2 text-xs text-zinc-500 dark:text-zinc-400">
        <span>{skill.category}</span>
        <span>{skill.level}%</span>
      </div>
    </article>
  );
}