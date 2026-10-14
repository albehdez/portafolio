import { Section } from "./Section";
import { personalInfo } from "@/lib/data";

export function Contact() {
  const email = personalInfo.social.email ?? personalInfo.email;

  return (
    <Section id="contact" index="05" label="Contacto" meta="Disponible">
      <div className="px-6 py-16 text-center md:px-10 md:py-24">
        <h2
          id="contact-heading"
          className="display mx-auto max-w-3xl text-4xl text-ink-strong md:text-6xl"
        >
          Trabajemos{" "}
          <span className="font-serif italic tracking-normal text-accent-ink">
            juntos
          </span>
          .
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          ¡No dudes en escribirme!
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href={`mailto:${email}`} className="btn btn-primary">
            Enviar email
          </a>
          {personalInfo.social.linkedin ? (
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </Section>
  );
}