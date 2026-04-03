import { cn } from "@/lib/utils";

/** Generic marketing page placeholder (about, capabilities, partnerships, etc.) */
export function PageSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "min-h-screen bg-[var(--bg)] animate-pulse pt-24 pb-24 px-6",
        className
      )}
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-4 max-w-4xl">
          <div className="h-3 w-28 rounded bg-[var(--muted)]/25" />
          <div className="h-10 md:h-14 w-full max-w-3xl rounded-lg bg-[var(--muted)]/20" />
          <div className="h-6 w-full max-w-2xl rounded bg-[var(--muted)]/15" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-36 rounded-2xl border border-[var(--border-subtle)] bg-[var(--muted)]/10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
