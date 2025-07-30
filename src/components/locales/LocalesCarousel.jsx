import { locales } from "@/data/locales";
import useEmblaCarousel from 'embla-carousel-react'
import { Button, Card, CardBody, CardHeader, Image, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { FaExclamation } from "react-icons/fa6";
import { useState } from "react";
import { Gallery } from "./Gallery";
import { MapaSection } from "./MapaSection";
import { motion } from "framer-motion";

const TabTitle = ({ tab, isSelected, setSelectedTab }) => {
    return (
        <div
            className={`cursor-pointer px-4 whitespace-nowrap transition-all text-white relative flex items-center "}`}
            onClick={() => setSelectedTab(tab.key)}
        >
            <p className={`z-10 md:text-xl ${isSelected ? 'text-shadow text-shadow-light' : ''}`}>{tab.name}</p>
            <span className={`bg-tab_deco bg-contain size-16 block absolute left-0 right-0 mx-auto rounded-full transition-all ${isSelected ? "opacity-100" : "opacity-0"} `} />
        </div>
    )
}

export const LocalesCarousel = () => {
    const [selectedTab, setSelectedTab] = useState(locales[0].key);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true
    })

    return (
        <div className='flex flex-col gap-7 max-w-full lg:max-w-screen-desktop px-0 xl:px-0 mx-auto w-full'>
            <div className='embla py-5'>
                <div className="embla__viewport relative" ref={emblaRef}>
                    <div className="embla__container select-none mx-auto flex justify-center gap-2 md:gap-4">
                        {
                            !!locales.length && locales.map((item) => <TabTitle key={item.key} tab={item} isSelected={selectedTab == item.key} setSelectedTab={setSelectedTab} />)
                        }
                    </div>
                </div>
            </div>
            <div className=''>
                <ContentItem item={
                    locales.find(item => item.key == selectedTab)
                } />
            </div>
        </div>
    )
}

const ContentItem = ({ item }) => {
    return (
        <div className='' key={item.key}>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                className="flex flex-col gap-7 max-w-full lg:max-w-screen-desktop px-0 xl:px-0 mx-auto w-full"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
            >

                <Gallery item={item} />
                {
                    !item.proximamente &&
                    <MapaSection item={item} />
                }
            </motion.div>
        </div>
    )
}