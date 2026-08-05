import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { ExternalLink, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <Section id="case-study" background="gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 border border-gold/30 rounded-none bg-navy/30 backdrop-blur-sm text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 font-sans">
            Proven Launch Model
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-4">
            Featured Case Study: Iron Prairie Fabrication
          </h2>
          <p className="text-cream/60 max-w-2xl mx-auto font-light text-base md:text-lg font-sans">
            How Universal Dynamic built a Texas welding and heavy fabrication company from the ground up—from state setup to enterprise Google Cloud web architecture.
          </p>
        </div>

        <Card className="border border-gold/30 bg-navy/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-[11px] font-bold uppercase tracking-wider font-sans">
                  Texas LLC & Web Launch
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-cream/70 text-[11px] font-medium tracking-wider font-sans">
                  Woman-Owned Business
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold text-cream leading-tight">
                Iron Prairie Fabrication Group LLC
              </h3>

              <p className="text-cream/75 text-sm md:text-base font-light leading-relaxed font-sans">
                Delivering high-precision welding, laser plate cutting, custom ranch equipment, and specialty builds for agricultural operations, O&amp;G industrial facilities, and public agencies across Texas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 font-sans">
                <div className="flex items-start gap-3 bg-charcoal-950/40 p-4 border border-gold/10">
                  <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-cream text-sm font-medium">100% Digital Ownership</strong>
                    <span className="text-cream/60 text-xs font-light">Self-hosted on Google Cloud with zero monthly agency retainers.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-charcoal-950/40 p-4 border border-gold/10">
                  <Building2 className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-cream text-sm font-medium">Government Contract Ready</strong>
                    <span className="text-cream/60 text-xs font-light">Positioned for SAM.gov, TPWD, National Parks &amp; federal procurement.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 border-t border-gold/10 pt-4 font-sans">
                <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-3">Key Project Deliverables:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cream/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Texas Secretary of State Filing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Google Workspace Business Email</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>High-Speed React/Firebase Web App</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Public Sector Procurement Alignment</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 font-sans">
                <a
                  href="https://ironprairiefabrication.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-transparent border border-gold text-gold font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-charcoal-950 transition-colors duration-300 shadow-lg"
                >
                  Visit Live Website <ExternalLink className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-charcoal-950/60 border border-gold/20 p-6 md:p-8 space-y-6 font-sans">
              <div className="border-b border-gold/10 pb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold block mb-2">Capabilities Focus</span>
                <h4 className="text-xl font-display font-bold text-cream mb-3">Ranch, Industry &amp; Agency Steelwork</h4>
                <p className="text-cream/60 text-xs font-light leading-relaxed">
                  From livestock pens and ranch gates to custom bunkers, tornado shelters, and park infrastructure support.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-white/5 text-xs">
                  <span className="text-cream/60">Client Location:</span>
                  <span className="text-cream font-medium">Texas, USA</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5 text-xs">
                  <span className="text-cream/60">Infrastructure:</span>
                  <span className="text-cream font-medium">Google Cloud &amp; Firebase</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5 text-xs">
                  <span className="text-cream/60">Hosting Retainer:</span>
                  <span className="text-gold font-bold">$0 / Month (Client Owned)</span>
                </div>
                <div className="flex items-center justify-between py-2 text-xs">
                  <span className="text-cream/60">Status:</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live &amp; Operational
                  </span>
                </div>
              </div>

              <div className="bg-navy/40 p-4 border border-gold/10 text-center">
                <p className="text-xs text-cream/70 italic">
                  &ldquo;Field-proven on ranch and industrial jobs, with communication and documentation suited for public-sector procurement workflows.&rdquo;
                </p>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </Section>
  );
};
