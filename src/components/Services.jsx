import React from 'react'
import Title from './Title'
import Image from 'next/image'


import { imageVideEditing } from '@/assets/services'
import { Bebas_Neue, Open_Sans, Poppins } from 'next/font/google'
import YouTube from 'react-youtube'
import ServicesVideo from './ServicesVideo'

// FONTS
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const openS = Open_Sans({ subsets: ['latin'], weight: ['400'] });
export default function Services() {
    return (
        <>
            <Title title='Our Services' />
            <section className='mt-12 shadow-xl rounded-md flex items-center justify-center gap-6 flex-col-reverse xl:flex-row py-4'>
                <div className=''>
                    <article className='w-full'>

                        <Image src={imageVideEditing} width={undefined} height={undefined} className='w-full' alt='service' />
                    </article>
                </div>
                <div className='flex items-start justify-between flex-col gap-5 flex-1 px-4'>
                    <h1 className={`${bebas.className} pt-2 text-5xl text-center mt-2 w-full`}>Video EDITING</h1>
                    <p className={`${poppins.className} text-4xl uppercase`}>Some PRojects</p>
                    <article className='flex  w-full  gap-6  flex-col items-center justify-center sm:flex-row'>

                        <ServicesVideo />
                        <ServicesVideo />

                    </article>
                    <p className={`${openS.className} w-fit`}> Our Video Editing Service transforms raw footage into captivating visual stories. Our skilled editors enhance colors, merge clips, and add effects, creating professional-quality videos that engage your audience. Whether for personal memories, business promotions, or   projects, we tailor our editing to your vision, meeting your deadlines with precision. Elevate your videos with us, where your vision meets expertise.</p>
                </div>
            </section>
            <section className='mt-12 shadow-xl rounded-md flex items-center justify-center gap-6 flex-col-reverse  xl:flex-row-reverse py-4'>
                <div className=''>
                    <article className='w-full'>

                        <Image src={imageVideEditing} width={undefined} height={undefined} className='w-full' alt='service' />
                    </article>
                </div>
                <div className='flex items-start justify-between flex-col gap-5 flex-1 px-4'>
                    <h1 className={`${bebas.className} pt-2 text-5xl text-center mt-2 w-full`}>Video EDITING</h1>
                    <p className={`${poppins.className} text-4xl uppercase`}>Some PRojects</p>
                    <article className='flex  w-full  gap-6  flex-col items-center justify-center sm:flex-row'>

                        <ServicesVideo />
                        <ServicesVideo />

                    </article>
                    <p className={`${openS.className} w-fit`}> Our Video Editing Service transforms raw footage into captivating visual stories. Our skilled editors enhance colors, merge clips, and add effects, creating professional-quality videos that engage your audience. Whether for personal memories, business promotions, or   projects, we tailor our editing to your vision, meeting your deadlines with precision. Elevate your videos with us, where your vision meets expertise.</p>
                </div>
            </section>


        </>
    )
}
