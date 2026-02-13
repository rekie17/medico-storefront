"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const BLOB_BASE =
  "https://9sjzhbcgs1nuxebj.public.blob.vercel-storage.com/products";

const showcaseProducts = [
  {
    src: `${BLOB_BASE}/3126dc_ee2c81fc413e42dd89380c1aec564e3b~mv2.png`,
    alt: "Yuwell Blood Pressure Monitor",
  },
  {
    src: `${BLOB_BASE}/3126dc_dceea5b047b54eda9422eac140cc1784~mv2.png`,
    alt: "Yuwell Pulse Oximeter",
  },
  {
    src: `${BLOB_BASE}/3126dc_d2cc2022cc9843fda6ea49ab23b861be~mv2.png`,
    alt: "Yuwell Ear Thermometer",
  },
  {
    src: `${BLOB_BASE}/3126dc_4d4e821947684488bccce4685f258e65~mv2.png`,
    alt: "Yuwell BP Monitor YE680B",
  },
];

const retailPartners = [
  "Unity",
  "manaShop",
  "manaStore",
  "Shopee",
  "Lazada",
];

const brandLogos = [
  "Yuwell",
  "Philips",
  "ResMed",
  "Fisher & Paykel",
  "Omron",
  "Microlife",
  "DeVilbiss",
  "Apex Medical",
  "BMC Medical",
];

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#0077B6] text-sm font-semibold tracking-wide mb-4"
              >
                Leading Medical Equipment Provider
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.15] tracking-tight"
              >
                Professional Healthcare Solutions You Can Trust
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-gray-500 text-base leading-relaxed max-w-md"
              >
                Delivering cutting-edge medical equipment and comprehensive
                servicing solutions to healthcare providers across the region.
                Quality care starts with quality equipment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/shop"
                  className="inline-flex items-center bg-[#0077B6] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#005f8f] transition-colors text-sm"
                >
                  Explore Product
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-2 border-[#0077B6] text-[#0077B6] px-7 py-3.5 rounded-full font-medium hover:bg-[#0077B6]/5 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* Right Side - Product Showcase Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#0a3d5c] via-[#0c4a6e] to-[#0e2a3f] rounded-3xl p-6 sm:p-8 overflow-hidden min-h-[380px] lg:min-h-[420px]">
                {/* Card background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077B6] rounded-full blur-3xl translate-x-20 -translate-y-20" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4fc3f7] rounded-full blur-3xl -translate-x-10 translate-y-10" />
                </div>

                {/* Medico logo watermark - top right */}
                <div className="absolute top-5 right-6 z-10">
                  <Image
                    src="/logo.png"
                    alt="Medico"
                    width={56}
                    height={45}
                    className="h-11 w-auto brightness-0 invert opacity-80"
                  />
                </div>

                {/* Product images collage */}
                <div className="relative z-10 flex items-center justify-center h-full pt-4 pb-14">
                  <div className="relative w-full max-w-sm mx-auto h-64 sm:h-72">
                    {/* Main product - center */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 z-20">
                      <Image
                        src={showcaseProducts[0].src}
                        alt={showcaseProducts[0].alt}
                        fill
                        unoptimized
                        className="object-contain drop-shadow-2xl"
                        sizes="200px"
                      />
                    </div>

                    {/* Top right product */}
                    <div className="absolute right-0 top-0 w-28 h-28 sm:w-32 sm:h-32 z-10">
                      <Image
                        src={showcaseProducts[1].src}
                        alt={showcaseProducts[1].alt}
                        fill
                        unoptimized
                        className="object-contain drop-shadow-xl"
                        sizes="130px"
                      />
                    </div>

                    {/* Bottom left product */}
                    <div className="absolute left-0 bottom-0 w-28 h-28 sm:w-32 sm:h-32 z-10">
                      <Image
                        src={showcaseProducts[2].src}
                        alt={showcaseProducts[2].alt}
                        fill
                        unoptimized
                        className="object-contain drop-shadow-xl"
                        sizes="130px"
                      />
                    </div>

                    {/* Back right product */}
                    <div className="absolute right-2 bottom-4 w-24 h-24 sm:w-28 sm:h-28 z-0 opacity-80">
                      <Image
                        src={showcaseProducts[3].src}
                        alt={showcaseProducts[3].alt}
                        fill
                        unoptimized
                        className="object-contain drop-shadow-lg"
                        sizes="112px"
                      />
                    </div>
                  </div>
                </div>

                {/* Retail partner logos - bottom of card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a2a3f]/90 to-transparent pt-8 pb-4 px-6 sm:px-8 z-20">
                  <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
                    {retailPartners.map((partner) => (
                      <span
                        key={partner}
                        className="text-white/70 text-xs sm:text-sm font-medium tracking-wide"
                      >
                        {partner === "Shopee" && (
                          <span className="inline-flex items-center gap-1">
                            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                              <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                            {partner}
                          </span>
                        )}
                        {partner === "Lazada" && (
                          <span className="inline-flex items-center gap-1">
                            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.5 7.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7z" />
                            </svg>
                            {partner}
                          </span>
                        )}
                        {partner !== "Shopee" && partner !== "Lazada" && partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Brand Logos Bar */}
      <section className="py-10 bg-white border-t border-gray-100 overflow-hidden">
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling track */}
          <motion.div
            className="flex items-center gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...brandLogos, ...brandLogos].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-gray-300 text-xl sm:text-2xl font-bold tracking-wide select-none flex-shrink-0"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
