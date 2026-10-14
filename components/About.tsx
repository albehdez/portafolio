import { Section } from "./Section";
import type { Dictionary } from "@/dictionaries";

export function About({ dict }: { dict: Dictionary }) {
  const { about, nav } = dict;

  // Las cifras no se traducen; las etiquetas vienen del diccionario.
  const stats = [
    { value: "3+", label: about.stats.experience },
    { value: "20+", label: about.stats.projects },
    { value: "10+", label: about.stats.technologies },
    { value: "5+", label: about.stats.clients },
  ];

  return (
    <Section id="about" index="02" label={nav.sections.about} meta={about.meta}>
      <div className="px-6 py-14 md:px-10 md:py-20">
        <h2
          id="about-heading"
          className="display max-w-3xl text-3xl text-ink-strong md:text-5xl"
        >
          {about.heading.before}{" "}
          <span className="font-serif italic tracking-normal text-accent-ink">
            {about.heading.accent}
          </span>{" "}
          {about.heading.after}
        </h2>

        {/* Párrafos numerados */}
        <ol className="mt-12 grid gap-px bg-line border-t border-line md:grid-cols-3">
          {about.paragraphs.map((paragraph, index) => (
            <li key={index} className="bg-bg px-6 py-6">
              <span className="hud-label text-faint">
                0{index + 1}
              </span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            </li>
          ))}
        </ol>

        {/* Estadísticas */}
        {/* <dl className="mt-12 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg p-6">
              <dt className="hud-label text-faint">{stat.label}</dt>
              <dd className="font-display mt-3 text-4xl font-medium tracking-[-0.03em] text-ink-strong md:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl> */}
      </div>
    </Section>
  );
}
