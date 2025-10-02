"use client";

import { useState } from "react";
import IconTile from "@/app/components/IconTile";

type Skill = { label: string; emoji: string };

type SkillsCarouselProps = {
  pages: Skill[][];
};

export default function SkillsCarousel({ pages }: SkillsCarouselProps) {
  const [index, setIndex] = useState(0);
  const page = pages[Math.max(0, Math.min(index, pages.length - 1))] ?? [];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-4 sm:grid-cols-4">
        {page.map((s) => (
          <IconTile key={s.label} label={s.label} emoji={s.emoji} />
        ))}
      </div>
      {pages.length > 1 && (
        <div className="flex items-center gap-2">
          {pages.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}


