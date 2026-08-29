import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { Hexagon, Home, Mail } from 'lucide-react';
import { routeMeta } from '../seo';

export const NotFoundPage: React.FC = () => {
  const meta = routeMeta['/404'] || {
    title: '404 - Page Not Found | Universal Dynamic Consulting Services LLC',
    description: 'The requested page could not be found.',
    canonical: 'https://universal-dynamic.com/404',
    robots: 'noindex, nofollow',
  };

  return (
    <main id="main-content" className="min-h-screen bg-charcoal-950 text-cream flex items-center justify-center pt-24 pb-16 px-6">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <div className="relative inline-flex items-center justify-center mb-8">
          <Hexagon className="w-24 h-24 text-gold/30" strokeWidth={1} />
          <span className="absolute font-display font-bold text-3xl text-gold tracking-wider">404</span>
        </div>

        <span className="inline-block py-1.5 px-6 border border-gold/30 bg-navy/30 text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
          Error 404 // Route Undefined
        </span>

        <h1 className="font-display font-medium text-4xl sm:text-5xl text-white mb-6 leading-tight">
          Page Not Found
        </h1>

        <p className="text-cream/70 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-md mx-auto">
          The resource you are looking for has either moved, been retired, or does not exist on this server.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-navy hover:bg-navy/80 text-cream border border-gold/30 text-xs uppercase tracking-widest font-sans font-bold transition-all hover:border-gold hover:shadow-[0_0_15px_rgba(197,165,114,0.15)] focus-visible:ring-1 focus-visible:ring-gold"
          >
            <Home className="w-4 h-4 text-gold" strokeWidth={1.5} />
            Return Home
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-transparent border border-gold/20 text-cream hover:text-gold hover:border-gold/60 text-xs uppercase tracking-widest font-sans transition-colors focus-visible:ring-1 focus-visible:ring-gold"
          >
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            Contact Michael
          </Link>
        </div>
      </div>
    </main>
  );
};