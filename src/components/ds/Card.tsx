import { cn } from "@/lib/utils";

type CardVariant = "default" | "elevated" | "outline" | "muted";

const variantClass: Record<CardVariant, string> = {
  default:
    "border border-[var(--border)] bg-[var(--surface)] shadow-sm",
  elevated:
    "border border-[var(--border-strong)] bg-[var(--surface-raised)] shadow-md",
  outline:
    "border border-[var(--border-strong)] bg-transparent",
  muted:
    "border border-[var(--border)] bg-[var(--bg-subtle)]",
};

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  padding?: "none" | "sm" | "md" | "lg";
};

const paddingClass = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;

/**
 * Bauhaus-style card: structure first; no glassmorphism.
 */
export function Card({
  className,
  variant = "default",
  padding = "md",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-2xl)] transition-[box-shadow,border-color] duration-200",
        variantClass[variant],
        paddingClass[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type CardHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  /** Optional id for the title heading (e.g. form `aria-labelledby`). */
  headingId?: string;
  className?: string;
};

export function CardHeader({
  title,
  description,
  eyebrow,
  headingId,
  className,
}: CardHeaderProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
      <h3
        id={headingId}
        className="ds-font-display text-lg font-semibold tracking-tight text-[var(--foreground)]"
      >
        {title}
      </h3>
      {description ? (
        <p className="text-sm leading-relaxed text-[var(--muted)]">{description}</p>
      ) : null}
    </div>
  );
}

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn("mt-4", className)} {...props} />;
}
