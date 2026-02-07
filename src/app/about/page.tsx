"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Services from "@/components/Services";
import TrustBadges from "@/components/TrustBadges";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#0a1628] to-[#0077B6] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600"
            alt="About Medico"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-[#4fc3f7] text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Your Trusted Healthcare Partner
            </h1>
            <p className="mt-4 text-blue-100 text-lg leading-relaxed">
              Medico Pte Ltd is the authorised Yuwell main distributor in
              Singapore, serving over 30 healthcare institutions islandwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800"
                  alt="Healthcare setting"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#0077B6] text-sm font-semibold tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Comprehensive Healthcare Solutions
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Medico, we offer a wide selection of home and hospital
                  healthcare products to cater to diverse needs. Our range
                  includes respiratory treatment devices like CPAP, BiPAP,
                  ventilator, and oxygen concentrator machines, as well as
                  portable nebulizers and fitted masks. Additionally, we provide
                  essential homecare products.
                </p>
                <p>
                  Our services go beyond product supply. We offer comprehensive
                  support, including consultation, installation, and setup of
                  equipment. Our knowledgeable team provides user training to
                  ensure our customers are comfortable and confident in using the
                  devices. We also offer maintenance and repair services to keep
                  the equipment in optimal condition.
                </p>
                <p>
                  You can schedule a consultation at our office by appointment,
                  or we can provide on-site support as needed.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-[#0077B6] font-semibold hover:gap-3 transition-all"
              >
                Schedule a Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />
      <TrustBadges />

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Need Healthcare Equipment?
            </h2>
            <p className="mt-3 text-gray-600">
              Contact us to schedule a consultation or browse our product range.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0077B6] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#005f8f] transition-colors"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
