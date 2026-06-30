"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparison = [
  {
    aspect: "Kecepatan transaksi",
    qris: "5–15 detik (buka app, scan, konfirmasi)",
    rupix: "< 1 detik (tunjuk telapak tangan)",
    rupixWins: true,
  },
  {
    aspect: "Perangkat yang dibutuhkan",
    qris: "Smartphone + aplikasi e-wallet/bank",
    rupix: "Tidak perlu smartphone",
    rupixWins: true,
  },
  {
    aspect: "Kontak fisik",
    qris: "Sentuh layar HP dan kadang layar merchant",
    rupix: "Zero contact — sensor infrared",
    rupixWins: true,
  },
  {
    aspect: "Keamanan",
    qris: "QR bisa difoto/screenshot",
    rupix: "Biometrik vein — tidak bisa direplikasi",
    rupixWins: true,
  },
  {
    aspect: "Adopsi saat ini",
    qris: "Sangat luas di Indonesia",
    rupix: "Sedang berkembang — early adopter",
    rupixWins: false,
  },
];

export function QrisComparison() {
  return (
    <section
      id="perbandingan"
      className="bg-neutral-50 py-20 lg:py-28"
      aria-labelledby="comparison-heading"
    >
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Perbandingan
          </p>
          <h2
            id="comparison-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Rupix vs QRIS
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            QRIS sudah familiar — Rupix menawarkan langkah berikutnya: lebih
            cepat, tanpa HP, dan lebih aman secara biometrik.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-[var(--radius-card)] border border-neutral-200 bg-white shadow-sm"
        >
          <div className="hidden md:grid md:grid-cols-[1.2fr_1fr_1fr]">
            <div className="border-b border-neutral-200 bg-neutral-50 px-6 py-4 text-sm font-semibold text-neutral-900">
              Aspek
            </div>
            <div className="border-b border-l border-neutral-200 bg-neutral-50 px-6 py-4 text-center text-sm font-semibold text-neutral-600">
              QRIS
            </div>
            <div className="border-b border-l border-neutral-200 bg-primary/5 px-6 py-4 text-center text-sm font-semibold text-primary">
              Rupix
            </div>

            {comparison.map((row) => (
              <div key={row.aspect} className="contents">
                <div className="border-b border-neutral-100 px-6 py-5 text-sm font-medium text-neutral-900">
                  {row.aspect}
                </div>
                <div className="border-b border-l border-neutral-100 px-6 py-5 text-sm text-neutral-600">
                  {row.qris}
                </div>
                <div className="flex items-start gap-2 border-b border-l border-neutral-100 bg-primary/[0.02] px-6 py-5 text-sm text-neutral-900">
                  {row.rupixWins ? (
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  ) : (
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" aria-hidden />
                  )}
                  {row.rupix}
                </div>
              </div>
            ))}
          </div>

          <div className="divide-y divide-neutral-100 md:hidden">
            {comparison.map((row) => (
              <div key={row.aspect} className="p-5">
                <h3 className="font-semibold text-neutral-900">{row.aspect}</h3>
                <div className="mt-3 grid gap-3">
                  <div className="rounded-lg bg-neutral-50 p-3">
                    <p className="text-xs font-medium uppercase text-neutral-500">QRIS</p>
                    <p className="mt-1 text-sm text-neutral-600">{row.qris}</p>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-3">
                    <p className="text-xs font-medium uppercase text-primary">Rupix</p>
                    <p className="mt-1 text-sm text-neutral-900">{row.rupix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
