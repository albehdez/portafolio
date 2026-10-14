import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

// Titulares: Archivo (grotesca ajustada, muy apretada)
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

// Cuerpo de texto: Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Etiquetas HUD, botones y números: Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Acentos editoriales: Instrument Serif
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alberto | Fullstack Developer",
  description:
    "Desarrollador apasionado por crear soluciones web modernas y escalables",
  keywords: [
    "Fullstack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Alberto Hernández" }],
  creator: "Alberto Hernández",
  publisher: "Alberto Hernández",
  robots: "index, follow",
  openGraph: {
    title: "Alberto | Fullstack Developer",
    description:
      "Desarrollador apasionado por crear soluciones web modernas y escalables",
    type: "website",
    locale: "es_ES",
    siteName: "Alberto - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alberto | Fullstack Developer",
    description:
      "Desarrollador apasionado por crear soluciones web modernas y escalables",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f1ee" },
    { media: "(prefers-color-scheme: dark)", color: "#121316" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${inter.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Aplica el tema guardado antes de la hidratación para evitar el
          // parpadeo. Por defecto se usa el modo claro, sin mirar al navegador.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
