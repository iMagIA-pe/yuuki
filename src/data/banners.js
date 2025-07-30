import Banner1_BG from '@/assets/images/banners/banner_1/banner1_bg.png';
import Banner1_IMG from '@/assets/images/banners/banner_1/banner1_image.webp';
import Banner1_IMG_TABLET from '@/assets/images/banners/banner_1/banner1_tablet.webp';
import Banner1_IMG_MOBILE from '@/assets/images/banners/banner_1/banner1_mobile.webp';
import Banner1_PRICE from '@/assets/images/banners/banner_1/banner1_price.webp';

import Banner2_BG from '@/assets/images/banners/banner_2/banner2_bg.png';
import Banner2_IMG_DESKTOP from '@/assets/images/banners/banner_2/banner2_image_desktop.png';
import Banner2_IMG_TABLET from '@/assets/images/banners/banner_2/banner2_image_tablet.png';
import Banner2_IMG_MOBILE from '@/assets/images/banners/banner_2/banner2_image_mobile.png';

export const banners = [
    {
        background: Banner1_BG,
        title: '¡obentos para tus almuerzos!',
        button: 'Ir a la carta',
        buttonUrl: '#carta',
        images: {
            desktop: Banner1_IMG,
            tablet: Banner1_IMG_TABLET,
            mobile: Banner1_IMG_MOBILE
        },
        classNames: {
            title: 'text-shadow text-shadow-bold',
            picture_img: 'block md:-translate-x-20 lg:translate-x-0',
            image: 'md:scale-125 lg:scale-100',
            picture: 'relative',
            wrapper: 'gap-12 md:gap-0',
            container_text: 'max-w-[260px]'
        },
        decorations: [
            {
                image: Banner1_PRICE,
                class: "right-0 bottom-0 md:bottom-10 max-w-[200px] md:max-w-[225px] lg:max-w-[300px]",
            }
        ],
        mobileDirection: "reverse",
        color: 'light',
    },
    {
        background: Banner2_BG,
        title: '¿ya conoces a yuuki?',
        button: 'Ir a la carta',
        buttonUrl: '#carta',
        images: {
            desktop: Banner2_IMG_DESKTOP,
            tablet: Banner2_IMG_TABLET,
            mobile: Banner2_IMG_MOBILE
        },
        classNames: {
            title: 'text-shadow text-shadow-bold',
            picture_img: 'block md:max-w-[670px] lg:max-w-none -mr-20 -mb-28 md:mr-0 md:mb-0',
            wrapper: 'gap-12 md:gap-0 -mt-40 md:mt-0',
            container_text: 'max-w-[260px] md:max-w-[400px]',
            bg: 'pb-5 !bg-[75%_center] lg:bg-[100%_center]'
        },
        mobileDirection: "reverse",
        color: 'dark',
    }
];