import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

/**
 * Photographic frame with a subtle scroll-linked drift and a slow hover scale.
 */
export default function ImageFrame({
  src,
  alt,
  className,
  imgClassName,
  ratio,
  parallax = 0.045,
  fittingType = "fill",
  focalPointX,
  focalPointY,
  priority = false,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const strength = reduce ? 0 : parallax;
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength * 100}%`, `${strength * 100}%`]);

  return (
    <div
      ref={ref}
      className={cn("group relative overflow-hidden bg-stone/30", className)}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <motion.div className="absolute left-0 right-0 -top-[6%] h-[112%]" style={reduce ? undefined : { y }}>
        <Image
          src={src}
          alt={alt}
          fittingType={fittingType}
          focalPointX={focalPointX}
          focalPointY={focalPointY}
          loading={priority ? "eager" : "lazy"}
          className={cn(
            "h-full w-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.04]",
            imgClassName
          )}
        />
      </motion.div>
    </div>
  );
}