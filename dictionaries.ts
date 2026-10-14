import type enDictionary from "./dictionaries/en.json";
import type { Locale } from "./lib/i18n";

/**
 * Diccionarios de traducciones. `en.json` define la forma canónica de los
 * textos: al anotar el mapa con `Record<Locale, () => Promise<Dictionary>>`,
 * TypeScript falla en el build si a algún idioma le falta una clave.
 */
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

/** Forma de los textos del sitio (tomada de `en.json`). */
export type Dictionary = typeof enDictionary;

/** Carga los textos del idioma indicado. Sólo se ejecuta en el servidor. */
export const getDictionary = async (locale: Locale) => dictionaries[locale]();
