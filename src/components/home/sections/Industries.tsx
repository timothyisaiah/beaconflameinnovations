"use client";

import { motion } from "framer-motion";
import { industries } from "@/data/content";

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative py-28 md:py-36 px-6 md:px-10 border-t border-[#87158c]/15 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
            Industries & use cases
          </p>
          <h2
            id="industries-heading"
            className="font-display text-3xl md:text-4xl text-[#1a1520] dark:text-[#f4f0f8] font-semibold tracking-tight"
          >
            Where serious systems create serious leverage.
          </h2>
          <p className="mt-6 text-[#4a4455] dark:text-[#b8c0cf] text-lg leading-relaxed">
            From regulated environments to high-throughput operations, we align
            product, data, and intelligent automation to the constraints of your
            domain.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4">
          {industries.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="inline-flex items-center rounded-full border border-[#87158c]/20 bg-white/90 px-4 py-2 text-sm text-[#1a1520] dark:border-white/[0.1] dark:bg-[#0b0c10]/70 dark:text-[#d7dce6]/90"
            >
              {label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
