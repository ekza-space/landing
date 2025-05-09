import React from 'react';

interface HeroSectionProps {
    imageUrl: string;
    imageAlt?: string;
    title: string;
    description?: string;
    ctaText: string;
    ctaLink: string;
    heroHeight?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    imageUrl,
    imageAlt = "Hero background",
    title,
    description,
    ctaText,
    ctaLink,
    heroHeight = "h-[85vh]",
}) => {
    return (
        <section
            id="hero"
            className={`relative w-full ${heroHeight} overflow-hidden`}
        >
            {/* Background Image */}
            <img
                className="absolute inset-0 w-full h-full object-cover blur-sm"
                src={imageUrl}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
            />

            {/* Light Overlay */}
            <div
                className="absolute inset-0 bg-white/80"
                aria-hidden="true"
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
                {/* Main Text / Title */}
                <p className="
                    text-black
                    text-3xl sm:text-4xl md:text-5xl
                    font-extrabold
                    leading-tight sm:leading-tight md:leading-tight
                    drop-shadow-xl
                    max-w-4xl
                    ">
                    {title}
                </p>

                {/* NEW: Description / Body Text - Rendered if 'description' prop is provided */}
                {description && (
                    <p className="
                        mt-4 md:mt-6  {/* Space above this paragraph */}
                        text-black
                        text-lg sm:text-xl    {/* Slightly smaller than title */}
                        font-medium           {/* Less bold than title, but still prominent */}
                        leading-relaxed       {/* Good for readability of longer text */}
                        drop-shadow-lg        {/* Consistent shadow, could be 'md' or removed if too much */}
                        max-w-3xl             {/* Max width for readability, can adjust */}
                        text-justify
                    ">
                        {description}
                    </p>
                )}

                {/* Call to Action Button */}
                <a
                    href={ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        mt-8 inline-block px-8 py-3
                        bg-black text-white
                        font-semibold rounded-lg shadow-md
                        hover:bg-gray-800
                        transition-colors duration-200 ease-in-out
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/70 focus:ring-white"
                >
                    {ctaText}
                </a>
            </div>
        </section>
    );
};