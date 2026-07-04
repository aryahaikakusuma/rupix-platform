"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";

const useCases = [
  { title: "Minimarket", image: "/use1.png" },
  { title: "Kantin Kampus", image: "/use2.png" },
  { title: "Transportasi Umum", image: "/use3.png" },
  { title: "Ritel Modern", image: "/use4.png" },
  { title: "F&B Restoran", image: "/use5.png" },
  { title: "Event & Hiburan", image: "/use6.png" },
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
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const halfWidth = el.scrollWidth / 2;

    const controls = animate(x, -halfWidth, {
      type: "tween",
      ease: "linear",
      duration: 18,
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [x]);

  return (
    <section className="w-full bg-neutral-950 py-20 lg:py-28" aria-labelledby="usecase-heading">
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
            className="mt-3 text-[42px] font-bold tracking-tight text-white sm:text-[48px]"
          >
            Di Mana Rupix Bekerja
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="mt-4 text-[22px] leading-relaxed text-neutral-400"
          >
            Dari belanja harian hingga perjalanan harian — Rupix hadir di
            skenario yang paling sering Anda temui.
          </motion.p>
        </motion.div>

        <div className="mt-14 w-full overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-4 sm:gap-6"
            aria-label="Contoh penggunaan Rupix"
          >
            {useCases.map((item) => (
              <div
                key={item.title}
                className="relative aspect-[4/5] w-[55vw] shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 sm:w-[45vw] sm:aspect-[3/4] lg:w-[280px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 55vw, (max-width:1024px) 45vw, 280px"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white sm:bottom-5 sm:left-5 sm:text-2xl">
                  {item.title}
                </h3>
              </div>
            ))}
            {useCases.map((item) => (
              <div
                key={`dup-${item.title}`}
                className="relative aspect-[4/5] w-[55vw] shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 sm:w-[45vw] sm:aspect-[3/4] lg:w-[280px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 55vw, (max-width:1024px) 45vw, 280px"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white sm:bottom-5 sm:left-5 sm:text-2xl">
                  {item.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
