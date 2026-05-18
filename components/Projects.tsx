import FadeIn from "@/components/ui/FadeIn";
import HoverCard from "@/components/ui/HoverCard";
import { SectionWithHeader } from "@/components/ui/Section";
import { projects, tagClass } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <SectionWithHeader
      id="projects"
      label="Work"
      title="Featured Projects"
      sub="Explore the Depths of My Portfolio and Experience the Fusion of Artistry and Innovation."
      decorSide="section"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={(i % 3) * 0.08}>
            <HoverCard className="rounded-2xl overflow-hidden cursor-pointer h-full">
              <div
                className="h-36 sm:h-40 flex items-center justify-center text-5xl relative"
                style={{ background: p.gradient, color: p.color }}
              >
                <Image src={p.image?.src || ""} alt={p.title} width={500} height={500} />
              </div>  
              <div className="p-4 sm:p-5">
                <h3 className="font-syne font-bold text-sm text-white mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs leading-relaxed mb-3 text-muted">{p.desc}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {p.tags.map((t) => (
                    <span
                      key={t.label}
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${tagClass[t.type]}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </HoverCard>
          </FadeIn>
        ))}
      </div>
    </SectionWithHeader>
  );
}
