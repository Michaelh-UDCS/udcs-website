import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navigationContent } from '../content/navigation';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { brandName, brandTagline, navLinks, ctaButtonText, ctaButtonHref } = navigationContent;
  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage
        ? 'py-4 bg-charcoal-950/70 backdrop-blur-md border-b border-gold/20'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0" onClick={() => window.scrollTo(0, 0)}>
          <div className="relative shrink-0">
            <Hexagon className="w-8 h-8 text-gold group-hover:text-gold/80 transition-colors" strokeWidth={1} />
            <div className="absolute inset-0 bg-gold/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-wider leading-none text-cream whitespace-nowrap">{brandName}</span>
            <span className="font-display font-medium text-[0.5rem] sm:text-[0.55rem] tracking-[0.2em] leading-none text-gold whitespace-nowrap hidden xs:block">{brandTagline}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-cream hover:text-gold transition-colors relative group py-2 font-sans"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href={ctaButtonHref}
            className="px-5 py-2 bg-navy hover:bg-navy/80 text-cream border border-gold/30 rounded-none text-xs uppercase tracking-wider transition-all hover:border-gold hover:shadow-[0_0_15px_rgba(197,165,114,0.15)] font-sans"
          >
            {ctaButtonText}
          </a>
        </nav>

        {/* Mobile / Tablet Menu Button */}
        <button
          className="lg:hidden text-cream p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X strokeWidth={1.5} className="w-6 h-6" /> : <Menu strokeWidth={1.5} className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-charcoal-950 border-b border-gold/20 overflow-hidden transition-all duration-300"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-cream hover:text-gold py-2 border-b border-gold/10 font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};