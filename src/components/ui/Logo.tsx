import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-neutral-900";

  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M8 18L14 8L20 18L14 28L8 18Z"
          fill="#38B6FF"
          transform="translate(2, 0)"
        />
        <path
          d="M14 18L22 6L30 18L22 30L14 18Z"
          fill="#5271FF"
        />
      </svg>
      <span className={cn("text-xl font-bold tracking-wider", textColor)}>
        RUPIX
      </span>
    </Link>
  );
}
