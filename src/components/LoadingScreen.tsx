import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale } from "../lib/LocaleContext";

interface LoadingScreenProps {
  key?: string;
  onComplete: () => void;
  isHeroVideoLoaded: boolean;
}

const CRITICAL_VIDEOS = [
  "/videos/hero.mp4",
  "/videos/mission.mp4",
  "/videos/solution.mp4"
];

export function LoadingScreen({ onComplete, isHeroVideoLoaded }: LoadingScreenProps) {
  const { t, locale } = useLocale();
  const [targetProgress, setTargetProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [statusText, setStatusText] = useState(t.loading.init);
  const onCompleteRef = useRef(onComplete);

  // Keep ref up to date
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Smoothly interpolate display progress towards target progress
  useEffect(() => {
    let animationFrameId: number;
    
    const updateProgress = () => {
      setDisplayProgress((prev) => {
        if (prev < targetProgress) {
          // Accelerate progress transition for high-refresh visual feedback
          const diff = targetProgress - prev;
          const step = Math.max(1, Math.ceil(diff * 0.08));
          const next = Math.min(targetProgress, prev + step);
          
          if (next === 100) {
            // Trigger exit transition after a very small delay once 100 is fully hit
            setTimeout(() => {
              onCompleteRef.current();
            }, 400);
          }
          return next;
        }
        return prev;
      });
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetProgress]);

  useEffect(() => {
    // Trigger background preloading of videos without blocking the UI
    CRITICAL_VIDEOS.forEach((url) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = url;
      document.head.appendChild(link);
    });

    // Elegant timed simulation to guarantee smooth early progress
    const steps = [
      { progress: 15, text: t.loading.init, delay: 0 },
      { progress: 45, text: t.loading.typo, delay: 400 },
      { progress: 70, text: t.loading.network, delay: 850 },
      { progress: 85, text: locale === 'fa' ? "در حال آماده‌سازی ویدیوها..." : "Buffering video streams...", delay: 1300 }
    ];

    const timers: number[] = [];

    steps.forEach((step) => {
      const timer = window.setTimeout(() => {
        setTargetProgress((prev) => (prev < 100 ? Math.max(prev, step.progress) : prev));
        setStatusText((prevText) => (targetProgress < 100 ? step.text : prevText));
      }, step.delay);
      timers.push(timer);
    });

    // Fallback safety timeout (6 seconds) to guarantee page load under any conditions
    const fallbackTimer = window.setTimeout(() => {
      setTargetProgress(100);
      setStatusText(t.loading.ready);
    }, 6000);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(fallbackTimer);
    };
  }, [t, locale]);

  // Sync loader completion with actual hero video play readiness
  useEffect(() => {
    if (isHeroVideoLoaded) {
      const timer = window.setTimeout(() => {
        setTargetProgress(100);
        setStatusText(t.loading.ready);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isHeroVideoLoaded, t]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Dynamic ambient grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="flex flex-col items-center gap-8 relative z-10 w-full max-w-[280px]">
        {/* Logo Animation */}
        <motion.div
          className="relative flex items-center justify-center w-14 h-14 rounded-full border border-foreground/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Inner pulsating circle */}
          <motion.div
            className="w-5 h-5 rounded-full border border-foreground/40 bg-foreground/5"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
          />
          {/* Outer rotating accent */}
          <motion.div
            className="absolute inset-[-1px] rounded-full border-t border-r border-foreground/30 opacity-60"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          />
        </motion.div>

        {/* Text Reveal & Metadata */}
        <div className="flex flex-col items-center gap-1.5 w-full text-center">
          <div className="overflow-hidden pb-1">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-sm tracking-[0.3em] uppercase text-foreground font-medium"
            >
              Mindloop
            </motion.div>
          </div>
          
          {/* High-fidelity feedback status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            key={statusText}
            className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase h-4 overflow-hidden text-center max-w-[240px] truncate"
          >
            {statusText}
          </motion.div>
        </div>

        {/* Minimalist Progress Meter */}
        <div className="w-full flex flex-col gap-2 mt-4">
          <div className="h-[2px] w-full bg-foreground/[0.05] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-foreground/60 rounded-full"
              style={{ width: `${displayProgress}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            />
          </div>
          <div className="flex justify-between items-center font-mono text-[10px] text-muted-foreground/50 tracking-wider">
            <span>{t.loading.preload}</span>
            <span className="text-foreground/70 font-medium">{displayProgress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
