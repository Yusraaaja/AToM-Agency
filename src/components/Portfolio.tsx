"use client";

import { useRef } from "react";
import Image from "next/image";
import { siteConfig, type ProjectStatus } from "@/config/site";
import { PortfolioVisual } from "@/components/PortfolioVisual";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";

const statusStyles: Record<ProjectStatus, string> = {
  Prototype: "border-accent/40 bg-accent/10 text-accent",
  "In Development": "border-paper/25 bg-paper/5 text-paper/70",
  Pilot: "border-accent/60 bg-accent/15 text-accent",
  Completed: "border-accent bg-accent text-ink",
  "Perlu dikonfirmasi": "border-line bg-ink text-muted",
};

export function Portfolio() {
  const { portfolio } = siteConfig;
  const scroller = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.current?.scrollBy({
      left: direction * 660,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <section
      id="portfolio"
      className="scroll-mt-24 border-t border-line/70 bg-ink py-24 sm:py-28 lg:py-32"
    >
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Portfolio
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-copy sm:text-5xl lg:text-[3.6rem]">
              {portfolio.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/60">
              {portfolio.description}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Geser portfolio ke kiri"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-copy transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Geser portfolio ke kanan"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-copy transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          role="region"
          aria-label="Daftar proyek AToM"
          tabIndex={0}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {portfolio.items.map((item) => (
            <article
              key={item.id}
              className="flex w-[86vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-line bg-ink-soft transition-colors hover:border-accent/50 sm:w-[560px] lg:w-[640px]"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-ink p-3 sm:p-4">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? `Tampilan proyek ${item.name}`}
                    fill
                    sizes="(max-width: 640px) 86vw, 640px"
                    className="rounded-xl object-cover"
                    loading="lazy"
                  />
                ) : (
                  <PortfolioVisual variant={item.visual} name={item.name} />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-paper/60">
                    {item.category}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-copy sm:text-3xl">
                  {item.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-paper/60">{item.summary}</p>

                <dl className="mt-5 grid gap-4 border-t border-line pt-5 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                      Kebutuhan
                    </dt>
                    <dd className="leading-relaxed text-paper/70">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                      Solusi
                    </dt>
                    <dd className="leading-relaxed text-paper/70">{item.solution}</dd>
                  </div>
                </dl>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-line px-3 py-1 text-xs text-paper/70"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-wide text-paper/60">
                  Teknologi:{" "}
                  {item.technologies.length > 0
                    ? item.technologies.join(" · ")
                    : "belum dicantumkan sampai dapat diverifikasi"}
                </p>

                {item.demoUrl ? (
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-bold text-accent hover:text-paper"
                  >
                    Lihat demo
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl font-mono text-[10px] leading-relaxed text-paper/60">
          Catatan: {portfolio.note}
        </p>
      </div>
    </section>
  );
}
