export default function SectionHeader({
  label,
  title,
  sub,
}: {
  label: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="text-center mb-12">
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-3"
        style={{ color: "var(--accent)" }}
      >
        {label}
      </p>
      <h2
        className="font-syne font-black text-white mb-3"
        style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className="text-sm leading-relaxed max-w-2xl mx-auto mb-4"
          style={{ color: "var(--muted)" }}
        >
          {sub}
        </p>
      )}
      <div
        className="w-14 h-0.5 mx-auto rounded-full mt-4"
        style={{ background: "linear-gradient(90deg,var(--accent),var(--accent2))" }}
      />
    </div>
  );
}
