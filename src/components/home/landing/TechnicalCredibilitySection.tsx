"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ds/Badge";
import { Container } from "@/components/ds/Container";
import { Section, SectionHeader } from "@/components/ds/Section";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  heroStagger,
  landingDuration,
  landingEase,
} from "./motion-config";
import { RevealInView } from "./RevealInView";

const PILLARS = [
  {
    id: "sec",
    label: "SECURITY_MODEL",
    title: "Secure-by-design architecture",
    stack: ["Zero-trust patterns", "Encryption", "Reviewable controls"],
    copy:
      "Threat modeling aligned to your data classes: least privilege, encryption in transit and at rest, and reviewable controls—not security as an afterthought.",
  },
  {
    id: "api",
    label: "CONTRACT_LAYER",
    title: "API-first systems",
    stack: ["Versioned APIs", "Schemas", "Integration tests"],
    copy:
      "Stable contracts between services and partners: versioning discipline, schema clarity, and integration tests that protect your roadmap from silent breakage.",
  },
  {
    id: "cloud",
    label: "INFRA_SCALE",
    title: "Scalable cloud infrastructure",
    stack: ["Autoscaling", "Regions", "Cost guardrails"],
    copy:
      "Autoscaling, regional strategy, and cost guardrails matched to traffic patterns—so performance doesn’t collapse when usage jumps.",
  },
  {
    id: "ops",
    label: "OBSERVABILITY",
    title: "Maintainability & observability",
    stack: ["Logs & metrics", "Tracing", "Runbooks"],
    copy:
      "Structured logging, metrics, tracing hooks, and runbooks your engineers actually use—because operability is a feature.",
  },
];

export function TechnicalCredibilitySection() {
  const reduced = useReducedMotion();

  return (
    <Section
      spacing="lg"
      variant="muted"
      labelledBy="technical-heading"
      className="scroll-mt-28 border-y border-[var(--border)] bg-[var(--bg)]"
    >
      <Container>
        <RevealInView>
          <SectionHeader
            eyebrow="Technical credibility"
            title="Built for CTO-level scrutiny"
            titleId="technical-heading"
            description="What we optimize for when the brief is production, not a slide deck."
          />
        </RevealInView>
        <ul className="mt-12 grid list-none gap-6 md:grid-cols-2">
          {PILLARS.map((p, index) => (
            <motion.li
              key={p.id}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: reduced ? 0 : landingDuration.md,
                ease: landingEase,
                delay: reduced ? 0 : index * (heroStagger * 0.75),
              }}
            >
              <div
                className="relative h-full overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] pl-5 pr-6 py-6 md:pl-6 md:py-8"
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, color-mix(in srgb, var(--surface) 92%, var(--accent)) 0%, transparent 42%),
                    linear-gradient(to bottom, var(--bg-subtle) 0%, var(--surface) 28%)
                  `,
                }}
              >
                <div
                  className="absolute left-0 top-0 h-full w-[3px] bg-[var(--accent)]/45"
                  aria-hidden
                />
                <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[var(--muted-faint)]">
                  {p.label}
                </p>
                <h3 className="ds-font-display mt-2 text-lg font-semibold text-[var(--foreground)]">
                  {p.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <Badge key={tag} tone="neutral" className="font-mono text-[0.65rem]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {p.copy}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
