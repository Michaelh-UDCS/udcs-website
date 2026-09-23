import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Section } from './ui/Section';
import { caseStudiesContent } from '../content/caseStudies';

/**
 * Tight homepage flagship — story + metrics + CTAs.
 * Full StudyLayout lives on /case-studies.
 */
export const CaseStudy: React.FC = () => {
  const {
    sectionId,
    homeBadge,
    homeHeading,
    homeSubhead,
    viewAllLabel,
    viewAllHref,
    homeConsultLabel,
    homeConsultHref,
    studies,
  } = caseStudiesContent;

  if (!studies?.length) return null;

  const featured = studies.find((s) => s.featured) ?? studies[0];
  const highlight = featured.details.find((d) => d.isHighlight);
  const status = featured.details.find((d) => d.isLive);
  const location = featured.details.find((d) => d.label.toLowerCase().includes('location'));

  return (
    <Section id={sectionId} background="gradient">
      <div className="reveal-on-scroll max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block py-1 px-4 border border-gold/30 rounded-none bg-navy/30 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">
            {homeBadge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4">{homeHeading}</h2>
          <p className="text-cream/60 max-w-xl mx-auto font-light text-base md:text-lg font-sans">
            {homeSubhead}
          </p>
        </div>

        <article className="border border-gold/30 bg-navy/25 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {featured.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-gold/10 border border-gold/25 text-gold text-[10px] font-bold uppercase tracking-wider font-sans"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-gold/80 font-bold font-sans block mb-2">
            {featured.eyebrow}
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-cream leading-tight mb-2">
            {featured.client}
          </h3>
          <p className="text-cream/50 text-xs font-sans mb-5">{featured.location}</p>

          <p className="text-cream/75 text-sm md:text-base font-light leading-relaxed font-sans mb-6">
            {featured.pillars.map((p) => p.subtitle).join(' ')}
          </p>

          <dl className="space-y-2.5 text-xs font-sans border-y border-gold/15 py-4 mb-6">
            {location && (
              <div className="flex justify-between gap-4">
                <dt className="text-cream/55">{location.label}</dt>
                <dd className="text-cream font-medium text-right">{location.value}</dd>
              </div>
            )}
            {highlight && (
              <div className="flex justify-between gap-4">
                <dt className="text-cream/55">{highlight.label}</dt>
                <dd className="text-gold font-bold text-right">{highlight.value}</dd>
              </div>
            )}
            {status && (
              <div className="flex justify-between gap-4">
                <dt className="text-cream/55">{status.label}</dt>
                <dd className="text-emerald-400 font-medium text-right flex items-center justify-end gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  {status.value}
                </dd>
              </div>
            )}
          </dl>

          <p className="text-cream/65 text-xs italic font-sans mb-8 text-center md:text-left">
            &ldquo;{featured.quote}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={featured.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 border border-gold/50 text-gold font-bold uppercase tracking-widest text-[11px] hover:bg-gold hover:text-charcoal-950 transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold font-sans"
            >
              {featured.ctaLabel} <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
            </a>
            <Link
              to={viewAllHref}
              className="inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 border border-gold bg-gold text-charcoal-950 font-bold uppercase tracking-widest text-[11px] hover:bg-cream transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold font-sans"
            >
              {viewAllLabel} <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>
        </article>

        <div className="mt-8 text-center">
          <a
            href={homeConsultHref}
            className="inline-flex items-center justify-center gap-2 min-h-11 px-8 py-3 border border-gold/35 text-gold font-bold uppercase tracking-widest text-xs hover:border-gold transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {homeConsultLabel}
          </a>
        </div>
      </div>
    </Section>
  );
};
