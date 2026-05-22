"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] pt-40 pb-32 flex items-center justify-start overflow-hidden">
      
      {/* Background Atmosphere Overlays */}
      <div className="noise-overlay" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
      

      {/* Cinematic Backlight Glow behind Portrait */}
      <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-brand-emerald/10 dark:bg-emerald-950/20 blur-[130px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute top-[40%] right-[20%] w-[350px] h-[350px] rounded-full bg-brand-blue/5 dark:bg-blue-950/10 blur-[110px] pointer-events-none z-0 animate-pulse-slow-reverse" />

      {/* 
        Right: Immersive Cinematic Portrait 
        Faded seamlessly using nested masks for edge dissolves, filmic filters, and ambient light wrap.
      */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[65%] flex items-center justify-end pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, filter: "blur(15px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[120vh] flex items-center justify-end"
        >
          {/* Mask 1: Left Edge Dissolve */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              WebkitMaskImage: "linear-gradient(to left, black 35%, transparent 95%)",
              maskImage: "linear-gradient(to left, black 35%, transparent 95%)"
            }}
          >
            {/* Mask 2: Bottom Edge Dissolve */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 98%)",
                maskImage: "linear-gradient(to bottom, black 55%, transparent 98%)"
              }}
            >
              {/* Mask 3: Radial Vignette / Vignette Focus */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  WebkitMaskImage: "radial-gradient(circle at 65% 35%, black 25%, transparent 75%)",
                  maskImage: "radial-gradient(circle at 65% 35%, black 25%, transparent 75%)"
                }}
              >
                {/* The Cinematic Portrait Image */}
                <div 
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-[center_top] saturate-[0.65] contrast-[1.08] brightness-[0.88] dark:brightness-[0.72] transition-all duration-700"
                />

                {/* Environmental Light Wrap Overlay (Double layer) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10 mix-blend-color-dodge opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/25 to-background/60 mix-blend-normal" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col justify-center">
        
        {/* Main Composition Wrapper */}
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left: Dominant Editorial Typography Layer */}
          <div className="relative z-20 flex flex-col items-start text-left w-full lg:w-[60%] pointer-events-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 px-1 py-1 text-[11px] tracking-[0.3em] text-foreground/50 font-mono mb-12 uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-500/60 mr-2" />
              Executive Placement
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-clash text-6xl sm:text-7xl md:text-[100px] lg:text-[110px] font-medium leading-[0.9] tracking-tighter text-foreground mb-12 drop-shadow-sm dark:drop-shadow-2xl"
            >
              Hire Elite <br />
              <span className="text-gradient-mixed italic font-light pr-4">Finance Leaders</span> <br />
              at Startup Speed.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-foreground/60 text-lg md:text-xl max-w-lg mb-14 leading-relaxed font-light tracking-wide"
            >
              Bypass traditional recruiting noise. Connect with deeply vetted CAs, Investment Bankers, and CFOs in an immersive, high-touch platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto"
            >
              <a
                href="#opportunities"
                className="group flex items-center justify-center gap-4 px-10 py-5 rounded-full text-sm font-medium text-background bg-foreground hover:scale-[1.02] transition-all duration-500 shadow-xl shadow-foreground/10 dark:shadow-white/5"
              >
                Explore Mandates
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#vetting"
                className="group flex items-center justify-center gap-4 px-8 py-5 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-500"
              >
                <span className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground/5 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-foreground text-foreground translate-x-[1px]" />
                </span>
                Vetting Architecture
              </a>
            </motion.div>

          </div>

          {/* 
            Right/Bottom: Raw Intelligence Data / Technical Notation 
            Designed as high-precision architectural markup anchoring the composition.
          */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 right-6 md:right-12 flex flex-col items-end text-right z-20 pointer-events-auto font-mono text-[10px]"
          >
            {/* Architectural Search Annotations */}
            <div className="flex items-center gap-2 mb-4 text-foreground/30">
              <span className="tracking-[0.25em] uppercase">MANDATE CLASS // RETAINED SEARCH</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500/70" />
            </div>

            <div className="h-[1px] w-16 bg-foreground/10 mb-4" />

            <div className="flex flex-col items-end gap-0.5 mb-4">
              <span className="font-clash text-2xl font-light text-foreground tracking-tight leading-none">Marcus Thorne</span>
              <span className="text-[9px] text-foreground/45 tracking-[0.25em] uppercase mt-1">Managing Partner // M&A</span>
            </div>

            <div className="flex flex-col gap-3 text-[10px]">
              <div className="flex flex-col items-end">
                <span className="text-foreground/30 uppercase tracking-[0.2em] text-[8px]">Specialty</span>
                <span className="text-foreground/75 font-light tracking-wide mt-0.5">Cross-Border M&A // Pre-IPO</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-foreground/30 uppercase tracking-[0.2em] text-[8px]">Validation</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium tracking-wide mt-0.5 uppercase text-[9px]">Board Certified // Tier-1</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
