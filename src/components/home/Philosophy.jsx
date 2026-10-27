import React from "react";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import RevealLines from "@/components/site/RevealLines";
import ImageFrame from "@/components/site/ImageFrame";
import { philosophy } from "@/content/site";
import { IMAGES } from "@/lib/images";

export default function Philosophy() {
  return (
    <section id="approach" className="bg-ivory py-24 md:py-36">
      <div className="container-editorial">
        <SectionLabel index="02" label="Our Approach" />

        <RevealLines
          lines={[
            "A home is more than",
            "a structure. It is a feeling,",
            "shaped by every detail.",
          ]}
          className="mt-10 max-w-[24ch] text-[clamp(2rem,5.4vw,4.6rem)] text-charcoal md:max-w-[20ch]"
          lineClassName="display"
        />

        <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <ImageFrame
              src={IMAGES.philosophyDetail}
              alt="Cantilevered concrete slab meeting a solid oak stair in grazing sunlight"
              ratio="4 / 5"
              className="w-full"
            />
            <Reveal delay={0.2} className="mt-5 flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-bronze" />
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/45">
                Architecture, construction and interiors — one team
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-8">
            <Reveal>
              <p className="text-lg leading-relaxed text-charcoal/80 md:text-xl">
                {philosophy.intro}
              </p>
            </Reveal>
            <div className="mt-10 space-y-6">
              {philosophy.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 * (i + 1)}>
                  <p className="text-base leading-relaxed text-charcoal/60">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.35} className="hairline mt-12 pt-6">
              <div className="flex flex-wrap gap-x-10 gap-y-3">
                {["Architecture", "Construction", "Interiors"].map((label) => (
                  <span key={label} className="eyebrow text-charcoal/50">
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}