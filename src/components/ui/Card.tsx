import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "feature" | "usecase";
}

export function Card({ children, className, variant = "feature" }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-neutral-200/80 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md",
        variant === "usecase" && "min-w-[280px] shrink-0 snap-start sm:min-w-[320px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
