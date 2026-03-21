import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { products } from "@/data/products";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Products & Ventures",
  description:
    "Explore our innovation portfolio—Beecone honey, Beacon Pay, AgroConnect, and more. Sub-brands and ventures driving impact.",
};

export default function ProductsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#87158c] font-medium tracking-widest uppercase text-sm mb-4">
              Products & Ventures
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[#faf8f5] mb-6">
              Our Innovation Portfolio
            </h1>
            <p className="text-xl text-[#faf8f5]/80 max-w-2xl">
              From premium honey to enterprise payment infrastructure—our
              sub-brands and ventures represent the breadth of our integrated
              ecosystem.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <AnimatedSection key={product.id}>
                <div
                  id={product.id}
                  className="group bg-white rounded-2xl border border-[#f5f0e8] overflow-hidden hover:border-[#87158c]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8 md:p-10">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[#87158c]/10 text-[#87158c] rounded-full mb-4">
                      {product.category}
                    </span>
                    <h2 className="text-2xl font-display font-bold text-[#0f172a] mb-2 group-hover:text-[#87158c] transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-[#87158c] font-medium mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-[#1e293b]/80 leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="px-3 py-1 text-sm bg-[#f5f0e8] rounded-lg text-[#0f172a]"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <p className="text-[#1e293b]/80 mb-6">
              Interested in our products or exploring partnership opportunities?
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
