import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { base44 } from "@/api/base44Client";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import ImageFrame from "@/components/site/ImageFrame";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/images";
import { projects_content } from "@/content/site";

const PLACEMENT = [
  "md:col-span-7",
  "md:col-span-4 md:col-start-9 md:mt-24",
  "md:col-span-5 md:col-start-3 md:mt-16",
  "md:col-span-4 md:col-start-9 md:mt-8",
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [neighbours, setNeighbours] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   let active = true;
  //   setLoading(true);
  //   Promise.all([
  //     base44.entities.Project.filter({ slug }),
  //     base44.entities.Project.list({ sort: "display_order", limit: 24 }),
  //   ])
  //     .then(([items, page]) => {
  //       if (!active) return;
  //       setProject(items?.[0] ?? null);
  //       setNeighbours(page?.items ?? []);
  //     })
  //     .catch(() => { if (active) setProject(null); })
  //     .finally(() => { if (active) setLoading(false); });
  //   return () => { active = false; };
  // }, [slug]);
  useEffect(() => {
    const foundProject = projects_content.find((p) => p.slug === slug);
    setProject(foundProject || null);
    setNeighbours(projects_content);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-ivory">
        <span className="text-sm uppercase tracking-[0.24em] text-charcoal/40">Loading project…</span>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-ivory px-6 text-center">
        <h1 className="display text-4xl text-charcoal">Project not found</h1>
        <p className="max-w-md text-base text-charcoal/60">
          This project may have been renamed or removed from the studio's collection.
        </p>
        <Link to="/projects" className="btn-solid">
          Back to all projects
        </Link>
      </section>
    );
  }

  const gallery = Array.isArray(project.gallery) ? project.gallery.filter(Boolean) : [];
  const index = neighbours.findIndex((p) => p.slug === project.slug);
  const next = index >= 0 && neighbours.length > 1 ? neighbours[(index + 1) % neighbours.length] : null;
  const paragraphs = (project.description || "").split("\n\n").filter(Boolean);

  return (
    <>
      <PageHero
        index="Work"
        label={project.category || "Project"}
        title={project.title}
        intro={project.summary}
        facts={[
          { label: "Location", value: project.location || "—" },
          { label: "Year", value: project.year || "—" },
          { label: "Built-up area", value: project.area || "—" },
          { label: "Scope", value: Array.isArray(project.scope) && project.scope.length ? project.scope.join(", ") : "—" },
        ]}
      />

      <section className="bg-ivory">
        <div className="relative h-[46vh] w-full overflow-hidden bg-stone/25 md:h-[82vh]">
          <Image
            src={project.cover_image}
            alt={`${project.title} — ${project.category} in ${project.location}`}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container-editorial grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow text-charcoal/40">The project</p>
              {project.is_demonstration && (
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-charcoal/35">
                  Demonstration project
                </p>
              )}
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            {paragraphs.length === 0 && (
              <p className="text-lg leading-relaxed text-charcoal/60">
                Project notes will appear here once the studio supplies them.
              </p>
            )}
            {paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08} className={i === 0 ? "" : "mt-7"}>
                <p className={`leading-relaxed text-charcoal/75 ${i === 0 ? "text-lg md:text-xl" : "text-base"}`}>
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-20 md:pb-28">
        <div className="container-editorial grid gap-12 md:grid-cols-12 md:gap-x-10">
          {gallery.map((src, i) => (
            <Reveal key={`${src}-${i}`} delay={(i % 2) * 0.08} className={PLACEMENT[i % PLACEMENT.length]}>
              <ImageFrame
                src={src}
                alt={`${project.title} — interior and material detail ${i + 1}`}
                ratio={i % 2 === 0 ? "3 / 2" : "4 / 5"}
                className="w-full"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {Array.isArray(project.scope) && project.scope.length > 0 && (
        <section className="bg-ivory pb-24 md:pb-32">
          <div className="container-editorial">
            <div className="hairline pt-10">
              <div className="grid gap-8 md:grid-cols-12">
                <p className="eyebrow text-charcoal/40 md:col-span-3">Scope delivered</p>
                <ul className="grid gap-3 md:col-span-8 md:grid-cols-2">
                  {project.scope.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-charcoal/70">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-bronze" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-charcoal py-16 text-ivory md:py-20">
        <div className="container-editorial flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-ivory/70 transition-colors duration-500 hover:text-bronze"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" strokeWidth={1.25} />
            All projects
          </Link>

          {next && (
            <>
              <div className="md:text-right">
                <p className="eyebrow text-ivory/40">Next project</p>
                <p className="display mt-3 text-[clamp(1.6rem,3.4vw,2.6rem)]">{next.title}</p>
              </div>
              <Link
                to={`/projects/${next.slug}`}
                aria-label={`Next project: ${next.title}`}
                className="group inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-ivory transition-colors duration-500 hover:text-bronze"
              >
                View project
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  );
}