"use client";

import {
  SiBitcoin,
  SiEthereum,
  SiNextdotjs,
  SiNodedotjs,
  SiPolygon,
  SiReact,
  SiSolana,
  SiTypescript,
} from "react-icons/si";

type FloatingIconProps = {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = { sm: "text-3xl", md: "text-4xl sm:text-5xl", lg: "text-5xl sm:text-6xl" };

function FloatingIcon({
  children,
  className = "",
  delay = "0s",
  size = "md",
}: FloatingIconProps) {
  return (
    <div
      className={`absolute pointer-events-none select-none hero-floating-icon animate-float ${sizeMap[size]} ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden
    >
      {children}
    </div>
  );
}

/** Blurred tech logos scattered in the hero background (reference layout) */
export function HeroBackgroundIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      <FloatingIcon className="top-[6%] left-[2%] sm:left-[6%] text-[#9945FF]" delay="0s" size="md">
        <SiSolana />
      </FloatingIcon>
      <FloatingIcon
        className="top-[28%] left-[38%] sm:left-[42%] text-[#8247E5]"
        delay="-1.2s"
        size="lg"
      >
        <SiPolygon />
      </FloatingIcon>
      <FloatingIcon
        className="bottom-[22%] left-[30%] sm:left-[36%] text-[#F7931A]"
        delay="-2s"
        size="md"
      >
        <SiBitcoin />
      </FloatingIcon>
      <FloatingIcon
        className="top-[10%] right-[4%] sm:right-[10%] text-[#627EEA]"
        delay="-0.8s"
        size="md"
      >
        <SiEthereum />
      </FloatingIcon>
      <FloatingIcon
        className="bottom-[18%] right-[6%] sm:right-[14%] text-[#00C08B]"
        delay="-1.6s"
        size="sm"
      >
        <SiNodedotjs />
      </FloatingIcon>
      <FloatingIcon
        className="top-[55%] right-[22%] hidden lg:block text-white/30"
        delay="-2.4s"
        size="sm"
      >
        <SiNextdotjs />
      </FloatingIcon>
      <FloatingIcon
        className="top-[48%] left-[12%] hidden md:block text-[#3178C6]"
        delay="-0.4s"
        size="sm"
      >
        <SiTypescript />
      </FloatingIcon>
    </div>
  );
}

/** Glowing React logo with continuous rotation */
export function RotatingReactIcon() {
  return (
    <div
      className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full bg-cyan-400/25 blur-xl scale-125" />
      <div className="absolute inset-1 rounded-full border border-cyan-400/20 animate-spin-slow" />
      <SiReact className="relative text-4xl sm:text-5xl text-[#61DAFB] animate-spin-react drop-shadow-[0_0_14px_rgba(0,212,255,0.85)]" />
    </div>
  );
}
