import React from 'react';
import { Section } from './ui/Section';
import { faqContent } from '../content/faq';

export const Faq: React.FC = () => {
  const { sectionId, badge, heading, faqs } = faqContent;

  return (
    <Section id={sectionId}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-2">{badge}</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-cream">
            {heading}
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group border border-gold/20 bg-navy/20 overflow-hidden transition-colors duration-200 open:border-gold/40 open:bg-navy/30"
            >
              <summary className="faq-summary w-full px-6 py-5 text-left flex justify-between items-center cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/50">
                <span className="font-display font-medium text-lg text-cream pr-8 group-hover:text-gold transition-colors">
                  {faq.question}
                </span>
              </summary>
              
              <div className="px-6 pb-5 pt-0 text-cream/70 font-light leading-relaxed border-t border-gold/10 mt-2">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
};
