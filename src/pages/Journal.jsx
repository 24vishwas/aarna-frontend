import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import JournalCard from "@/components/site/JournalCard";
import {journalPosts} from "@/content/site";

export default function Journal() {
  const [posts, setPosts] = useState(journalPosts);

  // useEffect(() => {
  //   let active = true;
  //   base44.entities.JournalPost.list({ sort: "-published_date", limit: 24 })
  //     .then((page) => { if (active) setPosts(page?.items ?? []); })
  //     .catch(() => { if (active) setPosts([]); });
  //   return () => { active = false; };
  // }, []);

  const [featured, ...rest] = posts || [];

  return (
    <>
      <PageHero
        index="02"
        label="Journal"
        title="Notes from the drawing board."
        intro="Practical writing on planning a home, the stages of construction, materials that age well, budgets and the mistakes worth avoiding. These articles are sample editorial content until the studio publishes its own."
      />

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-editorial">
          {posts === null && (
            <div className="space-y-16">
              <div className="h-[52vh] animate-pulse bg-stone/25" />
              <div className="grid gap-10 md:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="space-y-4">
                    <div className="h-52 animate-pulse bg-stone/25" />
                    <div className="h-6 w-3/4 animate-pulse bg-stone/25" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {posts && posts.length === 0 && (
            <p className="text-base text-charcoal/50">No articles have been published yet.</p>
          )}

          {featured && (
            <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <JournalCard post={featured} featured />
              </div>
              <div className="md:col-span-3 md:col-start-10 md:pb-6">
                <p className="text-sm uppercase tracking-[0.18em] text-charcoal/40">Latest</p>
                <p className="mt-4 text-base leading-relaxed text-charcoal/60">
                  Start here — the piece we send most often to clients at the very beginning.
                </p>
              </div>
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="hairline mt-20 grid gap-14 pt-16 md:grid-cols-3 md:gap-10">
              {rest.map((post, i) => (
                <Reveal key={post.id} delay={(i % 3) * 0.08} className={i % 3 === 1 ? "md:mt-10" : ""}>
                  <JournalCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}