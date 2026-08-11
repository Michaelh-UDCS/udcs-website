import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Cloud, Building, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Solutions: React.FC = () => {
  return (
    <Section id="solutions" background="darker">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-cream">
            Solutions Architecture
          </h3>
        </div>
        <p className="text-cream/70 max-w-md text-right md:text-left font-light">
          Providing the essential keys to unlock government contracts and the digital infrastructure to execute them.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Rapid Cloud Web Architecture */}
        <Card className="min-h-[400px] flex flex-col justify-between group hover:border-gold/40 transition-colors duration-500">
          <div>
            <div className="w-14 h-14 bg-navy rounded-sm flex items-center justify-center mb-8 border border-gold/20 group-hover:border-gold/50 transition-all">
              <Cloud className="w-7 h-7 text-gold" strokeWidth={1} />
            </div>
            <h4 className="text-2xl font-bold text-cream mb-4 font-display">Texas SOS & Entity Filings</h4>
            <p className="text-cream/60 leading-relaxed mb-6 font-light text-sm">
              We navigate Texas Secretary of State filings and administrative setup so your business is legally compliant from Day 1.
            </p>
            <ul className="space-y-3 text-cream/80 text-sm">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                <span className="font-light">Texas Secretary of State entity filings & IRS EIN registration</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                <span className="font-light">Business bank account setup, credit processing, & supplier applications</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                <span className="font-light">Woman-Owned (WOSB / EDWOSB) & Minority-Owned (MBE) certification guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                <span className="font-light">Shipping release forms, credit apps, & back-office paperwork setup</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-8 border-t border-gold/10 flex justify-end">
            <button className="text-xs font-bold uppercase tracking-wider text-cream/80 flex items-center gap-2 group-hover:text-gold transition-colors font-sans">
              Learn More <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </Card>

        {/* Turnkey Startup & Government Readiness */}
        <Card className="min-h-[400px] flex flex-col justify-between group hover:border-gold/40 transition-colors duration-500" delay={0.2}>
          <div>
            <div className="w-14 h-14 bg-navy rounded-sm flex items-center justify-center mb-8 border border-gold/20 group-hover:border-gold/50 transition-all">
              <Building className="w-7 h-7 text-gold" strokeWidth={1} />
            </div>
            <h4 className="text-2xl font-bold text-cream mb-4 font-display">Unlock Government & Prime Contracts</h4>
            <p className="text-cream/60 leading-relaxed mb-6 font-light text-sm">
              Get fully onboarded and compliant to bid on federal, state, and prime contractor jobs.
            </p>
            <ul className="space-y-3 text-cream/80 text-sm">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                <span className="font-light">Complete SAM.gov entity registration & profile setup</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                <span className="font-light">CAGE code acquisition & Unique Entity ID (UEI) allocation</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                <span className="font-light">HUBZone and diversity tax credit assistance</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-8 border-t border-gold/10 flex justify-end">
            <button className="text-xs font-bold uppercase tracking-wider text-cream/80 flex items-center gap-2 group-hover:text-gold transition-colors font-sans">
              Learn More <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </Card>

        {/* Managed Care & Maintenance Plans */}
        <Card className="min-h-[400px] flex flex-col justify-between group hover:border-gold/40 transition-colors duration-500" delay={0.4}>
          <div>
            <div className="w-14 h-14 bg-navy rounded-sm flex items-center justify-center mb-8 border border-gold/20 group-hover:border-gold/50 transition-all">
              <ShieldCheck className="w-7 h-7 text-gold" strokeWidth={1} />
            </div>
            <h4 className="text-2xl font-bold text-cream mb-4 font-display">Website Redesign & Self-Hosting (100% Owned)</h4>
            <p className="text-cream/60 leading-relaxed mb-6 font-light text-sm">
              Standout custom websites or modern redesigns built on Google Cloud with zero agency markups.
            </p>
            <ul className="space-y-3 text-cream/80 text-sm">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                <span className="font-light">High-speed React website redesign launched on Google Firebase ($0/mo base hosting)</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                <span className="font-light">Migrate from third-party subscription platforms and traditional CMS hosting to true 100% Google account ownership</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                <span className="font-light">Official business email (you@yourcompany.com) via Google Workspace</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" strokeWidth={1} />
                <span className="font-light">Plain-English walkthrough training so you can edit text without code</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-8 border-t border-gold/10 flex justify-end">
            <button className="text-xs font-bold uppercase tracking-wider text-cream/80 flex items-center gap-2 group-hover:text-gold transition-colors font-sans">
              Learn More <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </Card>

      </div>
    </Section>
  );
};