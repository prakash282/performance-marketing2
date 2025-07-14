import React, { useState, useEffect, useRef } from 'react';
import {
    Calendar,
    Facebook,
    Search,
    BarChart3,
    ShoppingCart,
    Mail,
    Eye,
    Play,
    CheckCircle,
    Shield,
    FileText,
    UserX
} from 'lucide-react';

const AnimatedCards = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    animateCards();
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const animateCards = () => {
        cardsRef.current.forEach((card, index) => {
            if (card) {
                // Initial state
                card.style.opacity = '0';
                card.style.transform = 'translateY(100px) scale(0.8)';
                card.style.filter = 'blur(10px)';

                // Animate in sequence
                setTimeout(() => {
                    card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0px) scale(1)';
                    card.style.filter = 'blur(0px)';

                    // Animate items within card
                    const items = card.querySelectorAll('.item');
                    items.forEach((item, itemIndex) => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateX(-50px)';

                        setTimeout(() => {
                            item.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0px)';
                        }, itemIndex * 150 + 400);
                    });
                }, index * 400);
            }
        });
    };

    const getIcon = (iconName) => {
        const iconMap = {
            'Facebook': Facebook,
            'Search': Search,
            'BarChart3': BarChart3,
            'ShoppingCart': ShoppingCart,
            'Mail': Mail,
            'Eye': Eye,
            'Play': Play,
            'CheckCircle': CheckCircle,
            'Shield': Shield,
            'FileText': FileText,
            'UserX': UserX
        };

        const IconComponent = iconMap[iconName] || Calendar;
        return <IconComponent size={18} />;
    };

    const cardData = [
        {
            week: 1,
            title: "What You'll Grant",
            items: [
                {
                    id: 1,
                    text: "Meta Ads Manager",
                    description: "Review campaign structure, ROAS trends, audience overlap, creative fatigue",
                    icon: "Facebook"
                },
                {
                    id: 2,
                    text: "Google Ads",
                    description: "Audit keyword targeting, match types, bid strategy, conversion paths",
                    icon: "Search"
                },
                {
                    id: 3,
                    text: "Google Analytics",
                    description: "Spot bounce/drop-offs, page-level friction, checkout abandonment",
                    icon: "BarChart3"
                },
                {
                    id: 4,
                    text: "Shopify / D2C Analytics",
                    description: "Match paid traffic to actual purchase behavior and repeat rates",
                    icon: "ShoppingCart"
                }
            ]
        },
        {
            "week": 2,
            "title": "How It Works",
            "items": [
                {
                    "id": 5,
                    "text": "Onboarding email",
                    "description": "After payment of ₹999, you'll receive an onboarding email with a short setup guide.",
                    "icon": "Mail"
                },
                {
                    "id": 6,
                    "text": "View-only access",
                    "description": "Grant view-only access; no editing rights are required.",
                    "icon": "Eye"
                },
                {
                    "id": 7,
                    "text": "Audit initiation",
                    "description": "Auditing begins within 1–2 hours of access approval.",
                    "icon": "Play"
                },
                {
                    "id": 8,
                    "text": "Audit delivery",
                    "description": "You receive the full custom audit within 24 hours.",
                    "icon": "CheckCircle"
                }
            ]
        },
        {
            "week": 3,
            "title": "Privacy & Confidentiality",
            "items": [
                {
                    "id": 10,
                    "text": "Access usage",
                    "description": "Access is used strictly for your audit.",
                    "icon": "Shield"
                },
                {
                    "id": 11,
                    "text": "NDA availability",
                    "description": "An NDA is available on request.",
                    "icon": "FileText"
                },
                {
                    "id": 12,
                    "text": "Access revocation",
                    "description": "You can revoke access after delivery.",
                    "icon": "UserX"
                }
            ]
        }
    ];

    const handleCardHover = (index) => {
        if (!isMobile) {
            const card = cardsRef.current[index];
            if (card) {
                card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                card.style.transform = 'translateY(-10px) scale(1.02)';
                card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.12)';
            }
        }
    };

    const handleCardLeave = (index) => {
        if (!isMobile) {
            const card = cardsRef.current[index];
            if (card) {
                card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                card.style.transform = 'translateY(0px) scale(1)';
                card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white ">
            <div className="py-8 px-4 sm:py-12 sm:px-6 lg:px-20" ref={containerRef}>
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
                        To Deliver a Real Audit,<br />
                        <span className="text-zinc-600">We Need Real Data</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
                        We don't do surface-level reviews. To give you a meaningful audit with clear growth actions,
                        we need <span className="font-semibold text-black">read-only</span> access to your ad accounts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cardData.map((card, index) => (
                        <div
                            key={card.week}
                            ref={el => cardsRef.current[index] = el}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden opacity-0"
                            style={{
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                                backdropFilter: 'blur(10px)'
                            }}
                            onMouseEnter={() => handleCardHover(index)}
                            onMouseLeave={() => handleCardLeave(index)}
                        >

                            {/* Title */}
                            <div className="px-6 py-6 relative overflow-hidden">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                    {card.title}
                                </h2>

                                {/* Items */}
                                <div className="space-y-2 relative">
                                    {card.items.map((item, itemIndex) => (
                                        <div
                                            key={item.id}
                                            className="item relative overflow-hidden"
                                            onMouseEnter={() => !isMobile && setHoveredItem(item.id)}
                                            onMouseLeave={() => !isMobile && setHoveredItem(null)}
                                        >
                                            <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
                                                <div className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                                                    {getIcon(item.icon)}
                                                </div>
                                                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                                                    {item.text}
                                                </span>
                                            </div>

                                            {/* Description - Always visible on mobile, hover on desktop */}
                                            <div
                                                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                                                    isMobile 
                                                        ? 'max-h-40 opacity-100' 
                                                        : hoveredItem === item.id 
                                                            ? 'max-h-40 opacity-100' 
                                                            : 'max-h-0 opacity-0'
                                                }`}
                                                style={{
                                                    transform: (isMobile || hoveredItem === item.id) ? 'translateY(0px)' : 'translateY(-10px)',
                                                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                                                }}
                                            >
                                                <div className="px-3 pb-3 pt-1">
                                                    <div
                                                        className="bg-gray-900 text-white rounded-lg p-3 text-sm leading-relaxed transform transition-all duration-500"
                                                        style={{
                                                            transform: (isMobile || hoveredItem === item.id) ? 'scale(1) translateY(0px)' : 'scale(0.95) translateY(-5px)',
                                                            opacity: (isMobile || hoveredItem === item.id) ? 1 : 0.8,
                                                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                                        }}
                                                    >
                                                        <div
                                                            className="absolute -top-1 left-6 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-gray-900 transition-all duration-300"
                                                            style={{
                                                                transform: (isMobile || hoveredItem === item.id) ? 'scale(1)' : 'scale(0.8)',
                                                                opacity: (isMobile || hoveredItem === item.id) ? 1 : 0.7
                                                            }}
                                                        ></div>
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnimatedCards;