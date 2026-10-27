import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import { company, hero } from "@/content/site";
import { IMAGES } from "@/lib/images";
import { scrollToSection } from "@/lib/navigation";

const HEADLINE = ["Spaces That Shape", "The Way We Live."];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0]);

  return (
    <section id="hero" ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-charcoal">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <motion.div
          className="h-full w-full"
          animate={reduce ? undefined : { scale: [1, 1.06] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src={IMAGES.heroVilla}
            alt="Contemporary villa at dusk with glass volumes glowing above a reflecting pool"
            loading="eager"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/65 via-charcoal/20 to-charcoal/90" />
      <div className="absolute inset-0 bg-charcoal/10" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-editorial relative z-10 flex h-full flex-col justify-end pb-20 md:pb-24"
      >
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-12">
          <div className="md:col-span-8">
            <motion.p
              className="eyebrow text-ivory/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.15 }}
            >
              {company.descriptor}
            </motion.p>
            <h1 className="display mt-5 text-[clamp(2.6rem,8.2vw,7rem)] text-ivory">
              {HEADLINE.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className="block"
                    initial={{ y: "115%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.3, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {i === 1 ? (
                      <>
                        The Way We <em className="italic text-bronze">Live.</em>
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div
            className="md:col-span-4 md:pb-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="max-w-xs text-base text-ivory/70">{hero.support}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="btn-outline-light"
              >
                Explore Our Work
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-3 bg-ivory px-8 py-[1.05rem] text-[12px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors duration-500 ease-editorial hover:bg-bronze hover:text-white"
              >
                Start Your Project
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-8 right-6 z-10 hidden items-center gap-3 md:flex lg:right-16">
        <span className="eyebrow text-ivory/45">Scroll</span>
        <span className="relative block h-16 w-px bg-ivory/20">
          <motion.span
            className="absolute left-1/2 top-0 block h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-bronze"
            animate={reduce ? undefined : { y: [0, 56, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />
        </span>
        <ArrowDown className="h-3.5 w-3.5 text-ivory/40" strokeWidth={1.25} />
      </div>
    </section>
  );
}