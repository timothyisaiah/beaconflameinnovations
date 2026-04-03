"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  landingDuration,
  landingEase,
  landingViewport,
} from "./motion-config";
import { cn } from "@/lib/utils";

type RevealInViewProps = {
  children: React.ReactNode;
  className?: string;
  /** Extra delay after scroll trigger (staggered sections) */
  delay?: number;
  /** Vertical offset when entering */
  y?: number;
};

export function RevealInView({
  children,
  className,
  delay = 0,
  y = 18,
}: RevealInViewProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={landingViewport}
      transition={{
        duration: reduced ? 0 : landingDuration.md,
        ease: landingEase,
        delay: reduced ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
