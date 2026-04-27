import SectionHeading from '@/components/common/SectionHeading'
import Container from '@/components/common/Container'
import Link from 'next/link'
import Image from 'next/image'
import { categoryMap } from "@/constants/categories";

type Props = {
    products: any[]
}

const Category = ({ products }: Props) => {
    const categories = [...new Set(products.map(p => p.category))]

    return (
        <section className='py-10 pt-20'>
            <Container>
                <div>
                    <SectionHeading eyebrow="Browse" title="Shop by category" link="/categories" linkLabel="View all" />

                    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

                        {categories.map((cat) => {
                            const data = categoryMap[cat];

                            return (
                                <Link
                                    key={cat}
                                    href={`/shop?category=${cat}`}
                                    className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted shadow-soft transition-shadow hover:shadow-card"
                                >
                                    <Image
                                        src={data?.image || "/images/default.jpg"}
                                        alt={data?.label || cat}
                                        width={800}
                                        height={1024}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                                        <h3 className="text-lg font-semibold capitalize">
                                            {data?.label || cat}
                                        </h3>
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

