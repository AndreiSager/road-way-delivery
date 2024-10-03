import Hero from "@/components/Hero";
import PromotionalBanner from "@/components/PromotionalBanner";
import Testimonials from "@/components/Testimonials";
import Steps from "@/components/Steps";
import Models from "@/components/Models";
import FAQ from "@/components/FAQ";
import Value from "@/components/Value";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex flex-wrap">
      <Hero />
      <PromotionalBanner />
      <Services />
      <Steps />
      <Models />
      <Value />
      <Testimonials />
      <FAQ />
    </main>
  );
}
