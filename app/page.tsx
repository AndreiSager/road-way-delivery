import Hero from "@/components/Hero";
import PromotionalBanner from "@/components/PromotionalBanner";
import Testimonials from "@/components/Testimonials";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import Value from "@/components/Value";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <PromotionalBanner />
      <Services />
      <Steps />
      <Value />
      <Testimonials />
      <FAQ />
    </main>
  );
}
