import React, { useEffect, useRef, useState } from 'react';

const ScrollSections = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const lastScrollTime = useRef(0);
    const scrollAccumulator = useRef(0);
    const scrollCooldown = 400; // Increased cooldown for better mobile experience
    const scrollThreshold = 30; // Reduced threshold for more responsive scrolling
    const touchStartY = useRef(0);
    const touchStartX = useRef(0);
    const isScrolling = useRef(false);

    const sections = [
        {
            id: 1,
            title: "Custom ROAS audit (Meta + Google)",
            content: "Complete audit of your Return on Ad Spend across all platforms with detailed performance metrics and optimization opportunities",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop&crop=center",
            color: "from-gray-600 to-gray-800",
            accentColor: "from-white to-gray-100",
            features: ["Meta Ads Analysis", "Google Ads Review", "Cross-platform Comparison"]
        },
        {
            id: 2,
            title: "Breakdown of creative fatigue, funnel gaps & offer leakage",
            content: "Detailed analysis to identify exactly what's hurting your performance with actionable insights to fix conversion bottlenecks",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=center",
            color: "from-gray-700 to-gray-900",
            accentColor: "from-gray-100 to-white",
            features: ["Creative Performance", "Funnel Analysis", "Offer Optimization"]
        },
        {
            id: 3,
            title: "CRO suggestions to lift conversion rate (LP, cart, thank you page)",
            content: "Actionable conversion optimization recommendations that can immediately boost your sales and reduce abandoned carts",
            image: "https://images.unsplash.com/photo-1680518413-7d94cc18949d?w=600&h=800&fit=crop&crop=center",
            color: "from-gray-800 to-black",
            accentColor: "from-gray-50 to-gray-200",
            features: ["Landing Page Optimization", "Cart Improvements", "Thank You Page"]
        },
        {
            id: 4,
            title: "Budget pacing suggestions based on your current spend & scale",
            content: "Optimize your budget allocation for maximum ROI with data-driven spending recommendations across all channels",
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=800&fit=crop&crop=center",
            color: "from-gray-600 to-gray-800",
            accentColor: "from-gray-200 to-white",
            features: ["Budget Allocation", "Spend Optimization", "ROI Maximization"]
        },
        {
            id: 5,
            title: "WhatsApp + Email flow ideas to improve retention & COD confirmation",
            content: "Boost retention and confirm cash-on-delivery orders with proven automation sequences that increase customer lifetime value",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=800&fit=crop&crop=center",
            color: "from-gray-700 to-gray-900",
            accentColor: "from-white to-gray-100",
            features: ["WhatsApp Automation", "Email Sequences", "COD Confirmation"]
        },
        {
            id: 6,
            title: "Competitor ad teardown (selected D2C leaders in your category)",
            content: "Learn from the best performing ads in your industry with detailed breakdowns of what makes them successful",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop&crop=center",
            color: "from-gray-800 to-black",
            accentColor: "from-gray-100 to-gray-300",
            features: ["Competitor Analysis", "Ad Performance", "Industry Insights"]
        },
        {
            id: 7,
            title: "Bonus: 7-day retargeting ad script",
            content: "Ready-to-use retargeting campaigns that convert with proven scripts and targeting strategies you can implement immediately",
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=800&fit=crop&crop=center",
            color: "from-gray-600 to-gray-800",
            accentColor: "from-gray-200 to-white",
            features: ["Retargeting Scripts", "Proven Templates", "Campaign Setup"]
        },
        {
            id: 8,
            title: "Audit delivered as PDF + optional Loom video walk-through",
            content: "Get your audit in multiple formats for easy implementation with personalized video explanations of key findings",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=800&fit=crop&crop=center",
            color: "from-gray-700 to-gray-900",
            accentColor: "from-white to-gray-100",
            features: ["PDF Report", "Video Walkthrough", "Implementation Guide"]
        }
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isMobile) {
                setMousePosition({
                    x: (e.clientX / window.innerWidth) * 2 - 1,
                    y: (e.clientY / window.innerHeight) * 2 - 1
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isMobile]);

    const goToSection = (index) => {
        if (isAnimating || index === currentSection || isScrolling.current) return;

        isScrolling.current = true;
        setIsAnimating(true);

        if (contentRef.current && imageRef.current) {
            contentRef.current.style.transform = isMobile
                ? 'translateY(-30px) scale(0.95)'
                : 'translateX(-100px) scale(0.95)';
            contentRef.current.style.opacity = '0';
            contentRef.current.style.filter = 'blur(5px)';

            imageRef.current.style.transform = isMobile
                ? 'translateY(30px) scale(0.95)'
                : 'translateX(100px) scale(0.95) rotateY(10deg)';
            imageRef.current.style.opacity = '0';
            imageRef.current.style.filter = 'blur(5px)';
        }

        setTimeout(() => {
            setCurrentSection(index);

            setTimeout(() => {
                if (contentRef.current && imageRef.current) {
                    contentRef.current.style.transform = isMobile
                        ? 'translateY(0) scale(1)'
                        : 'translateX(0) scale(1)';
                    contentRef.current.style.opacity = '1';
                    contentRef.current.style.filter = 'blur(0px)';

                    imageRef.current.style.transform = isMobile
                        ? 'translateY(0) scale(1)'
                        : 'translateX(0) scale(1) rotateY(0deg)';
                    imageRef.current.style.opacity = '1';
                    imageRef.current.style.filter = 'blur(0px)';
                }
                setIsAnimating(false);

                // Reset scrolling flag after animation completes
                setTimeout(() => {
                    isScrolling.current = false;
                }, 100);
            }, 100);
        }, 400);
    };

    useEffect(() => {
        const containerElement = containerRef.current;
        if (!containerElement) return;

   // inside your useEffect
const handleWheel = e => {
  const deltaY = e.deltaY;

  // boundary check: let page scroll past when at ends
  if ((currentSection === 0 && deltaY < 0) ||
      (currentSection === sections.length - 1 && deltaY > 0)) {
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  if (isAnimating || isScrolling.current) return;

  const now = Date.now();
  if (now - lastScrollTime.current > scrollCooldown) {
    scrollAccumulator.current = 0;
  }

  scrollAccumulator.current += Math.abs(deltaY);

  if (scrollAccumulator.current >= scrollThreshold && (now - lastScrollTime.current) >= scrollCooldown) {
    lastScrollTime.current = now;
    scrollAccumulator.current = 0;

    if (deltaY > 0) {
      goToSection(currentSection + 1);
    } else {
      goToSection(currentSection - 1);
    }
  }
};


        const handleTouchStart = (e) => {
            touchStartY.current = e.touches[0].clientY;
            touchStartX.current = e.touches[0].clientX;
        };

        const handleTouchMove = (e) => {
            // Prevent default scroll behavior on mobile
            e.preventDefault();
            e.stopPropagation();
        };

        const handleTouchEnd = e => {
            if (!touchStartY.current || isAnimating || isScrolling.current) return;

            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY.current - touchEndY;
            const now = Date.now();

            // boundary check: let page scroll past when at ends
            if ((currentSection === 0 && deltaY < 0) ||
                (currentSection === sections.length - 1 && deltaY > 0)) {
                touchStartY.current = 0;
                return;
            }

            if (Math.abs(deltaY) > 30 && (now - lastScrollTime.current) >= scrollCooldown) {
                lastScrollTime.current = now;

                if (deltaY > 0) {
                    goToSection(currentSection + 1);
                } else {
                    goToSection(currentSection - 1);
                }
            }

            touchStartY.current = 0;
        };


        const handleKeyDown = (e) => {
            if (!containerElement.contains(document.activeElement) && !containerElement.matches(':hover')) {
                return;
            }

            const now = Date.now();

            if (isAnimating || isScrolling.current || (now - lastScrollTime.current) < scrollCooldown) {
                return;
            }

            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                lastScrollTime.current = now;
                if (currentSection < sections.length - 1) {
                    goToSection(currentSection + 1);
                }
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                lastScrollTime.current = now;
                if (currentSection > 0) {
                    goToSection(currentSection - 1);
                }
            }
        };

        // Add passive: false to prevent default behavior
        containerElement.addEventListener('wheel', handleWheel, { passive: false });
        containerElement.addEventListener('touchstart', handleTouchStart, { passive: false });
        containerElement.addEventListener('touchmove', handleTouchMove, { passive: false });
        containerElement.addEventListener('touchend', handleTouchEnd, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            containerElement.removeEventListener('wheel', handleWheel);
            containerElement.removeEventListener('touchstart', handleTouchStart);
            containerElement.removeEventListener('touchmove', handleTouchMove);
            containerElement.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentSection, isAnimating, isMobile]);

    const currentData = sections[currentSection];

    return (
        <div
            ref={containerRef}
            className="h-screen w-full overflow-hidden relative"
            style={{
                touchAction: 'none', // Disable default touch scrolling
                overscrollBehavior: 'none' // Prevent overscroll effects
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(isMobile ? 20 : 50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                <div
                    className={`absolute inset-0 bg-gradient-to-r ${currentData.color} opacity-20 transition-all duration-1000`}
                    style={{
                        transform: isMobile ? 'none' : `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                    }}
                />

                <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
            </div>

            <div className="relative z-10 h-full flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-center justify-center pt-6 px-4">
                    <div className="text-center">
                        <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-3 md:mb-4">
                            <span className="text-xs md:text-sm text-gray-200">Premium Marketing Audit</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white">
                            What you'll get for{' '}
                            <span className="text-white font-bold">
                                ₹999
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center px-4 md:px-6 lg:px-20">
                    <div className={`container mx-auto h-full max-w-7xl ${isMobile ? 'flex flex-col-reverse gap-6 justify-center space-y-8' : 'flex items-center justify-between'}`}>
                        {/* Content Section */}
                        <div
                            ref={contentRef}
                            className={`transition-all duration-500 ease-out ${isMobile ? 'w-full' : 'w-1/2 pr-12'}`}
                            style={{
                                transform: isMobile ? 'translateY(0) scale(1)' : 'translateX(0) scale(1)',
                                opacity: '1',
                                filter: 'blur(0px)'
                            }}
                        >
                            <div className="space-y-4 md:space-y-8">
                                <div className="relative flex items-center space-x-3 md:space-x-4">
                                    <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                        0{currentData.id}
                                    </div>
                                </div>

                                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-6 leading-tight">
                                    {currentData.title}
                                </h2>

                                <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                                    {currentData.content}
                                </p>

                                <div className="space-y-2 md:space-y-3">
                                    {currentData.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-2 md:space-x-3 text-gray-300 opacity-0 animate-fadeInUp"
                                            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                                        >
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white" />
                                            <span className="text-xs md:text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8">
                                    <button className="group px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden text-sm md:text-base">
                                        <span className="relative z-10">Skip The Line</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div
                            ref={imageRef}
                            className={`transition-all duration-500 ease-out ${isMobile ? 'w-full' : 'w-1/2 pl-12'}`}
                            style={{
                                transform: isMobile ? 'translateY(0) scale(1)' : 'translateX(0) scale(1) rotateY(0deg)',
                                opacity: '1',
                                filter: 'blur(0px)'
                            }}
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse" />

                                <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-white/10">
                                    <img
                                        src={currentData.image}
                                        alt={currentData.title}
                                        className="w-full h-48 md:h-64 lg:h-96 object-cover rounded-xl md:rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                                        style={{
                                            transform: isMobile ? 'none' : `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
                                        }}
                                    />
                                    <div className="absolute inset-3 md:inset-4 rounded-xl md:rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 border border-white/20">
                                        <div className="text-white text-xs md:text-sm font-semibold">Step {currentData.id}/8</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out;
                }
            `}</style>
        </div>
    );
};

export default ScrollSections;