/**
 * Script mínimo que aplica el tema guardado antes de la hidratación para evitar
 * el parpadeo. Por defecto se usa el modo claro, sin mirar al navegador.
 */
export const themeScript = `(function(){try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`;
