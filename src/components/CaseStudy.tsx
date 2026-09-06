import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import {
  ExternalLink,
} from 'lucide-react';
import { caseStudiesContent, CaseStudyItem } from '../content/caseStudies';

function PillarIcon() {
  return <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />;
}

const StudyLayout: React.FC<{ study: CaseStudyItem }> = ({ study }) => (
  <Card className="border border-gold/30 bg-navy/30 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-72 h-72 bg-gold/[0.06] rounded-full pointer-events-none" />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-7 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-[11px] font-bold uppercase tracking-wider font-sans"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold/80 font-bold font-sans block mb-2">
            {study.eyebrow}
          </span>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-cream leading-tight">
            {study.client}
          </h3>
        </div>

        <p className="text-cream/75 text-sm md:text-base font-light leading-relaxed font-sans">
          {study.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 font-sans">
          {study.pillars.map((pillar) => (
            <div key={pillar.title} className="flex items-start gap-3 bg-charcoal-950/40 p-4 border border-gold/10">
              <PillarIcon />
              <div>
                <strong className="block text-cream text-sm font-medium">{pillar.title}</strong>
                <span className="text-cream/60 text-xs font-light">{pillar.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 border-t border-gold/10 pt-4 font-sans">
          <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-3">{study.deliverablesTitle}</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cream/80">
            {study.deliverables.map((item) => (
              <li key={item} className="sol-check">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 font-sans">
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-transparent border border-gold text-gold font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-charcoal-950 transition-colors duration-300"
          >
            {study.ctaLabel} <ExternalLink className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>
      </div>

      <div className="lg:col-span-5 flex flex-col gap-6 bg-charcoal-950/60 border border-gold/20 p-6 md:p-8 font-sans">
        <div className="border-b border-gold/10 pb-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-2">
            {study.capabilitiesTitle}
          </span>
          <h4 className="text-xl font-display font-bold text-cream mb-3">{study.capabilitiesHeading}</h4>
          <p className="text-cream/60 text-xs font-light leading-relaxed">{study.capabilitiesDescription}</p>
        </div>

        <div className="space-y-3">
          {study.details.map((detail, idx) => (
            <div
              key={detail.label}
              className={`flex items-center justify-between gap-4 py-2 text-xs ${
                idx < study.details.length - 1 ? 'border-b border-white/5' : ''
              }`}
            >
              <span className="text-cream/60 shrink-0">{detail.label}</span>
              {detail.isLive ? (
                <span className="text-emerald-400 font-medium flex items-center gap-1.5 text-right">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  {detail.value}
                </span>
              ) : (
                <span className={`text-right ${detail.isHighlight ? 'text-gold font-bold' : 'text-cream font-medium'}`}>
                  {detail.value}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="bg-navy/40 p-4 border border-gold/10 text-center mt-auto">
          <p className="text-xs text-cream/70 italic">&ldquo;{study.quote}&rdquo;</p>
        </div>
      </div>
    </div>
  </Card>
);

export const CaseStudy: React.FC = () => {
  const { sectionId, badge, heading, subhead, supportingHeading, supportingSubhead, studies } =
    caseStudiesContent;

  if (!studies?.length) return null;

  const featured = studies.find((s) => s.featured) ?? studies[0];
  const supporting = studies.filter((s) => s.id !== featured.id);
  const ordered = [featured, ...supporting];

  return (
    <Section id={sectionId} background="gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block py-1 px-4 border border-gold/30 rounded-none bg-navy/30 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">
            {badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4">{heading}</h2>
          <p className="text-cream/60 max-w-2xl mx-auto font-light text-base md:text-lg font-sans">
            {subhead}
          </p>
        </div>

        <div className="space-y-10 md:space-y-12">
          {ordered.map((study, i) => (
            <React.Fragment key={study.id}>
              {i === 1 && supporting.length > 0 && (
                <div>
                  <h3 className="text-gold font-bold tracking-widest uppercase text-xs mb-2 font-sans">
                    {supportingHeading}
                  </h3>
                  <p className="text-cream/50 text-sm font-light font-sans max-w-xl">{supportingSubhead}</p>
                </div>
              )}
              <StudyLayout study={study} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};
