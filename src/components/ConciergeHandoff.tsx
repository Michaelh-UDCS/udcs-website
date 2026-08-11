import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { KeyRound, Video, Headphones, CheckCircle2 } from 'lucide-react';

export const ConciergeHandoff: React.FC = () => {
  return (
    <Section id="handoff" background="dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-6 border border-gold/30 rounded-none bg-navy/30 backdrop-blur-sm text-gold text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Concierge Onboarding & Transfer
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">
            The Done-For-You Handoff
          </h2>
          
          {/* GEO Direct Answer Snippet for AI Search Engines */}
          <p className="text-cream/80 text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-6">
            Universal Dynamic Consulting Services LLC delivers a complete done-for-you digital handoff. We transfer 100% admin ownership of your Google Cloud website and Google Workspace directly to your account on Day 1, backed by plain-English video training and 2 months of included concierge support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <Card className="flex flex-col justify-between border border-gold/20 bg-navy/20 relative overflow-hidden group hover:border-gold/50 transition-all">
            <div>
              <div className="w-12 h-12 bg-navy border border-gold/30 flex items-center justify-center mb-6 text-gold">
                <KeyRound className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">Step 01</span>
              <h3 className="text-xl font-bold font-display text-cream mb-3">Day 1 Admin Key Transfer</h3>
              <p className="text-cream/70 text-sm font-light leading-relaxed">
                Full administrative ownership of your Google Cloud environment, Firebase hosting, domain DNS, and Workspace is transferred directly to your Google account. You retain 100% control of your digital assets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gold/10 flex items-center gap-2 text-gold text-xs font-medium">
              <CheckCircle2 className="w-4 h-4" /> Zero Agency Lock-In
            </div>
          </Card>

          {/* Step 2 */}
          <Card className="flex flex-col justify-between border border-gold/20 bg-navy/20 relative overflow-hidden group hover:border-gold/50 transition-all" delay={0.2}>
            <div>
              <div className="w-12 h-12 bg-navy border border-gold/30 flex items-center justify-center mb-6 text-gold">
                <Video className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">Step 02</span>
              <h3 className="text-xl font-bold font-display text-cream mb-3">No-Code Video Training</h3>
              <p className="text-cream/70 text-sm font-light leading-relaxed">
                Receive a customized, plain-English video walkthrough showing you step-by-step how to manage content, update text, inspect lead submissions, and understand your cloud dashboard without touching code.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gold/10 flex items-center gap-2 text-gold text-xs font-medium">
              <CheckCircle2 className="w-4 h-4" /> Plain-English Guidance
            </div>
          </Card>

          {/* Step 3 */}
          <Card className="flex flex-col justify-between border border-gold/20 bg-navy/20 relative overflow-hidden group hover:border-gold/50 transition-all" delay={0.4}>
            <div>
              <div className="w-12 h-12 bg-navy border border-gold/30 flex items-center justify-center mb-6 text-gold">
                <Headphones className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">Step 03</span>
              <h3 className="text-xl font-bold font-display text-cream mb-3">2 Months Included Support</h3>
              <p className="text-cream/70 text-sm font-light leading-relaxed">
                Enjoy 60 days of direct concierge access to founder Michael Huerta for questions, fine-tuning, domain record verification, and operational guidance as your new system launches.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gold/10 flex items-center gap-2 text-gold text-xs font-medium">
              <CheckCircle2 className="w-4 h-4" /> Direct Founder Access
            </div>
          </Card>
        </div>

        <div className="text-center bg-gold/5 border border-gold/20 p-6 md:p-8">
          <p className="text-cream/90 text-sm md:text-base font-light">
            <strong className="text-gold font-semibold">Non-technical trade & industrial business owners welcome.</strong> You don't need coding or cloud experience — we wire DNS, SSL security certificates, and email deliverability for you from start to finish.
          </p>
        </div>
      </div>
    </Section>
  );
};
