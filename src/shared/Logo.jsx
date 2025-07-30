import Image from 'next/image'
import LogoSrc from '@/assets/vectors/logo.svg'

export const Logo = ({ className }) => {
    return (
        <Image src={LogoSrc} alt='Logo Naruto' className={className} />
    )
}
