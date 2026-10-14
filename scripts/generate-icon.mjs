import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createElement as h } from "react";
// En Node pelado "next/og" no resuelve sin bundler, así que apuntamos al módulo real.
import { ImageResponse } from "next/og.js";

// Genera el favicon (app/icon.png): reproduce el badge "AH" del header
// (components/Navigation.tsx → `.hud-label` + `bg-invert-bg px-1.5 py-1 font-bold`).
// Uso: pnpm generate:icon

const SIZE = 32;
const FONT_SIZE = 17;
// .hud-label: letter-spacing 0.15em
const LETTER_SPACING = FONT_SIZE * 0.15;
// Geist Mono avanza 0.6em por carácter: el ancho real de "AH" (sin el espacio
// que el letter-spacing añade tras la última letra) es 2 avances + 1 espacio.
const TEXT_WIDTH = (2 * 0.6 + 0.15) * FONT_SIZE;
const BADGE_BG = "#101014"; // --invert-bg (tema claro)
const BADGE_FG = "#f2f1ee"; // --invert-fg (tema claro)

const font = await readFile(join(process.cwd(), "assets", "GeistMono-Bold.ttf"));

const image = new ImageResponse(
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BADGE_BG,
        // Compensa la altura del descendente de la línea para que las
        // mayúsculas queden ópticamente centradas en el cuadro.
        paddingBottom: 1,
      },
    },
    h(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "flex-start",
          // Al fijar el ancho al de las letras (el letter-spacing deja un hueco
          // extra a la derecha de la H) el centrado del contenedor es correcto.
          width: TEXT_WIDTH,
          color: BADGE_FG,
          fontFamily: "Geist Mono",
          fontSize: FONT_SIZE,
          fontWeight: 700,
          letterSpacing: LETTER_SPACING,
          lineHeight: 1,
        },
      },
      "AH"
    )
  ),
  {
    width: SIZE,
    height: SIZE,
    fonts: [
      {
        name: "Geist Mono",
        data: font,
        weight: 700,
        style: "normal",
      },
    ],
  }
);

const png = Buffer.from(await image.arrayBuffer());
const target = join(process.cwd(), "app", "icon.png");
await writeFile(target, png);