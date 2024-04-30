import { logoBlack } from '@/assets/landingPage'
import Image from 'next/image'
import React, { Suspense } from 'react'

export default function LandingPageNavbar() {
    return (
        <header className=' p-2  shadow-md flex items-center justify-center z-50 absolute top-0 left-0 w-full  backdrop-blur-sm bg-white/30 '>
            <Suspense fallback={<div>Loadin...</div>}>
                <Image src={logoBlack} width={171} height={88} priority className='cursor-pointer  ' alt='Logo' />

            </Suspense>
        </header>
    )
}
