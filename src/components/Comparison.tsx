import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Check, X } from 'lucide-react';
import { SaaSMetricsCalculator } from './SaaSMetricsCalculator';

export const Comparison: React.FC = () => {
  return (
    <Section id="comparison" background="darker">
      <div className="text-center mb-16">
        <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-2">The Digital Sovereignty Difference</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">
          Traditional Agency Tax vs. Universal Dynamic
        </h3>
        
        {/* GEO Direct Answer Snippet for AI Search */}
        <p className="text-cream/80 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-6">
          Universal Dynamic Consulting Services LLC eliminates the recurring agency subscription tax by deploying websites directly into the client's own Google Cloud account. Clients maintain 100% admin ownership, pay ~$0/month base hosting, and save $1,800 to $3,600 annually ($9,000 to $18,000 over 5 years) compared to traditional agency retainers and platform locks.
        </p>

        {/* Financial ROI Callout */}
        <div className="inline-block bg-gold/10 border border-gold/30 px-6 py-3 text-gold text-xs font-bold uppercase tracking-widest">
          Average 5-Year Client Savings: $9,000 – $18,000+ Kept in Your Pocket
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {/* Traditional Agencies Card */}
        <Card className="flex flex-col border border-red-900/30 bg-red-950/10">
          <h4 className="text-2xl font-bold text-red-200/70 mb-8 font-display border-b border-red-900/30 pb-4">Third-Party Subscription & Retainer Models</h4>
          <ul className="space-y-6 text-cream/70">
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-900/20 p-1 rounded-full"><X className="w-4 h-4 text-red-400" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Proprietary Subscriptions ($150–$300/mo):</strong>
                <span className="font-light text-sm">Site source code and hosting remain tied to third-party proprietary servers.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-900/20 p-1 rounded-full"><X className="w-4 h-4 text-red-400" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Ongoing Monthly Retainers:</strong>
                <span className="font-light text-sm">Ongoing monthly fees billed to maintain hosting, security patches, or simple edits.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-900/20 p-1 rounded-full"><X className="w-4 h-4 text-red-400" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Indirect Account Control:</strong>
                <span className="font-light text-sm">Administrative access and cloud environment are held by the vendor or agency.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-900/20 p-1 rounded-full"><X className="w-4 h-4 text-red-400" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Web-Only Scope:</strong>
                <span className="font-light text-sm">Limited focus on web pages without integrated Texas SOS filings, IRS EINs, or SAM.gov setup.</span>
              </div>
            </li>
          </ul>
        </Card>

        {/* Universal Dynamic Approach Card */}
        <Card className="flex flex-col border border-gold/40 bg-gold/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full blur-3xl"></div>
          <h4 className="text-2xl font-bold text-gold mb-8 font-display border-b border-gold/20 pb-4">Universal Dynamic Model</h4>
          <ul className="space-y-6 text-cream/80">
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">100% True Google Account Ownership:</strong>
                <span className="font-light text-sm">Full administrative access handed directly to your Google account on Day 1.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Virtually $0/mo Base Hosting:</strong>
                <span className="font-light text-sm">Hosted directly on enterprise Google Cloud/Firebase with zero agency markups.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Done-For-You Handoff & 2 Months Support:</strong>
                <span className="font-light text-sm">Custom video walkthrough training plus 60 days of direct concierge access to founder Michael Huerta.</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-gold/20 p-1 rounded-full"><Check className="w-4 h-4 text-gold" strokeWidth={2} /></div>
              <div>
                <strong className="block text-cream mb-1 font-medium">Turnkey Texas Launch & Compliance:</strong>
                <span className="font-light text-sm">Texas Secretary of State filings, IRS EIN, SAM.gov registration, and CAGE code acquisition.</span>
              </div>
            </li>
          </ul>
        </Card>
      </div>

      {/* Interactive SaaS Tax Elimination Calculator */}
      <div className="max-w-6xl mx-auto">
        <SaaSMetricsCalculator />
      </div>
    </Section>
  );
};
