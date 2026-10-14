import Image from "next/image";
import { Section } from "./Section";
import { personalInfo } from "@/lib/data";
import type { Dictionary } from "@/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  const { name, title, social, avatar } = personalInfo;
  const { hero, nav } = dict;

  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  return (
    <Section
      id="hero"
      index="01"
      label={nav.sections.hero}
      meta={title}
    >
      <div className="flex flex-col items-center px-6 py-16 text-center md:px-10 md:py-24">
        {/* Avatar */}
        <div className="mb-6">
          {avatar ? (
            <Image
              src={avatar}
              alt={`${name} - ${hero.photoAlt}`}
              width={112}
              height={112}
              className="h-24 w-24 rounded-full border border-line object-cover md:h-28 md:w-28"
              priority
              sizes="112px"
            />
          ) : (
            <div
              className="flex h-24 w-24 items-center justify-center rounded-full border border-line bg-invert-bg text-3xl font-bold text-invert-fg md:h-28 md:w-28"
              aria-label={`${name} - ${hero.avatarAlt}`}
            >
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Marca / nombre */}
        <div className="mb-7 flex items-center gap-3">

          <span
            id="hero-name"
            className="font-display text-2xl font-medium tracking-[-0.03em] text-ink-strong"
          >
            {firstName} {lastName}
          </span>
        </div>

        {/* Titular */}
        <h1
          id="hero-heading"
          className="display max-w-4xl text-4xl text-ink-strong sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {hero.heading.before}{" "}
          <span className="text-accent-ink">{hero.heading.accent}</span>{" "}
          {hero.heading.after}
        </h1>

        {/* Bio */}
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {hero.bio}
        </p>

        {/* Llamadas a la acción */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="btn btn-primary">
            {hero.projectsCta}
          </a>
          <a href="#contact" className="btn btn-outline">
            {hero.contactCta}
          </a>
        </div>

        {/* Enlaces sociales */}
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          {social.github ? (
            <li>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hud-label text-faint transition-colors hover:text-ink"
              >
                GitHub
              </a>
            </li>
          ) : null}
          {social.linkedin ? (
            <li>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hud-label text-faint transition-colors hover:text-ink"
              >
                LinkedIn
              </a>
            </li>
          ) : null}
          {social.email ? (
            <li>
              <a
                href={`mailto:${social.email}`}
                className="hud-label text-faint transition-colors hover:text-ink"
              >
                Email
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </Section>
  );
}
