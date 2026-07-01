"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Fingerprint, Zap, Hand, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

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

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

export function Features() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const feature = features[active];

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 3200);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleTabClick = (i: number) => {
    setActive(i);
    startTimer();
  };

  return (
    <section
      id="tentang"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="features-heading"
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
            Keunggulan Teknologi
          </motion.p>
          <motion.h2
            variants={slideUp}
            id="features-heading"
            className="mt-3 text-[42px] font-bold tracking-tight text-neutral-900 sm:text-[48px]"
          >
            Teknologi Biometrik Kelas Banking
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="mt-4 text-[22px] leading-relaxed text-neutral-600"
          >
            Rupix menggunakan palm vein recognition — standar keamanan yang sama
            dengan sistem perbankan internasional.
          </motion.p>
        </motion.div>

        <div className="mt-14 lg:grid lg:grid-cols-[320px_1fr] lg:gap-12">
          {/* Desktop: vertical tab buttons (icon + title) */}
          <Reveal delay={0.2} className="hidden lg:flex lg:flex-col lg:gap-0 lg:rounded-2xl lg:bg-neutral-100 lg:h-full">
            <div
              role="tablist"
              aria-label="Fitur"
              className="contents"
            >
              {features.map((f, i) => {
                const isActive = i === active;
                const Icon = f.icon;
                return (
                  <button
                    key={f.title}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleTabClick(i)}
                    className={`flex flex-1 items-center gap-4 px-5 py-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset ${
                      isActive
                        ? "bg-neutral-900 text-white shadow-lg"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    } ${i === 0 ? "rounded-t-2xl" : ""} ${i === features.length - 1 ? "rounded-b-2xl" : ""}`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        isActive ? "bg-white/15" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-lg font-semibold">{f.title}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Content panel + Mobile icon navigation */}
          <Reveal delay={0.3} className="mt-8 lg:mt-0">
            <div className="flex flex-col">
              {/* Content panel */}
              <div className="flex flex-col justify-center overflow-hidden rounded-2xl bg-neutral-50 p-8 sm:p-10 h-[480px] lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                      <feature.icon className="h-8 w-8" aria-hidden />
                    </div>
                    <h3 className="text-[28px] font-bold text-neutral-900 sm:text-[34px]">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-xl leading-relaxed text-neutral-600 sm:text-[22px]">
                      {feature.description}
                    </p>
                    <div className="mt-8">
                      <Button href="/daftar" className="px-8 py-3 text-xl">
                        Pelajari Lebih Lanjut
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mobile: icon-only tab navigation */}
              <Reveal delay={0.4} className="mt-6 lg:hidden">
                <div
                  role="tablist"
                  aria-label="Fitur"
                  className="flex items-center divide-x divide-neutral-200 rounded-xl border border-neutral-200 bg-white p-1 shadow-sm"
                >
                  <LayoutGroup>
                    {features.map((f, i) => {
                      const isActive = i === active;
                      const Icon = f.icon;
                      return (
                        <button
                          key={f.title}
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => handleTabClick(i)}
                          className="relative flex flex-1 items-center justify-center py-3 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                        >
                          {isActive && (
                            <motion.div
                              layoutId="mobile-active-tab"
                              className="absolute inset-0 mx-1 rounded-lg bg-neutral-900"
                              transition={{ type: "spring", stiffness: 500, damping: 35 }}
                            />
                          )}
                          <span className="relative z-10">
                            <Icon
                              className={`h-5 w-5 ${isActive ? "text-white" : "text-neutral-400"}`}
                              aria-hidden
                            />
                          </span>
                        </button>
                      );
                    })}
                  </LayoutGroup>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
