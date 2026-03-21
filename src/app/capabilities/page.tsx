import type { Metadata } from "next";
import Link from "next/link";
import { capabilities } from "@/data/content";
import { siteConfig } from "@/data/site";

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

      <div className="max-w-5xl mx-auto mt-16 space-y-10">
        {capabilities.map((cap) => (
          <article
            key={cap.id}
            className="rounded-2xl border border-[#87158c]/15 bg-white/95 p-8 md:p-10 dark:border-white/[0.08] dark:bg-[#0b0c10]/80"
          >
            <h2 className="font-display text-2xl text-[var(--foreground)] font-semibold">
              {cap.title}
            </h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">{cap.summary}</p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--foreground)]/85">
              {cap.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="text-[#87158c]/80">/</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
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
