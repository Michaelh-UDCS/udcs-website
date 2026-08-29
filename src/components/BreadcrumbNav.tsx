import React from 'react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const SITE_ORIGIN = siteConfig.domain;

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

function absoluteUrl(href: string): string {
  if (href === '/') return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${href.startsWith('/') ? href : `/${href}`}`;
}

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items, className = '' }) => {
  const crumbs: BreadcrumbItem[] =
    items[0]?.name === 'Home'
      ? [{ name: 'Home', href: items[0].href ?? '/' }, ...items.slice(1)]
      : [{ name: 'Home', href: '/' }, ...items];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((item, index) => {
      const entry: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      };
      if (item.href) {
        entry.item = absoluteUrl(item.href);
      }
      return entry;
    }),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Head>
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-light tracking-wide">
          {crumbs.map((item, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li key={`${item.name}-${index}`} className="inline-flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight
                    className="w-3 h-3 text-gold/35 shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                )}
                {isLast || !item.href ? (
                  <span className="text-cream/75" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-cream/45 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-1 focus-visible:ring-offset-charcoal-950"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
