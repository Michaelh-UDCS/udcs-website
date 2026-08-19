export interface CalculatorPreset {
  label: string;
  amount: number;
}

export interface CalculatorContent {
  badge: string;
  heading: string;
  description: string;
  referenceNote: string;
  sliderLabel: string;
  defaultFee: number;
  minSlider: number;
  maxSlider: number;
  step: number;
  presets: CalculatorPreset[];
  cards: {
    oneYear: { title: string; subtitle: string };
    threeYear: { title: string; subtitle: string };
    fiveYear: { title: string; subtitle: string };
  };
  summary: {
    text: string;
    ctaText: string;
    ctaHref: string;
  };
  disclaimer: string;
}

export const calculatorContent: CalculatorContent = {
  badge: "Interactive Cost Comparison Calculator",
  heading: "Calculate Your 5-Year Capital Drain",
  description:
    "Adjust the slider or select an industry cost tier below to calculate your estimated 1, 3, and 5-year savings when migrating from recurring subscription models to a 100% client-owned Google Cloud website.",
  referenceNote:
    "Comparative analysis against standard third-party platform tiers & agency retainers",
  sliderLabel: "Current Monthly Agency / Hosting Fee:",
  defaultFee: 200,
  minSlider: 30,
  maxSlider: 800,
  step: 10,
  presets: [
    { label: "Entry DIY Builders", amount: 45 },
    { label: "Managed CMS & Hosting", amount: 85 },
    { label: "Managed Agency Hosting", amount: 180 },
    { label: "Standard Agency Retainer", amount: 350 },
    { label: "All-in-One Enterprise SaaS", amount: 600 },
  ],
  cards: {
    oneYear: {
      title: "1-Year SaaS Tax",
      subtitle: "Surrendered in recurring fees",
    },
    threeYear: {
      title: "3-Year Wealth Drain",
      subtitle: "Lost capital with $0 equity",
    },
    fiveYear: {
      title: "5-Year Capital Preserved",
      subtitle: "Kept in your business account",
    },
  },
  summary: {
    text: "With Universal Dynamic, your website base hosting on Google Cloud is ~$0/month for standard traffic. Zero agency markups.",
    ctaText: "Eliminate Recurring Fees",
    ctaHref: "#contact",
  },
  disclaimer:
    "Legal & Trademark Disclaimer: All third-party product names, logos, brands, and registered trademarks (including Wix, Squarespace, GoDaddy, WordPress, Webflow, WP Engine, Scorpion, Townsquare Interactive, and others) are the property of their respective trademark owners. Reference to third-party services is made solely for nominative, comparative, and educational analysis of hosting structures and does not imply endorsement, affiliation, or sponsorship by any trademark holder.",
};
