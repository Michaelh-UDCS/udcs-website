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
    "Same ownership model—different verticals. Retail checkout, booking, and home-services lead generation, all on infrastructure the client controls.",
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
      eyebrow: "Owner-Trained Independence",
      tags: ["Lake Jackson Local SEO", "Owner Training"],
      client: "The Barbershop by Mike",
      location: "Lake Jackson, TX",
      description:
        "Mike replaced a $400+/month confined website package—where updates were tightly limited inside a vendor-controlled system—with a client-owned Google Cloud site he now hosts and manages independently. The engagement delivered online booking and a product catalog for his hair products, integrated with the Stripe account he already used, with no monthly agency retainer. Like many owners in similar arrangements, Mike had not realized that self-hosting and direct site management were available to him. Mike was the first to accept the included owner training; on his own device, he learned to edit photos, publish content, and administer the site and domain without a middleman or permission gates. That ownership quickly opened new possibilities—for the website, and for streamlining how he operates the shop.",
      pillars: [
        {
          title: "From Confined Package to Ownership",
          subtitle: "Replaced a $400+/mo limited-update vendor system with client-owned Google Cloud (~$0/mo base).",
        },
        {
          title: "Included Owner Training",
          subtitle: "Hands-on training so Mike edits photos, content, and domain settings without a third party.",
        },
      ],
      deliverablesTitle: "Key Project Deliverables:",
      deliverables: [
        "Owner Training — Device Setup & Handover",
        "Self-Hosted Google Cloud Site",
        "Migration from $400+/mo Confined Package",
        "Online Hair-Product Catalog",
        "Existing Stripe Checkout Integration",
        "Online Appointment Booking",
        "BarberShop Schema + Local NAP",
      ],
      liveUrl: "https://www.thebarbershopbymike.com/",
      ctaLabel: "Visit Live Website",
      capabilitiesTitle: "Independence Focus",
      capabilitiesHeading: "Liberty to Maintain & Improve",
      capabilitiesDescription:
        "Through included owner training on his own device, Mike gained the ability to edit photos, publish content, and manage his domain without a middleman or waiting on permission. That ownership extended beyond the website—prompting clearer ideas for streamlining shop operations, reducing costs, and running more efficiently on infrastructure he controls.",
      details: [
        { label: "Client Location:", value: "Lake Jackson, TX" },
        { label: "Infrastructure:", value: "Google Cloud & Firebase" },
        { label: "Prior Package:", value: "$400+/mo · Limited Updates" },
        { label: "Owner Training:", value: "Included · Accepted" },
        { label: "Commerce:", value: "Existing Stripe Account" },
        { label: "Hosting Retainer:", value: "$0 / Month (Client Owned)", isHighlight: true },
        { label: "Status:", value: "Live & Operational", isLive: true },
      ],
      quote:
        "Mike was the first to accept the included owner training. On his own device, he learned to edit photos, publish content, and manage his site and domain—without a middleman or waiting for permission—opening new ideas for both the website and the shop.",
    },
    {
      id: "max-press",
      eyebrow: "Newest Home-Services Launch",
      tags: ["Gulf Coast Authority Site", "Big 3 Maps Linked"],
      client: "Max Press Foundation Repair LLC",
      location: "Clute, TX",
      description:
        "Tony replaced a $500+/month confined website package—limited updates inside a vendor-controlled system, alongside a markedly outdated Max Press site—with a client-owned Google Cloud presence he now hosts and manages independently. The new build is an owner-supervised foundation-repair authority site for Brazoria County: process pages, warning-sign diagnostics, city service routes, and official Google, Apple, and Bing business listings linked to the website, with no agency retainer. Tony had not realized that self-hosting was an option; transferring ownership removed the middleman so Max Press can update its web presence whenever the business requires—without requesting permission.",
      pillars: [
        {
          title: "From Confined Package to Ownership",
          subtitle: "Replaced a $500+/mo limited-update vendor system with client-owned Google Cloud (~$0/mo base).",
        },
        {
          title: "Lead-Generation Architecture",
          subtitle: "Free inspection CTAs, photo diagnostic path, and owner-direct contact wired end to end.",
        },
      ],
      deliverablesTitle: "Key Project Deliverables:",
      deliverables: [
        "Self-Hosted React/Firebase Launch",
        "Migration from $500+/mo Confined Package",
        "Modern Rebuild of Outdated Site",
        "HomeAndConstructionBusiness Schema",
        "Google, Apple & Bing Business Listings Linked",
        "City Service Landing Pages",
        "Warning-Signs Diagnostic Guide",
      ],
      liveUrl: "https://www.maxpressfoundationrepair.com/",
      ctaLabel: "Visit Live Website",
      capabilitiesTitle: "Authority Focus",
      capabilitiesHeading: "Residential Foundation Repair",
      capabilitiesDescription:
        "Owner-supervised foundation authority online—every lift story, warranty signal, and inspection CTA owned by the client. Max Press no longer operates inside a $500+/month confined package or behind an outdated site: the company controls its presence directly, without a middleman between the business and its web assets.",
      details: [
        { label: "Client Location:", value: "Clute, TX" },
        { label: "Infrastructure:", value: "Google Cloud & Firebase" },
        { label: "Prior Package:", value: "$500+/mo · Limited Updates" },
        { label: "Prior Site:", value: "Markedly Outdated" },
        { label: "Listings:", value: "Google, Apple & Bing Linked" },
        { label: "Hosting Retainer:", value: "$0 / Month (Client Owned)", isHighlight: true },
        { label: "Status:", value: "Live & Operational", isLive: true },
      ],
      quote:
        "Tony moved Max Press from a $500+/month confined package and an outdated site onto client-owned Google Cloud—gaining the ability to host and manage the presence himself, without a middleman or permission gates.",
    },
  ] as CaseStudyItem[],
};
