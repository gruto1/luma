import { featuredProductIds } from "@/data/featuredProducts";

export const getProducts = async (category?: string) => {
  const url = category
    ? `http://localhost:3000/api/products?category=${category}`
    : `http://localhost:3000/api/products`;

  const res = await fetch(url);
  return res.json();
};



export const getFeaturedProducts = async () => {
  const products = await getProducts();

  return products.filter((product: any) =>
    featuredProductIds.includes(product.id)
  );
};