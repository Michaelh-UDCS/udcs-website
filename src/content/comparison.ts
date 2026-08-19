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
  heading: "Traditional Agency Tax vs. Universal Dynamic",
  description:
    "Universal Dynamic Consulting Services LLC eliminates the recurring agency subscription tax by deploying websites directly into the client's own Google Cloud account. Clients maintain 100% admin ownership, pay ~$0/month base hosting, and save $1,800 to $3,600 annually ($9,000 to $18,000 over 5 years) compared to traditional agency retainers and platform locks.",
  roiCallout: "Average 5-Year Client Savings: $9,000 – $18,000+ Kept in Your Pocket",
  traditionalAgencyCard: {
    title: "Third-Party Subscription & Retainer Models",
    items: [
      {
        title: "Proprietary Subscriptions ($150–$300/mo):",
        description: "Site source code and hosting remain tied to third-party proprietary servers.",
      },
      {
        title: "Ongoing Monthly Retainers:",
        description: "Ongoing monthly fees billed to maintain hosting, security patches, or simple edits.",
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
        title: "Done-For-You Handoff & 2 Months Support:",
        description: "Custom video walkthrough training plus 60 days of direct concierge access to founder Michael Huerta.",
      },
      {
        title: "Turnkey Texas Launch & Compliance:",
        description: "Texas Secretary of State filings, IRS EIN, SAM.gov registration, and CAGE code acquisition.",
      },
    ],
  },
};
