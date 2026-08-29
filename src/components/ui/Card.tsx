import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <div
      className={`ud-card reveal-on-scroll group ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {/* Metallic Sheen Overlay */}
      <div className="ud-card__sheen"></div>

      {/* Inner Highlight Border */}
      <div className="ud-card__frame"></div>

      <div className="ud-card__body">
        {children}
      </div>
    </div>
  );
};
