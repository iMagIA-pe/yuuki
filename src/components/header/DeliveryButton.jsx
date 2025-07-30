import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { locales } from "@/data/locales";
import { CardLocal } from "./CardLocal";
import { TextWithTapeBg } from "@/shared/TextWithTapeBg";

export const DeliveryButton = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                onPress={onOpen}
                className="rounded-none font-montserrat capitalize font-bold text-lg bg-amarillo text-black w-fit border-2 border-black"
                size="lg"
            >
                Delivery
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="bg-black rounded-[20px] py-2 sm:p-10"
                size="4xl"
                placement="center"
                classNames={{
                    closeButton: "text-white text-2xl hover:bg-transparent right-10 top-6",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-center">
                                <TextWithTapeBg  text="¡Pídelo ya!" />
                            </ModalHeader>
                            <ModalBody>
                                <p className="text-center flex flex-col">
                                    Realiza tu pedido desde cualquiera de nuestros locales
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                                    {
                                        !!locales.length && locales.filter(item => !item.proximamente).map((local, key) =>
                                            (<CardLocal key={ key } {...local} />)
                                        )
                                    }
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
