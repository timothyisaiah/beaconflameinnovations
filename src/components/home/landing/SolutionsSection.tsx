"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ds/Card";
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

const SOLUTIONS = [
  {
    title: "AI Systems & Automation",
    description:
      "Design and implement AI workflows that fit your risk profile: retrieval, agents, evaluation harnesses, and human-in-the-loop controls—not demoware.",
    useCases: [
      "Support copilots grounded on your docs",
      "Document extraction with validation rules",
      "Operational workflows with audit trails",
    ],
    outcome:
      "Fewer manual handoffs, measurable accuracy, and a path to production governance.",
  },
  {
    title: "Fintech Platforms & Embedded Finance",
    description:
      "Build ledger-aware services, payment flows, and partner integrations with compliance and reconciliation in mind from day one.",
    useCases: [
      "Wallet and ledger services",
      "KYC/KYB orchestration layers",
      "Settlement and reporting pipelines",
    ],
    outcome:
      "Correct money movement, clear audit surfaces, and APIs your partners can rely on.",
  },
  {
    title: "Product Engineering & Scalable Infrastructure",
    description:
      "End-to-end product delivery on cloud-native foundations: services, data layers, and deployment pipelines sized for where you are—and where you’re headed.",
    useCases: [
      "Greenfield SaaS and internal platforms",
      "Performance and reliability hardening",
      "Platform modularization and API boundaries",
    ],
    outcome:
      "Faster safe releases, lower operational drag, and systems your engineers can evolve.",
  },
];

export function SolutionsSection() {
  const reduced = useReducedMotion();

  return (
    <Section spacing="lg" labelledBy="solutions-heading">
      <Container>
        <RevealInView>
          <SectionHeader
            eyebrow="Core solutions"
            title="What we build with you"
            titleId="solutions-heading"
            description="Three focused tracks—so proposals stay specific and delivery stays accountable."
          />
        </RevealInView>
        <ul className="mt-12 grid list-none gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SOLUTIONS.map((item, index) => (
            <motion.li
              key={item.title}
              className="h-full"
              initial={reduced ? false : { opacity: 0, y: 20 }}
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
                  variant="elevated"
                  padding="lg"
                  className="group flex h-full flex-col border-[var(--border)] transition-[border-color,box-shadow] duration-200 hover:border-[var(--border-strong)] focus-within:border-[var(--accent)]/35 focus-within:ring-2 focus-within:ring-[var(--accent)]/25"
                >
                  <h3 className="ds-font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                  <CardContent className="mt-4 flex flex-1 flex-col border-t border-[var(--border)] pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted-faint)]">
                      Example use cases
                    </p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-[var(--foreground-secondary)]">
                      {item.useCases.map((u) => (
                        <li key={u}>{u}</li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-[var(--foreground-secondary)]">
                      <span className="text-[var(--muted)]">Outcome: </span>
                      {item.outcome}
                    </p>
                  </CardContent>
                </Card>
              </LiftSurface>
            </motion.li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
