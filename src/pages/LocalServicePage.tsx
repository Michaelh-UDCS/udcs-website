import React from 'react';
import { Head } from 'vite-react-ssg';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Comparison } from '../components/Comparison';
import { Solutions } from '../components/Solutions';
import { Contact } from '../components/Contact';
import { localServiceContent } from '../content/localService';

export interface LocalServiceProps {
  city: string;
  state: string;
  county: string;
  meta: {
    title: string;
    description: string;
    canonical: string;
    robots?: string;
  };
  schema: any;
  heroHeadline: React.ReactNode;
  heroSubheadline: React.ReactNode;
  heroBody: string;
}

const LocalHero: React.FC<{ props: LocalServiceProps }> = ({ props }) => {
  const { heroTagline, ctaButtonText } = localServiceContent;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-950 pt-32 pb-16">
      {/* Dynamic Cursor Glow Layer */}
      <div
        className="hero-glow-layer pointer-events-none absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-[url('/assets/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <div className="mb-6 max-w-4xl">
          <span className="inline-block py-1.5 px-6 border border-gold/30 rounded-none bg-navy/30 backdrop-blur-sm text-gold-muted text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-8">
            {heroTagline} | {props.city}, {props.state}
          </span>

          <h1 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-white mb-8">
            {props.heroHeadline}
            <span className="block text-2xl sm:text-4xl md:text-5xl font-light text-cream/90 mt-4 tracking-normal font-sans">
              {props.heroSubheadline}
            </span>
          </h1>

          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-14 font-light leading-relaxed tracking-wide font-sans">
            {props.heroBody}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="group relative px-10 py-4 bg-transparent border border-gold text-gold font-bold tracking-[0.2em] uppercase text-xs overflow-hidden transition-all duration-500 hover:text-charcoal-950"
            >
              <span className="relative z-10 flex items-center gap-3">
                {ctaButtonText} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50 animate-bounce-subtle pointer-events-none"
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6" strokeWidth={1} />
      </div>
    </section>
  );
};

export const LocalServicePage: React.FC<LocalServiceProps> = (props) => {
  const { mapHeadingPrefix, mapBodyTemplate } = localServiceContent;

  return (
    <main>
      <Head>
        <title>{props.meta.title}</title>
        <meta name="description" content={props.meta.description} />
        {props.meta.robots && <meta name="robots" content={props.meta.robots} />}
        <link rel="canonical" href={props.meta.canonical} />
        <meta property="og:url" content={props.meta.canonical} />
        <meta property="og:title" content={props.meta.title} />
        <meta property="og:description" content={props.meta.description} />
        <meta name="twitter:url" content={props.meta.canonical} />
        <meta name="twitter:title" content={props.meta.title} />
        <meta name="twitter:description" content={props.meta.description} />
        <script type="application/ld+json">{JSON.stringify(props.schema)}</script>
      </Head>
      
      <LocalHero props={props} />
      
      {/* We reuse the core blocks because the primary business value prop is the same, 
          only the schema, metadata, and hero are highly localized. */}
      <Comparison />
      <Solutions />
      
      {/* Localized Map & Contact CTA Section */}
      <section className="bg-charcoal-900 py-24 relative overflow-hidden border-t border-navy">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-white mb-6">{mapHeadingPrefix} {props.city}, {props.state}</h2>
            <p className="text-cream/70 text-lg md:text-xl font-light font-sans max-w-2xl mx-auto">
              {mapBodyTemplate.replace('{county}', props.county)}
            </p>
          </div>
          <div className="w-full h-96 rounded-none border border-gold/30 overflow-hidden shadow-2xl">
            {/* OpenStreetMap Embed - No API Key Required */}
            <iframe 
              title="Interactive service area map for Lake Jackson, TX and Brazoria County"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              loading="lazy"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${props.schema.geo.longitude - 0.05}%2C${props.schema.geo.latitude - 0.05}%2C${props.schema.geo.longitude + 0.05}%2C${props.schema.geo.latitude + 0.05}&layer=mapnik&marker=${props.schema.geo.latitude}%2C${props.schema.geo.longitude}`}
              style={{ border: '1px solid black', filter: 'grayscale(60%) invert(90%) hue-rotate(180deg)' }}
            ></iframe>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
};
