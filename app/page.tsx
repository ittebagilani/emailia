import CallToAction from "@/components/home/cta";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import Pricing from "@/components/home/pricing";
import Testimonials from "@/components/home/testimonials";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CallToAction />
      </main>
    </div>
  );
}
