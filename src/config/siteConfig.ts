/**
 * Single source of truth for NAP, brand, schema, and site constants.
 * Archetype A — local TX consulting + cloud web hybrid.
 */

export type SiteMode = "A";

/** Service-area business — no street address published. */
export interface SiteAddress {
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: "US";
}

export interface SiteOwner {
  name: string;
  jobTitle: string;
}

export interface SiteColors {
  charcoal: string;
  gold: string;
  cream: string;
  navy: string;
}

export interface SiteAnalytics {
  /** Empty until a real GA4 measurement ID is provided. */
  ga4MeasurementId: string;
}

export interface SiteSocial {
  linkedin: string;
  twitter: string;
  facebook: string;
  youtube: string;
}

export interface SiteConfig {
  mode: SiteMode;
  businessName: string;
  alternateName: string;
  brand: string;
  owner: SiteOwner;
  phoneDisplay: string;
  phoneE164: string;
  email: string;
  address: SiteAddress;
  serviceAreas: readonly string[];
  domain: string;
  schemaType: "ProfessionalService";
  social: SiteSocial;
  /** Schema.org sameAs — confirmed profiles only (no placeholder Maps/Apple/Bing). */
  sameAs: readonly string[];
  ogImage: string;
  analytics: SiteAnalytics;
  /** FormSubmit contact endpoint (derived from email). */
  formSubmitEndpoint: string;
  colors: SiteColors;
}

const social: SiteSocial = {
  linkedin: "https://www.linkedin.com/company/universal-dynamic",
  twitter: "https://x.com/UniversalDynLLC",
  facebook: "https://www.facebook.com/UniversalDynamicLLC",
  youtube: "https://www.youtube.com/@UniversalDynamic",
};

export const siteConfig: SiteConfig = {
  mode: "A",

  businessName: "Universal Dynamic Consulting Services LLC",
  alternateName: "Universal Dynamic",
  brand: "Universal Dynamic",

  owner: {
    name: "Michael Huerta",
    jobTitle: "CEO & Founder",
  },

  phoneDisplay: "(979) 417-6489",
  phoneE164: "+19794176489",
  email: "michael@universal-dynamic.com",

  address: {
    addressLocality: "Lake Jackson",
    addressRegion: "TX",
    postalCode: "77566",
    addressCountry: "US",
  },

  serviceAreas: [
    "Lake Jackson",
    "Freeport",
    "Angleton",
    "Clute",
    "Richwood",
    "Pearland",
    "Alvin",
    "Brazoria County",
    "Greater Houston",
  ],

  domain: "https://universal-dynamic.com",
  schemaType: "ProfessionalService",

  social,

  // Confirmed public profiles only — add GBP / Apple / Bing after listings are claimed.
  sameAs: [social.linkedin, social.twitter, social.facebook, social.youtube],

  ogImage: "/og-image.jpg",

  analytics: {
    ga4MeasurementId: "",
  },

  formSubmitEndpoint: "https://formsubmit.co/michael@universal-dynamic.com",

  colors: {
    charcoal: "#0a0a0a",
    gold: "#c5a572",
    cream: "#e0e0e0",
    navy: "#141e26",
  },
};

/** tel: href from E.164 */
export const phoneHref = `tel:${siteConfig.phoneE164}`;

/** mailto: href */
export const emailHref = `mailto:${siteConfig.email}`;

/** City, ST ZIP (no street — service-area business) */
export const addressDisplay = `${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`;

/** Absolute OG image URL */
export const ogImageAbsolute = `${siteConfig.domain}${siteConfig.ogImage}`;
