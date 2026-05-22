"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building, DollarSign } from "lucide-react";

export default function LiveOpportunities() {
  return (
    <section id="opportunities" className="py-48 relative overflow-hidden">
      {/* Localized Spotlights */}
      <div 
        className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[220px] pointer-events-none animate-ambient-shift-reverse" 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <span className="text-[11px] tracking-[0.25em] font-mono text-emerald-600 dark:text-emerald-400 uppercase">Live Mandates</span>
            <h2 className="font-clash text-5xl sm:text-6xl md:text-[80px] font-medium leading-[0.95] tracking-tighter text-foreground mt-6">
              Exclusive Opportunities.
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-mono text-foreground/50 hover:text-foreground transition-colors group self-start md:self-end border-b border-foreground/10 pb-1">
            View All Mandates
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Asymmetrical Registry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Featured Hero Mandate (VP of Finance - Spans 8 Columns in Large Viewport) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative lg:col-span-8 rounded-[2rem] border border-foreground/10 dark:border-white/10 bg-foreground/5 dark:bg-black/40 overflow-hidden backdrop-blur-3xl shadow-2xl p-10 md:p-12 cursor-pointer flex flex-col justify-between min-h-[450px]"
          >
            {/* Ambient inner soft green spotlight glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] via-transparent to-transparent pointer-events-none" />
            
            {/* Top Row: Meta Tags & Coordinates */}
            <div className="flex justify-between items-start relative z-10 w-full">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[9px] font-mono text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
                  Featured Mandate
                </span>
                <span className="px-4 py-1.5 rounded-full border border-foreground/5 bg-foreground/[0.03] text-[9px] font-mono text-foreground/50 tracking-widest uppercase">
                  Retained
                </span>
              </div>
              
              <div className="flex flex-col items-end text-right font-mono text-[8px] text-foreground/30">
                <span>REF // VPF-908</span>
                <span className="text-emerald-500 mt-1 uppercase font-semibold">Active Search</span>
              </div>
            </div>

            {/* Middle Row: Content and Grid Details */}
            <div className="relative z-10 my-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                <span className="text-xs font-mono text-foreground/45 uppercase tracking-widest block mb-2">Series C Fintech</span>
                <h3 className="font-clash text-4xl font-medium text-foreground tracking-tight">
                  VP of Finance & Operations
                </h3>
                <div className="flex items-center gap-3 text-sm text-foreground/50 font-light mt-4">
                  <MapPin className="w-4 h-4 text-foreground/35" />
                  New York, NY (Hybrid)
                </div>
              </div>

              {/* In-Card Metadata List */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-[9px] text-foreground/40 border-l border-foreground/10 pl-6 self-start md:self-auto">
                <div>
                  <span className="text-foreground/30 block">ADVISOR TIER</span>
                  <span className="text-foreground/75 mt-0.5 block font-medium">LBO / Cap Markets</span>
                </div>
                <div>
                  <span className="text-foreground/30 block">STATUS</span>
                  <span className="text-emerald-600 dark:text-emerald-400 mt-0.5 block font-semibold">VETTING PASS</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Comp & Action Button */}
            <div className="relative z-10 flex justify-between items-end border-t border-foreground/5 dark:border-white/5 pt-8">
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-foreground/30 uppercase tracking-widest mb-1">Target Package</span>
                <span className="text-2xl text-emerald-600 dark:text-emerald-400 font-mono tracking-tight">$250k - $300k + Equity</span>
              </div>
              <div className="w-12 h-12 rounded-full border border-foreground/10 dark:border-white/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-500">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: PE Associate (Supporting Mandate - 4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="group relative lg:col-span-4 rounded-[2rem] border border-foreground/5 dark:border-white/5 bg-gradient-to-br from-foreground/[0.02] via-foreground/[0.005] to-transparent dark:from-white/[0.02] dark:via-white/[0.005] dark:to-transparent overflow-hidden backdrop-blur-3xl shadow-xl p-10 cursor-pointer flex flex-col justify-between min-h-[450px]"
          >
            <div className="flex justify-between items-start relative z-10 w-full">
              <span className="px-3 py-1 rounded-full border border-foreground/5 bg-foreground/[0.03] text-[9px] font-mono text-foreground/50 tracking-widest uppercase">
                London, UK (On-site)
              </span>
              <span className="font-mono text-[8px] text-foreground/30">REF // PEA-087</span>
            </div>

            <div className="relative z-10 my-8">
              <span className="text-[10px] font-mono text-foreground/45 uppercase tracking-widest block mb-2">Top Tier Mega-Fund</span>
              <h3 className="font-clash text-2xl font-medium text-foreground tracking-tight">
                Private Equity Associate
              </h3>
              <p className="text-foreground/50 text-xs font-light mt-4 leading-relaxed">
                Direct deal execution, financial modeling, portfolio monitoring, and investment thesis compilation.
              </p>
            </div>

            <div className="relative z-10 flex justify-between items-end border-t border-foreground/5 dark:border-white/5 pt-6">
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-foreground/30 uppercase tracking-widest mb-1">Target Package</span>
                <span className="text-lg text-foreground/80 font-mono tracking-tight">£180k + Bonus</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-foreground/10 dark:border-white/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Strategic CFO (Supporting Mandate - 4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group relative lg:col-span-4 rounded-[2rem] border border-foreground/5 dark:border-white/5 bg-gradient-to-br from-foreground/[0.02] via-foreground/[0.005] to-transparent dark:from-white/[0.02] dark:via-white/[0.005] dark:to-transparent overflow-hidden backdrop-blur-3xl shadow-xl p-10 cursor-pointer flex flex-col justify-between min-h-[450px]"
          >
            <div className="flex justify-between items-start relative z-10 w-full">
              <span className="px-3 py-1 rounded-full border border-foreground/5 bg-foreground/[0.03] text-[9px] font-mono text-foreground/50 tracking-widest uppercase">
                Remote (US)
              </span>
              <span className="font-mono text-[8px] text-foreground/30">REF // CFO-112</span>
            </div>

            <div className="relative z-10 my-8">
              <span className="text-[10px] font-mono text-foreground/45 uppercase tracking-widest block mb-2">Pre-IPO SaaS</span>
              <h3 className="font-clash text-2xl font-medium text-foreground tracking-tight">
                Strategic Portfolio CFO
              </h3>
              <p className="text-foreground/50 text-xs font-light mt-4 leading-relaxed">
                Fundraising, strategic modeling, business planning, and board-level reporting.
              </p>
            </div>

            <div className="relative z-10 flex justify-between items-end border-t border-foreground/5 dark:border-white/5 pt-6">
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-foreground/30 uppercase tracking-widest mb-1">Target Package</span>
                <span className="text-lg text-foreground/80 font-mono tracking-tight">$350k + Equity</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-foreground/10 dark:border-white/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
