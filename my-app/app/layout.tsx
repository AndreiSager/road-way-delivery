import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Road Way Valley',
  description: 'A create next app that only features front-end functionality.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-center'>
          <div className='flex flex-wrap w-full max-w-screen-xl'>
            <Navbar/>
            <main className='w-full'>
              {children}
            </main>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
