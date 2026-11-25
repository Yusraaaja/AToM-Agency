"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/Section";
import { ChevronDownIcon } from "@/components/icons";

export function Faq() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={faq.title}
      description={faq.description}
      className="border-t border-line/60 bg-ink-soft/40"
    >
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface/50">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          const buttonId = `faq-question-${index}`;
          const panelId = `faq-answer-${index}`;

          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-base font-semibold text-copy transition-colors hover:text-accent sm:px-6 sm:text-lg"
                >
                  {item.question}
                  <ChevronDownIcon
                    className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${isOpen ? "rotate-180 text-accent" : ""}`}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-5 pb-5 sm:px-6"
              >
                <p className="text-sm leading-relaxed text-muted">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
