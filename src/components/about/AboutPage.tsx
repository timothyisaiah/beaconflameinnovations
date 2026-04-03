import { Container } from "@/components/ds/Container";
import { Section, SectionHeader } from "@/components/ds/Section";
import { Card, CardContent, CardHeader } from "@/components/ds/Card";
import { CtaLink } from "@/components/home/landing/CtaLink";
import { CONTACT_PATH } from "@/components/home/landing/placeholders";
import {
  aboutCredibility,
  aboutCta,
  aboutHero,
  aboutOrigin,
  aboutPrinciples,
  aboutTeam,
} from "@/data/about";
import { INNER_PAGE_HERO_TOP_CLASS } from "@/lib/inner-page-layout";
import { cn } from "@/lib/utils";

export function AboutPage() {
  return (
    <article>
      {/* 1. Hero */}
      <section
        className={cn(
          "relative overflow-hidden border-b border-[var(--border)] bg-[var(--bg)] pb-[var(--section-y-lg)] md:pb-[var(--space-24)]",
          INNER_PAGE_HERO_TOP_CLASS,
        )}
        aria-labelledby="about-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0 opacity-100" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-15%,rgba(37,99,235,0.11),transparent_58%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_35%,rgba(217,119,6,0.05),transparent_52%)]" />
        </div>

        <Container className="relative">
          <p className="ds-eyebrow mb-4">{aboutHero.eyebrow}</p>
          <h1
            id="about-hero-heading"
            className="ds-heading-display max-w-[22ch] text-[clamp(1.875rem,3.5vw+0.5rem,3rem)]"
          >
            {aboutHero.title}
          </h1>
          <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-[var(--foreground-secondary)] md:text-xl">
            {aboutHero.lead}
          </p>
          <p className="mt-5 max-w-[60ch] text-sm leading-relaxed text-[var(--muted)] md:text-base">
            {aboutHero.supporting}
          </p>
        </Container>
      </section>

      {/* 2. Origin story */}
      <Section
        id="origin"
        spacing="lg"
        labelledBy="origin-heading"
        className="scroll-mt-28"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow={aboutOrigin.eyebrow}
                title={aboutOrigin.title}
                titleId="origin-heading"
              />
            </div>
            <div className="lg:col-span-7 space-y-6 text-[var(--foreground-secondary)] leading-relaxed">
              {aboutOrigin.problemParas.map((p, i) => (
                <p key={`origin-problem-${i}`}>{p}</p>
              ))}
              <div className="border-l-2 border-[var(--accent)]/40 pl-6 space-y-6">
                {aboutOrigin.whyNowParas.map((p, i) => (
                  <p key={`origin-why-${i}`} className="text-[var(--foreground-secondary)]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Philosophy */}
      <Section
        id="principles"
        spacing="lg"
        variant="muted"
        labelledBy="principles-heading"
        className="border-y border-[var(--border)] scroll-mt-28"
      >
        <Container>
          <SectionHeader
            eyebrow={aboutPrinciples.eyebrow}
            title={aboutPrinciples.title}
            titleId="principles-heading"
            description={aboutPrinciples.description}
            className="mb-12"
          />
          <ul className="grid gap-6 md:grid-cols-2">
            {aboutPrinciples.items.map((item) => (
              <li key={item.title}>
                <Card variant="default" padding="lg" className="h-full">
                  <CardHeader title={item.title} />
                  <CardContent className="mt-0">
                    <p className="text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 4. Credibility */}
      <Section
        id="credibility"
        spacing="lg"
        labelledBy="credibility-heading"
        className="scroll-mt-28"
      >
        <Container>
          <SectionHeader
            eyebrow={aboutCredibility.eyebrow}
            title={aboutCredibility.title}
            titleId="credibility-heading"
            description={aboutCredibility.description}
            className="mb-12"
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {aboutCredibility.columns.map((col) => {
              const credId = `cred-${col.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "")}`;
              return (
              <section
                key={col.title}
                aria-labelledby={credId}
                className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
              >
                <h3
                  id={credId}
                  className="ds-font-display text-lg font-semibold text-[var(--foreground)]"
                >
                  {col.title}
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--accent)]">
                  {col.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </section>
            );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. Team placeholder */}
      <Section
        id="team"
        spacing="lg"
        variant="muted"
        labelledBy="team-heading"
        className="border-y border-[var(--border)] scroll-mt-28"
      >
        <Container>
          <SectionHeader
            eyebrow={aboutTeam.eyebrow}
            title={aboutTeam.title}
            titleId="team-heading"
            description={aboutTeam.description}
            className="mb-12"
          />
          <ul className="grid gap-6 md:grid-cols-3">
            {aboutTeam.members.map((member) => (
              <li key={`${member.title}-${member.name}`}>
                <Card variant="elevated" padding="lg" className="h-full">
                  <p className="ds-eyebrow text-[var(--muted-faint)]">{member.title}</p>
                  <h3 className="ds-font-display mt-3 text-lg font-semibold text-[var(--foreground)]">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{member.bio}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[var(--muted-faint)]">
                    Disciplines
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {member.disciplines.map((d) => (
                      <li key={d}>
                        <span className="inline-block rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-subtle)] px-2.5 py-1 text-xs text-[var(--foreground-secondary)]">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 6. CTA */}
      <Section
        id="consultation"
        spacing="lg"
        className="scroll-mt-28 pb-[var(--section-y-lg)]"
        aria-labelledby="about-cta-heading"
      >
        <Container size="narrow">
          <div className="rounded-[var(--radius-2xl)] border border-[var(--border-strong)] bg-[var(--surface-raised)] px-6 py-10 text-center md:px-12 md:py-14">
            <h2
              id="about-cta-heading"
              className="ds-font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl"
            >
              {aboutCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              {aboutCta.body}
            </p>
            <div className="mt-8 flex justify-center">
              <CtaLink href={CONTACT_PATH}>{aboutCta.buttonLabel}</CtaLink>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
