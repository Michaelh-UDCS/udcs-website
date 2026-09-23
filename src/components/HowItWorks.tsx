import React from 'react';
import { Section } from './ui/Section';
import { howItWorksContent } from '../content/howItWorks';

/** Homepage ritual — File → Build → Own. Replaces Solutions + Handoff on `/`. */
export const HowItWorks: React.FC = () => {
  const {
    sectionId,
    badge,
    heading,
    description,
    steps,
    servicesLabel,
    services,
    footerNote,
    lakeJacksonHref,
    lakeJacksonLabel,
  } = howItWorksContent;

  return (
    <Section id={sectionId} background="dark">
      {/* reveal on inner wrap — keep #how-it-works section free of transform/opacity */}
      <div className="reveal-on-scroll max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <span className="inline-block py-1.5 px-6 border border-gold/30 bg-navy/30 text-gold text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-6">
            {badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-5">
            {heading}
          </h2>
          <p className="text-cream/80 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            {description}
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-12 list-none p-0 m-0">
          {steps.map((item) => (
            <li
              key={item.step}
              className="border border-gold/20 bg-navy/20 p-6 md:p-7 relative"
            >
              <span className="text-gold font-display text-3xl font-medium block mb-3 tabular-nums">
                {item.step}
              </span>
              <h3 className="text-xl font-display font-bold text-cream mb-3">{item.title}</h3>
              <p className="text-cream/70 text-sm font-light leading-relaxed font-sans">
                {item.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="border-t border-gold/15 pt-8 md:pt-10">
          <p className="text-gold text-[10px] font-bold uppercase tracking-[0.25em] text-center mb-6 font-sans">
            {servicesLabel}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 list-none p-0 m-0">
            {services.map((svc) => (
              <li key={svc.title} className="text-center sm:text-left">
                <strong className="block text-cream font-display text-lg mb-1">{svc.title}</strong>
                <span className="text-cream/55 text-xs font-light font-sans leading-relaxed">
                  {svc.line}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-center text-cream/70 text-sm font-light font-sans">
            {footerNote}{' '}
            <span className="block sm:inline mt-2 sm:mt-0">
              Serving{' '}
              <a
                href={lakeJacksonHref}
                className="text-gold underline hover:text-gold/80 font-medium focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {lakeJacksonLabel}
              </a>
              .
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
};
