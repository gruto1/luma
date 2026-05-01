import { getProductBySlug } from "@/lib/api";

// type ProductPageProps = {
//     params: {
//         slug: string;
//     };
// };

// const ProductPage = async ({ params }: ProductPageProps) => {

//     const { slug } = await params;
//     const product = await getProductBySlug(slug);

//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     return (
//         <section className="py-10">
//             <h1>{product.title}</h1>

//             <img
//                 src={product.image}
//                 alt={product.title}
//                 width={400}
//             />

//             <p>₹{product.price}</p>

//             <p>{product.description}</p>
//         </section>
//     );
// };

// export default ProductPage;


import Link from 'next/link'
import React from 'react'
import Stars from "@/components/Stars";
import Container from "@/components/common/Container";
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
                                <button className="text-xs text-muted-foreground underline">Size guide</button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {/* {sizes.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSize(s)}
                                    className={`h-10 min-w-12 rounded-full border px-4 text-sm transition-colors ${size === s
                                        ? "border-foreground bg-foreground text-background"
                                        : "border-border bg-card hover:border-foreground"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))} */}
                            </div>
                        </div>

                        <div className="mt-7 flex items-center gap-4">
                            {/* <div className="flex h-12 items-center rounded-full border border-border bg-card">
                            <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-12 w-12 place-items-center text-muted-foreground hover:text-foreground" aria-label="Decrease">
                                <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{qty}</span>
                            <button onClick={() => setQty((q) => q + 1)} className="grid h-12 w-12 place-items-center text-muted-foreground hover:text-foreground" aria-label="Increase">
                                <Plus size={14} />
                            </button>
                        </div> */}
                            {/* <Button size="lg" className="h-12 flex-1 rounded-full text-sm">Add to cart</Button>
                        <Button size="icon" variant="outline" className="h-12 w-12 rounded-full" aria-label="Wishlist">
                            <Heart size={16} />
                        </Button> */}
                        </div>

                        {/* <Link href="/checkout" className="mt-3 block">
                        <Button size="lg" variant="secondary" className="h-12 w-full rounded-full text-sm">
                            Buy now <ArrowRight size={16} className="ml-1" />
                        </Button>
                    </Link> */}

                        {/* <div className="mt-8 grid gap-3 rounded-2xl bg-surface p-5 text-sm sm:grid-cols-3">
                        {[
                            { icon: Truck, label: "Free shipping" },
                            { icon: RotateCcw, label: "30-day returns" },
                            { icon: ShieldCheck, label: "Secure checkout" },
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 text-muted-foreground">
                                <Icon size={16} className="text-foreground" /> {label}
                            </div>
                        ))}
                    </div> */}
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
