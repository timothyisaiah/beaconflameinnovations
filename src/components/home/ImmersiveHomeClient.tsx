"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SectionProgressRail } from "@/components/immersive/SectionProgressRail";
import { Hero } from "@/components/home/sections/Hero";
import { Identity } from "@/components/home/sections/Identity";
import { Capabilities } from "@/components/home/sections/Capabilities";
import { Expertise } from "@/components/home/sections/Expertise";
import { WhyBeacon } from "@/components/home/sections/WhyBeacon";
import { Industries } from "@/components/home/sections/Industries";
import { Vision } from "@/components/home/sections/Vision";
import { ContactCTA } from "@/components/home/sections/ContactCTA";
import { motion } from "framer-motion";

const BeaconCanvas = dynamic(
  () =>
    import("@/components/three/BeaconCanvas").then((m) => m.BeaconCanvas),
  { ssr: false, loading: () => null }
);

function ImmersiveInner() {
  const reducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { resolvedTheme } = useTheme();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const lowPower = reducedMotion || isMobile;
  const isLight = resolvedTheme === "light";

  return (
    <div
      className={
        isLight
          ? "relative min-h-screen bg-[#faf9f6] text-[#1a1520]"
          : "relative min-h-screen bg-[#0a0610] text-[#f4f0f8]"
      }
    >
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
        <div
          className={
            isLight ? "absolute inset-0 bg-[#faf9f6]" : "absolute inset-0 bg-[#020203]"
          }
        />
        {!ready || reducedMotion ? (
          <div
            className="absolute inset-0"
            style={{
              background: isLight
                ? "radial-gradient(ellipse 90% 70% at 50% 22%, rgba(135,21,140,0.09), transparent 58%), radial-gradient(ellipse 75% 55% at 70% 60%, rgba(135,21,140,0.05), transparent 55%), #faf9f6"
                : "radial-gradient(ellipse 90% 70% at 50% 22%, rgba(135,21,140,0.14), transparent 58%), radial-gradient(ellipse 75% 55% at 70% 60%, rgba(135,21,140,0.06), transparent 55%), #020203",
            }}
          />
        ) : (
          <>
            <BeaconCanvas lowPower={lowPower} colorMode={isLight ? "light" : "dark"} />
            <div
              className={
                isLight
                  ? "absolute inset-0 bg-gradient-to-b from-[#faf9f6]/95 via-[#faf9f6]/55 to-[#f3f0f5]/90 pointer-events-none"
                  : "absolute inset-0 bg-gradient-to-b from-[#020203]/95 via-[#0a0610]/45 to-[#0a0610]/90 pointer-events-none"
              }
            />
            <div
              className="absolute inset-0 opacity-[0.2] pointer-events-none"
              style={{
                background: isLight
                  ? "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(135,21,140,0.2), transparent 60%)"
                  : "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(135,21,140,0.28), transparent 60%)",
              }}
            />
          </>
        )}
      </div>

      <motion.article
        className="relative z-10 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <Identity />
        <Capabilities />
        <Expertise />
        <WhyBeacon />
        <Industries />
        <Vision />
        <ContactCTA />
      </motion.article>

      <SectionProgressRail />
    </div>
  );
}

export function ImmersiveHomeClient() {
  return (
    <SmoothScrollProvider>
      <ImmersiveInner />
    </SmoothScrollProvider>
  );
}
