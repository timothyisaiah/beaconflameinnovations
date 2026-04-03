/**
 * Central tuning for landing Framer Motion presets.
 * Adjust duration, stagger, and viewport margin here (see also `placeholders.ts`).
 */

export const landingEase = [0.22, 1, 0.36, 1] as const;

export const landingDuration = {
  xs: 0.2,
  sm: 0.35,
  md: 0.5,
  lg: 0.65,
} as const;

/** Delay between hero entrance steps (badge → title → …) */
export const heroStagger = 0.07;

/** Scroll reveal: start slightly before viewport for natural feel */
export const landingViewport = {
  once: true as const,
  margin: "-10% 0px -8% 0px",
};

export const cardHoverLift = { y: -3 };
