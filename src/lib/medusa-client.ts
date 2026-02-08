/**
 * Medusa API Client
 */

const MEDUSA_BACKEND_URL =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";

const PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "";

// Singapore region ID
const REGION_ID = "reg_01KGXDKDP65J0YRPJ0RF882384";

interface CalculatedPrice {
  calculated_amount: number;
  original_amount: number;
  currency_code: string;
}

interface MedusaVariant {
  id: string;
  title: string;
  calculated_price?: CalculatedPrice;
  prices?: {
    amount: number;
    currency_code: string;
  }[];
}

interface MedusaProduct {
  id: string;
  title: string;
  handle: string;
  description: string | null;
  thumbnail: string | null;
  images: { url: string }[];
  categories: { id: string; name: string; handle: string }[];
  variants: MedusaVariant[];
  status: string;
  created_at: string;
}

interface MedusaCategory {
  id: string;
  name: string;
  handle: string;
  description: string | null;
}

interface ProductsResponse {
  products: MedusaProduct[];
  count: number;
  offset: number;
  limit: number;
}

interface CategoriesResponse {
  product_categories: MedusaCategory[];
  count: number;
}

async function medusaFetch<T>(endpoint: string): Promise<T> {
  const url = `${MEDUSA_BACKEND_URL}${endpoint}`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (PUBLISHABLE_KEY) {
    headers["x-publishable-api-key"] = PUBLISHABLE_KEY;
  }

  const response = await fetch(url, {
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Medusa API error: ${response.status}`);
  }

  return response.json();
}

export async function getProducts(limit = 100): Promise<MedusaProduct[]> {
  try {
    const data = await medusaFetch<ProductsResponse>(
      `/store/products?limit=${limit}&region_id=${REGION_ID}`
    );
    return data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export async function getProductByHandle(
  handle: string
): Promise<MedusaProduct | null> {
  try {
    const data = await medusaFetch<ProductsResponse>(
      `/store/products?handle=${handle}&region_id=${REGION_ID}`
    );
    return data.products[0] || null;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}

export async function getCategories(): Promise<MedusaCategory[]> {
  try {
    const data = await medusaFetch<CategoriesResponse>(
      `/store/product-categories?limit=50`
    );
    return data.product_categories;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}

export { MEDUSA_BACKEND_URL, PUBLISHABLE_KEY, REGION_ID };
export type { MedusaProduct, MedusaCategory, MedusaVariant, CalculatedPrice };
