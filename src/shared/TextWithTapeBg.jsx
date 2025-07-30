import React from 'react'

export const TextWithTapeBg = ({ className, text, showArrow = false, hideBackgroundColor = false }) => {
    const strClass = `${ showArrow ? 'tape-arrow' : ''} ${ hideBackgroundColor ? '':'bg-naranja' } font-fredoka uppercase font-normal text-xl bg-no-repeat bg-100 max-w-fit text-2xl px-3 py-2 text-amarillo text-shadow border-2 border-black relative`
    return (
        <p className={`${strClass} ${className}`}>
            {text}
        </p>
    )
}
