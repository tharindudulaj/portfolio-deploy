import React from "react";
import IconBubble from "./IconBubble";

type DashboardCardProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  size?: "default" | "compact";
};

export default function DashboardCard({ title, subtitle, icon, children, size = "default" }: DashboardCardProps) {
  const bodyPadding = "px-6 py-8";
  const bodyFixedH = "h-56"; 

  function pickVariantFromTitle(t: string): "blue" | "yellow" | "green" | "orange" {
    const key = t.toLowerCase();
    if (key.includes("project")) return "green";
    if (key.includes("resume")) return "yellow";
    if (key.includes("contact")) return "blue";
    if (key.includes("skill")) return "orange";
    return "blue";
  }
  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--color-card)] shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-30px_rgba(0,0,0,0.6)] transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_30px_80px_-40px_rgba(0,0,0,0.7)]">
<header className="relative flex items-center gap-3 bg-white/10 px-4 py-3 text-white/90 backdrop-blur-sm">
  <div className="flex items-center">
    {typeof icon === "string" ? (
      <IconBubble emoji={icon} variant={pickVariantFromTitle(title)} />
    ) : (
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10">{icon}</div>
    )}
  </div>
  <div className="flex flex-col">
    <span className="text-sm font-medium">{title}</span>
    {subtitle ? <span className="text-xs text-white/60">{subtitle}</span> : null}
  </div>
</header>

<div className={`${bodyFixedH} ${bodyPadding} text-center text-white/80 bg-black/20 backdrop-blur-sm rounded-b-2xl`}>
  {children}
</div>

    </section>
  );
}


