import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { routeMeta } from '../seo';
import { BreadcrumbNav } from '../components/BreadcrumbNav';

export const TermsOfServicePage: React.FC = () => {
  const meta = routeMeta['/terms-of-service'];

  return (
    <main id="main-content" className="min-h-screen bg-charcoal-950 text-cream pt-32 pb-24">
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

      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <BreadcrumbNav className="mb-10" items={[{ name: 'Terms of Service' }]} />
        <article>
          <header className="mb-12">
            <span className="inline-block py-1.5 px-6 border border-gold/30 bg-navy/30 backdrop-blur-sm text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              Legal
            </span>
            <h1 className="font-display font-medium text-4xl sm:text-5xl text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-cream/70 text-sm font-light">Last updated: August 2026</p>
          </header>

          <div className="space-y-10 text-cream/85 font-light leading-relaxed">

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Universal Dynamic Consulting Services LLC website
                or engaging our services, you agree to be bound by these Terms of Service.
                If you do not agree, please do not use this website or our services.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">2. Services Description</h2>
              <p>
                Universal Dynamic Consulting Services LLC provides business formation consulting,
                government registration assistance (including SAM.gov, UEI, CAGE Code), and
                web design and development services. Specific deliverables, timelines, and
                payment terms are defined in individual service agreements or proposals.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">3. Client Ownership & Intellectual Property</h2>
              <p>
                Upon full payment, clients receive complete ownership of all custom work
                delivered, including website source code, design assets, and domain
                configurations. Universal Dynamic does not retain licensing rights over
                client-specific deliverables. Hosting is transferred to the client's own
                Google account — we do not hold websites hostage or charge ongoing access fees.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">4. Payment Terms</h2>
              <p>
                Payment terms are specified in each project proposal or service agreement.
                All fees are in US Dollars. Universal Dynamic accepts payment via ACH bank
                transfer (preferred) and credit card (subject to a 3.5% processing fee).
                Invoices are due per the terms stated in the project agreement.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">5. Third-Party Services</h2>
              <p>
                Our services may involve configuration of third-party platforms including
                Google Cloud, Firebase, Google Workspace, Namecheap, SAM.gov, and state
                Secretary of State portals. Universal Dynamic is not responsible for
                downtime, policy changes, or fees imposed by these third-party providers.
                Third-party government filing fees are separate from our service fees.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">6. Limitation of Liability</h2>
              <p>
                Universal Dynamic Consulting Services LLC shall not be liable for indirect,
                incidental, or consequential damages arising from the use of our services.
                Our total liability for any claim shall not exceed the amount paid by the
                client for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">7. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance
                with the laws of the State of Texas, without regard to its conflict of
                law provisions. Any disputes shall be subject to the exclusive jurisdiction
                of the courts located in Brazoria County, Texas.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">8. Contact Us</h2>
              <p>
                For questions about these terms, contact us at:{' '}
                <a
                  href="mailto:michael@universal-dynamic.com"
                  className="text-gold underline hover:text-gold/80 transition-colors focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
                >
                  michael@universal-dynamic.com
                </a>
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-gold/10">
            <Link
              to="/"
              className="text-gold underline hover:text-gold/80 transition-colors text-xs uppercase tracking-widest font-bold focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
            >
              ← Back to Home
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
};
