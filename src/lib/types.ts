export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  category: ProductCategory;
  thumbnail: string;
  images: string[];
  variants: ProductVariant[];
  tags: string[];
  isRental?: boolean;
  isConsumable?: boolean;
}

export interface ProductVariant {
  id: string;
  title: string;
  prices: MoneyAmount[];
  sku?: string;
  inventory_quantity?: number;
}

export interface MoneyAmount {
  amount: number;
  currency_code: string;
  sale_amount?: number;
}

export type ProductCategory =
  | "cpap-bipap"
  | "oxygen-concentrators"
  | "nebulizers"
  | "blood-pressure-monitors"
  | "thermometers"
  | "consumables";

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface CategoryInfo {
  slug: ProductCategory;
  name: string;
  description: string;
}
