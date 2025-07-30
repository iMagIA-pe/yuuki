import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'


import { HeroItem } from "./HeroItem"
import { banners } from "@/data/banners"
import { DotButton, useDotButton } from './CarouselDots'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

import Nube from '@/assets/images/Cloud.png';
import { Image } from '@nextui-org/react'

export const Hero = ({ parentBannerColor }) => {

    const options = {
        active: banners.length > 1,
        loop: true
    }

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({
        delay: 8000,
        stopOnFocusIn: false,
        stopOnInteraction: false
    })])

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)


    return (
        <section className='embla relative'>
            <Image
                removeWrapper
                src={Nube.src}
                className='absolute -right-1 -bottom-1 max-w-56 md:max-w-[320] lg:max-w-[400px]'
                alt='Nube decoración'
            />
            <div className="embla__viewport relative" ref={emblaRef}>
                <div className="embla__container">
                    {
                        !!banners.length && banners.map((banner) => <HeroItem key={banner.title} banner={banner} parentBannerColor={ parentBannerColor } />)
                    }
                </div>
                <div className='max-w-5xl w-full absolute left-0 right-0 top-0 mx-auto h-screen pointer-events-none'>
                    <Link href="#carta" className='absolute left-0 right-0 mx-auto font-bold w-fit bottom-10 hidden lg:flex items-center gap-3 pointer-events-auto'>
                        <p className='text-xs'>Descubre más</p>
                        <motion.div
                            initial={{
                                y: -10, opacity: 0
                            }}
                            animate={{
                                y: 0, opacity: 1
                            }}
                            exit={{
                                y: 20, opacity: 0
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "mirror",
                                repeatDelay: .6,
                                duration: .3
                            }}
                        >
                            <FaAngleDown />
                        </motion.div>
                    </Link>
                    {
                        banners.length > 1 &&
                        <div className="embla__controls absolute right-0 bottom-10 pointer-events-auto left-0 mx-auto lg:left-auto">
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
                    }
                </div>
            </div>
        </section>
    )
}
