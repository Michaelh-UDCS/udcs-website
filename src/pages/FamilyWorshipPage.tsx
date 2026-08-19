import React, { useEffect } from 'react';
import { Head } from 'vite-react-ssg';
import { routeMeta } from '../seo';

export const FamilyWorshipPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta = routeMeta['/family-worship-assistant'];

  return (
    <div className="min-h-screen bg-[#0B1120] text-[#f8fafc] font-sans selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] relative flex flex-col pt-32 pb-24">
      {meta && (
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
      )}
      {/* Background with radial gradient for texture feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a2235]/80 via-[#0B1120] to-[#0B1120] pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-4 w-full relative z-10 flex flex-col items-center">

        <header className="text-center mb-16">
          <img
            className="w-24 h-24 mx-auto mb-6 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] border border-white/5 bg-slate-800"
            src="https://gen-lang-client-0036096964.web.app/icon-192.png"
            alt="Family Worship Assistant Icon"
          />
          <p className="text-[#D4AF37] font-bold text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Playfair Display', 'Lora', serif" }}>
            For Jehovah's Witness Families
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', 'Lora', serif" }}>
            Family Worship That's<br />Meaningful & Fun
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Plan evenings that draw your family closer to Jehovah and keep everyone, especially the children, engaged and excited.
          </p>
        </header>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 w-full">
          <a href="https://gen-lang-client-0036096964.web.app/" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#D4AF37] text-[#0B1120] font-bold text-lg hover:bg-white transition-all shadow-xl hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:-translate-y-1 duration-300">
            Try the App Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>

        {/* Bento Box Layout mapped exactly from the App */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 w-full max-w-5xl">

          {/* Planner Card - Hero (Spans 2 columns, 2 rows) */}
          <div className="group md:col-span-2 md:row-span-2 bg-[#ffffff05] backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 hover:border-[#D4AF37]/40 shadow-xl hover:shadow-[0_4px_30px_rgba(212,175,55,0.12)] transition-all duration-500 hover:-translate-y-1 text-left relative overflow-hidden flex flex-col justify-end min-h-[360px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -mr-20 -mt-20 group-hover:bg-[#D4AF37]/10 transition-colors blur-3xl"></div>

            <svg className="w-12 h-12 text-[#D4AF37] mb-8 relative z-10 opacity-90" fill="none" strokeWidth="1.2" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <h3 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-4 relative z-10" style={{ fontFamily: "'Playfair Display', 'Lora', serif" }}>Spiritual Planner</h3>
            <p className="text-slate-300 font-light text-lg md:text-xl relative z-10 leading-relaxed md:w-11/12">
              Pick from suggested themes (courage, forgiveness, creation, prophecy, the fruitage of the spirit, and more) or enter your own topic. Get a clear, practical outline so you're never stuck wondering what to cover.
            </p>
          </div>

          {/* Games Card - Square (Spans 1 col, 1 row) */}
          <div className="group bg-[#ffffff05] backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#D4AF37]/40 shadow-xl hover:shadow-[0_4px_20px_rgba(212,175,55,0.12)] transition-all duration-500 hover:-translate-y-1 text-left relative overflow-hidden flex flex-col justify-center min-h-[220px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#D4AF37]/5 rounded-full group-hover:bg-[#D4AF37]/10 transition-colors blur-2xl"></div>

            <svg className="w-10 h-10 text-[#D4AF37] mb-5 relative z-10 opacity-90" fill="none" strokeWidth="1.2" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.866 8.21 8.21 0 003 .48z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3 relative z-10" style={{ fontFamily: "'Playfair Display', 'Lora', serif" }}>Game Center</h3>
            <p className="text-slate-400 font-light text-base relative z-10 leading-relaxed">
              Play Bible character games that are engaging for children and connect Scriptural lessons with family time.
            </p>
          </div>

          {/* Downloads Card - Utility (Spans 1 col, 1 row) */}
          <a href="https://gen-lang-client-0036096964.web.app/#/downloads" className="group bg-[#ffffff05] backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-[#D4AF37]/40 shadow-xl hover:shadow-[0_4px_20px_rgba(212,175,55,0.12)] transition-all duration-500 hover:-translate-y-1 text-left relative overflow-hidden flex flex-col justify-center min-h-[200px] block cursor-pointer">
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full group-hover:bg-[#D4AF37]/10 transition-colors blur-xl"></div>

            <svg className="w-8 h-8 text-[#D4AF37] mb-4 relative z-10 opacity-90" fill="none" strokeWidth="1.2" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 relative z-10" style={{ fontFamily: "'Playfair Display', 'Lora', serif" }}>Download the App</h3>
            <p className="text-slate-400 font-light text-sm relative z-10">
              Install it natively on Windows, Android, or Apple devices to play anywhere.
            </p>
          </a>

        </div>

        <div className="mt-16 text-center">
          <p className="text-[#D4AF37] italic text-sm opacity-80" style={{ fontFamily: "'Playfair Display', 'Lora', serif" }}>
            "Your word is a lamp to my foot, And a light for my path." — Psalm 119:105
          </p>
        </div>

      </div>
    </div>
  );
};
