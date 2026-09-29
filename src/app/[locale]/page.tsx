import Hero from "@/components/sections/Hero";
import BusinessModel from "@/components/sections/BusinessModel";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyViaus from "@/components/sections/WhyViaus";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BusinessModel />
      <ServicesOverview />
      <WhyViaus />
      <CTASection />
    </>
  );
}
