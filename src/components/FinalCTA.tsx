"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setStep(2);
    }
  };

  return (
    <section id="apply" className="py-40 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="relative rounded-[3rem] border border-transparent dark:border-white/5 overflow-hidden glass bg-white/40 dark:bg-white/[0.01] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center shadow-[0_16px_40px_rgba(0,0,0,0.03)] dark:shadow-none">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 dark:bg-white/[0.02] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

          {/* Left Side: Pitch Copy */}
          <div className="text-left relative z-10">
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-medium text-foreground tracking-tight leading-[1.1] mb-6 drop-shadow-sm dark:drop-shadow-lg">
              Begin Structuring <br />
              <span className="text-foreground/40">Your Mandate.</span>
            </h2>
            <p className="text-foreground/60 text-lg font-light leading-relaxed max-w-md">
              Schedule a private consultation to outline your specific requirements and explore our vetted pipeline of top-tier finance professionals.
            </p>
          </div>

          {/* Right Side: Minimal Booking Form */}
          <div className="relative z-10 w-full max-w-md lg:ml-auto">
            <div className="bg-white/80 dark:bg-black/40 backdrop-blur-3xl border border-transparent dark:border-white/10 rounded-[2.5rem] p-10 shadow-[0_16px_40px_rgba(0,0,0,0.06)] dark:shadow-2xl">
              
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.form
                    key="step-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleBook}
                    className="flex flex-col gap-10 text-left"
                  >
                    <div>
                      <h4 className="text-3xl font-clash font-medium text-foreground tracking-wide">
                        Request Access
                      </h4>
                    </div>

                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-foreground/40 uppercase tracking-widest">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border-b border-foreground/10 dark:border-white/10 focus:border-foreground/40 dark:focus:border-white/40 py-3 text-lg text-foreground font-light outline-none transition-colors placeholder-foreground/20 dark:placeholder-white/10"
                          placeholder="Alexander Reed"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono text-foreground/40 uppercase tracking-widest">Work Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border-b border-foreground/10 dark:border-white/10 focus:border-foreground/40 dark:focus:border-white/40 py-3 text-lg text-foreground font-light outline-none transition-colors placeholder-foreground/20 dark:placeholder-white/10"
                          placeholder="alexander@firm.com"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 py-5 rounded-full text-base font-medium text-background bg-foreground hover:opacity-90 transition-all mt-4 hover:scale-[1.02] shadow-lg shadow-foreground/10"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-start text-left gap-8 py-6"
                  >
                    <div className="w-16 h-16 rounded-full border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-clash text-4xl font-medium text-foreground mb-4">Request Received</h4>
                      <p className="text-lg text-foreground/60 font-light leading-relaxed">
                        We will review your details and reach out to <span className="text-foreground font-medium">{formData.email}</span> shortly to coordinate a time.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
