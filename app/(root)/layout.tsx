import type { Metadata } from "next";
import { InlineScript } from "@/components/InlineScript";
import { defaultLocale, localeStorageKey, locales } from "@/lib/i18n";
import { icons } from "@/lib/metadata";
import { themeScript } from "@/lib/theme-script";
import "../globals.css";

export const metadata: Metadata = {
  title: "Alberto | Fullstack Developer",
  description:
    "Desarrollador apasionado por crear soluciones web modernas y escalables",
  icons,
  // La raíz sólo redirige: no aporta contenido propio que indexar.
  robots: { index: false, follow: true },
};

/**
 * Redirige `/` al idioma del visitante antes de pintar: primero el idioma
 * elegido a mano (localStorage) y, si no, el del navegador. El script se genera
 * a partir de `lib/i18n.ts` para no duplicar la lista de idiomas.
 */
const redirectScript = `(function(){try{
var locales=${JSON.stringify(locales)};
var target=null;
try{var stored=localStorage.getItem(${JSON.stringify(localeStorageKey)});if(stored&&locales.indexOf(stored)!==-1){target=stored}}catch(e){}
if(!target){var langs=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language];for(var i=0;i<langs.length;i++){var base=String(langs[i]).toLowerCase().split("-")[0];if(locales.indexOf(base)!==-1){target=base;break}}}
location.replace((target||${JSON.stringify(defaultLocale)})+"/");
}catch(e){}})();`;

/**
 * Layout raíz de la portada: con `output: "export"` no hay servidor donde
 * redirigir, así que la raíz resuelve el idioma en el navegador. Al no existir
 * `app/layout.tsx`, este grupo de rutas tiene su propio layout raíz.
 */
export default function RootRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale} className="h-full" suppressHydrationWarning>
      <head>
        <InlineScript html={redirectScript} />
        <InlineScript html={themeScript} />
      </head>
      <body className="min-h-full bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
