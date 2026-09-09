import React from "react";
import { motion } from "motion/react";
import { HLSVideo } from "./HLSVideo";
import { useLocale } from "../lib/LocaleContext";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function CTASection() {
  const { t } = useLocale();

  return (
    <section className="relative py-32 md:py-44 border-t border-border/30 overflow-hidden flex flex-col justify-center min-h-[600px] w-full">
      
      {/* Background Video using HLS */}
      <HLSVideo
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        src="/videos/cta.mp4"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/45 z-[1] backdrop-blur-[2px]" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 container mx-auto">
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-foreground/30 liquid-glass">
            <div className="w-5 h-5 rounded-full border border-foreground/50 bg-foreground/10" />
          </div>
        </motion.div>
        
        <motion.h2 {...fadeUp(0.2)} className="text-5xl md:text-7xl font-sans tracking-tight mb-6">
          {t.cta.headingPrefix}
          <span className="font-serif italic text-muted-foreground font-normal">{t.cta.headingItalic}</span>
          {t.cta.headingSuffix}
        </motion.h2>
        
        <motion.p {...fadeUp(0.3)} className="text-muted-foreground text-lg max-w-md mb-12">
          {t.cta.subtitle}
        </motion.p>
        
        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button 
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-medium rounded-lg px-8 py-3.5 cursor-pointer"
          >
            {t.cta.primaryBtn}
          </motion.button>
          
          <motion.button 
            onClick={() => (document.querySelector('input[type="email"]') as HTMLInputElement | null)?.focus()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass rounded-lg px-8 py-3.5 text-foreground border border-border/50 cursor-pointer"
          >
            {t.cta.secondaryBtn}
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
}
