"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Finroles completely changed how we hire for our portfolio companies. We placed three CFOs in under a month, each perfectly mapped to our growth thesis.",
      author: "Sarah Jenkins",
      role: "Managing Partner, Alpine Ventures"
    },
    {
      quote: "The quality of the candidate pipeline is unmatched. Every profile was deeply vetted and technically flawless. We bypassed months of traditional search.",
      author: "David Chen",
      role: "VP Finance, NexaPay"
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative">
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.1)_0%,transparent_50%)] pointer-events-none" 
        style={{ mixBlendMode: 'var(--mesh-blend)' as any }}
      />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col items-center">
        
        <div className="text-center mb-24 relative z-10">
          <span className="text-[10px] font-mono text-emerald-500 dark:text-emerald-400 tracking-widest uppercase drop-shadow-sm dark:drop-shadow-md">The Network</span>
          <h2 className="font-clash text-4xl sm:text-5xl font-medium text-foreground mt-4 tracking-tight drop-shadow-sm dark:drop-shadow-xl">
            Trusted by the Best.
          </h2>
        </div>

        <div className="relative w-full max-w-3xl" style={{ perspective: "1000px" }}>
          
          {/* Back Card (Blurred) */}
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            whileInView={{ opacity: 0.5, y: -20, scale: 0.9 }}
            viewport={{ once: true }}
            className="absolute inset-x-0 top-0 mx-auto w-[90%] glass rounded-3xl border border-transparent dark:border-white/5 p-10 bg-white/40 dark:bg-slate-900/30 blur-[2px] z-0 h-full flex flex-col justify-between shadow-lg"
          >
            <Quote className="w-8 h-8 text-foreground/20 dark:text-white/20 mb-6" />
            <p className="text-xl text-foreground/40 dark:text-white/30 font-light leading-relaxed mb-8">
              "{testimonials[1].quote}"
            </p>
            <div>
              <p className="text-sm font-medium text-foreground/60 dark:text-white/40">{testimonials[1].author}</p>
              <p className="text-xs text-foreground/40 dark:text-white/20 font-mono uppercase tracking-widest mt-1">{testimonials[1].role}</p>
            </div>
          </motion.div>

          {/* Front Card (Focused) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full glass-premium rounded-3xl border border-transparent dark:border-white/10 p-10 md:p-14 bg-white/80 dark:bg-black/80 shadow-[0_16px_40px_rgba(0,0,0,0.06)] dark:shadow-2xl mt-8"
          >
            <div className="absolute top-0 right-0 p-8 font-mono text-[9px] text-foreground/45">
              <span>REFERENCE.ID // VET-029</span>
            </div>

            <Quote className="w-10 h-10 text-emerald-500/40 dark:text-emerald-500/50 mb-8" />
            
            <p className="text-2xl md:text-3xl text-foreground font-light leading-snug mb-12 max-w-2xl">
              "{testimonials[0].quote}"
            </p>
            
            <div className="flex items-center gap-4 border-t border-foreground/10 dark:border-white/10 pt-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 p-[1px]">
                <div className="w-full h-full bg-background rounded-full" />
              </div>
              <div>
                <p className="text-base font-medium text-foreground">{testimonials[0].author}</p>
                <p className="text-xs text-foreground/50 font-mono uppercase tracking-widest mt-1">{testimonials[0].role}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
