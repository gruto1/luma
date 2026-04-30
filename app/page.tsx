import Category from "@/components/home/category/Category";
import Banner from "@/components/home/heroBanner/Banner";
import Image from "next/image";
import Featured from "@/components/home/featuredSection/Featured";
import Trending from "@/components/home/trendingSection/Trending";
import { getProducts } from "@/lib/api";
import ChooseUs from "@/components/home/whyChooseUs/ChooseUs";
import NewsLetterSection from "@/components/home/newsletter/NewsLetterSection";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Banner />
      <Category products={products} />
      <Featured/>
      <Trending/>
      <ChooseUs/>
      <NewsLetterSection/>
    </>

  );
}
