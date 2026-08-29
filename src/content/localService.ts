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
    "Universal Dynamic Consulting Services LLC serves Lake Jackson, TX 77566 with turnkey Texas SOS filings, IRS EIN, SAM.gov registration, and self-hosted Google Cloud websites at $0 monthly agency fees. Brazoria County businesses receive Day-1 admin ownership of their cloud site with no agency lock-in.",
};
