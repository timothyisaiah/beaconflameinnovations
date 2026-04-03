import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "accent" | "warm" | "success";

const toneClass: Record<BadgeTone, string> = {
  neutral:
    "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]",
  accent:
    "border-transparent bg-[var(--accent-muted)] text-[var(--accent)]",
  warm:
    "border-transparent bg-[var(--accent-warm-muted)] text-[var(--accent-warm)]",
  success:
    "border-transparent bg-emerald-500/12 text-emerald-400",
};

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: BadgeTone;
};

/** Inline label / tag; use for section labels and metadata. */
export function Badge({
  children,
  className,
  tone = "neutral",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-full)] border px-2.5 py-0.5 text-xs font-semibold tracking-wide",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

type TrustRowProps = {
  items: string[];
  className?: string;
};

/** Horizontal row of trust chips (e.g. “SOC2-ready process”, placeholders). */
export function TrustChipRow({ items, className }: TrustRowProps) {
  return (
    <ul
      className={cn("flex flex-wrap gap-2", className)}
      aria-label="Trust indicators"
    >
      {items.map((label) => (
        <li key={label}>
          <Badge tone="neutral">{label}</Badge>
        </li>
      ))}
    </ul>
  );
}
