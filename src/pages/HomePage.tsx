import React from 'react';
import { Head } from 'vite-react-ssg';
import { routeMeta } from '../seo';
import { Hero } from '../components/Hero';
import { Comparison } from '../components/Comparison';
import { Solutions } from '../components/Solutions';
import { ConciergeHandoff } from '../components/ConciergeHandoff';
import { CaseStudy } from '../components/CaseStudy';
import { Contact } from '../components/Contact';
import { Faq } from '../components/Faq';

export const HomePage: React.FC = () => {
    const meta = routeMeta['/'];
    return (
        <main>
            {meta && (
              <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.robots && <meta name="robots" content={meta.robots} />}
        <link rel="canonical" href={meta.canonical} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:url" content={meta.canonical} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
            )}
            <Hero />
            <Comparison />
            <Solutions />
            <ConciergeHandoff />
            <CaseStudy />
            <Faq />
            <Contact />
        </main>
    );
};
