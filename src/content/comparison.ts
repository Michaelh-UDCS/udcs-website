export interface ComparisonCardItem {
  title: string;
  description: string;
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
  traditionalAgencyCard: ComparisonCard;
  universalDynamicCard: ComparisonCard;
}

export const comparisonContent: ComparisonContent = {
  sectionId: "comparison",
  badge: "The Digital Sovereignty Difference",
  heading: "Traditional Agency Model vs. Universal Dynamic",
  description:
    "Universal Dynamic Consulting Services LLC deploys websites into each client's own Google Cloud account with 100% Day-1 admin ownership, ~$0/month base hosting, and $0 monthly agency fees. Local clients have paid $500+/month for website hosting alone before migrating—capital that stays with the business under true Google Cloud ownership.",
  roiCallout: "Escape $500+/mo Host-Only Retainers — Keep That Capital Over 5 Years",
  traditionalAgencyCard: {
    title: "Third-Party Subscription & Retainer Models",
    items: [
      {
        title: "Proprietary Subscriptions ($150–$300/mo):",
        description: "Site source code and hosting remain tied to third-party proprietary servers.",
      },
      {
        title: "Host-Only Monthly Bills ($500+/mo):",
        description: "Local businesses have paid $500+/month just to keep a site online—before any marketing or redesign work.",
      },
      {
        title: "Indirect Account Control:",
        description: "Administrative access and cloud environment are held by the vendor or agency.",
      },
      {
        title: "Web-Only Scope:",
        description: "Limited focus on web pages without integrated Texas SOS filings, IRS EINs, or SAM.gov setup.",
      },
    ],
  },
  universalDynamicCard: {
    title: "Universal Dynamic Model",
    items: [
      {
        title: "100% True Google Account Ownership:",
        description: "Full administrative access handed directly to your Google account on Day 1.",
      },
      {
        title: "Virtually $0/mo Base Hosting:",
        description: "Hosted directly on enterprise Google Cloud/Firebase with zero agency markups.",
      },
      {
        title: "Done-For-You Handoff & 1 Month Support:",
        description: "Custom video walkthrough training plus 30 days of direct concierge access to founder Michael Huerta.",
      },
      {
        title: "Turnkey Texas Launch & Compliance:",
        description: "Texas Secretary of State filings, IRS EIN, SAM.gov registration, and CAGE code acquisition.",
      },
    ],
  },
};
