import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CTA.css';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.cta-content',
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.cta',
                        start: 'top 80%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="cta section" ref={sectionRef}>
            <div className="cta-bg">
                <div className="cta-orb cta-orb-1"></div>
                <div className="cta-orb cta-orb-2"></div>
                <div className="cta-grid"></div>
            </div>

            <div className="container">
                <div className="cta-content">
                    <div className="cta-glow"></div>
                    <h2 className="cta-title">
                        Let's Build Something <span className="gradient-text">Great</span>
                    </h2>
                    <p className="cta-description">
                        Need an app, website, or AI system? Let's talk about your project and make it real.
                    </p>
                    <button className="cta-button" onClick={scrollToContact}>
                        <span className="btn-bg"></span>
                        <span className="btn-text">
                            Get In Touch
                            <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
