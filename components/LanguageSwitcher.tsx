"use client";

import { startTransition, useOptimistic } from "react";
import { useRouter } from "next/navigation";
import { locales, localeStorageKey, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  /** Idioma que se está mostrando ahora mismo. */
  current: Locale;
  /** Etiqueta accesible del control, p. ej. "Cambiar idioma". */
  label: string;
}

/**
 * Selector de idioma. Es un desplegable nativo con un idioma por opción; al
 * elegir uno se navega a su URL (cada idioma mantiene la suya y se puede
 * compartir). El idioma elegido se recuerda en localStorage para que la raíz
 * `/` redirija directamente a él.
 *
 * El valor mostrado es optimista: refleja la elección mientras la navegación
 * está en curso y vuelve a la URL en cuanto termina (o si falla).
 */
export function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  const router = useRouter();
  const [value, setValue] = useOptimistic(current);

  const change = (locale: Locale) => {
    try {
      window.localStorage.setItem(localeStorageKey, locale);
    } catch {
      // Sin localStorage (modo privado estricto): la navegación funciona igual.
    }

    startTransition(() => {
      setValue(locale);
      router.push(`/${locale}/`);
    });
  };

  return (
    <div className="relative flex items-stretch border-l border-line">
      <select
        value={value}
        onChange={(event) => change(event.target.value as Locale)}
        aria-label={label}
        className="invert-block hud-label cursor-pointer appearance-none bg-transparent pl-2.5 pr-6 text-center text-muted focus:outline-none sm:pl-3"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale} lang={locale}>
            {locale}
          </option>
        ))}
      </select>

      {/* Flecha del desplegable: `appearance-none` quita la nativa */}
      <svg
        className="pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2 text-muted"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 9l6 6 6-6"
        />
      </svg>
    </div>
  );
}
