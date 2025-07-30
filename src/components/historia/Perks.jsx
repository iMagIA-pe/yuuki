import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import { TextWithTapeBg } from "@/shared/TextWithTapeBg"
import { DotButton, useDotButton } from '../hero/CarouselDots'
import { motion } from 'framer-motion';


import { perks } from '@/data/historia';
import { Image } from '@nextui-org/react';

import Autoplay from 'embla-carousel-autoplay';

export const Perks = () => {
    const [scrollable, setScrollable] = useState(1);
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true }, [Autoplay({
        active: true,
        delay: 5000
    })]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const updateScrollable = () => {
        if (!emblaApi) return;

        const slidesToScroll = emblaApi.internalEngine().scrollSnaps.length;
        setScrollable(slidesToScroll);
        // emblaApi.reInit({ align: "start", slidesToScroll: (perks.length % slidesToScroll) + 1 });
    };

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('resize', updateScrollable);
            updateScrollable();
        }
    }, [emblaApi]);

    return (
        <div className="mt-20 px-5 md:px-0 gap-20 max-w-2xl lg:max-w-5xl w-full mx-auto">
            <section className={`embla select-none ${scrollable > 1 ? '' : 'pointer-events-none'}`}>
                <div className="embla__viewport relative" ref={emblaRef}>
                    <div className="embla__container lg:justify-around">
                        {
                            !!perks.length && perks.map((item, key) => <PerkItem key={item.key} index={key} item={item} />)
                        }
                    </div>
                    <div className={`embla__controls pointer-events-auto mx-auto mt-5 md:mt-10 ${scrollable > 1 ? '' : 'hidden'}`}>
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
            </section>
        </div>
    )
}

const PerkItem = ({ item, index }) => {
    return (
        <div className='flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]'>
            <motion.div
                initial={{ opacity: 0, scale: .8, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "just", duration: .2, delay: .2, stiffness: 100 }}
            >
                <div className='max-w-72 flex flex-col items-center gap-5 mx-auto w-full'>
                    <Image
                        src={item.image.src}
                        alt={`Icono ${item.title}`}
                        className='size-20'
                    />
                    <TextWithTapeBg text={item.title} className="text-white border-none bg-tape_2 bg-center w-full max-w-full text-center text-[18px]" hideBackgroundColor />
                    <p className='text-center max-w-64 md:max-w-max mx-auto font-semibold px-2'>{item.description}</p>
                </div>
            </motion.div>
        </div>
    )
}