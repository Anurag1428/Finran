"use client";

import { Terminal, ShieldAlert, Cpu, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-foreground/10 pt-24 pb-12 z-10 transition-colors duration-500 overflow-hidden font-mono text-[10px]">
      
      {/* Subtle bottom-up atmospheric mesh gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-emerald-500/[0.02] dark:from-emerald-500/[0.01] to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Top Section: High-Density Bloomberg Terminal System Telemetry */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-foreground/10 pb-12 mb-16 text-foreground/45">
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-foreground/30">
              <Terminal className="w-3.5 h-3.5" />
              <span className="tracking-[0.2em] uppercase font-semibold text-[8px]">SYSTEM STATUS</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-foreground font-light text-[9px]">OPERATIONAL // NODE_V2</span>
            </div>
            <span className="text-foreground/30 text-[8px] mt-0.5">Sync Latency: 0.04s // SEC_VET</span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-foreground/30">
              <Globe className="w-3.5 h-3.5" />
              <span className="tracking-[0.2em] uppercase font-semibold text-[8px]">GLOBAL REGISTRY</span>
            </div>
            <span className="text-foreground font-light text-[9px] mt-1.5 uppercase">Mumbai // Maharashtra</span>
            <span className="text-foreground/30 text-[8px] mt-0.5">HQ & Operations Center</span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-foreground/30">
              <Cpu className="w-3.5 h-3.5" />
              <span className="tracking-[0.2em] uppercase font-semibold text-[8px]">COMPLIANCE ENGINE</span>
            </div>
            <span className="text-foreground font-light text-[9px] mt-1.5">SEC / FINRA Vetting</span>
            <span className="text-foreground/30 text-[8px] mt-0.5">Audit status: 100% compliant</span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-foreground/30">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span className="tracking-[0.2em] uppercase font-semibold text-[8px]">CAPITAL INDEX</span>
            </div>
            <span className="text-foreground font-light text-[9px] mt-1.5">Underwritten: $4.8B+</span>
            <span className="text-foreground/30 text-[8px] mt-0.5">Valuation delta: Class-1 Secure</span>
          </div>

        </div>

        {/* Middle Section: Asymmetric Brand & Registry Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-16 border-b border-foreground/10 mb-12">
          
          {/* Brand & Mandate Scope (L-Span: 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            <span className="font-clash font-medium text-3xl tracking-wide text-foreground flex items-center gap-2">
              Finroles
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            </span>
            <p className="text-foreground/50 text-sm font-light leading-relaxed max-w-sm font-satoshi mt-2">
              The modern private capital search infrastructure. We provide elite financial organizations with verified candidates mapped directly to deal lifecycle phases.
            </p>
            <div className="flex flex-col gap-1 text-[10px] text-foreground/40 mt-4 font-mono">
              <span className="flex items-center gap-2">E // piyush@finroles.com | ishant@finroles.com</span>
              <span className="flex items-center gap-2">P // +91 9051902574</span>
              <span className="flex items-center gap-2">HQ // Mumbai, Maharashtra</span>
            </div>
          </div>

          {/* Registry Index Links (L-Span: 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-8">
            
            <div className="flex flex-col gap-6 text-left">
              <span className="text-[9px] font-mono text-foreground/30 uppercase tracking-[0.25em] font-semibold">
                01 // PLATFORM
              </span>
              <ul className="flex flex-col gap-3.5 text-[11px] font-satoshi font-light">
                <li><a href="#sectors" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Sectors Vetted</a></li>
                <li><a href="#vetting" className="text-foreground/60 hover:text-foreground transition-colors duration-300">How It Works</a></li>
                <li><a href="#opportunities" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Active Mandates</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 text-left">
              <span className="text-[9px] font-mono text-foreground/30 uppercase tracking-[0.25em] font-semibold">
                02 // GOVERNANCE
              </span>
              <ul className="flex flex-col gap-3.5 text-[11px] font-satoshi font-light">
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">SEC Alignment</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Audit Protocol</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Partnerships</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 text-left">
              <span className="text-[9px] font-mono text-foreground/30 uppercase tracking-[0.25em] font-semibold">
                03 // LEGAL & T&C
              </span>
              <ul className="flex flex-col gap-3.5 text-[11px] font-satoshi font-light">
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Dossier NDA</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Terms of Registry</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: SEC Filing Style Legal Disclaimer & Clock */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[9px] text-foreground/30 leading-relaxed font-mono">
          <div className="max-w-3xl">
            <span className="font-semibold text-foreground/50 block mb-1">CONFIDENTIALITY & REGULATORY NOTICE</span>
            <span>
              All transactional parameters, candidate profiles, and placement dossiers managed through the Finroles network are protected by multi-factor encryption, strict non-disclosure protocols, and SEC-compliant data transfer frameworks. Access to active search mandates is restricted exclusively to cleared institutional capital partners and verified candidates.
            </span>
          </div>

          <div className="flex flex-col items-end text-right shrink-0">
            <span>© {currentYear} Finroles Inc. // ALL RIGHTS RESERVED</span>
            <span className="text-foreground/45 mt-1 font-semibold">BUILD VER // 4.8.9-PROD (UTC-5)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
