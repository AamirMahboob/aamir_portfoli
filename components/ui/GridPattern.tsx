type GridVariant = "full" | "hero" | "section" | "section-right";

const variantClass: Record<GridVariant, string> = {
  full: "inset-0 opacity-[0.07]",
  hero: "inset-0 sm:inset-auto sm:left-0 sm:top-0 sm:bottom-0 sm:w-[62%] sm:max-w-4xl opacity-[0.14]",
  section: "left-0 top-4 w-[min(420px,70vw)] h-48 opacity-[0.11]",
  "section-right": "right-0 top-8 w-[min(360px,55vw)] h-44 opacity-[0.09]",
};

export default function GridPattern({
  variant = "section",
  className = "",
}: {
  variant?: GridVariant;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute diamond-grid-pattern ${variantClass[variant]} ${className}`}
      aria-hidden
    />
  );
}
