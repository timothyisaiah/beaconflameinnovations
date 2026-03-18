"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,39,0.08)_0%,_transparent_70%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,162,39,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,39,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-6">
            {siteConfig.name}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-[#faf8f5] tracking-tight leading-[1.1] mb-6">
            {siteConfig.tagline}
          </h1>
          <p className="text-xl md:text-2xl text-[#faf8f5]/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            {siteConfig.description}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button href="/solutions" variant="primary" size="lg">
              Explore Solutions
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#c9a227]/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-[#c9a227] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
