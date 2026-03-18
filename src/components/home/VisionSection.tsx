"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { visionStatement } from "@/data/site";

export function VisionSection() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm">
            Our Vision
          </p>
          <blockquote className="text-2xl md:text-4xl font-display font-medium text-[#0f172a] leading-relaxed">
            &ldquo;{visionStatement}&rdquo;
          </blockquote>
          <div>
            <Button href="/partnerships" variant="primary" size="lg">
              Partner With Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
