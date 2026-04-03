import { Container } from "@/components/ds/Container";
import { solutionsHero } from "@/data/solutions-page";
import { INNER_PAGE_HERO_TOP_CLASS } from "@/lib/inner-page-layout";
import { cn } from "@/lib/utils";

export function SolutionsHero() {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[var(--border)] pb-[var(--section-y-lg)]",
        INNER_PAGE_HERO_TOP_CLASS,
      )}
      aria-labelledby="solutions-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--bg-subtle)_0%,transparent_35%)]"
        aria-hidden
      />
      <Container className="relative">
        <p className="ds-eyebrow mb-4">{solutionsHero.eyebrow}</p>
        <h1
          id="solutions-hero-heading"
          className="ds-heading-display max-w-[18ch]"
        >
          {solutionsHero.headline}
        </h1>
        <p className="ds-body mt-6 max-w-[65ch] text-[var(--text-lg)]">
          {solutionsHero.supporting}
        </p>
      </Container>
    </section>
  );
}
