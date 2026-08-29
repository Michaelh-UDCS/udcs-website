import React from 'react';
import { Section } from './ui/Section';
import { Send } from 'lucide-react';
import { contactContent } from '../content/contact';

export const Contact: React.FC = () => {
  const { sectionId, badge, heading, subhead, inquiryOptions } = contactContent;

  return (
    <Section id={sectionId}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">{badge}</h2>
          <h3 className="text-4xl md:text-6xl font-display font-medium text-cream mb-6">
            {heading}
          </h3>
          <p className="text-cream/70 text-lg leading-relaxed font-light">
            {subhead}
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-navy/20 border border-gold/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gold/50 to-transparent"></div>

          <form
            method="POST"
            action="https://formsubmit.co/michael@universal-dynamic.com"
            className="space-y-8"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_next" value="https://universal-dynamic.com/thank-you" />
            <input type="hidden" name="_subject" value="New Universal Dynamic Client Inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            {/* Anti-spam Honeypot */}
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
                  Full Name <span className="text-gold/60">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  className="ud-input"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
                  Email Address <span className="text-gold/60">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. sarah@example.com"
                  className="ud-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="e.g. (979) 555-0123"
                  className="ud-input"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
                  Primary Need <span className="text-gold/60">*</span>
                </label>
                <div className="relative">
                  <select
                    id="type"
                    name="type"
                    required
                    defaultValue={inquiryOptions[0]}
                    className="ud-input ud-input--select"
                  >
                    {inquiryOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-charcoal-950 text-cream">{opt}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gold">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <label htmlFor="currentUrl" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
                  Current Website URL
                </label>
                <input
                  type="text"
                  id="currentUrl"
                  name="currentUrl"
                  placeholder="e.g. mybusiness.com (or None)"
                  className="ud-input"
                />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="currentPlatform" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
                  Current Platform
                </label>
                <div className="relative">
                  <select
                    id="currentPlatform"
                    name="currentPlatform"
                    defaultValue="Squarespace / Wix / GoDaddy"
                    className="ud-input ud-input--select"
                  >
                    <option value="Squarespace / Wix / GoDaddy" className="bg-charcoal-950 text-cream">Squarespace / Wix / GoDaddy</option>
                    <option value="WordPress / WooCommerce" className="bg-charcoal-950 text-cream">WordPress / WooCommerce</option>
                    <option value="Shopify" className="bg-charcoal-950 text-cream">Shopify</option>
                    <option value="Custom / Other Host" className="bg-charcoal-950 text-cream">Custom / Other Host</option>
                    <option value="No Website Yet" className="bg-charcoal-950 text-cream">No Website Yet (New Business)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gold">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="takesPaymentsOnline" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
                  Online Payments?
                </label>
                <div className="relative">
                  <select
                    id="takesPaymentsOnline"
                    name="takesPaymentsOnline"
                    defaultValue="No / Invoicing Only"
                    className="ud-input ud-input--select"
                  >
                    <option value="No / Invoicing Only" className="bg-charcoal-950 text-cream">No / Invoicing Only</option>
                    <option value="Yes (Credit Card / E-commerce)" className="bg-charcoal-950 text-cream">Yes (Credit Card / E-commerce)</option>
                    <option value="Planning to Add Soon" className="bg-charcoal-950 text-cream">Planning to Add Soon</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gold">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
                Project Scope & Requirements <span className="text-gold/60">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your business, current monthly subscription pain points, or filing goals..."
                className="ud-input ud-input--area"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal-950 font-bold uppercase tracking-[0.2em] py-4 transition-all duration-300 flex items-center justify-center gap-3 text-xs group cursor-pointer focus-visible:ring-1 focus-visible:ring-gold"
            >
              Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};