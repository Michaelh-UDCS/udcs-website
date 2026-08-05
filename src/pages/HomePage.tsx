import React from 'react';
import { Helmet } from 'react-helmet-async';
import { routeMeta } from '../seo';
import { Hero } from '../components/Hero';
import { Comparison } from '../components/Comparison';
import { Solutions } from '../components/Solutions';
import { CaseStudy } from '../components/CaseStudy';
import { Contact } from '../components/Contact';
import { Faq } from '../components/Faq';

export const HomePage: React.FC = () => {
    const meta = routeMeta['/'];
    return (
        <main>
            {meta && (
                <Helmet>
                    <title>{meta.title}</title>
                    <meta name="description" content={meta.description} />
                    <link rel="canonical" href={meta.canonical} />
                    <meta property="og:url" content={meta.canonical} />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:description" content={meta.description} />
                </Helmet>
            )}
            <Hero />
            <Comparison />
            <Solutions />
            <CaseStudy />
            <Faq />
            <Contact />
        </main>
    );
};
