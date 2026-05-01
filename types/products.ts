export type Product = {
  id: number;
  title: string;
  slug: string;
  description: string;

  price: number;
  oldPrice?: number;

  category: string;
  brand: string;

  image: string;
  images: string[];

  stock: number;

  rating: number;
  reviews: number;

  featured: boolean;
  trending: boolean;
  newArrival: boolean;

  sizes: string[];
  colors: string[];

  tags: string[];

  badge?: string;

  createdAt: string;
};