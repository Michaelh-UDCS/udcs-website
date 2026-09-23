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
    breakdownLabel,
    summary,
    disclaimer,
  } = calculatorContent;

  const initialAnnualTax = defaultFee * 12;
  const initialThreeYearTax = defaultFee * 36;
  const initialFiveYearTax = defaultFee * 60;

  const renderFiveYear = () => (
    <div className="bg-gold/10 border border-gold/50 p-6 text-center relative overflow-hidden calc-result">
      <div className="absolute top-0 right-0 w-20 h-20 bg-gold/15 rounded-full" aria-hidden="true" />
      <span className="text-[11px] font-bold uppercase tracking-widest text-gold block mb-2">
        {cards.fiveYear.title}
      </span>
      <div data-calc-5yr className="text-4xl font-display font-bold text-gold mb-2">
        ${initialFiveYearTax.toLocaleString()}
      </div>
      <p className="text-cream/90 text-xs font-light">{cards.fiveYear.subtitle}</p>
    </div>
  );

  const renderOneYear = () => (
    <div className="bg-charcoal-950/60 border border-gold/20 p-5 md:p-6 text-center calc-result">
      <span className="text-[11px] font-bold uppercase tracking-widest text-cream/70 block mb-2">
        {cards.oneYear.title}
      </span>
      <div data-calc-1yr className="text-2xl md:text-3xl font-display font-bold text-red-400 mb-2">
        ${initialAnnualTax.toLocaleString()}
      </div>
      <p className="text-cream/70 text-xs font-light">{cards.oneYear.subtitle}</p>
    </div>
  );

  const renderThreeYear = () => (
    <div className="bg-charcoal-950/60 border border-gold/20 p-5 md:p-6 text-center calc-result">
      <span className="text-[11px] font-bold uppercase tracking-widest text-cream/70 block mb-2">
        {cards.threeYear.title}
      </span>
      <div data-calc-3yr className="text-2xl md:text-3xl font-display font-bold text-red-400 mb-2">
        ${initialThreeYearTax.toLocaleString()}
      </div>
      <p className="text-cream/70 text-xs font-light">{cards.threeYear.subtitle}</p>
    </div>
  );

  return (
    <div id="saas-calculator" className="mt-8 md:mt-10 bg-navy/30 border border-gold/30 p-5 sm:p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold via-gold/50 to-transparent" aria-hidden="true" />

      <div className="text-center mb-4 md:mb-10">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-3 py-1.5 text-gold text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 md:mb-4">
          <Calculator className="w-4 h-4 text-gold" aria-hidden="true" /> {badge}
        </div>
        <h4 className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-cream mb-1.5 md:mb-3">
          {heading}
        </h4>
        <p className="text-cream/70 text-sm md:text-base font-light max-w-2xl mx-auto mb-0 md:mb-4 line-clamp-2 md:line-clamp-none">
          {description}
        </p>
        <div className="hidden md:block text-[10px] text-cream/70 uppercase tracking-widest font-sans">
          {referenceNote}
        </div>
      </div>

      {/* Mobile: compact select · Desktop: preset chips */}
      <div className="md:hidden mb-5 max-w-md mx-auto">
        <label htmlFor="calc-tier-select" className="block text-[10px] font-bold uppercase tracking-wider text-gold mb-2">
          Cost tier
        </label>
        <select
          id="calc-tier-select"
          data-calc-select
          defaultValue={defaultFee}
          className="ud-input ud-input--select w-full min-h-11 text-sm"
        >
          {presets.map((preset) => (
            <option key={preset.amount} value={preset.amount}>
              {preset.label} (${preset.amount}/mo)
            </option>
          ))}
        </select>
      </div>

      <div className="hidden md:flex flex-wrap justify-center gap-3 mb-8">
        {presets.map((preset) => (
          <button
            key={preset.label}
            type="button"
            data-calc-preset={preset.amount}
            className={`px-4 py-2 min-h-11 text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none ${
              defaultFee === preset.amount
                ? 'bg-gold text-charcoal-950 border-gold'
                : 'bg-navy/40 text-cream/80 border-gold/30 hover:border-gold hover:text-cream'
            }`}
          >
            {preset.label} (${preset.amount}/mo)
          </button>
        ))}
      </div>

      <div className="max-w-xl mx-auto mb-6 md:mb-12">
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="monthly-fee-slider" className="text-xs font-bold uppercase tracking-wider text-gold">
            {sliderLabel}
          </label>
          <span className="text-2xl font-display font-bold text-cream">
            <span data-calc-fee>${defaultFee}</span>
            <span className="text-sm font-light text-cream/70">/mo</span>
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
          <span className="hidden sm:inline">$400/mo</span>
          <span>${maxSlider}/mo</span>
        </div>
      </div>

      {/* Mobile: one aha — dominant 5-year; 1yr/3yr behind native details */}
      <div className="md:hidden mb-6">
        {renderFiveYear()}
        <details className="mt-4 border border-gold/15 group">
          <summary className="min-h-11 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-gold cursor-pointer list-none flex justify-between items-center focus-visible:outline focus-visible:outline-1 focus-visible:outline-gold focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden">
            {breakdownLabel}
            <span className="text-gold/60 group-open:rotate-180 transition-transform" aria-hidden="true">▾</span>
          </summary>
          <div className="grid grid-cols-1 gap-3 p-3 pt-0">
            {renderOneYear()}
            {renderThreeYear()}
          </div>
        </details>
      </div>

      {/* Desktop: 3-column grid (1yr · 3yr · 5yr) */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10">
        {renderOneYear()}
        {renderThreeYear()}
        {renderFiveYear()}
      </div>

      <div className="flex flex-col gap-4 pt-5 md:pt-6 border-t border-gold/20 mb-4 md:mb-6">
        <div className="flex items-start gap-3 text-cream/90 text-sm font-light text-left">
          <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-gold shrink-0 mt-0.5" aria-hidden="true" />
          <span>{summary.text}</span>
        </div>
        <a
          href={summary.ctaHref}
          className="w-full px-8 py-3.5 min-h-11 bg-gold text-charcoal-950 font-bold uppercase tracking-[0.2em] text-xs hover:bg-cream transition-colors flex items-center justify-center gap-2 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
        >
          {summary.ctaText} <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      <details className="border-t border-gold/10 pt-3 group">
        <summary className="text-[10px] text-cream/55 uppercase tracking-wider font-sans cursor-pointer list-none flex justify-between items-center min-h-11 focus-visible:outline focus-visible:outline-1 focus-visible:outline-gold [&::-webkit-details-marker]:hidden">
          Legal & trademark notice
          <span className="text-gold/60 group-open:rotate-180 transition-transform" aria-hidden="true">▾</span>
        </summary>
        <p className="text-[10px] text-cream/65 font-sans leading-relaxed mt-3">
          {disclaimer}
        </p>
      </details>
    </div>
  );
};
