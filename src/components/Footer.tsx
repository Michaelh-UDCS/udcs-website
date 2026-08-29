import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import { footerContent } from '../content/footer';

export const Footer: React.FC = () => {
  const {
    brandName,
    brandTagline,
    addressLines,
    phoneDisplay,
    phoneHref,
    email,
    emailHref,
    serviceAreaNote,
    copyrightText,
    socialLinks,
    legalLinks,
  } = footerContent;

  return (
    // Added backdrop-blur and a softer border color for a premium feel
    <footer className="bg-[#050505] backdrop-blur-xl py-16 border-t border-gold/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="text-left">
            <p className="font-display font-medium text-xl text-cream tracking-[0.25em] uppercase">
              {brandName}
              <span className="block text-[10px] text-gold mt-2 tracking-[0.4em] font-sans">{brandTagline}</span>
            </p>
            
            {/* NAP (Name, Address, Phone) for Google Business Profile & Apple Business Connect */}
            <address className="not-italic text-cream/70 text-xs font-light mt-4 space-y-1 font-sans">
              {addressLines.map((line, idx) => (
                <p key={idx} className="text-cream font-medium">{line}</p>
              ))}
              <p>Direct: <a href={phoneHref} className="text-gold underline hover:text-gold/80 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none">{phoneDisplay}</a></p>
              <p>Email: <a href={emailHref} className="text-gold underline hover:text-cream transition-colors focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none">{email}</a></p>
              <p className="text-[11px] text-cream/70 pt-1">{serviceAreaNote}</p>
            </address>

            <p className="text-cream/70 text-[10px] mt-6 font-sans uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} // {copyrightText}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Social Media Links */}
            <div className="flex items-center gap-5 text-cream/70">
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="hover:text-gold transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none p-1"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X / Twitter"
                className="hover:text-gold transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none p-1"
              >
                <Twitter size={18} aria-hidden="true" />
              </a>
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="hover:text-gold transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none p-1"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a 
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="hover:text-gold transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none p-1"
              >
                <Youtube size={18} aria-hidden="true" />
              </a>
            </div>

            {/* Company / Legal Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-cream/70 font-sans">
              {legalLinks.map((link, idx) =>
                link.isExternal ? (
                  <a
                    key={idx}
                    href={link.href}
                    className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={idx}
                    to={link.href}
                    className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};