import SectionHeader from "@/components/SectionHeader";
import { SectionBackdrop } from "@/components/ui/SectionDecor";
import { ReactNode } from "react";

export const CONTAINER =
  "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 w-full";

export function Section({
  id,
  className = "",
  children,
  decor = true,
  decorSide = "section",
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  decor?: boolean;
  decorSide?: "section" | "section-right";
}) {
  return (
    <section
      id={id}
      className={`${CONTAINER} relative overflow-hidden py-12 sm:py-16 lg:py-20 ${className}`}
    >
      {decor && <SectionBackdrop pattern={decorSide} />}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

export function SectionWithHeader({
  id,
  label,
  title,
  sub,
  children,
  className = "",
  decorSide = "section",
}: {
  id?: string;
  label: string;
  title: string;
  sub?: string;
  children: ReactNode;
  className?: string;
  decorSide?: "section" | "section-right";
}) {
  return (
    <Section id={id} className={className} decorSide={decorSide}>
      <SectionHeader label={label} title={title} sub={sub} />
      {children}
    </Section>
  );
}
