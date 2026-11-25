# AToM — Website Resmi

Website resmi AToM (Arsitektur Teknologi & Otomasi Mandiri): company profile digital, penawaran jasa, portfolio, paket UMKM, dan informasi program affiliate.

Dibangun dengan **Next.js App Router + TypeScript + Tailwind CSS**. Tanpa CMS, tanpa backend, dan tanpa dependency UI tambahan.

## Menjalankan secara lokal

Butuh Node.js 20 LTS atau lebih baru.

```bash
npm install
cp .env.example .env.local   # opsional, sesuaikan NEXT_PUBLIC_SITE_URL
npm run dev
```

Buka `http://localhost:3000`.

Skrip lain:

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript tanpa emit
npm run build       # production build
npm start           # jalankan hasil build
```

## Sumber konfigurasi

Semua teks dan data publik ada di **`src/config/site.ts`**:

- identitas brand & tagline
- nomor WhatsApp, email, Instagram, domain
- navigasi dan teks hero
- daftar layanan
- data portfolio (status, fitur, teknologi, gambar, demo)
- paket dan harga UMKM
- ketentuan affiliate
- alur kerja, FAQ, dan teks kontak

Komponen tidak boleh menuliskan nomor, harga, atau nama brand secara hard-coded.

### Placeholder yang harus dilengkapi sebelum produksi

| Item | Lokasi | Perilaku saat kosong |
| --- | --- | --- |
| Nomor WhatsApp | `siteConfig.contact.whatsappNumber` | Tombol membuka `https://wa.me/?text=...` (pilih kontak dengan pesan siap kirim) |
| Email | `siteConfig.contact.email` | Tidak ditampilkan |
| Instagram | `siteConfig.contact.instagram` | Tidak ditampilkan |
| Domain final | `.env.local` → `NEXT_PUBLIC_SITE_URL` | Metadata/canonical memakai `http://localhost:3000` |
| Logo final | `public/brand/*.svg`, `src/app/icon.svg` | SVG rekonstruksi dari arah brief dipakai dan diberi penanda; belum aset yang disetujui |
| Status & teknologi portfolio | `siteConfig.portfolio.items` | Ditampilkan sebagai "Perlu dikonfirmasi" / "Belum dicantumkan" |
| Screenshot portfolio | `siteConfig.portfolio.items[].image` | Ilustrasi placeholder dipakai dan diberi label |

Isi nomor WhatsApp dengan format internasional tanpa `+` dan spasi, misalnya `6281234567890`.

### Menambahkan screenshot portfolio

1. Simpan gambar di `public/portfolio/nama-proyek.webp`.
2. Isi `image: "/portfolio/nama-proyek.webp"` dan `imageAlt` pada item di `src/config/site.ts`.
3. Isi `demoUrl` **hanya** jika tautan demo memang tersedia. Biarkan kosong jika tidak ada.

Gambar dirender dengan `next/image`, lazy loaded, dan memiliki ukuran tetap agar tidak terjadi layout shift.

## Sistem visual

Arah desain: modern digital studio dengan tipografi editorial berani, layout Swiss asimetris, dan dark minimalist.

- Warna: Charcoal `#111310`, Lime `#C6F432`, Off-white `#F6F7F2`, Secondary dark `#20221F`.
- Font: Manrope (body), Space Grotesk (display/heading), Playfair Display Italic (aksen editorial).
- Token warna/font didefinisikan di `src/app/globals.css`; font dimuat sendiri oleh `next/font` melalui `src/fonts.ts`.
- Elemen dekoratif lime dibuat dengan CSS di `src/components/AbstractShapes.tsx`.
- Frasa italic pada judul diatur lewat `titleAccent` di `src/config/site.ts` dan dirender oleh `EditorialTitle`.
- Identitas: `public/brand/atom-logo.svg` (dark), `atom-logo-light.svg` (light), `atom-icon.svg`, `atom-icon-light.svg`. Path ada di `siteConfig.brand.logo`; favicon di `src/app/icon.svg`.

> Logo SVG tersebut dibuat ulang secara proporsional dari arah brief (huruf A geometris + orbit), bukan hasil tracing dan bukan aset final yang disetujui. Ganti file di `public/brand/` bila logo resmi tersedia.

> Catatan: file `design-references/atom-landing-reference.png` yang disebut pada brief tidak tersedia di repository. Folder hanya berisi `AToM Digital Solutions Landing Page.png`. Implementasi mengikuti arah visual tertulis pada brief.

## Struktur utama

```
src/
  app/
    layout.tsx        metadata, navbar, footer, skip link
    page.tsx          susunan section landing page
    globals.css       design tokens Tailwind + gaya global
    icon.svg          favicon sementara
    robots.ts         robots.txt
    sitemap.ts        sitemap.xml
  components/         section & komponen interaktif
  config/site.ts      sumber tunggal konten
  fonts.ts            konfigurasi next/font
  lib/whatsapp.ts     pembuat tautan wa.me
```

## Deploy ke Vercel

1. Push proyek ke repository Git.
2. Import repository di Vercel (framework terdeteksi otomatis sebagai Next.js).
3. Tambahkan environment variable `NEXT_PUBLIC_SITE_URL=https://domain-anda.com`.
4. Deploy. Build command: `npm run build`; output Next.js standar.

Tidak ada secret yang perlu disimpan di frontend.

## Catatan implementasi

- Tidak ada akun, dashboard affiliate, atau komisi otomatis (sesuai ruang lingkup MVP).
- Form kontak tidak menyimpan/mengirim data ke server; pesan dibuka di WhatsApp dengan konten yang sudah diisi.
- Harga proyek custom sengaja tidak ditampilkan; estimasi diberikan setelah konsultasi.
- Kebijakan privasi tidak dibuat karena website tidak mengumpulkan data pribadi di server.
- Status portfolio dan detail teknis sengaja dikosongkan agar tidak menjadi klaim yang belum diverifikasi.
