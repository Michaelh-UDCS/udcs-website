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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-950 pt-32 pb-16">
      {/* Dynamic Cursor Glow Layer (Controlled via CSS Custom Properties) */}
      <div
        className="hero-glow-layer pointer-events-none absolute inset-0 z-0"
      />

      {/* Background Texture (Carbon Fiber - Local) */}
      <div className="absolute inset-0 bg-[url('/assets/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <div className="mb-6 max-w-4xl">
          <span className="inline-block py-1.5 px-6 border border-gold/30 rounded-none bg-navy/30 text-gold-muted text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-8">
            {badge}
          </span>

          <h1 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-white mb-8">
            {titleMain}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream to-gold">
              {titleGradient}
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl font-light text-gold/90 mt-4 tracking-normal font-sans">
              {titleSub}
            </span>
          </h1>

          {/* GEO Direct Answer Block for AI Search Engines */}
          <p className="text-cream/80 text-base md:text-xl max-w-3xl mx-auto mb-8 font-light leading-relaxed font-sans">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 text-[11px] uppercase tracking-wider font-semibold text-gold">
            {featurePills.map((pill, idx) => (
              <span key={idx} className="bg-gold/10 border border-gold/30 px-3 py-1">
                {pill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={primaryCtaHref}
              className="group relative px-10 py-4 bg-transparent border border-gold text-gold font-bold tracking-[0.2em] uppercase text-xs overflow-hidden transition-all duration-500 hover:text-charcoal-950"
            >
              <span className="relative z-10 flex items-center gap-3">
                {primaryCtaText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </a>

            <a
              href={secondaryCtaHref}
              className="px-10 py-4 border border-gold/20 text-cream font-bold tracking-[0.2em] uppercase text-xs hover:border-gold/60 hover:text-gold transition-all duration-300"
            >
              {secondaryCtaText}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50 animate-bounce-subtle pointer-events-none"
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6" strokeWidth={1} />
      </div>
    </section>
  );
};