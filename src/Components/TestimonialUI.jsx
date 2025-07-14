import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialUI = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleElements, setVisibleElements] = useState(new Set());
    const [autoPlay, setAutoPlay] = useState(true);
    const sliderRef = useRef(null);
    const observerRef = useRef(null);
    const autoPlayRef = useRef(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const testimonials = [
        {
            id: 1,
            brand: "Brand A",
            category: "Skincare",
            quote: "We discovered why our Google ROAS was capped and fixed it in 3 days using just the audit.",
            image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop&crop=faces",
            rating: 5,
            bgColor: "bg-gradient-to-br from-white to-gray-50"
        },
        {
            id: 2,
            brand: "Brand B",
            category: "Electronics",
            quote: "This ₹999 audit was more valuable than our ₹50K agency retainer.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
            rating: 5,
            bgColor: "bg-gradient-to-br from-gray-50 to-white"
        },
        {
            id: 3,
            brand: "Brand C",
            category: "Luxury D2C",
            quote: "Finally — someone who actually explains what's wrong and how to fix it.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b332c35a?w=400&h=400&fit=crop&crop=faces",
            rating: 5,
            bgColor: "bg-gradient-to-br from-stone-50 to-white"
        },
        {
            id: 4,
            brand: "Brand D",
            category: "Fashion",
            quote: "Our conversion rate increased by 40% after implementing their recommendations. Incredible results!",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
            rating: 5,
            bgColor: "bg-gradient-to-br from-white to-stone-50"
        },
        {
            id: 5,
            brand: "Brand E",
            category: "Food & Beverage",
            quote: "The audit revealed critical issues we never knew existed. Fixed them and saw immediate impact.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
            rating: 5,
            bgColor: "bg-gradient-to-br from-gray-50 to-slate-50"
        },
        {
            id: 6,
            brand: "Brand F",
            category: "Home & Garden",
            quote: "Best investment we made this year. Clear actionable insights that actually work.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
            rating: 5,
            bgColor: "bg-gradient-to-br from-white to-gray-100"
        },
        {
            id: 7,
            brand: "Brand G",
            category: "Technology",
            quote: "From struggling with ads to scaling profitably. This audit changed everything for us.",
            image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=faces",
            rating: 5,
            bgColor: "bg-gradient-to-br from-slate-50 to-white"
        },
        {
            id: 8,
            brand: "Brand H",
            category: "Health & Wellness",
            quote: "Exceeded expectations completely. The team knows exactly what they're doing.",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=faces",
            rating: 5,
            bgColor: "bg-gradient-to-br from-stone-50 to-gray-50"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (autoPlay) {
            autoPlayRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % Math.ceil(testimonials.length / getSlidesPerView()));
            }, 4000);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [autoPlay, testimonials.length]);

    // Get slides per view based on screen size
    const getSlidesPerView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1280) return 3; // xl
            if (window.innerWidth >= 1024) return 2; // lg
            if (window.innerWidth >= 768) return 2; // md
            return 1; // sm
        }
        return 3;
    };

    const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(getSlidesPerView());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Intersection Observer for scroll animations
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => new Set([...prev, entry.target.dataset.id]));
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observerRef.current?.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % Math.ceil(testimonials.length / slidesPerView));
        setAutoPlay(false);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => prev === 0 ? Math.ceil(testimonials.length / slidesPerView) - 1 : prev - 1);
        setAutoPlay(false);
    };



    // Touch/Swipe handlers
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setIsDragging(true);
        setAutoPlay(false);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }

        setIsDragging(false);
    };

    // Mouse drag handlers (for desktop)
    const onMouseDown = (e) => {
        e.preventDefault();
        setTouchEnd(null);
        setTouchStart(e.clientX);
        setIsDragging(true);
        setAutoPlay(false);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        setTouchEnd(e.clientX);
    };

    const onMouseUp = () => {
        if (!isDragging) return;

        if (!touchStart || !touchEnd) {
            setIsDragging(false);
            return;
        }

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }

        setIsDragging(false);
    };

    const onMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
        }
    };

    const renderStars = (rating) => {
        return Array.from({ length: rating }, (_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ));
    };

    const maxSlides = Math.ceil(testimonials.length / slidesPerView);

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-gray-50 pb-0 py-20 px-4">
            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .slider-container {
          overflow: hidden;
          position: relative;
          touch-action: pan-y;
          user-select: none;
        }

        .slider-wrapper {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
          cursor: grab;
        }

        .slider-wrapper:active {
          cursor: grabbing;
        }

        .slider-wrapper.dragging {
          transition: none;
        }

        .slide {
          flex: 0 0 calc(100% / var(--slides-per-view));
          padding: 0 12px;
          box-sizing: border-box;
        }

        .testimonial-card {
          opacity: 0;
          transform: translateY(60px) scale(0.9);
          animation: slideIn 0.8s ease-out forwards;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .title-section {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
        }

        .title-section.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: all 1s ease-out;
        }

        .nav-button {
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .nav-button:active {
          transform: scale(0.95);
        }

        .progress-bar {
          height: 4px;
          background: linear-gradient(to right, #000000, #374151);
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .dot {
          transition: all 0.3s ease;
        }

        .dot.active {
          transform: scale(1.2);
        }
      `}</style>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div
                    data-animate="true"
                    data-id="title"
                    className={`text-center  title-section ${visibleElements.has('title') ? 'visible' : ''}`}
                >
                    <div className="text-center ">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">What Our Clients Say</h2>
                        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                            Real results from real brands who've transformed their ad performance with our audits
                        </p>
                    </div>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200/50 nav-button hover:bg-white hover:shadow-xl"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200/50 nav-button hover:bg-white hover:shadow-xl"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>

                    {/* Slider */}
                    <div
                        className="slider-container"
                        style={{ '--slides-per-view': slidesPerView }}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseLeave}
                    >
                        <div
                            ref={sliderRef}
                            className={`slider-wrapper my-10 ${isDragging ? 'dragging' : ''}`}
                            style={{
                                transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className="slide">
                                    <div
                                        className={`${testimonial.bgColor} rounded-3xl p-8 shadow-lg border border-white/50 backdrop-blur-sm relative overflow-hidden group cursor-pointer testimonial-card h-full`}
                                        style={{ animationDelay: `${(index % slidesPerView) * 0.1}s` }}
                                        onMouseEnter={() => !isDragging && setAutoPlay(false)}
                                        onMouseLeave={() => !isDragging && setAutoPlay(true)}
                                    >
                                        {/* Background decoration */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>

                                        {/* Quote icon */}
                                        <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                                            <Quote className="w-8 h-8 text-gray-800" />
                                        </div>

                                        {/* Profile section */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="relative">
                                                <img
                                                    src={testimonial.image}
                                                    alt={`${testimonial.brand} representative`}
                                                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-black">{testimonial.brand}</h3>
                                                <p className="text-gray-700 text-sm font-medium">{testimonial.category}</p>
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex gap-1 mb-4">
                                            {renderStars(testimonial.rating)}
                                        </div>

                                        {/* Quote */}
                                        <blockquote className="text-black font-medium leading-relaxed text-base">
                                            "{testimonial.quote}"
                                        </blockquote>

                                        {/* Bottom decoration */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex justify-center mt-8 mb-6">
                        <div className="bg-gray-200 rounded-full h-1 w-48 overflow-hidden">
                            <div
                                className="progress-bar"
                                style={{ width: `${((currentSlide + 1) / maxSlides) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TestimonialUI;