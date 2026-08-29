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
      question: "Can I hire Universal Dynamic for a website only—without Texas filings or SAM.gov?",
      answer:
        "Yes. You do not need government filings to work with Universal Dynamic Consulting Services LLC. If you already have a Texas business and want to migrate from subscription platforms or traditional CMS hosting to a self-hosted Google Cloud setup with $0 monthly agency fees, we handle the redesign and Day-1 ownership handoff.",
    },
    {
      question: "Do I really own my website—with $0 monthly agency fees?",
      answer:
        "Yes, 100%. Unlike agencies that keep sites on proprietary servers and charge $150–$300/month, Universal Dynamic transfers full admin access to your Google account on Day 1. Google Cloud/Firebase hosting for small-business sites is virtually $0/month for standard traffic—you pay Google, not an agency retainer.",
    },
    {
      question: "How does self-hosting work if I don't know how to code?",
      answer:
        "You do not need coding knowledge. Universal Dynamic handles the cloud architecture, DNS, SSL certificates, and email setup, then provides a plain-English video walkthrough showing how to update text and images anytime.",
    },
    {
      question: "Is a self-hosted Google Cloud website secure?",
      answer:
        "Yes. Hosting on Google Cloud / Firebase uses enterprise infrastructure with automated SSL certificates and secure cloud defaults—typically more resilient than plugin-heavy shared hosting that requires constant patching.",
    },
    {
      question: "Will I have to manage security updates or software patches myself?",
      answer:
        "No. Unlike WordPress-style stacks that need ongoing plugin updates, these serverless Google Cloud setups rely on Google-managed background security and server updates—zero routine patch maintenance for you.",
    },
    {
      question: "Do you only serve Lake Jackson, or all of Texas?",
      answer:
        "Universal Dynamic Consulting Services LLC specializes exclusively in Texas businesses, with primary focus on Lake Jackson, TX 77566, Angleton, Freeport, Clute, Richwood, Pearland, and Greater Houston. Services include Texas Secretary of State entity filings, IRS EIN registration, SAM.gov federal contracting onboarding, and self-hosted Google Cloud websites.",
    },
    {
      question: "Can you set up SAM.gov so I can bid on government contracts?",
      answer:
        "Yes. Universal Dynamic handles SAM.gov onboarding end-to-end—Unique Entity ID (UEI), CAGE code, and an active SAM.gov entity profile—so Texas businesses can pursue government contract eligibility.",
    },
    {
      question: "What do I need for Woman-Owned or Minority-Owned business certification?",
      answer:
        "Universal Dynamic walks Texas businesses through state and federal requirements for WOSB, EDWOSB, and MBE statuses to help qualify for diversity set-asides and related programs.",
    },
  ],
};
