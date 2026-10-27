import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import RevealLines from "@/components/site/RevealLines";
import JournalCard from "@/components/site/JournalCard";
import { journalPosts } from "@/content/site";

export default function JournalPreview() {
  const [posts, setPosts] = useState(journalPosts);

//   useEffect(() => {
//     let active = true;
//     base44.entities.JournalPost.list({ sort: "-published_date", limit: 3 })
//       .then((page) => { if (active) setPosts(page?.items ?? []); })
//       .catch(() => { if (active) setPosts([]); });
//     return () => { active = false; };
//   }, []);

  return (
    <section id="journal" className="bg-ivory py-24 md:py-36">
      <div className="container-editorial">
        <SectionLabel index="10" label="Journal" />

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <RevealLines
            lines={["Notes from", "the drawing board."]}
            className="text-[clamp(2rem,5.4vw,4.6rem)] text-charcoal"
            lineClassName="display"
          />
          <Reveal delay={0.15} className="md:pb-4">
            <p className="max-w-sm text-base leading-relaxed text-charcoal/60">
              Practical writing on planning, construction stages, materials and budgets — the things
              worth knowing before you start building.
            </p>
            <Link
              to="/journal"
              className="group mt-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors duration-500 hover:text-bronze"
            >
              All articles
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          {posts === null && (
            <div className="grid gap-10 md:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="h-52 animate-pulse bg-stone/25" />
                  <div className="h-3 w-24 animate-pulse bg-stone/25" />
                  <div className="h-6 w-3/4 animate-pulse bg-stone/25" />
                </div>
              ))}
            </div>
          )}

          {posts && posts.length === 0 && (
            <p className="text-base text-charcoal/50">
              Articles appear here as soon as they are published.
            </p>
          )}

          {posts && posts.length > 0 && (
            <div className="grid gap-14 md:grid-cols-3 md:gap-10">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={i * 0.1} className={i === 1 ? "md:mt-10" : ""}>
                  <JournalCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}