import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  label: string;
  meta?: string;
  children: ReactNode;
}

export function Section({ id, index, label, meta, children }: SectionProps) {
  return (
    <section id={id} className="relative" aria-labelledby={`${id}-heading`}>
      <div className="relative mx-auto max-w-[1280px] border-x border-line">
        <span
          aria-hidden="true"
          className="tick tick-half -left-[6px] -top-[5px] hidden md:block"
        />
        <span
          aria-hidden="true"
          className="tick tick-half -right-[5px] -top-[5px] hidden md:block"
        />

        <div className="sticky top-12 z-30 border-y border-line bg-bg/80 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4 px-6 py-3 md:px-10">
            <p className="hud-label text-muted">
              <span className="text-faint">{index}</span>
              <span aria-hidden="true" className="mx-2 text-faint">
                /
              </span>
              {label}
            </p>
            {meta ? (
              <p className="hud-label hidden text-faint sm:block">{meta}</p>
            ) : null}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}
