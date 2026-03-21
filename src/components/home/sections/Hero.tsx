"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useScrollProgressOptional } from "@/contexts/ScrollProgressContext";

export function Hero() {
  const ctx = useScrollProgressOptional();
  const scrollTo = ctx?.scrollToSection;

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[100dvh] flex flex-col justify-end pb-24 md:pb-32 pt-32 md:pt-40 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#faf9f6]/88 via-[#faf9f6]/60 to-[#faf9f6]/40 dark:from-[#020203]/88 dark:via-[#0a0610]/72 dark:to-[#0a0610]/55"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-4xl"
      >
        <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#87158c] mb-6">
          BeaconFlame Innovations
        </p>
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.05] text-[#1a1520] dark:text-[#f4f0f8] font-semibold tracking-tight">
          Engineering intelligent systems for the long game.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-[#4a4455] dark:text-[#c8cdd8] max-w-2xl leading-relaxed">
          Software engineering and technology consultancy—building digital
          solutions, intelligent platforms, analytics systems, and services
          powered by AI, agents, and agentic systems.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4 pointer-events-auto">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="rounded-full px-8"
          >
            Start a conversation
          </Button>
          <button
            type="button"
            onClick={() => scrollTo?.("capabilities")}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#1a1520]/90 dark:text-[#e8ecf4]/85 hover:text-[#87158c] transition-colors"
          >
            <span className="border-b border-[#87158c]/50 group-hover:border-[#87158c] pb-0.5">
              Explore capabilities
            </span>
            <span
              aria-hidden
              className="translate-x-0 group-hover:translate-x-1 transition-transform"
            >
              →
            </span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
