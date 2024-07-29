import About from "@/components/About";
import PerformanceBanner from "@/components/PerfomanceBanner";
import PromotionalBanner from "@/components/PromotionalBanner";
import TopBanner from "@/components/TopBanner";
import FAQ from "@/components/FAQ";
import Value from "@/components/Value";

export default function AboutPage() {
    return(
        <main>
            <TopBanner/>
            <About/>
            <PromotionalBanner/>
            <FAQ/>
        </main>
    )
}