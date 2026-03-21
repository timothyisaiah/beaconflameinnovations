"use client";

import { motion } from "framer-motion";

export function Identity() {
  return (
    <section
      id="identity"
      aria-labelledby="identity-heading"
      className="relative py-28 md:py-36 px-6 md:px-10 border-t border-[#87158c]/15 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
            Positioning
          </p>
          <h2
            id="identity-heading"
            className="font-display text-3xl md:text-4xl text-[#1a1520] dark:text-[#f4f0f8] font-semibold tracking-tight"
          >
            Engineering-led. AI-native. Consultancy with depth.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-6 text-[#4a4455] dark:text-[#b8c0cf] text-lg leading-relaxed"
        >
          <p>
            BeaconFlame Innovations is a software engineering and technology
            consultancy—not a generic studio. We design and build innovations,
            digital solutions, intelligent platforms, analytics systems, and
            services where AI, agents, and agentic workflows are applied with
            intent.
          </p>
          <p>
            Organizations work with us for decades of combined expertise across
            software engineering, product leadership, data analytics, AI
            systems, digital transformation, and technology strategy—delivered
            with the composure and precision expected of a serious engineering
            partner.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
