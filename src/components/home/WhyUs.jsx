import React from "react";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import RevealLines from "@/components/site/RevealLines";
import { principles } from "@/content/site";

export default function WhyUs() {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="container-editorial">
        <SectionLabel index="08" label="Why Work With Us" />

        <div className="mt-10 grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <RevealLines
                lines={["Good design", "deserves great", "execution."]}
                className="text-[clamp(2rem,5vw,4.2rem)] text-charcoal"
                lineClassName="display"
              />
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-sm text-base leading-relaxed text-charcoal/60">
                  The five commitments below are the ones we can be held to on every project. Ask us
                  for them in writing before you appoint anyone.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            {principles.map((principle, i) => (
              <Reveal
                key={principle.number}
                delay={i * 0.06}
                className={i === 0 ? "pb-10" : "hairline py-10"}
              >
                <div className="grid gap-4 md:grid-cols-12">
                  <span className="eyebrow text-charcoal/35 md:col-span-2">
                    {principle.number}
                  </span>
                  <div className="md:col-span-10">
                    <h3 className="display text-[clamp(1.35rem,2.2vw,1.75rem)] text-charcoal">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-charcoal/60">
                      {principle.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}