"use client";

import type { Dictionary } from "@/dictionaries";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ dict }: { dict: Dictionary["theme"] }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? dict.toLight : dict.toDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="invert-block flex w-12 items-center justify-center border-l border-line text-muted hover:text-invert-fg focus:outline-none"
      aria-label={label}
      title={label}
      aria-pressed={isDark}
    >
      {isDark ? (
        // Sol: en modo oscuro, indica que se puede pasar a claro
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Luna: en modo claro, indica que se puede pasar a oscuro
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
