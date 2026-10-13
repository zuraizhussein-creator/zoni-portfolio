// ============================================================
//  ALL WEBSITE CONTENT LIVES HERE.
//  Edit the text below to change what appears on your website.
//  You do NOT need to touch any design files.
// ============================================================

import {
  Briefcase,
  FileText,
  Landmark,
  Mail,
  MessageSquareText,
  PenTool,
  PhoneCall,
  Search,
  Target,
  TrendingUp,
  Code2,
} from "lucide-react";

// ---------- Basic profile ----------
export const profile = {
  fullName: "Zuraiz Hussain",
  displayName: "Zoni",
  headline: "Hey, I'm Zoni.",
  subheading:
    "I help businesses connect with the right people, communicate clearly, and turn conversations into opportunities.",
  labels: ["B2B Sales", "SaaS Copywriting", "Lead Generation", "Digital Marketing"],
  bio: "I'm Zoni, a professional focused on B2B sales, SaaS content, and business communication. My work combines research, outreach, persuasive writing, and understanding how products solve real customer problems. I've contributed to projects involving legislative technology, digital products, and business growth.",
};

// ---------- Contact details ----------
// 👉 Replace these two placeholders with your real details.
export const contact = {
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  heading: "Let's Work Together",
  subheading:
    "Have a project, an idea, or an opportunity? I'd love to hear about it.",
};

// ---------- Search engine info (shown in Google & browser tabs) ----------
export const seo = {
  title: "Zoni | B2B SaaS Copywriting, Sales & Lead Generation",
  description:
    "Portfolio of Zuraiz Hussain (Zoni): B2B sales, SaaS copywriting, lead generation and digital marketing.",
};

// ---------- Navigation tabs ----------
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience & Projects" },
  { id: "contact", label: "Contact" },
];

// ---------- Skill cards (About section) ----------
export const skills = [
  { title: "B2B Sales and Prospecting", icon: Briefcase },
  { title: "Cold Calling and Appointment Setting", icon: PhoneCall },
  { title: "Email and LinkedIn Outreach", icon: Mail },
  { title: "SaaS Copywriting", icon: PenTool },
  { title: "Website and Landing Page Content", icon: FileText },
  { title: "Lead Generation", icon: Target },
  { title: "Market Research", icon: Search },
  { title: "Product Messaging", icon: MessageSquareText },
];

// ---------- Project cards (Experience & Projects section) ----------
export const projects = [
  {
    name: "GovBuddy",
    category: "Legislative Technology / B2B SaaS",
    icon: Landmark,
    description:
      "Worked on business communication, product presentations, website content, and messaging for a legislative technology platform serving organizations that follow government activity.",
    details: [
      "Business communication",
      "Product presentations",
      "Website content",
      "Product messaging",
    ],
    skills: ["SaaS Messaging", "Presentations", "Website Content", "B2B Communication"],
  },
  {
    name: "Maxenius",
    category: "Software Development / Digital Agency",
    icon: Code2,
    description:
      "Contributed to the website's content, digital presentation, and communication of software development services for businesses and startups.",
    details: [
      "Website content",
      "Digital presentation",
      "Communicating software development services",
    ],
    skills: ["Website Content", "Digital Marketing", "Brand Messaging"],
  },
  {
    name: "Sales & Outreach",
    category: "Business Development",
    icon: TrendingUp,
    description:
      "Experience with lead research, prospecting, cold outreach, follow-ups, sales scripts, and appointment-setting workflows.",
    details: [
      "Lead research and prospecting",
      "Cold outreach and follow-ups",
      "Sales scripts",
      "Appointment-setting workflows",
    ],
    skills: ["Lead Generation", "Cold Email", "Cold Calling", "Research"],
  },
];
