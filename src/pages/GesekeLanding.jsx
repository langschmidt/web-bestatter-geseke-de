import React from "react";
import Header from "@/components/geseke/Header";
import Hero from "@/components/geseke/Hero";
import IntroText from "@/components/geseke/IntroText";
import Districts from "@/components/geseke/Districts";
import TrauerfallSteps from "@/components/geseke/TrauerfallSteps";
import Services from "@/components/geseke/Services";
import WhyPage from "@/components/geseke/WhyPage";
import TrustSection from "@/components/geseke/TrustSection";
import FAQ from "@/components/geseke/FAQ";
import FinalCTA from "@/components/geseke/FinalCTA";
import Footer from "@/components/geseke/Footer";
import StickyMobileBar from "@/components/geseke/StickyMobileBar";
import SchemaOrg from "@/components/geseke/SchemaOrg";

export default function GesekeLanding() {
  return (
    <div className="min-h-screen bg-white font-body">
      <SchemaOrg />
      <Header />
      <main>
        <Hero />
        <IntroText />
        <Districts />
        <TrauerfallSteps />
        <Services />
        <WhyPage />
        <TrustSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}