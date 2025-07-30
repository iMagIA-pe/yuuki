import localFont from 'next/font/local'

const segoueUIVariable = localFont({
    src: [
        {
            path: '../assets/fonts/SegoeUIVariable.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../assets/fonts/SegoeUIVariable.woff',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../assets/fonts/SegoeUIVariable.ttf',
            weight: 'normal',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-segue-ui-variable',
});

const steelfishEb = localFont({
    src: [
        {
            path: '../assets/fonts/SteelfishEb-Italic.woff2',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../assets/fonts/SteelfishEb-Italic.woff',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../assets/fonts/SteelfishEb-Italic.ttf',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../assets/fonts/SteelfishEb-Regular.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../assets/fonts/SteelfishEb-Regular.woff',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../assets/fonts/SteelfishEb-Regular.ttf',
            weight: '800',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-steelfish-eb',
});

const avenirLTStd = localFont({
    src: [
        {
            path: '../assets/fonts/AvenirLTStd-Roman.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/AvenirLTStd-Roman.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/AvenirLTStd-Roman.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/AvenirLTStd-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../assets/fonts/AvenirLTStd-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../assets/fonts/AvenirLTStd-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../assets/fonts/AvenirLTStd-Black.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../assets/fonts/AvenirLTStd-Black.woff',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../assets/fonts/AvenirLTStd-Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../assets/fonts/AvenirLTStd-Book.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/AvenirLTStd-Book.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/AvenirLTStd-Book.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-avenir-lt-std',
});

const goodBrush = localFont({
    src: [
        {
            path: '../assets/fonts/GOODBRUSH.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../assets/fonts/GOODBRUSH.woff',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../assets/fonts/GOODBRUSH.ttf',
            weight: 'normal',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-good-brush',
});

const electroharmonix = localFont({
    src: [
        {
            path: '../assets/fonts/Electroharmonix-Regular.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Electroharmonix-Regular.woff',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Electroharmonix-Regular.ttf',
            weight: 'normal',
            style: 'normal',
        }
    ],
    display: 'swap',
    variable: '--font-electroharmonix',
});

const fredoka = localFont({
    src: [
        {
            path: '../assets/fonts/Fredoka-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Fredoka-SemiBold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Fredoka-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Fredoka-Bold.woff2',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Fredoka-Bold.woff',
            weight: 'bold',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Fredoka-Bold.ttf',
            weight: 'bold',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-fredoka',
});

export {
    segoueUIVariable,
    steelfishEb,
    avenirLTStd,
    goodBrush,
    electroharmonix,
    fredoka
};