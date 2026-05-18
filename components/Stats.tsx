"use client";

import FadeIn from "@/components/ui/FadeIn";
import { CONTAINER } from "@/components/ui/Section";
import { SectionBackdrop } from "@/components/ui/SectionDecor";
import { stats } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = () => {
            start += 1;
            setCount(start);
            if (start < target) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-syne font-black text-4xl sm:text-5xl text-accent">
      {count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <div
      id="about"
      className={`${CONTAINER} relative z-10 overflow-hidden pb-12 sm:pb-20`}
    >
      <SectionBackdrop pattern="section-right" />
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1}>
            <div className="card-base rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-cyan-400/30">
              <Counter target={s.num} suffix={s.suffix} />
              <div className="mt-1 text-xs sm:text-sm uppercase tracking-widest text-muted">
                {s.label}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
