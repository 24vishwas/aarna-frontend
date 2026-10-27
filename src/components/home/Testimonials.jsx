import React from "react";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import { testimonials } from "@/content/site";

export default function Testimonials({ items = testimonials, sample = true }) {
  return (
    <section className="bg-ivory py-24 md:py-36">
      <div className="container-editorial">
        <SectionLabel index="09" label="Client Feedback" />

        <Reveal className="mt-8 flex flex-wrap items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
          <p className="text-xs uppercase tracking-[0.2em] text-charcoal/45">
            Sample content — replace with approved client feedback
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1} className={i === 1 ? "md:mt-12" : ""}>
              <blockquote>
                <p className="display text-[clamp(1.25rem,2vw,1.6rem)] leading-snug text-charcoal">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="text-sm text-charcoal/70">{item.attribution}</p>
                  {item.meta && (
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-charcoal/40">
                      {item.meta}
                    </p>
                  )}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        {sample && (
          <Reveal className="hairline mt-16 pt-6">
            <p className="max-w-2xl text-sm leading-relaxed text-charcoal/45">
              No genuine client feedback has been supplied yet, so this section uses clearly marked
              placeholder text. It can be hidden entirely until real feedback is available.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}