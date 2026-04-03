"use client";

import { Container } from "@/components/ds/Container";
import { Section } from "@/components/ds/Section";
import { CtaLink } from "./CtaLink";
import { CASE_STUDIES_ANCHOR, CONTACT_PATH } from "./placeholders";
import { RevealInView } from "./RevealInView";

export function FinalCtaSection() {
  return (
    <Section
      spacing="lg"
      variant="muted"
      labelledBy="final-cta-heading"
      className="scroll-mt-28 pb-[var(--section-y-lg)]"
    >
      <Container size="narrow">
        <RevealInView y={24}>
          <div className="rounded-[var(--radius-2xl)] border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-10 text-center shadow-sm md:px-12 md:py-14">
            <h2
              id="final-cta-heading"
              className="ds-font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl"
            >
              Ready for a technical working session?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              Bring your constraints—we’ll map architecture options, delivery
              risks, and a realistic path to production.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <CtaLink href={CONTACT_PATH} emphasize>
                Book a Technical Consultation
              </CtaLink>
              <CtaLink href={CASE_STUDIES_ANCHOR} variant="secondary">
                View Case Studies
              </CtaLink>
            </div>
          </div>
        </RevealInView>
      </Container>
    </Section>
  );
}
