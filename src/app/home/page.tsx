"use client"

import React from "react";
import { HeroSection } from "(components)/hero-section";
import { FeaturesSection } from "(components)/features-section";
import { HowItWorks } from "(components)/how-it-works";
import { BenefitsSection } from "(components)/benefits-section";
import { Testimonials } from "(components)/testimonials";
import { PricingPreview } from "(components)/pricing-preview";
import { FaqSection } from "(components)/faq-section";
import { CtaSection } from "(components)/cta-section";

export default function Home() {
  return (
    <div className="text-white">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <BenefitsSection />
      <Testimonials />
      <PricingPreview />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
