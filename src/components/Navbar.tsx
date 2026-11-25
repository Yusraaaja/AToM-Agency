"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Brand } from "@/components/Brand";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "@/components/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-line/80 bg-ink/95 shadow-[0_8px_30px_-24px_rgba(0,0,0,0.9)] backdrop-blur-sm"
          : "border-transparent bg-ink"
      }`}
    >
      <nav
        className="container-page grid h-[4.5rem] grid-cols-[1fr_auto_1fr] items-center gap-4"
        aria-label="Navigasi utama"
      >
        <Brand onClick={() => setMenuOpen(false)} />

        <div className="col-start-2 hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-paper/70 transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-paper"
          >
            Konsultasi Gratis
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="col-start-3 inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-full border border-line text-copy transition-colors hover:border-accent hover:text-accent lg:hidden"
          aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen ? (
        <div id="mobile-navigation" className="border-t border-line bg-ink lg:hidden">
          <div className="container-page py-4">
            <ul className="flex flex-col">
              {siteConfig.navigation.map((item) => (
                <li key={item.href} className="border-b border-line/60 last:border-b-0">
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3.5 font-display text-lg font-semibold text-copy transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#kontak"
              onClick={() => setMenuOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-bold text-ink transition-colors hover:bg-paper"
            >
              Konsultasi Gratis
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
