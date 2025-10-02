import React from "react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description?: string;
  onClick?: () => void;
  imageSrc?: string;
  techStack?: string[]; 
};

export default function ProjectCard({ title, description, onClick, imageSrc }: ProjectCardProps) {
  return (
    <button onClick={onClick} className="group relative w-full overflow-hidden rounded-2xl bg-[color:var(--color-card)] text-left text-white shadow-sm transition hover:-translate-y-1">
      <div className="relative h-52 w-full">
        {imageSrc ? (
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700/40 to-slate-600/40">📦</div>
        )}
      </div>
      <div className="absolute inset-x-1 bottom-1 z-10 rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-none">{title}</h3>
            {description ? <p className="text-[11px] text-white/80">{description}</p> : null}
          </div>
          <span className="rounded-md bg-black/30 px-2 py-1 text-[11px]">View</span>
        </div>
      </div>
    </button>
  );
}


