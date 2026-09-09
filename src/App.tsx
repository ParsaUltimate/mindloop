/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SearchSection } from "./components/SearchSection";
import { MissionSection } from "./components/MissionSection";
import { SolutionSection } from "./components/SolutionSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHeroVideoLoaded, setIsHeroVideoLoaded] = useState(false);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background flex flex-col relative">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen 
            key="loading" 
            isHeroVideoLoaded={isHeroVideoLoaded} 
            onComplete={() => setIsLoading(false)} 
          />
        )}
      </AnimatePresence>

      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col"
        style={{ pointerEvents: isLoading ? "none" : "auto" }}
      >
        <Navbar />
        <main className="flex-1">
          <HeroSection onVideoLoaded={() => setIsHeroVideoLoaded(true)} />
          <SearchSection />
          <MissionSection />
          <SolutionSection />
          <CTASection />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}
