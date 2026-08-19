import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { KeyRound, Video, Headphones, CheckCircle2 } from 'lucide-react';
import { engagementContent } from '../content/engagement';

export const ConciergeHandoff: React.FC = () => {
  const { sectionId, badge, heading, description, steps, footerNotePrefix, footerNoteBody } = engagementContent;

  const stepIcons = [KeyRound, Video, Headphones];

  return (
    <Section id={sectionId} background="dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-6 border border-gold/30 rounded-none bg-navy/30 backdrop-blur-sm text-gold text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-6">
            {badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">
            {heading}
          </h2>
          
          {/* GEO Direct Answer Snippet for AI Search Engines */}
          <p className="text-cream/80 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((stepItem, idx) => {
            const IconComponent = stepIcons[idx] || KeyRound;
            return (
              <Card
                key={idx}
                delay={idx * 0.2}
                className="flex flex-col justify-between border border-gold/20 bg-navy/20 relative overflow-hidden group hover:border-gold/50 transition-all"
              >
                <div>
                  <div className="w-12 h-12 bg-navy border border-gold/30 flex items-center justify-center mb-6 text-gold">
                    <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">{stepItem.step}</span>
                  <h3 className="text-xl font-bold font-display text-cream mb-3">{stepItem.title}</h3>
                  <p className="text-cream/70 text-sm font-light leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gold/10 flex items-center gap-2 text-gold text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4" /> {stepItem.badge}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-gold/5 border border-gold/20 p-6 md:p-8">
          <p className="text-cream/90 text-sm md:text-base font-light">
            <strong className="text-gold font-semibold">{footerNotePrefix}</strong>{footerNoteBody}{' '}
            <span className="block sm:inline mt-2 sm:mt-0">
              Serving local businesses in{' '}
              <a href="/services/lake-jackson-tx" className="text-gold underline hover:text-gold/80 font-medium">
                Lake Jackson (77566) &amp; Brazoria County
              </a>.
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
};
