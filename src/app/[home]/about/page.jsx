import Image from 'next/image'
import React from 'react'
import aboutImage from '../../../assets/about-cover.png'
import { clientA, projectsA, globeA } from '@/assets/icons'
import { Bebas_Neue, Poppins } from 'next/font/google'
import { mediaHome } from '@/assets/Home'
import ServicesVideo from '@/components/ServicesVideo'
// FONTS
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export default function AboutPage() {

    return (
        <>
            <section className=' p-4 rounded-md shadow-lg  flex xl:h-[451px] relative flex-col xl:flex-row mb-10 xl:mb-28 xl:mt-[240px] mt-[80px]'>
                <div className='relative xl:w-full   md:w-1/4 w-1/2 flex items-center justify-center mx-auto'>
                    <Image src={aboutImage} alt='About Image' height={562} width={384} className=' xl:absolute xl:-bottom-20 xl:left-0 ' />
                </div>
                <div className=' '>
                    <article className=''>
                        <h1 className={`${bebas.className} text-5xl text-center mt-4 xl:text-7xl mb-3`}>Achievements</h1>
                        <p className={`${poppins.className}`}>"Vutuk: Where Engineering Meets Creativity. With a dynamic team of skilled engineers and visionary video editors, we've garnered a proven track record of delivering exceptional digital solutions. Our client-focused approach has led to a diverse portfolio of successful collaborations, spanning industries and igniting digital experiences that leave a lasting impact. At Vutuk, we don't just achieve — we elevate visions to reality."</p>
                    </article>
                    <div className={`${bebas.className} flex text-white mt-24  xl:gap-4 xl:absolute justify-center items-center     xl:-bottom-10 flex-wrap flex-col md:flex-row  gap-10`}>
                        <article className='clients-box h-[205px] w-full'>
                            <Image src={projectsA} alt='icon' width={96} height={96} className='  absolute   -top-16' />
                            <h1 className='text-5xl'>PROJECTS</h1>
                            <h2 className='text-2xl'>2000+</h2>
                            <h1 className='text-3xl'>Completed</h1>
                        </article>
                        <article className='clients-box h-[205px] w-full'>
                            <Image src={clientA} alt='icon' width={96} height={96} className='  absolute   -top-16' />
                            <h1 className='text-5xl'>Clients</h1>
                            <h2 className='text-2xl'>500+</h2>
                            <h1 className='text-3xl'>Worldwide</h1>
                        </article>
                        <article className='clients-box h-[205px] w-full'>
                            <Image src={globeA} alt='icon' width={96} height={96} className='  absolute   -top-16' />
                            <h1 className='text-5xl'>Served In</h1>
                            <h2 className='text-2xl'>50+</h2>
                            <h1 className='text-3xl'>Countries</h1>
                        </article>
                    </div>
                </div>
            </section>

            <section className='flex flex-col'>
                <div className='flex w-full mb-4 h-full p-4 flex-col xl:flex-row'>
                    <article className=' flex items-center flex-col 0 flex-1 w-full justify-center gap-6 text-center'>
                        <h1 className={`${bebas.className} text-5xl text-center mt-4 xl:text-7xl mb-3`}>MEDIA SERVICES</h1>
                        <p className={`${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto cum est, delectus explicabo architecto aliquam nesciunt molestiae nemo possimus!</p>
                        <p className={`${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto cum est, delectus explicabo architecto aliquam nesciunt molestiae nemo possimus!</p>
                        <p className={`${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto cum est, delectus explicabo architecto aliquam nesciunt molestiae nemo possimus!</p>
                        <p className={`${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto cum est, delectus explicabo architecto aliquam nesciunt molestiae nemo possimus!</p>
                        <p className={`${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto cum est, delectus explicabo architecto aliquam nesciunt molestiae nemo possimus!</p>
                    </article>
                    <article className='  mx-auto '>
                        <Image src={mediaHome} width={600} height={600} alt='Media' />
                    </article>
                </div>
                <div className='flex flex-1    h-full flex-col aspect-video p-4'>
                    <ServicesVideo videoId={'aLpdc61MmSI'} value={0} />
                </div>

            </section>
            <section className='flex flex-col'>
                <div className='flex w-full mb-4 h-full p-4 flex-col xl:flex-row'>
                    <article className=' flex items-center flex-col 0 flex-1 w-full justify-center gap-6 text-center'>
                        <h1 className={`${bebas.className} text-5xl text-center mt-4 xl:text-7xl mb-3`}>ENGINEERING SERVICES</h1>
                        <p className={`${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto cum est, delectus explicabo architecto aliquam nesciunt molestiae nemo possimus!</p>
                        <p className={`${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto cum est, delectus explicabo architecto aliquam nesciunt molestiae nemo possimus!</p>
                        <p className={`${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto cum est, delectus explicabo architecto aliquam nesciunt molestiae nemo possimus!</p>
                        <p className={`${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto cum est, delectus explicabo architecto aliquam nesciunt molestiae nemo possimus!</p>
                        <p className={`${poppins.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto cum est, delectus explicabo architecto aliquam nesciunt molestiae nemo possimus!</p>
                    </article>
                    <article className='  mx-auto '>
                        <Image src={mediaHome} width={600} height={600} alt='Media' />
                    </article>
                </div>
                <div className='flex flex-1    h-full flex-col aspect-video p-4'>
                    <ServicesVideo videoId={'MkZxdZvozes'} value={0} />
                </div>

            </section>
        </>
    )
}
