"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, CalendarCheck, AlertCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#0a1628] to-[#0077B6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-[#4fc3f7] text-sm font-semibold tracking-wider uppercase">
              Contact
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-blue-100 text-lg">
              Schedule a consultation at our office or request on-site support
              for your healthcare equipment needs.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info cards */}
          <div className="space-y-6 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0077B6]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#0077B6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Office</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    27 New Industrial Road
                    <br />
                    #03-03, Singapore 536212
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0077B6]/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[#0077B6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Operating Hours
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Monday – Friday: 9am – 5pm
                  </p>
                  <p className="text-sm text-gray-400">
                    Closed on weekends &amp; public holidays
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0077B6]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#0077B6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Contact us for enquiries
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0077B6]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#0077B6]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    info@medico.com.sg
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-amber-50 rounded-2xl p-6 border border-amber-200"
            >
              <div className="flex items-start gap-4">
                <AlertCircle
                  size={20}
                  className="text-amber-600 flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-semibold text-amber-800">
                    By Appointment Only
                  </h3>
                  <p className="mt-1 text-sm text-amber-700">
                    Please schedule an appointment before visiting. No walk-ins
                    are accepted.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <CalendarCheck size={24} className="text-[#0077B6]" />
              <h2 className="text-2xl font-bold text-gray-900">
                Book an Appointment
              </h2>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition-all text-sm"
                    placeholder="+65 XXXX XXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition-all text-sm bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="purchase">Product Purchase</option>
                    <option value="rental">Equipment Rental</option>
                    <option value="consultation">Consultation</option>
                    <option value="training">Product Training</option>
                    <option value="maintenance">Maintenance & Repair</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none transition-all text-sm resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0077B6] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#005f8f] transition-colors"
              >
                Request Appointment
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
        >
          <iframe
            title="Medico Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7498!2d103.8600!3d1.3200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z27+New+Industrial+Road+Singapore!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  );
}
