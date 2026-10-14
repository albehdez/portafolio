import type { Metadata } from "next";

/** URL pública del sitio (GitHub Pages). */
export const siteUrl = "https://albehdez.github.io/portafolio/";

/**
 * El favicon vive en `public/` y se declara a mano porque Next no añade el
 * basePath a las URLs de metadata: la ruta lleva el `/portafolio` que fija
 * `basePath` en `next.config.ts`.
 */
export const icons: Metadata["icons"] = {
  icon: [{ url: "/portafolio/icon.png", type: "image/png", sizes: "32x32" }],
};
