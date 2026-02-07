"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import type { ProductCategory } from "@/lib/types";

interface CategoryFilterProps {
  selected: ProductCategory | "all";
  onChange: (category: ProductCategory | "all") => void;
}

export default function CategoryFilter({
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-3">
        Categories
      </h3>
      <button
        onClick={() => onChange("all")}
        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
          selected === "all"
            ? "bg-[#0077B6] text-white shadow-md"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        All Products
      </button>
      {categories.map((cat) => (
        <motion.button
          key={cat.slug}
          whileHover={{ x: 4 }}
          onClick={() => onChange(cat.slug)}
          className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
            selected === cat.slug
              ? "bg-[#0077B6] text-white shadow-md"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {cat.name}
        </motion.button>
      ))}
    </div>
  );
}
