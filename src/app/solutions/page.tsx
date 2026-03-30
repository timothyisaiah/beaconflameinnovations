import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  technologySolutions,
  fintechSolutions,
  agroSolutions,
} from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Technology, Fintech, and Agro solutions—software platforms, mobile banking, digital wallets, smart farming, and more.",
};

function SolutionCard({
  title,
  description,
  useCases,
}: {
  title: string;
  description: string;
  useCases: string[];
}) {
  return (
    <div className="p-6 rounded-xl border border-[var(--card-border)] hover:border-[#87158c]/35 bg-[var(--card)] hover:shadow-lg hover:shadow-black/20 transition-all duration-300">
      <h3 className="text-lg font-display font-semibold text-[var(--foreground)] mb-2">
        {title}
      </h3>
      <p className="text-[var(--muted)] text-sm mb-4">{description}</p>
      <ul className="space-y-1">
        {useCases.map((uc) => (
          <li key={uc} className="text-sm text-[#87158c] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#87158c]" />
            {uc}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SolutionSection({
  title,
  description,
  items,
  accent,
}: {
  title: string;
  description: string;
  items: { title: string; description: string; useCases: string[] }[];
  accent: string;
}) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${accent}`}
          >
            {title.split(" ")[0]}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--foreground)] mb-4">
            {title}
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl">{description}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <AnimatedSection key={item.title}>
              <SolutionCard {...item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-[#1c1a26] via-[var(--background)] to-[var(--background)] py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(135,21,140,0.14),transparent_65%)]"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#87158c] font-medium tracking-widest uppercase text-sm mb-4">
              Solutions
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[var(--foreground)] mb-6">
              Integrated Solutions Across Industries
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl">
              From software platforms to mobile banking, from smart farming to
              payment infrastructure—we deliver technology-driven solutions that
              scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Solutions */}
      <SolutionSection
        title={technologySolutions.title}
        description={technologySolutions.description}
        items={technologySolutions.items}
        accent="bg-blue-500/15 text-blue-200"
      />

      {/* Fintech Solutions */}
      <section className="bg-[var(--surface-raised)]">
        <SolutionSection
          title={fintechSolutions.title}
          description={fintechSolutions.description}
          items={fintechSolutions.items}
          accent="bg-emerald-500/15 text-emerald-200"
        />
      </section>

      {/* Agro Solutions */}
      <SolutionSection
        title={agroSolutions.title}
        description={agroSolutions.description}
        items={agroSolutions.items}
        accent="bg-amber-500/15 text-amber-200"
      />
    </div>
  );
}
