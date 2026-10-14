/**
 * Portada. El layout raíz de este grupo de rutas redirige al idioma del
 * visitante; estos enlaces sólo se ven si JavaScript está desactivado.
 */
export default function RootPage() {
  return (
    <noscript>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="hud-label text-muted">
          Elige tu idioma · Choose your language
        </p>
        <div className="flex items-center gap-3">
          <a href="es/" className="btn btn-primary">
            Español
          </a>
          <a href="en/" className="btn btn-outline">
            English
          </a>
        </div>
      </div>
    </noscript>
  );
}
