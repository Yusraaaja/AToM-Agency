interface AbstractShapesProps {
  variant?: "hero" | "cta";
}

/** Elemen geometris lime dekoratif. Selalu aria-hidden dan tidak interaktif. */
export function AbstractShapes({ variant = "hero" }: AbstractShapesProps) {
  if (variant === "cta") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 -top-28 h-80 w-80 rounded-full border-[36px] border-accent/10" />
        <div className="absolute right-8 top-10 h-20 w-20 rotate-45 border border-accent/40" />
        <div className="absolute bottom-8 right-28 h-9 w-9 bg-accent" />
        <div className="absolute -bottom-16 right-0 h-48 w-48 rounded-full border border-accent/20" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-accent/25" />
      <div className="absolute right-10 top-24 h-24 w-24 rotate-12 rounded-2xl border border-accent/40" />
      <div className="absolute -bottom-10 left-6 h-20 w-20 rounded-full bg-accent/10" />
      <div className="absolute bottom-16 right-8 h-3 w-3 bg-accent" />
    </div>
  );
}
