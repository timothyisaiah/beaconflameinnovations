"use client";

import { ContactConsultationForm } from "@/components/contact/ContactConsultationForm";
import { Card, CardHeader } from "@/components/ds/Card";
import { Container } from "@/components/ds/Container";
import { Section } from "@/components/ds/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/data/site";
import { INNER_PAGE_HERO_TOP_CLASS } from "@/lib/inner-page-layout";
import { cn } from "@/lib/utils";

const trustPoints = [
  "We typically respond within 24 hours.",
  "Initial conversations are technical and exploratory—not a scripted sales call.",
  "We work with founders and enterprise engineering teams with the same bar for clarity.",
] as const;

const CONTACT_EMAIL = "contact@beaconflameinnovations.com";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <Section
        spacing="none"
        className={cn(
          "border-b border-[var(--border)]",
          INNER_PAGE_HERO_TOP_CLASS,
          "pb-[var(--section-y-lg)]",
        )}
      >
        <Container>
          <AnimatedSection>
            <header className="max-w-3xl">
              <p className="ds-eyebrow">Contact</p>
              <h1 className="ds-heading-display mt-3">
                Talk to an engineer about your system
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[var(--foreground-secondary)] md:text-xl">
                This is a technical consultation—not a generic sales funnel. Share context,
                constraints, and outcomes; we reply with a straight assessment of fit and
                sensible next steps.
              </p>
            </header>
          </AnimatedSection>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14 lg:items-start">
            <AnimatedSection>
              <ContactConsultationForm />
            </AnimatedSection>

            <div className="flex flex-col gap-8">
              <AnimatedSection>
                <Card variant="muted" padding="lg" className="border-[var(--border-strong)]">
                  <CardHeader
                    eyebrow="Trust"
                    title="What to expect"
                    description="Low-pressure, high-signal—so you can decide quickly whether we should go deeper."
                  />
                  <ul className="mt-6 space-y-4" role="list">
                    {trustPoints.map((text) => (
                      <li key={text} className="flex gap-3">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]">
                          <CheckIcon className="h-4 w-4" />
                        </span>
                        <span className="text-[var(--foreground-secondary)] leading-relaxed">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card variant="outline" padding="lg">
                  <CardHeader
                    eyebrow="Direct"
                    title="Channels & availability"
                    description="Prefer email or need to align across regions—we operate with global enterprise norms."
                  />
                  <dl className="mt-6 space-y-6">
                    <div>
                      <dt className="text-sm font-semibold text-[var(--foreground)]">
                        Email
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="ds-link text-base font-medium"
                        >
                          {CONTACT_EMAIL}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-[var(--foreground)]">
                        Location
                      </dt>
                      <dd className="mt-1 text-[var(--foreground-secondary)] leading-relaxed">
                        {siteConfig.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-[var(--foreground)]">
                        Availability
                      </dt>
                      <dd className="mt-1 text-[var(--foreground-secondary)] leading-relaxed">
                        We coordinate across time zones (EAT / UTC) and schedule around your
                        engineering cadence—no pressure for instant calls.
                      </dd>
                    </div>
                  </dl>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
