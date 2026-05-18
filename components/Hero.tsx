"use client";

import {
  HeroBackgroundIcons,
  RotatingReactIcon,
} from "@/components/hero/HeroFloatingIcons";
import FadeIn from "@/components/ui/FadeIn";
import GridPattern from "@/components/ui/GridPattern";
import { CONTAINER } from "@/components/ui/Section";
import { SectionGlows } from "@/components/ui/SectionDecor";
import { Button, Tag } from "antd";
import Image from "next/image";
import profileImage from "../app/image.jpeg";
import { TypeAnimation } from "react-type-animation";

const socials = [
  { label: "in", title: "LinkedIn" },
  { label: "⌥", title: "GitHub" },
  { label: "𝕏", title: "Twitter" },
  { label: "@", title: "Email" },
];

export default function Hero() {
  return (
    <section id="home" className="relative z-10 min-h-screen overflow-hidden">
      <GridPattern variant="hero" />
      <SectionGlows />
      <HeroBackgroundIcons />

      <div
        className={`${CONTAINER} flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-28 pb-16 sm:pt-32 relative z-10`}
      >
        <div className="flex-1 w-full order-2 lg:order-1">
          <FadeIn>
            <Tag
              color="cyan"
              className="!mb-6 !rounded-full !px-4 !py-1 !text-xs !font-semibold !uppercase !tracking-widest"
            >
              ⚡ Available for Freelance
            </Tag>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-sm font-medium mb-2 text-accent">Hi, I&apos;m</p>
            <h1
              className="font-syne font-black leading-[0.95] mb-3 uppercase tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
            >
              <span className="hero-outline-title block">I&apos;M AAMIR</span>
              <span className="text-white block mt-1">MAHBOOB</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div
              className="font-syne font-bold mb-6 text-white uppercase tracking-wide min-h-[2.5rem] sm:min-h-[3rem]"
              style={{ fontSize: "clamp(1.1rem, 3vw, 2.5rem)" }}
            >
              <span className="text-accent">A </span>
              <TypeAnimation
                sequence={[
                  "FULL STACK DEVELOPER",
                  1500,
                  "REACT DEVELOPER",
                  1500,
                  "NEXT.JS DEVELOPER",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-sm sm:text-base leading-relaxed max-w-xl mb-8 text-muted">
              Hi, I&apos;m Aamir, a{" "}
              <span className="text-slate-200">Full Stack Developer</span>{" "}
              building web applications and websites. I specialize in creating
              modern, data-driven interfaces using{" "}
              <span className="text-slate-200">Next.js, TypeScript</span>, and{" "}
              <span className="text-slate-200">React</span>.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
              <Button
                size="large"
                href="#projects"
                className="!bg-transparent !border-white/20"
              >
                More about me
              </Button>
              <Button
                type="primary"
                size="large"
                href="#contact"
                className="!shadow-[0_0_28px_rgba(255,255,255,0.25)]"
              >
                Hire me
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex items-center gap-4 sm:gap-5">
              <RotatingReactIcon />
              <div className="flex gap-3 flex-wrap">
                {socials.map((s) => (
                  <a
                    key={s.title}
                    href="#"
                    title={s.title}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold border border-white/10 text-muted no-underline transition-all duration-200 hover:border-accent hover:text-accent hover:bg-cyan-400/10"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.2}
          direction="right"
          className="order-1 lg:order-2 flex-shrink-0"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto">
            <div
              className="absolute rounded-full animate-spin-slow"
              style={{
                inset: -16,
                border: "2px solid transparent",
                background:
                  "linear-gradient(135deg,var(--accent),var(--accent2),var(--accent3)) border-box",
                WebkitMask:
                  "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              }}
            />
            <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#7dd3fc]/40 via-[#38bdf8]/20 to-[#0d1829] border-[3px] border-white/20 shadow-[0_0_60px_rgba(0,212,255,0.25)]">
              <Image
                src={profileImage}
                alt="Aamir Mahboob"
                width={300}
                height={300}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <FloatBadge
              color="#00d4ff"
              label="React.js"
              className="top-2 right-0 sm:-right-14"
              delay="0s"
            />
            <FloatBadge
              color="#a855f7"
              label="Next.js"
              className="bottom-12 -left-2 sm:-left-16"
              delay="-1s"
            />
            <FloatBadge
              color="#f59e0b"
              label="TypeScript"
              className="bottom-0 right-0 sm:-right-10"
              delay="-2s"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FloatBadge({
  color,
  label,
  className,
  delay,
}: {
  color: string;
  label: string;
  className: string;
  delay: string;
}) {
  return (
    <div
      className={`absolute hidden sm:flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 bg-[rgba(10,17,32,0.9)] border border-white/10 backdrop-blur-md shadow-lg animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
      />
      {label}
    </div>
  );
}
