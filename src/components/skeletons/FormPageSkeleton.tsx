import { cn } from "@/lib/utils";

/** Contact-style layout with hero + two-column form area */
export function FormPageSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "min-h-screen bg-[var(--bg)] animate-pulse pt-24 pb-24 px-6",
        className
      )}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4 max-w-3xl">
          <div className="h-3 w-24 rounded bg-[var(--muted)]/25" />
          <div className="h-10 md:h-12 w-full max-w-xl rounded-lg bg-[var(--muted)]/20" />
          <div className="h-5 w-full max-w-2xl rounded bg-[var(--muted)]/15" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="rounded-2xl border border-[var(--border-subtle)] p-8 md:p-10 space-y-6 bg-[var(--card)]/30">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-24 rounded bg-[var(--muted)]/20" />
                <div className="h-11 w-full rounded-xl bg-[var(--muted)]/10" />
              </div>
            ))}
            <div className="h-11 w-40 rounded-full bg-[var(--muted)]/20" />
          </div>
          <div className="space-y-8 pt-2">
            <div className="h-6 w-48 rounded bg-[var(--muted)]/20" />
            <div className="h-4 w-full max-w-md rounded bg-[var(--muted)]/12" />
            <div className="flex gap-4 pt-4">
              <div className="h-12 w-12 rounded-xl bg-[var(--muted)]/15" />
              <div className="space-y-2 flex-1">
                <div className="h-4 w-24 rounded bg-[var(--muted)]/15" />
                <div className="h-4 w-40 rounded bg-[var(--muted)]/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
