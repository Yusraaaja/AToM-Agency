import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { EditorialTitle } from "@/components/EditorialTitle";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRightIcon, ServiceIcon } from "@/components/icons";

export function Services() {
  const { services } = siteConfig;

  return (
    <section
      id="layanan"
      className="scroll-mt-24 border-t border-line/70 bg-ink py-24 sm:py-28 lg:py-32"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Layanan
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-copy sm:text-5xl lg:text-[3.6rem]">
              <EditorialTitle title={services.title} accent={services.titleAccent} />
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/60">
              {services.description}
            </p>
            <div className="mt-8 h-px w-24 bg-accent" aria-hidden="true" />
          </div>

          <div className="space-y-4">
            {services.items.map((service, index) => (
              <Reveal key={service.id} delay={index * 70}>
                <article className="group relative overflow-hidden rounded-2xl border border-line bg-ink-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 sm:p-8">
                  <span
                    className="pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] font-bold leading-none text-paper/[0.045] sm:text-[9rem]"
                    aria-hidden="true"
                  >
                    {service.number}
                  </span>

                  <div className="relative flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                      <ServiceIcon name={service.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60">
                        {service.number} / Layanan
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-copy sm:text-3xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="relative mt-5 max-w-xl text-sm leading-relaxed text-paper/60">
                    {service.description}
                  </p>

                  <ul className="relative mt-6 grid gap-x-6 gap-y-2 border-t border-line pt-5 sm:grid-cols-2">
                    {service.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-2.5 text-sm text-paper/75"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                        {example}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={buildWhatsAppUrl(service.consultationMessage)}
                    className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-paper"
                  >
                    Konsultasi layanan ini
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
