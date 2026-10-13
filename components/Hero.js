import { ArrowRight, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-5 pb-20 pt-28 sm:px-8 md:grid-cols-[1.2fr_1fr]"
    >
      <div className="animate-fade-up">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm font-medium text-electric-bright">
          <span className="h-2 w-2 rounded-full bg-electric-bright" aria-hidden="true" />
          {profile.fullName}
        </p>

        <h1
          id="home-title"
          className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.headline.replace(`${profile.displayName}.`, "")}
          <span className="bg-gradient-to-r from-electric-bright to-cyan bg-clip-text text-transparent">
            {profile.displayName}.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.subheading}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Areas of focus">
          {profile.labels.map((label) => (
            <li
              key={label}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-ink transition hover:border-electric/50 hover:bg-electric/10"
            >
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#experience"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 font-semibold text-white shadow-lg shadow-electric/30 transition hover:-translate-y-0.5 hover:bg-electric-bright"
          >
            Explore My Work
            <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-electric hover:text-electric-bright"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Let&apos;s Connect
          </a>
        </div>
      </div>

      <div className="animate-fade-up px-6 [animation-delay:200ms]">
        <Avatar />
      </div>
    </section>
  );
}
