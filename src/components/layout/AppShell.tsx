import { cn } from "@/lib/utils";

type AppShellProps = {
  children: React.ReactNode;
  /** Vertical padding under fixed header (matches header height rhythm) */
  mainClassName?: string;
};

/**
 * Global page shell: skip link + main landmark.
 * Header/Footer live in root layout; this wraps page content only when used inside pages,
 * or use as wrapper in layout around {children}.
 */
export function AppShell({ children, mainClassName }: AppShellProps) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-3 focus:z-[60] rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--foreground)] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
      >
        Skip to content
      </a>
      <main
        id="main"
        tabIndex={-1}
        className={cn(
          "min-h-screen scroll-mt-24 outline-none pt-20 md:pt-24",
          mainClassName,
        )}
      >
        {children}
      </main>
    </>
  );
}
