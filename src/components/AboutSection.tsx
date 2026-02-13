"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "25+ years experience",
    description:
      "Our system makes it easy for healthcare professionals the share and collaborate on patient care.",
  },
  {
    icon: Zap,
    title: "Fast process, best result",
    description:
      "Our system makes it easy for healthcare professionals the share and collaborate on patient care.",
  },
  {
    icon: Users,
    title: "Professional medical team",
    description:
      "Our system makes it easy for healthcare professionals the share and collaborate on patient care.",
  },
];

const stats = [
  { value: "500+", label: "Healthcare Partners" },
  { value: "10,000+", label: "Medical Professionals" },
  { value: "20+", label: "Countries Served" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#0077B6] text-sm font-semibold tracking-wide mb-3"
            >
              About Medico
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
            >
              15+ Years of Healthcare Excellence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-gray-500 text-base leading-relaxed max-w-lg"
            >
              Founded in 2009, Medico has grown from a small medical equipment
              supplier to a trusted regional leader in healthcare solutions. Our
              mission has always been clear: provide healthcare professionals
              with the tools they need to deliver exceptional patient care.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex gap-8 sm:gap-12"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-[#0077B6]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* About Us Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center border-2 border-[#0077B6] text-[#0077B6] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#0077B6] hover:text-white transition-colors"
              >
                About Us
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
