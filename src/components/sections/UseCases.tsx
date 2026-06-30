"use client";

import { motion } from "framer-motion";
import { ShoppingBag, GraduationCap, Bus } from "lucide-react";
import { Card } from "@/components/ui/Card";

const useCases = [
  {
    icon: ShoppingBag,
    title: "Minimarket",
    description:
      "Belanja harian tanpa dompet. Scan telapak tangan di kasir, transaksi selesai sebelum barang masuk tas.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: GraduationCap,
    title: "Kantin Kampus",
    description:
      "Antrian kantin lebih cepat. Mahasiswa cukup tunjuk tangan — tidak perlu buka dompet atau aplikasi.",
    gradient: "from-violet-500/20 to-blue-500/20",
  },
  {
    icon: Bus,
    title: "Transportasi Umum",
    description:
      "Tap-in tap-out otomatis dengan telapak tangan. Integrasi dengan sistem transit Jakarta dan kota besar.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export function UseCases() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="usecase-heading">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Use Case
          </p>
          <h2
            id="usecase-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Di Mana Rupix Bekerja
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Dari belanja harian hingga perjalanan harian — Rupix hadir di
            skenario yang paling sering Anda temui.
          </p>
        </div>

        <div className="mt-14 -mx-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide sm:-mx-6 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card variant="usecase" className="h-full">
                  <div
                    className={`mb-5 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br ${useCase.gradient}`}
                  >
                    <useCase.icon
                      className="h-16 w-16 text-primary"
                      aria-hidden
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-neutral-600">
                    {useCase.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
