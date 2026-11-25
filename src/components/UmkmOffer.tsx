import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { EditorialTitle } from "@/components/EditorialTitle";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

export function UmkmOffer() {
  const { umkmOffer } = siteConfig;

  return (
    <section
      id="umkm"
      className="scroll-mt-24 overflow-hidden bg-paper py-20 text-ink sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <Reveal>
            <div>
              <p className="inline-flex items-center gap-2.5 rounded-full bg-ink px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-paper">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {umkmOffer.badge}
              </p>

              <h2 className="mt-6 max-w-xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-ink sm:text-5xl lg:text-[3.4rem]">
                <EditorialTitle
                  title={umkmOffer.title}
                  accent={umkmOffer.titleAccent}
                  accentClassName="text-ink"
                />
              </h2>

              <div className="mt-9 inline-block">
                <p className="relative font-display text-[clamp(3.25rem,9vw,6.5rem)] font-bold leading-none tracking-[-0.08em] text-ink">
                  {umkmOffer.price}
                  <span
                    className="absolute -bottom-2 left-0 h-2 w-2/3 bg-accent"
                    aria-hidden="true"
                  />
                </p>
              </div>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/60">
                {umkmOffer.priceNote}
              </p>
              <p className="mt-4 inline-flex rounded-full border border-ink/20 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                {umkmOffer.durationLabel}
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="rounded-2xl border border-ink/10 bg-paper p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-5">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                  {umkmOffer.packageName}
                </h3>
                <span className="h-3 w-3 bg-accent" aria-hidden="true" />
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {umkmOffer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="mt-7 space-y-3 border-t border-ink/10 pt-6">
                {umkmOffer.notes.map((note) => (
                  <li key={note} className="flex gap-3 text-xs leading-relaxed text-ink/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                    {note}
                  </li>
                ))}
              </ul>

              <a
                href={buildWhatsAppUrl(umkmOffer.whatsappMessage)}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                {umkmOffer.cta}
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
