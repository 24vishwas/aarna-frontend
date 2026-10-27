import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Image } from "@/components/ui/image";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import JournalCard from "@/components/site/JournalCard";
import { formatDate } from "@/lib/navigation";
import { journalPosts } from "@/content/site";

export default function JournalPostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [others, setOthers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   let active = true;
  //   setLoading(true);
  //   Promise.all([
  //     base44.entities.JournalPost.filter({ slug }),
  //     base44.entities.JournalPost.list({ sort: "-published_date", limit: 4 }),
  //   ])
  //     .then(([items, page]) => {
  //       if (!active) return;
  //       const found = items?.[0] ?? null;
  //       setPost(found);
  //       setOthers((page?.items ?? []).filter((p) => p.slug !== slug).slice(0, 3));
  //     })
  //     .catch(() => { if (active) setPost(null); })
  //     .finally(() => { if (active) setLoading(false); });
  //   return () => { active = false; };
  // }, [slug]);
  useEffect(() => {
    const found = journalPosts.find((p) => p.slug === slug);
    setPost(found || null);
    setOthers(journalPosts.filter((p) => p.slug !== slug).slice(0, 3));
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-ivory">
        <span className="text-sm uppercase tracking-[0.24em] text-charcoal/40">Loading article…</span>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-ivory px-6 text-center">
        <h1 className="display text-4xl text-charcoal">Article not found</h1>
        <p className="max-w-md text-base text-charcoal/60">
          This article may have been unpublished or moved.
        </p>
        <Link to="/journal" className="btn-solid">Back to the journal</Link>
      </section>
    );
  }

  const paragraphs = (post.body || "").split("\n\n").filter(Boolean);

  return (
    <>
      <PageHero
        index="Journal"
        label={post.category || "Article"}
        title={post.title}
        facts={[
          { label: "Published", value: formatDate(post.published_date) || "—" },
          { label: "Reading time", value: post.read_time || "—" },
          { label: "Category", value: post.category || "—" },
          { label: "Status", value: post.is_sample ? "Sample article" : "Published" },
        ]}
      />

      <section className="bg-ivory">
        <div className="relative h-[42vh] w-full overflow-hidden bg-stone/25 md:h-[64vh]">
          <Image
            src={post.cover_image}
            alt={post.title}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-editorial grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-32">
              <Link
                to="/journal"
                className="group inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-charcoal/60 transition-colors duration-500 hover:text-bronze"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" strokeWidth={1.25} />
                All articles
              </Link>
              {post.is_sample && (
                <p className="mt-8 max-w-[22ch] text-xs leading-relaxed text-charcoal/40">
                  Sample article — demonstration editorial content pending the studio's own writing.
                </p>
              )}
            </div>
          </aside>

          <article className="md:col-span-7 md:col-start-5">
            {post.excerpt && (
              <Reveal>
                <p className="display text-[clamp(1.35rem,2.4vw,1.9rem)] leading-snug text-charcoal">
                  {post.excerpt}
                </p>
              </Reveal>
            )}
            <div className="mt-10 space-y-7">
              {paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={0.04 * i}>
                  <p className="text-base leading-relaxed text-charcoal/75 md:text-lg">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-ivory pb-24 md:pb-32">
          <div className="container-editorial">
            <div className="hairline pt-14">
              <p className="eyebrow text-charcoal/40">Keep reading</p>
              <div className="mt-12 grid gap-14 md:grid-cols-3 md:gap-10">
                {others.map((item, i) => (
                  <Reveal key={item.id} delay={i * 0.08}>
                    <JournalCard post={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}