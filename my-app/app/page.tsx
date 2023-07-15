import Hero from '@/components/Hero'
import PerformanceBanner from '@/components/PerfomanceBanner'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="flex flex-wrap">
      <Hero/>
      <PerformanceBanner/>
      <Testimonials/>
    </main>
  )
}
