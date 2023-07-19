'use client'
 
import { usePathname } from 'next/navigation'

export default function TopBanner() {
    const pathname = usePathname()

    return(
        <div>
            <h1>{pathname}</h1>
        </div>
    )
}