import { featuredProductIds } from "@/data/featuredProducts";
import { trendingProductsIds } from "@/data/trendingProducts";

export const getProducts = async (category?: string) => {
  const url = category
    ? `http://localhost:3000/api/products?category=${category}`
    : `http://localhost:3000/api/products`;

  const res = await fetch(url,{
    cache: "no-store",
  });
  return res.json();
};



export const getFeaturedProducts = async () => {
  const products = await getProducts();

  return products.filter((product: any) =>
    featuredProductIds.includes(product.id)
  );
};

export const getTrendingProducts = async () => {
  const products = await getProducts();

  return products.filter((product: any) =>
    trendingProductsIds.includes(product.id)
  );
};


export const getProductBySlug = async (slug: string) => {
  const products = await getProducts();
  return products.find(
    (product: any) => product.slug === slug
  );
};