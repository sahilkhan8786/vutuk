import React from 'react'
import { mediaHome } from '@/assets/Home'
import Image from 'next/image'
import Link from 'next/link'
import clientLogo from '../assets/Vutuk_Clients_logos/Media-clients/01.png'
import { triangle } from '@/assets/icons'


// FONTS
import { Poppins, Bebas_Neue, Open_Sans } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['600', '300'] });
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const openS = Open_Sans({ subsets: ['latin'], weight: ['400'] });

export default function Hero() {
    return (
        <section className='mt-12 flex py-4 px-4 shadow-md rounded-md flex-col-reverse lg:flex-row'>
            <div className='flex flex-col   xl:mt-12'>
                <p className={`${poppins.className} mt-2 xl:mt-12 whitespace-nowrap text-xl mb-4`}>We are a team of professional</p>
                <h1 className={`${bebas.className} text-5xl whitespace-nowrap mb-4 xl:text-7xl`}>Graphic Designers</h1>
                <p className={`${openS.className} max-w-screen-md mt-2`}>Welcome to our creative studio, where we are specialize in bringing your ideas to life through the power of visual storytelling. From video production and editing to graphic design and motion graphics, we offer a range of services to help you share your message with the world.</p>

                <div className='flex mt-8 items-center justify-between max-w-[300px]'>
                    <Link href='/media/contact' className=' w-48 py-4 bg-primary text-white inline-flex justify-center items-center border-2 border-primary hover:bg-transparent hover:text-primary text-2xl  focus:outline-none focus:border-primary focus:bg-transparent focus:text-primary'>
                        Book A Call
                    </Link>
                    <span className='border-[3px] border-primary rounded-full w-[70px] h-[70px] flex items-center justify-center hover:cursor-pointer  hover:scale-105 transition-all pl-1'>
                        <Image src={triangle} width={15} height={15} className='animate-ping' />
                    </span>
                </div>
                <div className='mt-12'>
                    <p className={`${poppins.className} font-light`}>Trusted By</p>
                    <article className='flex max-w-lg  '>
                        <div className='size-10 md:size-12 lg:size-14 xl:size-16 relative'>
                            <Image src={clientLogo} fill className='saturate-0 absolute' />
                        </div>
                        <div className='size-10 md:size-12 lg:size-14 xl:size-16 relative'>
                            <Image src={clientLogo} fill className='saturate-0 absolute' />
                        </div>
                        <div className='size-10 md:size-12 lg:size-14 xl:size-16 relative'>
                            <Image src={clientLogo} fill className='saturate-0 absolute' />
                        </div>
                        <div className='size-10 md:size-12 lg:size-14 xl:size-16 relative'>
                            <Image src={clientLogo} fill className='saturate-0 absolute' />
                        </div>
                        <div className='size-10 md:size-12 lg:size-14 xl:size-16 relative'>
                            <Image src={clientLogo} fill className='saturate-0 absolute' />
                        </div>


                    </article>
                </div>
            </div>
            <div className='flex items-center justify-center '>
                <Image src={mediaHome} width={678} height={766} priority />
            </div>
        </section>
    )
}
