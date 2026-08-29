import {
  addressDisplay,
  emailHref,
  phoneHref,
  siteConfig,
} from "../config/siteConfig";

export interface FooterSocialLink {
  name: string;
  href: string;
}

export interface FooterLegalLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterContent {
  brandName: string;
  brandTagline: string;
  addressLines: string[];
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  serviceAreaNote: string;
  copyrightText: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
    facebook: string;
    youtube: string;
  };
  legalLinks: FooterLegalLink[];
}

export const footerContent: FooterContent = {
  brandName: siteConfig.brand,
  brandTagline: "Consulting Services LLC",
  addressLines: [addressDisplay],
  phoneDisplay: siteConfig.phoneDisplay,
  phoneHref,
  email: siteConfig.email,
  emailHref,
  serviceAreaNote: "Serving Brazoria County & Greater Houston",
  copyrightText: "Established for Excellence",
  socialLinks: {
    linkedin: siteConfig.social.linkedin,
    twitter: siteConfig.social.twitter,
    facebook: siteConfig.social.facebook,
    youtube: siteConfig.social.youtube,
  },
  legalLinks: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Lake Jackson, TX", href: "/services/lake-jackson-tx" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
};
