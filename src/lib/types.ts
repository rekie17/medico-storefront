export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  category: string;
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

// Product category can be any string from the API
export type ProductCategory = string;

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface CategoryInfo {
  slug: string;
  name: string;
  description: string;
}
