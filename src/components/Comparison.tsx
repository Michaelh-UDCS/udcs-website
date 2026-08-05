import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Check, X } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <Section id="comparison" background="darker">
      <div className="text-center mb-16">
        <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-2">The Difference</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-cream">
          Traditional Agencies vs. Universal Dynamic
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Traditional Agencies Card */}
        <Card className="flex flex-col border border-red-900/30 bg-red-950/10">
          <h4 className="text-2xl font-bold text-red-200/70 mb-8 font-display border-b border-red-900/30 pb-4">Traditional Agencies</h4>
          <ul className="space-y-6 text-cream/70">
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-900/20 p-1 rounded-full"><X className="w-4 h-4 text-red-400" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Vendor Lock-In:</strong>
                <span className="font-light text-sm">Proprietary tools that hold your domain and site hostage.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-900/20 p-1 rounded-full"><X className="w-4 h-4 text-red-400" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Endless Monthly Trap:</strong>
                <span className="font-light text-sm">High recurring fees just to edit basic text.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-900/20 p-1 rounded-full"><X className="w-4 h-4 text-red-400" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Slow Timelines:</strong>
                <span className="font-light text-sm">Months of slow meetings and agency overhead.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-900/20 p-1 rounded-full"><X className="w-4 h-4 text-red-400" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Web-Only Focus:</strong>
                <span className="font-light text-sm">Zero help with banking, state rules, or federal setup.</span>
              </div>
            </li>
          </ul>
        </Card>

        {/* Universal Dynamic Approach Card */}
        <Card className="flex flex-col border border-gold/40 bg-gold/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full blur-3xl"></div>
          <h4 className="text-2xl font-bold text-gold mb-8 font-display border-b border-gold/20 pb-4">Universal Dynamic</h4>
          <ul className="space-y-6 text-cream/80">
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">100% True Ownership:</strong>
                <span className="font-light text-sm">Handed over directly to your Google account on Day 1.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Virtually $0/mo Base Hosting:</strong>
                <span className="font-light text-sm">Powered by Google Cloud/Firebase with zero recurring agency markups.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">No-Code Self-Hosting Training:</strong>
                <span className="font-light text-sm">Plain-English training so you can manage text and updates without a developer.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Turnkey Launch & Filings:</strong>
                <span className="font-light text-sm">50-State & Texas SOS, IRS EIN, SAM.gov, or standalone web redesign.</span>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
};
