import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          // Aplica el tema guardado antes de la hidratación para evitar el
          // parpadeo. Por defecto se usa el modo claro, sin mirar al navegador.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}