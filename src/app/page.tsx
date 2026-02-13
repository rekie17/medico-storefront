import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductCarousel from "@/components/ProductCarousel";
import type { CarouselProduct } from "@/components/ProductCarousel";
import CategoriesSection from "@/components/CategoriesSection";
import type { CategoryItem } from "@/components/CategoriesSection";
import { getProductImage } from "@/lib/product-images";

const API = "https://medico-backend-production.up.railway.app";
const REGION_ID = "reg_01JKA0ZFGWFM0G4ATCJAZY3YK2";

function decodeUrl(url: string): string {
  try {
    return decodeURIComponent(url);
  } catch {
    return url;
  }
}

async function fetchProducts(): Promise<CarouselProduct[]> {
  try {
    const res = await fetch(
      `${API}/store/products?limit=10&fields=*variants.calculated_price&region_id=${REGION_ID}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.products || [])
      .map((p: Record<string, unknown>) => {
        const images = p.images as { url: string }[] | undefined;
        const variants = p.variants as {
          id: string;
          calculated_price?: { calculated_amount: number; currency_code: string };
        }[] | undefined;
        const thumbnail = p.thumbnail
          ? decodeUrl(p.thumbnail as string)
          : images?.[0]?.url
            ? decodeUrl(images[0].url)
            : getProductImage(p.handle as string) || "";
        const price = variants?.[0]?.calculated_price?.calculated_amount
          ? variants[0].calculated_price.calculated_amount / 100
          : 0;
        return {
          id: p.id as string,
          title: p.title as string,
          handle: p.handle as string,
          thumbnail,
          price,
          variantId: variants?.[0]?.id || "",
        };
      })
      .filter((p: CarouselProduct) => p.thumbnail && p.price > 0);
  } catch {
    return [];
  }
}

async function fetchCategories(): Promise<CategoryItem[]> {
  try {
    const res = await fetch(`${API}/store/product-categories`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.product_categories || []).map(
      (c: Record<string, unknown>) => ({
        id: c.id as string,
        name: c.name as string,
        handle: c.handle as string,
      })
    );
  } catch {
    return [];
  }
}

export default async function Home() {
  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);

  return (
    <>
      <Hero />
      <AboutSection />
      <ProductCarousel products={products} />
      <CategoriesSection categories={categories} />
    </>
  );
}
