'use client'
 
import { usePathname } from 'next/navigation'

export default function TopBanner() {
    const pathname = usePathname()
    const withoutSlash = pathname.replace('/','')

    return(
        <div className='flex justify-center items-center w-full h-[300px] lg:h-[500px] bg-highway bg-cover bg-center'>
            <div className='text-white capitalize text-center'>
                <h1 className='font-bold text-6xl'>{withoutSlash}</h1>
                <h1 className='font-bold text-xl'>home{pathname}</h1>
            </div>
        </div>
    )
}