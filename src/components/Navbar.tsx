import React from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { navigationContent } from '../content/navigation';

export const Navbar: React.FC = () => {
  const { brandName, brandTagline, navLinks, ctaButtonText, ctaButtonHref } = navigationContent;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-charcoal-950/85 backdrop-blur-md border-b border-gold/20 transition-colors duration-300">
      {/* CSS checkbox for mobile toggle — also lg:hidden so desktop LH/axe
          do not see a form control whose only <label> is display:none (Agentic 2/3). */}
      <input
        type="checkbox"
        id="nav-toggle"
        className="peer sr-only lg:hidden"
      />

      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group shrink-0 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none">
          <div className="relative shrink-0">
            <Hexagon className="w-8 h-8 text-gold group-hover:text-gold/80 transition-colors" strokeWidth={1} />
            <div className="absolute inset-0 bg-gold/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-wider leading-none text-cream whitespace-nowrap">{brandName}</span>
            <span className="font-display font-medium text-[0.5rem] sm:text-[0.55rem] tracking-[0.2em] leading-none text-gold whitespace-nowrap hidden xs:block">{brandTagline}</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-cream hover:text-gold transition-colors relative group py-2 font-sans focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href={ctaButtonHref}
            className="px-5 py-2 bg-navy hover:bg-navy/80 text-cream border border-gold/30 rounded-none text-xs uppercase tracking-wider transition-all hover:border-gold hover:shadow-[0_0_15px_rgba(197,165,114,0.15)] font-sans focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
          >
            {ctaButtonText}
          </a>
        </nav>

        {/* Mobile menu — native label only (role=button breaks agentic a11y tree) */}
        <label
          htmlFor="nav-toggle"
          className="lg:hidden text-cream p-2 cursor-pointer select-none rounded-sm block peer-focus-visible:ring-1 peer-focus-visible:ring-gold"
        >
          <span className="sr-only">Toggle navigation menu</span>
          <Menu strokeWidth={1.5} className="w-6 h-6 nav-icon-menu block text-cream hover:text-gold transition-colors" aria-hidden="true" />
          <X strokeWidth={1.5} className="w-6 h-6 nav-icon-close hidden text-cream hover:text-gold transition-colors" aria-hidden="true" />
        </label>
      </div>

      {/* CSS-Only Mobile Menu */}
      <div className="hidden peer-checked:block lg:hidden bg-charcoal-950/95 border-b border-gold/20 backdrop-blur-xl">
        <nav className="flex flex-col p-6 gap-4" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-cream hover:text-gold py-2 border-b border-gold/10 font-sans text-sm tracking-wide focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
            >
              {link.name}
            </a>
          ))}
          <a
            href={ctaButtonHref}
            className="mt-2 text-center py-3 bg-navy text-gold border border-gold/40 text-xs uppercase tracking-widest font-bold font-sans focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
          >
            {ctaButtonText}
          </a>
        </nav>
      </div>
    </header>
  );
};