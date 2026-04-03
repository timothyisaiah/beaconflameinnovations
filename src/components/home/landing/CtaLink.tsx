import Link from "next/link";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  /** Stronger hover lift + shadow for primary hero/final CTAs */
  emphasize?: boolean;
  className?: string;
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-[var(--radius-lg)] px-6 py-3 text-sm font-semibold transition-[color,background-color,box-shadow,transform,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] motion-reduce:transition-colors";

const variants = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)]",
  secondary:
    "border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--border)] hover:bg-[var(--surface-raised)]",
};

const emphasizePrimary =
  "shadow-md shadow-[color-mix(in_srgb,var(--accent)_28%,transparent)] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md";

export function CtaLink({
  href,
  children,
  variant = "primary",
  emphasize = false,
  className,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        variants[variant],
        variant === "primary" && emphasize && emphasizePrimary,
        className,
      )}
    >
      {children}
    </Link>
  );
}
