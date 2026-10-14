import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { name } = personalInfo;

  return (
    <footer className="no-print border-t border-line" role="contentinfo">
      <div className="mx-auto max-w-[1280px] border-x border-line">
        

        {/* Barra inferior */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line px-6 py-6 text-center">
          <p className="hud-label text-faint">
            © {currentYear} {name}
          </p>
          
        </div>
      </div>
    </footer>
  );
}
