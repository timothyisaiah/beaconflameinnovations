"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ds/Container";
import { Section, SectionHeader } from "@/components/ds/Section";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  heroStagger,
  landingDuration,
  landingEase,
} from "./motion-config";
import { RevealInView } from "./RevealInView";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: "01",
    title: "Discover",
    body:
      "Align on outcomes, constraints, and risk: users, data, compliance, and what “done” means in production.",
  },
  {
    step: "02",
    title: "Architect",
    body:
      "Define boundaries: APIs, data flows, security model, and operational guardrails before code hardens assumptions.",
  },
  {
    step: "03",
    title: "Build",
    body:
      "Iterate in thin vertical slices—testable releases, instrumentation early, and review checkpoints you can audit.",
  },
  {
    step: "04",
    title: "Deploy & Scale",
    body:
      "Roll out with runbooks, monitoring, and ownership transfer—so your team can operate and extend with confidence.",
  },
];

export function HowItWorksSection() {
  const reduced = useReducedMotion();

  return (
    <Section
      spacing="lg"
      variant="muted"
      labelledBy="how-heading"
      className="scroll-mt-28"
    >
      <Container>
        <RevealInView>
          <SectionHeader
            eyebrow="How it works"
            title="A delivery model you can plan around"
            titleId="how-heading"
            description="Four clear phases—transparent handoffs, fewer surprises."
          />
        </RevealInView>

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute left-[4%] right-[4%] top-5 hidden h-px bg-gradient-to-r from-[var(--border)] via-[var(--border-strong)] to-[var(--border)] lg:block"
            aria-hidden
          />
          <ol className="relative grid list-none gap-6 lg:grid-cols-4 lg:gap-4">
            {STEPS.map((item, index) => (
              <motion.li
                key={item.title}
                className={cn(
                  "relative min-w-0",
                  index < STEPS.length - 1 &&
                    "lg:border-r lg:border-[var(--border)] lg:pr-4",
                )}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: reduced ? 0 : landingDuration.md,
                  ease: landingEase,
                  delay: reduced ? 0 : index * heroStagger,
                }}
              >
                <div className="h-full rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-subtle)] font-mono text-xs font-semibold text-[var(--accent)]">
                      {item.step}
                    </span>
                  </div>
                  <span className="ds-eyebrow text-[var(--muted-faint)]">
                    Phase
                  </span>
                  <h3 className="ds-font-display mt-2 text-lg font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
