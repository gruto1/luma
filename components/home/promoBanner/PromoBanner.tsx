import Link from "next/link"
import promo from "@/public/promoImage.jpg"
import { ArrowRight } from "lucide-react"
import Container from "@/components/common/Container"
import Button from "@/components/ui/Button"

const PromoBanner = () => {
    return (
        <section className="py-10">

            <Container>

                <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
                    <div className="grid items-center md:grid-cols-2">
                        <div className="p-10 md:p-14 lg:p-20">

                            <h2 className="mb-4 text-4xl leading-tight md:text-5xl uppercase">
                                {/* Flat 50% off<br />on selected styles. */}
                                season finale
                            </h2>
                            <span className="inline-flex w-fit rounded-full text-lg uppercase items-center gap-2.5 tracking-widest">

                                {/* Limited time */}
                                <span className="w-10 h-px bg-primary-foreground"></span>
                                Flat 50% off
                            </span>

                            <p className="mt-8 max-w-md text-sm leading-relaxed text-primary-foreground/70">
                                Our most coveted pieces from the previous season, now available for a limited time at final sale prices.
                            </p>
                            <Link href="/shop" className="mt-8 inline-block">
                                <Button size="lg" variant="secondary" className="h-12 rounded-full px-7 text-sm">
                                    Shop the Sale <ArrowRight size={16} className="ml-1" />
                                </Button>
                            </Link>

                        </div>
                        <div className="relative h-64 md:h-full md:min-h-[360px]">
                            <img
                                src={promo.src}
                                alt="Sale collection"
                                loading="lazy"
                                width={1600}
                                height={896}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PromoBanner
