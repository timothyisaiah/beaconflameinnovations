import { cn } from "@/lib/utils";

/** Product / card grid pages */
export function ProductGridSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "min-h-screen bg-[var(--background)] animate-pulse pt-28 pb-24 px-6",
        className
      )}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="h-3 w-40 rounded bg-[var(--muted)]/25" />
          <div className="h-11 md:h-14 w-full max-w-2xl rounded-lg bg-[var(--muted)]/20" />
          <div className="h-5 w-full max-w-xl rounded bg-[var(--muted)]/15" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-64 rounded-2xl border border-[var(--border-subtle)] bg-[var(--muted)]/10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
