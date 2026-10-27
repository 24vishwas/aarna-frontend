import React from "react";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import RevealLines from "@/components/site/RevealLines";
import ImageFrame from "@/components/site/ImageFrame";
import { materials } from "@/content/site";
import { imageByKey } from "@/lib/images";

// Deliberately uneven placement — the collage reads as a drawn sheet, not a grid.
const PLACEMENT = [
  "md:col-span-4",
  "md:col-span-3 md:col-start-6 md:mt-28",
  "md:col-span-4 md:col-start-9 md:mt-10",
  "md:col-span-3 md:col-start-2 md:mt-8",
  "md:col-span-4 md:col-start-6 md:mt-24",
  "md:col-span-3 md:col-start-10 md:mt-4",
];

const RATIOS = ["4 / 5", "3 / 4", "4 / 5", "3 / 4", "4 / 5", "3 / 4"];

export default function Materials() {
  return (
    <section id="materials" className="bg-charcoal py-24 text-ivory md:py-36">
      <div className="container-editorial">
        <SectionLabel index="07" label="Materials & Craftsmanship" tone="light" />

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <RevealLines
            lines={["Excellence lives", "in the details."]}
            className="text-[clamp(2rem,5.6vw,4.8rem)] text-ivory md:col-span-7"
            lineClassName="display"
          />
          <Reveal delay={0.15} className="md:col-span-4 md:col-start-9">
            <p className="text-base leading-relaxed text-ivory/60">
              Six materials, chosen for how they age rather than how they photograph on day one.
              We specify each one by hand, sample it on site, and detail the junction where it meets
              the next.
            </p>
          </Reveal>
        </div>

        <Reveal className="hairline-inverse mt-16 py-12 md:mt-24 md:py-16">
          <p className="display max-w-[40ch] text-[clamp(1.4rem,2.6vw,2.2rem)] text-ivory/85">
            A material is only as good as the detail it is finished into — so we resolve every
            reveal, junction and shadow gap on paper first.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-x-10 md:gap-y-0">
          {materials.map((material, i) => (
            <Reveal key={material.name} delay={(i % 3) * 0.08} className={PLACEMENT[i]}>
              <ImageFrame
                src={imageByKey(material.image)}
                alt={`${material.name} — close-up architectural detail`}
                ratio={RATIOS[i]}
                parallax={0.06 + (i % 3) * 0.02}
                className="w-full"
              />
              <div className="mt-5">
                <h3 className="display text-xl text-ivory">{material.name}</h3>
                <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-ivory/55">
                  {material.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}