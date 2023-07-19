import Hero from '@/components/Hero'
import PerformanceBanner from '@/components/PerfomanceBanner'
import Booking from '@/components/BookingForm'
import Testimonials from '@/components/Testimonials'
import Steps from '@/components/Steps'
import Models from '@/components/Models'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main className="flex flex-wrap">
      <Hero/>
      <Steps/>
      <PerformanceBanner/>
      <Booking/>
      <Models/>
      <Testimonials/>
      <FAQ/>
    </main>
  )
}
