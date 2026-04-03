"use client";

import { useScrollProgress } from "@/contexts/ScrollProgressContext";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", label: "Introduction" },
  { id: "identity", label: "Identity" },
  { id: "capabilities", label: "Solutions" },
  { id: "expertise", label: "Expertise" },
  { id: "why", label: "Why Beacon Flame" },
  { id: "industries", label: "Industries" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" },
] as const;

export function SectionProgressRail() {
  const { activeSection, scrollToSection, progress } = useScrollProgress();

  return (
    <nav
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4"
      aria-label="On-page sections"
    >
      <div
        className="absolute right-[7px] top-2 bottom-2 w-px bg-[#87158c]/15 overflow-hidden rounded-full dark:bg-white/10"
        aria-hidden
      >
        <div
          className="w-full bg-gradient-to-b from-[#87158c] to-[#b565c8] origin-top"
          style={{ height: `${Math.round(progress * 100)}%` }}
        />
      </div>
      {SECTIONS.map(({ id, label }) => {
        const active = activeSection === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => scrollToSection(id)}
            className={cn(
              "group relative z-10 flex items-center justify-end gap-3 pl-4",
              active
                ? "text-[#1a1520] dark:text-[#f4f0f8]"
                : "text-[#5c5560] hover:text-[#87158c] dark:text-[#7b8494] dark:hover:text-[#c8cdd8]"
            )}
            aria-current={active ? "true" : undefined}
            aria-label={`Go to ${label}`}
          >
            <span className="hidden xl:block text-[10px] uppercase tracking-[0.22em] max-w-[9rem] text-right">
              {label}
            </span>
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-full border transition-all shrink-0",
                active
                  ? "border-[#87158c] bg-[#87158c]/90 shadow-[0_0_14px_rgba(135,21,140,0.45)]"
                  : "border-[#87158c]/25 bg-[#faf9f6] group-hover:border-[#87158c]/55 dark:border-white/30 dark:bg-[#0a0610] dark:group-hover:border-[#87158c]/55"
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
