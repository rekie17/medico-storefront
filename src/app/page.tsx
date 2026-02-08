"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wind,
  Activity,
  Pill,
  Heart,
  Thermometer,
  Settings,
  Package,
  Repeat,
  Loader2,
} from "lucide-react";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import ProductCard from "@/components/ProductCard";
import {
  getProductsFromAPI,
  getCategoriesFromAPI,
  categories as defaultCategories,
} from "@/lib/data";
import type { Product, CategoryInfo } from "@/lib/types";

const categoryIcons: Record<string, React.ReactNode> = {
  "cpap-bipap-machines": <Wind className="w-6 h-6 text-[#0077B6]" />,
  "oxygen-concentrators": <Activity className="w-6 h-6 text-[#0077B6]" />,
  nebulizers: <Pill className="w-6 h-6 text-[#0077B6]" />,
  "blood-pressure-monitors": <Heart className="w-6 h-6 text-[#0077B6]" />,
  thermometers: <Thermometer className="w-6 h-6 text-[#0077B6]" />,
  "pulse-oximeters": <Activity className="w-6 h-6 text-[#0077B6]" />,
  "masks-accessories": <Settings className="w-6 h-6 text-[#0077B6]" />,
  "consumables-parts": <Package className="w-6 h-6 text-[#0077B6]" />,
  rentals: <Repeat className="w-6 h-6 text-[#0077B6]" />,
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<CategoryInfo[]>(defaultCategories);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProductsFromAPI(),
          getCategoriesFromAPI(),
        ]);
        setProducts(productsData);
        if (categoriesData.length > 0) {
          setCategories(categoriesData);
        }
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Take first 6 products as featured
  const featured = products.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <span className="text-[#0077B6] text-sm font-semibold tracking-wider uppercase">
                Our Products
              </span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Featured Products
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:flex items-center gap-1 text-[#0077B6] font-medium hover:gap-2 transition-all"
            >
              View All <ArrowRight size={18} />
            </Link>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-[#0077B6]" />
              <span className="ml-3 text-gray-600">Loading products...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-[#0077B6] font-medium"
            >
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#0077B6] text-sm font-semibold tracking-wider uppercase">
              Browse By Category
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Product Categories
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.slice(0, 10).map((cat, index) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/shop?category=${cat.slug}`}
                  className="block bg-white rounded-2xl p-5 text-center hover:shadow-lg hover:border-[#0077B6]/20 border border-gray-100 transition-all group"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#0077B6]/10 group-hover:bg-[#0077B6]/20 flex items-center justify-center transition-colors mb-3">
                    {categoryIcons[cat.slug] || (
                      <Package className="w-6 h-6 text-[#0077B6]" />
                    )}
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-[#0077B6] transition-colors">
                    {cat.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <TrustBadges />

      {/* CTA */}
      <section className="py-20 bg-[#0077B6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto text-lg">
              Schedule a consultation at our office or request on-site support.
              Our team is here to help you find the right healthcare equipment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#0077B6] px-8 py-3.5 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
