import { cn } from "@/lib/utils";

type ArchitecturalPanelProps = {
  /** Used to vary visual treatment between blocks */
  variant: number;
  className?: string;
};

/**
 * Decorative “system sketch” — no business logic; purely visual hierarchy for scanning.
 */
export function ArchitecturalPanel({ variant, className }: ArchitecturalPanelProps) {
  const patterns = [
    // API + workers + store
    <div key="a" className="flex h-full flex-col gap-3 p-4">
      <div className="flex gap-2">
        <div className="h-9 flex-1 rounded-md border border-[var(--border-strong)] bg-[var(--surface-raised)]" />
        <div className="h-9 w-20 rounded-md border border-[var(--accent)]/35 bg-[var(--accent-muted)]" />
      </div>
      <div className="flex gap-2">
        <div className="h-12 flex-1 rounded-md border border-dashed border-[var(--border-strong)] bg-[var(--bg-subtle)]" />
        <div className="h-12 flex-1 rounded-md border border-dashed border-[var(--border-strong)] bg-[var(--bg-subtle)]" />
      </div>
      <div className="mt-auto h-10 rounded-md border border-[var(--border-strong)] bg-[var(--surface-elevated)]" />
    </div>,
    // Pipeline
    <div key="b" className="flex h-full flex-col justify-between gap-3 p-4">
      <div className="h-8 rounded-md bg-gradient-to-r from-[var(--accent-muted)] to-transparent" />
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-14 rounded-md border border-[var(--border)] bg-[var(--surface-raised)]"
          />
        ))}
      </div>
      <div className="h-8 rounded-md border border-[var(--accent-warm)]/30 bg-[var(--accent-warm-muted)]" />
    </div>,
    // Ledger / layers
    <div key="c" className="flex h-full flex-col gap-2 p-4">
      <div className="h-7 rounded-sm border border-[var(--border-strong)] bg-[var(--surface-raised)]" />
      <div className="flex flex-1 gap-2">
        <div className="w-1/3 rounded-md border border-[var(--border)] bg-[var(--bg-subtle)]" />
        <div className="flex-1 space-y-2">
          <div className="h-8 rounded-md border border-[var(--border)] bg-[var(--surface-elevated)]" />
          <div className="h-8 rounded-md border border-[var(--border)] bg-[var(--surface-elevated)]" />
        </div>
      </div>
      <div className="h-6 rounded-sm bg-[var(--muted-faint)]/25" />
    </div>,
    // Ops / queues
    <div key="d" className="grid h-full grid-cols-2 gap-3 p-4">
      <div className="flex flex-col gap-2">
        <div className="h-10 rounded-md border border-[var(--border-strong)] bg-[var(--surface-raised)]" />
        <div className="h-10 rounded-md border border-[var(--border-strong)] bg-[var(--surface-raised)]" />
        <div className="h-10 rounded-md border border-[var(--border-strong)] bg-[var(--surface-raised)]" />
      </div>
      <div className="flex flex-col justify-between rounded-md border border-[var(--border)] bg-[var(--bg-subtle)] p-2">
        <div className="h-4 w-3/4 rounded bg-[var(--muted)]/20" />
        <div className="h-16 rounded border border-dashed border-[var(--border-strong)]" />
      </div>
    </div>,
    // Infra / mesh
    <div key="e" className="relative h-full p-4">
      <div className="absolute inset-4 rounded-xl border border-[var(--border)] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_70%)]" />
      <div className="relative flex h-full items-center justify-center gap-3">
        <div className="h-16 w-16 rounded-lg border border-[var(--accent)]/40 bg-[var(--surface-raised)]" />
        <div className="hidden h-px w-8 bg-[var(--border-strong)] sm:block" />
        <div className="h-16 w-16 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)]" />
      </div>
    </div>,
  ];

  const idx = variant % patterns.length;
  return (
    <div
      className={cn(
        "relative min-h-[220px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]",
        className,
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.06),transparent_45%)]" />
      {patterns[idx]}
    </div>
  );
}
