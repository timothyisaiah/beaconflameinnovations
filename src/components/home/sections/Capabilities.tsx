"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { capabilities } from "@/data/content";
import { cn } from "@/lib/utils";

export function Capabilities() {
  const [open, setOpen] = useState<string | null>(capabilities[0]?.id ?? null);

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

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {capabilities.map((cap, index) => {
            const isOpen = open === cap.id;
            return (
              <motion.article
                key={cap.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className={cn(
                  "rounded-2xl border border-[#87158c]/15 bg-white/95 backdrop-blur-md overflow-hidden",
                  "dark:border-white/[0.08] dark:bg-[#0b0c10]/80",
                  "hover:border-[#87158c]/35 dark:hover:border-[#87158c]/25 transition-colors duration-300"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : cap.id)}
                  className="w-full text-left px-6 py-6 md:px-7 md:py-7 flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="font-display text-xl text-[#1a1520] dark:text-[#f4f0f8] font-semibold">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#5c5560] dark:text-[#9aa3b2] leading-relaxed">
                      {cap.summary}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "mt-1 shrink-0 text-[#87158c] text-sm transition-transform",
                      isOpen && "rotate-90"
                    )}
                    aria-hidden
                  >
                    ▸
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="border-t border-[#87158c]/15 dark:border-white/10"
                    >
                      <ul className="px-6 md:px-7 pb-6 md:pb-7 pt-4 space-y-2 text-sm text-[#4a4455] dark:text-[#c8cdd8]">
                        {cap.points.map((pt) => (
                          <li key={pt} className="flex gap-2">
                            <span className="text-[#87158c]/80 mt-0.5">/</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
