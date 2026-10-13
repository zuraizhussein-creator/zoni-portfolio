import { profile, skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading id="about-title" eyebrow="About Me" title="A little about me" />

      <Reveal className="mb-16 rounded-3xl border border-white/10 bg-gradient-to-br from-card to-navy-light p-8 sm:p-10">
        <p className="text-lg leading-relaxed text-ink/90 sm:text-xl sm:leading-relaxed">{profile.bio}</p>
      </Reveal>

      <h3 className="mb-6 font-display text-2xl font-bold">What I do</h3>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ title, icon: Icon }, i) => (
          <Reveal as="li" key={title} delay={i * 60}>
            <div className="group h-full rounded-2xl border border-white/10 bg-card/60 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-electric/50 hover:bg-card hover:shadow-xl hover:shadow-electric/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 text-electric-bright transition group-hover:bg-electric group-hover:text-white">
                <Icon size={22} aria-hidden="true" />
              </div>
              <p className="font-semibold leading-snug">{title}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
