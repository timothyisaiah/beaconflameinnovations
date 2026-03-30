import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { capabilities } from "@/data/content";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Capabilities & services",
  description: `AI systems, agentic AI, software engineering, analytics, and technology consultancy—${siteConfig.name}.`,
  openGraph: {
    title: `Capabilities | ${siteConfig.name}`,
    description:
      "Service domains: AI systems, AI agents, platform engineering, data & analytics, and technology consultancy.",
  },
};

export default function CapabilitiesPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
          Capabilities
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-[var(--foreground)] font-semibold tracking-tight">
          Service domains engineered as one system.
        </h1>
        <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed">
          These domains mirror the immersive narrative on the homepage—structured
          for clarity, SEO, and future CMS integration.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-16 space-y-8 md:space-y-10">
        {capabilities.map((cap, index) => (
          <article
            key={cap.id}
            className={cn(
              "group rounded-2xl border border-[#87158c]/15 bg-white/95 overflow-hidden",
              "dark:border-white/[0.08] dark:bg-[#0b0c10]/80",
              "shadow-sm shadow-[#87158c]/[0.06] dark:shadow-none",
              "flex flex-col md:flex-row md:items-stretch",
              index % 2 === 1 && "md:flex-row-reverse"
            )}
          >
            <div
              className={cn(
                "relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#f4f0f8]",
                "md:aspect-auto md:w-[44%] md:min-h-[260px]",
                "dark:bg-[#12141a]"
              )}
            >
              <Image
                src={cap.image}
                alt=""
                role="presentation"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 360px"
              />
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0c10]/25 to-transparent",
                  index % 2 === 0
                    ? "md:bg-gradient-to-r md:from-transparent md:to-[#0b0c10]/20 dark:md:to-[#0b0c10]/35"
                    : "md:bg-gradient-to-l md:from-transparent md:to-[#0b0c10]/20 dark:md:to-[#0b0c10]/35"
                )}
                aria-hidden
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
              <h2 className="font-display text-2xl text-[var(--foreground)] font-semibold tracking-tight">
                {cap.title}
              </h2>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                {cap.summary}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--foreground)]/85">
                {cap.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-[#87158c]/80" aria-hidden>
                      /
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-center">
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-[#87158c] px-8 py-3 text-white font-semibold hover:bg-[#9d2a9f] dark:hover:bg-[#a855c8] transition-colors"
        >
          Discuss an engagement
        </Link>
      </div>
    </div>
  );
}
