import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import SectionLabel from "@/components/site/SectionLabel";
import Reveal from "@/components/site/Reveal";
import RevealLines from "@/components/site/RevealLines";
import ProjectCard from "@/components/site/ProjectCard";
import { projects_content } from "@/content/site";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState(projects_content);
// setProjects(projects_content);
//   useEffect(() => {
//     let active = true;
//     base44.entities.Project.list({ sort: "display_order", limit: 12 })
//       .then((page) => { if (active) setProjects(page?.items ?? []); })
//       .catch(() => { if (active) setProjects([]); });
//     return () => { active = false; };
//   }, []);

  return (
    <section id="projects" className="bg-ivory pb-24 pt-4 md:pb-36">
      <div className="container-editorial">
        <div className="hairline pt-10 md:pt-14">
          <SectionLabel index="03" label="Selected Work" />
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <RevealLines
              lines={["Homes we have", "drawn and built."]}
              className="text-[clamp(2rem,5.4vw,4.6rem)] text-charcoal"
              lineClassName="display"
            />
            <Reveal delay={0.15} className="md:pb-4">
              <p className="max-w-sm text-base leading-relaxed text-charcoal/60">
                Residential projects across Bangalore and beyond — new builds, renovations and
                interiors. Every entry below is demonstration material until approved project
                photography is supplied.
              </p>
              <Link
                to="/projects"
                className="group mt-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors duration-500 hover:text-bronze"
              >
                View all projects
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          {projects === null && (
            <div className="space-y-16">
              {[0, 1].map((i) => (
                <div key={i} className="grid gap-8 md:grid-cols-12">
                  <div className="h-[46vh] animate-pulse bg-stone/25 md:col-span-7" />
                  <div className="space-y-4 md:col-span-4 md:col-start-9">
                    <div className="h-3 w-24 animate-pulse bg-stone/25" />
                    <div className="h-9 w-3/4 animate-pulse bg-stone/25" />
                    <div className="h-3 w-full animate-pulse bg-stone/20" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {projects && projects.length === 0 && (
            <p className="text-base text-charcoal/50">
              Project records appear here as soon as they are added to the studio's collection.
            </p>
          )}

          {projects && projects.map((project, i) => (
            <Reveal
              key={project.id}
              className={i === 0 ? "" : "hairline mt-20 pt-20 md:mt-32 md:pt-32"}
            >
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}