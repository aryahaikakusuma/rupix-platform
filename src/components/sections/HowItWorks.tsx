"use client";

import { motion } from "framer-motion";
import { Stepper } from "@/components/ui/Stepper";

const steps = [
  {
    title: "Scan Telapak Tangan",
    description:
      "Daftarkan telapak tangan Anda sekali di device Rupix. Pola pembuluh darah unik disimpan dengan enkripsi end-to-end.",
  },
  {
    title: "Hubungkan Pembayaran",
    description:
      "Tautkan rekening bank, e-wallet, atau kartu debit sebagai metode pembayaran default Anda.",
  },
  {
    title: "Bayar dengan Telapak Tangan",
    description:
      "Di merchant partner, cukup tunjukkan telapak tangan ke sensor. Transaksi selesai dalam milidetik.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      className="bg-neutral-50 py-20 lg:py-28"
      aria-labelledby="how-heading"
    >
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Cara Kerja
          </p>
          <h2
            id="how-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
          >
            Tiga Langkah, Selesai
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Dari registrasi hingga pembayaran pertama — prosesnya sederhana dan
            aman.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <Stepper steps={steps} currentStep={4} />
        </motion.div>
      </div>
    </section>
  );
}
