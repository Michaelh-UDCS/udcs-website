import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    background?: 'default' | 'dark' | 'darker' | 'gradient';
}

const bgClasses = {
    default: 'bg-charcoal-950',
    dark: 'bg-charcoal-950',
    darker: 'bg-[#050505]',
    gradient: 'bg-gradient-to-b from-charcoal-950 to-[#050505]',
} as const;

export const Section: React.FC<SectionProps> = ({
    children,
    id,
    className = '',
    background = 'default'
}) => {
    const bgClass = bgClasses[background] ?? bgClasses.default;

    return (
        <section
          id={id}
          className={`pt-12 pb-12 md:pt-16 md:pb-16 relative scroll-mt-24 ${bgClass} ${className}`}
        >
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {children}
            </div>
        </section>
    );
};
