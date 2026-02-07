"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/data";
import { useCartStore } from "@/lib/store";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCartStore();
  const price = product.variants[0].prices[0];
  const hasSale = !!price.sale_amount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <Link href={`/product/${product.handle}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Sale badge */}
          {hasSale && (
            <div className="absolute top-3 left-3">
              <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                SALE
              </span>
            </div>
          )}

          {/* Rental badge */}
          {product.isRental && (
            <div className="absolute top-3 left-3">
              <span className="bg-[#0077B6] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                RENTAL
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.handle}`}>
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-[#0077B6] transition-colors min-h-[2.5rem]">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            {hasSale ? (
              <>
                <span className="text-lg font-bold text-[#0077B6]">
                  {formatPrice(price.sale_amount!)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(price.amount)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(price.amount)}
                {product.isRental && (
                  <span className="text-xs font-normal text-gray-500">
                    /mo
                  </span>
                )}
              </span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addItem(product, product.variants[0])}
            className="p-2 bg-[#0077B6] text-white rounded-full hover:bg-[#005f8f] transition-colors"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCart size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
