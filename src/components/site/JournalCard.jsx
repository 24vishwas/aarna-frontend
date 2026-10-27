import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ImageFrame from "@/components/site/ImageFrame";
import { formatDate } from "@/lib/navigation";

export default function JournalCard({ post, featured = false }) {
  return (
    <article className="group">
      <Link to={`/journal/${post.slug}`} className="block" aria-label={post.title}>
        <ImageFrame
          src={post.cover_image}
          alt={post.title}
          ratio={featured ? "16 / 10" : "3 / 2"}
          className="w-full"
        />
      </Link>
      <div className="mt-6 flex items-center gap-4">
        <span className="eyebrow text-charcoal/40">{post.category}</span>
        <span className="h-px w-6 bg-charcoal/20" />
        <span className="text-xs uppercase tracking-[0.18em] text-charcoal/35">
          {formatDate(post.published_date)}
        </span>
      </div>
      <h3 className={`display mt-4 text-charcoal ${featured ? "text-[clamp(1.6rem,3vw,2.4rem)]" : "text-[clamp(1.3rem,2.2vw,1.7rem)]"}`}>
        <Link to={`/journal/${post.slug}`} className="link-underline transition-colors duration-500 hover:text-bronze">
          {post.title}
        </Link>
      </h3>
      {post.excerpt && (
        <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-charcoal/60">
          {post.excerpt}
        </p>
      )}
      <Link
        to={`/journal/${post.slug}`}
        className="mt-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors duration-500 hover:text-bronze"
      >
        Read article
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.25} />
      </Link>
      {post.is_sample && (
        <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-charcoal/30">
          Sample article
        </p>
      )}
    </article>
  );
}