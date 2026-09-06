import { Lock, Star, Zap, ShieldCheck } from 'lucide-react';

export interface AboutValueItem {
  icon: typeof Lock;
  title: string;
  body: string;
}

export interface AboutContent {
  badge: string;
  heading: string;
  subhead: string;
  missionBadge: string;
  missionBody: string;
  founderBadge: string;
  founderName: string;
  founderTitle: string;
  founderBio: string;
  valuesBadge: string;
  values: AboutValueItem[];
  ctaLead: string;
  ctaText: string;
  ctaHref: string;
}

export const aboutContent: AboutContent = {
  badge: "Our Story",
  heading: "About Universal Dynamic",
  subhead:
    "A Lake Jackson, TX consulting firm grounded in 24+ years of industrial operations — and the management, project, and web skills built along the way.",
  missionBadge: "Our Mission",
  missionBody:
    "Universal Dynamic exists to close the gap between where a small business starts and where it needs to be — legally registered, federally compliant, and online with a fast, modern presence that belongs entirely to the owner.",
  founderBadge: "Meet the Founder",
  founderName: "Michael Huerta",
  founderTitle: "CEO & Founder — Lake Jackson, TX",
  founderBio:
    "I help local entrepreneurs launch and scale with experience that was earned on the floor first. Over 24+ years in industrial operations, I spent years in scheduling, shop coordinating, and expediting before moving into management oversight (about 10–12 years) and project management (the last 5–6 years). I also design and ship A++ websites aimed at full marks on local SEO and GEO scorecards. Through Universal Dynamic, I handle Texas Secretary of State business setup and SAM.gov federal contracting readiness, then build high-speed, self-hosted sites on Google Cloud — fully owned by the client, with zero monthly agency fees.",
  valuesBadge: "Why Choose Universal Dynamic",
  values: [
    {
      icon: Lock,
      title: "100% Client Ownership",
      body: "Every site we build is handed directly to your Google account on Day 1. No lock-in, no proprietary platform, no ongoing agency dependency.",
    },
    {
      icon: Star,
      title: "Operations + Project Experience",
      body: "A career built in the shop and the office — scheduling, coordinating, and expediting first, then management oversight and project leadership. That grounding shapes how we advise and build.",
    },
    {
      icon: Zap,
      title: "Google Cloud Infrastructure",
      body: "Sites built on Firebase run on the same infrastructure as Google Search. Fast by default, secure by design, and virtually $0/month for standard traffic.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Monthly Agency Fees",
      body: "Unlike traditional agencies, we charge for the work — not a permanent seat at your table. Your hosting costs go to Google, not us.",
    },
  ],
  ctaLead: "Ready to start? Let's talk about your business.",
  ctaText: "Get a Free Consultation",
  ctaHref: "/contact",
};
