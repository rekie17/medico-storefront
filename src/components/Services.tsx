"use client";

import { motion } from "framer-motion";
import { CalendarClock, GraduationCap, Settings, Stethoscope } from "lucide-react";

const services = [
  {
    icon: CalendarClock,
    title: "Machine Monthly Rental",
    description:
      "Access high-quality machinery with flexible, affordable monthly plans. Perfect for short-term needs or trying before purchasing.",
  },
  {
    icon: GraduationCap,
    title: "Product & Service Training",
    description:
      "Comprehensive training programs to ensure you are comfortable and confident in using your medical devices.",
  },
  {
    icon: Stethoscope,
    title: "Consultation & Installation",
    description:
      "Schedule a consultation at our office by appointment, or receive on-site setup and support for your equipment.",
  },
  {
    icon: Settings,
    title: "Maintenance & Repair",
    description:
      "Keep your equipment in optimal condition with our professional maintenance and repair services.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#0077B6] text-sm font-semibold tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Beyond Product Supply
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive support from consultation to ongoing
            maintenance, ensuring you get the most from your healthcare
            equipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-[#0077B6]/20 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0077B6]/10 flex items-center justify-center flex-shrink-0">
                <service.icon size={24} className="text-[#0077B6]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
