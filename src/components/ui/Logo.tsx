import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "lg";
  progress?: number;
}

const sizeClasses = {
  sm: "h-12 sm:h-14 lg:h-16",
  lg: "h-[88px] sm:h-[100px] lg:h-[116px]",
};

export function Logo({ className, variant = "dark", size = "lg", progress = 0 }: LogoProps) {
  const [isReduced, setReduced] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const smoothX = useSpring(200, { stiffness: 50, damping: 20, mass: 1 });
  const p = Math.min(Math.max(progress, 0), 1);

  useEffect(() => {
    smoothX.set(isReduced ? 0 : (1 - p) * 200);
  }, [p, isReduced, smoothX]);

  const logoOpacity = isReduced
    ? (p >= 0.5 ? 0 : 1)
    : Math.max(1 - p * 2, 0);

  const iconOpacity = isReduced
    ? (p >= 0.5 ? 1 : 0)
    : Math.min(p * 2, 1);

  const colorClass = variant === "light" ? "brightness-0 invert" : "";

  return (
    <Link href="/" className={cn("block shrink-0", className)}>
      <div className={cn("relative overflow-hidden", sizeClasses[size])}>
        <Image
          src="/logo.webp"
          alt="Rupix"
          className={cn("h-full w-auto", colorClass)}
          style={{ opacity: logoOpacity }}
          priority
          width={300}
          height={64}
        />
        <motion.img
          src="/icon.webp"
          alt=""
          aria-hidden
          className={cn("absolute left-0 top-0 h-full w-auto", colorClass)}
          style={{ x: smoothX, opacity: iconOpacity }}
          loading="eager"
        />
      </div>
    </Link>
  );
}
