"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ds/Container";
import { Section } from "@/components/ds/Section";
import { TrustChipRow } from "@/components/ds/Badge";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { landingDuration, landingEase } from "./motion-config";
import { RevealInView } from "./RevealInView";

const PROOF_CHIPS = [
  "Production-ready delivery",
  "Secure, scalable architecture",
  "Startup speed, enterprise rigor",
];

const PLACEHOLDER_LOGOS = [
  { id: "logo-1", label: "Client logo" },
  { id: "logo-2", label: "Client logo" },
  { id: "logo-3", label: "Client logo" },
  { id: "logo-4", label: "Client logo" },
  { id: "logo-5", label: "Client logo" },
];

export function TrustBarSection() {
  const reduced = useReducedMotion();

  return (
    <Section spacing="sm" variant="muted" labelledBy="trust-heading">
      <Container>
        <RevealInView y={12}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="max-w-md">
              <h2 id="trust-heading" className="ds-eyebrow text-[var(--muted)]">
                Trusted by teams shipping under pressure
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                From regulated finance to high-growth SaaS—delivery models that
                match enterprise expectations.
              </p>
              <div className="mt-5">
                <TrustChipRow items={PROOF_CHIPS} />
              </div>
            </div>
            <motion.ul
              className="flex flex-wrap items-center justify-start gap-4 lg:justify-end"
              aria-label="Client and partner logos"
              initial={reduced ? false : { opacity: 0 }}
              whileInView={reduced ? undefined : { opacity: 1 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{
                duration: reduced ? 0 : landingDuration.sm,
                ease: landingEase,
              }}
            >
              {PLACEHOLDER_LOGOS.map((item) => (
                <li key={item.id}>
                  <div
                    className="flex h-11 min-w-[6.5rem] items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 text-xs font-medium uppercase tracking-wider text-[var(--muted-faint)]"
                    title="Replace with logo image"
                  >
                    {item.label}
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </RevealInView>
      </Container>
    </Section>
  );
}
