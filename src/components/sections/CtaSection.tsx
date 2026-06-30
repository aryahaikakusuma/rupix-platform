"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="bg-neutral-950 py-20 lg:py-28" aria-labelledby="cta-heading">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="cta-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Daftarkan Telapak Tangan Anda Hari Ini
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-200">
            Bergabung dengan ribuan early adopter yang sudah merasakan pembayaran
            masa depan. Registrasi biometrik gratis dan hanya butuh 5 menit.
          </p>
          <div className="mt-10">
            <Button href="/daftar" className="px-10 py-3.5 text-base">
              Daftar Biometrik Gratis
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
