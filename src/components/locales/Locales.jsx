import { LocalesCarousel } from "./LocalesCarousel"

export const Locales = () => {
    return (
        <section className="max-w-screen-desktop pt-40 pb-10 md:pt-48 md:pb-20 mx-auto flex flex-col gap-6 relative">
            <h3
                className="font-fredoka font-extrabold text-[35px] uppercase text-center text-shadow text-shadow-bold"
            >
                Nuestros locales
            </h3>
            <LocalesCarousel />
        </section>
    )
}
