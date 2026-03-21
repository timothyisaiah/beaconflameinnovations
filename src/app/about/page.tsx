import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { coreValues, siteConfig, visionStatement } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}—engineering-led consultancy, AI-native delivery, and long-term technology partnerships.`,
};

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="py-16 md:py-24 border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
              About
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-[var(--foreground)] mb-6 tracking-tight">
              A technology company built for serious programs.
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-3xl leading-relaxed">
              {siteConfig.name} is a software engineering and technology
              consultancy headquartered in {siteConfig.location}. We combine deep
              engineering capability with strategic clarity—designing and
              building intelligent platforms, analytics systems, and AI-enabled
              products for organizations that measure success in production, not
              promises.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-semibold text-[var(--foreground)] mb-6">
                How we work
              </h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Engagements are structured around measurable outcomes: system
                boundaries, delivery milestones, and operational constraints. We
                bring decades of combined experience across software engineering,
                product leadership, data analytics, AI systems, and digital
                transformation—applied with the composure expected of global
                partners.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Our posture is future-facing: AI, agents, and agentic workflows
                where they earn their place—integrated with architecture,
                governance, and ownership models that scale.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-2xl border border-[#87158c]/15 bg-white/95 p-8 text-[var(--foreground)] dark:border-white/[0.08] dark:bg-[#0b0c10]/90">
                <h3 className="text-xl font-display font-semibold mb-4">
                  Mission
                </h3>
                <p className="text-[var(--muted)] mb-8 leading-relaxed">
                  Deliver intelligent digital systems and advisory that compound
                  in value—engineered for reliability, clarity, and long-term
                  partnership.
                </p>
                <h3 className="text-xl font-display font-semibold mb-4">
                  Vision
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">{visionStatement}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
              Principles
            </p>
            <h2 className="text-4xl font-display font-semibold text-[var(--foreground)]">
              What we optimize for
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title}>
                <div className="p-6 rounded-2xl border border-[#87158c]/15 bg-white/95 hover:border-[#87158c]/35 transition-colors h-full dark:border-white/[0.08] dark:bg-[#07080c]/90">
                  <span className="text-3xl font-display font-semibold text-[#87158c]/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-[var(--foreground)] mt-2 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[var(--border-subtle)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
              Location
            </p>
            <h2 className="text-3xl font-display font-semibold text-[var(--foreground)] mb-6">
              {siteConfig.location} — global standard
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              We operate with international communication norms, engineering
              discipline, and delivery accountability—rooted in Kampala and built
              for partners who expect precision wherever they sit.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
