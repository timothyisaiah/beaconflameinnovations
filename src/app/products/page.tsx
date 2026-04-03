import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { products } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { INNER_PAGE_HERO_TOP_CLASS } from "@/lib/inner-page-layout";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products & Ventures",
  description:
    "Explore our innovation portfolio—Beecone honey, Beacon Pay, AgroConnect, and more. Sub-brands and ventures driving impact.",
};

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className={cn(
          "relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-[#1c1a26] via-[var(--background)] to-[var(--background)]",
          INNER_PAGE_HERO_TOP_CLASS,
          "pb-20",
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-5%,rgba(135,21,140,0.14),transparent_65%)]"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#87158c] font-medium tracking-widest uppercase text-sm mb-4">
              Products & Ventures
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[var(--foreground)] mb-6">
              Our Innovation Portfolio
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl">
              From premium honey to enterprise payment infrastructure—our
              sub-brands and ventures represent the breadth of our integrated
              ecosystem.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-24 bg-[var(--surface-raised)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <AnimatedSection key={product.id}>
                <div
                  id={product.id}
                  className="group bg-[var(--card)] rounded-2xl border border-[var(--card-border)] overflow-hidden hover:border-[#87158c]/35 hover:shadow-xl hover:shadow-black/25 transition-all duration-300"
                >
                  <div className="p-8 md:p-10">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[#87158c]/20 text-[#d8b4e8] rounded-full mb-4">
                      {product.category}
                    </span>
                    <h2 className="text-2xl font-display font-bold text-[var(--foreground)] mb-2 group-hover:text-[#c084fc] transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-[#c084fc] font-medium mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-[var(--muted)] leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="px-3 py-1 text-sm bg-white/[0.06] rounded-lg text-[var(--foreground)]/90"
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
            <p className="text-[var(--muted)] mb-6">
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
