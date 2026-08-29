import { siteConfig } from "../config/siteConfig";

export interface NavItem {
  name: string;
  href: string;
}

export interface NavigationContent {
  brandName: string;
  brandTagline: string;
  navLinks: NavItem[];
  ctaButtonText: string;
  ctaButtonHref: string;
}

export const navigationContent: NavigationContent = {
  brandName: siteConfig.brand.toUpperCase(),
  brandTagline: "CONSULTING SERVICES LLC",
  navLinks: [
    { name: "About", href: "/about" },
    { name: "Ownership", href: "/#comparison" },
    { name: "Services", href: "/#solutions" },
    { name: "Case Study", href: "/#case-study" },
    { name: "Contact", href: "/contact" },
  ],
  ctaButtonText: "Get Started",
  ctaButtonHref: "/contact",
};
