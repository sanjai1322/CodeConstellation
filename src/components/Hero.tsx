import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

            tl.to('.hero-logo-mark', { opacity: 1, scale: 1, duration: 0.8, delay: 0.2 })
                .to('.hero-logo-glow', { opacity: 0.6, scale: 1.2, duration: 1.2, ease: 'power2.out' }, '-=0.6')
                .to('.hero-badge', { opacity: 1, y: 0, duration: 0.6 }, '-=0.7')
                .to('.title-line', { y: '0%', duration: 1.1, stagger: 0.1 }, '-=0.5')
                .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.7 }, '-=0.65')
                .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.6 }, '-=0.55')
                .to('.hero-stats', { opacity: 1, duration: 0.5 }, '-=0.4');

            // Parallax on scroll
            gsap.to('.hero-content', {
                y: -60,
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                }
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero" ref={heroRef}>
            {/* Background Effects */}
            <div className="hero-bg">
                <div className="hero-orb" />
                <div className="hero-orb-2" />
                <div className="hero-crescent" />
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    {/* Logo Mark with Glow */}
                    <div className="hero-logo-wrapper">
                        <div className="hero-logo-glow" />
                        <img src="/logo.png" alt="Code Constellation" className="hero-logo-mark" />
                    </div>

                    <div className="hero-badge">
                        <span className="badge-pulse" />
                        Developer-Led AI Tech Studio
                    </div>

                    <h1 className="hero-title">
                        <div className="title-overflow">
                            <span className="title-line">We Engineer</span>
                        </div>
                        <div className="title-overflow">
                            <span className="title-line title-accent">The Future</span>
                        </div>
                        <div className="title-overflow">
                            <span className="title-line">Of Digital</span>
                        </div>
                    </h1>

                    <p className="hero-subtitle">
                        A developer-led studio designing, building, and shipping
                        production-grade AI systems, apps, and automation — from concept to orbit.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => scrollTo('contact')}>
                            Start a Project
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button className="btn-secondary" onClick={() => scrollTo('work')}>
                            Explore Our Work
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-desc">Apps Shipped</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-desc">Full-Stack</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <span className="stat-number">Real</span>
                            <span className="stat-desc">Users in Production</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-hint">
                <div className="scroll-line" />
                Scroll
            </div>
        </section>
    );
};

export default Hero;
