export interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
}

export const routeMeta: Record<string, RouteMeta> = {
  '/': {
    title: 'Cloud Web Design & Texas Business Setup | Universal Dynamic',
    description: 'High-speed Google Cloud websites with $0 monthly fees, Texas business setup, SAM.gov registration, and local SEO in Lake Jackson, Angleton, and Freeport, TX.',
    canonical: 'https://universal-dynamic.com/',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  '/about': {
    title: 'About Universal Dynamic | Texas Business & Web Consulting',
    description: 'Meet Michael Huerta, founder of Universal Dynamic in Lake Jackson, TX — 24+ years of operations leadership, turnkey Texas business setup, and web design.',
    canonical: 'https://universal-dynamic.com/about',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  '/contact': {
    title: 'Contact Universal Dynamic | Free Consultation in Lake Jackson',
    description: 'Free consultation on business setup, SAM.gov registration, or a self-hosted website on Google Cloud. Serving Lake Jackson, Brazoria County, and Houston.',
    canonical: 'https://universal-dynamic.com/contact',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Universal Dynamic Consulting Services LLC',
    description: 'Privacy policy for Universal Dynamic Consulting Services LLC. Learn how we collect, protect, and manage your data with complete transparency and security.',
    canonical: 'https://universal-dynamic.com/privacy-policy',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  '/terms-of-service': {
    title: 'Terms of Service | Universal Dynamic Consulting Services LLC',
    description: 'Official terms of service for Universal Dynamic Consulting Services LLC governing the use of our website, Google Cloud web design, and business services.',
    canonical: 'https://universal-dynamic.com/terms-of-service',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  '/family-worship-assistant': {
    title: 'Family Worship Assistant | Universal Dynamic',
    description: 'Family Worship that\'s Meaningful & Fun. Plan evenings that draw your family closer to Jehovah and keep everyone engaged.',
    canonical: 'https://universal-dynamic.com/family-worship-assistant',
    robots: 'noindex, nofollow',
  },
  '/services/lake-jackson-tx': {
    title: 'Business Setup & Web Design in Lake Jackson, TX | 77566',
    description: 'Local business setup, SAM.gov registration, and custom self-hosted web design for small businesses in Lake Jackson, TX and the 77566 surrounding area.',
    canonical: 'https://universal-dynamic.com/services/lake-jackson-tx',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  '/thank-you': {
    title: 'Inquiry Received | Universal Dynamic Consulting Services LLC',
    description: 'Thank you for reaching out to Universal Dynamic. We have received your inquiry and will review your project details.',
    canonical: 'https://universal-dynamic.com/thank-you',
    robots: 'noindex, nofollow',
  },
  '/404': {
    title: '404 - Page Not Found | Universal Dynamic Consulting Services LLC',
    description: 'The page you are looking for does not exist on this server.',
    canonical: 'https://universal-dynamic.com/404',
    robots: 'noindex, nofollow',
  }
};

