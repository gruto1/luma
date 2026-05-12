import { getProductBySlug } from "@/lib/api";
import Link from 'next/link'
import Stars from "@/components/ui/Stars";
import Container from "@/components/common/Container";
import { Truck, RotateCcw, ShieldCheck, ArrowRight } from "lucide-react";
import SizeBtn from "@/components/productPage/SizeBtn";
import Button from "@/components/ui/Button";
import QtyBtn from "@/components/productPage/QtyBtn";

type ProductPageProps = {
    params: {
        slug: string;
    };
};

const ProductPage = async ({ params }: ProductPageProps) => {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="py-8 md:py-12">

            <Container>
                <div className="grid gap-10 lg:grid-cols-2 items-start">
                    {/* Gallery */}
                    <div>
                        <div className="overflow-hidden rounded-3xl bg-surface">
                            <img
                                src={product.image}
                                alt={product.title + ' image'}
                                width={800}
                                height={1024}
                                className="aspect-[4/5] w-full object-cover"
                            />
                        </div>
                        <div className="mt-3 grid grid-cols-4 gap-3">
                            {/* {[product.image, ...related.slice(0, 3).map((r) => r.image)].map((img, i) => (
                            <button
                                key={i}
                                className="aspect-square overflow-hidden rounded-xl bg-surface ring-1 ring-border transition hover:ring-foreground"
                            >
                                <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
                            </button>
                                ))} */}

                            {
                                product.images.map(({ img, idx }: { img: string; idx: number }) => (
                                    <button
                                        key={idx}
                                        className="aspect-square overflow-hidden rounded-xl bg-surface border border-px border-border transition hover:border-foreground cursor-pointer"
                                    >
                                        <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
                                    </button>
                                ))
                            }

                        </div>
                    </div>

                    {/* Info */}
                    <div className="lg:pl-6 lg:sticky top-30">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">{product.category}</p>
                        <h1 className="mt-2 text-3xl tracking-tight md:text-4xl">{product.name}</h1>

                        <div className="mt-3 flex items-center gap-3">
                            <Stars rating={product.rating} size={16} />
                            <span className="text-sm text-muted-foreground">
                                {product.rating} ({product.reviews}) reviews
                            </span>
                        </div>

                        <div className="mt-5 flex items-baseline gap-3">
                            <span className="text-3xl font-semibold">${product.price}</span>
                            {product.oldPrice && (
                                <>
                                    <span className="text-base text-muted-foreground line-through">${product.oldPrice}</span>
                                    <span className="rounded-full bg-accent/30 px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                                        Save ${product.oldPrice - product.price}
                                    </span>
                                </>
                            )}
                        </div>

                        <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">{product.description}</p>

                        <div className="mt-8">
                            <div className="mb-2 flex items-center justify-between text-sm">
                                <span className="font-medium">Size</span>
                                <button className="text-xs text-muted-foreground underline cursor-pointer">Size guide</button>
                            </div>
                            <SizeBtn />
                        </div>

                        <div className="mt-7 flex items-center gap-4">
                            <QtyBtn />
                        </div>



                        <Link href="/checkout" className="mt-3 block">
                            <Button size="lg" variant="secondary" className="h-12 w-full rounded-full text-sm bg-accent hover:bg-accent/70 shadow-none">
                                Buy now <ArrowRight size={16} className="ml-1" />
                            </Button>
                        </Link>

                        <div className="mt-8 grid gap-3 rounded-2xl bg-surface p-5 text-sm sm:grid-cols-3">
                            {[
                                { icon: Truck, label: "Free shipping" },
                                { icon: RotateCcw, label: "30-day returns" },
                                { icon: ShieldCheck, label: "Secure checkout" },
                            ].map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2 text-foreground">
                                    <Icon size={16} className="text-foreground" /> {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* <section className="mt-24">
                    <h2 className="text-2xl tracking-tight md:text-3xl">You may also like</h2>
                    <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
                        {related.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section> */}
            </Container>
        </div>

    )
}

export default ProductPage
