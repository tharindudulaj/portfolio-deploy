import React from "react";
import Image from "next/image";

type ProfileCardProps = {
  name: string;
  email?: string;
  caption?: string;
  avatarSrc?: string;
};

export default function ProfileCard({ name, email, caption, avatarSrc }: ProfileCardProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--color-card)] shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-30px_rgba(0,0,0,0.6)] transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_30px_80px_-40px_rgba(0,0,0,0.7)]">
      <div className="relative px-8 pb-10 pt-10 text-white">
        {/* Avatar */}
        <div className="absolute left-8 top-6 h-24 w-24 overflow-hidden rounded-full ring-4 ring-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.45)]">
          {avatarSrc ? (
            <Image src={avatarSrc} alt={name} fill className="object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-600" />
          )}
        </div>
        {/* Decorative cloud emboss */}
        <div className="pointer-events-none absolute right-8 top-6 h-20 w-36 opacity-60">
          <div className="absolute left-6 top-6 h-14 w-14 rounded-full bg-black/25 blur-[1px] shadow-inner" />
          <div className="absolute left-0 top-8 h-16 w-16 rounded-full bg-black/25 blur-[1px] shadow-inner" />
          <div className="absolute left-16 top-10 h-12 w-12 rounded-full bg-black/25 blur-[1px] shadow-inner" />
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-semibold leading-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.08)]">{name}</h2>
          {email ? <p className="mt-2 text-white/80">{email}</p> : null}
          <p className="mt-5 text-base font-medium text-white/85">{caption ?? "iCloud Web-only"}</p>
        </div>
      </div>
    </section>
  );
}


