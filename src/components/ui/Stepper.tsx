import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  orientation?: "horizontal" | "vertical";
}

export function Stepper({
  steps,
  currentStep,
  orientation = "horizontal",
}: StepperProps) {
  const isVertical = orientation === "vertical";

  return (
    <ol
      className={cn(
        "flex",
        isVertical ? "flex-col gap-6" : "flex-col gap-8 md:flex-row md:gap-4",
      )}
      aria-label="Langkah proses"
    >
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isComplete = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <li
            key={step.title}
            className={cn(
              "relative flex flex-1",
              isVertical ? "flex-row gap-4" : "flex-col items-center text-center",
            )}
          >
            {!isVertical && index < steps.length - 1 && (
              <div
                className="absolute left-[calc(50%+28px)] top-6 hidden h-0.5 w-[calc(100%-56px)] bg-neutral-200 md:block"
                aria-hidden
              >
                <div
                  className={cn(
                    "h-full bg-primary transition-all duration-500",
                    isComplete ? "w-full" : isActive ? "w-1/2" : "w-0",
                  )}
                />
              </div>
            )}

            <div
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors",
                isComplete && "bg-primary text-white",
                isActive && "gradient-primary text-white ring-4 ring-primary/20",
                !isComplete && !isActive && "border-2 border-neutral-200 bg-white text-neutral-400",
              )}
              aria-current={isActive ? "step" : undefined}
            >
              {isComplete ? <Check className="h-5 w-5" aria-hidden /> : stepNumber}
            </div>

            <div className={cn(isVertical ? "pt-1" : "mt-4")}>
              <h3
                className={cn(
                  "font-semibold",
                  isActive || isComplete ? "text-neutral-900" : "text-neutral-400",
                )}
              >
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
