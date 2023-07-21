import Hero from '@/components/Hero'
import PerformanceBanner from '@/components/PerfomanceBanner'
import Testimonials from '@/components/Testimonials'
import Steps from '@/components/Steps'
import Models from '@/components/Models'
import FAQ from '@/components/FAQ'
import Value from '@/components/Value'

export default function Home() {
  return (
    <main className="flex flex-wrap">
      <Hero/>
      <Steps/>
      <PerformanceBanner/>
      <Models/>
      <Value/>
      <Testimonials/>
      <FAQ/>
    </main>
  )
}
