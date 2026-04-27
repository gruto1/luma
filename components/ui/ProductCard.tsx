import { ShoppingBag, Stars } from "lucide-react";
import Link from "next/link";


const ProductCard = () => {
    return (
        <article className="group">
            <Link
                href="/product/$id"
                params={{ id: product.id }}
                className="block overflow-hidden rounded-2xl bg-surface shadow-soft transition-shadow hover:shadow-card"
            >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        width={800}
                        height={1024}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {product.badge && (
                        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                            {product.badge}
                        </span>
                    )}
                </div>
            </Link>
            <div className="px-1 pt-3">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{product.category}</p>
                <Link href="/product/$id" params={{ id: product.id }}>
                    <h3 className="mt-1 line-clamp-1 text-[15px] font-medium text-foreground transition-colors hover:text-accent-foreground">
                        {product.name}
                    </h3>
                </Link>
                <div className="mt-1.5 flex items-center gap-2">
                    <Stars rating={product.rating} />
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-base font-semibold text-foreground">${product.price}</span>
                        {product.oldPrice && (
                            <span className="text-xs text-muted-foreground line-through">${product.oldPrice}</span>
                        )}
                    </div>
                    <Button
                        size="icon"
                        variant="secondary"
                        className="h-9 w-9 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                        aria-label={`Add ${product.name} to cart`}
                    >
                        <ShoppingBag size={16} />
                    </Button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard
