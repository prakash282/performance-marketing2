import React, { useEffect, useRef } from 'react';
import { Settings, TrendingUp, Users, Gem } from 'lucide-react';

const FounderSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);
  const buttonRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate image with scale effect
            if (imageRef.current) {
              imageRef.current.style.transform = 'translateY(0) scale(1)';
              imageRef.current.style.opacity = '1';
            }
            
            // Animate content with staggered timing
            setTimeout(() => {
              if (titleRef.current) {
                titleRef.current.style.transform = 'translateX(0)';
                titleRef.current.style.opacity = '1';
              }
            }, 300);
            
            setTimeout(() => {
              if (subtitleRef.current) {
                subtitleRef.current.style.transform = 'translateX(0)';
                subtitleRef.current.style.opacity = '1';
              }
            }, 500);
            
            setTimeout(() => {
              if (descriptionRef.current) {
                descriptionRef.current.style.transform = 'translateX(0)';
                descriptionRef.current.style.opacity = '1';
              }
            }, 700);

            setTimeout(() => {
              if (quoteRef.current) {
                quoteRef.current.style.transform = 'translateX(0)';
                quoteRef.current.style.opacity = '1';
              }
            }, 900);
            
            // Animate cards with staggered timing
            cardsRef.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.style.transform = 'translateY(0)';
                  card.style.opacity = '1';
                }, 1100 + index * 150);
              }
            });
            
            // Animate stats
            statsRef.current.forEach((stat, index) => {
              if (stat) {
                setTimeout(() => {
                  stat.style.transform = 'translateY(0) scale(1)';
                  stat.style.opacity = '1';
                }, 1600 + index * 200);
              }
            });
            
            setTimeout(() => {
              if (buttonRef.current) {
                buttonRef.current.style.transform = 'translateY(0)';
                buttonRef.current.style.opacity = '1';
              }
            }, 2000);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Founder Image */}
          <div className="relative">
            <div className="relative">
              <div 
                ref={imageRef}
                className="relative group"
                style={{
                  transform: 'translateY(60px) scale(0.95)',
                  opacity: '0',
                  transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Main image container */}
                <div className="relative h-[700px] w-full max-w-lg mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=700&fit=crop&crop=face"
                    alt="Akshit Bhasin - Founder"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)'
                    }}
                  />
                  
                  {/* Subtle fade overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-gray-50 via-gray-50/60 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-16 -left-8 w-3 h-20 bg-black opacity-15 rotate-12 transition-all duration-500 group-hover:rotate-6"></div>
                <div className="absolute bottom-32 -right-8 w-2 h-16 bg-black opacity-10 -rotate-12 transition-all duration-500 group-hover:-rotate-6"></div>
                
                {/* Floating achievement badge */}
                <div className="absolute top-12 right-8 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform rotate-3 transition-all duration-500 group-hover:rotate-0">
                  ₹110Cr+ Managed
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            {/* Title Section */}
            <div className="space-y-4">
              <div className="overflow-hidden">
                <h2 
                  ref={titleRef}
                  className="text-5xl lg:text-6xl font-black text-black leading-none tracking-tight"
                  style={{
                    transform: 'translateX(50px)',
                    opacity: '0',
                    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  Meet The
                  <span className="block bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                    Growth Engineer
                  </span>
                </h2>
              </div>
              
              <div className="overflow-hidden">
                <div 
                  ref={subtitleRef}
                  className="space-y-2"
                  style={{
                    transform: 'translateX(50px)',
                    opacity: '0',
                    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <h3 className="text-3xl font-bold text-black">Akshit Bhasin</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-gray-600">Founder @ AB Media</span>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-lg text-gray-600">Performance Strategist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Description */}
            <div 
              ref={descriptionRef}
              className="space-y-4"
              style={{
                transform: 'translateX(50px)',
                opacity: '0',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  Most audits are just templated fluff. We've actually scaled eCommerce brands from 
                  <span className="font-bold text-black"> ₹5L to ₹25L/month in 90 days</span> — and this audit gives you the 
                  <span className="font-bold text-black"> exact same thinking</span> we bring to our retainers.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div 
              ref={quoteRef}
              className="relative"
              style={{
                transform: 'translateX(50px)',
                opacity: '0',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="bg-black text-white p-5 rounded-2xl relative">
                <div className="absolute -top-3 left-8 w-6 h-6 bg-black rotate-45"></div>
                <h4 className="text-xl font-bold mb-3 text-white">What makes this audit different?</h4>
                <p className="text-gray-300 text-base leading-relaxed">
                  No interns, no fluff. Just battle-tested strategies from someone who's actually done it.
                </p>
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  title: "Built by Growth Engineers",
                  description: "Audits reviewed directly by me and our performance strategists.",
                  icon: Settings
                },
                {
                  title: "₹110Cr+ in Managed Spend",
                  description: "100+ accounts audited, 50+ brands scaled across multiple categories.",
                  icon: TrendingUp
                },
                {
                  title: "Used by Founders",
                  description: "Word-of-mouth referrals from serious operators who don't have time for trial-and-error.",
                  icon: Users
                },
                {
                  title: "100% Value. No Upsells.",
                  description: "You're not being pitched. Walk away with a roadmap you can use in-house.",
                  icon: Gem
                }
              ].map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={index}
                    ref={el => cardsRef.current[index] = el}
                    className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    style={{
                      transform: 'translateY(30px)',
                      opacity: '0',
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-black group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h5 className="font-bold text-black mb-1 text-base">{card.title}</h5>
                        <p className="text-gray-700 text-sm leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Stats */}
            <div className="flex gap-6 pt-3">
              {[
                { value: "₹110Cr+", label: "Ad Spend Managed" },
                { value: "100+", label: "Accounts Audited" },
                { value: "50+", label: "Brands Scaled" }
              ].map((stat, index) => (
                <div
                  key={index}
                  ref={el => statsRef.current[index] = el}
                  className="text-center group"
                  style={{
                    transform: 'translateY(20px) scale(0.9)',
                    opacity: '0',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="text-3xl font-black text-black group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div 
              ref={buttonRef}
              className="pt-4"
              style={{
                transform: 'translateY(30px)',
                opacity: '0',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <button className="group bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Skip The Line
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </span>
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;