import { Manrope, Playfair_Display, Space_Grotesk } from "next/font/google";

/** Tiga karakter tipografi: body, display, dan aksen editorial italic. */
export const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const editorialFont = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  weight: "600",
  variable: "--font-playfair",
  display: "swap",
});
