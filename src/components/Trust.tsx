"use client";

export default function Trust() {
  const logos = [
    "Goldman Sachs", "Sequoia Capital", "Andreessen Horowitz", 
    "BlackRock", "Morgan Stanley", "Tiger Global", "Bridgewater", "KKR"
  ];

  return (
    <section className="relative py-20 border-t border-b border-foreground/5 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(128,128,128,0.02)_0%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-foreground/5 border border-transparent dark:border-white/5 rounded-2xl glass bg-white/40 dark:bg-white/[0.01] shadow-[0_8px_32px_rgba(0,0,0,0.02)] dark:shadow-2xl">
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <span className="font-clash text-4xl md:text-5xl font-medium text-foreground mb-2 drop-shadow-sm dark:drop-shadow-lg">4.8h</span>
            <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Avg Match Time</span>
          </div>
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <span className="font-clash text-4xl md:text-5xl font-medium text-foreground mb-2 drop-shadow-sm dark:drop-shadow-lg">98%</span>
            <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Placement Rate</span>
          </div>
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <span className="font-clash text-4xl md:text-5xl font-medium text-foreground mb-2 drop-shadow-sm dark:drop-shadow-lg">$14B</span>
            <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">AUM Supported</span>
          </div>
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <span className="font-clash text-4xl md:text-5xl font-medium text-foreground mb-2 drop-shadow-sm dark:drop-shadow-lg">Top 1%</span>
            <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Vetting Standard</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-x-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="py-6 animate-marquee whitespace-nowrap flex items-center">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span 
              key={i} 
              className="mx-12 font-clash text-2xl md:text-3xl font-medium text-foreground/20 tracking-wide select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
