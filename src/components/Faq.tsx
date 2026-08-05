import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Can I hire UDCS if I ONLY need a website redesign or self-hosted website?",
    answer: "Absolutely. You do not need to purchase government filings to work with us. If you already have a business and want to migrate off costly platforms like WordPress, Wix, or Squarespace to your own self-hosted Google Cloud setup, we handle the entire redesign and handover."
  },
  {
    question: "Do I really own my website and domain with zero monthly agency fees?",
    answer: "Yes, 100%. Unlike typical agencies that keep your site on proprietary servers and charge $150–$300/month, we transfer full admin access directly to your Google account on Day 1. Google Cloud/Firebase hosting for small business sites is virtually $0/month for standard traffic."
  },
  {
    question: "How does self-hosting work if I don't know how to code?",
    answer: "You don't need any coding knowledge. We handle the entire cloud architecture, DNS, SSL security certificates, and email setup. Afterwards, we provide a simple video walkthrough and plain-English training showing you how to update text and images anytime."
  },
  {
    question: "Is self-hosting a website secure?",
    answer: "Yes, completely. Hosting on enterprise infrastructure like Google Cloud is actually far more secure than traditional hosting or plugin-heavy platforms that get targeted by hackers. We set up automated SSL certificates (the padlock in the browser) and cloud security defaults so your site stays safe without any effort on your end."
  },
  {
    question: "Will I have to manage security updates or software patches myself?",
    answer: "No. Unlike platforms like WordPress that require constant plugin updates to prevent hacks, our cloud setups use modern serverless hosting. Google automatically handles background security and server updates, meaning zero maintenance for you."
  },
  {
    question: "Do you only work with Texas businesses, or do you serve clients nationwide?",
    answer: "While Texas is our home state, we provide 50-state business filing assistance, nationwide SAM.gov/federal registration onboarding, and global website deployment."
  },
  {
    question: "Can you help me set up SAM.gov to bid on government contracts?",
    answer: "Yes. We handle the entire onboarding process—getting your Unique Entity ID (UEI), CAGE code, and SAM.gov entity profile active."
  },
  {
    question: "What do I need to get certified as a Woman-Owned or Minority-Owned business?",
    answer: "We walk you through state and federal requirements for WOSB, EDWOSB, and MBE statuses to help you qualify for diversity set-asides and tax credits."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-2">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-cream">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gold/20 bg-navy/20 backdrop-blur-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleOpen(index)}
              >
                <span className="font-display font-medium text-lg text-cream pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 pt-0 text-cream/70 font-light leading-relaxed border-t border-gold/10 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
