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
  title: "Rupix — Pembayaran Biometrik Telapak Tangan",
  description:
    "Verifikasi identitas dan bayar dengan telapak tangan. Tanpa kartu, tanpa HP, tanpa kontak fisik. Alternatif QRIS yang lebih cepat dan aman.",
  openGraph: {
    title: "Rupix — Revolutionizing Payments, One Palm at a Time",
    description:
      "Pembayaran biometrik berbasis palm vein recognition untuk Indonesia.",
    type: "website",
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
