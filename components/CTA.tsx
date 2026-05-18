"use client";

import FadeIn from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Button } from "antd";

export default function CTA() {
  return (
    <Section className="!py-8 sm:!py-10" decorSide="section-right">
      <FadeIn>
        <div className="text-center rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-12 sm:py-20 bg-gradient-to-br from-cyan-400/5 to-violet-600/5 border border-white/10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-accent">
            Let&apos;s Work Together
          </p>
          <h2
            className="font-syne font-black text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            REACH OUT ANYTIME!
          </h2>
          <p className="text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed text-muted">
            I&apos;d love to hear about your project! Whether you need a developer or a
            full-stack team, let&apos;s make something amazing together.
          </p>
          <Button type="primary" size="large" href="#contact">
            Start a Project →
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
