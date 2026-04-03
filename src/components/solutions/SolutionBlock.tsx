import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { SolutionBlockContent } from "@/data/solutions-page";
import { ArchitecturalPanel } from "./ArchitecturalPanel";

type SolutionBlockProps = {
  content: SolutionBlockContent;
  index: number;
};

export function SolutionBlock({ content, index }: SolutionBlockProps) {
  const reversed = index % 2 === 1;

  return (
    <AnimatedSection>
      <article
        id={content.id}
        className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14"
        aria-labelledby={`${content.id}-title`}
      >
        <div
          className={
            reversed ? "lg:order-2 lg:pt-2" : "lg:order-1 lg:pt-2"
          }
        >
          <ArchitecturalPanel variant={index} />
        </div>

        <div className={reversed ? "lg:order-1" : "lg:order-2"}>
          <h2
            id={`${content.id}-title`}
            className="ds-heading-2 text-[var(--foreground)]"
          >
            {content.title}
          </h2>

          <div className="mt-8 space-y-8">
            <section aria-labelledby={`${content.id}-problem`}>
              <h3
                id={`${content.id}-problem`}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
              >
                Problem
              </h3>
              <p className="ds-body mt-2">{content.problem}</p>
            </section>

            <section aria-labelledby={`${content.id}-approach`}>
              <h3
                id={`${content.id}-approach`}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
              >
                System approach
              </h3>
              <p className="ds-body mt-2">{content.approach}</p>
            </section>

            <section aria-labelledby={`${content.id}-cases`}>
              <h3
                id={`${content.id}-cases`}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
              >
                Example use cases
              </h3>
              <ul className="mt-3 list-none space-y-2">
                {content.useCases.map((uc) => (
                  <li
                    key={uc}
                    className="flex gap-3 text-[var(--foreground-secondary)]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                      aria-hidden
                    />
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby={`${content.id}-delivery`}>
              <h3
                id={`${content.id}-delivery`}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
              >
                Technical delivery notes
              </h3>
              <p className="ds-body mt-2">{content.deliveryNotes}</p>
            </section>

            <section
              className="rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-[var(--surface-raised)] p-5"
              aria-labelledby={`${content.id}-outcome`}
            >
              <h3
                id={`${content.id}-outcome`}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]"
              >
                Outcome
              </h3>
              <p className="mt-2 text-[var(--foreground-secondary)] leading-relaxed">
                {content.outcome}
              </p>
            </section>
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}
