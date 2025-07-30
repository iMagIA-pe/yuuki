import { Image } from "@nextui-org/react"
import { TabsSection } from "./TabsSection"
import { useRef } from "react";

const TABS = [
    "Aperitivos y rolls",
    "Sopas",
    "Platos Fríos",
    "Frituras",
    "A la plancha",
    "Salteados",
    "Sobre Arroz",
    "Guisos",
    "Bebidas",
]

export const Carta = () => {
    const sectionRef = useRef(null);

    return (
        <div className="pb-20" ref={ sectionRef }>
            <div className="max-w-screen-desktop pt-20 pb-10 md:py-20 mx-auto w-full flex flex-col gap-8 relative">
                <h3
                    className="font-fredoka font-extrabold text-[35px] uppercase text-center text-shadow text-shadow-bold"
                >
                    NUESTRA CARTA
                </h3>
                <TabsSection sectionRef={ sectionRef } />
            </div>
        </div>
    )
}
