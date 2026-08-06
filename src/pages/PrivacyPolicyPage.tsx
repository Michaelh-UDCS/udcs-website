import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { routeMeta } from '../seo';

export const PrivacyPolicyPage: React.FC = () => {
  const meta = routeMeta['/privacy-policy'];

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
      </Head>

      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <article>
          <header className="mb-12">
            <span className="inline-block py-1.5 px-6 border border-gold/30 bg-navy/30 backdrop-blur-sm text-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              Legal
            </span>
            <h1 className="font-display font-medium text-4xl sm:text-5xl text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-cream/40 text-sm font-light">Last updated: August 2026</p>
          </header>

          <div className="prose-style space-y-10 text-cream/75 font-light leading-relaxed">

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">1. Information We Collect</h2>
              <p>
                When you submit the contact form on our website, we collect your name, email address,
                and the content of your message. We do not collect payment information through this
                website. We do not use tracking cookies or behavioral advertising tools.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">2. How We Use Your Information</h2>
              <p>
                Information you provide is used solely to respond to your inquiry and provide
                the consulting services you requested. We do not sell, rent, or share your
                personal information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">3. Third-Party Services</h2>
              <p>This website is built with and relies on the following third-party services:</p>
              <ul className="list-disc list-inside mt-3 space-y-2 text-cream/60 text-sm">
                <li><strong className="text-cream/80">Google Firebase Hosting</strong> — serves this website. Subject to Google's Privacy Policy.</li>
                <li><strong className="text-cream/80">Google Fonts</strong> — loads web fonts. May log IP addresses per Google's Privacy Policy.</li>
                <li><strong className="text-cream/80">FormSubmit.co</strong> — processes contact form submissions and delivers them to our email. No data is stored by FormSubmit beyond message delivery.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">4. Cookies</h2>
              <p>
                This website does not use cookies for tracking or analytics. Google Firebase
                Hosting may set technical cookies necessary for CDN performance and security.
                These cookies do not contain personally identifiable information.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">5. Data Security</h2>
              <p>
                This site is served over HTTPS with TLS encryption. Contact form submissions
                are delivered via FormSubmit.co's encrypted delivery pipeline. We retain
                inquiry emails only as long as necessary to respond to your request.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">6. Your Rights</h2>
              <p>
                You may request deletion of any personal information you have submitted to us
                by contacting us directly at the email below. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-cream mb-3">7. Contact Us</h2>
              <p>
                For privacy-related questions or requests, contact us at:{' '}
                <a
                  href="mailto:michael@universal-dynamic.com"
                  className="text-gold hover:text-gold/80 transition-colors"
                >
                  michael@universal-dynamic.com
                </a>
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-gold/10">
            <Link
              to="/"
              className="text-gold hover:text-gold/80 transition-colors text-xs uppercase tracking-widest font-bold"
            >
              ← Back to Home
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
};
