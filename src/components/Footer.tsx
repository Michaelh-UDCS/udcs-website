import React from 'react';
import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    // Added backdrop-blur and a softer border color for a premium feel
    <footer className="bg-[#050505] backdrop-blur-xl py-16 border-t border-gold/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="text-left">
            {/* tracking-[0.2em] gives the brand more authority and "breathing room" */}
            <h4 className="font-display font-medium text-xl text-cream tracking-[0.25em] uppercase">
              Universal Dynamic
              <span className="block text-[10px] text-gold mt-2 tracking-[0.4em] font-sans">Consulting Services LLC</span>
            </h4>
            <p className="text-cream/30 text-[10px] mt-6 font-sans uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} // Established for Excellence
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Social Media Links */}
            <div className="flex items-center gap-5 text-cream/60">
              <a 
                href="https://www.linkedin.com/company/universal-dynamic" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="hover:text-gold transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://x.com/UniversalDynLLC" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X / Twitter"
                className="hover:text-gold transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.facebook.com/UniversalDynamicLLC" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="hover:text-gold transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@UniversalDynamic" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="hover:text-gold transition-colors duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Legal / Policy Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-cream/50 font-sans">
              <a href="#" className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block">Client Portal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};