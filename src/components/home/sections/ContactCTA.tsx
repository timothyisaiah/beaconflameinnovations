"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-28 md:py-40 px-6 md:px-10 border-t border-[#87158c]/15 dark:border-white/10 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-display text-3xl md:text-4xl text-[#1a1520] dark:text-[#f4f0f8] font-semibold tracking-tight"
          >
            Engagements for organizations that expect precision.
          </h2>
          <p className="mt-6 text-lg text-[#4a4455] dark:text-[#b8c0cf] leading-relaxed">
            If you are evaluating a platform build, an AI systems program,
            analytics modernization, or long-range technology planning—we should
            talk. Partnerships and advisory engagements are structured for
            clarity, outcomes, and mutual fit.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" className="rounded-full px-8">
              Request an introduction
            </Button>
            <Button
              href="/partnerships"
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-[#87158c]/40 text-[#87158c] hover:bg-[#87158c]/10 dark:border-[#f4f0f8]/25 dark:text-[#f4f0f8] dark:hover:bg-[#f4f0f8]/10"
            >
              Partnerships
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
