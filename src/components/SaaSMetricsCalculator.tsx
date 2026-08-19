import React from 'react';
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { calculatorContent } from '../content/calculator';

export const SaaSMetricsCalculator: React.FC = () => {
  const {
    badge,
    heading,
    description,
    referenceNote,
    sliderLabel,
    defaultFee,
    minSlider,
    maxSlider,
    step,
    presets,
    cards,
    summary,
    disclaimer,
  } = calculatorContent;

  const initialAnnualTax = defaultFee * 12;
  const initialThreeYearTax = defaultFee * 36;
  const initialFiveYearTax = defaultFee * 60;

  return (
    <div id="saas-calculator" className="mt-16 bg-navy/30 border border-gold/30 p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold via-gold/50 to-transparent" />
      
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-1.5 text-gold text-xs font-bold uppercase tracking-widest mb-4">
          <Calculator className="w-4 h-4 text-gold" /> {badge}
        </div>
        <h4 className="text-3xl md:text-4xl font-display font-bold text-cream mb-3">
          {heading}
        </h4>
        <p className="text-cream/70 text-sm md:text-base font-light max-w-2xl mx-auto mb-4">
          {description}
        </p>
        
        {/* Industry Category Reference */}
        <div className="text-[10px] text-cream/70 uppercase tracking-widest font-sans">
          {referenceNote}
        </div>
      </div>

      {/* Preset Quick-Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {presets.map((preset) => (
          <button
            key={preset.label}
            type="button"
            data-calc-preset={preset.amount}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none ${
              defaultFee === preset.amount
                ? 'bg-gold text-charcoal-950 border-gold'
                : 'bg-navy/40 text-cream/80 border-gold/30 hover:border-gold hover:text-cream'
            }`}
          >
            {preset.label} (${preset.amount}/mo)
          </button>
        ))}
      </div>

      {/* Slider Control */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="monthly-fee-slider" className="text-xs font-bold uppercase tracking-wider text-gold">
            {sliderLabel}
          </label>
          <span className="text-2xl font-display font-bold text-cream">
            <span data-calc-fee>${defaultFee}</span><span className="text-sm font-light text-cream/70">/mo</span>
          </span>
        </div>
        <input
          id="monthly-fee-slider"
          type="range"
          min={minSlider}
          max={maxSlider}
          step={step}
          defaultValue={defaultFee}
          className="w-full h-2 bg-charcoal-950 rounded-lg appearance-none cursor-pointer accent-gold border border-gold/20 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
        />
        <div className="flex justify-between text-[10px] text-cream/70 mt-1 uppercase tracking-widest font-mono">
          <span>${minSlider}/mo</span>
          <span>$400/mo</span>
          <span>${maxSlider}/mo</span>
        </div>
      </div>

      {/* Comparison Grid Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* 1-Year Card */}
        <div className="bg-charcoal-950/60 border border-gold/20 p-6 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-cream/70 block mb-2">{cards.oneYear.title}</span>
          <div data-calc-1yr className="text-3xl font-display font-bold text-red-400 mb-2">
            ${initialAnnualTax.toLocaleString()}
          </div>
          <p className="text-cream/70 text-xs font-light">{cards.oneYear.subtitle}</p>
        </div>

        {/* 3-Year Card */}
        <div className="bg-charcoal-950/60 border border-gold/20 p-6 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-cream/70 block mb-2">{cards.threeYear.title}</span>
          <div data-calc-3yr className="text-3xl font-display font-bold text-red-400 mb-2">
            ${initialThreeYearTax.toLocaleString()}
          </div>
          <p className="text-cream/70 text-xs font-light">{cards.threeYear.subtitle}</p>
        </div>

        {/* 5-Year Net Saved Card */}
        <div className="bg-gold/10 border border-gold/50 p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gold/20 blur-xl rounded-full" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold block mb-2">{cards.fiveYear.title}</span>
          <div data-calc-5yr className="text-4xl font-display font-bold text-gold mb-2">
            ${initialFiveYearTax.toLocaleString()}
          </div>
          <p className="text-cream/90 text-xs font-light">{cards.fiveYear.subtitle}</p>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gold/20 mb-6">
        <div className="flex items-center gap-3 text-cream/90 text-sm font-light text-left">
          <ShieldCheck className="w-6 h-6 text-gold shrink-0" />
          <span>{summary.text}</span>
        </div>
        <a
          href={summary.ctaHref}
          className="px-8 py-3 bg-gold text-charcoal-950 font-bold uppercase tracking-[0.2em] text-xs hover:bg-cream transition-colors shrink-0 flex items-center gap-2 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
        >
          {summary.ctaText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Nominative Fair Use & Trademark Disclaimer */}
      <p className="text-[10px] text-cream/65 font-sans leading-relaxed text-center border-t border-gold/10 pt-4">
        {disclaimer}
      </p>
    </div>
  );
};
