"use client";

import { useState, type FormEvent } from "react";
import { siteConfig, whatsappConfigured } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { AbstractShapes } from "@/components/AbstractShapes";
import { EditorialTitle } from "@/components/EditorialTitle";
import {
  ArrowUpRightIcon,
  InstagramIcon,
  MailIcon,
  MessageIcon,
} from "@/components/icons";

type Topic = "Konsultasi umum" | "Website UMKM" | "Aplikasi khusus" | "Program Affiliate";

const topics: Topic[] = [
  "Konsultasi umum",
  "Website UMKM",
  "Aplikasi khusus",
  "Program Affiliate",
];

interface FormErrors {
  name?: string;
  topic?: string;
  message?: string;
}

export function Contact() {
  const { contact, contactSection } = siteConfig;
  const [name, setName] = useState("");
  const [topic, setTopic] = useState<Topic>("Konsultasi umum");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedUrl, setPreparedUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) nextErrors.name = "Nama minimal 2 karakter.";
    if (!topics.includes(topic)) nextErrors.topic = "Pilih topik yang tersedia.";
    if (message.trim().length < 10) {
      nextErrors.message = "Pesan minimal 10 karakter agar kebutuhan dapat dipahami.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setPreparedUrl("");
      return;
    }

    const text = [
      `Halo AToM, saya ${name.trim()}.`,
      `Topik: ${topic}`,
      "",
      message.trim(),
    ].join("\n");

    const url = buildWhatsAppUrl(text);
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const instagramUrl = contact.instagram
    ? contact.instagram.startsWith("http")
      ? contact.instagram
      : `https://instagram.com/${contact.instagram.replace(/^@/, "")}`
    : "";

  return (
    <section
      id="kontak"
      className="relative scroll-mt-24 overflow-hidden border-t border-line/70 bg-ink-soft py-24 sm:py-28 lg:py-32"
    >
      <AbstractShapes variant="cta" />
      <div className="container-page relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Kontak
            </p>
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-copy sm:text-5xl lg:text-[4rem]">
              <EditorialTitle
                title={contactSection.title}
                accent={contactSection.titleAccent}
              />
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/60">
              {contactSection.description}
            </p>

            <a
              href={buildWhatsAppUrl(contactSection.whatsappMessage)}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-bold text-ink transition-colors hover:bg-paper"
            >
              <MessageIcon className="h-4 w-4" />
              {contactSection.whatsappCta}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {contact.email ? (
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-paper/60 hover:text-accent"
                >
                  <MailIcon className="h-4 w-4" />
                  {contact.email}
                </a>
              ) : null}
              {instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-paper/60 hover:text-accent"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </a>
              ) : null}
            </div>

            {!whatsappConfigured ? (
              <p className="mt-6 max-w-md font-mono text-[10px] leading-relaxed text-paper/60">
                Nomor WhatsApp resmi belum dikonfigurasi. Tombol akan membuka pilih kontak
                dengan pesan yang sudah disiapkan.
              </p>
            ) : null}
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative rounded-2xl border border-line bg-ink/80 p-6 sm:p-8"
          >
            <h3 className="font-display text-2xl font-bold tracking-tight text-copy">
              {contactSection.formTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/60">
              {contactSection.formDescription}
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-copy">
                  Nama
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  placeholder="Nama Anda"
                  className="w-full rounded-lg border border-line bg-ink-soft px-3.5 py-3 text-sm text-copy placeholder:text-paper/60 focus:border-accent focus:outline-none"
                />
                {errors.name ? (
                  <p id="contact-name-error" className="mt-1.5 text-xs text-accent">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-topic" className="mb-2 block text-sm font-medium text-copy">
                  Topik
                </label>
                <select
                  id="contact-topic"
                  name="topic"
                  value={topic}
                  onChange={(event) => setTopic(event.target.value as Topic)}
                  aria-invalid={Boolean(errors.topic)}
                  className="w-full rounded-lg border border-line bg-ink-soft px-3.5 py-3 text-sm text-copy focus:border-accent focus:outline-none"
                >
                  {topics.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.topic ? (
                  <p className="mt-1.5 text-xs text-accent">{errors.topic}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-copy">
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  placeholder="Ceritakan singkat kebutuhan Anda"
                  className="w-full resize-y rounded-lg border border-line bg-ink-soft px-3.5 py-3 text-sm text-copy placeholder:text-paper/60 focus:border-accent focus:outline-none"
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-1.5 text-xs text-accent">
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent px-5 py-3.5 text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              Siapkan Pesan WhatsApp
              <ArrowUpRightIcon className="h-4 w-4" />
            </button>

            {preparedUrl ? (
              <p className="mt-4 rounded-lg border border-accent/40 bg-accent/10 px-3.5 py-3 text-xs leading-relaxed text-copy/90">
                Pesan telah disiapkan di WhatsApp. Jika jendela tidak terbuka,{" "}
                <a href={preparedUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-accent underline">
                  buka tautan ini
                </a>
                . Isi form tidak dikirim atau disimpan oleh website.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
