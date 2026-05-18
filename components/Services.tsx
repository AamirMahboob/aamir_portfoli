import FadeIn from "@/components/ui/FadeIn";
import { SectionWithHeader } from "@/components/ui/Section";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <SectionWithHeader
      id="services"
      label="What I Offer"
      title="My Services"
      sub="Full-stack web development from idea to deployment — scalable, high-performance digital experiences."
      decorSide="section"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={(i % 4) * 0.08}>
            <div className="card-base rounded-2xl p-6 sm:p-7 relative overflow-hidden group h-full transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-accent to-accent2" />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: s.bg }}
              >
                {s.icon}
              </div>
              <h3 className="font-syne font-bold text-white text-base mb-2.5">
                {s.title}
              </h3>
              <p className="text-xs leading-relaxed mb-4 text-muted">{s.desc}</p>
              <div className="flex gap-1.5 flex-wrap">
                {s.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-xs bg-white/5 text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWithHeader>
  );
}
