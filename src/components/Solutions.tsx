import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Cloud, Building, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { servicesContent } from '../content/services';

export const Solutions: React.FC = () => {
  const { sectionId, badge, heading, subhead, cards } = servicesContent;

  const cardIcons = [Cloud, Building, ShieldCheck];

  return (
    <Section id={sectionId} background="darker">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-2">{badge}</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-cream">
            {heading}
          </h3>
        </div>
        <p className="text-cream/70 max-w-md text-right md:text-left font-light">
          {subhead}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => {
          const IconComponent = cardIcons[index] || ShieldCheck;
          return (
            <Card
              key={index}
              delay={index * 0.2}
              className="min-h-[400px] flex flex-col justify-between group hover:border-gold/40 transition-colors duration-500"
            >
              <div>
                <div className="w-14 h-14 bg-navy rounded-sm flex items-center justify-center mb-8 border border-gold/20 group-hover:border-gold/50 transition-all">
                  <IconComponent className="w-7 h-7 text-gold" strokeWidth={1} />
                </div>
                <h4 className="text-2xl font-bold text-cream mb-4 font-display">{card.title}</h4>
                <p className="text-cream/60 leading-relaxed mb-6 font-light text-sm">
                  {card.description}
                </p>
                <ul className="space-y-3 text-cream/80 text-sm">
                  {card.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                      <span className="font-light">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-8 border-t border-gold/10 flex justify-end">
                <button className="text-xs font-bold uppercase tracking-wider text-cream/80 flex items-center gap-2 group-hover:text-gold transition-colors font-sans">
                  Learn More <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};