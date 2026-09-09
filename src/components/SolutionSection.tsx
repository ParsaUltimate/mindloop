import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { useLocale } from "../lib/LocaleContext";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function SolutionSection() {
  const { t } = useLocale();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section id="cases" className="py-32 md:py-44 border-t border-border/30 px-6 md:px-28 container mx-auto">
      
      <div className="flex flex-col items-center text-center w-full mb-20">
        <motion.div {...fadeUp(0.1)} className="text-xs tracking-[3px] uppercase text-muted-foreground mb-6">
          {t.solution.tag}
        </motion.div>
        
        <motion.h2 {...fadeUp(0.2)} className="text-4xl md:text-6xl font-medium tracking-tight mb-16 max-w-2xl">
          {t.solution.titlePrefix}
          <span className="font-serif italic font-normal text-muted-foreground">{t.solution.titleItalic}</span>
          {t.solution.titleSuffix}
        </motion.h2>

        <motion.div 
          {...fadeUp(0.3)} 
          className="w-full aspect-[3/1] max-h-[500px] border border-border/20 rounded-2xl overflow-hidden mb-24 liquid-glass relative flex items-center justify-center"
        >
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950">
              <div className="w-8 h-8 rounded-full border border-white/10 border-t-white animate-spin mb-3" />
              <span className="text-xs tracking-widest text-muted-foreground uppercase">{t.solution.loadingVideo}</span>
            </div>
          )}
          <video
            autoPlay
            muted
            loop
            playsInline
            onPlay={() => setIsVideoLoaded(true)}
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
            src="/videos/solution.mp4"
          />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <FeatureCard index={0} title={t.solution.curatedTitle} desc={t.solution.curatedDesc} />
        <FeatureCard index={1} title={t.solution.writerTitle} desc={t.solution.writerDesc} />
        <FeatureCard index={2} title={t.solution.communityTitle} desc={t.solution.communityDesc} />
        <FeatureCard index={3} title={t.solution.distTitle} desc={t.solution.distDesc} />
      </div>

    </section>
  );
}

function FeatureCard({ index, title, desc }: { index: number, title: string, desc: string }) {
  return (
    <motion.div {...fadeUp(0.4 + (index * 0.1))} className="flex flex-col gap-3">
      <h3 className="font-semibold text-base">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
