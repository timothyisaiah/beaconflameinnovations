import Link from "next/link";
import { Container } from "@/components/ds/Container";
import { solutionsCta } from "@/data/solutions-page";
import { buttonClassName } from "@/lib/button-styles";

export function SolutionsCtaBand() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--surface-raised)] py-[var(--section-y-lg)]"
      aria-labelledby="solutions-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_100%_0%,rgba(37,99,235,0.1),transparent_50%)]"
        aria-hidden
      />
      <Container className="relative text-center">
        <h2 id="solutions-cta-heading" className="ds-heading-2">
          {solutionsCta.headline}
        </h2>
        <p className="ds-body mx-auto mt-4 max-w-[52ch]">
          {solutionsCta.supporting}
        </p>
        <div className="mt-8">
          <Link
            href={solutionsCta.ctaHref}
            className={buttonClassName("primary", "lg")}
          >
            {solutionsCta.ctaLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
