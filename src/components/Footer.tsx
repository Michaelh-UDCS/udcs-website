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
            {/* tracking-[0.2em] gives the brand more authority and "breathing room" */}
            <h4 className="font-display font-medium text-xl text-cream tracking-[0.25em] uppercase">
              {brandName}
              <span className="block text-[10px] text-gold mt-2 tracking-[0.4em] font-sans">{brandTagline}</span>
            </h4>
            
            {/* NAP (Name, Address, Phone) for Google Business Profile & Apple Business Connect */}
            <address className="not-italic text-cream/50 text-xs font-light mt-4 space-y-1 font-sans">
              {addressLines.map((line, idx) => (
                <p key={idx} className="text-cream/80 font-medium">{line}</p>
              ))}
              <p>Direct: <a href={phoneHref} className="text-gold hover:underline">{phoneDisplay}</a></p>
              <p>Email: <a href={emailHref} className="hover:text-cream transition-colors">{email}</a></p>
              <p className="text-[11px] text-cream/40 pt-1">{serviceAreaNote}</p>
            </address>

            <p className="text-cream/30 text-[10px] mt-6 font-sans uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} // {copyrightText}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Social Media Links */}
            <div className="flex items-center gap-5 text-cream/60">
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="hover:text-gold transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X / Twitter"
                className="hover:text-gold transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="hover:text-gold transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="hover:text-gold transition-colors duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Company / Legal Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-cream/50 font-sans">
              {legalLinks.map((link, idx) =>
                link.isExternal ? (
                  <a
                    key={idx}
                    href={link.href}
                    className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={idx}
                    to={link.href}
                    className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block"
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