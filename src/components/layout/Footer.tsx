"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const footerLinks = {
  Produk: [
    { label: "Pembayaran Biometrik", href: "#produk" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Perbandingan QRIS", href: "#perbandingan" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Karir", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Kontak: [
    { label: "hello@rupix.id", href: "mailto:hello@rupix.id" },
    { label: "Jakarta, Indonesia", href: "#" },
  ],
  "Media Sosial": [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X (Twitter)", href: "#" },
  ],
};

const headingWords = ["Revolutionizing", "Payments,", "One", "palm", "at", "a", "time"];

const wordReveal = {
  hidden: { y: "100%" },
  show: { y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Footer() {
  return (
    <footer id="kontak" className="bg-neutral-950 text-neutral-200">
      <div className="section-container pb-16 lg:pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 mx-auto max-w-6xl -translate-y-1/2 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 px-8 py-4 shadow-xl sm:px-12 sm:py-14 lg:px-16 lg:py-16"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <h2 className="max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {headingWords.map((word, i) => (
                <Fragment key={i}>
                  {i === 2 && <span className="block w-full" />}
                  <span className="inline-block overflow-hidden align-top">
                    <motion.span
                      variants={wordReveal}
                      className="inline-block"
                    >
                      {word}{i < headingWords.length - 1 ? "\u00A0" : ""}
                    </motion.span>
                  </span>
                </Fragment>
              ))}
            </h2>
            <Button href="/daftar" className="shrink-0 self-stretch px-10 py-5 text-lg sm:text-xl lg:text-2xl">
              Mulai pendaftaran biometrik
            </Button>
          </div>
        </motion.div>

        <div className="mt-2 lg:mt-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-1">
              <Logo variant="light" />
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-neutral-200/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-neutral-200/60 sm:text-left">
            &copy; {new Date().getFullYear()} Rupix. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
