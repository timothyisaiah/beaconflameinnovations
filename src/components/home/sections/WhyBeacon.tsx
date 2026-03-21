"use client";

import { motion } from "framer-motion";
import { differentiation } from "@/data/content";

export function WhyBeacon() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative py-28 md:py-36 px-6 md:px-10 border-t border-[#87158c]/15 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
            Why Beacon Flame
          </p>
          <h2
            id="why-heading"
            className="font-display text-3xl md:text-4xl text-[#1a1520] dark:text-[#f4f0f8] font-semibold tracking-tight"
          >
            Differentiation you can verify in architecture and delivery.
          </h2>
        </div>

        <ol className="grid md:grid-cols-2 gap-6 md:gap-8 list-none">
          {differentiation.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.04 }}
              className="relative rounded-2xl border border-[#87158c]/15 bg-gradient-to-br from-white to-[#f5f0f8] p-8 md:p-9 pl-12 md:pl-14 dark:border-white/[0.07] dark:from-[#0c0d12]/95 dark:to-[#07080c]/95"
            >
              <span
                className="absolute left-6 top-8 font-mono text-xs text-[#87158c]/70"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg text-[#1a1520] dark:text-[#f4f0f8] font-semibold">
                {item.title}
              </h3>
              <p className="mt-4 text-[#5c5560] dark:text-[#9aa3b2] leading-relaxed">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
