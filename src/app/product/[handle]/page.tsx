"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ArrowLeft,
  Minus,
  Plus,
  Check,
  Truck,
  Shield,
  RefreshCw,
} from "lucide-react";
import { getProductByHandle, formatPrice, products } from "@/lib/data";
import { useCartStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const { handle } = useParams<{ handle: string }>();
  const product = getProductByHandle(handle);
  const { addItem } = useCartStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-28">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Product Not Found
          </h1>
          <p className="mt-2 text-gray-500">
            The product you are looking for does not exist.
          </p>
          <Link
            href="/shop"
            className="mt-4 inline-flex items-center gap-2 text-[#0077B6] font-medium"
          >
            <ArrowLeft size={18} /> Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const price = product.variants[0].prices[0];
  const hasSale = !!price.sale_amount;
  const displayPrice = price.sale_amount ?? price.amount;

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, product.variants[0]);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#0077B6] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Shop
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
              {hasSale && (
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full">
                    SALE –{" "}
                    {Math.round(
                      ((price.amount - price.sale_amount!) / price.amount) * 100
                    )}
                    % OFF
                  </span>
                </div>
              )}
              {product.isRental && (
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0077B6] text-white text-sm font-bold px-3 py-1.5 rounded-full">
                    RENTAL
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail strip */}
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === i
                        ? "border-[#0077B6] shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {product.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-[#0077B6] bg-[#0077B6]/10 px-2.5 py-1 rounded-full capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              {hasSale ? (
                <>
                  <span className="text-3xl font-bold text-[#0077B6]">
                    {formatPrice(price.sale_amount!)}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(price.amount)}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(price.amount)}
                  {product.isRental && (
                    <span className="text-base font-normal text-gray-500">
                      {" "}
                      / month
                    </span>
                  )}
                </span>
              )}
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium transition-all ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-[#0077B6] text-white hover:bg-[#005f8f]"
                }`}
              >
                {added ? (
                  <>
                    <Check size={20} /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} /> Add to Cart
                  </>
                )}
              </motion.button>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <Truck size={20} className="text-[#0077B6]" />
                <span className="text-sm text-gray-600">
                  Delivery Available
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <Shield size={20} className="text-[#0077B6]" />
                <span className="text-sm text-gray-600">
                  Warranty Included
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <RefreshCw size={20} className="text-[#0077B6]" />
                <span className="text-sm text-gray-600">
                  Maintenance Support
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
