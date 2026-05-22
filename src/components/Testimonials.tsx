"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-40 relative overflow-hidden">
      
      {/* Restrained Cinematic Atmosphere */}
      <div 
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.015] dark:bg-emerald-500/[0.02] rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" 
      />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Restrained Strategic Positioning */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-[9px] font-mono text-foreground/40 tracking-[0.25em] uppercase border-b border-foreground/10 pb-2 mb-8">
              Institutional Network
            </span>
            <h2 className="font-clash text-4xl md:text-5xl font-medium leading-[1.1] text-foreground tracking-tight">
              Embedded<br />
              Inside<br />
              High-<br />
              Performance<br />
              Finance Teams.
            </h2>
            <p className="text-foreground/50 text-sm font-light leading-relaxed mt-8 max-w-sm">
              Finroles operates as the institutional talent infrastructure for private capital, strategic finance, and board-level execution. We deliver vetted operators precision-mapped to your capital strategy and thesis.
            </p>
          </div>

          {/* Right Column: Restrained Document Stack */}
          <div className="lg:col-span-7 relative h-[600px] flex items-center justify-center lg:justify-end">
            
            {/* Soft Background Layer 1 */}
            <motion.div 
              initial={{ opacity: 0, rotateZ: -2, y: 10 }}
              whileInView={{ opacity: 1, rotateZ: -1.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute w-[95%] max-w-[560px] h-[480px] rounded-[1.5rem] border border-foreground/5 bg-foreground/[0.01] backdrop-blur-sm -translate-x-8 translate-y-6 z-0"
            />

            {/* Soft Background Layer 2 */}
            <motion.div 
              initial={{ opacity: 0, rotateZ: 2, y: -10 }}
              whileInView={{ opacity: 1, rotateZ: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
              className="absolute w-[95%] max-w-[560px] h-[480px] rounded-[1.5rem] border border-foreground/5 bg-foreground/[0.015] backdrop-blur-md translate-x-2 -translate-y-2 z-10"
            />

            {/* Primary Case-Study Artifact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[580px] rounded-[1.5rem] border border-foreground/[0.08] dark:border-white/[0.08] bg-background/90 dark:bg-[#0a0a0a]/95 backdrop-blur-xl shadow-xl p-10 z-20 flex flex-col justify-between min-h-[480px]"
            >

              <div className="flex justify-between items-start border-b border-foreground/5 dark:border-white/5 pb-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600/80 dark:text-emerald-500/80" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/40">Case Study Artifact</span>
                </div>
                <div className="flex flex-col text-right font-mono text-[8px] text-foreground/40">
                  <span>REFERENCE ID // AL-994</span>
                  <span className="text-emerald-600/80 dark:text-emerald-500/80 uppercase mt-0.5">Verified Network</span>
                </div>
              </div>

              <div className="py-8">
                <p className="font-satoshi text-xl md:text-2xl text-foreground/90 font-light leading-relaxed tracking-tight">
                  "Finroles became an extension of our operating team. Every candidate arrived calibrated to our investment structure, reporting complexity, and execution velocity."
                </p>
              </div>

              {/* Institutional Metadata Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-foreground/5 dark:border-white/5 font-mono text-[9px]">
                <div>
                  <span className="block text-foreground/30 tracking-[0.2em] uppercase mb-1">PLACEMENTS</span>
                  <span className="block text-foreground/75 text-[10px]">03 Portfolio CFOs</span>
                </div>
                <div>
                  <span className="block text-foreground/30 tracking-[0.2em] uppercase mb-1">SEARCH WINDOW</span>
                  <span className="block text-foreground/75 text-[10px]">21 Days</span>
                </div>
                <div>
                  <span className="block text-foreground/30 tracking-[0.2em] uppercase mb-1">SECTOR</span>
                  <span className="block text-foreground/75 text-[10px]">Fintech / Growth Equity</span>
                </div>
                <div>
                  <span className="block text-foreground/30 tracking-[0.2em] uppercase mb-1">MANDATE TYPE</span>
                  <span className="block text-emerald-600/80 dark:text-emerald-500/80 text-[10px]">RETAINED</span>
                </div>
              </div>

              {/* Author Plate */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center bg-foreground/[0.01]">
                  <span className="font-mono text-[9px] text-foreground/40">SJ</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground tracking-tight">Sarah Jenkins</p>
                  <p className="text-[9px] text-foreground/40 font-mono uppercase tracking-widest mt-0.5">Managing Partner, Alpine Ventures</p>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
