import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Strategic partnerships, co-development, and enterprise programs with BeaconFlame Innovations.",
};

const partnershipTypes = [
  {
    title: "Enterprise programs",
    description:
      "Multi-phase platform builds, modernization roadmaps, and AI systems programs with clear governance, milestones, and engineering ownership.",
  },
  {
    title: "Product & platform co-development",
    description:
      "Joint delivery models for teams that need senior architecture, delivery leadership, and hands-on engineering capacity without diluting focus.",
  },
  {
    title: "Advisory & diligence",
    description:
      "Technical due diligence, architecture reviews, and transformation planning for investors, boards, and operating teams making consequential bets.",
  },
];

export default function PartnershipsPage() {
  return (
    <div className="pt-28">
      <section className="py-16 md:py-24 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
              Partnerships
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-[var(--foreground)] mb-6 tracking-tight">
              Structured collaboration for consequential work.
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-3xl leading-relaxed">
              We partner with organizations that value engineering discipline,
              transparent delivery, and outcomes measured in production. If that
              is your bar, we should talk.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type) => (
              <AnimatedSection key={type.title}>
                <div className="p-8 rounded-2xl border border-[#87158c]/15 bg-white/95 hover:border-[#87158c]/35 h-full transition-colors dark:border-white/[0.08] dark:bg-[#0b0c10]/80">
                  <h3 className="text-xl font-display font-semibold text-[var(--foreground)] mb-3">
                    {type.title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">{type.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-semibold text-[var(--foreground)] mb-6">
              Begin with clarity
            </h2>
            <p className="text-[var(--muted)] text-lg mb-10 leading-relaxed">
              Share context, constraints, and desired outcomes. We respond with a
              candid view of fit, approach, and what “good” looks like in
              delivery.
            </p>
            <Button href="/contact" variant="primary" size="lg" className="rounded-full px-10">
              Contact partnerships
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
