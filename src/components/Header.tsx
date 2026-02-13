"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useCartStore } from "@/lib/store";
import Cart from "./Cart";

const navLinks = [
  { href: "/about", label: "Company" },
  { href: "/shop", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/where-to-buy", label: "Where to Buy" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isOpen, toggleCart, totalItems } = useCartStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Medico"
                width={80}
                height={64}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#0077B6] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: search, cart, Product Inquiry */}
            <div className="flex items-center gap-3">
              {/* Search bar - desktop */}
              <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 gap-2 w-52 focus-within:border-[#0077B6] focus-within:ring-1 focus-within:ring-[#0077B6]/20 transition-all">
                <Search size={18} className="text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="search products..."
                  className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
                />
              </div>

              {/* Cart button */}
              <button
                onClick={toggleCart}
                className="relative p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Open cart"
              >
                <ShoppingCart size={20} />
                {totalItems() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-[#0077B6] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium"
                  >
                    {totalItems()}
                  </motion.span>
                )}
              </button>

              {/* Product Inquiry CTA */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center bg-[#0077B6] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#005f8f] transition-colors whitespace-nowrap"
              >
                Product Inquiry
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t shadow-lg"
            >
              <nav className="flex flex-col px-4 py-4 gap-1">
                {/* Mobile search */}
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 gap-2 mb-3 md:hidden">
                  <Search size={18} className="text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="search products..."
                    className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
                  />
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-gray-700 hover:text-[#0077B6] font-medium py-2.5 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-center bg-[#0077B6] text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-[#005f8f] transition-colors md:hidden"
                >
                  Product Inquiry
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Cart drawer */}
      <AnimatePresence>
        {isOpen && <Cart />}
      </AnimatePresence>
    </>
  );
}
