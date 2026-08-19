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
    "A Lake Jackson, TX consulting firm built on decades of real-world operations experience and modern web engineering.",
  missionBadge: "Our Mission",
  missionBody:
    "Universal Dynamic exists to close the gap between where a small business starts and where it needs to be — legally registered, federally compliant, and online with a fast, modern presence that belongs entirely to the owner.",
  founderBadge: "Meet the Founder",
  founderName: "Michael Huerta",
  founderTitle: "CEO & Founder — Lake Jackson, TX",
  founderBio:
    "I help local entrepreneurs launch and scale with a rare combination: 24+ years of hands-on operations, compliance, and budget leadership, paired with modern web development skills. Through Universal Dynamic, I handle Texas Secretary of State business setup and SAM.gov federal contracting readiness, then build high-speed, self-hosted websites on Google Cloud — fully owned by the client, with zero monthly agency fees.",
  valuesBadge: "Why Choose Universal Dynamic",
  values: [
    {
      icon: Lock,
      title: "100% Client Ownership",
      body: "Every site we build is handed directly to your Google account on Day 1. No lock-in, no proprietary platform, no ongoing agency dependency.",
    },
    {
      icon: Star,
      title: "24+ Years of Operations Leadership",
      body: "Deep expertise in compliance, budget management, and business operations — not just code. We understand what it actually takes to run a business.",
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
