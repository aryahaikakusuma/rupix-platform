"use client";

import { useRef, useEffect, useCallback } from "react";
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

const allCards = [...useCases, ...useCases];

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
  const constraintsRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);
  const BASE_DURATION = 18;

  const startLoop = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    animRef.current?.stop();
    animRef.current = animate(x, 0, {
      type: "tween",
      ease: "linear",
      duration: BASE_DURATION,
      onComplete: () => {
        if (!isDragging.current) {
          x.set(-el.scrollWidth / 2);
          startLoop();
        }
      },
    });
  }, [x]);

  useEffect(() => {
    const el = trackRef.current;
    if (el) x.set(-el.scrollWidth / 2);
    startLoop();
    return () => animRef.current?.stop();
  }, [startLoop, x]);

  const handleDragStart = () => {
    isDragging.current = true;
    animRef.current?.stop();
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    const el = trackRef.current;
    if (!el) return;

    const currentX = x.get();
    const halfWidth = el.scrollWidth / 2;
    const remaining = Math.abs(currentX) / halfWidth;
    const duration = Math.max(remaining * BASE_DURATION, 0.3);

    animRef.current?.stop();
    animRef.current = animate(x, 0, {
      type: "tween",
      ease: "linear",
      duration,
      onComplete: () => {
        if (!isDragging.current) {
          x.set(-el.scrollWidth / 2);
          startLoop();
        }
      },
    });
  };

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

        <div ref={constraintsRef} className="mt-14 w-full overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex cursor-grab gap-4 active:cursor-grabbing sm:gap-6"
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {allCards.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
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
