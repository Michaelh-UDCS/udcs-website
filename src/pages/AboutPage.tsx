import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { routeMeta } from '../seo';
import { aboutContent } from '../content/about';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Michael Huerta',
  jobTitle: 'CEO & Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Universal Dynamic Consulting Services LLC',
  },
  description:
    '24+ years of operations, compliance, and budget leadership paired with modern web development. Founder of Universal Dynamic Consulting Services LLC in Lake Jackson, TX.',
  sameAs: ['https://www.linkedin.com/company/universal-dynamic'],
};

export const AboutPage: React.FC = () => {
  const meta = routeMeta['/about'];
  const {
    badge,
    heading,
    subhead,
    missionBadge,
    missionBody,
    founderBadge,
    founderName,
    founderTitle,
    founderBio,
    valuesBadge,
    values,
    ctaLead,
    ctaText,
    ctaHref,
  } = aboutContent;

  return (
    <main className="min-h-screen bg-charcoal-950 text-cream pt-32 pb-24">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:url" content={meta.canonical} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Head>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1.5 px-6 border border-gold/30 bg-navy/30 backdrop-blur-sm text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            {badge}
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-white mb-6">
            {heading}
          </h1>
          <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {subhead}
          </p>
        </motion.div>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 border border-gold/10 bg-navy/20 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gold/50 to-transparent" />
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
            {missionBadge}
          </h2>
          <p className="text-cream/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            {missionBody}
          </p>
        </motion.section>

        {/* Founder */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-8">
            {founderBadge}
          </h2>
          <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="w-16 h-16 border border-gold/30 bg-navy/40 flex items-center justify-center">
                <span className="font-display font-bold text-2xl text-gold">MH</span>
              </div>
            </div>
            <div className="md:col-span-10">
              <h3 className="font-display font-bold text-2xl text-cream mb-1">
                {founderName}
              </h3>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6">
                {founderTitle}
              </p>
              <p className="text-cream/75 text-lg font-light leading-relaxed">
                {founderBio}
              </p>
            </div>
          </article>
        </motion.section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-8">
            {valuesBadge}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-gold/10 bg-navy/20 p-6 group hover:border-gold/30 transition-colors duration-300"
              >
                <v.icon className="w-6 h-6 text-gold mb-4" strokeWidth={1} />
                <h3 className="font-display font-bold text-lg text-cream mb-2">{v.title}</h3>
                <p className="text-cream/60 text-sm font-light leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cream/60 mb-6 font-light">
            {ctaLead}
          </p>
          <Link
            to={ctaHref}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-gold text-gold font-bold tracking-[0.2em] uppercase text-xs overflow-hidden transition-all duration-500 hover:text-charcoal-950 relative"
          >
            <span className="relative z-10 flex items-center gap-3">
              {ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </span>
            <div className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </Link>
        </motion.div>

      </div>
    </main>
  );
};
