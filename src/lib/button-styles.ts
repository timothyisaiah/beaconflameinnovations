import { cn } from "@/lib/utils";

/**
 * Shared button affordances (focus ring, radius) for `<Button />` and nav CTAs.
 */
export const buttonFocusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "warm";
export type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] active:bg-[var(--accent-hover)]",
  secondary:
    "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--surface-raised)]",
  outline:
    "border-2 border-[var(--accent)] bg-transparent text-[var(--accent)] hover:bg-[var(--accent-muted)]",
  ghost:
    "bg-transparent text-[var(--accent)] hover:bg-[var(--accent-muted)]",
  warm:
    "bg-[var(--accent-warm)] text-[#0b0d10] hover:bg-[var(--accent-warm-hover)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-sm font-semibold gap-2",
  lg: "px-8 py-3.5 text-base font-semibold gap-2",
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center rounded-[var(--radius-full)] font-medium transition-colors duration-200",
    buttonFocusRing,
    variants[variant],
    sizes[size],
    className,
  );
}
