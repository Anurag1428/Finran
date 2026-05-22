"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "#sectors" },
    { name: "Vetting", href: "#vetting" },
    { name: "Mandates", href: "#opportunities" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4",
          scrolled ? "pt-4 pb-4" : "pt-8"
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500",
            scrolled 
              ? "glass-premium bg-white/40 dark:bg-black/60 shadow-lg shadow-black/5 dark:shadow-black/40 backdrop-blur-xl" 
              : "border border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-clash font-semibold text-xl tracking-tight text-foreground flex items-center gap-1.5">
              Finroles
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            </span>
          </a>

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-foreground/60 hover:text-foreground transition-colors duration-300 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-500 to-emerald-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Live Info + CTA */}
          <div className="hidden md:flex items-center gap-4">
            
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <a
              href="#apply"
              className="relative overflow-hidden group flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-semibold text-background bg-foreground transition-all duration-300 hover:text-white dark:hover:text-foreground border border-transparent dark:border-white/10 shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-1">
                Request Access
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1 text-foreground/80 hover:text-foreground transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[76px] z-40 p-4 md:hidden"
          >
            <div className="glass-premium rounded-3xl p-6 flex flex-col gap-6 shadow-2xl bg-background/90 backdrop-blur-3xl border border-foreground/5">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground/70 hover:text-foreground py-2 border-b border-foreground/5"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <a
                  href="#apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 py-3 rounded-full text-sm font-semibold text-background bg-foreground hover:opacity-90 transition-opacity"
                >
                  Request Access
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
