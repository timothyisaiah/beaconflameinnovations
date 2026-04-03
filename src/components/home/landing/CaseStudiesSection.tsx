"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ds/Card";
import { Badge } from "@/components/ds/Badge";
import { Container } from "@/components/ds/Container";
import { Section, SectionHeader } from "@/components/ds/Section";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { LiftSurface } from "./LiftSurface";
import {
  heroStagger,
  landingDuration,
  landingEase,
} from "./motion-config";
import { RevealInView } from "./RevealInView";
import { CONTACT_PATH } from "./placeholders";

const CASES = [
  {
    projectType: "B2B Fintech",
    title: "Multi-currency ledger with partner APIs",
    problem:
      "Payment flows and reporting broke under cross-border volume; finance lacked a single reconciled view.",
    solution:
      "Bounded contexts for money movement, idempotent commands, partner-facing APIs, and shared reconciliation dashboards.",
    outcomeMetric: "99.95% uptime across payment corridors",
  },
  {
    projectType: "Enterprise SaaS",
    title: "RAG support stack with evaluation gates",
    problem:
      "Generic chat answers created trust issues; auditors needed citations and controlled failure modes.",
    solution:
      "Retrieval with citation requirements, offline eval sets, escalation when confidence drops, and review workflows.",
    outcomeMetric: "↓ 38% median time-to-resolution in pilot",
  },
  {
    projectType: "Growth-stage startup",
    title: "Platform split for a scaling customer base",
    problem:
      "Shared database and deploy practices couldn’t keep pace; incidents were hard to trace under load.",
    solution:
      "Service boundaries, hardened CI/CD, structured observability, and on-call runbooks tied to services.",
    outcomeMetric: "2× release cadence after CI/CD hardening",
  },
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted-faint)]">
      {children}
    </p>
  );
}

export function CaseStudiesSection() {
  const reduced = useReducedMotion();

  return (
    <Section
      id="case-studies"
      spacing="lg"
      labelledBy="cases-heading"
      className="scroll-mt-28"
    >
      <Container>
        <RevealInView>
          <SectionHeader
            eyebrow="Proof"
            title="Outcomes from recent programs"
            titleId="cases-heading"
            description="Typical outcomes from programs we run with founders and platform teams."
            actions={
              <Link
                href={CONTACT_PATH}
                className="ds-link text-sm font-semibold"
              >
                Talk through a similar build →
              </Link>
            }
          />
        </RevealInView>
        <ul className="mt-12 grid list-none gap-6 lg:grid-cols-3">
          {CASES.map((c, index) => (
            <motion.li
              key={c.title}
              initial={reduced ? false : { opacity: 0, y: 22 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: reduced ? 0 : landingDuration.md,
                ease: landingEase,
                delay: reduced ? 0 : index * heroStagger,
              }}
            >
              <LiftSurface className="h-full">
                <Card
                  variant="default"
                  padding="lg"
                  className="flex h-full flex-col border-[var(--border)] transition-[border-color] duration-200 hover:border-[var(--border-strong)] focus-within:border-[var(--accent)]/30 focus-within:ring-2 focus-within:ring-[var(--accent)]/20"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="neutral">{c.projectType}</Badge>
                  </div>
                  <h3 className="ds-font-display mt-4 text-lg font-semibold text-[var(--foreground)]">
                    {c.title}
                  </h3>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed">
                    <div>
                      <FieldLabel>Problem</FieldLabel>
                      <p className="mt-1 text-[var(--foreground-secondary)]">
                        {c.problem}
                      </p>
                    </div>
                    <div>
                      <FieldLabel>Solution</FieldLabel>
                      <p className="mt-1 text-[var(--muted)]">{c.solution}</p>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-[var(--border)] pt-4">
                    <FieldLabel>Outcome</FieldLabel>
                    <p className="mt-1 text-base font-semibold text-[var(--accent-warm)]">
                      {c.outcomeMetric}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[var(--border)] pt-4">
                    <Link
                      href={CONTACT_PATH}
                      className="text-sm font-semibold text-[var(--foreground-secondary)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
                    >
                      Discuss a similar outcome
                    </Link>
                  </div>
                </Card>
              </LiftSurface>
            </motion.li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
