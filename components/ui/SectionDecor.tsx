import GridPattern from "@/components/ui/GridPattern";

/** Shared accent glows used across sections */
export function SectionGlows() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-12 h-40 w-40 rounded-full bg-violet-600/15 blur-[80px]"
        aria-hidden
      />
    </>
  );
}

export function SectionBackdrop({
  pattern = "section",
}: {
  pattern?: "section" | "section-right";
}) {
  return (
    <>
      <GridPattern variant={pattern} />
      <SectionGlows />
    </>
  );
}
