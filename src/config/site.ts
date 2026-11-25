/**
 * SUMBER TUNGGAL KONTEN AToM
 * --------------------------
 * Semua data publik yang mudah berubah (kontak, harga, layanan, portfolio,
 * affiliate, FAQ) dikelola di file ini. Komponen hanya membaca dari sini.
 *
 * Nilai dengan tanda "BELUM DIKONFIRMASI" adalah placeholder yang sengaja
 * dibuat kosong/tidak aktif. Isi sebelum produksi.
 */

export type IconName = "globe" | "app" | "workflow";

export type ProjectStatus =
  | "Prototype"
  | "In Development"
  | "Pilot"
  | "Completed"
  | "Perlu dikonfirmasi";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  examples: string[];
  icon: IconName;
  consultationMessage: string;
}

export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  /** Kosongkan sampai teknologi yang benar-benar digunakan dapat diverifikasi. */
  technologies: string[];
  /** Path gambar di /public. Kosongkan untuk memakai ilustrasi placeholder. */
  image?: string;
  imageAlt?: string;
  status: ProjectStatus;
  /** Kosongkan jika demo belum tersedia. Jangan isi dengan URL palsu. */
  demoUrl?: string;
  visual: "system" | "publication" | "hub" | "library";
}

export interface AffiliateTier {
  id: string;
  name: string;
  description: string;
  initialCommission: number;
  increment: number;
  maximumCommission: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

/** Kontak bertipe string agar placeholder kosong tetap bisa diperiksa saat runtime. */
const contactInfo: {
  whatsappNumber: string;
  email: string;
  instagram: string;
  domain: string;
} = {
  /**
   * BELUM DIKONFIRMASI. Isi dengan nomor WhatsApp bisnis dalam format
   * internasional tanpa tanda +, misalnya "6281234567890".
   * Jika kosong, tombol WhatsApp membuka pilih kontak dengan pesan siap kirim.
   */
  whatsappNumber: "",
  /** BELUM DIKONFIRMASI. Kosongkan agar tidak ditampilkan. */
  email: "",
  /** BELUM DIKONFIRMASI. Kosongkan agar tidak ditampilkan. */
  instagram: "",
  /** BELUM DIKONFIRMASI. Isi domain final setelah tersedia. */
  domain: "",
};

export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  brand: {
    name: "AToM",
    fullName: "Arsitektur Teknologi & Otomasi Mandiri",
    tagline: "Teknologi yang bekerja untuk kebutuhan nyata.",
    description:
      "AToM adalah penyedia solusi digital untuk website, aplikasi khusus, dan sistem otomasi bagi bisnis maupun organisasi.",
    /**
     * Aset SVG identitas dibuat ulang dari arah brief (geometris A + orbit).
     * Belum merupakan file logo final yang disetujui — ganti bila tersedia.
     */
    logo: {
      main: "/brand/atom-logo.svg",
      light: "/brand/atom-logo-light.svg",
      icon: "/brand/atom-icon.svg",
      iconLight: "/brand/atom-icon-light.svg",
    },
  },

  contact: contactInfo,

  navigation: [
    { label: "Beranda", href: "#beranda" },
    { label: "Layanan", href: "#layanan" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Program Affiliate", href: "#affiliate" },
    { label: "FAQ", href: "#faq" },
  ] satisfies NavItem[],

  hero: {
    headline: "Teknologi yang Bekerja untuk Kebutuhan Nyata.",
    headlineLines: {
      top: "Teknologi yang",
      accent: "BEKERJA UNTUK",
      bottom: "Kebutuhan Nyata.",
    },
    subheadline:
      "Bangun kehadiran digital, sederhanakan pekerjaan, dan kembangkan bisnis melalui website, aplikasi khusus, serta sistem otomasi yang dirancang sesuai kebutuhan.",
    primaryCta: "Konsultasikan Proyek",
    secondaryCta: "Lihat Portfolio",
    capabilities: ["Website", "Aplikasi khusus", "Sistem otomasi"],
  },

  services: {
    title: "Solusi Digital untuk Setiap Kebutuhan.",
    titleAccent: "Setiap",
    description:
      "Pilih solusi yang sesuai dengan tantangan Anda. Setiap proyek dibahas terlebih dahulu agar ruang lingkupnya jelas.",
    items: [
      {
        id: "website",
        number: "01",
        title: "Website Development",
        description:
          "Pengembangan website profesional untuk membantu bisnis dan organisasi membangun kehadiran digital.",
        examples: [
          "Website UMKM dan restoran",
          "Company profile",
          "Landing page",
          "Katalog produk dan layanan",
        ],
        icon: "globe",
        consultationMessage:
          "Halo AToM, saya ingin berkonsultasi tentang pengembangan website untuk bisnis atau organisasi saya.",
      },
      {
        id: "application",
        number: "02",
        title: "Custom Application",
        description:
          "Pengembangan aplikasi berdasarkan kebutuhan, proses kerja, dan sistem operasional klien.",
        examples: [
          "Sistem informasi sekolah",
          "Sistem manajemen magang",
          "Aplikasi perpustakaan",
          "Dashboard dan sistem administrasi",
        ],
        icon: "app",
        consultationMessage:
          "Halo AToM, saya ingin mendiskusikan pengembangan aplikasi khusus sesuai proses kerja kami.",
      },
      {
        id: "automation",
        number: "03",
        title: "Automation & Systems",
        description:
          "Solusi digital untuk membantu menyederhanakan pekerjaan berulang dan meningkatkan efisiensi proses kerja.",
        examples: [
          "Otomasi alur kerja",
          "Pengolahan informasi",
          "Integrasi layanan digital",
          "Sistem otomasi sesuai kebutuhan",
        ],
        icon: "workflow",
        consultationMessage:
          "Halo AToM, saya ingin berkonsultasi tentang otomasi proses kerja dan sistem digital untuk organisasi kami.",
      },
    ] satisfies ServiceItem[],
  },

  portfolio: {
    title: "Proyek dan Solusi yang Kami Bangun.",
    description:
      "Berikut adalah contoh arah pengembangan yang dikerjakan AToM. Detail teknis, status, dan tautan demo akan diperbarui setelah dapat diverifikasi.",
    note: "Status proyek, daftar teknologi, dan screenshot pada halaman ini masih berupa konfigurasi awal dan perlu dikonfirmasi sebelum dipublikasikan.",
    items: [
      {
        id: "atom-sinergi",
        name: "AToM SiNERGi",
        category: "Sistem Informasi",
        summary:
          "Sistem Informasi & Evaluasi Kerja Magang Mandiri untuk memusatkan pengelolaan data magang.",
        problem:
          "Kebutuhan akan satu tempat untuk mengelola data peserta magang dan catatan evaluasi kerja.",
        solution:
          "Rancangan sistem informasi dengan alur data magang, pencatatan evaluasi, dan tampilan ringkas untuk pemantauan.",
        features: [
          "Pencatatan data peserta",
          "Evaluasi kerja",
          "Ringkasan status magang",
        ],
        technologies: [],
        status: "Perlu dikonfirmasi",
        visual: "system",
      },
      {
        id: "atom-prisma",
        name: "AToM PRiSMA",
        category: "Publikasi Informasi",
        summary:
          "Publikasi & Rancangan Informasi Sosial Mandiri untuk menyusun dan menyampaikan informasi secara terstruktur.",
        problem:
          "Kebutuhan akan wadah publikasi informasi sosial yang rapi dan mudah diakses.",
        solution:
          "Rancangan antarmuka publikasi dengan struktur konten yang jelas dan alur pembaharuan informasi.",
        features: [
          "Struktur konten publikasi",
          "Halaman informasi",
          "Tampilan responsif",
        ],
        technologies: [],
        status: "Perlu dikonfirmasi",
        visual: "publication",
      },
      {
        id: "schoolhub",
        name: "SchoolHub",
        category: "Sistem Sekolah",
        summary:
          "Rancangan pusat informasi sekolah untuk membantu pengelolaan dan akses informasi secara terpadu.",
        problem: "Kebutuhan akan akses informasi sekolah yang lebih teratur.",
        solution:
          "Konsep dashboard sekolah dengan pengelolaan informasi dan navigasi yang sederhana.",
        features: [
          "Dashboard informasi",
          "Navigasi ringkas",
          "Tampilan adaptif",
        ],
        technologies: [],
        status: "Perlu dikonfirmasi",
        visual: "hub",
      },
      {
        id: "perpustakaan-sekolah",
        name: "Aplikasi Perpustakaan Sekolah",
        category: "Aplikasi Internal",
        summary:
          "Aplikasi perpustakaan sekolah untuk membantu pengelolaan data dan pencarian koleksi.",
        problem: "Kebutuhan akan pengelolaan data koleksi perpustakaan yang lebih praktis.",
        solution:
          "Rancangan aplikasi dengan alur data buku, pencarian koleksi, dan tampilan administrasi.",
        features: [
          "Data koleksi",
          "Pencarian buku",
          "Tampilan administrasi",
        ],
        technologies: [],
        status: "Perlu dikonfirmasi",
        visual: "library",
      },
    ] as PortfolioItem[],
  },

  umkmOffer: {
    badge: "Penawaran Spesial UMKM",
    title: "Mulai Bangun Kehadiran Digital Bisnis Anda.",
    titleAccent: "Digital",
    description:
      "Paket sederhana untuk UMKM yang ingin memiliki website dengan informasi bisnis yang jelas dan mudah dihubungi.",
    packageName: "Paket Website UMKM",
    price: "Rp500.000",
    priceNote: "Harga paket. Detail ruang lingkup dikonfirmasi sebelum proyek dimulai.",
    durationLabel: "Hosting 1 tahun",
    includes: [
      "Website UMKM responsif",
      "Informasi bisnis",
      "Menu atau katalog produk",
      "Lokasi bisnis",
      "Kontak WhatsApp",
      "Hosting selama 1 tahun",
    ],
    notes: [
      "Domain khusus belum dipastikan termasuk paket.",
      "Detail ruang lingkup dan kebutuhan tambahan akan dikonfirmasi sebelum proyek dimulai.",
      "Biaya perpanjangan hosting setelah periode awal akan dikonfirmasi kepada klien.",
    ],
    cta: "Pesan Website UMKM",
    whatsappMessage:
      "Halo AToM, saya tertarik memesan Paket Website UMKM (Rp500.000). Saya ingin mengetahui detail ruang lingkup dan langkah selanjutnya.",
  },

  customDevelopment: {
    title: "Punya Kebutuhan Sistem yang Lebih Spesifik?",
    description:
      "Setiap bisnis dan organisasi memiliki proses kerja yang berbeda. AToM membantu merancang dan membangun solusi digital berdasarkan kebutuhan tersebut.",
    needs: [
      "Sistem administrasi internal",
      "Sistem manajemen operasional",
      "Dashboard monitoring",
      "Aplikasi berbasis database",
      "Sistem informasi khusus",
      "Otomasi proses kerja",
    ],
    note: "Biaya proyek custom tidak ditetapkan secara tetap. Estimasi diberikan setelah ruang lingkup didiskusikan.",
    cta: "Diskusikan Kebutuhan Anda",
    whatsappMessage:
      "Halo AToM, saya ingin mendiskusikan kebutuhan sistem atau aplikasi khusus. Boleh saya jelaskan proses kerja dan ruang lingkupnya?",
  },

  affiliate: {
    title: "Bangun Penghasilan Bersama AToM.",
    titleAccent: "Bersama AToM.",
    description:
      "Kenal seseorang atau bisnis yang membutuhkan website maupun solusi digital? Hubungkan mereka dengan AToM dan dapatkan komisi dari proyek yang berhasil.",
    tiers: [
      {
        id: "referral",
        name: "Referral Partner",
        description:
          "Memperkenalkan calon klien kepada AToM.",
        initialCommission: 10,
        increment: 1,
        maximumCommission: 20,
      },
      {
        id: "referral-closing",
        name: "Referral & Closing Partner",
        description:
          "Memperkenalkan calon klien sekaligus membantu proses komunikasi dan closing.",
        initialCommission: 20,
        increment: 1,
        maximumCommission: 30,
      },
    ] satisfies AffiliateTier[],
    terms: [
      "Komisi dihitung dari pembayaran proyek yang diterima AToM, tidak termasuk biaya pihak ketiga.",
      "Komisi dibayarkan setelah proyek terlaksana dan pembayaran klien diterima.",
      "Kategori referral dan assisted closing tidak ditumpuk.",
      "Affiliate tidak boleh menjanjikan harga, fitur, atau deadline tanpa persetujuan AToM.",
      "Program dapat dihentikan untuk pendaftaran baru oleh AToM, dengan tetap menghormati komisi yang sudah menjadi hak affiliate.",
      "Detail atribusi calon klien, bukti referral, dan verifikasi kontribusi akan dikonfirmasi oleh AToM.",
    ],
    cta: "Gabung Program Affiliate",
    whatsappMessage:
      "Halo AToM, saya tertarik bergabung dengan Program Affiliate. Saya ingin mengetahui alur pendaftaran dan ketentuan selengkapnya.",
  },

  process: {
    title: "Bagaimana Kami Bekerja?",
    description: "Alur kerja sederhana yang transparan dari awal hingga dukungan lanjutan.",
    steps: [
      {
        number: "01",
        title: "Konsultasi",
        description: "Memahami kebutuhan, tujuan, dan permasalahan klien.",
      },
      {
        number: "02",
        title: "Perencanaan",
        description: "Menentukan ruang lingkup, fitur, estimasi waktu, dan biaya.",
      },
      {
        number: "03",
        title: "Pengembangan",
        description: "Membangun solusi sesuai kesepakatan.",
      },
      {
        number: "04",
        title: "Review",
        description: "Klien memeriksa hasil dan memberikan masukan sesuai ruang lingkup.",
      },
      {
        number: "05",
        title: "Deployment",
        description: "Solusi dipublikasikan atau diserahkan sesuai kesepakatan.",
      },
      {
        number: "06",
        title: "Support",
        description: "Memberikan dukungan sesuai ketentuan layanan yang telah disepakati.",
      },
    ] satisfies ProcessStep[],
  },

  faq: {
    title: "Pertanyaan yang Sering Diajukan",
    description: "Informasi singkat tentang cara kerja dan layanan AToM.",
    items: [
      {
        question: "Apakah AToM hanya membuat website?",
        answer:
          "Tidak. Selain website, AToM juga mengerjakan aplikasi khusus dan sistem otomasi. Rinciannya dapat dilihat pada bagian Layanan.",
      },
      {
        question: "Apakah AToM bisa membuat aplikasi khusus?",
        answer:
          "Bisa. Aplikasi dirancang berdasarkan proses kerja dan kebutuhan klien. Ruang lingkup, fitur, dan estimasinya dibahas saat konsultasi.",
      },
      {
        question: "Apakah saya bisa meminta fitur sesuai kebutuhan?",
        answer:
          "Bisa. Fitur dibahas dan disepakati pada tahap perencanaan agar sesuai dengan kebutuhan serta ruang lingkup proyek.",
      },
      {
        question: "Berapa lama proses pengerjaan?",
        answer:
          "Waktu pengerjaan bergantung pada kompleksitas dan ruang lingkup. Estimasi diberikan setelah kebutuhan Anda dikaji.",
      },
      {
        question: "Apakah tersedia konsultasi sebelum proyek dimulai?",
        answer:
          "Ya. Konsultasi awal dapat dilakukan melalui WhatsApp untuk memahami kebutuhan dan menentukan langkah berikutnya.",
      },
      {
        question: "Apakah harga sudah termasuk domain?",
        answer:
          "Untuk Paket Website UMKM, domain khusus belum dipastikan termasuk. Detail ini dikonfirmasi sebelum proyek dimulai.",
      },
      {
        question: "Bagaimana sistem pembayaran?",
        answer:
          "Mekanisme dan tahapan pembayaran dibahas saat konsultasi, lalu dituangkan dalam kesepakatan proyek.",
      },
      {
        question: "Apakah tersedia layanan pemeliharaan?",
        answer:
          "Dukungan setelah peluncuran mengikuti ketentuan layanan yang disepakati. Opsi dan cakupannya dapat ditanyakan saat konsultasi.",
      },
      {
        question: "Bagaimana cara bergabung menjadi affiliate?",
        answer:
          "Gunakan tombol Gabung Program Affiliate untuk menyampaikan minat melalui WhatsApp. Tim AToM akan menjelaskan alur pendaftaran dan verifikasinya.",
      },
    ] satisfies FaqItem[],
  },

  contactSection: {
    title: "Siap Mengembangkan Ide Anda?",
    titleAccent: "Ide Anda?",
    description:
      "Ceritakan kebutuhan Anda. Mari diskusikan solusi digital yang tepat bersama AToM.",
    whatsappCta: "Hubungi via WhatsApp",
    whatsappMessage:
      "Halo AToM, saya ingin berkonsultasi tentang kebutuhan website, aplikasi, atau sistem otomasi. Boleh saya ceritakan kebutuhannya?",
    formTitle: "Kirim ringkasan kebutuhan",
    formDescription:
      "Form ini tidak menyimpan data di server. Pesan Anda akan disiapkan di WhatsApp agar bisa dikirim langsung.",
  },

  footer: {
    description:
      "Penyedia solusi digital untuk website, aplikasi khusus, dan sistem otomasi sesuai kebutuhan nyata.",
  },
} as const;

export const whatsappConfigured = siteConfig.contact.whatsappNumber.trim().length > 0;
