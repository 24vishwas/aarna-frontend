import React from "react";
import { cn } from "@/lib/utils";

/** "02 / Projects" — the drawing-sheet marker used to open each section. */
export default function SectionLabel({ index, label, tone = "dark", className }) {
  const isDark = tone === "dark";
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className={cn("eyebrow", isDark ? "text-charcoal/45" : "text-ivory/50")}>{index}</span>
      <span className={cn("h-px w-8 md:w-12", isDark ? "bg-charcoal/20" : "bg-ivory/25")} />
      <span className={cn("eyebrow", isDark ? "text-charcoal/45" : "text-ivory/50")}>{label}</span>
    </div>
  );
}