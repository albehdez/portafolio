"use client";

/**
 * Script inline que el navegador ejecuta durante el parseo del HTML, antes del
 * primer pintado (ver la guía "How to prevent flash before hydration").
 *
 * Es un componente de cliente a propósito: el `type` que ve React al renderizar
 * en el navegador es `text/plain`, así no avisa de que los `<script>` que
 * renderiza React en el cliente no se ejecutan. El que llega al HTML (servidor
 * o prerender) es `text/javascript`, que sí se ejecuta, y
 * `suppressHydrationWarning` acepta la diferencia al hidratar.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
