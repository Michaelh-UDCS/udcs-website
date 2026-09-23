import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { routeMeta } from '../seo';
import { BreadcrumbNav } from '../components/BreadcrumbNav';
import { StudyLayout } from '../components/case-studies/StudyLayout';
import { caseStudiesContent } from '../content/caseStudies';
import { siteConfig } from '../config/siteConfig';

const PAGE_PATH = '/case-studies';

/**
 * Ultra-premium work gallery — full depth for every launch.
 * Homepage keeps one flagship; this route owns the portfolio proof surface.
 */
export const CaseStudiesPage: React.FC = () => {
  const meta = routeMeta[PAGE_PATH];
  const {
    pageBadge,
    pageHeading,
    pageSubhead,
    pageCtaLead,
    pageCtaLabel,
    pageCtaHref,
    studies,
  } = caseStudiesContent;

  const featured = studies.find((s) => s.featured) ?? studies[0];
  const supporting = studies.filter((s) => s.id !== featured.id);
  const ordered = [featured, ...supporting];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: meta?.title ?? 'Case Studies',
    description: meta?.description,
    url: `${siteConfig.domain}${PAGE_PATH}`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.alternateName,
      url: `${siteConfig.domain}/`,
    },
    about: {
      '@type': 'ProfessionalService',
      name: siteConfig.businessName,
      url: `${siteConfig.domain}/`,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: ordered.map((study, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: study.client,
        url: study.liveUrl,
        description: study.description.slice(0, 200),
      })),
    },
  };

  return (
    <main id="main-content" className="min-h-screen bg-charcoal-950 text-cream pt-32 pb-24">
      {meta && (
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
          <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
        </Head>
      )}

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <BreadcrumbNav className="mb-10" items={[{ name: 'Case Studies' }]} />

        <header className="text-center mb-16 md:mb-20">
          <span className="inline-block py-1.5 px-6 border border-gold/30 bg-navy/30 text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            {pageBadge}
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-white mb-6">
            {pageHeading}
          </h1>
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {pageSubhead}
          </p>
        </header>

        <div className="space-y-14 md:space-y-20">
          {ordered.map((study, index) => (
            <article key={study.id} className="scroll-mt-28" id={study.id}>
              {index > 0 && (
                <div className="border-t border-gold/15 pt-14 md:pt-20" aria-hidden="true" />
              )}
              <StudyLayout study={study} />
            </article>
          ))}
        </div>

        <section
          className="mt-20 md:mt-24 text-center border-t border-gold/25 pt-14 md:pt-16"
          aria-label="Start a project"
        >
          <p className="text-cream font-display text-2xl md:text-3xl font-medium mb-3">
            {pageCtaLead}
          </p>
          <p className="text-cream/55 text-sm font-light font-sans max-w-lg mx-auto mb-8">
            Universal Dynamic Consulting Services LLC transfers Day-1 Google Cloud ownership with $0 monthly agency fees—same model as the launches above.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5">
            <Link
              to={pageCtaHref}
              className="inline-flex items-center justify-center gap-3 min-h-11 px-10 py-3.5 border border-gold bg-gold text-charcoal-950 font-bold uppercase tracking-widest text-xs hover:bg-cream transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {pageCtaLabel} <ArrowRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 min-h-11 px-10 py-3.5 border border-gold/30 text-cream font-bold uppercase tracking-widest text-xs hover:border-gold/60 hover:text-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
