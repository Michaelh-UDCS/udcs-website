import React from 'react';
import { Head } from 'vite-react-ssg';
import { CheckCircle2, ArrowLeft, Phone, Mail } from 'lucide-react';
import { routeMeta } from '../seo';

export const ThankYouPage: React.FC = () => {
  const meta = routeMeta['/thank-you'];

  return (
    <main id="main-content" className="min-h-screen bg-charcoal-950 text-cream pt-32 pb-24 flex items-center justify-center">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.robots && <meta name="robots" content={meta.robots} />}
      </Head>

      <div className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
        <div className="border border-gold/20 bg-navy/20 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gold/50 to-transparent"></div>

          <div className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-gold" strokeWidth={1.5} />
          </div>

          <span className="inline-block py-1 px-4 border border-gold/30 bg-navy/40 text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            Inquiry Received
          </span>

          <h1 className="font-display font-medium text-3xl sm:text-4xl text-cream mb-4">
            Thank You for Connecting
          </h1>

          <p className="text-cream/70 text-base sm:text-lg font-light leading-relaxed mb-8">
            Your project details have been safely delivered directly to Michael Huerta. We review all business inquiries within 1 business day.
          </p>

          <div className="border-t border-gold/10 pt-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-charcoal-950/40 border border-gold/10">
              <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" /> Urgent Questions?
              </p>
              <a href="tel:+19794176489" className="text-cream hover:text-gold text-sm font-medium transition-colors">
                (979) 417-6489
              </a>
            </div>
            <div className="p-4 bg-charcoal-950/40 border border-gold/10">
              <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> Direct Email
              </p>
              <a href="mailto:michael@universal-dynamic.com" className="text-cream hover:text-gold text-sm font-medium transition-colors">
                michael@universal-dynamic.com
              </a>
            </div>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy hover:bg-navy/80 text-cream border border-gold/30 text-xs uppercase tracking-widest font-bold transition-all hover:border-gold hover:shadow-[0_0_15px_rgba(197,165,114,0.2)]"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </a>
        </div>
      </div>
    </main>
  );
};
