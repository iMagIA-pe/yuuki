import { Logo } from "@/shared/Logo";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, NavbarMenuToggle } from "@nextui-org/react";
import { } from "framer-motion";
import Link from "next/link";
import { FaArrowLeftLong, FaBars } from "react-icons/fa6";
import { DeliveryButton } from "./DeliveryButton";
import { Social } from "./Social";
import { motion } from 'framer-motion';


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

export const Drawer = ({ isMenuOpen, setIsMenuOpen, mode }) => {
    return (
        <>
            <Button
                onClick={() => setIsMenuOpen(prev => !prev)}
                variant="light"
                className="lg:hidden absolute"
                isIconOnly
            >
                <FaBars size={20} className={`${ mode == 'light' ? 'text-light' : 'text-black' }`} />
            </Button>

            <Modal
                isOpen={isMenuOpen}
                onOpenChange={() => setIsMenuOpen(false)}
                size="xs"
                hideCloseButton
                classNames={{
                    wrapper: "justify-start",
                    base: "!m-0 h-full rounded-none bg-black"
                }}
                motionProps={{
                    initial: { x: -400, opacity: 0 },
                    animate: { x: 0, opacity: 1 },
                    exit: { x: -400, opacity: 0 },
                    transition: {
                        type: 'tween'
                    },
                }}
            >
                <ModalContent className="py-8">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex gap-4 items-center">
                                <FaArrowLeftLong className="cursor-pointer" onClick={onClose} />
                                <Logo className="h-16 w-fit" />
                            </ModalHeader>
                            <ModalBody>
                                <div className="pt-10 flex flex-col gap-8 font-fredoka uppercase text-white">
                                    {
                                        !!ITEMS_MENU.length && ITEMS_MENU.map((item, index) => (
                                            <motion.div
                                                initial={{ opacity: 0, scale: .8, y: 100 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ type: "spring", duration: .2, delay: .2 * index, stiffness: 100 }}
                                                key={item.anchor}
                                            >
                                                <Link color="foreground" href={item.anchor} onClick={onClose} className='text-shadow'>
                                                    {item.title}
                                                </Link>
                                            </motion.div>
                                        ))
                                    }
                                    <motion.div
                                        initial={{ opacity: 0, scale: .8, y: 100 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ type: "spring", duration: .2, delay: .2 * ITEMS_MENU.length, stiffness: 100 }}
                                    >
                                        <DeliveryButton />
                                    </motion.div>
                                </div>
                            </ModalBody>
                            <ModalFooter className="justify-start">
                                <Social />
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
