'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import ad1 from '@/public/heroBannerImage/ad1.png'
import ad2 from '@/public/heroBannerImage/ad2.png'
import ad3 from '@/public/heroBannerImage/ad3.png'
import ad4 from '@/public/heroBannerImage/ad4.png'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
const BannerSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on("select", onSelect)

        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi])

    const slides = [
        { image: ad1, title: "Summer Sale", link: '#' },
        { image: ad2, title: "New Arrivals", link: '#' },
        { image: ad3, title: "Exclusive Deals", link: '#' },
        { image: ad4, title: "Limited Offer", link: '#' },
    ];



    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">

                    {
                        slides.map((slide, idx) => {
                            return <div className="embla__slide relative aspect-16/7 md:aspect-16/6" key={idx}>
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

            <div className='flex items-center justify-center gap-2 mt-4'>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                     
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: index === selectedIndex ? "black" : "gray"
                        }}
                    />
                ))}
            </div>

        </div>
    )
}

export default BannerSlider



