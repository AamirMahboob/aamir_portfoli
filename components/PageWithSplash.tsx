"use client";

import SplashScreen from "@/components/SplashScreen";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

const MIN_SPLASH_MS = 2800;
const MAX_SPLASH_MS = 6000;

export default function PageWithSplash({ children }: { children: ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    const minTimer = setTimeout(() => setMinTimePassed(true), MIN_SPLASH_MS);
    const maxTimer = setTimeout(() => setPageReady(true), MAX_SPLASH_MS);

    const markReady = () => setPageReady(true);

    if (document.readyState === "complete") {
      markReady();
    } else {
      window.addEventListener("load", markReady, { once: true });
    }

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener("load", markReady);
    };
  }, []);

  useEffect(() => {
    if (!minTimePassed || !pageReady) return;

    setShowSplash(false);
    const revealTimer = setTimeout(() => setRevealed(true), 50);
    return () => clearTimeout(revealTimer);
  }, [minTimePassed, pageReady]);

  useEffect(() => {
    document.body.style.overflow = showSplash ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
          >
            <SplashScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mount immediately (hidden) so images & JS hydrate while splash shows */}
      <div
        className={`transition-opacity duration-700 ease-out ${
          revealed ? "opacity-100" : "opacity-0"
        } ${showSplash ? "pointer-events-none" : "pointer-events-auto"}`}
        aria-hidden={showSplash}
      >
        {children}
      </div>
    </>
  );
}
