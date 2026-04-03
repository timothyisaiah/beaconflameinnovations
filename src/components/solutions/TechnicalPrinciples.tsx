import { Container } from "@/components/ds/Container";
import { technicalPrinciples } from "@/data/solutions-page";

export function TechnicalPrinciples() {
  return (
    <section
      className="border-y border-[var(--border)] bg-[var(--bg)] py-[var(--section-y-lg)]"
      aria-labelledby="principles-heading"
    >
      <Container>
        <div className="mx-auto max-w-[65ch]">
          <p className="ds-eyebrow mb-3">How we engineer</p>
          <h2 id="principles-heading" className="ds-heading-2">
            Technical principles
          </h2>
          <p className="ds-body mt-4">
            These are non-negotiables for how we structure programs—not buzzwords
            on a slide. They keep systems understandable as complexity grows.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {technicalPrinciples.map((p) => (
            <li
              key={p.title}
              className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h3 className="ds-heading-3 text-[var(--foreground)]">{p.title}</h3>
              <p className="ds-body mt-3">{p.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
