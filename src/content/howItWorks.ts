export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export interface HowItWorksService {
  title: string;
  line: string;
}

export interface HowItWorksContent {
  sectionId: string;
  badge: string;
  heading: string;
  description: string;
  steps: HowItWorksStep[];
  servicesLabel: string;
  services: HowItWorksService[];
  footerNote: string;
  lakeJacksonHref: string;
  lakeJacksonLabel: string;
}

/** Single homepage ritual — replaces Solutions + Handoff overlap. */
export const howItWorksContent: HowItWorksContent = {
  sectionId: "how-it-works",
  badge: "How It Works",
  heading: "File. Build. Own.",
  description:
    "Universal Dynamic Consulting Services LLC launches Texas businesses with optional filings and SAM.gov readiness, builds a self-hosted Google Cloud website, and transfers 100% admin keys on Day 1—with plain-English training, 30 days of founder support, and $0 monthly agency fees.",
  steps: [
    {
      step: "01",
      title: "File",
      description:
        "Texas SOS entity filings, IRS EIN, and SAM.gov / CAGE when you need government readiness—or skip straight to the website if you are already formed.",
    },
    {
      step: "02",
      title: "Build",
      description:
        "Custom React site on your Google Cloud / Firebase project, Workspace email, and migration off subscription platforms—no agency markup on hosting.",
    },
    {
      step: "03",
      title: "Own",
      description:
        "Day-1 admin key transfer to your Google account, no-code video walkthrough, and one month of direct concierge access to founder Michael Huerta.",
    },
  ],
  servicesLabel: "What we cover",
  services: [
    {
      title: "Texas filings",
      line: "SOS · EIN · bank & supplier paperwork · WOSB / MBE guidance",
    },
    {
      title: "Government readiness",
      line: "SAM.gov · UEI · CAGE · HUBZone assistance",
    },
    {
      title: "Owned cloud websites",
      line: "Firebase launch · Workspace email · owner training",
    },
  ],
  footerNote:
    "Non-technical trade and industrial owners welcome—we wire DNS, SSL, and email deliverability for you.",
  lakeJacksonHref: "/services/lake-jackson-tx",
  lakeJacksonLabel: "Lake Jackson (77566) & Brazoria County",
};
