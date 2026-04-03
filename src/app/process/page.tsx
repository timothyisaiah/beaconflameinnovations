import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ds/Container";
import { Card } from "@/components/ds/Card";
import {
  deliveryPrinciples,
  processFaq,
  processSteps,
} from "@/data/process";
import { siteConfig } from "@/data/site";
import { INNER_PAGE_HERO_TOP_CLASS } from "@/lib/inner-page-layout";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Process",
  description: `How ${siteConfig.name} discovers requirements, architects systems, builds with discipline, and deploys to production—structured delivery for founders and enterprise teams.`,
  openGraph: {
    title: `Process | ${siteConfig.name}`,
    description:
      "A clear, four-phase approach: Discover, Architect, Build, Deploy & Scale—with principles and practices that reduce delivery risk.",
  },
};

export default function ProcessPage() {
  return (
    <div>
      {/* Intro hero */}
      <section
        className={cn(
          "border-b border-[var(--border)]",
          INNER_PAGE_HERO_TOP_CLASS,
          "pb-[var(--section-y-lg)] md:pb-24",
        )}
        aria-labelledby="process-hero-heading"
      >
        <Container>
          <AnimatedSection>
            <p className="ds-eyebrow text-[var(--accent)]">Process</p>
            <h1
              id="process-hero-heading"
              className="font-display mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl"
            >
              Disciplined delivery from first conversation to production scale.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Whether you are validating a product bet or running a regulated
              program, our process is designed to reduce ambiguity, surface risk
              early, and ship software you can operate with confidence.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Four-step timeline */}
      <section
        className="py-20 md:py-28"
        aria-labelledby="process-phases-heading"
      >
        <Container>
          <AnimatedSection className="mb-14 max-w-2xl">
            <p className="ds-eyebrow text-[var(--accent)]">How we work</p>
            <h2
              id="process-phases-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
            >
              Four phases. One continuous thread.
            </h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Each phase produces tangible outputs and tightens the feedback
              loop—so execution quality improves as the system takes shape.
            </p>
          </AnimatedSection>

          <ol className="m-0 list-none p-0">
            {processSteps.map((step, index) => (
              <li key={step.id} className="m-0 p-0">
                <AnimatedSection>
                  <div className="flex gap-6 md:gap-10">
                    {/* Timeline rail: step index + vertical connector */}
                    <div
                      className="flex shrink-0 flex-col items-center"
                      aria-hidden
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] font-display text-sm font-semibold text-[var(--accent)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {index < processSteps.length - 1 ? (
                        <div className="mt-2 w-px min-h-[3rem] flex-1 bg-[var(--border)] md:min-h-[4rem]" />
                      ) : null}
                    </div>

                    <article className="min-w-0 flex-1 pb-16 last:pb-0">
                      <Card variant="default" padding="lg" className="h-full">
                        <header className="border-b border-[var(--border)] pb-6">
                          <h3 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm font-medium text-[var(--foreground-secondary)]">
                            {step.summary}
                          </p>
                        </header>

                        <div className="mt-6 grid gap-8 lg:grid-cols-2">
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                                What happens
                              </h4>
                              <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                                {step.whatHappens}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                                Why it matters
                              </h4>
                              <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                                {step.whyItMatters}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                                Deliverables / outputs
                              </h4>
                              <ul className="mt-3 list-none space-y-2 p-0">
                                {step.deliverables.map((item) => (
                                  <li
                                    key={item}
                                    className="flex gap-2 text-sm leading-relaxed text-[var(--foreground-secondary)]"
                                  >
                                    <span
                                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                                      aria-hidden
                                    />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-subtle)] p-4">
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                                Risk &amp; execution quality
                              </h4>
                              <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                                {step.riskAndQuality}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </article>
                  </div>
                </AnimatedSection>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Delivery principles */}
      <section
        className="border-y border-[var(--border)] bg-[var(--bg-subtle)] py-20 md:py-28"
        aria-labelledby="principles-heading"
      >
        <Container>
          <AnimatedSection className="mb-12 max-w-2xl">
            <p className="ds-eyebrow text-[var(--accent)]">Principles</p>
            <h2
              id="principles-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
            >
              Delivery principles
            </h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              These are non-negotiables that keep programs predictable—without
              suffocating the speed good teams need.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {deliveryPrinciples.map((p, index) => (
              <AnimatedSection key={p.title}>
                <Card variant="default" padding="lg" className="h-full">
                  <p
                    className="font-display text-3xl font-semibold text-[var(--muted-faint)]"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-2 text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                    {p.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section
        className="py-20 md:py-28"
        aria-labelledby="faq-heading"
      >
        <Container size="narrow">
          <AnimatedSection className="mb-10 text-center">
            <p className="ds-eyebrow text-[var(--accent)]">Reassurance</p>
            <h2
              id="faq-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
            >
              Questions teams ask before committing
            </h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              Straight answers—so you can evaluate fit without a sales fog.
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {processFaq.map((item) => (
              <AnimatedSection key={item.question}>
                <details className="group rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] px-5 py-1 transition-colors open:bg-[var(--surface-raised)]">
                  <summary className="cursor-pointer list-none py-4 font-display text-base font-semibold tracking-tight text-[var(--foreground)] marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {item.question}
                      <span
                        className="mt-1 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180"
                        aria-hidden
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </span>
                  </summary>
                  <div className="border-t border-[var(--border)] pb-4 pt-2">
                    <p className="text-sm leading-relaxed text-[var(--foreground-secondary)]">
                      {item.answer}
                    </p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="border-t border-[var(--border)] bg-[var(--bg-subtle)] py-20 md:py-28"
        aria-labelledby="cta-heading"
      >
        <Container size="narrow">
          <AnimatedSection className="text-center">
            <h2
              id="cta-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl"
            >
              Ready to talk through your constraints?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted)] leading-relaxed">
              Share your context and timeline—we will respond with a candid view
              on approach, risks, and what a disciplined engagement could look
              like.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Button href="/contact" variant="primary" size="lg">
                Book a Technical Consultation
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Discuss Your Use Case
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  );
}
