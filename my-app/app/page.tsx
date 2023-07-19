import Hero from '@/components/Hero'
import PerformanceBanner from '@/components/PerfomanceBanner'
import Renting from '@/components/Models'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="flex flex-wrap">
      <Hero/>
      <PerformanceBanner/>
      <Renting/>
      <Testimonials/>
    </main>
  )
}
