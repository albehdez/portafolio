This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/[lang]/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Idiomas

El sitio está en español e inglés. La portada `/` redirige al idioma del visitante (primero el elegido a mano, guardado en `localStorage`, y si no el del navegador) y cada idioma tiene su propia URL estática: `/es/` y `/en/`.

- Los textos viven en `dictionaries/es.json` y `dictionaries/en.json`. `en.json` define la forma del tipo `Dictionary`, así que al añadir una clave en un idioma el build falla hasta que exista también en el otro.
- `lib/data.ts` sólo contiene datos que no se traducen (nombres, enlaces, niveles, tecnologías).
- Para añadir un idioma: agrégalo a `locales` en `lib/i18n.ts`, crea `dictionaries/<idioma>.json` y añade su entrada en `dictionaries.ts`. Las páginas se generan solas vía `generateStaticParams`.

El sitio se exporta estáticamente (`output: "export"`), así que no hay middleware ni redirecciones de servidor: la raíz se resuelve con un script en `app/(root)/layout.tsx` y el 404 lo define `app/global-not-found.tsx`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
