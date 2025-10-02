import Link from "next/link";
import Image from "next/image";
import React from "react";

type AppTileProps = {
  href: string;
  title: string;
  iconSrc?: string;
  emoji?: string;
};

export default function AppTile({ href, title, iconSrc, emoji }: AppTileProps) {
  return (
    <Link href={href} className="group">
      <div className="relative flex h-36 w-36 select-none flex-col items-center justify-center rounded-2xl border border-white/60 bg-white/70 p-4 text-center shadow-sm backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:bg-white/80 hover:shadow-md">
        <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-white/70 shadow-inner ring-1 ring-black/5">
          {iconSrc ? (
            <Image src={iconSrc} alt={title} width={32} height={32} />
          ) : (
            <span className="text-2xl">{emoji ?? "✨"}</span>
          )}
        </div>
        <div className="text-sm font-medium text-gray-800">{title}</div>
      </div>
    </Link>
  );
}


