"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[100dvh] flex flex-col justify-end pb-24 md:pb-32 pt-32 md:pt-40 px-6 md:px-10 max-w-6xl mx-auto"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#131218]/78 via-[#131218]/38 to-transparent"
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
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.05] text-[var(--foreground)] font-semibold tracking-tight">
          Engineering intelligent systems for the long game.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
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
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#e8e4ee]/88 transition-colors hover:text-[#c084fc] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
          >
            <span className="border-b border-[#87158c]/50 pb-0.5 group-hover:border-[#87158c]">
              View solutions
            </span>
            <span
              aria-hidden
              className="translate-x-0 transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
