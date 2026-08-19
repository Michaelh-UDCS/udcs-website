export interface ContactContent {
  sectionId: string;
  badge: string;
  heading: string;
  subhead: string;
  inquiryOptions: string[];
}

export const contactContent: ContactContent = {
  sectionId: "contact",
  badge: "Get in Touch",
  heading: "Schedule Your Consultation",
  subhead:
    "Ready to launch your business, register for government contracts, or build a fast self-hosted website? Submit a request below for a confidential consultation.",
  inquiryOptions: [
    "New Business Setup & Texas State Filings",
    "Website Redesign & Self-Hosting (Google Cloud)",
    "SAM.gov Registration & Government Readiness",
    "Fast Website Launch & Google Workspace",
    "General Inquiry",
  ],
};
