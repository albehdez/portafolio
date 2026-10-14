/**
 * Definición de los idiomas del sitio. Este módulo es puro (sin imports de
 * servidor) para que lo puedan usar tanto los componentes de servidor como
 * los de cliente (p. ej. el selector de idioma).
 */

/** Idiomas soportados. El orden es el que muestra el selector de idioma. */
export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

/**
 * Idioma por defecto. Es el que recibe el visitante si entra en la raíz del
 * sitio y no se puede detectar su idioma (ver `app/(root)/layout.tsx`) y el
 * que usa el 404 global.
 */
export const defaultLocale: Locale = "es";

/** Clave de localStorage donde se recuerda el idioma elegido a mano. */
export const localeStorageKey = "locale";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
