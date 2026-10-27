import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ImageFrame from "@/components/site/ImageFrame";

/**
 * One editorial project entry: oversized image, quiet metadata column.
 */
export default function ProjectCard({ project, index = 0 }) {
  const flipped = index % 2 === 1;
  const imageCol = flipped ? "md:col-span-7 md:col-start-6" : "md:col-span-7";
  const textCol = flipped ? "md:col-span-4 md:col-start-1" : "md:col-span-4 md:col-start-9";

  return (
    <div className="grid gap-8 md:grid-cols-12 md:gap-10">
      <Link
        to={`/projects/${project.slug}`}
        className={`group block ${imageCol} ${flipped ? "md:order-2" : ""}`}
        aria-label={`${project.title}, ${project.category}`}
      >
        <ImageFrame
          src={project.cover_image}
          alt={`${project.title} — ${project.category} in ${project.location}`}
          ratio="3 / 2"
          className="w-full"
        />
      </Link>

      <div className={`${textCol} ${flipped ? "md:order-1" : ""}`}>
        <div className="md:sticky md:top-32">
          <div className="flex items-center gap-4">
            <span className="eyebrow text-charcoal/40">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-charcoal/20" />
            <span className="eyebrow text-charcoal/40">{project.category}</span>
          </div>

          <h3 className="display mt-6 text-[clamp(1.75rem,3.4vw,2.75rem)] text-charcoal">
            <Link
              to={`/projects/${project.slug}`}
              className="link-underline transition-colors duration-500 hover:text-bronze"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-charcoal/45">
            {project.location}
            {project.year ? ` · ${project.year}` : ""}
          </p>

          {project.summary && (
            <p className="mt-6 max-w-sm text-base leading-relaxed text-charcoal/65">
              {project.summary}
            </p>
          )}

          <Link
            to={`/projects/${project.slug}`}
            className="group/link mt-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors duration-500 hover:text-bronze"
          >
            View project
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-500 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              strokeWidth={1.25}
            />
          </Link>

          {project.is_demonstration && (
            <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-charcoal/30">
              Demonstration project
            </p>
          )}
        </div>
      </div>
    </div>
  );
}