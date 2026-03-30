"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const lowPower = reducedMotion || isMobile;

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[var(--background)]" />
        {!ready || reducedMotion ? (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 72% at 50% 20%, rgba(135,21,140,0.16), transparent 58%), radial-gradient(ellipse 78% 58% at 72% 62%, rgba(135,21,140,0.07), transparent 55%), #131218",
            }}
          />
        ) : (
          <>
            <BeaconCanvas lowPower={lowPower} colorMode="dark" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#131218]/88 via-[#131218]/48 to-[#131218]/82 pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.22] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 72% 56% at 50% 34%, rgba(135,21,140,0.22), transparent 62%)",
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
