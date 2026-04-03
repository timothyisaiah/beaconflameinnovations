import { cn } from "@/lib/utils";

type SectionSpacing = "sm" | "md" | "lg" | "none";

const spacingY: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-[var(--section-y-sm)]",
  md: "py-[var(--section-y-md)]",
  lg: "py-[var(--section-y-lg)]",
};

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Section vertical rhythm */
  spacing?: SectionSpacing;
  /** Muted band (subtle bg shift) */
  variant?: "default" | "muted" | "bordered";
  /** Landmark label for aria-labelledby */
  labelledBy?: string;
};

export function Section({
  id,
  children,
  className,
  spacing = "md",
  variant = "default",
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        spacing !== "none" && spacingY[spacing],
        variant === "muted" && "bg-[var(--bg-subtle)]",
        variant === "bordered" && "border-y border-[var(--border)]",
        className,
      )}
    >
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  /** Extra actions (e.g. CTA) on large screens */
  actions?: React.ReactNode;
  className?: string;
};

/**
 * Consistent section title block: eyebrow + h2 + optional description.
 */
export function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  actions,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <header className="max-w-2xl">
        {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
        <h2
          id={titleId}
          className="ds-font-display mt-2 text-2xl tracking-tight text-[var(--foreground)] md:text-3xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-[var(--muted)] leading-relaxed">{description}</p>
        ) : null}
      </header>
      {actions ? (
        <div className="flex shrink-0 flex-wrap gap-3 lg:justify-end">{actions}</div>
      ) : null}
    </div>
  );
}
