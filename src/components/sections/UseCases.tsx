"use client";

import { motion } from "framer-motion";
import { ShoppingBag, GraduationCap, Bus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

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

export function UseCases() {
  return (
    <section className="w-full overflow-x-hidden bg-white py-20 lg:py-28" aria-labelledby="usecase-heading">
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
            Use Case
          </motion.p>
          <motion.h2
            variants={slideUp}
            id="usecase-heading"
            className="mt-3 text-[42px] font-bold tracking-tight text-neutral-900 sm:text-[48px]"
          >
            Di Mana Rupix Bekerja
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="mt-4 text-[22px] leading-relaxed text-neutral-600"
          >
            Dari belanja harian hingga perjalanan harian — Rupix hadir di
            skenario yang paling sering Anda temui.
          </motion.p>
        </motion.div>

        <div className="mt-14">
          <div className="flex flex-nowrap gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {useCases.map((useCase, i) => (
              <Reveal
                key={useCase.title}
                delay={i * 0.1}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] max-w-[450px] shrink-0"
              >
                <div className="flex min-w-0 flex-col rounded-[var(--radius-card)] border border-neutral-200/80 bg-white p-6 pb-12 shadow-sm mb-4 transition-shadow duration-200 hover:shadow-md snap-start">
                  <div
                    className={`mb-5 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br ${useCase.gradient}`}
                  >
                    <useCase.icon
                      className="h-16 w-16 text-primary"
                      aria-hidden
                    />
                  </div>
                  <h3 className="text-[22px] font-semibold text-neutral-900">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-xl leading-relaxed text-neutral-600">
                    {useCase.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
