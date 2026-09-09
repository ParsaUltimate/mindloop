import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { useLocale } from "../lib/LocaleContext";

export function Navbar() {
  const { locale, setLocale, t, isRtl } = useLocale();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-8 md:px-28 py-4 flex items-center justify-between pointer-events-auto">
      {/* Left/Right: Logo based on RTL */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-foreground/60">
          <div className="w-3 h-3 rounded-full border border-foreground/60" />
        </div>
        <span className="font-bold text-lg tracking-tight">Mindloop</span>
      </div>

      {/* Center: Links (Hidden on small screens) */}
      <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#home" className="hover:text-foreground transition-colors">{t.nav.home}</a>
        <span>&bull;</span>
        <a href="#how" className="hover:text-foreground transition-colors">{t.nav.howItWorks}</a>
        <span>&bull;</span>
        <a href="#philosophy" className="hover:text-foreground transition-colors">{t.nav.philosophy}</a>
        <span>&bull;</span>
        <a href="#cases" className="hover:text-foreground transition-colors">{t.nav.cases}</a>
      </div>

      {/* Right/Left: Socials */}
      <div className="flex items-center gap-2">
        <a href="#" className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-colors">
          <Instagram className="w-4 h-4 text-foreground/80" />
        </a>
        <a href="#" className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-colors">
          <Linkedin className="w-4 h-4 text-foreground/80" />
        </a>
        <a href="#" className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-colors">
          <Twitter className="w-4 h-4 text-foreground/80" />
        </a>
      </div>
    </nav>
  );
}
