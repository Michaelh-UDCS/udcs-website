export interface ComparisonCardItem {
  title: string;
  description: string;
  /** One-line mobile matrix copy; falls back to description */
  mobileLine?: string;
}

export interface ComparisonCard {
  title: string;
  items: ComparisonCardItem[];
}

export interface ComparisonContent {
  sectionId: string;
  badge: string;
  heading: string;
  description: string;
  roiCallout: string;
  matrixThemLabel: string;
  matrixUsLabel: string;
  traditionalAgencyCard: ComparisonCard;
  universalDynamicCard: ComparisonCard;
}

export const comparisonContent: ComparisonContent = {
  sectionId: "comparison",
  badge: "The Digital Sovereignty Difference",
  heading: "Traditional Agency Model vs. Universal Dynamic",
  description:
    "Universal Dynamic deploys into each client's own Google Cloud account—100% Day-1 admin ownership, ~$0/mo base hosting, and $0 monthly agency fees. Local clients have paid $500+/mo for hosting alone before migrating.",
  roiCallout: "Escape $500+/mo Host-Only Retainers — Keep That Capital Over 5 Years",
  matrixThemLabel: "Them",
  matrixUsLabel: "Us",
  traditionalAgencyCard: {
    title: "Third-Party Subscription & Retainer Models",
    items: [
      {
        title: "Proprietary Subscriptions ($150–$300/mo):",
        description: "Site source code and hosting remain tied to third-party proprietary servers.",
        mobileLine: "Code & hosting locked to vendor servers.",
      },
      {
        title: "Host-Only Monthly Bills ($500+/mo):",
        description: "Local businesses have paid $500+/month just to keep a site online—before any marketing or redesign work.",
        mobileLine: "$500+/mo just to keep the site online.",
      },
      {
        title: "Indirect Account Control:",
        description: "Administrative access and cloud environment are held by the vendor or agency.",
        mobileLine: "Vendor holds admin & cloud access.",
      },
      {
        title: "Web-Only Scope:",
        description: "Limited focus on web pages without integrated Texas SOS filings, IRS EINs, or SAM.gov setup.",
        mobileLine: "Pages only—no SOS, EIN, or SAM.gov.",
      },
    ],
  },
  universalDynamicCard: {
    title: "Universal Dynamic Model",
    items: [
      {
        title: "100% True Google Account Ownership:",
        description: "Full administrative access handed directly to your Google account on Day 1.",
        mobileLine: "Full admin in your Google account, Day 1.",
      },
      {
        title: "Virtually $0/mo Base Hosting:",
        description: "Hosted directly on enterprise Google Cloud/Firebase with zero agency markups.",
        mobileLine: "Firebase/GCP hosting—zero agency markup.",
      },
      {
        title: "Done-For-You Handoff & 1 Month Support:",
        description: "Custom video walkthrough training plus 30 days of direct concierge access to founder Michael Huerta.",
        mobileLine: "Video walkthrough + 30 days founder access.",
      },
      {
        title: "Turnkey Texas Launch & Compliance:",
        description: "Texas Secretary of State filings, IRS EIN, SAM.gov registration, and CAGE code acquisition.",
        mobileLine: "SOS, EIN, SAM.gov & CAGE included.",
      },
    ],
  },
};
