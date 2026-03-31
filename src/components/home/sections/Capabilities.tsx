"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { capabilities } from "@/data/content";
import { cn } from "@/lib/utils";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative py-28 md:py-36 px-6 md:px-10 border-t border-[#87158c]/15 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-[#87158c] mb-4">
            Capabilities
          </p>
          <h2
            id="capabilities-heading"
            className="font-display text-3xl md:text-4xl text-[#1a1520] dark:text-[#f4f0f8] font-semibold tracking-tight"
          >
            Modular systems. Clear boundaries. Deliberate execution.
          </h2>
          <p className="mt-6 text-[#4a4455] dark:text-[#b8c0cf] text-lg leading-relaxed">
            Each domain is engineered as part of a coherent platform mindset—so
            intelligence, data, and product surfaces stay aligned as you scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {capabilities.map((cap, index) => (
            <motion.article
              key={cap.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className={cn(
                "group flex flex-col overflow-hidden rounded-2xl border border-[#87158c]/15 bg-white/95 backdrop-blur-md",
                "shadow-sm shadow-[#87158c]/[0.06] dark:shadow-none",
                "dark:border-white/[0.08] dark:bg-[#0b0c10]/80",
                "hover:border-[#87158c]/35 dark:hover:border-[#87158c]/25 transition-colors duration-300"
              )}
            >
              <div
                className={cn(
                  "relative aspect-[5/3] w-full shrink-0 overflow-hidden bg-[#f4f0f8]",
                  "dark:bg-[#12141a]"
                )}
              >
                <Image
                  src={cap.image}
                  alt=""
                  role="presentation"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0c10]/35 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div className="px-6 py-5 md:px-7 md:py-6">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#1a1520] md:text-xl dark:text-[#f4f0f8]">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5c5560] dark:text-[#9aa3b2]">
                  {cap.summary}
                </p>
              </div>
             </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
