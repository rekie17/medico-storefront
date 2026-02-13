"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCartStore } from "@/lib/store";
import type { Product, ProductVariant } from "@/lib/types";

export interface CarouselProduct {
  id: string;
  title: string;
  handle: string;
  thumbnail: string;
  price: number;
  variantId: string;
}

interface ProductCarouselProps {
  products: CarouselProduct[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCartStore();

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  const handleAddToCart = (item: CarouselProduct) => {
    const variant: ProductVariant = {
      id: item.variantId,
      title: "Default",
      prices: [{ amount: item.price, currency_code: "SGD" }],
    };
    const product: Product = {
      id: item.id,
      title: item.title,
      handle: item.handle,
      description: "",
      category: "",
      thumbnail: item.thumbnail,
      images: [item.thumbnail],
      variants: [variant],
      tags: [],
    };
    addItem(product, variant);
  };

  if (products.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#0077B6] text-sm font-semibold tracking-wide mb-2"
            >
              Special Offers
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900"
            >
              New Items in Our Range
            </motion.h2>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden sm:flex gap-2"
          >
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex-shrink-0 w-[220px] sm:w-[250px] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow snap-start"
            >
              <Link href={`/product/${product.handle}`}>
                <div className="relative aspect-square bg-gray-50">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    unoptimized
                    className="object-contain p-4"
                    sizes="250px"
                  />
                </div>
              </Link>

              <div className="p-4">
                <Link href={`/product/${product.handle}`}>
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-[#0077B6] transition-colors min-h-[2.5rem]">
                    {product.title}
                  </h3>
                </Link>
                <p className="text-base font-bold text-gray-900 mt-2">
                  $
                  {product.price.toLocaleString("en-SG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-3 bg-[#0077B6] text-white py-2.5 rounded-full text-sm font-medium hover:bg-[#005f8f] transition-colors active:scale-[0.98]"
                >
                  Add To Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
