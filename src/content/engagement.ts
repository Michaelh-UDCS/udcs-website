export interface HandoffStep {
  step: string;
  title: string;
  description: string;
  badge: string;
}

export interface EngagementContent {
  sectionId: string;
  badge: string;
  heading: string;
  description: string;
  steps: HandoffStep[];
  footerNotePrefix: string;
  footerNoteBody: string;
}

export const engagementContent: EngagementContent = {
  sectionId: "handoff",
  badge: "Concierge Onboarding & Transfer",
  heading: "The Done-For-You Handoff",
  description:
    "Universal Dynamic Consulting Services LLC transfers 100% admin ownership of the client's Google Cloud website and Google Workspace on Day 1. The done-for-you handoff includes plain-English video training and two months of concierge support from founder Michael Huerta—with $0 monthly agency fees after delivery.",
  steps: [
    {
      step: "Step 01",
      title: "Day 1 Admin Key Transfer",
      description:
        "Full administrative ownership of your Google Cloud environment, Firebase hosting, domain DNS, and Workspace is transferred directly to your Google account. You retain 100% control of your digital assets.",
      badge: "Zero Agency Lock-In",
    },
    {
      step: "Step 02",
      title: "No-Code Video Training",
      description:
        "Receive a customized, plain-English video walkthrough showing you step-by-step how to manage content, update text, inspect lead submissions, and understand your cloud dashboard without touching code.",
      badge: "Plain-English Guidance",
    },
    {
      step: "Step 03",
      title: "2 Months Included Support",
      description:
        "Enjoy 60 days of direct concierge access to founder Michael Huerta for questions, fine-tuning, domain record verification, and operational guidance as your new system launches.",
      badge: "Direct Founder Access",
    },
  ],
  footerNotePrefix: "Non-technical trade & industrial business owners welcome.",
  footerNoteBody:
    " You don't need coding or cloud experience — we wire DNS, SSL security certificates, and email deliverability for you from start to finish.",
};
