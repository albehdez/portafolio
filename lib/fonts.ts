import { Archivo, Geist_Mono, Instrument_Serif, Inter } from "next/font/google";

// Titulares: Archivo (grotesca ajustada, muy apretada)
export const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

// Cuerpo de texto: Inter
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Etiquetas HUD, botones y números: Geist Mono
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Acentos editoriales: Instrument Serif
export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

/** Clases que exponen las variables de fuente; van en el `<html>`. */
export const fontVariableClasses = [
  archivo.variable,
  inter.variable,
  geistMono.variable,
  instrumentSerif.variable,
].join(" ");
