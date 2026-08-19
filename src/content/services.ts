export interface ServiceCard {
  title: string;
  description: string;
  bullets: string[];
}

export interface ServicesContent {
  sectionId: string;
  badge: string;
  heading: string;
  subhead: string;
  cards: ServiceCard[];
}

export const servicesContent: ServicesContent = {
  sectionId: "solutions",
  badge: "Our Expertise",
  heading: "Solutions Architecture",
  subhead:
    "Providing the essential keys to unlock government contracts and the digital infrastructure to execute them.",
  cards: [
    {
      title: "Texas SOS & Entity Filings",
      description:
        "We navigate Texas Secretary of State filings and administrative setup so your business is legally compliant from Day 1.",
      bullets: [
        "Texas Secretary of State entity filings & IRS EIN registration",
        "Business bank account setup, credit processing, & supplier applications",
        "Woman-Owned (WOSB / EDWOSB) & Minority-Owned (MBE) certification guidance",
        "Shipping release forms, credit apps, & back-office paperwork setup",
      ],
    },
    {
      title: "Unlock Government & Prime Contracts",
      description:
        "Get fully onboarded and compliant to bid on federal, state, and prime contractor jobs.",
      bullets: [
        "Complete SAM.gov entity registration & profile setup",
        "CAGE code acquisition & Unique Entity ID (UEI) allocation",
        "HUBZone and diversity tax credit assistance",
      ],
    },
    {
      title: "Website Redesign & Self-Hosting (100% Owned)",
      description:
        "Standout custom websites or modern redesigns built on Google Cloud with zero agency markups.",
      bullets: [
        "High-speed React website redesign launched on Google Firebase ($0/mo base hosting)",
        "Migrate from third-party subscription platforms and traditional CMS hosting to true 100% Google account ownership",
        "Official business email (you@yourcompany.com) via Google Workspace",
        "Plain-English walkthrough training so you can edit text without code",
      ],
    },
  ],
};
