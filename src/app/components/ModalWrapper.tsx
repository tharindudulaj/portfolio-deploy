"use client";

import { useState, ReactNode } from "react";
import Modal from "./Modal";

type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  details: string;
  links?: { label: string; href: string }[];
  techStack?: string[];
};

type Props = {
  project: Project;
  children: ReactNode;
};

export default function ModalWrapper({ project, children }: Props) {
  const [open, setOpen] = useState(false);

  function getLinkClass(label: string) {
    const base =
      "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium shadow transition";
    switch (label.toLowerCase()) {
      case "github":
        return base + " bg-[#24292f] text-white hover:brightness-110";
      case "live demo":
      case "demo":
        return (
          base +
          " bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:brightness-110"
        );
      case "linkedin":
        return base + " bg-[#0a66c2] text-white hover:brightness-110";
      default:
        return (
          base +
          " border border-white/15 bg-white/10 text-white hover:bg-white/15"
        );
    }
  }

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>

      <Modal open={open} onClose={() => setOpen(false)} title={project.title}>
        <div className="space-y-4">
          <p className="text-white/80">{project.details}</p>
          {project.techStack?.length && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/15 bg-white/10 px-2 py-1 text-[11px] text-white/90"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          {project.links?.length && (
            <div className="flex flex-wrap gap-2">
              {project.links.map((l, i) => (
                <a
                  key={`${l.label}-${i}`}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={getLinkClass(l.label)}
                >
                  {l.label.toLowerCase() === "github"
                    ? "🐙"
                    : l.label.toLowerCase().includes("demo")
                    ? "▶️"
                    : "🔗"}
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
