import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import ProjectTile from "@/components/site/ProjectTile";
import { projects_content } from "@/content/site";

export default function Projects() {
  const [projects, setProjects] = useState(projects_content);

  // useEffect(() => {
  //   let active = true;
  //   base44.entities.Project.list({ sort: "display_order", limit: 24 })
  //     .then((page) => { if (active) setProjects(page?.items ?? []); })
  //     .catch(() => { if (active) setProjects([]); });
  //   return () => { active = false; };
  // }, []);

  return (
    <>
      <PageHero
        index="01"
        label="Work"
        title="Selected work."
        intro="Residential architecture, construction and interiors. The projects below are demonstration records — they are replaced one by one as the studio supplies approved photography and details for completed homes."
      />

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-editorial">
          {projects === null && (
            <div className="grid gap-14 md:grid-cols-2 md:gap-10">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="h-72 animate-pulse bg-stone/25" />
                  <div className="h-3 w-28 animate-pulse bg-stone/25" />
                  <div className="h-8 w-2/3 animate-pulse bg-stone/25" />
                </div>
              ))}
            </div>
          )}

          {projects && projects.length === 0 && (
            <p className="text-base text-charcoal/50">
              No projects have been published yet.
            </p>
          )}

          {projects && projects.length > 0 && (
            <div className="grid gap-16 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
              {projects.map((project, i) => (
                <Reveal key={project.id} delay={(i % 2) * 0.08} className={i % 2 === 1 ? "md:mt-20" : ""}>
                  <ProjectTile project={project} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}