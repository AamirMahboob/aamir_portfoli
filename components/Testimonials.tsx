"use client";

import FadeIn from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionBackdrop } from "@/components/ui/SectionDecor";
import { testimonials, testimonialsSubtitle } from "@/lib/data";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Rate } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";

function TestimonialCard({ text, stars }: { text: string; stars: number }) {
  return (
    <div className="h-full px-2 sm:px-3">
      <article className="testimonial-glass h-full min-h-[220px] sm:min-h-[240px] rounded-2xl p-6 sm:p-8 flex flex-col">
        <Rate
          disabled
          defaultValue={stars}
          className="!text-[#facc15] !text-sm mb-5 [&_.ant-rate-star]:!mr-0.5"
        />
        <p className="text-sm sm:text-[15px] leading-relaxed text-slate-100 text-left flex-1">
          {text}
        </p>
      </article>
    </div>
  );
}

export default function Testimonials() {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <Section id="testimonials" className="overflow-hidden" decor={false}>
      <SectionBackdrop pattern="section" />

      <FadeIn>
        <header className="relative z-10 text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <h2
            className="font-syne font-black uppercase tracking-[0.12em] mb-5"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)" }}
          >
            <span className="testimonial-outline">CLIENT</span>{" "}
            <span className="text-white">TESTIMONIALS</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300/90 px-2">
            {testimonialsSubtitle}
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="relative z-10 testimonials-carousel -mx-2 sm:-mx-4">
          <Carousel
            ref={carouselRef}
            dots={false}
            infinite
            slidesToShow={3}
            slidesToScroll={1}
            centerMode
            centerPadding="0"
            responsive={[
              {
                breakpoint: 1280,
                settings: { slidesToShow: 3, centerMode: true, centerPadding: "24px" },
              },
              {
                breakpoint: 1024,
                settings: { slidesToShow: 2, centerMode: true, centerPadding: "32px" },
              },
              {
                breakpoint: 640,
                settings: { slidesToShow: 1, centerMode: true, centerPadding: "48px" },
              },
            ]}
          >
            {testimonials.map((t, i) => (
              <div key={i}>
                <TestimonialCard text={t.text} stars={t.stars} />
              </div>
            ))}
          </Carousel>

          <div className="flex justify-end gap-3 mt-8 sm:mt-10 pr-1">
            <button
              type="button"
              onClick={() => carouselRef.current?.prev()}
              className="testimonial-nav-btn"
              aria-label="Previous testimonial"
            >
              <LeftOutlined className="text-sm" />
            </button>
            <button
              type="button"
              onClick={() => carouselRef.current?.next()}
              className="testimonial-nav-btn"
              aria-label="Next testimonial"
            >
              <RightOutlined className="text-sm" />
            </button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
