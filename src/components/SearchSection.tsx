import React from "react";
import { Bot, Target, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useLocale } from "../lib/LocaleContext";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function SearchSection() {
  const { t } = useLocale();

  return (
    <section id="how" className="pt-52 md:pt-64 pb-6 md:pb-9 container mx-auto px-6 md:px-28 flex flex-col items-center">
      
      <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-center mb-6 max-w-4xl !leading-[1.1]">
        {t.search.titlePrefix}
        <span className="font-serif italic font-normal text-muted-foreground">{t.search.titleItalic}</span>
        {t.search.titleSuffix}
      </motion.h2>

      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-lg text-center max-w-2xl mb-24">
        {t.search.subtitle}
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 w-full mb-20 max-w-5xl">
        
        {/* Card 1 */}
        <motion.div {...fadeUp(0.3)} className="flex flex-col gap-6">
          <div className="w-full h-[200px] liquid-glass rounded-2xl flex items-center justify-center">
            <Bot className="w-12 h-12 text-foreground/80" strokeWidth={1} />
          </div>
          <div>
            <h3 className="font-semibold text-base mb-2">{t.search.chatgptTitle}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.search.chatgptDesc}
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div {...fadeUp(0.4)} className="flex flex-col gap-6">
          <div className="w-full h-[200px] liquid-glass rounded-2xl flex items-center justify-center">
            <Target className="w-12 h-12 text-foreground/80" strokeWidth={1} />
          </div>
          <div>
            <h3 className="font-semibold text-base mb-2">{t.search.perplexityTitle}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.search.perplexityDesc}
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div {...fadeUp(0.5)} className="flex flex-col gap-6">
          <div className="w-full h-[200px] liquid-glass rounded-2xl flex items-center justify-center relative overflow-hidden">
            <Sparkles className="w-12 h-12 text-foreground/80 relative z-10" strokeWidth={1} />
             {/* Subtle gradient effect inside */}
             <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5" />
          </div>
          <div>
            <h3 className="font-semibold text-base mb-2">{t.search.googleTitle}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.search.googleDesc}
            </p>
          </div>
        </motion.div>

      </div>

      <motion.p {...fadeUp(0.6)} className="text-muted-foreground text-sm text-center">
        {t.search.footerText}
      </motion.p>
      
    </section>
  );
}
