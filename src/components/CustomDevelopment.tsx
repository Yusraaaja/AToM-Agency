import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

export function CustomDevelopment() {
  const { customDevelopment } = siteConfig;

  return (
    <Section
      id="custom"
      eyebrow="Custom Development"
      title={customDevelopment.title}
      description={customDevelopment.description}
    >
      <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Reveal>
          <div className="grid h-full gap-3 sm:grid-cols-2">
            {customDevelopment.needs.map((need) => (
              <div
                key={need}
                className="flex items-center gap-3 rounded-lg border border-line bg-surface/50 px-4 py-4 text-sm text-copy/90"
              >
                <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
                {need}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-ink-soft/70 p-6 sm:p-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Estimasi sesuai ruang lingkup
              </p>
              <p className="mt-4 text-base leading-relaxed text-copy/85">
                {customDevelopment.note}
              </p>
            </div>
            <a
              href={buildWhatsAppUrl(customDevelopment.whatsappMessage)}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md border border-accent/50 bg-accent/10 px-5 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20 sm:w-auto"
            >
              {customDevelopment.cta}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
