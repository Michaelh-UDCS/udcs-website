import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';
import { faqContent } from '../content/faq';

export const Faq: React.FC = () => {
  const { sectionId, badge, heading, faqs } = faqContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <div 
              key={index} 
              className="border border-gold/20 bg-navy/20 backdrop-blur-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleOpen(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-display font-medium text-lg text-cream pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0 text-cream/70 font-light leading-relaxed border-t border-gold/10 mt-2 transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
