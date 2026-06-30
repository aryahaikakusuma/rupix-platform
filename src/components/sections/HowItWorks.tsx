"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Scan Telapak Tangan",
    description:
      "Daftarkan telapak tangan Anda sekali di device Rupix. Pola pembuluh darah unik disimpan dengan enkripsi end-to-end.",
    image: "/work1.png",
  },
  {
    title: "Hubungkan Pembayaran",
    description:
      "Tautkan rekening bank, e-wallet, atau kartu debit sebagai metode pembayaran default Anda.",
    image: "/work2.png",
  },
  {
    title: "Bayar dengan Telapak Tangan",
    description:
      "Di merchant partner, cukup tunjukkan telapak tangan ke sensor. Transaksi selesai dalam milidetik.",
    image: "/work3.png",
  },
];

const headerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      className="bg-neutral-50 py-20 lg:py-28"
      aria-labelledby="how-heading"
    >
      <div className="section-container">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={slideUp}
            className="text-[26px] font-semibold uppercase tracking-wider text-primary"
          >
            Cara Kerja
          </motion.p>
          <motion.h2
            variants={slideUp}
            id="how-heading"
            className="mt-3 text-[42px] font-bold tracking-tight text-neutral-900 sm:text-[48px]"
          >
            Tiga Langkah, Selesai
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="mt-4 text-[22px] leading-relaxed text-neutral-600"
          >
            Dari registrasi hingga pembayaran pertama — prosesnya sederhana dan
            aman.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="flex">
              <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm">
                <div className="flex flex-1 flex-col p-6 pb-0">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full gradient-primary text-lg font-bold text-white shadow-md">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 flex-1 text-lg leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
                <div className="relative mt-6 h-52 w-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
