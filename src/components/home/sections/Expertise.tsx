"use client";

import { motion } from "framer-motion";
import { expertisePillars } from "@/data/content";

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative py-28 md:py-36 px-6 md:px-10 border-t border-[#87158c]/15 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
            Expertise
          </p>
          <h2
            id="expertise-heading"
            className="font-display text-3xl md:text-4xl text-[#1a1520] dark:text-[#f4f0f8] font-semibold tracking-tight"
          >
            Decades of combined experience—applied with restraint.
          </h2>
          <p className="mt-6 text-[#4a4455] dark:text-[#b8c0cf] text-lg leading-relaxed">
            Credibility comes from shipped systems, measured outcomes, and the
            judgment that only forms after repeated delivery cycles. We bring
            that maturity to every engagement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {expertisePillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="rounded-2xl border border-[#87158c]/15 bg-white/95 p-8 md:p-9 dark:border-white/[0.07] dark:bg-[#07080c]/90"
            >
              <h3 className="font-display text-lg text-[#1a1520] dark:text-[#f4f0f8] font-semibold">
                {item.title}
              </h3>
              <p className="mt-4 text-[#5c5560] dark:text-[#9aa3b2] leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
