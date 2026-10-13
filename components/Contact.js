"use client";

import { useState } from "react";
import { Check, Copy, Linkedin, Mail } from "lucide-react";
import { contact } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const usingPlaceholders =
    contact.email.includes("example.com") || contact.linkedin.includes("your-profile");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
    } catch {
      // Fallback for older browsers
      const field = document.createElement("textarea");
      field.value = contact.email;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const buttonBase =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition hover:-translate-y-0.5";

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-card via-navy-light to-navy p-8 sm:p-14">
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-electric/25 blur-3xl" />

        <div className="relative">
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title={contact.heading}
            subtitle={contact.subheading}
          />

          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            <a
              href={`mailto:${contact.email}`}
              className={`${buttonBase} bg-electric text-white shadow-lg shadow-electric/30 hover:bg-electric-bright`}
            >
              <Mail size={18} aria-hidden="true" />
              Email Me
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-white/15 text-ink hover:border-electric hover:text-electric-bright`}
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className={`${buttonBase} border border-white/15 text-ink hover:border-electric hover:text-electric-bright`}
            >
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          <p className="mt-6 text-sm text-muted">
            {contact.email}
            <span aria-live="polite" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </p>

          {usingPlaceholders && (
            <p className="mt-4 rounded-xl border border-dashed border-amber-400/50 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
              Placeholder contact details. Update them in <code>data/portfolio.js</code>.
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
