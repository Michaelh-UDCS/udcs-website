import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { SaaSMetricsCalculator } from './SaaSMetricsCalculator';
import { comparisonContent } from '../content/comparison';

function stripTrailingColon(title: string): string {
  return title.replace(/:\s*$/, '');
}

export const Comparison: React.FC = () => {
  const {
    sectionId,
    badge,
    heading,
    description,
    roiCallout,
    matrixThemLabel,
    matrixUsLabel,
    traditionalAgencyCard,
    universalDynamicCard,
  } = comparisonContent;

  const rowCount = Math.min(
    traditionalAgencyCard.items.length,
    universalDynamicCard.items.length,
  );

  return (
    <Section id={sectionId} background="darker" className="!pb-4 md:!pb-6">
      <div className="reveal-on-scroll">
      <div className="text-center mb-10 md:mb-16">
        <p className="text-gold font-bold tracking-widest uppercase text-sm mb-2">{badge}</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-4 md:mb-6">
          {heading}
        </h2>

        {/* GEO Direct Answer Snippet for AI Search */}
        <p className="text-cream/80 text-sm md:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-4 md:mb-6">
          {description}
        </p>

        {/* Financial ROI Callout */}
        <div className="inline-block bg-gold/10 border border-gold/30 px-4 py-2.5 md:px-6 md:py-3 text-gold text-[0.65rem] md:text-xs font-bold uppercase tracking-widest">
          {roiCallout}
        </div>
      </div>

      {/* Mobile Them | Us ownership matrix — default / < md */}
      <table className="md:hidden w-full max-w-lg mx-auto mb-10 border-collapse text-left">
        <caption className="sr-only">
          Traditional agency model versus Universal Dynamic ownership
        </caption>
        <thead>
          <tr>
            <th
              scope="col"
              className="w-1/2 px-3 py-2.5 text-[0.65rem] font-bold uppercase tracking-widest text-cream/50 border-b border-cream/10 bg-navy/30"
            >
              {matrixThemLabel}
            </th>
            <th
              scope="col"
              className="w-1/2 px-3 py-2.5 text-[0.65rem] font-bold uppercase tracking-widest text-gold border-b border-gold/25 bg-gold/5"
            >
              {matrixUsLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowCount }, (_, idx) => {
            const them = traditionalAgencyCard.items[idx];
            const us = universalDynamicCard.items[idx];
            return (
              <tr key={idx} className="align-top">
                <td className="px-3 py-3 border-b border-cream/5 bg-navy/20">
                  <strong className="block text-cream/85 text-sm font-medium leading-snug mb-0.5">
                    {stripTrailingColon(them.title)}
                  </strong>
                  <span className="block text-cream/55 text-xs font-light leading-snug">
                    {them.mobileLine ?? them.description}
                  </span>
                </td>
                <td className="px-3 py-3 border-b border-gold/10 bg-gold/[0.04]">
                  <strong className="block text-gold text-sm font-medium leading-snug mb-0.5">
                    {stripTrailingColon(us.title)}
                  </strong>
                  <span className="block text-cream/70 text-xs font-light leading-snug">
                    {us.mobileLine ?? us.description}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Desktop dual cards — md+ brochure / SEO */}
      <div className="hidden md:grid grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {/* Traditional Agencies Card */}
        <Card className="flex flex-col border border-red-900/30 bg-red-950/10">
          <h3 className="text-2xl font-bold text-red-200/70 mb-8 font-display border-b border-red-900/30 pb-4">
            {traditionalAgencyCard.title}
          </h3>
          <ul className="space-y-6 text-cream/70">
            {traditionalAgencyCard.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="cmp-mark cmp-mark--no mt-1" aria-hidden="true" />
                <div>
                  <strong className="block text-cream mb-1 font-medium">{item.title}</strong>
                  <span className="font-light text-sm">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        {/* Universal Dynamic Approach Card */}
        <Card className="flex flex-col border border-gold/40 bg-gold/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full"></div>
          <h3 className="text-2xl font-bold text-gold mb-8 font-display border-b border-gold/20 pb-4">
            {universalDynamicCard.title}
          </h3>
          <ul className="space-y-6 text-cream/80">
            {universalDynamicCard.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="cmp-mark cmp-mark--ok mt-1" aria-hidden="true" />
                <div>
                  <strong className="block text-cream mb-1 font-medium">{item.title}</strong>
                  <span className="font-light text-sm">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Interactive SaaS Tax Elimination Calculator */}
      <div className="max-w-6xl mx-auto">
        <SaaSMetricsCalculator />
      </div>
      </div>
    </Section>
  );
};
