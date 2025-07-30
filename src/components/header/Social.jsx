import IconFacebook from "@/assets/vectors/facebook.svg";
import IconInstagram from "@/assets/vectors/instagram.svg";
import IconTiktok from "@/assets/vectors/tiktok.svg";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";

const SOCIAL_LINKS = [
    {
        title: "Instagram",
        url: "https://www.instagram.com/yuukiperu/?hl=en",
        icon: <Image src={ IconInstagram.src } alt="Icono social Instagram" size={24} className="text-gris6 text-shadow" radius="0" />
    },
    {
        title: "Facebook",
        url: "https://www.facebook.com/p/Yuuki-Asian-Street-Food-100083536273717/",
        icon: <Image src={ IconFacebook.src } alt="Icono social Facebook" size={22} className="text-gris6 text-shadow" radius="0" />
    },
    {
        title: "Tik Tok",
        url: "https://tiktok.com",
        icon: <Image src={ IconTiktok.src } alt="Icono social TikTok" size={26} className="text-gris6 text-shadow" radius="0" />
    },
];

export const Social = () => {
    return (
        <div className="flex gap-3 items-center">
            {
                !!SOCIAL_LINKS.length && SOCIAL_LINKS.map((link, index) => (
                    <Link href={link.url} key={ link.url } className="hover:scale-125 transition" target="_blank">
                        {link.icon}
                    </Link>
                ))
            }
        </div>
    )
}
