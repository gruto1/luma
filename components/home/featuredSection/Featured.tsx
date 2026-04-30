import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import ProductCard from '@/components/ui/ProductCard'
import { getFeaturedProducts } from "@/lib/api";
const Featured = async () => {

  const featuredProducts = await getFeaturedProducts();

  return (
    <section className='py-10'>
      <Container>
        <div>
          <SectionHeading eyebrow="Curated" title="Featured products" link="/categories" linkLabel="Shop all" />
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {
              featuredProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))
            }

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Featured
