import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "gradient-primary text-white shadow-lg shadow-primary/25 hover:brightness-110 focus-visible:ring-primary",
  secondary:
    "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 focus-visible:ring-neutral-900",
  outline:
    "border-2 border-white/30 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white",
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className,
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-button)] px-6 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
