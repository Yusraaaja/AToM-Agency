import { siteConfig } from "@/config/site";
import { Section } from "@/components/Section";

export function WorkProcess() {
  const { process } = siteConfig;

  return (
    <Section
      id="proses"
      eyebrow="Alur Kerja"
      title={process.title}
      description={process.description}
      className="border-t border-line/70 bg-ink-soft/30"
    >
      <div className="relative mt-16 hidden lg:block">
        <div className="absolute left-5 right-5 top-5 h-px bg-line" aria-hidden="true" />
        <ol className="relative grid grid-cols-6 gap-5">
          {process.steps.map((step) => (
            <li key={step.number} className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 bg-ink font-mono text-xs font-bold text-accent">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-copy">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-paper/60">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <ol className="relative mt-12 space-y-8 border-l border-line pl-9 lg:hidden">
        {process.steps.map((step) => (
          <li key={step.number} className="relative">
            <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 bg-ink font-mono text-[10px] font-bold text-accent">
              {step.number}
            </span>
            <div className="pl-11">
              <h3 className="font-display text-xl font-bold tracking-tight text-copy">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-paper/60">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
