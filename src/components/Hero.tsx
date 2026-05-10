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
                .to('.hero-title', { opacity: 1, y: 0, duration: 1.1 }, '-=0.5')
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
                        Premium AI Engineering & Product Studio
                    </div>

                    <h1 className="hero-title">
                        We build AI-first products in 4 weeks.
                    </h1>

                    <p className="hero-subtitle">
                        For ambitious teams. From idea to launch.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary btn-xl btn-prominent" onClick={() => scrollTo('contact')}>
                            Start a project →
                        </button>
                        <a href="#work" className="hero-link" onClick={(e) => { e.preventDefault(); scrollTo('work'); }}>
                            View our work
                        </a>
                    </div>


                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-desc">Products Shipped</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-desc">Full-Stack</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <span className="stat-number">Real-World</span>
                            <span className="stat-desc">Production Impact</span>
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
