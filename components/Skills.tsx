import FadeIn from "@/components/ui/FadeIn";
import { SectionWithHeader } from "@/components/ui/Section";
import { techs } from "@/lib/data";

export default function Skills() {
  return (
    <SectionWithHeader
      id="skills"
      label="Stack"
      title="Technologies"
      sub="Journey Through My Technological Realm — innovation, diligence, and strategic thinking."
      decorSide="section-right"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {techs.map((t, i) => (
          <FadeIn key={t.name} delay={(i % 5) * 0.05}>
            <div className="card-base flex items-center gap-3 rounded-xl p-3 sm:p-4 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:-translate-y-0.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: t.bg }}
              >
                {t.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
                  {t.name}
                </div>
                <div className="text-xs mt-0.5 text-muted truncate">{t.sub}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWithHeader>
  );
}
