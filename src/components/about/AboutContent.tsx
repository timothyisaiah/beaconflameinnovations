"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  Container,
  Section,
  SectionHeader,
} from "@/components/ds";
import {
  aboutCta,
  aboutCredibility,
  aboutHero,
  aboutOrigin,
  aboutPrinciples,
  aboutTeam,
} from "@/data/about";
import { INNER_PAGE_HERO_TOP_CLASS } from "@/lib/inner-page-layout";
import { cn } from "@/lib/utils";

function SectionBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <AnimatedSection className={className}>{children}</AnimatedSection>;
}

export function AboutContent() {
  return (
    <>
      {/* 1. Hero */}
      <Section
        spacing="none"
        variant="bordered"
        labelledBy="about-hero-heading"
        className={cn(INNER_PAGE_HERO_TOP_CLASS, "pb-[var(--section-y-lg)]")}
      >
        <Container>
          <SectionBlock>
            <p className="ds-eyebrow">{aboutHero.eyebrow}</p>
            <h1 id="about-hero-heading" className="ds-heading-display mt-4 max-w-4xl">
              {aboutHero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--foreground-secondary)] md:text-xl">
              {aboutHero.lead}
            </p>
          </SectionBlock>
        </Container>
      </Section>

      {/* 2. Origin story */}
      <Section
        id="origin"
        spacing="lg"
        labelledBy="origin-heading"
      >
        <Container size="narrow">
          <SectionBlock>
            <header>
              <p className="ds-eyebrow">{aboutOrigin.eyebrow}</p>
              <h2
                id="origin-heading"
                className="ds-font-display mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl"
              >
                {aboutOrigin.title}
              </h2>
            </header>
            <div className="mt-8 space-y-5 text-[var(--foreground-secondary)] leading-relaxed">
              {[...aboutOrigin.problemParas, ...aboutOrigin.whyNowParas].map(
                (p, index) => (
                  <p key={index}>{p}</p>
                ),
              )}
            </div>
          </SectionBlock>
        </Container>
      </Section>

      {/* 3. Philosophy */}
      <Section
        id="philosophy"
        spacing="lg"
        variant="muted"
        labelledBy="philosophy-heading"
      >
        <Container>
          <SectionBlock>
            <SectionHeader
              eyebrow={aboutPrinciples.eyebrow}
              title={aboutPrinciples.title}
              titleId="philosophy-heading"
              description={aboutPrinciples.description}
            />
            <ul className="mt-12 grid gap-6 md:grid-cols-2">
              {aboutPrinciples.items.map((item) => (
                <li key={item.title}>
                  <Card variant="default" padding="lg" className="h-full">
                    <CardHeader title={item.title} description={item.body} />
                  </Card>
                </li>
              ))}
            </ul>
          </SectionBlock>
        </Container>
      </Section>

      {/* 4. Credibility */}
      <Section
        id="credibility"
        spacing="lg"
        variant="bordered"
        labelledBy="credibility-heading"
      >
        <Container>
          <SectionBlock>
            <SectionHeader
              eyebrow={aboutCredibility.eyebrow}
              title={aboutCredibility.title}
              titleId="credibility-heading"
              description={aboutCredibility.description}
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <CredibilityList
                  title={aboutCredibility.columns[0].title}
                  id="cred-domains"
                  items={aboutCredibility.columns[0].bullets}
                />
                <CredibilityList
                  title={aboutCredibility.columns[1].title}
                  id="cred-systems"
                  items={aboutCredibility.columns[1].bullets}
                />
              </div>
              <div className="space-y-6">
                <CredibilityList
                  title={aboutCredibility.columns[2].title}
                  id="cred-mindset"
                  items={aboutCredibility.columns[2].bullets}
                />
                <CredibilityList
                  title={aboutCredibility.columns[3].title}
                  id="cred-delivery"
                  items={aboutCredibility.columns[3].bullets}
                />
              </div>
            </div>
          </SectionBlock>
        </Container>
      </Section>

      {/* 5. Team placeholder */}
      <Section
        id="team"
        spacing="lg"
        variant="muted"
        labelledBy="team-heading"
      >
        <Container>
          <SectionBlock>
            <SectionHeader
              eyebrow={aboutTeam.eyebrow}
              title={aboutTeam.title}
              titleId="team-heading"
              description={aboutTeam.description}
            />
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {aboutTeam.members.map((member) => (
                <li key={member.name}>
                  <Card variant="elevated" padding="lg" className="h-full">
                    <div className="flex flex-wrap gap-2">
                      {member.disciplines?.map((d) => (
                        <Badge key={d} tone="neutral">
                          {d}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="ds-font-display mt-4 text-lg font-semibold tracking-tight text-[var(--foreground)]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                      {member.title}
                    </p>
                    <CardContent className="mt-4 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                      {member.bio}
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </SectionBlock>
        </Container>
      </Section>

      {/* 6. CTA */}
      <Section spacing="lg" labelledBy="about-cta-heading">
        <Container size="narrow">
          <SectionBlock>
            <Card variant="outline" padding="lg" className="text-center md:px-10 md:py-12">
              <h2
                id="about-cta-heading"
                className="ds-font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl"
              >
                {aboutCta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[var(--muted)] leading-relaxed">
                {aboutCta.body}
              </p>
              <div className="mt-8 flex justify-center">
                <Button href={aboutCta.href} size="lg" variant="primary">
                  {aboutCta.buttonLabel}
                </Button>
              </div>
            </Card>
          </SectionBlock>
        </Container>
      </Section>
    </>
  );
}

function CredibilityList({
  title,
  id,
  items,
}: {
  title: string;
  id: string;
  items: readonly string[];
}) {
  return (
    <section aria-labelledby={id}>
      <h3
        id={id}
        className="ds-font-display text-lg font-semibold tracking-tight text-[var(--foreground)]"
      >
        {title}
      </h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--foreground-secondary)] marker:text-[var(--muted)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
