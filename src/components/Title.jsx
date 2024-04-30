import { Bebas_Neue } from 'next/font/google'
import React from 'react'

// "FONTS"
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export default function Title({ title }) {
    return (
        <h1 className={`${bebas.className}  heading`}>{title}</h1>
    )
}
