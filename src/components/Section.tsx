import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-copy sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
