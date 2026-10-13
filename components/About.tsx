import { aboutInfo } from "@/lib/data";

export function About() {
  const { paragraphs } = aboutInfo;

  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-zinc-900"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
          >
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" aria-hidden="true" />
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-lg leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-zinc-700 dark:text-zinc-300">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <StatItem value="3+" label="Años de experiencia" />
          <StatItem value="20+" label="Proyectos completados" />
          <StatItem value="10+" label="Tecnologías dominadas" />
          <StatItem value="5+" label="Clientes satisfechos" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800">
      <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
        {value}
      </div>
      <div className="text-sm text-zinc-600 dark:text-zinc-400">{label}</div>
    </div>
  );
}