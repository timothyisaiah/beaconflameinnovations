"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

export type ScrollProgressValue = {
  /** Throttled 0–1 for UI; use progressRef in useFrame for smooth 3D */
  progress: number;
  progressRef: React.MutableRefObject<number>;
  activeSection: string;
  lenisRef: React.MutableRefObject<import("lenis").default | null>;
  scrollToSection: (id: string) => void;
};

const ScrollProgressContext = createContext<ScrollProgressValue | null>(null);

export function ScrollProgressProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: ScrollProgressValue;
}) {
  return (
    <ScrollProgressContext.Provider value={value}>
      {children}
    </ScrollProgressContext.Provider>
  );
}

export function useScrollProgress() {
  const ctx = useContext(ScrollProgressContext);
  if (!ctx) {
    throw new Error("useScrollProgress must be used within ScrollProgressProvider");
  }
  return ctx;
}

export function useScrollProgressOptional() {
  return useContext(ScrollProgressContext);
}

export function useScrollProgressState() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const progressRef = useRef(0);
  const lenisRef = useRef<import("lenis").default | null>(null);
  const rafUi = useRef<number>(0);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    const lenis = lenisRef.current;
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const syncProgressUi = useCallback((p: number) => {
    progressRef.current = p;
    if (rafUi.current) return;
    rafUi.current = requestAnimationFrame(() => {
      rafUi.current = 0;
      setProgress(progressRef.current);
    });
  }, []);

  const value = useMemo<ScrollProgressValue>(
    () => ({
      progress,
      progressRef,
      activeSection,
      lenisRef,
      scrollToSection,
    }),
    [progress, activeSection, scrollToSection]
  );

  return {
    value,
    setProgress: syncProgressUi,
    setActiveSection,
    lenisRef,
    progressRef,
  };
}
