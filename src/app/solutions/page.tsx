import type { Metadata } from "next";
import { Container } from "@/components/ds/Container";
import {
  SolutionBlock,
  SolutionsCtaBand,
  SolutionsHero,
  SolutionsOverview,
  TechnicalPrinciples,
} from "@/components/solutions";
import { siteConfig } from "@/data/site";
import {
  solutionBlocks,
  solutionsPageMeta,
} from "@/data/solutions-page";

export const metadata: Metadata = {
  title: solutionsPageMeta.title,
  description: solutionsPageMeta.description,
  openGraph: {
    title: `${solutionsPageMeta.title} | ${siteConfig.name}`,
    description: solutionsPageMeta.description,
  },
};

export default function SolutionsPage() {
  return (
    <div className="pb-[var(--section-y-md)]">
      <SolutionsHero />
      <SolutionsOverview />

      <section
        className="py-[var(--section-y-lg)]"
        aria-labelledby="detailed-solutions-heading"
      >
        <Container>
          <h2 id="detailed-solutions-heading" className="sr-only">
            Detailed solutions
          </h2>
          <div className="flex flex-col gap-[var(--space-24)] lg:gap-28">
            {solutionBlocks.map((block, index) => (
              <SolutionBlock key={block.id} content={block} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <TechnicalPrinciples />
      <SolutionsCtaBand />
    </div>
  );
}
