'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import ad1 from '@/public/heroBannerImage/ad1.png'
import ad2 from '@/public/heroBannerImage/ad2.png'
import ad3 from '@/public/heroBannerImage/ad3.png'
import ad4 from '@/public/heroBannerImage/ad4.png'
import Link from 'next/link'

const BannerSlider = () => {

    const slides = [
        { image: ad1, title: "Summer Sale", link:'#' },
        { image: ad2, title: "New Arrivals", link:'#' },
        { image: ad3, title: "Exclusive Deals" , link:'#'},
        { image: ad4, title: "Limited Offer" , link:'#'},
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    // const goToPrev = () => emblaApi?.goToPrev()
    // const goToNext = () => emblaApi?.goToNext()

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">

                    {
                        slides.map((slide, idx) => {
                            return <div className="embla__slide relative aspect-[16/7] md:aspect-[16/6]" key={idx}>
                                <Link href={slide.link} >
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover"
                                    />
                                </Link>
                            </div>
                        })
                    }



                </div>
            </div>

            {/* <button className="embla__prev" onClick={goToPrev}>
                Scroll to prev
            </button>
            <button className="embla__next" onClick={goToNext}>
                Scroll to next
            </button> */}
        </div>
    )
}

export default BannerSlider



