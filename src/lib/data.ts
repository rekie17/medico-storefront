import type { Product, CategoryInfo } from "./types";

export const categories: CategoryInfo[] = [
  {
    slug: "cpap-bipap",
    name: "CPAP / BiPAP",
    description: "Continuous and Bilevel Positive Airway Pressure machines",
  },
  {
    slug: "oxygen-concentrators",
    name: "Oxygen Concentrators",
    description: "Medical-grade oxygen concentrators for home use",
  },
  {
    slug: "nebulizers",
    name: "Nebulizers",
    description: "Air compressing and portable mesh nebulizers",
  },
  {
    slug: "blood-pressure-monitors",
    name: "Blood Pressure Monitors",
    description: "Arm and wrist blood pressure monitors",
  },
  {
    slug: "thermometers",
    name: "Thermometers",
    description: "Infrared ear and forehead thermometers",
  },
  {
    slug: "consumables",
    name: "Consumables & Accessories",
    description: "Filter papers, arm cuffs, and consumable packages",
  },
];

const IMG = {
  cpap: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800",
  medical: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
  nebulizer:
    "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800",
  bp: "https://images.unsplash.com/photo-1559757175-7cb057fba93c?w=800",
  thermo:
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
  consumable:
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800",
  oxygen:
    "https://images.unsplash.com/photo-1530497610245-b489b3d55c6c?w=800",
};

export const products: Product[] = [
  // --- CPAP / BiPAP ---
  {
    id: "prod_cpap_yh550",
    title: "Yuwell YH-550 Portable Auto CPAP Machine with Humidifier",
    handle: "yuwell-yh550-auto-cpap",
    description:
      "The Yuwell YH-550 is a portable auto CPAP/CPAP machine equipped with a built-in humidifier. Designed for effective sleep apnea therapy, it features automatic pressure adjustment, quiet operation, and a compact form factor perfect for travel and home use.",
    category: "cpap-bipap",
    thumbnail: IMG.cpap,
    images: [IMG.cpap, IMG.medical],
    tags: ["cpap", "sleep-apnea", "yuwell", "humidifier"],
    variants: [
      {
        id: "var_yh550_default",
        title: "Default",
        prices: [{ amount: 1199.0, currency_code: "SGD" }],
      },
    ],
  },
  {
    id: "prod_bipap_yh730",
    title: "Yuwell YH-730 Portable BiPAP Machine with Humidifier",
    handle: "yuwell-yh730-bipap",
    description:
      "The Yuwell YH-730 BiPAP machine offers bilevel positive airway pressure therapy with an integrated humidifier. Ideal for patients requiring different inhalation and exhalation pressures, it provides comfortable and effective respiratory support.",
    category: "cpap-bipap",
    thumbnail: IMG.cpap,
    images: [IMG.cpap, IMG.medical],
    tags: ["bipap", "sleep-apnea", "yuwell", "humidifier"],
    variants: [
      {
        id: "var_yh730_default",
        title: "Default",
        prices: [{ amount: 2289.0, currency_code: "SGD" }],
      },
    ],
  },

  // --- Oxygen Concentrators ---
  {
    id: "prod_oxy_rental_5l",
    title: "Yuwell Oxygen Concentrator Rental – 5L",
    handle: "yuwell-oxygen-concentrator-rental-5l",
    description:
      "Rent a Yuwell 5-litre oxygen concentrator on a flexible monthly basis. Ideal for patients who need supplemental oxygen at home. Includes delivery, setup, and ongoing maintenance support.",
    category: "oxygen-concentrators",
    thumbnail: IMG.oxygen,
    images: [IMG.oxygen, IMG.medical],
    tags: ["oxygen", "rental", "yuwell"],
    isRental: true,
    variants: [
      {
        id: "var_oxy_rental_5l",
        title: "Monthly Rental",
        prices: [{ amount: 457.8, currency_code: "SGD" }],
      },
    ],
  },
  {
    id: "prod_oxy_consumable",
    title: "Yuwell Oxygen Concentrator Consumable Package",
    handle: "yuwell-oxygen-concentrator-consumable-package",
    description:
      "Replacement consumable package for Yuwell oxygen concentrators. Contains filters and essential maintenance parts to keep your oxygen concentrator running at peak performance.",
    category: "oxygen-concentrators",
    thumbnail: IMG.consumable,
    images: [IMG.consumable],
    tags: ["oxygen", "consumable", "yuwell"],
    isConsumable: true,
    variants: [
      {
        id: "var_oxy_consumable",
        title: "Default",
        prices: [{ amount: 48.51, currency_code: "SGD" }],
      },
    ],
  },

  // --- Nebulizers ---
  {
    id: "prod_neb_407a",
    title: "Yuwell 407A Air Compressing Nebulizer",
    handle: "yuwell-407a-nebulizer",
    description:
      "The Yuwell 407A is a reliable air compressing nebulizer designed for efficient medication delivery. It produces fine, consistent mist particles for effective respiratory treatment at home or in clinical settings.",
    category: "nebulizers",
    thumbnail: IMG.nebulizer,
    images: [IMG.nebulizer, IMG.medical],
    tags: ["nebulizer", "air-compressing", "yuwell"],
    variants: [
      {
        id: "var_neb_407a",
        title: "Default",
        prices: [{ amount: 135.0, currency_code: "SGD" }],
      },
    ],
  },
  {
    id: "prod_neb_405a",
    title: "Yuwell 405A Air Compressing Nebulizer (Portable)",
    handle: "yuwell-405a-nebulizer-portable",
    description:
      "A compact, portable air compressing nebulizer from Yuwell. The 405A is lightweight and easy to carry, making it ideal for on-the-go respiratory treatments without compromising on performance.",
    category: "nebulizers",
    thumbnail: IMG.nebulizer,
    images: [IMG.nebulizer, IMG.medical],
    tags: ["nebulizer", "portable", "air-compressing", "yuwell"],
    variants: [
      {
        id: "var_neb_405a",
        title: "Default",
        prices: [{ amount: 113.5, currency_code: "SGD" }],
      },
    ],
  },
  {
    id: "prod_neb_m102",
    title: "Yuwell M102 Mesh Nebulizer (Portable)",
    handle: "yuwell-m102-mesh-nebulizer",
    description:
      "The Yuwell M102 uses advanced mesh technology for silent, efficient nebulization. Ultra-portable and battery-powered, it is perfect for adults and children who need quiet, convenient respiratory treatments.",
    category: "nebulizers",
    thumbnail: IMG.nebulizer,
    images: [IMG.nebulizer, IMG.medical],
    tags: ["nebulizer", "mesh", "portable", "yuwell"],
    variants: [
      {
        id: "var_neb_m102",
        title: "Default",
        prices: [{ amount: 115.5, currency_code: "SGD" }],
      },
    ],
  },
  {
    id: "prod_neb_405a_consumable",
    title: "Yuwell 405A Consumable Package",
    handle: "yuwell-405a-consumable-package",
    description:
      "Replacement consumable package for the Yuwell 405A nebulizer. Includes masks, tubing, and medication cups.",
    category: "nebulizers",
    thumbnail: IMG.consumable,
    images: [IMG.consumable],
    tags: ["nebulizer", "consumable", "yuwell"],
    isConsumable: true,
    variants: [
      {
        id: "var_neb_405a_consumable",
        title: "Default",
        prices: [{ amount: 30.52, currency_code: "SGD" }],
      },
    ],
  },

  // --- Blood Pressure Monitors ---
  {
    id: "prod_bp_ye650ar",
    title: "Yuwell YE650AR Blood Pressure Monitor",
    handle: "yuwell-ye650ar-bp-monitor",
    description:
      "A reliable upper-arm blood pressure monitor with large LCD display, memory storage for multiple readings, and irregular heartbeat detection. Clinically validated for accurate home monitoring.",
    category: "blood-pressure-monitors",
    thumbnail: IMG.bp,
    images: [IMG.bp, IMG.medical],
    tags: ["blood-pressure", "arm", "yuwell"],
    variants: [
      {
        id: "var_bp_ye650ar",
        title: "Default",
        prices: [{ amount: 140.0, currency_code: "SGD" }],
      },
    ],
  },
  {
    id: "prod_bp_ye670a",
    title: "Yuwell YE670A Blood Pressure Monitor",
    handle: "yuwell-ye670a-bp-monitor",
    description:
      "An advanced upper-arm blood pressure monitor featuring dual-user memory, large display, and WHO blood pressure classification indicator. Now available at a special sale price.",
    category: "blood-pressure-monitors",
    thumbnail: IMG.bp,
    images: [IMG.bp, IMG.medical],
    tags: ["blood-pressure", "arm", "yuwell", "sale"],
    variants: [
      {
        id: "var_bp_ye670a",
        title: "Default",
        prices: [
          { amount: 122.5, currency_code: "SGD", sale_amount: 98.0 },
        ],
      },
    ],
  },
  {
    id: "prod_bp_ye680b",
    title: "Yuwell YE680B Blood Pressure Monitor",
    handle: "yuwell-ye680b-bp-monitor",
    description:
      "The Yuwell YE680B offers precise blood pressure readings with an extra-large cuff for comfortable measurement. Features voice broadcast, arrhythmia detection, and large backlit display.",
    category: "blood-pressure-monitors",
    thumbnail: IMG.bp,
    images: [IMG.bp, IMG.medical],
    tags: ["blood-pressure", "arm", "yuwell", "sale"],
    variants: [
      {
        id: "var_bp_ye680b",
        title: "Default",
        prices: [
          { amount: 135.0, currency_code: "SGD", sale_amount: 94.5 },
        ],
      },
    ],
  },
  {
    id: "prod_bp_ye630cr",
    title: "Yuwell YE630CR Upper Arm BP Monitor",
    handle: "yuwell-ye630cr-bp-monitor",
    description:
      "Premium upper-arm blood pressure monitor with Bluetooth connectivity, smartphone app integration, and high-precision sensor technology for reliable readings.",
    category: "blood-pressure-monitors",
    thumbnail: IMG.bp,
    images: [IMG.bp, IMG.medical],
    tags: ["blood-pressure", "arm", "yuwell", "sale", "premium"],
    variants: [
      {
        id: "var_bp_ye630cr",
        title: "Default",
        prices: [
          { amount: 199.0, currency_code: "SGD", sale_amount: 159.2 },
        ],
      },
    ],
  },
  {
    id: "prod_bp_ye8800ar",
    title: "Yuwell YE8800AR Wrist BP Monitor",
    handle: "yuwell-ye8800ar-wrist-bp-monitor",
    description:
      "Compact wrist blood pressure monitor ideal for travel and on-the-go monitoring. Features automatic wrist positioning detection and memory storage for trend tracking.",
    category: "blood-pressure-monitors",
    thumbnail: IMG.bp,
    images: [IMG.bp, IMG.medical],
    tags: ["blood-pressure", "wrist", "yuwell", "sale"],
    variants: [
      {
        id: "var_bp_ye8800ar",
        title: "Default",
        prices: [
          { amount: 144.0, currency_code: "SGD", sale_amount: 115.2 },
        ],
      },
    ],
  },

  // --- Thermometers ---
  {
    id: "prod_thermo_yht100",
    title: "Yuwell YHT100 Infrared Ear Thermometer",
    handle: "yuwell-yht100-ear-thermometer",
    description:
      "Fast and accurate infrared ear thermometer with 1-second readings. Features fever alarm, memory recall for last 10 readings, and a hygienic probe cover system.",
    category: "thermometers",
    thumbnail: IMG.thermo,
    images: [IMG.thermo, IMG.medical],
    tags: ["thermometer", "ear", "infrared", "yuwell", "sale"],
    variants: [
      {
        id: "var_thermo_yht100",
        title: "Default",
        prices: [
          { amount: 102.0, currency_code: "SGD", sale_amount: 81.6 },
        ],
      },
    ],
  },
  {
    id: "prod_thermo_yht101",
    title: "Yuwell YHT101 Infrared Ear Thermometer",
    handle: "yuwell-yht101-ear-thermometer",
    description:
      "An affordable and reliable infrared ear thermometer for the whole family. Quick readings, compact design, and easy-to-read display make it perfect for daily health monitoring.",
    category: "thermometers",
    thumbnail: IMG.thermo,
    images: [IMG.thermo, IMG.medical],
    tags: ["thermometer", "ear", "infrared", "yuwell"],
    variants: [
      {
        id: "var_thermo_yht101",
        title: "Default",
        prices: [{ amount: 65.0, currency_code: "SGD" }],
      },
    ],
  },
  {
    id: "prod_thermo_yt3",
    title: "Yuwell YT-3 Infrared Thermometer",
    handle: "yuwell-yt3-infrared-thermometer",
    description:
      "Non-contact infrared thermometer for forehead temperature measurement. Features a large backlit display, 32 memory readings, and switchable °C/°F modes.",
    category: "thermometers",
    thumbnail: IMG.thermo,
    images: [IMG.thermo, IMG.medical],
    tags: ["thermometer", "infrared", "non-contact", "yuwell", "sale"],
    variants: [
      {
        id: "var_thermo_yt3",
        title: "Default",
        prices: [
          { amount: 79.0, currency_code: "SGD", sale_amount: 51.35 },
        ],
      },
    ],
  },
  {
    id: "prod_thermo_yhw5",
    title: "Yuwell YHW-5 Infrared Thermometer",
    handle: "yuwell-yhw5-infrared-thermometer",
    description:
      "Versatile non-contact infrared thermometer suitable for body, surface, and room temperature measurement. Silent mode for sleeping babies and colour-coded fever alerts.",
    category: "thermometers",
    thumbnail: IMG.thermo,
    images: [IMG.thermo, IMG.medical],
    tags: ["thermometer", "infrared", "non-contact", "yuwell"],
    variants: [
      {
        id: "var_thermo_yhw5",
        title: "Default",
        prices: [{ amount: 69.0, currency_code: "SGD" }],
      },
    ],
  },
  {
    id: "prod_thermo_yt1",
    title: "Yuwell YT-1 Infrared Thermometer",
    handle: "yuwell-yt1-infrared-thermometer",
    description:
      "Reliable non-contact infrared thermometer with fast 1-second readings. Features automatic power-off, low battery indicator, and dual-mode temperature display.",
    category: "thermometers",
    thumbnail: IMG.thermo,
    images: [IMG.thermo, IMG.medical],
    tags: ["thermometer", "infrared", "non-contact", "yuwell", "sale"],
    variants: [
      {
        id: "var_thermo_yt1",
        title: "Default",
        prices: [
          { amount: 75.0, currency_code: "SGD", sale_amount: 48.75 },
        ],
      },
    ],
  },

  // --- Consumables & Accessories ---
  {
    id: "prod_filter_cpap",
    title: "Yuwell Filter Paper for CPAP/BiPAP",
    handle: "yuwell-filter-paper-cpap-bipap",
    description:
      "Replacement filter papers for Yuwell CPAP and BiPAP machines. Regular filter replacement ensures clean, filtered air delivery and optimal machine performance.",
    category: "consumables",
    thumbnail: IMG.consumable,
    images: [IMG.consumable],
    tags: ["filter", "cpap", "bipap", "consumable", "yuwell"],
    isConsumable: true,
    variants: [
      {
        id: "var_filter_cpap",
        title: "Default",
        prices: [{ amount: 3.82, currency_code: "SGD" }],
      },
    ],
  },
  {
    id: "prod_arm_cuff",
    title: "Blood Pressure Arm Cuff",
    handle: "blood-pressure-arm-cuff",
    description:
      "Universal replacement arm cuff compatible with Yuwell blood pressure monitors. Made with durable, comfortable material for accurate and repeatable measurements.",
    category: "consumables",
    thumbnail: IMG.consumable,
    images: [IMG.consumable],
    tags: ["arm-cuff", "blood-pressure", "consumable", "sale"],
    isConsumable: true,
    variants: [
      {
        id: "var_arm_cuff",
        title: "Default",
        prices: [
          { amount: 27.0, currency_code: "SGD", sale_amount: 21.6 },
        ],
      },
    ],
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
