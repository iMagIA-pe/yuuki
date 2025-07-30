import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'

import { HeroItem } from "@/components/hero/HeroItem"
import { DotButton, useDotButton } from '@/components/hero/CarouselDots'
import { Image } from '@nextui-org/react'
import { useEffect } from 'react'
import DecoPez from "@/assets/vectors/deco_pez.svg"

export const Gallery = ({ item }) => {
    const gallery = item.gallery


    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
    }, [Autoplay({
        delay: 6000,
        stopOnFocusIn: false,
        stopOnInteraction: false
    }), ClassNames()])

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    if (gallery.length <= 1) {
        return (
            <section className='relative'>
                <div className='gallery_viewport relative pb-10 flex justify-center'>
                    <ImageItem image={gallery[0]} />
                </div>
            </section>
        )
    }

    return (
        <section className='relative'>
            <div className='embla gallery_viewport relative pb-10'>
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container ">
                        {
                            !!gallery.length && gallery.map((image) => <ImageItem key={image.src} image={image} />)
                        }
                    </div>

                    <div className="embla__controls mt-16 pointer-events-auto left-0 mx-auto lg:left-auto">
                        <div className="embla__dots flex justify-between gap-3 relative items-center max-w-fit mx-auto">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={'embla__dot w-8 h-2.5 rounded-md z-10'.concat(
                                        index === selectedIndex ? ' embla__dot--selected bg-amarillo border-2 border-black' : ''
                                    )}
                                />
                            ))}
                            <span
                                className='h-0.5 w-full bg-[#E9E9E9] rounded-md absolute block left-0 right-0'
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ImageItem = ({ image }) => {
    return (
        <div className='flex-[0_0_90%] md:flex-[0_0_70%] gallery_item'>
            <Image
                radius='0'
                classNames={{
                    wrapper: "gallery_item-image",
                    img: "border-4 border-black"
                }}
                src={image.src}
                alt="Imagen de galeria"
            />
        </div>
    );
}