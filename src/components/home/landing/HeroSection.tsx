"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ds/Container";
import { Badge } from "@/components/ds/Badge";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CtaLink } from "./CtaLink";
import {
  heroStagger,
  landingDuration,
  landingEase,
} from "./motion-config";
import { CASE_STUDIES_ANCHOR, CONTACT_PATH } from "./placeholders";

function HeroBlock({
  children,
  delay,
  reduced,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  reduced: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 14 }}
      animate={reduced ? false : { opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : landingDuration.sm,
        ease: landingEase,
        delay: reduced ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  const reduced = useReducedMotion();
  const d = (i: number) => i * heroStagger;

  return (
    <section
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--bg)] pb-[var(--section-y-lg)] pt-24 md:pb-[var(--space-24)] md:pt-32"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(135,21,140,0.18),transparent_55%)]"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_90%_40%,rgba(217,119,6,0.07),transparent_50%)]"
        />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <HeroBlock delay={d(0)} reduced={reduced}>
              <Badge tone="accent" className="mb-5">
                Production systems · Fintech · Infrastructure
              </Badge>
            </HeroBlock>
            <HeroBlock delay={d(1)} reduced={reduced}>
              <h1
                id="hero-heading"
                className="ds-heading-display text-[clamp(1.875rem,4vw+0.75rem,3.25rem)]"
              >
                Ship AI and fintech platforms your team can run in production
              </h1>
            </HeroBlock>
            <HeroBlock delay={d(2)} reduced={reduced}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--foreground-secondary)] md:text-xl">
                BeaconFlame Innovations designs and builds production-ready AI
                systems, embedded finance, and scalable digital infrastructure
                for startups and enterprise teams—clear scope, measurable
                delivery, maintainable code.
              </p>
            </HeroBlock>
            <HeroBlock delay={d(3)} reduced={reduced}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <CtaLink href={CONTACT_PATH} emphasize>
                  Book a Technical Consultation
                </CtaLink>
                <CtaLink href={CASE_STUDIES_ANCHOR} variant="secondary">
                  View Case Studies
                </CtaLink>
              </div>
            </HeroBlock>
            <HeroBlock delay={d(4)} reduced={reduced}>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
                From architecture review to deployment: documentation, handover,
                and observability baked in—not a throw-it-over-the-wall build.
              </p>
            </HeroBlock>
          </div>

          <HeroBlock
            delay={d(5)}
            reduced={reduced}
            className="lg:col-span-6"
          >
            <div
              role="region"
              className="relative rounded-[var(--radius-2xl)] border border-[var(--border-strong)] bg-[var(--surface)] p-6 shadow-sm md:p-8"
              aria-label="Abstract system diagram: ingestion, services, and deployment"
            >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="ds-eyebrow text-[var(--muted-faint)]">
                    Delivery snapshot
                  </span>
                  <span className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-subtle)] px-2 py-1 text-xs font-medium text-[var(--muted)]">
                    API-first
                  </span>
                </div>
                <div className="grid gap-3 font-mono text-xs text-[var(--muted)] md:grid-cols-3 md:text-[0.8125rem]">
                  <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-subtle)] p-3">
                    <p className="text-[var(--foreground-secondary)]">Ingest</p>
                    <p className="mt-1 text-[var(--muted-faint) text-xs]">
                      streams · batch · vendors
                    </p>
                  </div>
                  <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-subtle)] p-3">
                    <p className="text-[var(--foreground-secondary)]">Core</p>
                    <p className="mt-1 text-[var(--muted-faint)]">
                      services · policies · workflows
                    </p>
                  </div>
                  <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-subtle)] p-3 md:col-span-1">
                    <p className="text-[var(--foreground-secondary)]">Ops</p>
                    <p className="mt-1 text-[var(--muted-faint)]">
                      deploy · observe · iterate
                    </p>
                  </div>
                </div>
                <div className="mt-5 space-y-2 border-t border-[var(--border)] pt-5">
                  <div className="flex items-center justify-between gap-4 text-xs text-[var(--muted)]">
                    <span>Release readiness</span>
                    <span className="font-medium text-[var(--foreground-secondary)]">
                      CI/CD · IaC · runbooks
                    </span>
                  </div>
                  <div
                    className="h-2 overflow-hidden rounded-full bg-[var(--bg-subtle)]"
                    aria-hidden
                  >
                    <motion.div
                      className="h-full rounded-full bg-[var(--accent)] opacity-90"
                      initial={reduced ? false : { width: "0%" }}
                      animate={reduced ? false : { width: "82%" }}
                      transition={{
                        duration: reduced ? 0 : landingDuration.lg,
                        ease: landingEase,
                        delay: reduced ? 0 : d(5) + 0.2,
                      }}
                    />
                  </div>
                </div>
              </div>
          </HeroBlock>
        </div>
      </Container>
    </section>
  );
}
