export interface CaseStudyDeliverable {
  label: string;
}

export interface CaseStudyItem {
  id: string;
  badge: string;
  heading: string;
  subhead: string;
  tags: string[];
  client: string;
  description: string;
  pillars: { title: string; subtitle: string }[];
  deliverablesTitle: string;
  deliverables: string[];
  liveUrl: string;
  capabilitiesTitle: string;
  capabilitiesHeading: string;
  capabilitiesDescription: string;
  details: { label: string; value: string; isHighlight?: boolean; isLive?: boolean }[];
  quote: string;
}

export const caseStudiesContent = {
  sectionId: "case-study",
  badge: "Proven Launch Model",
  heading: "Featured Case Study: Iron Prairie Fabrication",
  subhead:
    "How Universal Dynamic built a Texas welding and heavy fabrication company from the ground up—from state setup to enterprise Google Cloud web architecture.",
  featured: {
    id: "iron-prairie",
    tags: ["Texas LLC & Web Launch", "Woman-Owned Business"],
    client: "Iron Prairie Fabrication Group LLC",
    description:
      "Delivering high-precision welding, laser plate cutting, custom ranch equipment, and specialty builds for agricultural operations, O&G industrial facilities, and public agencies across Texas.",
    pillars: [
      {
        title: "100% Digital Ownership",
        subtitle: "Self-hosted on Google Cloud with zero monthly agency retainers.",
      },
      {
        title: "Government Contract Ready",
        subtitle: "Positioned for SAM.gov, TPWD, National Parks & federal procurement.",
      },
    ],
    deliverablesTitle: "Key Project Deliverables:",
    deliverables: [
      "Texas Secretary of State Filing",
      "Google Workspace Business Email",
      "High-Speed React/Firebase Web App",
      "Public Sector Procurement Alignment",
    ],
    liveUrl: "https://ironprairiefabrication.com/",
    capabilitiesTitle: "Capabilities Focus",
    capabilitiesHeading: "Ranch, Industry & Agency Steelwork",
    capabilitiesDescription:
      "From livestock pens and ranch gates to custom bunkers, tornado shelters, and park infrastructure support.",
    details: [
      { label: "Client Location:", value: "Texas, USA" },
      { label: "Infrastructure:", value: "Google Cloud & Firebase" },
      { label: "Hosting Retainer:", value: "$0 / Month (Client Owned)", isHighlight: true },
      { label: "Status:", value: "Live & Operational", isLive: true },
    ],
    quote:
      "Field-proven on ranch and industrial jobs, with communication and documentation suited for public-sector procurement workflows.",
  },
};
