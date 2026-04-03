import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import {
  collaborationPhases,
  partnershipModelOverview,
  partnershipOutcomes,
  partnershipTracks,
  type PartnershipTrackId,
} from "@/data/partnerships-page";
import { siteConfig } from "@/data/site";
import { INNER_PAGE_HERO_TOP_CLASS } from "@/lib/inner-page-layout";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Partnerships",
  description: `Structured collaboration, co-development, and advisory partnerships with ${siteConfig.name}—for businesses, investors, and institutions.`,
  openGraph: {
    title: `Partnerships | ${siteConfig.name}`,
    description:
      "Defined collaboration models: commercial programs, investor diligence, and institutional or ecosystem partnerships.",
  },
};

const trackAccent: Record<PartnershipTrackId, string> = {
  business: "border-l-[var(--accent)]",
  investor: "border-l-[var(--accent-warm)]",
  institution: "border-l-[#87158c]",
};

const trackBadge: Record<PartnershipTrackId, string> = {
  business: "bg-[var(--accent-muted)] text-[var(--accent)] ring-[var(--accent)]/20",
  investor:
    "bg-[var(--accent-warm-muted)] text-[var(--accent-warm)] ring-[var(--accent-warm)]/25",
  institution:
    "bg-[#87158c]/12 text-[#87158c] ring-[#87158c]/25 dark:text-[#e9d5ff]",
};

export default function PartnershipsPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className={cn(
          "border-b border-[var(--border-subtle)]",
          INNER_PAGE_HERO_TOP_CLASS,
          "pb-16 md:pb-24",
        )}
        aria-labelledby="partnerships-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
              Partnerships
            </p>
            <h1
              id="partnerships-hero-heading"
              className="font-display text-4xl md:text-6xl font-semibold text-[var(--foreground)] mb-6 tracking-tight max-w-4xl"
            >
              Partnership is structured collaboration—not vague affiliation.
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-3xl leading-relaxed">
              We work with businesses, investors, and institutions under clear
              scopes, roles, and outcomes. If you need a serious counterpart for
              delivery, diligence, or long-horizon programs, this page maps how
              we engage—and what you can expect at each step.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partnership model overview */}
      <section
        className="py-20 md:py-28"
        aria-labelledby="model-overview-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-14 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
              Model
            </p>
            <h2
              id="model-overview-heading"
              className="text-3xl md:text-4xl font-display font-semibold text-[var(--foreground)] tracking-tight mb-6"
            >
              {partnershipModelOverview.title}
            </h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              {partnershipModelOverview.intro}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipModelOverview.pillars.map((pillar) => (
              <AnimatedSection key={pillar.title}>
                <div className="h-full rounded-2xl border border-[#87158c]/15 bg-white/95 p-8 dark:border-white/[0.08] dark:bg-[#0b0c10]/80">
                  <h3 className="text-xl font-display font-semibold text-[var(--foreground)] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Audience-specific tracks */}
      <section
        className="py-20 md:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50"
        aria-labelledby="tracks-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-14 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
              Tracks
            </p>
            <h2
              id="tracks-heading"
              className="text-3xl md:text-4xl font-display font-semibold text-[var(--foreground)] tracking-tight mb-6"
            >
              Partnership paths by audience
            </h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              Each track uses a different collaboration pattern. Choose the path
              that matches your organization—then we align on scope and format in
              discovery.
            </p>
          </AnimatedSection>

          <div className="space-y-12 md:space-y-16">
            {partnershipTracks.map((track, index) => (
              <AnimatedSection key={track.id}>
                <article
                  className={cn(
                    "rounded-2xl border border-[#87158c]/15 bg-white/95 pl-6 pr-8 py-8 md:pl-8 md:pr-10 md:py-10",
                    "dark:border-white/[0.08] dark:bg-[#0b0c10]/85",
                    "border-l-4",
                    trackAccent[track.id],
                  )}
                  aria-labelledby={`track-${track.id}-title`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span
                        className={cn(
                          "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-inset",
                          trackBadge[track.id],
                        )}
                      >
                        {track.label}
                      </span>
                      <h3
                        id={`track-${track.id}-title`}
                        className="mt-4 text-2xl md:text-3xl font-display font-semibold text-[var(--foreground)] tracking-tight"
                      >
                        {track.title}
                      </h3>
                    </div>
                    <span
                      className="text-sm tabular-nums text-[var(--muted)] shrink-0"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(partnershipTracks.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground-secondary)] mb-2">
                        What this partnership is
                      </h4>
                      <p className="text-[var(--muted)] leading-relaxed">
                        {track.partnershipType}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground-secondary)] mb-2">
                        What {siteConfig.name} brings
                      </h4>
                      <p className="text-[var(--muted)] leading-relaxed">
                        {track.weBring}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground-secondary)] mb-2">
                        What you gain
                      </h4>
                      <p className="text-[var(--muted)] leading-relaxed">
                        {track.partnerGains}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground-secondary)] mb-3">
                        Example collaboration formats
                      </h4>
                      <ul className="space-y-2 text-[var(--foreground-secondary)]">
                        {track.examples.map((ex) => (
                          <li key={ex} className="flex gap-3">
                            <span
                              className="text-[#87158c]/80 shrink-0 mt-0.5"
                              aria-hidden
                            >
                              /
                            </span>
                            <span className="leading-relaxed">{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How collaboration works */}
      <section
        className="py-20 md:py-28 border-t border-[var(--border-subtle)]"
        aria-labelledby="how-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-14 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
              Process
            </p>
            <h2
              id="how-heading"
              className="text-3xl md:text-4xl font-display font-semibold text-[var(--foreground)] tracking-tight mb-6"
            >
              How collaboration works
            </h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              A repeatable rhythm from first conversation to steady-state
              delivery—so expectations stay aligned as the work evolves.
            </p>
          </AnimatedSection>

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 list-none m-0 p-0">
            {collaborationPhases.map((phase, i) => (
              <AnimatedSection key={phase.title}>
                <li className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7 flex flex-col">
                  <span className="font-display text-3xl font-semibold text-[var(--muted-faint)] mb-4 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-[var(--foreground)] mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
                    {phase.description}
                  </p>
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefits / outcomes */}
      <section
        className="py-20 md:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50"
        aria-labelledby="outcomes-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-14 md:mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
              Outcomes
            </p>
            <h2
              id="outcomes-heading"
              className="text-3xl md:text-4xl font-display font-semibold text-[var(--foreground)] tracking-tight mb-6"
            >
              Benefits of a defined partnership
            </h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              The goal is not a generic alliance—it is measurable progress,
              credible governance, and systems that hold up in production.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-8">
            {partnershipOutcomes.map((item) => (
              <AnimatedSection key={item.title}>
                <div className="h-full rounded-2xl border border-[#87158c]/15 bg-white/95 p-8 dark:border-white/[0.08] dark:bg-[#0b0c10]/80">
                  <h3 className="text-lg font-display font-semibold text-[var(--foreground)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-28 border-t border-[var(--border-subtle)]"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2
              id="cta-heading"
              className="text-3xl font-display font-semibold text-[var(--foreground)] mb-6"
            >
              Ready to align on scope and fit?
            </h2>
            <p className="text-[var(--muted)] text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Share your context—audience track, constraints, and desired
              outcomes. We will respond with a candid view of how we can engage
              and what the next steps look like.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="rounded-full px-10"
            >
              Discuss a Partnership
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
