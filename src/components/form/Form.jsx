import { Logo } from '@/shared/Logo'
import { Button, Chip, Input, Link, Textarea } from '@nextui-org/react'
import { useState } from 'react'
import { FiMail, FiPhoneCall } from 'react-icons/fi'

export const Form = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        website: "restaurante",
    });

    const [sendingMessage, setSendingMessage] = useState(false)

    const [openModal, setOpenModal] = useState(false)

    const [responseMessage, setResponseMessage] = useState("");
    const [hasError, setHasError] = useState({
        name: false,
        phone: false,
        email: false,
        message: false,
    });

    const handleForm = (value, key) => {
        setForm((prev) => ({
            ...prev,
            [key]: value
        }));

        if (value) {
            setHasError((prev) => ({
                ...prev,
                [key]: false
            }));
        }
    };

    const errorMessages = {
        name: "El nombre es obligatorio.",
        phone: "El teléfono es obligatorio.",
        email: "El correo electrónico es obligatorio.",
        message: "El mensaje es obligatorio.",
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {
            name: !/^[a-zA-Z\s]+$/.test(form.name),
            phone: !/^\d{9,12}$/.test(form.phone),
            email: !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email),
            message: form.message === "",
        };

        setHasError(errors);

        if (Object.values(errors).some((error) => error)) {
            return;
        }

        const formData = new URLSearchParams();
        formData.append('nombre', form.name);
        formData.append('telefono', form.phone);
        formData.append('correo', form.email);
        formData.append('mensaje', form.message);
        formData.append('website', form.website);

        try {
            setSendingMessage(true);
            const response = await fetch('https://yuuki.modobeta.info/mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });

            const text = await response.text();
            setResponseMessage(text);

            setTimeout(() => {
                setResponseMessage("");
            }, 5000)

            setForm({
                name: "",
                phone: "",
                email: "",
                message: "",
                website: "restaurante",
            })
        } catch (error) {
            alert('Error al enviar su mensaje: ' + error.message);
            console.error('Error:', error);
        }

        setSendingMessage(false);
    };

    return (
        <div className="max-w-4xl w-full mx-auto flex flex-col lg:flex-row gap-10 lg:gap-5 px-5 md:pl-5 pt-24 pb-6" id="contacto">
            <div className='flex flex-col gap-5 w-full'>
                <Logo className="h-20 flex w-fit" />
                <p className="font-light">
                    Escríbenos si eres un proveedor o deseas<br className='hidden lg:block' />
                    trabajar con nosotros al:
                </p>
                <ul className='flex flex-col md:flex-row lg:flex-col gap-3  md:gap-10 lg:gap-3'>
                    <li className="">
                        <Link
                            className='flex gap-3 items-center text-white'
                            href='mailto:info@yuuki.pe'
                            target='_blank'
                        >
                            <FiMail size={20} className='mt-1' /> info@yuuki.pe
                        </Link>
                    </li>
                    <li className="flex gap-3 items-center">
                        <Link
                            className='flex gap-3 items-center text-white'
                            href='tel:51939728909'
                            target='_blank'
                        >
                            <FiPhoneCall size={20} className='mt-1' /> 939728909
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='w-full -mt-2 flex flex-col gap-3'>
                <div className='w-full -mt-2 flex flex-col gap-2'>
                    <h3 className="font-steelfish font-extrabold text-[40px] uppercase text-left">
                        Contáctanos
                    </h3>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3 light'>
                        <div className='flex flex-col md:flex-row gap-3 items-start w-full justify-between'>
                            <div className='w-full md:w-1/2'>
                                <Input
                                    className={`${hasError.name ? 'border-red-500' : ''}`}
                                    label="Nombre"
                                    value={form.name}
                                    isInvalid={hasError.name}
                                    onChange={(e) => handleForm(e.target.value.replace(/[0-9]/g, ''), "name")}
                                    classNames={{
                                        input: "px-2",
                                        label: "left-5",
                                    }}
                                />
                                {hasError.name && <span className="text-red-500 text-sm">{errorMessages.name}</span>}
                            </div>
                            <div className='w-full md:w-1/2'>
                                <Input
                                    className={`${hasError.phone ? 'border-red-500' : ''}`}
                                    label="Teléfono"
                                    type='text'
                                    min={9}
                                    max={12}
                                    isInvalid={hasError.phone}
                                    value={form.phone}
                                    onChange={(e) => handleForm(e.target.value.replace(/[a-zA-Z]/g, ''), "phone")}
                                    classNames={{
                                        input: "px-2",
                                        label: "left-5",
                                    }}
                                />
                                {hasError.phone && <span className="text-red-500 text-sm">{errorMessages.phone}</span>}
                            </div>
                        </div>
                        <div className='w-full'>
                            <Input
                                className={`${hasError.email ? 'border-red-500' : ''}`}
                                label="Email"
                                type='email'
                                value={form.email}
                                isInvalid={hasError.email}
                                onChange={(e) => handleForm(e.target.value, "email")}
                                classNames={{
                                    input: "px-2",
                                    label: "left-5",
                                }}
                            />
                            {hasError.email && <span className="text-red-500 text-sm">{errorMessages.email}</span>}
                        </div>
                        <div className='w-full'>
                            <Textarea
                                label="Mensaje"
                                onChange={(e) => handleForm(e.target.value, "message")}
                                value={form.message}
                                isInvalid={hasError.message}
                                classNames={{
                                    input: "px-2",
                                    label: "left-2",
                                }}
                            />
                            {hasError.message && <span className="text-red-500 text-sm">{errorMessages.message}</span>}
                        </div>
                        <Button
                            type="submit"
                            className="rounded-none font-montserrat capitalize font-bold text-lg bg-amarillo text-black border-2 border-black w-full lg:w-fit"
                            size="lg"
                            isLoading={sendingMessage}
                        >
                            Enviar
                        </Button>
                    </form>
                    {responseMessage &&
                        <Chip classNames={{ content: "font-bold text-black px-4 uppercase", base: "rounded-none bg-amarillo" }}>{responseMessage}</Chip>
                    }
                </div>
            </div>
        </div>
    )
}
