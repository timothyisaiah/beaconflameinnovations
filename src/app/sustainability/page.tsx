import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sustainability & Innovation",
  description:
    "Technology-driven sustainability—sustainable agriculture, smart farming, and climate impact. Building a greener future.",
};

const sustainabilityPillars = [
  {
    title: "Sustainable Agriculture",
    description:
      "We promote farming practices that protect soil health, conserve water, and reduce chemical inputs. Our agro solutions prioritize long-term environmental stewardship.",
  },
  {
    title: "Smart Farming",
    description:
      "Precision agriculture powered by data and IoT enables farmers to optimize resources, reduce waste, and increase yields sustainably.",
  },
  {
    title: "Climate Impact",
    description:
      "Our solutions are designed for climate resilience—from drought-resistant crop systems to carbon-neutral supply chains.",
  },
];

export default function SustainabilityPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              Sustainability & Innovation
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[#faf8f5] mb-6">
              Technology-Driven Sustainability
            </h1>
            <p className="text-xl text-[#faf8f5]/80 max-w-2xl">
              We believe innovation and sustainability are inseparable. Our
              solutions are built to create lasting positive impact for people
              and the planet.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-[#0f172a] mb-6">
              Our Sustainability Focus
            </h2>
            <p className="text-lg text-[#1e293b]/80 max-w-2xl mx-auto">
              From farm to table, from code to deployment—sustainability is
              embedded in everything we do.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {sustainabilityPillars.map((pillar) => (
              <AnimatedSection key={pillar.title}>
                <div className="p-8 bg-white rounded-2xl border border-[#f5f0e8] hover:border-[#c9a227]/30 h-full transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a227]/10 flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-[#c9a227]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12a3 3 0 103 3 3 3 0 00-3-3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-[#0f172a] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[#1e293b]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold text-[#faf8f5] mb-6">
              Building a Greener Future
            </h2>
            <p className="text-[#faf8f5]/80 text-lg leading-relaxed mb-8">
              Every solution we deploy is evaluated for its environmental
              footprint. We partner with farmers, institutions, and communities
              to create systems that regenerate rather than deplete—ensuring
              that the innovations we power today leave a positive legacy for
              generations to come.
            </p>
            <Button href="/contact" variant="outline">
              Learn How We Can Help
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
