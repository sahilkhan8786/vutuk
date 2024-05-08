import React, { Suspense } from 'react'
import Title from './Title'
import Image from 'next/image'


import { Bebas_Neue, Open_Sans, Poppins } from 'next/font/google'
import ServicesVideo from './ServicesVideo'

// FONTS
const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });
const openS = Open_Sans({ subsets: ['latin'], weight: ['400'] });
export default async function Services() {

    const res = await fetch('http://localhost:5000/api/v1/services?stream=MEDIA', { next: { revalidate: false } });
    const data = await res.json();
    console.log(data.data)


    return (
        <>
            <Title title='Our Services' />
            {data.data.services.map((el, i) => {
                return (<section className={`mt-12 shadow-xl rounded-md flex items-center justify-center gap-6 flex-col-reverse  py-4 ${i % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'}`} key={el._id}>
                    <div className=''>
                        <article className='w-full'>
                            <Suspense fallback={<span>Loading...</span>}>
                                <Image src={el.coverImage} width={700} height={700} className='w-full' alt={el.servicename} />

                            </Suspense>
                        </article>
                    </div>
                    <div className='flex items-start justify-between flex-col gap-5 flex-1 px-4'>
                        <h1 className={`${bebas.className} pt-2 text-5xl text-center mt-2 w-full`}>{el.servicename}</h1>
                        <p className={`${poppins.className} text-4xl uppercase`}>Some Projects</p>
                        <article className='flex  w-full  gap-6  flex-col items-center justify-center sm:flex-row'>

                            <ServicesVideo videoId="BfrDihJrjbE" value={1} />
                            <ServicesVideo videoId="BfrDihJrjbE" value={1} />

                        </article>
                        <p className={`${openS.className} w-fit`}>{el.description}</p>
                    </div>
                </section>)
            }
            )
            }





        </>
    )
}
