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
};

export default nextConfig;