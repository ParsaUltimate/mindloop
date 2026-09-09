import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useLocale } from "../lib/LocaleContext";

interface AnimatedWordProps {
  key?: React.Key | number;
  children: React.ReactNode; 
  progress: MotionValue<number>; 
  start: number; 
  end: number;
  className?: string;
}

function AnimatedWord({ 
  children, 
  progress, 
  start, 
  end,
  className 
}: AnimatedWordProps) {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className={className}>
      {children}
    </motion.span>
  );
}

export function MissionSection() {
  const { t } = useLocale();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const paragraph1 = t.mission.p1;
  const p1Words = paragraph1.split(" ");

  const paragraph2 = t.mission.p2;
  const p2Words = paragraph2.split(" ");

  const highlightWords = t.mission.highlights;

  return (
    <section id="philosophy" ref={containerRef} className="pt-0 pb-32 md:pb-44 container mx-auto px-6 md:px-28 flex flex-col items-center">
      
      {/* Centered Large Video */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[800px] aspect-square rounded-full overflow-hidden mb-32 liquid-glass relative flex items-center justify-center"
      >
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950">
            {/* Spinning loop */}
            <div className="w-10 h-10 rounded-full border border-white/10 border-t-white animate-spin mb-3" />
            <span className="text-xs tracking-widest text-muted-foreground uppercase">{t.mission.loadingVideo}</span>
          </div>
        )}
        <video
          autoPlay
          muted
          loop
          playsInline
          onPlay={() => setIsVideoLoaded(true)}
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover scale-[1.02] transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          src="/videos/mission.mp4"
        />
      </motion.div>

      {/* Scroll Reveal Text */}
      <div className="max-w-4xl text-center flex flex-col gap-10">
        
        <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-[1.3] flex flex-wrap justify-center gap-x-[0.25em] gap-y-2">
          {p1Words.map((word, i) => {
            const start = i / (p1Words.length + p2Words.length);
            const end = start + 0.05;
            // Clean Persian & English punctuation characters
            const cleanWord = word.replace(/[—,.،؛؟]/g, "");
            const isHighlight = highlightWords.includes(cleanWord);
            
            return (
              <AnimatedWord 
                key={i} 
                progress={scrollYProgress}
                start={start}
                end={end}
                className={isHighlight ? "text-foreground" : "text-[hsl(var(--hero-subtitle))]"}
              >
                {word}
              </AnimatedWord>
            );
          })}
        </p>

        <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.4] flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 text-[hsl(var(--hero-subtitle))]">
          {p2Words.map((word, i) => {
            const indexOffset = p1Words.length;
            const start = (i + indexOffset) / (p1Words.length + p2Words.length);
            const end = start + 0.05;
            return (
              <AnimatedWord 
                key={i} 
                progress={scrollYProgress}
                start={start}
                end={end}
              >
                {word}
              </AnimatedWord>
            );
          })}
        </p>

      </div>
    </section>
  );
}
