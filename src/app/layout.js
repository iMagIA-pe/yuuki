import { Montserrat } from 'next/font/google'
import "./globals.css";
import {
    steelfishEb,
    electroharmonix,
    fredoka
} from '../fonts'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
    title: "Yuuki | Platos Asiáticos y Ambientes Únicos",
    description: "Yuuki, el primer restaurante asiático en Lima, ofrece platos de Japón, Corea, Tailandia y Vietnam. Disfruta de una experiencia culinaria única y temática.",
    openGraph: {
        title: "Yuuki | Platos Asiáticos y Ambientes Únicos",
        description: "Yuuki, el primer restaurante asiático en Lima, ofrece platos de Japón, Corea, Tailandia y Vietnam. Disfruta de una experiencia culinaria única y temática.",
    },
    metadataBase: new URL('https://yuuki.modobeta.info/restaurant'),
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={`${steelfishEb.variable} ${electroharmonix.variable} ${fredoka.variable} ${montserrat.className} dark text-foreground bg-background min-h-screen max-w-[100vw] overflow-x-hidden`} >
                {children}
            </body>
        </html>
    );
}
