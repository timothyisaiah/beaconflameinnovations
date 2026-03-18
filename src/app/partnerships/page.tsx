import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Government collaborations, institutional partnerships, and investment opportunities. Partner with Beacon Flame Innovations.",
};

const partnershipTypes = [
  {
    title: "Government Collaborations",
    description:
      "We work with government agencies to deploy technology solutions that enhance public services, financial inclusion, and agricultural development.",
  },
  {
    title: "Institutional Partnerships",
    description:
      "Banks, NGOs, and enterprises partner with us to leverage our platforms for scale, efficiency, and impact.",
  },
  {
    title: "Investment Opportunities",
    description:
      "Strategic investors and impact funds can explore opportunities to support our growth and mission-driven expansion.",
  },
];

export default function PartnershipsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              Partnerships
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[#faf8f5] mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-[#faf8f5]/80 max-w-2xl">
              We believe in the power of collaboration. Whether you&apos;re a
              government body, financial institution, or impact investor—we
              welcome the opportunity to build together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type) => (
              <AnimatedSection key={type.title}>
                <div className="p-8 bg-white rounded-2xl border border-[#f5f0e8] hover:border-[#c9a227]/30 h-full transition-colors">
                  <h3 className="text-xl font-display font-semibold text-[#0f172a] mb-3">
                    {type.title}
                  </h3>
                  <p className="text-[#1e293b]/80 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold text-[#faf8f5] mb-6">
              Ready to Partner?
            </h2>
            <p className="text-[#faf8f5]/80 text-lg mb-8">
              Get in touch to discuss how we can collaborate to drive innovation
              and impact.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Partner With Us
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
