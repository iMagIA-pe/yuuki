import { useCallback, useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import Link from 'next/link'
import { DeliveryButton } from './DeliveryButton'
import { Social } from './Social'
import { Drawer } from './Drawer'
import { Logo } from '@/shared/Logo'
import useScrollPosition from '@/hooks/useScrollPosition';

const ITEMS_MENU = [
    {
        title: "Carta",
        anchor: "#carta"
    },
    {
        title: "Historia",
        anchor: "#historia"
    },
    {
        title: "Locales",
        anchor: "#locales"
    }
]

export const Header = ({ bannerColor }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isScrolled = useScrollPosition();

    return (
        <>
            <Navbar
                onMenuOpenChange={setIsMenuOpen}
                maxWidth='xl'
                className={`fixed transition-all ${ isScrolled ? 'py-2' : 'py-6 bg-transparent' }`}
                isBlurred={isScrolled}
            >
                <NavbarContent className='relative lg:max-w-fit'>
                    <Drawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} mode={ isScrolled ? 'light' : bannerColor } />

                    <NavbarBrand className='justify-center'>
                        <Link href="#inicio">
                            <Logo className="h-16 lg:h-20 py-2" />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden lg:flex gap-12 font-fredoka uppercase text-white" justify="center">
                    {
                        !!ITEMS_MENU.length && ITEMS_MENU.map((item, key) => (
                            <NavbarItem key={item.anchor} className='hover:scale-125 transition'>
                                <Link color="foreground" href={item.anchor} className='text-2xl text-shadow'>
                                    {item.title}
                                </Link>
                            </NavbarItem>
                        ))
                    }
                </NavbarContent>
                <NavbarContent justify="end" className='hidden lg:flex gap-8 max-w-fit'>
                    <NavbarItem>
                        <DeliveryButton />
                    </NavbarItem>
                    <NavbarItem>
                        <Social />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    )
}
