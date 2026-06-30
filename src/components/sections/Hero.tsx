"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="produk"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 gradient-primary" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,255,255,0.12)_0%,transparent_60%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px)",
        }}
        aria-hidden
      />

      <div className="section-container relative z-10 grid items-center gap-12 pb-20 pt-32 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-40">
        <div>
          <Reveal delay={0}>
            <div className="mb-6 flex flex-wrap gap-2">
              <Badge className="border-white/20 bg-white/10 text-white">Tanpa Kartu</Badge>
              <Badge className="border-white/20 bg-white/10 text-white">Tanpa HP</Badge>
              <Badge className="border-white/20 bg-white/10 text-white">Tanpa Kontak</Badge>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Satu Telapak Tangan untuk Semua Transaksi
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Verifikasi identitas dan bayar hanya dengan menunjukkan telapak tangan.
              Tanpa kartu, tanpa smartphone, tanpa kontak fisik — cepat dan aman.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/daftar" className="text-base">
                Daftar Sekarang
              </Button>
              <Button variant="outline" href="#cara-kerja" className="text-base">
                Lihat Cara Kerja
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] border border-white/20 bg-white/5 shadow-2xl backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <PalmScanIllustration />
            </div>
            <motion.div
              className="absolute inset-x-8 top-1/2 h-0.5 bg-primary-light/80 shadow-[0_0_20px_#38B6FF] motion-reduce:animate-none"
              animate={{ y: [-80, 80, -80] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden
            />
          </div>
          <p className="mt-4 text-center text-sm text-white/60">
            Simulasi scan telapak tangan — vein recognition aktif
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PalmScanIllustration() {
  return (
    <svg
      viewBox="0 0 200 240"
      className="h-48 w-40 text-white/90 sm:h-56 sm:w-48"
      aria-hidden
      fill="none"
    >
      <path
        d="M100 220 C60 220 40 180 40 140 L40 100 C40 80 55 65 75 65 C75 45 90 30 110 30 C125 30 135 40 140 55 C155 50 170 60 170 80 L170 120 C170 170 145 220 100 220Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="rgba(255,255,255,0.08)"
      />
      {[70, 90, 110, 130].map((y, i) => (
        <path
          key={y}
          d={`M${85 + i * 8} ${y} Q${100} ${y - 20} ${115 - i * 8} ${y}`}
          stroke="#38B6FF"
          strokeWidth="1.5"
          opacity={0.6 + i * 0.1}
        />
      ))}
      <circle cx="100" cy="130" r="30" stroke="#5271FF" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
    </svg>
  );
}
