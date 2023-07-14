import PerformanceBanner from '@/components/PerfomanceBanner'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="flex flex-wrap">
      <h1>Home</h1>
      <PerformanceBanner/>
      <Testimonials/>
    </main>
  )
}
