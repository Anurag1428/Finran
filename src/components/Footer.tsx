"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: [
      { name: "Sectors", href: "#sectors" },
      { name: "Process", href: "#vetting" },
      { name: "Request Access", href: "#apply" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-background border-t border-foreground/5 pt-32 pb-16 relative z-10 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pb-32 border-b border-foreground/5">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            <span className="font-clash font-medium text-2xl tracking-wide text-foreground flex items-center gap-2">
              Finroles
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            </span>
            <p className="text-foreground/50 text-lg font-light leading-relaxed max-w-sm">
              The premier executive placement engine for elite finance talent.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-8 text-left">
                <span className="text-sm font-mono text-foreground/40 uppercase tracking-widest">
                  {title}
                </span>
                <ul className="flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-foreground/70 hover:text-foreground text-base font-light transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-16">
          <div className="text-sm font-light text-foreground/40">
            © {currentYear} Finroles Inc. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
