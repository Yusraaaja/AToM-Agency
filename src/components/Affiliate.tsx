import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { EditorialTitle } from "@/components/EditorialTitle";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

export function Affiliate() {
  const { affiliate } = siteConfig;

  return (
    <section
      id="affiliate"
      className="scroll-mt-24 border-t border-line/70 bg-ink py-24 sm:py-28 lg:py-32"
    >
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Program Affiliate
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-copy sm:text-5xl lg:text-[3.6rem]">
              <EditorialTitle title={affiliate.title} accent={affiliate.titleAccent} />
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/60">
              {affiliate.description}
            </p>
            <a
              href={buildWhatsAppUrl(affiliate.whatsappMessage)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-paper"
            >
              {affiliate.cta}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {affiliate.tiers.map((tier, index) => {
                const primary = index === 0;
                return (
                  <Reveal key={tier.id} delay={index * 80}>
                    <article
                      className={`flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${
                        primary
                          ? "bg-accent text-ink"
                          : "border border-line bg-ink-soft text-copy"
                      }`}
                    >
                      <p
                        className={`font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${
                          primary ? "text-ink/60" : "text-accent"
                        }`}
                      >
                        0{index + 1} / {primary ? "Referral" : "Referral + Closing"}
                      </p>
                      <h3
                        className={`mt-3 font-display text-2xl font-bold tracking-tight ${
                          primary ? "text-ink" : "text-copy"
                        }`}
                      >
                        {tier.name}
                      </h3>
                      <p
                        className={`mt-2.5 text-sm leading-relaxed ${
                          primary ? "text-ink/70" : "text-paper/60"
                        }`}
                      >
                        {tier.description}
                      </p>

                      <div
                        className={`mt-7 rounded-xl p-5 ${
                          primary ? "bg-ink/10" : "border border-line bg-ink"
                        }`}
                      >
                        <p
                          className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
                            primary ? "text-ink/60" : "text-paper/60"
                          }`}
                        >
                          Komisi awal
                        </p>
                        <p
                          className={`mt-1 font-display text-5xl font-bold tracking-[-0.06em] ${
                            primary ? "text-ink" : "text-accent"
                          }`}
                        >
                          {tier.initialCommission}%
                        </p>
                      </div>
                      <p
                        className={`mt-4 text-xs leading-relaxed ${
                          primary ? "text-ink/70" : "text-paper/60"
                        }`}
                      >
                        +{tier.increment} poin persentase setiap proyek berhasil berikutnya,
                        maksimal {tier.maximumCommission}%.
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-line bg-ink-soft/60 p-6 sm:p-7">
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                Ketentuan program
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {affiliate.terms.map((term) => (
                  <li key={term} className="flex gap-2.5 text-xs leading-relaxed text-paper/60">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
