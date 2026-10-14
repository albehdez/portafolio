import type { Metadata } from "next";
import Link from "next/link";
import { InlineScript } from "@/components/InlineScript";
import { defaultLocale } from "@/lib/i18n";
import { fontVariableClasses } from "@/lib/fonts";
import { icons } from "@/lib/metadata";
import { themeScript } from "@/lib/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | Alberto - Portfolio",
  description:
    "La página que buscas no existe / The page you are looking for does not exist",
  icons,
};

/**
 * 404 global. Con dos layouts raíz (`(root)` y `[lang]`) no hay uno único con
 * el que componer el 404, así que Next devuelve esta página directamente: hay
 * que traer aquí los estilos, las fuentes y el script de tema.
 */
export default function GlobalNotFound() {
  return (
    <html
      lang={defaultLocale}
      className={`${fontVariableClasses} h-full`}
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body className="flex min-h-full flex-col items-center justify-center gap-6 bg-bg px-6 py-16 text-center text-ink antialiased">
        <p className="hud-label text-faint">404</p>
        <h1 className="display text-3xl text-ink-strong md:text-4xl">
          Esta página no existe
        </h1>
        <p className="max-w-md text-base leading-relaxed text-muted">
          La página que buscas no existe.
          <br />
          The page you are looking for does not exist.
        </p>
        <div className="flex items-center gap-3">
          <Link href="/es/" className="btn btn-primary">
            Español
          </Link>
          <Link href="/en/" className="btn btn-outline">
            English
          </Link>
        </div>
      </body>
    </html>
  );
}
