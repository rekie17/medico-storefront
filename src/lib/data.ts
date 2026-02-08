import type { Product, CategoryInfo } from "./types";
import {
  getProducts as fetchMedusaProducts,
  getProductByHandle as fetchMedusaProductByHandle,
  getCategories as fetchMedusaCategories,
  type MedusaProduct,
  type MedusaCategory,
} from "./medusa-client";

// Static fallback categories
export const categories: CategoryInfo[] = [
  {
    slug: "cpap-bipap-machines",
    name: "CPAP/BiPAP Machines",
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
    slug: "pulse-oximeters",
    name: "Pulse Oximeters",
    description: "Finger pulse oximeters for SpO2 monitoring",
  },
  {
    slug: "masks-accessories",
    name: "Masks & Accessories",
    description: "CPAP/BiPAP masks and related accessories",
  },
  {
    slug: "consumables-parts",
    name: "Consumables & Parts",
    description: "Filter papers, arm cuffs, and consumable packages",
  },
  {
    slug: "rentals",
    name: "Rentals",
    description: "Monthly rental options for medical equipment",
  },
];

// Placeholder images for products without thumbnails
const IMG = {
  cpap: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800",
  medical: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
  nebulizer: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800",
  bp: "https://images.unsplash.com/photo-1559757175-7cb057fba93c?w=800",
  thermo: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
  consumable: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800",
  oxygen: "https://images.unsplash.com/photo-1530497610245-b489b3d55c6c?w=800",
  oximeter: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
  mask: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
};

function getPlaceholderImage(title: string): string {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("cpap") || lowerTitle.includes("bipap")) return IMG.cpap;
  if (lowerTitle.includes("oxygen")) return IMG.oxygen;
  if (lowerTitle.includes("nebulizer")) return IMG.nebulizer;
  if (lowerTitle.includes("blood pressure") || lowerTitle.includes("bp")) return IMG.bp;
  if (lowerTitle.includes("thermometer")) return IMG.thermo;
  if (lowerTitle.includes("oximeter")) return IMG.oximeter;
  if (lowerTitle.includes("mask")) return IMG.mask;
  if (lowerTitle.includes("filter") || lowerTitle.includes("cuff") || lowerTitle.includes("consumable")) return IMG.consumable;
  return IMG.medical;
}

function mapMedusaProductToProduct(medusaProduct: MedusaProduct): Product {
  const category = medusaProduct.categories?.[0];

  return {
    id: medusaProduct.id,
    title: medusaProduct.title,
    handle: medusaProduct.handle,
    description: medusaProduct.description || "",
    category: category?.handle || "uncategorized",
    thumbnail: medusaProduct.thumbnail || getPlaceholderImage(medusaProduct.title),
    images: medusaProduct.images?.map((img) => img.url) || [getPlaceholderImage(medusaProduct.title)],
    tags: [],
    variants: medusaProduct.variants?.map((v) => {
      // Use calculated_price from Medusa v2 (requires region_id in query)
      const calcPrice = v.calculated_price;
      const prices = calcPrice
        ? [{
            amount: calcPrice.calculated_amount / 100, // Convert from cents
            currency_code: calcPrice.currency_code.toUpperCase(),
            sale_amount: calcPrice.original_amount !== calcPrice.calculated_amount
              ? calcPrice.original_amount / 100
              : undefined,
          }]
        : [];
      return {
        id: v.id,
        title: v.title,
        prices,
      };
    }) || [],
    isRental: medusaProduct.title.toLowerCase().includes("rental"),
    isConsumable:
      medusaProduct.title.toLowerCase().includes("consumable") ||
      medusaProduct.title.toLowerCase().includes("filter") ||
      medusaProduct.title.toLowerCase().includes("cuff"),
  };
}

function mapMedusaCategoryToCategory(medusaCategory: MedusaCategory): CategoryInfo {
  return {
    slug: medusaCategory.handle,
    name: medusaCategory.name,
    description: medusaCategory.description || "",
  };
}

// Fetch products from Medusa API
export async function getProductsFromAPI(): Promise<Product[]> {
  const medusaProducts = await fetchMedusaProducts();
  return medusaProducts.map(mapMedusaProductToProduct);
}

// Fetch single product by handle from Medusa API
export async function getProductByHandleFromAPI(handle: string): Promise<Product | null> {
  const medusaProduct = await fetchMedusaProductByHandle(handle);
  if (!medusaProduct) return null;
  return mapMedusaProductToProduct(medusaProduct);
}

// Fetch categories from Medusa API
export async function getCategoriesFromAPI(): Promise<CategoryInfo[]> {
  const medusaCategories = await fetchMedusaCategories();
  if (medusaCategories.length === 0) return categories; // Fallback to static
  return medusaCategories.map(mapMedusaCategoryToCategory);
}

// Legacy static functions (for backward compatibility during transition)
export const products: Product[] = []; // Will be populated by API

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
