import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import ProductCard from '@/components/ui/ProductCard';
import { getTrendingProducts } from "@/lib/api";

const Trending = async () => {
  const trendingProducts = await getTrendingProducts();
  return (
    <section className='py-10'>
      <Container>
        <div>
          <SectionHeading eyebrow="Top rated" title="Trending now" />

          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {trendingProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>

    </section>
  )
}

export default Trending
