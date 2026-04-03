import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import DiscoverSection from "@/components/sections/DiscoverSection";
import TileNavSection from "@/components/sections/TileNavSection";
import WhyDiveSection from "@/components/sections/WhyDiveSection";
import LearningStepsSection from "@/components/sections/LearningStepsSection";
import AdvancedSection from "@/components/sections/AdvancedSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "FTL Scuba Diving",
  description: "Personalized scuba dive instruction in Fort Lauderdale, FL.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <DiscoverSection />
      <TileNavSection />
      <WhyDiveSection />
      <LearningStepsSection />
      <AdvancedSection />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
