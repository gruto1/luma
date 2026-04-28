import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/common/Container'
import Link from 'next/link'
import Image from 'next/image'
import { categoryMap } from '@/data/categories';
type CategoryProps = {
    products: any[];
};


const Category = ({ products }: CategoryProps) => {
    const categories = [
        ...new Set(products.map((p) => p.category))
    ].filter((c): c is keyof typeof categoryMap => c in categoryMap);
    
    return (
        <section className='py-10 pt-20'>
            <Container>
                <div>
                    <SectionHeading eyebrow="Browse" title="Shop by category" />
                    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

                        {categories.map((c) => {
                            const data = categoryMap[c];

                            return (
                                <Link
                                    key={c}
                                    href={`/shop?category=${c}`}
                                    className="group relative aspect-3/4 overflow-hidden rounded-3xl bg-muted shadow-soft transition-shadow hover:shadow-card"
                                >
                                    <Image
                                        src={data.image}
                                        alt={data.title}
                                        loading="lazy"
                                        width={800}
                                        height={1024}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                        <h3 className="text-lg font-semibold">{data.title}</h3>
                                    </div>
                                </Link>
                            );
                        })}

                    </div>
                </div>
            </Container>

        </section>

    )
}

export default Category

