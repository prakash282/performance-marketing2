import React, { useEffect, useRef } from 'react';

const AnimatedSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  // Updated benefits data
  const benefits = [
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      title: "Eliminate Media Waste",
      description: "Uncover where 30–40% of your Meta & Google budget is silently leaking."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      title: "Clarity on ROAS Bottlenecks",
      description: "Find out why your ROAS plateaus above ₹3L–₹5L monthly spends — and how to break through."
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      title: "High-Converting Offer Ideas",
      description: "Audit includes plug-&-play offer stack formats based on your category and AOV."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      title: "Fix Funnel Drop-offs",
      description: "We map your product, traffic & conversion journey — and reveal what's silently killing your CVR or CAC."
    },
    {
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop&crop=center",
      title: "Copy-Paste WhatsApp Flows",
      description: "For COD confirmation, upsells, and abandoned cart recovery. No extra cost."
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center",
      title: "Ready-to-Implement Action Plan",
      description: "We don't just diagnose problems — we send you a 3–5 point action list personalized to your store."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      title: "Founder-Level Inputs, Not Intern Slides",
      description: "This audit is reviewed and built by growth leaders — not junior analysts."
    }
  ];

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      script2.onload = () => {
        const { gsap } = window;
        const { ScrollTrigger } = window;
        gsap.registerPlugin(ScrollTrigger);

        cardsRef.current.forEach((card, index) => {
          if (card) {
            gsap.fromTo(
              card,
              { opacity: 0, y: 100, scale: 0.8, rotationX: 20 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                rotationX: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 80%',
                  // end: 'bottom 20%',
                  toggleActions: 'play none none reverse'
                }
              }
            );

            card.addEventListener('mouseenter', () => {
              gsap.to(card, { scale: 1.05, y: -10, duration: 0.3, ease: 'power2.out' });
            });
            card.addEventListener('mouseleave', () => {
              gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' });
            });
          }
        });

        gsap.fromTo(
          headingRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
              end: 'bottom 10%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      };
      document.head.appendChild(script2);
    };
    document.head.appendChild(script1);

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black py-20">
      <div className="px-6 lg:px-20 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div ref={headingRef} className="sticky top-32 space-y-6">

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Top eCommerce Founders Pay{' '}
                <span className="bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
                  ₹999
                </span>{' '}
                for This Audit
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
 It's not just a report — it's a performance breakthrough roadmap. 
            Serious brands use this audit to stop guesswork and start compounding.              </p>
              <div className="w-20 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={el => (cardsRef.current[index] = el)}
                className="group relative overflow-hidden  shadow-2xl cursor-pointer hover:shadow-3xl transition-all duration-500"
              >
                <div className=" text-start px-6 lg:px-10 mx-auto">
                  <div className="mb-6 relative overflow-hidden rounded-xl mx-auto w-full ">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
                  </div>
                  <div className=" mx-auto">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      {benefit.description}
                    </p>

                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl  border-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSection;
