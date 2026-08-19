import React from 'react';
import { LocalServicePage } from './LocalServicePage';
import { routeMeta } from '../seo';
import { lakeJacksonPageContent } from '../content/localService';

export const LakeJacksonPage: React.FC = () => {
  const meta = routeMeta['/services/lake-jackson-tx'];
  const { heroHeadlineMain, heroHeadlineHighlight, heroSubheadline, heroBody } = lakeJacksonPageContent;

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Universal Dynamic Consulting Services LLC - Lake Jackson",
    "alternateName": "Universal Dynamic",
    "url": "https://universal-dynamic.com/services/lake-jackson-tx",
    "logo": "https://universal-dynamic.com/og-image.jpg",
    "image": "https://universal-dynamic.com/og-image.jpg",
    "description": "Local business setup, SAM.gov registration, and custom self-hosted web design exclusively for businesses in Lake Jackson, TX and the 77566 surrounding area.",
    "email": "michael@universal-dynamic.com",
    "telephone": "+19794176489",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lake Jackson",
      "addressRegion": "TX",
      "postalCode": "77566",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.0458,
      "longitude": -95.4346
    },
    "priceRange": "$$",
    "areaServed": [
      { "@type": "City", "name": "Lake Jackson", "sameAs": "https://en.wikipedia.org/wiki/Lake_Jackson,_Texas" },
      { "@type": "City", "name": "Clute" },
      { "@type": "City", "name": "Freeport" },
      { "@type": "City", "name": "Richwood" },
      { "@type": "City", "name": "Angleton" },
      { "@type": "PostalCode", "name": "77566" }
    ],
    "serviceType": [
      "Rapid Cloud Web Architecture",
      "Google Cloud & Firebase Website Deployment",
      "Local SEO & Citation Setup",
      "SAM.gov / UEI / CAGE Code Setup",
      "WOSB & MBE Certification Setup"
    ]
  };

  return (
    <LocalServicePage
      city="Lake Jackson"
      state="TX"
      county="Brazoria County"
      meta={meta}
      schema={localSchema}
      heroHeadline={
        <>
          {heroHeadlineMain} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream to-gold">{heroHeadlineHighlight}</span>
        </>
      }
      heroSubheadline={heroSubheadline}
      heroBody={heroBody}
    />
  );
};
