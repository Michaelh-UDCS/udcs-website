import React from 'react';
import { Head } from 'vite-react-ssg';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Contact } from '../components/Contact';
import { routeMeta } from '../seo';
import { BreadcrumbNav } from '../components/BreadcrumbNav';
import { addressDisplay, emailHref, phoneHref, siteConfig } from '../config/siteConfig';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${siteConfig.businessName}`,
  url: `${siteConfig.domain}/contact`,
  datePublished: siteConfig.publishedAt,
  dateModified: siteConfig.updatedAt,
  mainEntity: {
    '@type': 'ProfessionalService',
    name: siteConfig.businessName,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    datePublished: siteConfig.publishedAt,
    dateModified: siteConfig.updatedAt,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone / Text',
    value: siteConfig.phoneDisplay,
    href: phoneHref,
    note: 'Text messages preferred for initial contact',
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: emailHref,
    note: 'Emails answered within 1 business day',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: addressDisplay,
    href: null,
    note: 'Serving Brazoria County & Greater Houston',
  },
];

export const ContactPage: React.FC = () => {
  const meta = routeMeta['/contact'];

  return (
    <main id="main-content" className="min-h-screen bg-charcoal-950 text-cream pt-32 pb-24">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.robots && <meta name="robots" content={meta.robots} />}
        <link rel="canonical" href={meta.canonical} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:url" content={meta.canonical} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
      </Head>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <BreadcrumbNav className="mb-10" items={[{ name: 'Contact' }]} />

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-6 border border-gold/30 bg-navy/30 text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Get in Touch
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-white mb-6">
            Contact Universal Dynamic
          </h1>
          <p className="text-cream/70 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Free consultations available for business setup, SAM.gov registration,
            and self-hosted website projects.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="border border-gold/10 bg-navy/20 p-6 text-center"
            >
              <item.icon className="w-6 h-6 text-gold mx-auto mb-3" strokeWidth={1} aria-hidden="true" />
              <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-cream font-medium hover:text-gold transition-colors duration-200 block mb-1 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-cream font-medium mb-1">{item.value}</p>
              )}
              <p className="text-cream/70 text-xs font-light">{item.note}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Reuse existing Contact form component */}
      <Contact />
    </main>
  );
};

