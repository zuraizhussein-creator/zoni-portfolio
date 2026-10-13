"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const { name, category, icon: Icon, description, details, skills } = project;
  const detailsId = `project-details-${index}`;

  return (
    <Reveal as="li" delay={index * 100}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-electric/50 hover:shadow-2xl hover:shadow-electric/15">
        {/* Top accent line that lights up on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric to-cyan opacity-40 transition group-hover:opacity-100"
        />

        <div className="mb-5 flex items-center gap-4">
          <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-electric-bright text-white shadow-lg shadow-electric/30">
            <Icon size={26} aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold">{name}</h3>
            <p className="text-sm text-electric-bright">{category}</p>
          </div>
        </div>

        <p className="leading-relaxed text-muted">{description}</p>

        {open && (
          <div id={detailsId} className="mt-5 rounded-2xl bg-navy/60 p-5">
            <p className="mb-2 text-sm font-semibold text-ink">Areas of focus</p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted marker:text-electric-bright">
              {details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        )}

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Skills used in ${name}`}>
          {skills.map((s) => (
            <li key={s} className="rounded-full bg-electric/10 px-3 py-1 text-xs font-medium text-electric-bright">
              {s}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-sm font-semibold text-ink transition hover:text-electric-bright"
        >
          {open ? "Show less" : "Show more"}
          <ChevronDown size={16} aria-hidden="true" className={`transition ${open ? "rotate-180" : ""}`} />
        </button>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience & Projects"
        title="Work I've contributed to"
        subtitle="A snapshot of the projects and areas I've worked on."
      />
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </ul>
    </section>
  );
}
