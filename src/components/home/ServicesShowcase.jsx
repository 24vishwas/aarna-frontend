import React, { useEffect, useRef, useState } from "react";
import { Image } from "@/components/ui/image";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import RevealLines from "@/components/site/RevealLines";
import { services } from "@/content/site";
import { imageByKey } from "@/lib/images";
import { cn } from "@/lib/utils";

function ServiceEntry({ service, index, onActive }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onActive(index); },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, onActive]);

  return (
    <article ref={ref} className="hairline py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <div className="relative overflow-hidden bg-stone/25">
            <Image
              src={imageByKey(service.image)}
              alt={`${service.title} — ${service.summary}`}
              loading="lazy"
              className="h-[38vh] w-full object-cover transition-transform duration-[1400ms] ease-editorial hover:scale-[1.03] md:h-[54vh]"
            />
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <Reveal>
            <span className="display block text-[clamp(2.4rem,4vw,3.4rem)] leading-none text-charcoal/15">
              {service.number}
            </span>
            <h3 className="display mt-4 text-[clamp(1.6rem,3vw,2.4rem)] text-charcoal">
              {service.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-charcoal/65">{service.summary}</p>
            <p className="mt-5 text-sm leading-relaxed text-charcoal/45">{service.detail}</p>

            <ul className="mt-8 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-charcoal/60">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bronze" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function ServicesShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-ivory py-24 md:py-36">
      <div className="container-editorial">
        <SectionLabel index="04" label="Services" />
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <RevealLines
            lines={["One studio,", "the whole journey."]}
            className="text-[clamp(2rem,5.4vw,4.6rem)] text-charcoal md:col-span-6"
            lineClassName="display"
          />
          <Reveal delay={0.15} className="md:col-span-5 md:col-start-8">
            <p className="text-base leading-relaxed text-charcoal/60">
              Six disciplines, one drawing board. Take the whole scope or the part you need — the
              drawings, the specification and the site team stay in step either way.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-14">
          <aside className="hidden md:col-span-3 md:block">
            <div className="sticky top-32">
              <p className="eyebrow text-charcoal/40">Index</p>
              <div className="mt-6 flex flex-col gap-4">
                {services.map((service, i) => (
                  <div key={service.number} className="flex items-baseline gap-4">
                    <span
                      className={cn(
                        "block h-px transition-all duration-700",
                        i === active ? "w-8 bg-bronze" : "w-3 bg-charcoal/20"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm transition-colors duration-500",
                        i === active ? "text-charcoal" : "text-charcoal/35"
                      )}
                    >
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="md:col-span-9">
            {services.map((service, i) => (
              <ServiceEntry
                key={service.number}
                service={service}
                index={i}
                onActive={setActive}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}