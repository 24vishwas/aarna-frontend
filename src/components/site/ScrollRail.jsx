import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "approach", label: "Approach" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "build", label: "Method" },
  { id: "process", label: "Process" },
  { id: "materials", label: "Materials" },
  { id: "journal", label: "Journal" },
  { id: "contact", label: "Enquiries" },
];

/** The drawing-sheet index: a thin progress line with floor markers. */
export default function ScrollRail() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.4 });
  const [active, setActive] = useState("hero");
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <div className="pointer-events-auto flex flex-col items-end gap-4">
        <div className="relative h-44 w-px bg-charcoal/15">
          <motion.div
            className="absolute left-0 top-0 w-px origin-top bg-bronze"
            style={{ height: "100%", scaleY }}
          />
        </div>
        {isHome && (
          <div className="flex flex-col items-end gap-2.5">
            {SECTIONS.map((s) => {
              const isActive = active === s.id;
              return (
                <a
                  key={s.id}
                  href={`/#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="group flex items-center gap-2"
                  aria-label={s.label}
                >
                  <span
                    className={`text-[9px] uppercase tracking-[0.2em] transition-all duration-500 ${
                      isActive ? "text-charcoal opacity-100" : "text-charcoal/50 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {s.label}
                  </span>
                  <span
                    className={`block h-px transition-all duration-500 ${
                      isActive ? "w-5 bg-bronze" : "w-2.5 bg-charcoal/30 group-hover:w-4"
                    }`}
                  />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}