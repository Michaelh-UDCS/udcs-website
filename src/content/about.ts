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
    "Business formation, federal contracting readiness, and high-performance websites — built in Lake Jackson, TX for owners who want full control.",
  missionBadge: "Our Mission",
  missionBody:
    "Universal Dynamic exists to close the gap between where a small business starts and where it needs to be — legally registered, federally compliant, and online with a fast, modern presence that belongs entirely to the owner.",
  founderBadge: "Meet the Founder",
  founderName: "Michael Huerta",
  founderTitle: "CEO & Founder — Lake Jackson, TX",
  founderBio:
    "For more than 25 years I have built a career in industrial fabrication through hands-on, on-the-job training — progressing from master shop fabricator and welder through shop coordination, scheduling, expediting, and estimating. I currently serve as Sales Manager and Project Manager. That same discipline drives Universal Dynamic: Texas business formation, SAM.gov readiness, and high-performance Google Cloud websites that clients own outright, with no monthly agency fees.",
  valuesBadge: "Why Choose Universal Dynamic",
  values: [
    {
      icon: Lock,
      title: "100% Client Ownership",
      body: "Every site we build is handed directly to your Google account on Day 1. No lock-in, no proprietary platform, no ongoing agency dependency.",
    },
    {
      icon: Star,
      title: "Fabrication Floor Experience",
      body: "More than 25 years in industrial fabrication — welding and fab through shop coordination, scheduling, expediting, estimating, and dual roles as Sales Manager and Project Manager. Hands-on experience shapes how we advise and build.",
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
