'use client'
import { logoBlack } from '@/assets/landingPage'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Bebas_Neue, Poppins } from 'next/font/google'
import { cross, ham } from '@/assets/icons'


// FONT
const poppins = Poppins({ subsets: ['latin'], weight: ['600', '400'] })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })

export default function Navbar() {
    const pathName = usePathname();
    const [activeLink, setActiveLink] = useState('home');
    const [showNav, setShowNav] = useState(false)


    const path = pathName.split('/')[1];

    function activeLinkHandler(isActive) {
        setActiveLink(isActive)
        setShowNav(false)
    }

    function buttonHandlerHam() {
        setShowNav(prev => !prev)
    }

    return (
        <header className='bg-white shadow-md'>
            <nav className='max-w-screen-2xl mx-auto  flex items-center justify-between px-4'>
                <Image src={logoBlack} width={171} height={88} alt='logo' className='cursor-pointer  h-[70px]  lg:h-[88px] w-auto' priority />

                <menu className={`${showNav ? 'responsiveNav' : 'hidden'}  lg:static lg:flex-row lg:w-fit  items-center justify-center  ${poppins.className} font-normal lg:flex`}>
                    <Link href={`/${path}`} className={`nav-links ${activeLink === 'home' && 'font-semibold'}`}
                        onClick={() => activeLinkHandler('home')}>Home</Link>
                    <Link href={`/${path}/about`} className={`nav-links ${activeLink === 'about' && 'font-semibold'}`} onClick={() => activeLinkHandler('about')}>About Us</Link>
                    <Link href={`/${path}/blogs`} className={`nav-links ${activeLink === 'blogs' && 'font-semibold'}`} onClick={() => activeLinkHandler('blogs')}>Blogs</Link>
                    <Link href={`/${path}/projects`} className={`nav-links ${activeLink === 'projects' && 'font-semibold'}`} onClick={() => activeLinkHandler('projects')}>Projects</Link>
                    <Link href={`/${path}/contact`} className={`nav-links btnC ${bebas.className}`} onClick={() => activeLinkHandler('contact')}>Book a Call</Link>

                </menu>
                <Image onClick={buttonHandlerHam} src={showNav ? cross : ham} width={35} height={35} priority alt='ham-icon' className='cursor-pointer block lg:hidden' />
            </nav>
        </header>
    )
}
