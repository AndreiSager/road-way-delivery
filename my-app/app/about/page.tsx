import About from "@/components/About";
import PerformanceBanner from "@/components/PerfomanceBanner";
import Steps from "@/components/Steps";
import TopBanner from "@/components/TopBanner";

export default function AboutPage() {
    return(
        <main>
            <TopBanner/>
            <About/>
            <PerformanceBanner/>
            <Steps/>
        </main>
    )
}