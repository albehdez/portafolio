import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática para GitHub Pages (genera la carpeta `out/`)
  output: "export",
  // Ruta base del proyecto en GitHub Pages: https://albehdez.github.io/portafolio/
  basePath: "/portafolio",
  // Sirve /portafolio/ como /portafolio/index.html
  trailingSlash: true,
  images: {
    // Sin servidor de optimización de imágenes en exportación estática
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  experimental: {
    // El sitio tiene dos layouts raíz (`app/(root)` y `app/[lang]`), así que el
    // 404 no puede componerse con un layout: lo define `app/global-not-found.tsx`.
    globalNotFound: true,
  },
};

export default nextConfig;