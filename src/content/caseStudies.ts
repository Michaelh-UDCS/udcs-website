export interface CaseStudyItem {
  id: string;
  featured?: boolean;
  eyebrow: string;
  tags: string[];
  client: string;
  location: string;
  description: string;
  pillars: { title: string; subtitle: string }[];
  deliverablesTitle: string;
  deliverables: string[];
  liveUrl: string;
  ctaLabel: string;
  capabilitiesTitle: string;
  capabilitiesHeading: string;
  capabilitiesDescription: string;
  details: { label: string; value: string; isHighlight?: boolean; isLive?: boolean }[];
  quote: string;
}

export const caseStudiesContent = {
  sectionId: "case-study",
  badge: "Proven Launch Model",
  heading: "Client Case Studies",
  subhead:
    "Self-hosted Google Cloud launches across fabrication, local retail, and home services—each site transferred to the owner with $0 monthly agency retainers.",
  supportingHeading: "More Client Launches",
  supportingSubhead:
    "Same ownership model—different verticals. Retail checkout, booking, and home-services lead gen, all on infrastructure the client controls.",
  studies: [
    {
      id: "iron-prairie",
      featured: true,
      eyebrow: "Flagship Turnkey Launch",
      tags: ["Texas LLC & Web Launch", "Woman-Owned Business"],
      client: "Iron Prairie Fabrication Group LLC",
      location: "Bay City, TX",
      description:
        "Deepest engagement of the portfolio—Texas entity setup through enterprise Google Cloud architecture. Precision welding, CNC plasma, ranch steel, specialty builds, and an online parts catalog with Stripe and ACH checkout. Orders ping the shop floor and ops team instantly; catalog analytics show who browsed and who completed a purchase—all self-hosted with full client ownership.",
      pillars: [
        {
          title: "100% Digital Ownership",
          subtitle: "Self-hosted on Google Cloud with zero monthly agency retainers.",
        },
        {
          title: "Parts Catalog Commerce",
          subtitle: "Stripe & ACH checkout, shop-floor order alerts, and catalog funnel analytics.",
        },
      ],
      deliverablesTitle: "Key Project Deliverables:",
      deliverables: [
        "Texas Secretary of State Filing",
        "Google Workspace Business Email",
        "High-Speed React/Firebase Web App",
        "Online Parts Catalog",
        "Stripe & ACH Payment Setup",
        "Shop Floor & Ops Order Notifications",
        "Catalog Visit-to-Order Analytics",
        "Public Sector Procurement Alignment",
      ],
      liveUrl: "https://ironprairiefabrication.com/",
      ctaLabel: "Visit Live Website",
      capabilitiesTitle: "Capabilities Focus",
      capabilitiesHeading: "Ranch, Industry & Agency Steelwork",
      capabilitiesDescription:
        "From livestock pens and ranch gates to custom bunkers, tornado shelters, and park infrastructure support—plus a client-owned parts catalog with Stripe/ACH, internal order notifications for shop floor and ops, and analytics on catalog visitors who proceed versus drop off.",
      details: [
        { label: "Client Location:", value: "Bay City, TX" },
        { label: "Infrastructure:", value: "Google Cloud & Firebase" },
        { label: "Payments:", value: "Stripe & ACH (Client Owned)" },
        { label: "Ops Alerts:", value: "Shop Floor + Ops on Order" },
        { label: "Hosting Retainer:", value: "$0 / Month (Client Owned)", isHighlight: true },
        { label: "Status:", value: "Live & Operational", isLive: true },
      ],
      quote:
        "Parts orders notify shop floor and ops in real time, while catalog analytics show which visitors browse—and which follow through.",
    },
    {
      id: "barbershop",
      eyebrow: "Local Retail + Booking",
      tags: ["Lake Jackson Local SEO", "Stripe Checkout"],
      client: "The Barbershop by Mike",
      location: "Lake Jackson, TX",
      description:
        "Mike was paying over $500/month just for someone to host his website. Universal Dynamic rebuilt a speakeasy-branded men's grooming presence—appointment booking, 200+ Google review proof, and a full retail catalog—with Don Juan and Johnny B. products wired to Mike's own Stripe, then moved him to client-owned Google Cloud at ~$0/mo base hosting with a $0 agency retainer.",
      pillars: [
        {
          title: "Escaped $500+/mo Hosting",
          subtitle: "Replaced a costly host-only retainer with client-owned Google Cloud (~$0/mo base).",
        },
        {
          title: "Owner Stripe Payments",
          subtitle: "Online product sales checkout into Mike's Stripe—no middleman storefront fees.",
        },
      ],
      deliverablesTitle: "Key Project Deliverables:",
      deliverables: [
        "Self-Hosted Google Cloud Site",
        "Migrated Off $500+/mo Host Retainer",
        "Stripe Product Checkout (Owner Account)",
        "Retail Catalog & Category Filters",
        "Online Appointment Booking",
        "BarberShop Schema + Local NAP",
      ],
      liveUrl: "https://www.thebarbershopbymike.com/",
      ctaLabel: "Visit Live Website",
      capabilitiesTitle: "Commerce Focus",
      capabilitiesHeading: "Chair Products, Owner Checkout",
      capabilitiesDescription:
        "Mike's favorite deliverable: chair-trusted pomades and aftershaves customers can buy online—paid straight into his Stripe—on infrastructure he owns.",
      details: [
        { label: "Client Location:", value: "Lake Jackson, TX" },
        { label: "Prior Hosting Cost:", value: "$500+/mo (host-only)" },
        { label: "Commerce:", value: "Stripe (Client-Owned)" },
        { label: "Hosting Retainer:", value: "$0 / Month (Client Owned)", isHighlight: true },
        { label: "Status:", value: "Live & Operational", isLive: true },
      ],
      quote:
        "Mike left a $500+/month host-only bill behind—now the shop site, booking, and product checkout run on client-owned Google Cloud at ~$0/mo base hosting with a $0 agency retainer.",
    },
    {
      id: "max-press",
      eyebrow: "Newest Home-Services Launch",
      tags: ["Gulf Coast Authority Site", "Big 3 Maps Linked"],
      client: "Max Press Foundation Repair LLC",
      location: "Clute, TX",
      description:
        "Tony at Max Press was paying over $500/month just for someone to host the company website. The new build is an owner-supervised foundation-repair authority site for Brazoria County—process pages, warning-sign diagnostics, city routes, and Google/Apple/Bing Maps sameAs—moved to client-owned Google Cloud at ~$0/mo base hosting with a $0 agency retainer.",
      pillars: [
        {
          title: "Escaped $500+/mo Hosting",
          subtitle: "Replaced a costly host-only retainer with client-owned Google Cloud (~$0/mo base).",
        },
        {
          title: "Lead-Gen Architecture",
          subtitle: "Free inspection CTAs, photo diagnostic path, and owner-direct contact wired end-to-end.",
        },
      ],
      deliverablesTitle: "Key Project Deliverables:",
      deliverables: [
        "Self-Hosted React/Firebase Launch",
        "Migrated Off $500+/mo Host Retainer",
        "HomeAndConstructionBusiness Schema",
        "Google / Apple / Bing Maps sameAs",
        "City Service Landing Pages",
        "Warning-Signs Diagnostic Guide",
      ],
      liveUrl: "https://www.maxpressfoundationrepair.com/",
      ctaLabel: "Visit Live Website",
      capabilitiesTitle: "Authority Focus",
      capabilitiesHeading: "Residential Foundation Repair",
      capabilitiesDescription:
        "Owner-supervised foundation authority online—every lift story, warranty signal, and inspection CTA owned by the client, without a $500+/month host middleman.",
      details: [
        { label: "Client Location:", value: "Clute, TX" },
        { label: "Prior Hosting Cost:", value: "$500+/mo (host-only)" },
        { label: "Infrastructure:", value: "Google Cloud & Firebase" },
        { label: "Hosting Retainer:", value: "$0 / Month (Client Owned)", isHighlight: true },
        { label: "Status:", value: "Live & Operational", isLive: true },
      ],
      quote:
        "Tony stopped paying $500+/month just for hosting—Max Press now runs on client-owned Google Cloud at ~$0/mo base hosting with a $0 agency retainer.",
    },
  ] as CaseStudyItem[],
};
