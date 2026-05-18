import { CONTAINER } from "@/components/ui/Section";
import GridPattern from "@/components/ui/GridPattern";

export default function Footer() {
  return (
    <footer
      className={`${CONTAINER} relative z-10 overflow-hidden text-center py-8 sm:py-10 text-sm border-t border-white/10 text-muted`}
    >
      <GridPattern variant="section-right" className="!top-auto !bottom-0 !h-32 opacity-[0.08]" />
      <p className="relative z-10">
        © {new Date().getFullYear()}{" "}
        <span className="text-accent">Aamir Mahboob</span>. All rights reserved.
        Built with ❤️ and lots of ☕
      </p>
    </footer>
  );
}
