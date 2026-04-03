"use client";

import { motion } from "framer-motion";

export function Vision() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="relative py-28 md:py-36 px-6 md:px-10 border-t border-[#87158c]/15 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-[#87158c]/25 bg-gradient-to-br from-[#faf9f6] via-white to-[#f3eef5] px-8 py-14 md:px-16 md:py-20 dark:border-[#87158c]/20 dark:from-[#140a18]/90 dark:via-[#0a0b10]/95 dark:to-[#030306]"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(135,21,140,0.18), transparent 45%), radial-gradient(circle at 80% 30%, rgba(135,21,140,0.1), transparent 40%)",
            }}
          />
          <div className="relative max-w-3xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
              Long-game vision
            </p>
            <h2
              id="vision-heading"
              className="font-display text-3xl md:text-[2.35rem] text-[#1a1520] dark:text-[#f4f0f8] font-semibold tracking-tight leading-tight"
            >
              We are not chasing trends. We are building enduring systems,
              solutions, and partnerships.
            </h2>
            <p className="mt-8 text-lg text-[#4a4455] dark:text-[#c8cdd8]/95 leading-relaxed">
              The work is measured in reliability, adaptability, and trust over
              time—intelligent platforms that remain legible as your organization
              evolves, and engineering judgment that compounds across programs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
