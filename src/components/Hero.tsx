"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, HeartPulse } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600"
          alt="Healthcare equipment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-[#0a1628]/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#4fc3f7] text-sm font-semibold tracking-wider uppercase mb-4">
              Yuwell Main Distributor | Singapore
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Quality Healthcare
            <br />
            <span className="text-[#4fc3f7]">Equipment & Support</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg"
          >
            From CPAP machines to blood pressure monitors, we provide
            comprehensive healthcare solutions with professional consultation,
            installation, training, and maintenance support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#0077B6] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#005f8f] transition-colors"
            >
              Shop Now
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Book Consultation
            </Link>
          </motion.div>

          {/* Quick trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 flex flex-wrap gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Shield size={20} className="text-[#4fc3f7]" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">Trusted</p>
                <p className="text-gray-400 text-xs">30+ institutions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Award size={20} className="text-[#4fc3f7]" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">Authorised</p>
                <p className="text-gray-400 text-xs">Yuwell distributor</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <HeartPulse size={20} className="text-[#4fc3f7]" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">Full Support</p>
                <p className="text-gray-400 text-xs">
                  Setup &amp; maintenance
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
