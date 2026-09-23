export interface HeroContent {
  badge: string;
  titleMain: string;
  titleGradient: string;
  titleSub: string;
  description: string;
  featurePills: string[];
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export const heroContent: HeroContent = {
  badge: "Universal Dynamic Consulting Services LLC",
  titleMain: "100% Owned Cloud Websites",
  titleGradient: "Zero Monthly Agency Fees",
  titleSub: "Turnkey Texas business setup when you need it.",
  description:
    "Self-hosted Google Cloud websites plus Texas SOS filings, IRS EIN, and SAM.gov setup for Lake Jackson, Brazoria County, and Greater Houston.",
  featurePills: [
    "100% Key Transfer Day 1",
    "~$0/mo Base Hosting",
    "1 Month Support Included",
  ],
  primaryCtaText: "Get Started Today",
  primaryCtaHref: "#contact",
  secondaryCtaText: "See How It Works",
  secondaryCtaHref: "#how-it-works",
};
