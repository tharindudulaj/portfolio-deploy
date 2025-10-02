import Link from "next/link";
import React from "react";

type IconTileProps = {
  href?: string;
  label: string;
  emoji?: string;
};

export default function IconTile({ href = "#", label, emoji = "✨" }: IconTileProps) {
  const content = (
    <div className="flex w-[64px] select-none flex-col items-center gap-1.5">
      <div className="flex h-[48px] w-[48px] items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#1e293b_0%,#0f172a_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_14px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        <span className="text-xl leading-none">{emoji}</span>
      </div>
      <span className="text-[11px] text-white/90">{label}</span>
    </div>
  );

  if (!href) return content;
  return (
    <Link href={href} className="transition hover:-translate-y-0.5" aria-label={label}>
      {content}
    </Link>
  );
}


