/** Immersive homepage: hero band + stacked section blocks */
export function HomePageSkeleton() {
  return (
    <div className="min-h-screen bg-[var(--background)] animate-pulse">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[var(--muted)]/10" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 md:pt-44 pb-28 md:pb-36 space-y-6">
        <div className="h-3 w-56 max-w-full rounded bg-[var(--muted)]/25" />
        <div className="h-12 md:h-16 w-full max-w-3xl rounded-lg bg-[var(--muted)]/20" />
        <div className="h-5 md:h-6 w-full max-w-2xl rounded bg-[var(--muted)]/15" />
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="h-12 w-44 rounded-full bg-[var(--muted)]/20" />
          <div className="h-12 w-40 rounded-full bg-[var(--muted)]/12" />
        </div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-32 space-y-20">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="space-y-6 border-t border-[var(--border-subtle)] pt-16 md:pt-24"
          >
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 space-y-3">
                <div className="h-3 w-32 rounded bg-[var(--muted)]/20" />
                <div className="h-8 w-full rounded bg-[var(--muted)]/15" />
              </div>
              <div className="lg:col-span-7 space-y-3">
                <div className="h-4 w-full rounded bg-[var(--muted)]/12" />
                <div className="h-4 w-full rounded bg-[var(--muted)]/12" />
                <div className="h-4 w-5/6 rounded bg-[var(--muted)]/10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
