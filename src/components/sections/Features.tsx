"use client";

import { motion } from "framer-motion";
import { Fingerprint, Zap, Hand, Store } from "lucide-react";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: Fingerprint,
    title: "Keamanan Vein Recognition",
    description:
      "Pola pembuluh darah unik di telapak tangan tidak bisa dipalsukan, dicuri, atau direplikasi seperti kartu atau PIN.",
  },
  {
    icon: Zap,
    title: "Kecepatan Verifikasi",
    description:
      "Identitas terverifikasi dalam hitungan milidetik — lebih cepat dari scan QRIS atau swipe kartu.",
  },
  {
    icon: Hand,
    title: "Tanpa Kontak Fisik",
    description:
      "Cukup tunjukkan telapak tangan ke sensor. Tidak perlu menyentuh layar, keypad, atau perangkat merchant.",
  },
  {
    icon: Store,
    title: "Terintegrasi dengan Merchant Lokal",
    description:
      "Bekerja di minimarket, kantin kampus, transportasi umum, dan ribuan merchant partner di seluruh Indonesia.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  return (
    <section
      id="tentang"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="features-heading"
    >
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Keunggulan Teknologi
          </p>
          <h2
            id="features-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Teknologi Biometrik Kelas Banking
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Rupix menggunakan palm vein recognition — standar keamanan yang sama
            dengan sistem perbankan internasional.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Card className="h-full">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <feature.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-600">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
