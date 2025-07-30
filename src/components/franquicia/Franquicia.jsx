import { TextWithTapeBg } from "@/shared/TextWithTapeBg"
import { Button, Image } from "@nextui-org/react"

import FranquiciaImg from "@/assets/images/franquicia/franquicia_1.webp";
import Link from "next/link";

const url_franquicia = "https://yuuki-ten.vercel.app/franquicia/"

export const Franquicia = () => {
    return (
        <div className="flex flex-col gap-8 relative mt-20" id="franquicia">
            <div className="max-w-4xl w-full mx-auto block md:flex gap-10 px-5 md:pl-5 pr-0 pl-0">
                <div className="flex flex-col items-center mx-auto md:mx-0 md:items-start gap-3 py-10 md:py-8 lg:py-20 max-w-fit w-full">
                    <div>
                        <TextWithTapeBg text="Franquicia" className="px-4 py-4 border-none bg-tape_2 bg-center w-full text-center bg-contain" hideBackgroundColor />
                        <h3
                            className="font-fredoka font-extrabold text-[35px] uppercase text-center lg:text-left text-shadow text-shadow-bold"
                        >
                            Yuuki
                        </h3>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="max-w-sm text-center md:text-left">
                            Si estás interesado en formar parte de la franquicia YUUKI, conoce más sobre su modelo de negocio y los requisitos para implementarlo
                        </p>
                        <Link href={url_franquicia} target="_blank" className="mx-auto sm:mx-0">
                            <Button
                                className="rounded-none font-montserrat capitalize font-bold text-lg bg-amarillo text-black w-fit border-2 border-black mx-auto md:mx-0"
                                size="lg"
                            >
                                Entérate más
                            </Button>
                        </Link>
                    </div>
                </div>
                <Image
                    src={FranquiciaImg.src}
                    radius="0"
                    alt="Franquicia Naruto"
                    className="object-cover"
                    classNames={{
                        wrapper: "-mt-20 -mb-[0.5px] hidden md:flex",
                        img: "border-4 border-black"
                    }}
                />
            </div>
        </div>
    )
}
