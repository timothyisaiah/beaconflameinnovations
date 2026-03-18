import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { coreValues } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Beacon Flame Innovations—our mission, vision, values, and the story behind our multi-sector innovation company.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[#faf8f5] mb-6">
              Building the Future of Innovation
            </h1>
            <p className="text-xl text-[#faf8f5]/80 max-w-2xl">
              Beacon Flame Innovations Ltd is a multi-sector company operating at
              the intersection of technology, financial technology, and
              agro-business. We create integrated solutions that drive
              sustainable growth and financial inclusion.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-display font-bold text-[#0f172a] mb-6">
                Company Overview
              </h2>
              <p className="text-[#1e293b]/80 leading-relaxed mb-4">
                Founded with a vision to bridge the gap between traditional
                industries and cutting-edge technology, Beacon Flame Innovations
                has grown into a trusted partner for organizations seeking
                transformative solutions.
              </p>
              <p className="text-[#1e293b]/80 leading-relaxed">
                Our unique position at the intersection of tech, fintech, and
                agro allows us to deliver integrated ecosystems that create
                value across entire value chains—from farmer to consumer, from
                unbanked to financially empowered.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-[#0f172a] rounded-2xl p-8 text-[#faf8f5]">
                <h3 className="text-xl font-display font-semibold mb-4">
                  Mission
                </h3>
                <p className="text-[#faf8f5]/80 mb-6">
                  To empower communities and businesses through technology-driven
                  solutions that promote financial inclusion, sustainable
                  agriculture, and scalable innovation.
                </p>
                <h3 className="text-xl font-display font-semibold mb-4">
                  Vision
                </h3>
                <p className="text-[#faf8f5]/80">
                  To create an integrated ecosystem where technology, finance,
                  and agriculture converge—building a more inclusive and
                  sustainable future for all.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              Our Values
            </p>
            <h2 className="text-4xl font-display font-bold text-[#0f172a]">
              What We Stand For
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title}>
                <div className="p-6 rounded-xl border border-[#f5f0e8] hover:border-[#c9a227]/30 transition-colors h-full">
                  <span className="text-3xl font-display font-bold text-[#c9a227]/30">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-[#0f172a] mt-2 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#1e293b]/80 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Placeholder */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center">
            <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              Leadership
            </p>
            <h2 className="text-4xl font-display font-bold text-[#0f172a] mb-6">
              Meet Our Team
            </h2>
            <p className="text-[#1e293b]/80 max-w-2xl mx-auto mb-12">
              Our leadership team brings decades of experience across
              technology, finance, and agriculture. Together, we drive innovation
              that creates lasting impact.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-[#f5f0e8] text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-[#c9a227]/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-[#c9a227]">
                      {i}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-[#0f172a]">
                    Leadership Member {i}
                  </h3>
                  <p className="text-sm text-[#1e293b]/70 mt-1">Role Placeholder</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
              Our Story
            </p>
            <h2 className="text-3xl font-display font-bold text-[#faf8f5] mb-6">
              From Vision to Impact
            </h2>
            <p className="text-[#faf8f5]/80 leading-relaxed">
              Beacon Flame Innovations was born from a simple observation: the
              worlds of technology, finance, and agriculture were evolving
              rapidly—but in silos. We saw an opportunity to create an integrated
              approach that could unlock value for millions. Today, our
              solutions span software platforms, financial services, and
              sustainable agriculture—all designed to work together in a
              cohesive ecosystem that scales.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
