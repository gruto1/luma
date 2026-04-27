import Category from "@/components/home/category/Category";
import Banner from "@/components/home/heroBanner/Banner";
import Image from "next/image";
import { getProducts } from "@/lib/dummyApi"
import Featured from "@/components/home/featuredSection/Featured";

export default async function Home() {
  const products = await getProducts();
  // console.log(products);
  return (
    <>
      <Banner />
      <Category products={products} />
      <Featured/>
    </>

  );
}
