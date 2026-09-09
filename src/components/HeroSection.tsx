import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale } from "../lib/LocaleContext";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

interface HeroSectionProps {
  onVideoLoaded?: () => void;
}

export function HeroSection({ onVideoLoaded }: HeroSectionProps) {
  const { t, isRtl } = useLocale();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current.readyState >= 3) {
        setIsVideoLoaded(true);
        onVideoLoaded?.();
      }
    }
  }, [onVideoLoaded]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setToastMessage(t.hero.errorMessage);
      setStatus("error");
      setTimeout(() => {
        setToastMessage(null);
        setStatus("idle");
      }, 3000);
      return;
    }
    
    setStatus("loading");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      setToastMessage(t.hero.successMessage);
      setEmail("");
      
      // Reset after a moment
      setTimeout(() => {
        setStatus("idle");
        setToastMessage(null);
      }, 4000);
    }, 1200);
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col justify-between pt-32 md:pt-48 pb-12 md:pb-20">
      {/* Fallback Ambient Background */}
      <div className="absolute inset-0 bg-[#070708] z-0 overflow-hidden pointer-events-none">
        {/* Animated fluid-like glowing gradient spots */}
        <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-neutral-100/[0.02] rounded-full blur-[100px] md:blur-[140px] animate-pulse pointer-events-none" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[15%] right-[25%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-neutral-100/[0.015] rounded-full blur-[120px] md:blur-[160px] animate-pulse pointer-events-none" style={{ animationDuration: '9s' }} />
        
        {/* Fine background grid to match Swiss/Minimalist theme */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-40 pointer-events-none" />
      </div>

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onPlay={() => {
          setIsVideoLoaded(true);
          onVideoLoaded?.();
        }}
        onLoadedData={() => {
          setIsVideoLoaded(true);
          onVideoLoaded?.();
        }}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-[1] transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-60" : "opacity-0"
        }`}
        src="/videos/hero.mp4"
      />
      
      {/* Bottom fade to black gradient */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-28 flex flex-col items-center text-center mt-4 md:mt-12 -translate-y-[50%]">
        
        {/* Avatars */}
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
          <div className={`flex ${isRtl ? "space-x-reverse -space-x-2" : "-space-x-2"}`}>
            <img src="/images/avatar-1.jpg" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover grayscale" />
            <img src="/images/avatar-2.jpg" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover grayscale" />
            <img src="/images/avatar-3.jpg" alt="Avatar" className="w-8 h-8 rounded-full border-2 border-background object-cover grayscale" />
          </div>
          <span className="text-muted-foreground text-sm">{t.hero.subscribers}</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6 !leading-[1.1] max-w-4xl">
          {t.hero.headingPrefix}
          <span className="font-serif italic font-normal text-muted-foreground">{t.hero.headingItalic}</span>
          {t.hero.headingSuffix}
        </motion.h1>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.3)} className="text-lg text-[hsl(var(--hero-subtitle))] max-w-2xl">
          {t.hero.subtitle}
        </motion.p>
      </div>

      {/* Form Bottom */}
      <div className="relative z-20 px-6 w-full flex justify-center mt-auto translate-y-[7%]">
        <motion.div {...fadeUp(0.4)} className="w-full max-w-lg">
          <form onSubmit={handleSubmit} className="liquid-glass rounded-full p-2 flex items-center relative overflow-hidden">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status !== "idle"}
              required
              placeholder={t.hero.placeholder} 
              className="flex-1 bg-transparent border-none outline-none px-4 text-foreground placeholder:text-muted-foreground/60 w-full disabled:opacity-50"
            />
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={status !== "idle" && status !== "error"}
              className="bg-foreground text-background font-medium rounded-full px-8 py-3 text-sm shrink-0 whitespace-nowrap min-w-[140px] flex items-center justify-center disabled:opacity-80 cursor-pointer"
            >
              {(status === "idle" || status === "error") && t.hero.subscribe}
              {status === "loading" && (
                <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              )}
              {status === "success" && t.hero.subscribed}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed bottom-6 ${isRtl ? "left-6 md:left-10" : "right-6 md:right-10"} z-50 liquid-glass rounded-xl px-6 py-4 flex items-center gap-3 border border-border/50 text-sm shadow-2xl max-w-sm pointer-events-none`}
          >
            <div className={`w-2 h-2 rounded-full shrink-0 ${status === 'error' ? 'bg-red-500' : 'bg-foreground'}`} />
            <p className="text-foreground">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
