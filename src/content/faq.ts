export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  sectionId: string;
  badge: string;
  heading: string;
  faqs: FaqItem[];
}

export const faqContent: FaqContent = {
  sectionId: "faq",
  badge: "Common Questions",
  heading: "Frequently Asked Questions",
  faqs: [
    {
      question: "Can I hire UDCS if I ONLY need a website redesign or self-hosted website?",
      answer:
        "Absolutely. You do not need to purchase government filings to work with us. If you already have a business and want to migrate from third-party subscription platforms or traditional CMS hosting to your own self-hosted Google Cloud setup, we handle the entire redesign and handover.",
    },
    {
      question: "Do I really own my website and domain with zero monthly agency fees?",
      answer:
        "Yes, 100%. Unlike typical agencies that keep your site on proprietary servers and charge $150–$300/month, we transfer full admin access directly to your Google account on Day 1. Google Cloud/Firebase hosting for small business sites is virtually $0/month for standard traffic.",
    },
    {
      question: "How does self-hosting work if I don't know how to code?",
      answer:
        "You don't need any coding knowledge. We handle the entire cloud architecture, DNS, SSL security certificates, and email setup. Afterwards, we provide a simple video walkthrough and plain-English training showing you how to update text and images anytime.",
    },
    {
      question: "Is self-hosting a website secure?",
      answer:
        "Yes, completely. Hosting on enterprise infrastructure like Google Cloud is actually far more secure than traditional hosting or plugin-heavy platforms that get targeted by hackers. We set up automated SSL certificates (the padlock in the browser) and cloud security defaults so your site stays safe without any effort on your end.",
    },
    {
      question: "Will I have to manage security updates or software patches myself?",
      answer:
        "No. Unlike platforms like WordPress that require constant plugin updates to prevent hacks, our cloud setups use modern serverless hosting. Google automatically handles background security and server updates, meaning zero maintenance for you.",
    },
    {
      question: "Do you only work with Texas businesses, or do you serve clients outside of Lake Jackson?",
      answer:
        "We specialize exclusively in Texas businesses, with primary focus on Lake Jackson (77566), Angleton, Freeport, Clute, Richwood, Pearland, and Greater Houston. We provide Texas Secretary of State entity filings, IRS EIN registrations, SAM.gov federal contracting onboarding, and high-speed Google Cloud self-hosted websites.",
    },
    {
      question: "Can you help me set up SAM.gov to bid on government contracts?",
      answer:
        "Yes. We handle the entire onboarding process—getting your Unique Entity ID (UEI), CAGE code, and SAM.gov entity profile active.",
    },
    {
      question: "What do I need to get certified as a Woman-Owned or Minority-Owned business?",
      answer:
        "We walk you through state and federal requirements for WOSB, EDWOSB, and MBE statuses to help you qualify for diversity set-asides and tax credits.",
    },
  ],
};
