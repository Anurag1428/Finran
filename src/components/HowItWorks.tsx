"use client";

import { motion } from "framer-motion";
import { Search, Shield, Cpu, Calendar } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="vetting" className="py-48 relative overflow-hidden">
      {/* Background Ambient Spotlights */}
      <div 
        className="absolute top-[30%] left-[-15%] w-[55%] h-[55%] rounded-full bg-cyan-500/5 dark:bg-cyan-600/5 blur-[220px] pointer-events-none animate-ambient-shift" 
      />
      <div 
        className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 dark:bg-emerald-600/5 blur-[200px] pointer-events-none animate-ambient-shift-reverse" 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Editorial Section Heading */}
        <div className="flex flex-col items-start text-left max-w-4xl mb-36 border-l-[1px] border-emerald-500/20 pl-8">
          <span className="text-[11px] tracking-[0.25em] font-mono text-emerald-600 dark:text-emerald-400 uppercase">The Pipeline</span>
          <h2 className="font-clash text-5xl sm:text-6xl md:text-[80px] font-medium leading-[0.95] tracking-tighter text-foreground mt-6">
            Vetting as a Service.
          </h2>
          <p className="text-foreground/50 text-lg mt-8 font-light max-w-2xl leading-relaxed tracking-wide">
            We have engineered a highly standardized search protocol that combines rigorous human screening with high-fidelity validation models.
          </p>
        </div>

        {/* High-Precision Process Grid */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Architectural Vertical Timeline Infrastructure */}
          <div className="absolute left-[32px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 pointer-events-none flex justify-center z-0">
            {/* Layer 1: Ambient Spread (Background Diffusion) */}
            <div className="absolute inset-y-0 w-[120px] bg-gradient-to-b from-transparent via-emerald-500/5 dark:via-emerald-400/5 to-transparent blur-[40px]" />
            
            {/* Layer 2: Vertical Shimmer Motion */}
            <motion.div 
              animate={{ 
                y: ["-10%", "10%"],
                opacity: [0.3, 0.7, 0.3] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8, 
                ease: "linear" 
              }}
              className="absolute inset-y-0 w-[60px] bg-gradient-to-b from-transparent via-cyan-400/10 dark:via-cyan-300/10 to-transparent blur-2xl" 
            />

            {/* Layer 3: Core Semi-Transparent Structure */}
            <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-emerald-500/20 dark:via-emerald-400/20 to-transparent" />
            
            {/* Layer 4: Ultra-thin Sharp Focus Line */}
            <div className="absolute inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-white/30 dark:via-white/20 to-transparent mix-blend-overlay" />
          </div>
          
          <div className="flex flex-col gap-32">
            
            {/* Step 1: High-Density Focus Card */}
            <div className="flex flex-col md:flex-row items-stretch relative group">
              <div className="absolute left-[32px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 top-12">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full scale-[2] opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-16 h-16 rounded-full bg-background/90 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.1)] z-10 transition-colors duration-500 group-hover:bg-cyan-500/5">
                  <Search className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 pr-0 md:pr-20 pl-24 md:pl-0 text-left md:text-right hidden md:flex flex-col justify-center items-end">
                <span className="font-clash text-[120px] font-light text-foreground/[0.03] dark:text-white/[0.02] tracking-tighter leading-none select-none">
                  01
                </span>
                <span className="font-mono text-[9px] text-foreground/30 tracking-[0.2em] uppercase mt-2">
                  STAGE // SYSTEM_INIT
                </span>
              </div>
              
              <div className="w-full md:w-1/2 pl-24 md:pl-20 pr-0 text-left flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full rounded-[2rem] border border-foreground/10 dark:border-white/10 bg-foreground/[0.015] dark:bg-black/30 backdrop-blur-2xl p-8 md:p-10 shadow-lg relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-500/5 blur-[50px] pointer-events-none" />
                  
                  <span className="font-mono text-[9px] text-cyan-600 dark:text-cyan-400 tracking-widest uppercase block mb-3">
                    01 // ARCHITECTURAL SETUP
                  </span>
                  <h4 className="font-clash text-2xl font-medium text-foreground mb-4">
                    Scope & Target Structuring
                  </h4>
                  <p className="text-foreground/60 text-sm font-light leading-relaxed mb-6">
                    We define precision skill rubrics, technical hurdles, and core growth metrics. We model the role itself with extreme structural accuracy.
                  </p>
                  
                  {/* High Density Details */}
                  <div className="border-t border-foreground/5 dark:border-white/5 pt-4 grid grid-cols-2 gap-4 font-mono text-[9px] text-foreground/40">
                    <div>
                      <span className="block text-foreground/30">RUBRIC COMPILER</span>
                      <span className="text-foreground/75 mt-0.5 block">Custom Modeling Matrix</span>
                    </div>
                    <div>
                      <span className="block text-foreground/30">COGNITIVE MATCH</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 block">100% SPECIFIED</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Step 2: Minimalist Editorial Card */}
            <div className="flex flex-col md:flex-row-reverse items-stretch relative group">
              <div className="absolute left-[32px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 top-12">
                <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full scale-[2] opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-16 h-16 rounded-full bg-background/90 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.1)] z-10 transition-colors duration-500 group-hover:bg-emerald-500/5">
                  <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-0 md:pl-20 pr-24 md:pr-0 text-left hidden md:flex flex-col justify-center items-start">
                <span className="font-clash text-[120px] font-light text-foreground/[0.03] dark:text-white/[0.02] tracking-tighter leading-none select-none">
                  02
                </span>
                <span className="font-mono text-[9px] text-foreground/30 tracking-[0.2em] uppercase mt-2">
                  STAGE // DILIGENCE
                </span>
              </div>

              <div className="w-full md:w-1/2 pr-24 md:pr-20 pl-24 md:pl-0 text-left flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full rounded-[2rem] border border-transparent dark:border-white/5 bg-transparent p-8 md:p-10 relative"
                >
                  <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400 tracking-widest uppercase block mb-3">
                    02 // RIGOROUS VETTING
                  </span>
                  <h4 className="font-clash text-2xl font-medium text-foreground mb-4">
                    Algorithmic & Human Vetting
                  </h4>
                  <p className="text-foreground/60 text-sm font-light leading-relaxed">
                    Candidates pass through direct technical assessments, modeling tests, and independent behavioral panels before presenting.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Step 3: High-Density Focus Card */}
            <div className="flex flex-col md:flex-row items-stretch relative group">
              <div className="absolute left-[32px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 top-12">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full scale-[2] opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-16 h-16 rounded-full bg-background/90 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.1)] z-10 transition-colors duration-500 group-hover:bg-cyan-500/5">
                  <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>

              <div className="w-full md:w-1/2 pr-0 md:pr-20 pl-24 md:pl-0 text-left md:text-right hidden md:flex flex-col justify-center items-end">
                <span className="font-clash text-[120px] font-light text-foreground/[0.03] dark:text-white/[0.02] tracking-tighter leading-none select-none">
                  03
                </span>
                <span className="font-mono text-[9px] text-foreground/30 tracking-[0.2em] uppercase mt-2">
                  STAGE // ENGINE_RUN
                </span>
              </div>

              <div className="w-full md:w-1/2 pl-24 md:pl-20 pr-0 text-left flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full rounded-[2rem] border border-foreground/10 dark:border-white/10 bg-foreground/[0.015] dark:bg-black/30 backdrop-blur-2xl p-8 md:p-10 shadow-lg relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-500/5 blur-[50px] pointer-events-none" />

                  <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400 tracking-widest uppercase block mb-3">
                    03 // COGNITIVE ALIGNMENT
                  </span>
                  <h4 className="font-clash text-2xl font-medium text-foreground mb-4">
                    Precision Matching Engine
                  </h4>
                  <p className="text-foreground/60 text-sm font-light leading-relaxed mb-6">
                    Our database engine maps client requirements against candidate scores. You receive a highly curated executive dossier.
                  </p>

                  {/* High Density Details */}
                  <div className="border-t border-foreground/5 dark:border-white/5 pt-4 grid grid-cols-2 gap-4 font-mono text-[9px] text-foreground/40">
                    <div>
                      <span className="block text-foreground/30">MATCH QUALITY</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 block">TIER-1 EXCLUSIVE</span>
                    </div>
                    <div>
                      <span className="block text-foreground/30">LATENCY TIME</span>
                      <span className="text-foreground/75 mt-0.5 block">Instant Verification</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Step 4: Minimalist Editorial Card */}
            <div className="flex flex-col md:flex-row-reverse items-stretch relative group">
              <div className="absolute left-[32px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 top-12">
                <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full scale-[2] opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
                <div className="relative w-16 h-16 rounded-full bg-background/90 backdrop-blur-md border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.1)] z-10 transition-colors duration-500 group-hover:bg-emerald-500/5">
                  <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>

              <div className="w-full md:w-1/2 pl-0 md:pl-20 pr-24 md:pr-0 text-left hidden md:flex flex-col justify-center items-start">
                <span className="font-clash text-[120px] font-light text-foreground/[0.03] dark:text-white/[0.02] tracking-tighter leading-none select-none">
                  04
                </span>
                <span className="font-mono text-[9px] text-foreground/30 tracking-[0.2em] uppercase mt-2">
                  STAGE // SYNC_ONBOARD
                </span>
              </div>

              <div className="w-full md:w-1/2 pr-24 md:pr-20 pl-24 md:pl-0 text-left flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full rounded-[2rem] border border-transparent dark:border-white/5 bg-transparent p-8 md:p-10 relative"
                >
                  <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400 tracking-widest uppercase block mb-3">
                    04 // IMMEDIATE ONBOARDING
                  </span>
                  <h4 className="font-clash text-2xl font-medium text-foreground mb-4">
                    Instant Integration
                  </h4>
                  <p className="text-foreground/60 text-sm font-light leading-relaxed">
                    Review candidates on a structured screen. Click to instantly sync calendars and set up your initial assessment call.
                  </p>
                </motion.div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
