import { Container } from "@/components/ds/Container";
import { solutionsOverview } from "@/data/solutions-page";

export function SolutionsOverview() {
  return (
    <section
      className="border-b border-[var(--border)] bg-[var(--bg-subtle)] py-[var(--section-y-md)]"
      aria-labelledby="solutions-overview-heading"
    >
      <Container>
        <div className="mx-auto max-w-[65ch] text-center">
          <h2 id="solutions-overview-heading" className="ds-heading-2">
            {solutionsOverview.headline}
          </h2>
          <p className="ds-body mt-5 text-left md:text-center">
            {solutionsOverview.intro}
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {solutionsOverview.highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
            >
              <h3 className="ds-heading-3 text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="ds-body-sm mt-3 text-[var(--foreground-secondary)]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
