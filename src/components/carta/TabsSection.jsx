import { useState, useRef, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Image, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import useEmblaCarousel from 'embla-carousel-react'
import { FaAngleLeft, FaAngleRight, FaExclamation } from "react-icons/fa6";
import { useWindowWidth } from "@/hooks/useWindowWidth"
import { motion } from 'framer-motion';

import { carta } from "@/data/carta";

const TabTitle = ({ tab, isSelected, setSelectedTab }) => {
    return (
        <div
            className={`cursor-pointer px-4 whitespace-nowrap transition-all text-white relative flex items-center "}`}
            onClick={() => setSelectedTab(tab.key)}
        >
            <p className={`z-10 ${isSelected ? 'text-shadow text-shadow-light' : ''}`}>{tab.title}</p>
            <span className={`bg-tab_deco bg-contain size-16 block absolute left-0 right-0 mx-auto rounded-full transition-all ${isSelected ? "opacity-100" : "opacity-0"} `} />
        </div>
    )
}

export const TabsSection = ({ sectionRef }) => {
    const [selectedTab, setSelectedTab] = useState(carta[0].key);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true
    });
    const [currentPage, setCurrentPage] = useState(1);
    const windowWidth = useWindowWidth();
    let itemsPerPage;

    if (windowWidth >= 1024) {
        itemsPerPage = 8;
    } else if (windowWidth >= 640) {
        itemsPerPage = 6;
    } else {
        itemsPerPage = 5;
    }

    const totalItems = carta.find(item => item.key === selectedTab)?.items.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext();
    };

    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setTimeout(() => {
                sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setTimeout(() => {
                sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedTab]);

    const handleSelectedTab = (selectedTab) => {
        setCurrentPage(1);
        setSelectedTab(selectedTab)
    }

    return (
        <section className='flex flex-col gap-7 max-w-2xl lg:max-w-6xl px-5 md:px-4 xl:px-0 mx-auto w-full md:pb-20'>
            <div className='embla py-5 flex items-center'>
                <Button
                    className={`rounded-none font-montserrat capitalize font-bold text-lg bg-amarillo text-black w-fit border-2 border-black`}
                    endContent={<FaAngleLeft size={16} />}
                    isIconOnly
                    onClick={scrollPrev}
                >
                </Button>
                <div className='overflow-x-hidden py-5'>
                    <div className="embla__viewport relative" ref={emblaRef}>
                        <div className="embla__container select-none flex justify-between">
                            {carta.map((item) => (
                                <TabTitle
                                    key={item.key}
                                    tab={item}
                                    isSelected={selectedTab === item.key}
                                    setSelectedTab={handleSelectedTab}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Button
                    className={`rounded-none font-montserrat capitalize font-bold text-lg bg-amarillo text-black w-fit border-2 border-black`}
                    endContent={<FaAngleRight size={16} />}
                    isIconOnly
                    onClick={scrollNext}
                >
                </Button>
            </div>
            <div className='carta-grid'>
                <ListItems tab={carta.find(item => item.key === selectedTab)} currentPage={currentPage} itemsPerPage={itemsPerPage} />
                {
                    carta.find(item => item.key === selectedTab).items.length > 8 &&
                    <div className='flex justify-center gap-4 mt-[100px] sticky bottom-4 z-10'>
                        <Button
                            onClick={handlePrevPage}
                            isDisabled={currentPage === 1}
                            className={`rounded-none shadow-md font-montserrat capitalize font-bold text-lg bg-naranja text-black w-fit border-2 border-black ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            startContent={<FaAngleLeft size={16} />}
                        >
                            Anterior
                        </Button>
                        <Button
                            onClick={handleNextPage}
                            isDisabled={currentPage === totalPages}
                            className={`rounded-none shadow-md font-montserrat capitalize font-bold text-lg bg-naranja text-black w-fit border-2 border-black ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                            endContent={<FaAngleRight size={16} />}
                        >
                            Siguiente
                        </Button>
                    </div>
                }
            </div>
        </section>
    );
};

const ListItems = ({ tab, currentPage, itemsPerPage }) => {
    const windowWidth = useWindowWidth();
    let numCols;

    if (windowWidth >= 1024) {
        numCols = 4;
    } else if (windowWidth >= 640) {
        numCols = 3;
    } else {
        numCols = 1;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = tab.items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 carta-grid__item'>
            {
                paginatedItems.map((item, key) => {
                    let additionalClasses = '';
                    const idx = key % numCols;

                    if (numCols === 3 && idx === 1) {
                        additionalClasses = 'sm:translate-y-10';
                    }

                    if (numCols === 4 && (idx === 1 || idx === 3)) {
                        additionalClasses += ' lg:translate-y-10';
                    }

                    return <CardItem key={`${tab.key}-${item.id}`} index={key} item={item} additionalClasses={additionalClasses} />
                })
            }
        </div>
    )
}

const CardItem = ({ item, additionalClasses, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            exit={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: .2, delay: .08 * index, stiffness: 100 }}
        >
            <Card
                className={`flex-row sm:flex-col py-6 px-4 lg:px-5 items-start rounded-none border-4 border-black sm:items-center gap-3 ${item.focus ? 'bg-black' : 'bg-amarillo'} ${additionalClasses}`}
            >
                <CardHeader className='p-0 items-center w-auto'>
                    {item.popover && <ItemPopover popover={item.popover} />}
                    <Image
                        alt={item.title}
                        className="w-full object-cover h-20 sm:h-[224px] size-56"
                        src={item.image}
                        fetchPriority='high'
                    />
                    {
                        item.label &&
                        <span
                            className='font-bold text-xs absolute z-10 uppercase px-2 py-1 left-5 top-5'
                            style={{ ...item.label.style }}>
                            {item.label.text}
                        </span>
                    }
                </CardHeader>
                <CardBody className={`flex flex-col relative gap-3 p-0 ${item.focus ? "text-white" : "text-black"}`}>
                    <div className='flex flex-col justify-between gap-1 w-full'>
                        <p className='font-semibold text-xl'>
                            {item.title}
                        </p>
                        <span className='whitespace-nowrap font-bold'>S/. {item.price || '-'}</span>
                    </div>
                    {
                        item.description &&
                        <p className='text-xs'>{item.description}</p>
                    }
                    {
                        item.list && (
                            <ul className="text-xs">
                                {
                                    item.list.map((item, key) => (
                                        <li cv key={key}><span className='inline-block size-1.5 -translate-y-[1px] rounded-full bg-naranja'></span> {item}</li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </CardBody>
            </Card>
        </motion.div>
    )
}

const ItemPopover = ({ popover }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Popover
            placement="bottom"
            showArrow={true}
            isOpen={isOpen}
        >
            <PopoverTrigger
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.2 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        repeatDelay: .3,
                        duration: .5
                    }}
                    className='h-fit translate-y-1 translate-x-1 !bg-transparent inline absolute top-3 left-3 sm:left-auto sm:right-3 z-10'
                >
                    <Button
                        isIconOnly variant='light' size='sm' className=''
                        aria-label='Abrir información'
                    >
                        <FaExclamation className='text-white bg-black rounded-full p-1 rotate-180 text-2xl mx-auto' />
                    </Button>
                </motion.div>
            </PopoverTrigger>
            <PopoverContent className='bg-naranja'>
                <div className="px-1 py-2 max-w-40 text-black">
                    <h5 className="text-xs font-bold">{popover.title}</h5>
                    <p className="text-[11px] font-medium text-white">{popover.description}</p>
                </div>
            </PopoverContent>
        </Popover >
    )
}

export default TabsSection;
