import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import RevealLines from "@/components/site/RevealLines";
import { process } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (reduce || !track || !fill) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        fill,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top 82%",
            end: "bottom 58%",
            scrub: 0.5,
          },
        }
      );
    }, track);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="process" className="bg-ivory py-24 md:py-36">
      <div className="container-editorial">
        <SectionLabel index="06" label="How We Work" />

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <RevealLines
            lines={["Clarity at", "every stage."]}
            className="text-[clamp(2rem,5.4vw,4.6rem)] text-charcoal md:col-span-6"
            lineClassName="display"
          />
          <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
            <p className="text-base leading-relaxed text-charcoal/60">
              Six steps, each with a defined output and a written sign-off — so you always know what
              has been decided, what it costs, and what happens next.
            </p>
          </Reveal>
        </div>

        {/* Desktop: horizontal timeline with a drawn progress line */}
        <div className="mt-20 hidden md:block">
          <div ref={trackRef} className="relative h-px w-full bg-charcoal/15">
            <div
              ref={fillRef}
              className="absolute left-0 top-0 h-px w-full origin-left bg-bronze"
              style={reduce ? undefined : { transform: "scaleX(0)" }}
            />
          </div>

          <div className="mt-12 grid grid-cols-6 gap-8">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08} className="relative">
                <span className="absolute -top-[3.15rem] left-0 block h-2 w-2 rounded-full bg-bronze" />
                <span className="eyebrow text-charcoal/40">{step.number}</span>
                <h3 className="display mt-4 text-2xl text-charcoal">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/55">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-14 md:hidden">
          <div className="absolute bottom-2 left-[3px] top-2 w-px bg-charcoal/15" />
          <div className="space-y-10">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05} className="relative pl-8">
                <span className="absolute left-0 top-1.5 block h-[7px] w-[7px] rounded-full bg-bronze" />
                <span className="eyebrow text-charcoal/40">{step.number}</span>
                <h3 className="display mt-3 text-xl text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/55">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}