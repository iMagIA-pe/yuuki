import { Link } from "@nextui-org/react"

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 lg:flex-row items-center justify-between px-5 md:max-w-screen-2xl lg:max-w-4xl mx-auto pb-5 pt-10 text-white opacity-60 text-xs">
        <p>Diseñado por: <Link className="underline text-white cursor-pointer text-xs" target="_blank" href="https://make.pe">make.pe</Link></p>
        <p className="text-center lg:text-right">Yuuki Japanese Food - © 2024 Todos los derechos reservados 2024</p>
    </footer>
  )
}
