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
  brandName: "Universal Dynamic",
  brandTagline: "Consulting Services LLC",
  addressLines: ["Lake Jackson, TX 77566"],
  phoneDisplay: "(979) 417-6489",
  phoneHref: "tel:+19794176489",
  email: "michael@universal-dynamic.com",
  emailHref: "mailto:michael@universal-dynamic.com",
  serviceAreaNote: "Serving Brazoria County & Greater Houston",
  copyrightText: "Established for Excellence",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/universal-dynamic",
    twitter: "https://x.com/UniversalDynLLC",
    facebook: "https://www.facebook.com/UniversalDynamicLLC",
    youtube: "https://www.youtube.com/@UniversalDynamic",
  },
  legalLinks: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Client Portal", href: "#", isExternal: true },
  ],
};
