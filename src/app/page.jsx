'use client'

import { useState } from "react";
import { Image, NextUIProvider } from "@nextui-org/react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Carta } from "@/components/carta/Carta";
import { Historia } from "@/components/historia/Historia";
import { Locales } from "@/components/locales/Locales";
import { Franquicia } from "@/components/franquicia/Franquicia";
import { Form } from "@/components/form/Form";
import { motion } from "framer-motion";
import WhatsAppFab from "@/components/WhatsAppFab";
import DecoOsoNube from "@/assets/vectors/deco_oso_nube.png"
import DecoOsoVisitanos from "@/assets/vectors/deco_visitanos.svg"
import DecoNube from "@/assets/vectors/deco_nube.svg"
import DecoDab from "@/assets/vectors/deco_dab.svg"


export default function Home() {
    const [bannerColor, setBannerColor] = useState('light');

    return (
        <NextUIProvider>
            <Header bannerColor={ bannerColor } />
            <main className="bg-lineas w-screen">
                <div id="inicio">
                    <Hero parentBannerColor={ setBannerColor } />
                </div>

                <div className="relative" id="carta">
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        className="z-20 absolute w-full h-full top-0 left-0 right-0 bottom-0 pointer-events-none"
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
                    >
                        {/* <Image
                            removeWrapper
                            className="absolute -right-2 -top-10 sm:-right-11 lg:-right-6 lg:-top-8 z-10 w-32 sm:w-44 h-auto"
                            alt="Decoración pez"
                            src={DecoOsoNube.src}
                        /> */}
                    </motion.div>
                    <div className="diagonal-1 bg-rayos bg-cover bg-center">
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
                        >
                            <Carta />
                        </motion.div>
                    </div>
                </div>
                <div className="relative" id="historia">
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        className="z-20 absolute w-full h-full top-0 left-0 right-0 bottom-0 pointer-events-none"
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
                    >

                        <Image
                            removeWrapper
                            className="absolute 
                        -left-10 -top-48 z-10 w-36 h-auto
                        md:-top-56 md:w-52
                        lg:-top-[300px] "
                            alt="Decoración nube"
                            src={DecoNube.src}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
                    >

                        <Historia />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        className="z-20 absolute w-full h-full top-0 left-0 right-0 bottom-0 pointer-events-none"
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
                    >

                        <Image
                            removeWrapper
                            className="absolute 
                        right-0 -top-32 z-10 w-20 h-auto
                        md:right-6
                        md:-top-40 md:w-28
                        lg:-top-44 lg:w-40"
                            alt="Decoración nube"
                            src={DecoDab.src}
                        />
                    </motion.div>
                </div>
                <div className="relative max-w-screen overflow-hidden pt-10 md:pt-20" id="locales">
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        className="z-20 absolute w-full h-full top-0 left-0 right-0 bottom-0 pointer-events-none"
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
                    >

                        <Image
                            removeWrapper
                            className="absolute 
                        -right-10 top-0 z-10 w-36 h-auto -scale-x-100
                        md:-top-0 md:w-52
                        lg:top-0 lg:w-64"
                            alt="Decoración nube"
                            src={DecoNube.src}
                        />
                    </motion.div>
                    <div className="bg-espiral bg-cover diagonal-2 bg-top z-10 pb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
                        >

                            <Locales />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        className="z-20 absolute w-full h-full top-0 left-0 right-0 bottom-0 pointer-events-none"
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
                    >

                        <Image
                            removeWrapper
                            className="absolute  rounded-none
                        -left-1 top-4 z-10 w-32 h-auto
                        md:top-4 md:w-36
                        lg:top-10 lg:w-52"
                            alt="Decoración nube"
                            src={DecoOsoVisitanos.src}
                        />
                    </motion.div>
                </div>
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        className="z-20 absolute w-full h-full top-0 left-0 right-0 bottom-0 pointer-events-none"
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
                    >

                        <Image
                            removeWrapper
                            className="absolute 
                        -left-10 -bottom-48 z-10 w-36 h-auto hidden lg:block
                        md:-bottom-8 md:w-52"
                            alt="Decoración nube"
                            src={DecoNube.src}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
                        className="-mt-20"
                    >

                        <Franquicia />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-black"
                    transition={{ type: "spring", duration: .5, delay: 0, stiffness: 100 }}
                >

                    <Form />
                </motion.div>
                <div className="bg-black">
                    <Footer />
                </div>
            </main>
            <WhatsAppFab />
        </NextUIProvider>
    );
}