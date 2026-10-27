import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionLabel from "@/components/site/SectionLabel";

/** The dark opening band every inner page shares. */
export default function PageHero({ index, label, title, intro, facts = [] }) {
  const reduce = useReducedMotion();

  return (
    <section className="bg-charcoal pb-16 pt-32 text-ivory md:pb-24 md:pt-44">
      <div className="container-editorial">
        <SectionLabel index={index} label={label} tone="light" />

        <h1 className="display mt-8 max-w-[24ch] text-[clamp(2.3rem,6vw,5rem)]">
          {reduce ? (
            title
          ) : (
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {title}
            </motion.span>
          )}
        </h1>

        {intro && (
          <motion.p
            className="mt-7 max-w-2xl text-base leading-relaxed text-ivory/60 md:text-lg"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {intro}
          </motion.p>
        )}

        {facts.length > 0 && (
          <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-ivory/15 pt-8 md:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow text-ivory/40">{fact.label}</dt>
                <dd className="mt-3 text-base text-ivory/85">{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}