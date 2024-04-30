'use client'

import LandingPageNavbar from '@/components/LandingPageNavbar'
import React, { Suspense, useState } from 'react'



// FONTS
import { Montserrat, Open_Sans, Poppins } from "next/font/google";
import Image from 'next/image';
import { hoverDesign, hoverMedia } from '@/assets/landingPage';
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] })
const mont = Montserrat({ subsets: ['latin'], weight: ['400', '600'] })
const openS = Open_Sans({ subsets: ['latin'], weight: ['400'] })

export default function LandingPage() {
    const [showHoverImage, setShowHoverImage] = useState(false);
    const [hoverImage, setHoverImage] = useState('')

    function AddHoverImage(hoveredBtn) {
        setShowHoverImage(true)
        if (hoveredBtn === 'design') {
            setHoverImage(hoverDesign)
        }
        if (hoveredBtn === 'media') {
            setHoverImage(hoverMedia)
        }

    }
    function removeHoverImage() {
        setShowHoverImage(false)
    }

    return (
        <>
            <LandingPageNavbar />
            <section className='flex flex-col items-center gap-6  mt-[150px] '>
                <article className={` flex flex-col items-center gap-5 w-full shadow-md  backdrop-blur-sm py-16 lg:mt-12 z-20 relative bg-white${showHoverImage ? '/30' : ''}`} >

                    <h2 className={`${poppins.className} text-4xl  lg:text-5xl z-40`}>Welcome</h2>
                    <p className={`${poppins.className} text-black`}>To</p>
                    <h1 className={`${mont.className} font-normal text-7xl lg:text-9xl z-40`}>Vutuk</h1>
                    <p className={`${openS.className} text-xl uppercase sm:text-2xl lg:text-4xl z-40`}>Our Vision our execution</p>
                    <div className='flex max-w-screen-sm w-full justify-between gap-8 z-20 flex-col px-2 sm:flex-row sm:px-0'>
                        <Link href='/design' className={`flex-1 btn ${mont.className} font-semibold uppercase  '}`}
                            onMouseEnter={() => AddHoverImage('design')}
                            onMouseLeave={removeHoverImage}
                        >Engineering Services
                        </Link>
                        <Link onMouseEnter={() => AddHoverImage('media')}
                            onMouseLeave={removeHoverImage} href='/media' className={`flex-1 btn ${mont.className} font-semibold uppercase`}>


                            media Services

                        </Link>
                    </div>
                </article>
                {showHoverImage && <div className="h-screen flex items-center justify-center absolute top-0 left-0  w-full ">
                    <Suspense fallback={<div>Loading...</div>}>

                        <Image
                            src={hoverImage}
                            alt="Hover Image"
                            fill
                            priority
                            className="h-auto w-auto object-cover object-center"
                        />
                    </Suspense>
                </div>}


            </section>
        </>
    )
}
