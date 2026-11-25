import { CheckIcon, MessageIcon, WorkflowIcon } from "@/components/icons";

const flow = ["Konsultasi", "Rencana", "Bangun", "Rilis"];

/**
 * Mockup presentasional murni CSS — bukan screenshot proyek, tidak memuat
 * angka/statistik bisnis, dan mudah diganti dengan aset resmi.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden="true">
      <div className="absolute inset-x-8 -top-5 bottom-4 rounded-3xl border border-accent/20" />

      <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-soft shadow-[0_40px_80px_-50px_rgba(0,0,0,0.95)]">
        <div className="flex h-10 items-center gap-2 border-b border-line bg-surface px-4">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
          <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/60">
            atom / workspace
          </span>
          <span className="ml-auto h-2 w-2 rounded-sm bg-accent" />
        </div>

        <div className="grid grid-cols-[76px_1fr] sm:grid-cols-[132px_1fr]">
          <div className="border-r border-line bg-ink/60 p-3 sm:p-4">
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-accent">
                <span className="h-1.5 w-1.5 rounded-[1px] bg-ink" />
              </span>
              <span className="hidden h-1.5 w-12 rounded-full bg-paper/20 sm:block" />
            </div>
            {["Beranda", "Proyek", "Otomasi", "Laporan"].map((label, index) => (
              <div key={label} className="mb-3.5 flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${index === 1 ? "bg-accent" : "bg-paper/20"}`}
                />
                <span className="hidden truncate text-[10px] text-paper/60 sm:block">{label}</span>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="mb-2 h-2.5 w-32 rounded-full bg-paper/80" />
                <div className="h-1.5 w-20 rounded-full bg-paper/20" />
              </div>
              <span className="rounded-full border border-accent/40 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-accent">
                Aktif
              </span>
            </div>

            <div className="relative mt-7 flex items-start justify-between gap-1">
              <div className="absolute left-[8%] right-[8%] top-2 h-px bg-line" aria-hidden="true" />
              {flow.map((step, index) => (
                <div key={step} className="relative flex flex-1 flex-col items-center gap-2">
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      index === flow.length - 1
                        ? "border-accent bg-accent text-ink"
                        : "border-accent/60 bg-ink text-accent"
                    }`}
                  >
                    {index === flow.length - 1 ? null : (
                      <CheckIcon className="h-2.5 w-2.5" />
                    )}
                  </span>
                  <span className="text-center text-[8px] leading-tight text-paper/60 sm:text-[9px]">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {["Website", "Sistem"].map((label, index) => (
                <div key={label} className="rounded-xl border border-line bg-surface p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-paper/60">
                      {label}
                    </span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-accent" : "bg-paper/25"}`}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <span className="block h-1.5 w-full rounded-full bg-paper/15" />
                    <span className="block h-1.5 w-4/5 rounded-full bg-paper/15" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-dashed border-line px-3 py-2.5">
              <WorkflowIcon className="h-3.5 w-3.5 text-accent" />
              <span className="h-1.5 w-28 rounded-full bg-paper/15" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 right-1 flex items-center gap-2.5 rounded-xl bg-accent px-3.5 py-2.5 text-ink shadow-xl sm:right-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink/10">
          <MessageIcon className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-[11px] font-bold leading-tight">Solusi Digital</span>
          <span className="block text-[10px] leading-tight text-ink/70">untuk kebutuhan nyata</span>
        </span>
      </div>
    </div>
  );
}
