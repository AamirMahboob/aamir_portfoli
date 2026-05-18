import { ReactNode } from "react";

export default function HoverCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card-base transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 ${className}`}
    >
      {children}
    </div>
  );
}
