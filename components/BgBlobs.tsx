import GridPattern from "@/components/ui/GridPattern";

export default function BgBlobs() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <GridPattern variant="full" className="opacity-[0.06]" />

        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 600,
            height: 600,
            background: "#7c3aed",
            top: -100,
            left: -200,
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 500,
            height: 500,
            background: "#00d4ff",
            top: "30%",
            right: -150,
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute rounded-full opacity-15"
          style={{
            width: 400,
            height: 400,
            background: "#f59e0b",
            bottom: "20%",
            left: "10%",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute rounded-full opacity-15"
          style={{
            width: 350,
            height: 350,
            background: "#7c3aed",
            bottom: -80,
            right: "20%",
            filter: "blur(120px)",
          }}
        />
      </div>
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}
