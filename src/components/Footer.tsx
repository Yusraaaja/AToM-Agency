import { siteConfig } from "@/config/site";
import { Brand } from "@/components/Brand";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const { brand, footer, navigation, contact, contactSection } = siteConfig;

  return (
    <footer className="border-t border-line bg-ink py-14 sm:py-16">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
              {brand.fullName}. {footer.description}
            </p>
            <p className="mt-4 font-mono text-[10px] text-paper/60">
              Logo SVG direkonstruksi dari arah identitas — belum aset final disetujui.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
              Navigasi
            </h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-paper/60 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#umkm" className="text-sm text-paper/60 transition-colors hover:text-accent">
                  Paket UMKM
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
              Kontak
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-paper/60">
              <li>
                <a
                  href={buildWhatsAppUrl(contactSection.whatsappMessage)}
                  className="transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              {contact.email ? (
                <li>
                  <a href={`mailto:${contact.email}`} className="transition-colors hover:text-accent">
                    {contact.email}
                  </a>
                </li>
              ) : null}
              {contact.instagram ? (
                <li>
                  <a
                    href={
                      contact.instagram.startsWith("http")
                        ? contact.instagram
                        : `https://instagram.com/${contact.instagram.replace(/^@/, "")}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    Instagram
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name} — {brand.tagline}</p>
          <p>{brand.fullName}</p>
        </div>
      </div>
    </footer>
  );
}
