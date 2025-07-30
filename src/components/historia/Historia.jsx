import { Image } from "@nextui-org/react"
import Historia1 from "@/assets/images/historia/historia_1.webp"
import Historia2 from "@/assets/images/historia/historia_2.webp"
import Osito from "@/assets/vectors/osito_saltando.svg"
import { Perks } from "./Perks"


export const Historia = () => {
    return (
        <div className="max-w-screen-desktop mt-20 pb-10 md:pb-20 mx-auto flex flex-col gap-8 relative overflow-hidden">
            <div className="relative pb-0 md:max-w-screen-md lg:max-w-screen-desktop w-full mx-auto">
                <div className="flex flex-col lg:flex-row-reverse items-center px-5 gap-20 max-w-2xl lg:max-w-6xl w-full mx-auto">
                    <div className="lg:max-w-80 w-full flex flex-col justify-start gap-6">
                        <h3
                            className="font-fredoka font-extrabold text-[35px] uppercase text-center lg:text-left text-shadow text-shadow-bold"
                        >
                            Historia Yuuki
                        </h3>
                        <p className="flex flex-col gap-4 font-semibold text-center lg:text-left">
                            <span>YUUKI nació como el primer restaurante asiático que ofrece platos de diversos países como Japón, Corea, Tailandia, Vietnam, etc.</span>
                            <span>Inspirado en la cultura asiática, no solo ofrece delicias culinarias únicas, sino también una decoración temática cautivadora. Cada local de Yuuki tiene su propio tema, asegurando que cada visita sea una experiencia inolvidable.</span>
                        </p>
                    </div>
                    <div className="md:pl-10 xl:pl-0 relative">
                        <Image
                            radius="0"
                            src={Historia1.src}
                            alt="Historia Naruto"
                            classNames={{
                                img: "border-4 border-black",
                                wrapper: "pl-12 md:pl-20 lg:pl-32"
                            }}
                        />
                        <div className="absolute -bottom-12 left-0 max-w-48 md:max-w-72 z-10">
                            <div className="relative">
                                <Image
                                    removeWrapper
                                    className="absolute z-20 hidden sm:block
                                    -top-56 
                                    left-0 right-0 mx-auto
                                    w-40 h-auto"
                                    src={Osito.src}
                                    alt="Osito decoración"
                                />
                                <div className="
                                    bg-amarillo border-4 border-black rounded-full absolute
                                    w-20 md:w-36
                                    h-auto aspect-square
                                    lg:left-16
                                    md:-top-14 md:left-16
                                    -top-8 left-2
                                "></div>
                                <Image
                                    radius="0"
                                    src={Historia2.src}
                                    alt="Historia Naruto"
                                    classNames={{
                                        img: "border-4 border-black",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Perks />
        </div>
    )
}