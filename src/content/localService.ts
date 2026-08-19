export interface LocalServiceContent {
  heroTagline: string;
  ctaButtonText: string;
  mapHeadingPrefix: string;
  mapBodyTemplate: string;
}

export interface LakeJacksonPageContent {
  heroHeadlineMain: string;
  heroHeadlineHighlight: string;
  heroSubheadline: string;
  heroBody: string;
}

export const localServiceContent: LocalServiceContent = {
  heroTagline: "Universal Dynamic Consulting Services",
  ctaButtonText: "Get Started Today",
  mapHeadingPrefix: "Proudly Serving",
  mapBodyTemplate:
    "We are a local business dedicated to helping entrepreneurs in {county} launch their businesses and dominate local search. Contact us today for a free consultation.",
};

export const lakeJacksonPageContent: LakeJacksonPageContent = {
  heroHeadlineMain: "Starting a Business in",
  heroHeadlineHighlight: "Lake Jackson?",
  heroSubheadline: "We handle the setup & build your website.",
  heroBody:
    "Local to the 77566 area. Whether you need turnkey Texas SOS filings, SAM.gov registration, or a high-speed self-hosted website to dominate local search—we eliminate the friction for Brazoria County businesses.",
};
