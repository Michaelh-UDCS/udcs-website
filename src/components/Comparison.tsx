import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Check, X } from 'lucide-react';
import { SaaSMetricsCalculator } from './SaaSMetricsCalculator';
import { comparisonContent } from '../content/comparison';

export const Comparison: React.FC = () => {
  const {
    sectionId,
    badge,
    heading,
    description,
    roiCallout,
    traditionalAgencyCard,
    universalDynamicCard,
  } = comparisonContent;

  return (
    <Section id={sectionId} background="darker">
      <div className="text-center mb-16">
        <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-2">{badge}</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">
          {heading}
        </h3>
        
        {/* GEO Direct Answer Snippet for AI Search */}
        <p className="text-cream/80 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-6">
          {description}
        </p>

        {/* Financial ROI Callout */}
        <div className="inline-block bg-gold/10 border border-gold/30 px-6 py-3 text-gold text-xs font-bold uppercase tracking-widest">
          {roiCallout}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {/* Traditional Agencies Card */}
        <Card className="flex flex-col border border-red-900/30 bg-red-950/10">
          <h4 className="text-2xl font-bold text-red-200/70 mb-8 font-display border-b border-red-900/30 pb-4">
            {traditionalAgencyCard.title}
          </h4>
          <ul className="space-y-6 text-cream/70">
            {traditionalAgencyCard.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 bg-red-900/20 p-1 rounded-full">
                  <X className="w-4 h-4 text-red-400" strokeWidth={2} />
                </div>
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
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full blur-3xl"></div>
          <h4 className="text-2xl font-bold text-gold mb-8 font-display border-b border-gold/20 pb-4">
            {universalDynamicCard.title}
          </h4>
          <ul className="space-y-6 text-cream/80">
            {universalDynamicCard.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 bg-gold/20 p-1 rounded-full">
                  <Check className="w-4 h-4 text-gold" strokeWidth={2} />
                </div>
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
    </Section>
  );
};
