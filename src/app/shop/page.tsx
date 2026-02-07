"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { products } from "@/lib/data";
import type { ProductCategory } from "@/lib/types";

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as
    | ProductCategory
    | null;

  const [selected, setSelected] = useState<ProductCategory | "all">(
    categoryParam || "all"
  );
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered = useMemo(
    () =>
      selected === "all"
        ? products
        : products.filter((p) => p.category === selected),
    [selected]
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
          <p className="mt-2 text-gray-600">
            Browse our range of quality healthcare equipment from Yuwell.
          </p>
        </motion.div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block w-60 flex-shrink-0"
          >
            <div className="sticky top-28 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <CategoryFilter selected={selected} onChange={setSelected} />
            </div>
          </motion.aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter toggle */}
            <div className="lg:hidden mb-4 flex items-center gap-3">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>
              {selected !== "all" && (
                <button
                  onClick={() => setSelected("all")}
                  className="flex items-center gap-1 px-3 py-2 bg-[#0077B6]/10 text-[#0077B6] rounded-xl text-sm font-medium"
                >
                  {selected}
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Mobile filter drawer */}
            {mobileFilterOpen && (
              <>
                <div
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  onClick={() => setMobileFilterOpen(false)}
                />
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  className="fixed left-0 top-0 bottom-0 w-72 bg-white z-50 p-6 shadow-2xl lg:hidden"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button
                      onClick={() => setMobileFilterOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                      aria-label="Close filters"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <CategoryFilter
                    selected={selected}
                    onChange={(cat) => {
                      setSelected(cat);
                      setMobileFilterOpen(false);
                    }}
                  />
                </motion.div>
              </>
            )}

            {/* Results count */}
            <p className="text-sm text-gray-500 mb-4">
              Showing {filtered.length} product
              {filtered.length !== 1 ? "s" : ""}
            </p>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <p className="text-lg">No products found in this category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 pt-28 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-32" />
              <div className="h-4 bg-gray-200 rounded w-64" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl overflow-hidden"
                  >
                    <div className="aspect-square bg-gray-200" />
                    <div className="p-4 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-6 bg-gray-200 rounded w-1/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
