import React from "react";

type IconBubbleProps = {
  emoji: string;
  variant?: "blue" | "yellow" | "green" | "orange";
  size?: "sm" | "md" | "lg";
};

const variantToGradient: Record<Required<IconBubbleProps>["variant"], string> = {
  blue: "linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)",    // aqua blue
  yellow: "linear-gradient(135deg, #FEE140 90%, #FA709A 100%)", // gold → pink blend
  green: "linear-gradient(135deg, #42E695 0%, #3BB2B8 100%)",  // neon green → teal
  orange: "linear-gradient(135deg, #F7971E 0%, #FF512F 100%)", // orange → red sunset
};

export default function IconBubble({ emoji, variant = "blue", size = "md" }: IconBubbleProps) {
  const sizeClass =
    size === "lg" ? "h-14 w-14 text-2xl" : size === "sm" ? "h-6 w-6 text-xs" : "h-8 w-8 text-base";

  return (
    <div
      className={`relative flex items-center justify-center rounded-xl shadow-lg ring-1 ring-white/30 ${sizeClass}`}
      style={{
        background: variantToGradient[variant],
        boxShadow: "0 4px 15px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.15) inset",
      }}
    >
      {/* glossy shine */}
      <div
        className="absolute inset-0 rounded-xl bg-white/30 opacity-50"
        style={{
          maskImage: "linear-gradient(180deg, white 0%, transparent 70%)",
          WebkitMaskImage: "linear-gradient(180deg, white 0%, transparent 70%)",
        }}
      />
      <span className="relative leading-none drop-shadow-md">{emoji}</span>
    </div>
  );
}
