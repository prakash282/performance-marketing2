import React from 'react';

const HeroSection = () => {
    const content = {
        bgColor: '#131314',
        logoSrc: '/abmlogo.png',
        logoAlt: 'AB Media Logo',
        headline: 'Skip the Wait — Get a High-Impact Growth Audit in 24 Hours',
        // badgeText: 'Limited Slots Available',
        badgeColor: 'bg-green-400',
        description: `If your brand is stuck at 2X–3X ROAS or wasting spend on low-performing campaigns, our express audit shows you exactly what to fix — in 24 hours or less.`,
        ctas: [
            {
                text: 'Skip The Line ',
                variant: 'primary',
                onClick: () => {/* handle audit booking */ },
            },
            // {
            //     text: 'View Case Studies',
            //     variant: 'secondary',
            //     onClick: () => {/* handle view case studies */ },
            // },
        ],
        // trustedByText: 'Trusted by brands scaling festive revenue to ₹1Cr+ per month',
        // logoPlaceholders: [28, 32, 24, 36],
        // trustedLogos: [
        //     { src: '/Brands/8pmnews.png', alt: 'Company 1' },
        //     { src: '/Brands/emaarindia_logo.jpeg', alt: 'Company 2' },
        //     { src: '/Brands/kpoint.jpeg', alt: 'Company 3' },
        //     { src: '/Brands/maska.jpeg', alt: 'Company 4' },
        //     // { src: '/Brands/davinci.png', alt: 'Company 4' },
        // ],
    };

    return (
        <div
            className="text-white relative overflow-hidden  "
            style={{ backgroundColor: content.bgColor }}
        >
            {/* grid overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full bg-grid-pattern bg-grid-white/[0.05] bg-[size:40px_40px]" />
            </div>

            {/* logo */}
            <div className="flex justify-center pt-4 sm:pt-6">
                <img
                    src={content.logoSrc}
                    alt={content.logoAlt}
                    className="h-10 sm:h-12 md:h-14 lg:h-16"
                />
            </div>

            <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 py-10  lg:py-18 relative z-10 ">
                <div className="flex flex-col xl:flex-row xl:justify-between gap-8 xl:gap-12 items-start">
                    {/* Left column */}
                    <div className="flex flex-col w-full xl:flex-1 gap-4 sm:gap-6">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-black leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in">
                            {content.headline}
                        </h1>
                        
                        {/* <div className="flex w-full max-w-xs sm:max-w-sm items-center px-3 sm:px-4 py-2 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                            <div
                                className={`w-2 h-2 rounded-full mr-2 animate-pulse ${content.badgeColor}`}
                            />
                            <span className="text-xs sm:text-sm text-gray-300">{content.badgeText}</span>
                        </div> */}

                        {/* Trusted by section - moved to bottom on mobile */}
                        {/* <div className="pt-6 sm:pt-8 space-y-3 sm:space-y-4 order-3 xl:order-none">
                            <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide font-medium">
                                {content.trustedByText}
                            </p>
                            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto pb-2">
                                {content.trustedLogos.map((logo, idx) => (
                                    <img
                                        key={idx}
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain rounded-lg flex-shrink-0 hover:opacity-100 transition-opacity duration-300"
                                    />
                                ))}
                            </div>
                        </div> */}
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-6 sm:gap-8 w-full xl:flex-none xl:max-w-[33rem] order-2 xl:order-none">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-semibold">
                            {content.description}
                        </p>

                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                {content.ctas.map((cta, idx) => (
                                    <button
                                        key={idx}
                                        onClick={cta.onClick}
                                        className={`group inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-${cta.variant === 'primary' ? 'bold' : 'semibold'
                                            } transition-all duration-300 transform shadow-2xl w-full sm:w-auto ${cta.variant === 'primary'
                                                ? 'bg-white text-black hover:bg-gray-100 hover:shadow-white/20 hover:scale-105'
                                                : 'border-2 border-gray-600 text-white hover:bg-white hover:text-black hover:border-white'
                                            }`}
                                    >
                                        <span className="relative z-10">{cta.text}</span>
                                        <svg
                                            className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                        {cta.variant === 'primary' && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
        }
      `}</style>
        </div>
    );
};

export default HeroSection;