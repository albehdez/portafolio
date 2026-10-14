import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { InlineScript } from "@/components/InlineScript";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getDictionary } from "@/dictionaries";
import { fontVariableClasses } from "@/lib/fonts";
import { hasLocale, locales } from "@/lib/i18n";
import { icons, siteUrl } from "@/lib/metadata";
import { themeScript } from "@/lib/theme-script";
import "../globals.css";

/** Genera una página estática por idioma (`/es/`, `/en/`). */
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const { meta } = await getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    icons,
    authors: [{ name: "Alberto Hernández" }],
    creator: "Alberto Hernández",
    publisher: "Alberto Hernández",
    robots: "index, follow",
    alternates: {
      canonical: `/${lang}/`,
      languages: {
        es: "/es/",
        en: "/en/",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: lang === "es" ? "es_ES" : "en_US",
      siteName: "Alberto - Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    verification: {
      google: "google-site-verification-code",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f1ee" },
    { media: "(prefers-color-scheme: dark)", color: "#121316" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${fontVariableClasses} h-full scroll-smooth`}
      // Next 16 ya no desactiva el scroll suave durante las navegaciones, y el
      // sitio lo usa para moverse entre secciones: pedimos el comportamiento.
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
