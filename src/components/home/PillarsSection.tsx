"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { corePillars } from "@/data/site";

const icons = {
  tech: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  fintech: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  agro: (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12a3 3 0 103 3 3 3 0 00-3-3z" />
    </svg>
  ),
};

export function PillarsSection() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            Our Core Pillars
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0f172a] mb-6">
            Innovation at the Intersection
          </h2>
          <p className="text-lg text-[#1e293b]/80 max-w-2xl mx-auto">
            We operate where technology, finance, and agriculture converge—creating
            integrated solutions that drive sustainable growth.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {corePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 bg-white rounded-2xl border border-[#f5f0e8] hover:border-[#c9a227]/30 hover:shadow-xl hover:shadow-[#c9a227]/5 transition-all duration-500"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#c9a227]/10 text-[#c9a227] mb-6 group-hover:bg-[#c9a227] group-hover:text-[#0f172a] transition-colors duration-300">
                {icons[pillar.icon as keyof typeof icons]}
              </div>
              <h3 className="text-xl font-display font-semibold text-[#0f172a] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[#1e293b]/80 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
