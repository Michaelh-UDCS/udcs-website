import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    background?: 'default' | 'darker' | 'gradient';
}

export const Section: React.FC<SectionProps> = ({
    children,
    id,
    className = '',
    background = 'default'
}) => {
    const bgClasses = {
        default: 'bg-charcoal-950',
        darker: 'bg-[#050505]',
        gradient: 'bg-gradient-to-b from-charcoal-950 to-[#050505]',
    };

    return (
        <section id={id} className={`py-20 lg:py-32 relative ${bgClasses[background]} ${className}`}>
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {children}
            </div>
        </section>
    );
};
