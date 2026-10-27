import React from "react";
import { Link } from "react-router-dom";
import ImageFrame from "@/components/site/ImageFrame";

/** Compact entry used on the projects index. */
export default function ProjectTile({ project }) {
  return (
    <article className="group">
      <Link to={`/projects/${project.slug}`} className="block" aria-label={project.title}>
        <ImageFrame
          src={project.cover_image}
          alt={`${project.title} — ${project.category} in ${project.location}`}
          ratio="4 / 3"
          className="w-full"
        />
      </Link>
      <div className="mt-6 flex items-center gap-4">
        <span className="eyebrow text-charcoal/40">{project.category}</span>
        <span className="h-px w-6 bg-charcoal/20" />
        <span className="text-xs uppercase tracking-[0.18em] text-charcoal/35">{project.year}</span>
      </div>
      <h3 className="display mt-4 text-[clamp(1.5rem,2.6vw,2rem)] text-charcoal">
        <Link
          to={`/projects/${project.slug}`}
          className="link-underline transition-colors duration-500 hover:text-bronze"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm uppercase tracking-[0.16em] text-charcoal/45">
        {project.location}
      </p>
      {project.summary && (
        <p className="mt-4 max-w-[44ch] text-base leading-relaxed text-charcoal/60">
          {project.summary}
        </p>
      )}
    </article>
  );
}