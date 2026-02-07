"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Wrench } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "30+ Institutions",
    description: "Trusted by over 30 healthcare institutions across Singapore",
  },
  {
    icon: Award,
    title: "Yuwell Main Distributor",
    description: "Authorised main distributor for Yuwell products in Singapore",
  },
  {
    icon: Users,
    title: "Expert Training",
    description: "Comprehensive product training and user guidance",
  },
  {
    icon: Wrench,
    title: "Full Service Support",
    description: "Installation, setup, maintenance, and repair services",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-20 bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Why Healthcare Professionals Trust Us
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            As the authorised Yuwell main distributor in Singapore, we provide
            reliable products backed by comprehensive support and service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-[#0077B6]/10 flex items-center justify-center mb-4">
                <badge.icon size={28} className="text-[#0077B6]" />
              </div>
              <h3 className="font-semibold text-gray-900">{badge.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
