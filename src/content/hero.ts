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
  titleMain: "100% Owned Cloud Websites &",
  titleGradient: "Turnkey Texas Business Setup",
  titleSub: "Zero Monthly Agency Fees.",
  description:
    "Universal Dynamic Consulting Services LLC builds high-speed self-hosted Google Cloud websites with $0 monthly agency fees and delivers turnkey Texas business setup (Texas SOS filings, IRS EIN, SAM.gov registration) for companies in Lake Jackson (77566), Brazoria County, and Greater Houston.",
  featurePills: [
    "100% Key Transfer Day 1",
    "~$0/mo Base Hosting",
    "2 Months Support Included",
  ],
  primaryCtaText: "Get Started Today",
  primaryCtaHref: "#contact",
  secondaryCtaText: "See How Ownership Works",
  secondaryCtaHref: "#comparison",
};
