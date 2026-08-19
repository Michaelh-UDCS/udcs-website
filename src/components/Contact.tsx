import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Send } from 'lucide-react';
import { contactContent } from '../content/contact';

export const Contact: React.FC = () => {
  const { sectionId, badge, heading, subhead, inquiryOptions } = contactContent;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    type: inquiryOptions[0],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/michael@universal-dynamic.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          _subject: `New Inquiry: ${formState.type} from ${formState.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', type: inquiryOptions[0], message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <Section id={sectionId}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">{badge}</h2>
          <h3 className="text-4xl md:text-6xl font-display font-medium text-cream mb-6">
            {heading}
          </h3>
          <p className="text-cream/60 text-lg leading-relaxed font-light">
            {subhead}
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-navy/20 border border-gold/10 p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gold/50 to-transparent"></div>


          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-gold/5 border border-gold/20 rounded-none flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-gold" strokeWidth={1} />
              </div>
              <h4 className="text-3xl font-display font-bold text-cream mb-4">Inquiry Received</h4>
              <p className="text-cream/60 mb-8 font-light">Thank you for getting in touch. A representative will contact you shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="text-gold border border-gold/20 px-6 py-2 uppercase tracking-widest text-xs hover:bg-gold hover:text-charcoal-950 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-charcoal-950/50 border-b border-gold/20 text-cream p-3 focus:outline-none focus:border-gold transition-colors text-sm font-light"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-charcoal-950/50 border-b border-gold/20 text-cream p-3 focus:outline-none focus:border-gold transition-colors text-sm font-light"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="type" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Inquiry Type</label>
                <div className="relative">
                  <select
                    id="type"
                    name="type"
                    value={formState.type}
                    onChange={handleChange}
                    className="w-full bg-charcoal-950/50 border-b border-gold/20 text-cream p-3 focus:outline-none focus:border-gold transition-colors text-sm font-light appearance-none"
                  >
                    {inquiryOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gold">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-charcoal-950/50 border-b border-gold/20 text-cream p-3 focus:outline-none focus:border-gold transition-colors text-sm font-light resize-none"
                  required
                ></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm font-light">There was an error sending your message. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal-950 disabled:bg-charcoal-950/50 disabled:border-gold/20 disabled:text-gold/50 font-bold uppercase tracking-[0.2em] py-4 transition-all duration-300 flex items-center justify-center gap-3 text-xs group"
              >
                {status === 'submitting' ? 'Submitting Inquiry...' : (
                  <>
                    Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};