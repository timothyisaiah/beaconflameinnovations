import { CaseStudiesSection } from "./CaseStudiesSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { HeroSection } from "./HeroSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { SolutionsSection } from "./SolutionsSection";
import { TechnicalCredibilitySection } from "./TechnicalCredibilitySection";
import { TrustBarSection } from "./TrustBarSection";

/**
 * B2B marketing landing: semantic sections, design tokens, single primary CTA
 * (see `placeholders.ts` for logos, case studies, CTAs, and motion tuning).
 */
export function LandingPage() {
  return (
    <article data-landing>
      <HeroSection />
      <TrustBarSection />
      <SolutionsSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <TechnicalCredibilitySection />
      <FinalCtaSection />
    </article>
  );
}
