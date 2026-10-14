"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { personalInfo } from "@/lib/data";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";

const sections = ["hero", "about", "skills", "projects", "contact"] as const;

interface NavigationProps {
  /** Idioma actual, para el selector de idioma. */
  locale: Locale;
  dict: Dictionary["nav"];
  theme: Dictionary["theme"];
}

export function Navigation({ locale, dict, theme }: NavigationProps) {
  const [activeSection, setActiveSection] =
    useState<(typeof sections)[number]>("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  // El nombre de la cabecera sólo aparece cuando el nombre del hero ya pasó
  // por detrás del header (deja de estar visible).
  const [showName, setShowName] = useState(false);
  const { social, name } = personalInfo;

  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as (typeof sections)[number]);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const heroName = document.getElementById("hero-name");
    if (!heroName) return;

    const observer = new IntersectionObserver(
      ([entry]) =>
        // Sólo mostramos el nombre cuando el del hero se fue por arriba,
        // es decir, cuando ya quedó oculto tras la cabecera.
        setShowName(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      // Recortamos la parte superior del viewport a la altura del header,
      // así el cambio ocurre justo cuando el nombre lo rebasa.
      { rootMargin: "-48px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(heroName);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setShowName(id !== "hero");

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="no-print sticky top-0 left-0 z-50 w-full border-b border-line bg-bg/90 backdrop-blur-md"
      aria-label={dict.label}
    >
      <div className="flex h-12 items-stretch justify-between">
        {/* Logo */}
        <div className="flex min-w-0 items-stretch">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="relative flex items-center gap-2.5 border-r border-line px-4 hover:opacity-70 focus:outline-none sm:px-5"
            aria-label={dict.home}
          >
            {/* Reserva el ancho del badge para que el nombre quede siempre a su derecha */}
            <span
              aria-hidden="true"
              className="hud-label invisible px-1.5 py-1 font-bold"
            >
              AH
            </span>

            {/* Badge animado: centrado cuando está solo, a la izquierda cuando aparece el nombre */}
            <span
              aria-hidden="true"
              className={`hud-label absolute top-1/2 bg-invert-bg px-1.5 py-1 font-bold text-invert-fg transition-all duration-300 ease-out ${
                showName
                  ? "left-4 -translate-x-0 -translate-y-1/2 sm:left-5"
                  : "left-1/2 -translate-x-1/2 -translate-y-1/2"
              }`}
            >
              AH
            </span>

            <span
              className={`font-display truncate text-sm font-medium tracking-[-0.03em] text-ink transition-all duration-300 ease-out ${
                showName
                  ? "translate-x-0 opacity-100"
                  : "pointer-events-none -translate-x-2 opacity-0"
              }`}
              aria-hidden={!showName}
            >
              {firstName}{" "}
              <span className="text-accent-ink">{lastName}</span>
            </span>
          </button>

          {/* Navegación de escritorio */}
          <ul className="hidden items-stretch md:flex">
            {sections.map((section) => {
              const active = activeSection === section;
              return (
                <li key={section} className="flex items-stretch">
                  <button
                    type="button"
                    onClick={() => scrollToSection(section)}
                    data-active={active}
                    aria-current={active ? "page" : undefined}
                    className="group flex h-full items-center px-2.5 focus:outline-none"
                  >
                    <span
                      className={`hud-label flex items-center gap-1.5 px-1.5 py-0.5 whitespace-nowrap ${
                        active
                          ? "bg-invert-bg text-invert-fg"
                          : "text-muted group-hover:bg-invert-bg group-hover:text-invert-fg"
                      }`}
                    >
                      {dict.sections[section]}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Acciones */}
        <div className="flex shrink-0 items-stretch">
          {social.github ? (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="invert-block hidden w-12 items-center justify-center border-l border-line text-muted hover:text-invert-fg md:flex"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          ) : null}

          {social.linkedin ? (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="invert-block hidden w-12 items-center justify-center border-l border-line text-muted hover:text-invert-fg md:flex"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          ) : null}

          <LanguageSwitcher current={locale} label={dict.language} />

          <ThemeToggle dict={theme} />

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="invert-block flex w-12 items-center justify-center border-l border-line text-muted hover:text-invert-fg focus:outline-none md:hidden"
            aria-label={menuOpen ? dict.closeMenu : dict.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-bg md:hidden"
        >
          <ul className="flex flex-col">
            {sections.map((section) => {
              const active = activeSection === section;
              return (
                <li key={section} className="border-b border-line last:border-b-0">
                  <button
                    type="button"
                    onClick={() => scrollToSection(section)}
                    className={`flex w-full items-center justify-between px-6 py-4 hud-label ${
                      active ? "text-ink" : "text-muted"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {dict.sections[section]}
                    <span className="text-faint" aria-hidden="true">
                      0{sections.indexOf(section) + 1}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
