"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import WhoWeHire from "@/components/WhoWeHire";
import HowItWorks from "@/components/HowItWorks";
import WhyFinroles from "@/components/WhyFinroles";
import LiveOpportunities from "@/components/LiveOpportunities";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  // Initialize Lenis Smooth Scroll
  useSmoothScroll();

  return (
    <>
      {/* Cinematic Environmental Atmosphere */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background transition-colors duration-700">
        
        {/* Dominant Ambient Light Source (Top Left) */}
        <div 
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-emerald-500/15 dark:bg-emerald-900/30 blur-[180px] md:blur-[250px] animate-pulse-slow"
          style={{ mixBlendMode: 'var(--mesh-blend)' as any }}
        />
        
        {/* Subtle Atmospheric Reflective Falloff (Bottom Right) */}
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/5 dark:bg-blue-900/10 blur-[150px] md:blur-[200px] animate-pulse-slow-reverse"
          style={{ mixBlendMode: 'var(--mesh-blend)' as any }}
        />

        {/* Global Atmospheric Haze Layer */}
        <div className="absolute inset-0 bg-background/20 dark:bg-background/40 backdrop-blur-[1px]" />
      </div>

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1 w-full flex flex-col relative z-10 overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Trust Marquee & Counters */}
        <Trust />

        {/* Who We Hire Bento Grid */}
        <WhoWeHire />

        {/* How It Works Timeline */}
        <HowItWorks />

        {/* Why Finroles Vetting Details */}
        <WhyFinroles />

        {/* Live Opportunities Showcases */}
        <LiveOpportunities />

        {/* 3D Stacked Testimonials */}
        <Testimonials />

        {/* Final Interactive Scheduler CTA */}
        <FinalCTA />
      </main>

      {/* Premium Footer */}
      <Footer />
    </>
  );
}
