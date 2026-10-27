import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Editorial headline: each line rises out of a mask, one after another.
 * Lines are passed explicitly so the typographic breaks stay designed.
 */
export default function RevealLines({
  lines = [],
  className,
  lineClassName,
  delay = 0,
  stagger = 0.1,
  duration = 1.2,
}) {
  const reduce = useReducedMotion();
  const items = Array.isArray(lines) ? lines : String(lines).split("\n");

  if (reduce) {
    return (
      <h2 className={cn(className)}>
        {items.map((line, i) => (
          <span key={i} className={cn("block", lineClassName)}>{line}</span>
        ))}
      </h2>
    );
  }

  return (
    <h2 className={cn(className)}>
      {items.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ y: "112%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
            transition={{ duration, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}