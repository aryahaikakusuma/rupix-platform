"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShoppingBag } from "lucide-react";

export function Hero() {
  return (
    <section
      id="produk"
      className="relative overflow-hidden lg:min-h-screen"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero.png)" }}
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 z-[1] hidden w-[min(72vw,472px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[36px] border-2 border-white/50 bg-white/[0.02] shadow-[0_0_40px_rgba(255,255,255,0.12),inset_0_0_50px_rgba(255,255,255,0.04)] sm:w-[min(62vw,552px)] lg:block xl:w-[min(55vw,672px)]"
        style={{ aspectRatio: "16 / 9" }}
      >
        <div className="absolute bottom-5 right-5 flex max-w-[calc(100%-2.5rem)] items-center gap-3 rounded-xl bg-white/20 px-4 py-3.5 backdrop-blur-md">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
            <ShoppingBag className="h-5 w-5 text-white" aria-hidden />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white">Supermarket</p>
            <p className="mt-0.5 text-xs text-white/70">Pembayaran Berhasil</p>
          </div>
          <span className="shrink-0 text-sm font-bold text-white">
            Rp 150.000
          </span>
        </div>
      </motion.div>

      <div className="section-container relative z-10 flex flex-col pb-16 pt-24 sm:pb-12 sm:pt-32 lg:grid lg:grid-cols-2 lg:items-start lg:gap-16 lg:pb-20 lg:pt-24 lg:min-h-screen">
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl text-left text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.1] tracking-tight text-white text-balance [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]"
        >
          Satu Telapak Tangan{" "}
          <br />
          untuk Semua{" "}
          <br />
          Transaksi
        </motion.h1>

        <div className="mt-16 flex flex-col items-start gap-4 self-end lg:mt-0 lg:items-end lg:text-right">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="max-w-md text-[clamp(0.95rem,1.15vw,1.125rem)] leading-relaxed text-white/85 lg:max-w-[45%] xl:max-w-[55%] [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]/"
          >
            Verifikasi identitas dan bayar hanya dengan menunjukkan telapak
            tangan. Tanpa kartu, tanpa smartphone, tanpa kontak fisik cepat dan aman.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          >
            <Button
              href="/daftar"
              className="rounded-full px-8 py-4 text-lg shadow-lg shadow-primary/40"
            >
              Daftar Sekarang
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
