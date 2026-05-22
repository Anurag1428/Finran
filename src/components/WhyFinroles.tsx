"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function WhyFinroles() {
  return (
    <section className="py-48 relative overflow-hidden border-t border-b border-foreground/5 dark:border-white/5">
      {/* Background Ambient Spotlight */}
      <div 
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] pointer-events-none" 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left Side: Deep Architectural 3D Composition */}
        <div className="relative h-[650px] flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md aspect-[4/5]"
            style={{ perspective: "1200px" }}
          >
            {/* Layer 1: Background Silhouette Board */}
            <div className="absolute inset-0 rounded-[2rem] bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 dark:border-white/5 transform -rotate-6 translate-x-6 translate-y-6 blur-[1px] shadow-lg pointer-events-none" />
            
            {/* Layer 2: Secondary Offset Technical Border */}
            <div className="absolute inset-0 rounded-[2rem] border border-dashed border-foreground/10 dark:border-white/10 transform rotate-2 -translate-x-3 translate-y-3 pointer-events-none" />

            {/* Layer 3: Main Architectural Presentation Panel */}
            <div className="absolute inset-0 rounded-[2rem] border border-foreground/10 dark:border-white/10 bg-gradient-to-br from-background/90 via-background/60 to-background/20 dark:from-black/90 dark:via-black/70 dark:to-transparent backdrop-blur-3xl p-10 md:p-12 flex flex-col gap-10 shadow-2xl relative overflow-hidden">
              {/* Internal soft corner highlights */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
              
              {/* Heading Group */}
              <div className="flex items-center gap-5 border-b border-foreground/5 dark:border-white/5 pb-8 relative">
                <div className="w-14 h-14 rounded-full bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-clash text-2xl font-medium text-foreground tracking-tight">Vetting Protocol</h4>
                  <p className="text-[9px] font-mono text-foreground/40 mt-1 uppercase tracking-[0.25em]">STAGE // ACTIVE_STANDARD</p>
                </div>
                
                {/* Visual coordinate badge */}
                <span className="absolute top-0 right-0 font-mono text-[8px] text-foreground/30">REF.09//SEC</span>
              </div>

              {/* Process Checklist */}
              <div className="flex flex-col gap-8">
                
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-1 tracking-tight">Technical Assessment</h5>
                    <p className="text-xs text-foreground/50 leading-relaxed font-light">LBO modeling, 3-statement analysis, and case studies administered by active industry leaders.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-1 tracking-tight">Behavioral Mapping</h5>
                    <p className="text-xs text-foreground/50 leading-relaxed font-light">Deep-dive interviews focusing on conflict resolution, stakeholder management, and leadership.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-1 tracking-tight">Reference Verification</h5>
                    <p className="text-xs text-foreground/50 leading-relaxed font-light">Cryptographically verified background and credential checks across 150+ global databases.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Top Accent Panel */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 rounded-2xl border border-foreground/10 dark:border-white/10 p-5 shadow-2xl flex items-center gap-4 bg-background/80 dark:bg-black/80 backdrop-blur-2xl"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/5 border border-blue-500/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-blue-500 dark:text-blue-400 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-medium text-foreground">Top 1% Accepted</span>
                <span className="text-[8px] font-mono text-foreground/45 uppercase tracking-wider mt-0.5">GLOBAL STANDARD</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Right Side: High-Contrast Editorial Copy */}
        <div className="flex flex-col items-start text-left pl-0 lg:pl-12">
          <span className="text-[11px] tracking-[0.25em] font-mono text-emerald-600 dark:text-emerald-400 uppercase">The Finroles Standard</span>
          <h2 className="font-clash text-4xl sm:text-5xl md:text-[64px] font-medium leading-[1] text-foreground mt-6 tracking-tight">
            Uncompromising <br />
            <span className="text-foreground/30 italic font-light">Quality Control.</span>
          </h2>
          <p className="text-foreground/50 text-lg mt-8 font-light max-w-xl leading-relaxed tracking-wide">
            The traditional recruitment model relies on keyword matching and fast volume. We rely on rigorous, multi-stage human and algorithmic vetting.
          </p>
          <p className="text-foreground/50 text-lg mt-6 font-light max-w-xl leading-relaxed tracking-wide">
            When you receive a candidate from Finroles, they have already been pressure-tested by active industry veterans. You aren't sorting through profiles; you are selecting from the top tier of finance talent.
          </p>
        </div>

      </div>
    </section>
  );
}
