import React from 'react';
interface HeroSectionProps {
    imageUrl: string;
    imageAlt?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    footerLeft?: string;
    footerCenter?: string;
    ctaText?: string;
    ctaLink: string;
    heroHeight?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    imageUrl,
    imageAlt = "A person standing in a field of glowing flowers, looking at a celestial swirl in the sky.",
    title = "Ekza Space",
    subtitle = "Where creativity runs free",
    description = "Discovery doesn't always begin with knowing - it starts with questions. Context that guide understanding forward.\n\nLumen Atlas is your companion for deeper insight. A calm interface for asking better questions and drawing thoughtful. Less noise. More meaning.",
    footerLeft = "",
    footerCenter = "Ekza Space ©2025",
    ctaText = "Start Exploring",
    ctaLink,
    heroHeight = "h-screen",
}) => {
    return (
        <section
            id="hero"
            className={`relative w-full ${heroHeight} text-white overflow-hidden`}
        >
            {/* Background Image */}
            <img
                className="absolute inset-0 w-full h-full object-cover"
                src={imageUrl}
                alt={imageAlt}
                loading="eager"
                decoding="async"
            />

            {/* Gradient Overlay for better text contrast */}
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                aria-hidden="true"
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full p-6 sm:p-8 lg:p-10">
                {/* 1. Header with Navigation */}


                {/* 2. Main Content (grows to fill space) */}
                <main className="flex-grow grid md:grid-cols-12 items-end gap-12 md:gap-16 pb-12">
                    {/* Left Side: Title and Subtitle */}
                    <div className="md:col-span-5 flex flex-col">
                        <h1 className="text-6xl lg:text-7xl font-light">{title}</h1>
                        {subtitle && (
                            <p className="mt-4 text-2xl lg:text-3xl font-light text-gray-200">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* Right Side: CTA and Description */}
                    <div className="md:col-span-4 md:col-start-8 flex flex-col items-start">
                        <a
                            href={ctaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/80 rounded-full px-8 py-3 text-base font-medium hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/30 focus:ring-white"
                        >
                            {ctaText}
                        </a>
                        {description && (
                            <p className="mt-8 text-base text-gray-300 leading-relaxed whitespace-pre-line max-w-xl">
                                {description}
                            </p>
                        )}
                    </div>
                </main>

                {/* 3. Footer */}
                <footer className="w-full flex-shrink-0">
                    <hr className="border-t border-white/20 mb-4" />
                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>{footerLeft}</span>
                        <span>{footerCenter}</span>
                    </div>
                </footer>
            </div>
        </section>
    );
};