import { Section } from "./Section";
import { aboutInfo } from "@/lib/data";

const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "20+", label: "Proyectos completados" },
  { value: "10+", label: "Tecnologías dominadas" },
  { value: "5+", label: "Clientes satisfechos" },
];

export function About() {
  const { paragraphs } = aboutInfo;

  return (
    <Section id="about" index="02" label="Sobre mí" meta="Quién soy">
      <div className="px-6 py-14 md:px-10 md:py-20">
        <h2
          id="about-heading"
          className="display max-w-3xl text-3xl text-ink-strong md:text-5xl"
        >
          Un desarrollador{" "}
          <span className="font-serif italic tracking-normal text-accent-ink">
            curioso
          </span>{" "}
          y obsesionado con el detalle.
        </h2>

        {/* Párrafos numerados */}
        <ol className="mt-12 grid gap-px bg-line border-t border-line md:grid-cols-3">
          {paragraphs.map((paragraph, index) => (
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
        <dl className="mt-12 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg p-6">
              <dt className="hud-label text-faint">{stat.label}</dt>
              <dd className="font-display mt-3 text-4xl font-medium tracking-[-0.03em] text-ink-strong md:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
