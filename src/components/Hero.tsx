import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroContent } from '../content/hero';

export const Hero: React.FC = () => {
  const {
    badge,
    titleMain,
    titleGradient,
    titleSub,
    description,
    featurePills,
    primaryCtaText,
    primaryCtaHref,
    secondaryCtaText,
    secondaryCtaHref,
  } = heroContent;

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-charcoal-950 pt-24 pb-20 md:pt-32 md:pb-16">
      <div
        className="hero-glow-layer pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <div className="max-w-4xl w-full">
          {/* Brand-first signal (legal entity) */}
          <span className="inline-block py-1.5 px-5 border border-gold/30 rounded-none bg-navy/30 text-gold-muted text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-5 md:mb-8">
            {badge}
          </span>

          <h1 className="font-display font-medium text-[2rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl sm:leading-[1.05] tracking-tight text-white mb-4 md:mb-6">
            <span className="block text-white font-display">{titleMain}</span>
            <span className="block text-gold font-display mt-1 md:mt-2">
              {titleGradient}
            </span>
            <span className="block text-lg sm:text-3xl md:text-4xl font-light text-cream/80 mt-3 md:mt-4 tracking-normal font-sans">
              {titleSub}
            </span>
          </h1>

          {/* One supporting breath — local Texas USP only (entity + fees live in badge/H1) */}
          <p className="text-cream/80 text-sm md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 font-light leading-relaxed font-sans">
            {description}
          </p>

          {/* CTA group — full-width on phone, paired on sm+ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto">
            <a
              href={primaryCtaHref}
              className="group relative w-full sm:w-auto px-10 py-4 min-h-11 border border-gold bg-gold text-charcoal-950 sm:bg-transparent sm:text-gold font-bold tracking-[0.2em] uppercase text-xs overflow-hidden transition-all duration-500 hover:text-charcoal-950 inline-flex items-center justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span className="relative z-10 flex items-center gap-3">
                {primaryCtaText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} aria-hidden="true" />
              </span>
              {/* Slide-fill theater — desktop only; mobile is already solid gold */}
              <div className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out hidden sm:block" aria-hidden="true"></div>
            </a>

            <a
              href={secondaryCtaHref}
              className="w-full sm:w-auto px-10 py-3.5 min-h-11 border border-gold/20 text-cream font-bold tracking-[0.2em] uppercase text-xs hover:border-gold/60 hover:text-gold transition-all duration-300 inline-flex items-center justify-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {secondaryCtaText}
            </a>
          </div>

          {/* Proof chips — desktop only; mobile hero stays one composition */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 mt-10 text-[11px] uppercase tracking-wider font-semibold text-gold">
            {featurePills.map((pill, idx) => (
              <span key={idx} className="bg-gold/10 border border-gold/30 px-3 py-1">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-gold/50 animate-bounce-subtle pointer-events-none"
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6" strokeWidth={1} />
      </div>
    </section>
  );
};
