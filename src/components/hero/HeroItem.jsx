import Link from "next/link";
import { motion } from "framer-motion";

import { TextWithTapeBg } from "@/shared/TextWithTapeBg"

import { Button, Image } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { useWindowScreen } from "@/hooks/useWindowScreen";

const HeroContent = ({ banner }) => {

    return (
        <div className={`max-w-6xl w-full flex gap-3 justify-between ${banner.classNames.container_all}`}>
            <div className={`
            flex  md:grid grid-cols-[1fr_2fr] w-full
            lg:gap-7 
            justify-between items-center ${banner.mobileDirection === 'reverse' ? 'flex-col-reverse' : 'flex-col'}
            ${banner.classNames.wrapper}
            `}>
                <motion.div
                    initial={{ opacity: 0, y: -200, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={`flex flex-col gap-9 justify-self-center z-10 ${banner.classNames.container_text}`}
                    viewport={{ once: true }}
                    transition={{ delay: .2 }}
                >
                    <div className="flex flex-col">
                        <h3
                            className={`font-fredoka font-extrabold uppercase text-white leading-tight text-[42px] md:text-[56px] ${banner.classNames.title}`}
                        >{banner.title}</h3>
                    </div>
                    <Link href={banner.buttonUrl}>
                        <Button
                            className="rounded-none font-montserrat font-bold text-lg bg-amarillo text-black w-fit border-3 border-black"
                            size="lg"
                        >
                            {banner.button}
                        </Button>
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 200, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={`w-full scale-110 lg:scale-100 ${banner.classNames.picture}`}
                    viewport={{ once: true }}
                    transition={{ delay: .2 }}
                >
                    {
                        banner.decorations && !!banner.decorations.length && banner.decorations.map((item, key) => (
                            <motion.div
                                initial={{ opacity: 0, y: -200, }}
                                whileInView={{ opacity: 1, y: 0 }}
                                key={key}
                                className={`absolute ${item.class}`}
                                viewport={{ once: true }}
                                transition={{ delay: .4 * key }}
                            >
                                <Image
                                    key={key}
                                    removeWrapper
                                    src={item.image.src}
                                    alt="Decoración"
                                />
                            </motion.div>
                        ))
                    }
                    <picture className={`${banner.classNames.picture_img}`}>
                        {
                            banner.images.mobile &&
                            <source media="(max-width:768px)" srcSet={banner.images.mobile.src} />
                        }
                        {
                            banner.images.tablet &&
                            <source media="(max-width:1024px)" srcSet={banner.images.tablet.src} />
                        }
                        <img src={banner.images.desktop.src} alt="Imagen principal banner" className={`${banner.classNames.image}`} />
                    </picture>
                </motion.div>
            </div>
        </div>
    )
}

export const HeroItem = ({ banner, parentBannerColor }) => {
    const slideRef = useRef(null);

    const setElements = useWindowScreen((visibleSlide) => {
        if (visibleSlide === slideRef.current) {
            parentBannerColor(banner.color);
        }
    }, { threshold: 0.5 });

    useEffect(() => {
        setElements([slideRef.current]);
    }, [setElements]);

    return (
        <div
            ref={ slideRef }
            className={`
                w-screen h-screen flex justify-center items-center overflow-hidden
                py-28 px-5 sm:px-8 lg:px-10 relative embla__slide select-none lg:bg-center ${banner.classNames.bg}
            `}
            style={{
                background: `url(${banner.background.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundBlendMode: 'multiply'
            }}
        >
            <HeroContent banner={banner} />
        </div>
    )
}

const HeroContentOld = ({ banner }) => {

    return (
        <div className={`max-w-5xl w-full flex gap-3 justify-between ${banner.classNames.container_all}`}>
            <motion.div
                initial={{ opacity: 0, y: -200, }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`flex flex-col items-center text-center gap-5 ${position}`}
                viewport={{ once: true }}
                transition={{ delay: .2 }}
            >
                <TextWithTapeBg text={banner.uptitle} className="pb-2 -mx-3" showArrow />
                <h3
                    className="font-fredoka font-extrabold text-[25px] lg:text-[35px] uppercase text-shadow text-shadow-bold"
                    dangerouslySetInnerHTML={{
                        __html: banner.title
                    }}
                />

                <Link href={banner.buttonUrl}>
                    <Button
                        className="rounded-none font-montserrat font-bold text-lg bg-amarillo text-black w-fit border-2 border-black"
                        size="lg"
                    >
                        {banner.button}
                    </Button>
                </Link>
            </motion.div>
        </div>
    )
}

export const HeroItemOld = ({ banner }) => {

    return (
        <div
            className="
                w-screen h-screen flex justify-center items-end
                pb-28 px-8 lg:px-10 relative embla__slide select-none
            "
            style={{
                background: `url(${banner.image.src}) rgba(0,0,0,.2)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'multiply'
            }}
        >
            <HeroContent banner={banner} />
        </div>
    )
}
