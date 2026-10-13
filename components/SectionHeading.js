import Reveal from "./Reveal";

// The small label + big title used at the top of each section.
export default function SectionHeading({ id, eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-electric-bright">
        {eyebrow}
      </p>
      <h2 id={id} className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>}
    </Reveal>
  );
}
