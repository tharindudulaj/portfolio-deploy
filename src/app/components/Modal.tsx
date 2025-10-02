"use client";

import React, { useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-[min(90vw,720px)] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1a] text-white shadow-2xl">
        <header className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <h3 className="text-base font-semibold">{title}</h3>
          <button aria-label="Close" onClick={onClose} className="rounded-md px-2 py-1 text-white/70 hover:bg-white/10">✕</button>
        </header>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}


