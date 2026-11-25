import { siteConfig } from "@/config/site";

/**
 * Membuat tautan WhatsApp API (wa.me) dengan pesan yang sudah di-encode.
 * Jika nomor belum dikonfigurasi, tautan membuka pilihan kontak WhatsApp
 * dengan pesan siap kirim — bukan URL palsu dan bukan nomor rekaan.
 */
export function buildWhatsAppUrl(
  message: string,
  number: string = siteConfig.contact.whatsappNumber,
): string {
  const digits = number.replace(/\D/g, "");
  const base = digits.length > 0 ? `https://wa.me/${digits}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}
