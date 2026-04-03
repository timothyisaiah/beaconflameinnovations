/**
 * Beacon Flame — landing page placeholder map
 *
 * Replace before production:
 *
 * 1) Trust bar logos — `src/components/home/landing/TrustBarSection.tsx`
 *    Replace `PLACEHOLDER_LOGOS` blocks with real client/partner SVGs or PNGs
 *    (optimized, consistent height ~24–32px, neutral or monochrome treatment).
 *
 * 2) Case study cards — `src/components/home/landing/CaseStudiesSection.tsx`
 *    Replace `CASES` entries (problem / solution / outcome metric) and wire
 *    “Discuss a similar outcome” links to full case study URLs when routes exist.
 *
 * 3) CTA targets (`CtaLink` in Hero + Final CTA)
 *    Primary “Book a Technical Consultation” → set `CONTACT_PATH` below and/or
 *    wire to Calendly, HubSpot, or `/contact?intent=consultation` once routing is final.
 *
 * 4) Motion tuning — `src/components/home/landing/motion-config.ts`
 *    Adjust `landingDuration`, `heroStagger`, `landingViewport.margin`, and
 *    `cardHoverLift` for global animation feel. Components use `useReducedMotion`
 *    from `src/hooks/useReducedMotion.ts` to disable motion when users prefer reduced motion.
 *
 * 5) Optional: Header “Engage” / nav labels
 *    Global `Header` still points to `/contact`; align wording with consultation CTA if desired.
 */

export const CONTACT_PATH = "/contact?intent=technical-consultation";

export const CASE_STUDIES_ANCHOR = "#case-studies";
