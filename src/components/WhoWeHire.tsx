"use client";

import { useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

function ArchitecturalCard({ className, children }: { className?: string; children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition(cardRef);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-[2rem] overflow-hidden border border-foreground/5 dark:border-white/5 bg-gradient-to-br from-foreground/[0.02] via-foreground/[0.005] to-transparent dark:from-white/[0.02] dark:via-white/[0.005] dark:to-transparent backdrop-blur-3xl transition-all duration-700 shadow-[0_24px_80px_-15px_rgba(0,0,0,0.02)] dark:shadow-[0_24px_80px_-15px_rgba(0,0,0,0.5)] hover:border-foreground/10 dark:hover:border-white/15",
        className
      )}
    >
      {/* Interactive Radial Spotlight */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(16, 185, 129, 0.04), transparent 60%)`,
        }}
      />
      
      {/* Subtle Internal Reflection Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/10 dark:via-white/10 to-transparent opacity-50" />
      
      <div className="h-full w-full p-8 md:p-12 flex flex-col justify-between relative z-10">
        {children}
      </div>
    </div>
  );
}

export default function WhoWeHire() {
  return (
    <section id="sectors" className="py-48 relative overflow-hidden">
      {/* Ambient Lighting Background */}
      <div 
        className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/5 dark:bg-emerald-600/5 blur-[220px] pointer-events-none animate-ambient-shift-reverse" 
      />
      <div 
        className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[200px] pointer-events-none animate-ambient-shift" 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Editorial Section Header */}
        <div className="max-w-4xl mb-32 border-l-2 border-emerald-500/30 pl-8">
          <span className="text-[11px] tracking-[0.25em] font-mono text-emerald-600 dark:text-emerald-400 uppercase">Target Profiles</span>
          <h2 className="font-clash text-5xl sm:text-6xl md:text-[80px] font-medium leading-[0.95] tracking-tighter text-foreground mt-6">
            Specialized in Elite <br />
            <span className="text-foreground/30 italic font-light">Finance Verticals.</span>
          </h2>
          <p className="text-foreground/50 text-lg mt-8 font-light max-w-2xl leading-relaxed tracking-wide">
            We operate exclusively in high-fidelity placements. Our recruitment methodology targets specialized roles requiring architectural precision and rigorous validation.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Investment Bankers (Dominant/Heroic - 8 Columns) */}
          <ArchitecturalCard className="lg:col-span-8 min-h-[500px]">
            <div className="flex flex-col justify-between h-full gap-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div>
                  <span className="text-[9px] font-mono text-blue-600 dark:text-blue-400 tracking-[0.25em] uppercase">
                    M&A / CAPITAL MARKETS
                  </span>
                  <h3 className="font-clash text-3xl md:text-4xl font-medium text-foreground mt-3 tracking-tight">
                    Investment Bankers
                  </h3>
                  <p className="text-foreground/60 text-base font-light leading-relaxed mt-4 max-w-md">
                    Director and Associate-level leaders with deep expertise in capital allocation, LBO structuring, and complex deal lifecycle execution.
                  </p>
                </div>

                {/* Micro Metadata Annotation */}
                <div className="flex flex-col items-end text-right font-mono text-[9px] text-foreground/40 self-end md:self-start">
                  <span>REF // M&A-CLASS-8</span>
                  <span className="text-emerald-600 dark:text-emerald-400 mt-1 uppercase font-semibold">Active Pipeline</span>
                </div>
              </div>

              {/* Deal Flow Visualizer Surface */}
              <div className="relative w-full h-44 rounded-2xl bg-foreground/[0.015] dark:bg-black/30 border border-foreground/5 dark:border-white/5 p-6 overflow-hidden flex flex-col justify-between shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.03] to-transparent pointer-events-none" />
                
                {/* Horizontal Line-Art Flow */}
                <div className="flex justify-between items-center w-full relative z-10 pt-4 px-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                    <span className="font-mono text-[8px] text-foreground/45 uppercase tracking-wider">Origination</span>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/40 to-foreground/10 mx-2" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-foreground/30" />
                    <span className="font-mono text-[8px] text-foreground/45 uppercase tracking-wider">LBO Modeling</span>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-foreground/10 to-foreground/10 mx-2" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-foreground/30" />
                    <span className="font-mono text-[8px] text-foreground/45 uppercase tracking-wider">Diligence</span>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-foreground/10 via-foreground/10 to-transparent mx-2" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                    <span className="font-mono text-[8px] text-foreground/30 uppercase tracking-wider">Syndication</span>
                  </div>
                </div>

                <div className="flex justify-between items-end border-t border-foreground/5 dark:border-white/5 pt-4 font-mono text-[9px] text-foreground/40">
                  <div className="flex gap-4">
                    <span>SECTOR: MID-MARKET</span>
                    <span>TICKET SIZE: $100M - $1B</span>
                  </div>
                  <span className="text-foreground/30 font-light">SYSTEM.SEC_VET // 99.4% MATCH</span>
                </div>
              </div>
            </div>
          </ArchitecturalCard>

          {/* Card 2: Chartered Accountants (Secondary - 4 Columns) */}
          <ArchitecturalCard className="lg:col-span-4 min-h-[500px]">
            <div className="flex flex-col justify-between h-full gap-10">
              <div>
                <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 tracking-[0.25em] uppercase">
                  AUDIT / COMPLIANCE
                </span>
                <h3 className="font-clash text-3xl font-medium text-foreground mt-3 tracking-tight">
                  Chartered Accountants
                </h3>
                <p className="text-foreground/60 text-sm font-light leading-relaxed mt-4">
                  Rigorous corporate controllers and finance chiefs carrying prestigious credentials with big-four experience.
                </p>
              </div>

              {/* Status Ledger Panel */}
              <div className="relative flex flex-col gap-4 p-6 rounded-2xl bg-foreground/[0.015] dark:bg-black/30 border border-foreground/5 dark:border-white/5 font-mono text-[10px] shadow-inner">
                <div className="flex justify-between text-foreground/30 border-b border-foreground/5 dark:border-white/5 pb-3">
                  <span className="tracking-widest">VETTING STEP</span>
                  <span className="tracking-widest">METRIC</span>
                </div>
                <div className="flex justify-between items-center text-foreground/75">
                  <span>Technical Assessment</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium text-[8px] uppercase">
                    PASSED [98.2%]
                  </span>
                </div>
                <div className="flex justify-between items-center text-foreground/75">
                  <span>Regulatory Alignment</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium text-[8px] uppercase">
                    SEC COMPLIANT
                  </span>
                </div>
                <div className="flex justify-between items-center text-foreground/75">
                  <span>Credentials Check</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-medium text-[8px] uppercase">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </ArchitecturalCard>

          {/* Card 3: Portfolio CFOs (Supporting - 4 Columns) */}
          <ArchitecturalCard className="lg:col-span-4 min-h-[500px]">
            <div className="flex flex-col justify-between h-full gap-10">
              <div>
                <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 tracking-[0.25em] uppercase">
                  STRATEGY / PE OPS
                </span>
                <h3 className="font-clash text-3xl font-medium text-foreground mt-3 tracking-tight">
                  Portfolio CFOs
                </h3>
                <p className="text-foreground/60 text-sm font-light leading-relaxed mt-4">
                  Financial leaders with proven experience scaling high-growth startups and restructuring Private Equity portfolio companies.
                </p>
              </div>

              {/* Concentric Circle radar graphic */}
              <div className="relative mt-4 flex items-center justify-between p-6 rounded-2xl bg-foreground/[0.015] dark:bg-black/30 border border-foreground/5 dark:border-white/5 shadow-inner">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" className="text-foreground/5" strokeWidth="1" />
                    <circle cx="18" cy="18" r="12" fill="none" stroke="currentColor" className="text-foreground/5" strokeWidth="1" />
                    <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" className="text-emerald-500" strokeWidth="1" strokeDasharray="100" strokeDashoffset="35" />
                  </svg>
                  <span className="absolute font-mono text-[9px] text-emerald-600 dark:text-emerald-400">1%</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-2xl font-mono font-light text-foreground tracking-tight">Top 1%</span>
                  <span className="text-[8px] font-mono text-foreground/45 tracking-widest uppercase mt-1">Operational Tier</span>
                </div>
              </div>
            </div>
          </ArchitecturalCard>

          {/* Card 4: PE & VC Associates (Secondary - 8 Columns) */}
          <ArchitecturalCard className="lg:col-span-8 min-h-[500px]">
            <div className="flex flex-col justify-between h-full gap-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div>
                  <span className="text-[9px] font-mono text-blue-600 dark:text-blue-400 tracking-[0.25em] uppercase">
                    DUE DILIGENCE / DEALS
                  </span>
                  <h3 className="font-clash text-3xl md:text-4xl font-medium text-foreground mt-3 tracking-tight">
                    PE & VC Associates
                  </h3>
                  <p className="text-foreground/60 text-base font-light leading-relaxed mt-4 max-w-md">
                    Analytic leaders skilled in valuation, building complex financial models, managing data rooms, and underwriting investment theses.
                  </p>
                </div>
                
                <div className="flex flex-col items-end text-right font-mono text-[9px] text-foreground/40 self-end md:self-start">
                  <span>ANALYSIS METRIC</span>
                  <span className="text-blue-600 dark:text-blue-400 mt-1 uppercase font-semibold">Tier-1 Associates</span>
                </div>
              </div>

              {/* Grid Metric Ledger */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 rounded-2xl bg-foreground/[0.015] dark:bg-black/30 border border-foreground/5 dark:border-white/5 flex flex-col justify-center shadow-inner">
                  <span className="text-[8px] font-mono text-foreground/40 tracking-widest uppercase">FINANCIAL MODELING</span>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="text-lg font-mono text-foreground font-medium">99.1%</span>
                    <span className="text-[8px] font-mono text-emerald-600 dark:text-emerald-400 uppercase font-semibold">VERIFIED</span>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-foreground/[0.015] dark:bg-black/30 border border-foreground/5 dark:border-white/5 flex flex-col justify-center shadow-inner">
                  <span className="text-[8px] font-mono text-foreground/40 tracking-widest uppercase">INVESTMENT MEMO</span>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="text-lg font-mono text-foreground font-medium">Grade A</span>
                    <span className="text-[8px] font-mono text-foreground/40 uppercase">EVALUATED</span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-foreground/[0.015] dark:bg-black/30 border border-foreground/5 dark:border-white/5 flex flex-col justify-center shadow-inner">
                  <span className="text-[8px] font-mono text-foreground/40 tracking-widest uppercase">DEAL COUNT</span>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="text-lg font-mono text-foreground font-medium">3+ Executed</span>
                    <span className="text-[8px] font-mono text-blue-600 dark:text-blue-400 uppercase font-semibold">MID-MARKET</span>
                  </div>
                </div>
              </div>
            </div>
          </ArchitecturalCard>

        </div>
      </div>
    </section>
  );
}
