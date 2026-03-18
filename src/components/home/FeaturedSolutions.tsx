"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/products";

export function FeaturedSolutions() {
  const featured = products.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a227] font-medium tracking-widest uppercase text-sm mb-4">
            Featured Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0f172a] mb-6">
            Technology-Driven Solutions
          </h2>
          <p className="text-lg text-[#1e293b]/80 max-w-2xl mx-auto">
            Our integrated ecosystem delivers impact across technology, finance,
            and agriculture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/products#${product.id}`}
                className="block group p-8 rounded-2xl border border-[#f5f0e8] hover:border-[#c9a227]/30 hover:shadow-xl transition-all duration-300 h-full"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium bg-[#c9a227]/10 text-[#c9a227] rounded-full mb-4">
                  {product.category}
                </span>
                <h3 className="text-xl font-display font-semibold text-[#0f172a] mb-2 group-hover:text-[#c9a227] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#1e293b]/80 text-sm mb-4">
                  {product.tagline}
                </p>
                <p className="text-[#1e293b]/70 text-sm leading-relaxed">
                  {product.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button href="/products" variant="outline">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
