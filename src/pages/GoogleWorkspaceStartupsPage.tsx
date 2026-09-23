import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { routeMeta } from '../seo';
import { googleWorkspaceStartupsContent as c } from '../content/guides/googleWorkspaceStartups';
import { BreadcrumbNav } from '../components/BreadcrumbNav';
import { ogImageAbsolute, siteConfig } from '../config/siteConfig';

const PAGE_PATH = '/guides/google-workspace-for-startups';

/** Primary CTA — gold outline, 44×44 floor, hover fill (compositor-friendly). */
const primaryCtaClass =
  'group inline-flex items-center justify-center gap-3 min-h-11 px-10 py-4 bg-transparent border border-gold text-gold font-bold tracking-[0.2em] uppercase text-xs overflow-hidden transition-colors duration-300 hover:text-charcoal-950 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950';

const secondaryCtaClass =
  'inline-flex items-center justify-center gap-2 min-h-11 px-8 py-4 text-cream/80 hover:text-gold text-xs font-bold tracking-[0.15em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950 border border-cream/25 hover:border-gold/40';

export const GoogleWorkspaceStartupsPage: React.FC = () => {
  const meta = routeMeta[PAGE_PATH];
  const referralUrl = siteConfig.referrals.googleWorkspaceUrl;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.heading,
    description: meta.description,
    image: ogImageAbsolute,
    datePublished: siteConfig.publishedAt,
    dateModified: siteConfig.updatedAt,
    author: {
      '@type': 'Person',
      name: siteConfig.owner.name,
      jobTitle: siteConfig.owner.jobTitle,
      url: `${siteConfig.domain}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.businessName,
      url: siteConfig.domain,
      logo: {
        '@type': 'ImageObject',
        url: ogImageAbsolute,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': meta.canonical,
    },
  };

  return (
    <main id="main-content" className="min-h-screen bg-charcoal-950 text-cream pt-32 pb-24">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.robots && <meta name="robots" content={meta.robots} />}
        <link rel="canonical" href={meta.canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={ogImageAbsolute} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={meta.canonical} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={ogImageAbsolute} />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <BreadcrumbNav
          className="mb-10"
          items={[{ name: 'Guides' }, { name: 'Google Workspace for Startups' }]}
        />

        <aside
          className="mb-10 border border-gold/25 bg-navy/40 px-5 py-4 text-sm text-cream/80 font-light leading-relaxed"
          aria-label="Referral disclosure"
        >
          {c.disclosure}
        </aside>

        <header className="text-center mb-16 md:mb-20">
          <p className="inline-block py-1.5 px-6 border border-gold/30 bg-navy/30 text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            {c.badge}
          </p>
          <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-white mb-6">
            {c.heading}
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            {c.subhead}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={c.primaryHref} className={primaryCtaClass}>
              <span className="relative z-10 flex items-center gap-3">
                {c.primaryCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span
                className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                aria-hidden="true"
              />
            </Link>
            <a
              href={referralUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={secondaryCtaClass}
              aria-label={`${c.secondaryCta} (opens in a new tab)`}
            >
              {c.secondaryCta}
            </a>
          </div>
          <p className="mt-4 text-cream/70 text-sm font-light max-w-lg mx-auto">
            {c.disclosureShort}
          </p>
        </header>

        <section className="mb-16 md:mb-20 border border-gold/10 border-t-2 border-t-gold/40 bg-navy/20 p-8 md:p-12">
          <h2 className="font-display font-medium text-2xl md:text-3xl text-white mb-4">
            {c.answerHeading}
          </h2>
          <p className="text-cream/80 text-lg font-light leading-relaxed max-w-3xl">
            {c.answerBody}
          </p>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className="font-display font-medium text-2xl md:text-3xl text-white mb-4">
            {c.freemailHeading}
          </h2>
          <p className="text-cream/80 text-lg font-light leading-relaxed mb-6 max-w-3xl">
            {c.freemailLead}
          </p>
          <ul className="space-y-3 text-cream/80 font-light leading-relaxed max-w-3xl">
            {c.freemailBullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-gold shrink-0" aria-hidden="true">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className="font-display font-medium text-2xl md:text-3xl text-white mb-4">
            {c.featuresHeading}
          </h2>
          <p className="text-cream/80 text-lg font-light leading-relaxed mb-8 max-w-3xl">
            {c.featuresLead}
          </p>
          <div className="space-y-8 mb-8 max-w-3xl">
            {c.features.map((f) => (
              <div key={f.title}>
                <h3 className="font-display font-bold text-lg text-cream mb-1">{f.title}</h3>
                <p className="text-cream/80 font-light leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <p className="text-cream/80 font-light leading-relaxed max-w-3xl mb-4">
            {c.plansNote}
          </p>
          <a
            href={c.plansUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-11 text-gold hover:text-gold/90 text-sm font-medium underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Google Workspace plans and pricing (opens in a new tab)"
          >
            Google Workspace plans and pricing
          </a>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className="font-display font-medium text-2xl md:text-3xl text-white mb-4">
            {c.setupHeading}
          </h2>
          <p className="text-cream/80 text-lg font-light leading-relaxed mb-6 max-w-3xl">
            {c.setupLead}
          </p>
          <ol className="list-decimal list-inside space-y-3 text-cream/80 font-light leading-relaxed max-w-3xl mb-8">
            {c.setupChecklist.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="text-cream/80 font-light leading-relaxed max-w-3xl border-l-2 border-gold/50 pl-5">
            {c.setupBridge}{' '}
            <Link
              to="/contact"
              className="inline-flex items-center min-h-11 text-gold hover:text-gold/90 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Talk to us
            </Link>
            .
          </p>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className="font-display font-medium text-2xl md:text-3xl text-white mb-4">
            {c.pathsHeading}
          </h2>
          <p className="text-cream/80 text-lg font-light leading-relaxed mb-8 max-w-3xl">
            {c.pathsLead}
          </p>
          <dl className="max-w-3xl divide-y divide-gold/15 border-y border-gold/15">
            {c.paths.map((row) => {
              const isSelfServe = row.path.toLowerCase().includes('self-serve');
              return (
              <div key={row.path} className="py-6">
                <dt className="font-display font-bold text-xl text-cream mb-2">{row.path}</dt>
                <dd className="text-cream/80 text-sm font-light leading-relaxed mb-3">
                  Best when: {row.bestWhen}
                </dd>
                <dd>
                  {isSelfServe ? (
                    <a
                      href={referralUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center min-h-11 text-gold hover:text-gold/90 text-xs font-bold tracking-widest uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      aria-label={`${row.cta} (opens in a new tab)`}
                    >
                      {row.cta}
                    </a>
                  ) : (
                    <Link
                      to="/contact"
                      className="inline-flex items-center min-h-11 text-gold hover:text-gold/90 text-xs font-bold tracking-widest uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {row.cta}
                    </Link>
                  )}
                </dd>
              </div>
              );
            })}
          </dl>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className="font-display font-medium text-2xl md:text-3xl text-white mb-4">
            {c.howHeading}
          </h2>
          <p className="text-cream/80 text-lg font-light leading-relaxed mb-6 max-w-3xl">
            {c.howLead}
          </p>
          <ul className="space-y-3 text-cream/80 font-light leading-relaxed max-w-3xl mb-6">
            {c.howBullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-gold shrink-0" aria-hidden="true">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-cream/70 text-sm font-light mb-4">{c.disclosureShort}</p>
          <a
            href={referralUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 min-h-11 text-gold hover:text-gold/90 text-sm font-bold tracking-wide uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`${c.secondaryCta} (opens in a new tab)`}
          >
            {c.secondaryCta}
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </section>

        <section className="mb-16 md:mb-20" aria-labelledby="gws-faq-heading">
          <h2
            id="gws-faq-heading"
            className="font-display font-medium text-2xl md:text-3xl text-white mb-8"
          >
            Frequently asked questions
          </h2>
          <div className="space-y-4 max-w-3xl">
            {c.faqs.map((faq) => (
              <details key={faq.question} className="ud-faq group">
                <summary className="faq-summary w-full min-h-11 px-6 py-5 text-left flex justify-between items-center cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/50">
                  <span className="font-display font-medium text-lg text-cream pr-8 group-hover:text-gold transition-colors">
                    {faq.question}
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-0 text-cream/80 font-light leading-relaxed border-t border-gold/10 mt-2">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="text-center border border-gold/20 bg-navy/30 px-6 py-12 md:py-14" aria-label="Get started">
          <p className="text-cream/80 text-lg font-light mb-8 max-w-xl mx-auto">{c.closingLead}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link to={c.primaryHref} className={primaryCtaClass}>
              <span className="relative z-10 flex items-center gap-3">
                {c.primaryCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span
                className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
                aria-hidden="true"
              />
            </Link>
            <a
              href={referralUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={secondaryCtaClass}
              aria-label={`${c.secondaryCta} (opens in a new tab)`}
            >
              {c.secondaryCta}
            </a>
          </div>
          <p className="text-cream/70 text-sm font-light mb-4">{c.disclosureShort}</p>
          <Link
            to={c.tertiaryHref}
            className="inline-flex items-center min-h-11 text-cream/80 hover:text-gold text-sm font-light underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {c.tertiaryCta}
          </Link>
        </section>
      </div>
    </main>
  );
};
