import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <div
      className={`
        reveal-on-scroll
        relative overflow-hidden rounded-sm 
        border border-gold/10 bg-navy/40 
        backdrop-blur-sm shadow-none
        group
        ${className}
      `}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {/* Metallic Sheen Overlay */}
      <div className="absolute inset-0 bg-metal-sheen opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500"></div>

      {/* Inner Highlight Border */}
      <div className="absolute inset-0 rounded-xl border border-white/5 pointer-events-none"></div>

      <div className="relative z-10 p-8 h-full">
        {children}
      </div>
    </div>
  );
};

