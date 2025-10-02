import React from "react";

export default function ICloudBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{
        background:
          "radial-gradient(120% 120% at 20% -10%, rgba(76,175,255,0.25) 0%, transparent 50%)," +
          "radial-gradient(140% 120% at 80% -10%, rgba(0,88,228,0.3) 0%, transparent 55%)," +
          "linear-gradient(180deg, var(--color-bg-dark) 0%, var(--color-bg-blue) 70%)"
      }} />
      <div className="absolute left-1/2 top-1/3 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(0,88,228,0.28), transparent)" }} />
      <div className="absolute right-[-10%] bottom-[-20%] h-[40rem] w-[40rem] rounded-full" style={{ background: "radial-gradient(closest-side, rgba(0,64,193,0.25), transparent)" }} />
      <div className="absolute left-[-15%] bottom-[-10%] h-[30rem] w-[30rem] rounded-full" style={{ background: "radial-gradient(closest-side, rgba(76,175,255,0.2), transparent)" }} />
      {/* Animated space dust */}
      <svg className="space-stars absolute inset-0" width="100%" height="100%">
        {Array.from({ length: 60 }).map((_, i) => (
          <circle key={i} cx={`${(i * 37) % 100}%`} cy={`${(i * 59) % 100}%`} r={Math.max(0.5, (i % 3) * 0.7 + 0.6)} fill="white" opacity="0.6" />
        ))}
      </svg>
      <div className="space-nebula absolute left-[10%] top-[20%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(76,175,255,0.45),transparent_60%)]" />
      <div className="space-nebula absolute right-[5%] top-[10%] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,88,228,0.5),transparent_60%)]" />
      <div className="space-nebula absolute left-[30%] bottom-[5%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(0,64,193,0.45),transparent_60%)]" />
      <div className="absolute inset-0" style={{ background: "rgba(12,35,64,0.35)", backdropFilter: "blur(3px)" }} />
    </div>
  );
}


