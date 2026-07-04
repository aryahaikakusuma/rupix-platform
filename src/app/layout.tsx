import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rupix.id"),
  title: "Rupix — Pembayaran Biometrik Telapak Tangan",
  description:
    "Verifikasi identitas dan bayar dengan telapak tangan. Tanpa kartu, tanpa HP, tanpa kontak fisik. Alternatif QRIS yang lebih cepat dan aman.",
  robots: "index, follow",
  openGraph: {
    title: "Rupix — Pembayaran Biometrik Telapak Tangan",
    description:
      "Verifikasi identitas dan bayar dengan telapak tangan. Tanpa kartu, tanpa HP, tanpa kontak fisik.",
    type: "website",
    locale: "id_ID",
    siteName: "Rupix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupix — Pembayaran Biometrik Telapak Tangan",
    description:
      "Verifikasi identitas dan bayar dengan telapak tangan. Tanpa kartu, tanpa HP, tanpa kontak fisik.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-neutral-900 antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
