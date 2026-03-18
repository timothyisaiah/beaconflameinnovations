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
    <div className="p-6 rounded-xl border border-[#f5f0e8] hover:border-[#c9a227]/30 bg-white hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-display font-semibold text-[#0f172a] mb-2">
        {title}
      </h3>
      <p className="text-[#1e293b]/80 text-sm mb-4">{description}</p>
      <ul className="space-y-1">
        {useCases.map((uc) => (
          <li key={uc} className="text-sm text-[#c9a227] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" />
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0f172a] mb-4">
            {title}
          </h2>
          <p className="text-lg text-[#1e293b]/80 max-w-2xl">{description}</p>
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
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              Solutions
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[#faf8f5] mb-6">
              Integrated Solutions Across Industries
            </h1>
            <p className="text-xl text-[#faf8f5]/80 max-w-2xl">
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
        accent="bg-blue-100 text-blue-800"
      />

      {/* Fintech Solutions */}
      <section className="bg-[#faf8f5]">
        <SolutionSection
          title={fintechSolutions.title}
          description={fintechSolutions.description}
          items={fintechSolutions.items}
          accent="bg-emerald-100 text-emerald-800"
        />
      </section>

      {/* Agro Solutions */}
      <SolutionSection
        title={agroSolutions.title}
        description={agroSolutions.description}
        items={agroSolutions.items}
        accent="bg-amber-100 text-amber-800"
      />
    </div>
  );
}
