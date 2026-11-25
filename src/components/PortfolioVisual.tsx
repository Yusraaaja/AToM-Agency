import type { PortfolioItem } from "@/config/site";

const accents: Record<PortfolioItem["visual"], string> = {
  system: "bg-accent",
  publication: "bg-accent/80",
  hub: "bg-accent/60",
  library: "bg-accent/40",
};

const labels: Record<PortfolioItem["visual"], string> = {
  system: "workspace / magang",
  publication: "publikasi / informasi",
  hub: "schoolhub / dashboard",
  library: "perpustakaan / koleksi",
};

/** Placeholder visual konsisten untuk portfolio yang belum punya screenshot. */
export function PortfolioVisual({
  variant,
  name,
}: {
  variant: PortfolioItem["visual"];
  name: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-ink-soft" aria-hidden="true">
      <div className="flex h-8 items-center gap-1.5 border-b border-line bg-surface/60 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="h-1.5 w-1.5 rounded-full bg-line" />
        <span className="ml-2 truncate font-mono text-[9px] text-muted">{labels[variant]}</span>
      </div>

      <div className="grid grid-cols-[58px_1fr] min-h-[190px] sm:grid-cols-[76px_1fr]">
        <div className="border-r border-line/60 bg-ink/40 p-2.5">
          <div className={`mb-4 h-4 w-4 rounded ${accents[variant]} opacity-70`} />
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="mb-2.5 h-1.5 rounded-full bg-line/80" style={{ width: `${90 - item * 8}%` }} />
          ))}
        </div>

        <div className="p-3.5 sm:p-4">
          <div className="mb-1.5 h-2 w-24 rounded-full bg-copy/60" />
          <div className="mb-4 h-1.5 w-16 rounded-full bg-line" />

          {variant === "system" ? (
            <div className="space-y-2">
              {["Peserta", "Evaluasi", "Status"].map((row, index) => (
                <div key={row} className="flex items-center justify-between gap-2 rounded border border-line/70 bg-surface/50 px-2.5 py-1.5">
                  <span className="text-[8px] text-muted">{row}</span>
                  <span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? accents[variant] : "bg-line"}`} />
                </div>
              ))}
            </div>
          ) : null}

          {variant === "publication" ? (
            <div className="space-y-2">
              <div className="h-10 rounded border border-line/70 bg-surface/50" />
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-line" />
                <div className="h-1.5 w-4/5 rounded-full bg-line" />
                <div className={`h-1.5 w-12 rounded-full ${accents[variant]} opacity-70`} />
              </div>
            </div>
          ) : null}

          {variant === "hub" ? (
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="rounded border border-line/70 bg-surface/50 p-2">
                  <div className={`mb-2 h-1.5 w-8 rounded-full ${item === 2 ? accents[variant] : "bg-line"}`} />
                  <div className="h-1.5 w-full rounded-full bg-line/70" />
                </div>
              ))}
            </div>
          ) : null}

          {variant === "library" ? (
            <div className="grid grid-cols-4 gap-2 pt-1">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className={`h-12 rounded-sm border border-line/70 ${item === 3 ? `${accents[variant]} opacity-60` : "bg-surface/70"}`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="absolute bottom-2 left-2 rounded bg-ink/90 px-2 py-1 font-mono text-[8px] uppercase tracking-wide text-muted">
        {name} · ilustrasi placeholder
      </div>
    </div>
  );
}
