"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  Moon,
  Wind,
  Droplets,
  Thermometer,
  Heart,
  HeartPulse,
  Package,
  RefreshCw,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
  handle: string;
}

interface CategoriesSectionProps {
  categories: CategoryItem[];
}

function getCategoryIcon(name: string): LucideIcon {
  const lower = name.toLowerCase();
  if (lower.includes("blood pressure")) return Activity;
  if (lower.includes("sleep") || lower.includes("cpap") || lower.includes("bipap"))
    return Moon;
  if (lower.includes("breath") || lower.includes("mask")) return Wind;
  if (lower.includes("nebulizer")) return Droplets;
  if (lower.includes("temperature") || lower.includes("thermometer"))
    return Thermometer;
  if (lower.includes("oxygen")) return Heart;
  if (lower.includes("pulse") || lower.includes("oximeter")) return HeartPulse;
  if (lower.includes("consumable") || lower.includes("parts")) return Package;
  if (lower.includes("rental")) return RefreshCw;
  return Stethoscope;
}

export default function CategoriesSection({
  categories,
}: CategoriesSectionProps) {
  if (categories.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#0077B6] text-sm font-semibold tracking-wide mb-2"
          >
            Product Categories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900"
          >
            Explore Our Product Range
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((category, i) => {
            const Icon = getCategoryIcon(category.name);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href={`/shop?category=${category.handle}`}
                  className="group flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl hover:bg-gray-50 transition-colors"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-[#0077B6]/10 transition-colors">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-500 group-hover:text-[#0077B6] transition-colors" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#0077B6] rounded-full opacity-60" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-[#0077B6] transition-colors">
                    {category.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
