"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cardHoverLift, landingDuration, landingEase } from "./motion-config";
import { cn } from "@/lib/utils";

type LiftSurfaceProps = {
  children: React.ReactNode;
  className?: string;
};

/** Subtle hover lift for cards; disabled when reduced motion is on. */
export function LiftSurface({ children, className }: LiftSurfaceProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn("h-full", className)}
      whileHover={reduced ? undefined : cardHoverLift}
      transition={{ duration: landingDuration.xs, ease: landingEase }}
    >
      {children}
    </motion.div>
  );
}
