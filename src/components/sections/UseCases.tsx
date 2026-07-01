"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

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
  const controls = useAnimation();
  const isDragging = useRef(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const currentXPxRef = useRef(-50);
  const BASE_DURATION = 18;

  const readTranslateX = (transform: string): number => {
    let m = transform.match(/translateX\(([\d.-]+)/);
    if (m) return parseFloat(m[1]);
    m = transform.match(/translate3d\(([\d.-]+)/);
    if (m) return parseFloat(m[1]);
    m = transform.match(/matrix\(([^)]+)\)/);
    if (m) return parseFloat(m[1].split(",")[4]) || 0;
    return currentXPxRef.current;
  };

  const startLoop = useCallback(() => {
    controls.start({
      x: "0%",
      transition: { ease: "linear", duration: BASE_DURATION },
    }).then(() => {
      if (!isDragging.current) {
        controls.set({ x: "-50%" });
        startLoop();
      }
    });
  }, [controls]);

  useEffect(() => {
    startLoop();
    return () => {
      controls.stop();
    };
  }, [startLoop, controls]);

  const handleDragStart = () => {
    isDragging.current = true;
    controls.stop();
    const el = trackRef.current;
    if (el) currentXPxRef.current = readTranslateX(el.style.transform);
  };

  const handleDrag = () => {
    const el = trackRef.current;
    if (el) currentXPxRef.current = readTranslateX(el.style.transform);
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    const el = trackRef.current;
    if (!el) { startLoop(); return; }

    const px = currentXPxRef.current;
    const width = el.scrollWidth;
    const currentXPct = width > 0 ? (px / width) * 100 : -50;
    const fraction = Math.max(0, Math.min(1, (currentXPct + 50) / 50));
    const duration = Math.max((1 - fraction) * BASE_DURATION, 0.3);

    controls.start({
      x: "0%",
      transition: { ease: "linear", duration },
    }).then(() => {
      if (!isDragging.current) {
        controls.set({ x: "-50%" });
        startLoop();
      }
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
            className="flex cursor-grab gap-6 active:cursor-grabbing"
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            animate={controls}
          >
            {allCards.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="relative aspect-[3/4] w-[75vw] shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 sm:w-[45vw] lg:w-[300px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 75vw, (max-width:1024px) 45vw, 300px"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white">
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
