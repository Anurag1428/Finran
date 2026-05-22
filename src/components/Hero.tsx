"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] pt-40 pb-32 flex items-center justify-start overflow-hidden bg-background">
      
      {/* 
        LAYER 1: Background Glow / Noise Layer
      */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay z-0 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      
      {/* Luxury Motion: Slow gradient drift & Cinematic Ambient Diffusion (No neon) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-teal-900/20 blur-[250px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
          x: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-emerald-900/10 blur-[200px] pointer-events-none z-0" 
      />

      {/* 
        LAYER 2 & 3: Portrait Texture Layer & Atmospheric Fog
        Bleeds beneath typography, highly abstracted, hidden institutional presence.
      */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[50%] pointer-events-none z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="relative w-full h-full scale-[1.05] origin-right"
        >
          {/* Asymmetric Radial Mask to hide jawline, shoulders, and hard edges */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse at 60% 40%, black 10%, transparent 70%)",
              maskImage: "radial-gradient(ellipse at 60% 40%, black 10%, transparent 70%)"
            }}
          >
            {/* The Portrait Image (Visibility slightly increased) */}
            <div 
              className="absolute inset-0 bg-[url('/founder.jpg')] bg-cover bg-[center_top] grayscale contrast-[1.15] brightness-[0.6] dark:brightness-[0.45] opacity-50 mix-blend-luminosity blur-[1px]"
            />
            
            {/* Brighten eyes/glasses region specifically */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.08)_0%,transparent_20%)] mix-blend-overlay" />
            
            {/* Faint cinematic rim lighting around the face silhouette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,transparent_20%,rgba(20,184,166,0.05)_50%,transparent_70%)] mix-blend-screen" />

            {/* Atmospheric Emerald Tint & Vignette (Restrained saturation) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-transparent to-teal-900/30 mix-blend-color opacity-60" />
          </div>

          {/* LAYER 2 Overlay: Atmospheric Fog / Glass layer (Reduced central darkness) */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* 
        LAYER 4: Typography Foreground Layer
      */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-16 relative z-20 h-full flex flex-col justify-center">
        
        {/* Soft light sweep over typography (Motion) */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
          className="absolute top-[30%] left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent blur-sm pointer-events-none z-30"
        />

        <div className="relative w-full flex flex-col items-start justify-center h-full pt-10">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-center gap-3 px-3 py-1.5 text-[9px] tracking-[0.4em] text-foreground/40 font-mono mb-10 uppercase border border-foreground/5 bg-foreground/[0.01] backdrop-blur-md rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 animate-pulse" />
            Executive Infrastructure
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-clash text-5xl sm:text-6xl md:text-[85px] lg:text-[95px] font-medium leading-[0.95] tracking-tight text-foreground mb-10 max-w-4xl drop-shadow-lg"
          >
            Hire Elite <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-gradient-mixed italic font-light pr-4">Finance Leaders</span>
              {/* Soft ambient diffusion around Finance Leaders (No neon) */}
              <span className="absolute inset-0 bg-teal-900/10 dark:bg-white/5 blur-[50px] z-0 pointer-events-none" />
            </span> <br />
            at Startup Speed.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground/50 text-base md:text-lg max-w-md mb-16 leading-[1.8] font-light tracking-wide"
          >
            Bypass traditional recruiting noise. Connect with deeply vetted CAs, Investment Bankers, and CFOs in an immersive, high-touch platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-8 w-full sm:w-auto"
          >
            <a
              href="#opportunities"
              className="group flex items-center justify-center gap-4 px-10 py-4 text-xs font-medium text-background bg-foreground hover:bg-foreground/90 transition-all duration-500"
            >
              Explore Mandates
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#vetting"
              className="group flex items-center justify-center gap-4 px-6 py-4 text-xs font-medium text-foreground/60 hover:text-foreground transition-all duration-500"
            >
              <span className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-foreground/30 transition-colors">
                <Play className="w-3 h-3 fill-foreground/40 group-hover:fill-foreground text-transparent translate-x-[1px] transition-colors" />
              </span>
              Vetting Architecture
            </a>
          </motion.div>

        </div>

        {/* 
          Institutional Metadata Node (Replaces Founder ID) 
        */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          className="absolute bottom-10 right-6 md:right-16 flex flex-col items-end text-right z-30 pointer-events-auto font-mono text-[9px]"
        >
          <div className="flex flex-col gap-2 text-foreground/30 uppercase tracking-[0.3em]">
            <span className="flex items-center justify-end gap-2 text-emerald-600/50 dark:text-emerald-500/50 font-medium mb-1">
              <span className="w-1 h-1 rounded-full bg-emerald-500/50 animate-pulse" />
              REFERENCE NODE // ACTIVE
            </span>
            <span className="hover:text-foreground/60 transition-colors cursor-default">EXECUTIVE NETWORK</span>
            <span className="hover:text-foreground/60 transition-colors cursor-default">VERIFIED OPERATOR</span>
            <span className="hover:text-foreground/60 transition-colors cursor-default">INSTITUTIONAL ACCESS</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
