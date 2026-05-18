"use client";

import { motion } from "framer-motion";

type SplashScreenProps = {
  name?: string;
  role?: string;
};

export default function SplashScreen({
  name = "AAMIR",
  role = "FULL STACK DEVELOPER",
}: SplashScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-syne font-black text-white uppercase tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 5.5rem)" }}
      >
        {name}
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="w-16 sm:w-20 h-px bg-white/90 my-5 sm:my-6 origin-center"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-white/90 text-xs sm:text-sm font-medium uppercase tracking-[0.35em] sm:tracking-[0.45em]"
      >
        {role}
      </motion.p>
    </motion.div>
  );
}
