import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { AbstractShapes } from "@/components/AbstractShapes";
import { HeroVisual } from "@/components/HeroVisual";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";

export function Hero() {
  const { hero, brand } = siteConfig;
  const { top, accent, bottom } = hero.headlineLines;

  return (
    <section
      id="beranda"
      className="relative scroll-mt-24 overflow-hidden pb-24 pt-16 sm:pt-20 lg:pb-28 lg:pt-24"
    >
      <div
        className="grid-backdrop pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-60"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12">
          <div className="relative z-10">
            <p className="mb-7 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Digital Solution Studio
            </p>

            <h1 className="font-display font-bold">
              <span className="block text-[clamp(2.25rem,5.4vw,4rem)] leading-[0.95] tracking-[-0.06em] text-copy">
                {top}
              </span>
              <span className="mt-1 block whitespace-nowrap font-editorial text-[clamp(2rem,5.2vw,4.4rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-accent">
                {accent}
              </span>
              <span className="mt-1 block text-[clamp(2.25rem,5.4vw,4rem)] leading-[0.95] tracking-[-0.06em] text-copy">
                {bottom}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-paper/65 sm:text-lg">
              {hero.subheadline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={buildWhatsAppUrl(siteConfig.contactSection.whatsappMessage)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-paper"
              >
                {hero.primaryCta}
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-sm font-bold text-copy transition-colors hover:border-accent hover:text-accent"
              >
                {hero.secondaryCta}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/60">
              {hero.capabilities.map((item, index) => (
                <li key={item} className="flex items-center gap-2.5">
                  {index > 0 ? <span className="text-accent">/</span> : null}
                  {item}
                </li>
              ))}
            </ul>
            <p className="sr-only">{brand.fullName}</p>
          </div>

          <div className="relative pb-10 lg:pb-0">
            <AbstractShapes variant="hero" />
            <div className="relative">
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
