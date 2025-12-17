import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const orbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // === ENTRANCE ANIMATIONS (Optimized for speed) ===
            // Animate title words
            gsap.fromTo('.hero-title .word',
                { opacity: 0, y: 40, rotateX: -30 },
                { opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.1 }
            );

            // Animate subtitle
            gsap.fromTo(subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.4 }
            );

            // Animate buttons
            gsap.fromTo('.hero-buttons .btn',
                { opacity: 0, y: 20, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.2)', delay: 0.5 }
            );

            // Animate floating cards
            gsap.fromTo('.hero-card',
                { opacity: 0, scale: 0.7, rotation: -5 },
                { opacity: 1, scale: 1, rotation: 0, duration: 0.5, stagger: 0.1, ease: 'elastic.out(1, 0.6)', delay: 0.6 }
            );

            // Animate badge
            gsap.fromTo('.hero-badge',
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out', delay: 0.05 }
            );

            // Orb continuous animation
            gsap.to(orbRef.current, {
                scale: 1.05,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // === PREMIUM SCROLL ANIMATIONS ===

            // Hero content parallax - fades and moves up on scroll
            gsap.to('.hero-content', {
                y: -100,
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                }
            });

            // Orb visual parallax - moves slower for depth effect
            gsap.to('.hero-visual', {
                y: -150,
                scale: 0.8,
                opacity: 0.3,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2,
                }
            });

            // Floating cards move at different speeds (parallax depth)
            gsap.to('.hero-card:nth-child(1)', {
                y: -200,
                x: -50,
                rotation: -15,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                }
            });

            gsap.to('.hero-card:nth-child(2)', {
                y: -250,
                x: 30,
                rotation: 10,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                }
            });

            gsap.to('.hero-card:nth-child(3)', {
                y: -180,
                x: -20,
                rotation: 8,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2,
                }
            });

            gsap.to('.hero-card:nth-child(4)', {
                y: -220,
                x: 40,
                rotation: -12,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.8,
                }
            });

            // Background glow parallax
            gsap.to('.hero-glow', {
                y: -80,
                scale: 1.2,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2.5,
                }
            });

            // Stats bar slides up and fades
            gsap.to('.hero-stats', {
                y: -50,
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: '60% top',
                    end: 'bottom top',
                    scrub: 1,
                }
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero" ref={heroRef}>
            {/* Animated Background */}
            <div className="hero-bg">
                <div className="hero-gradient"></div>
                <div className="hero-grid"></div>
                <div className="hero-glow hero-glow-1"></div>
                <div className="hero-glow hero-glow-2"></div>
                <div className="hero-glow hero-glow-3"></div>

                {/* Floating Particles - Reduced for performance */}
                <div className="particles">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>

                {/* Orbit Rings */}
                <div className="orbit-container">
                    <div className="orbit orbit-1"></div>
                    <div className="orbit orbit-2"></div>
                    <div className="orbit orbit-3"></div>
                </div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span className="badge-text">Code Constellation • Developer-Led AI Tech Studio</span>
                    </div>

                    <h1 className="hero-title" ref={titleRef}>
                        <span className="title-line">
                            <span className="word">We</span>{' '}
                            <span className="word">Build</span>{' '}
                            <span className="word highlight">Production-Ready</span>
                        </span>
                        <span className="title-line">
                            <span className="word highlight">Apps,</span>{' '}
                            <span className="word highlight">Websites</span>{' '}
                            <span className="word">&</span>{' '}
                            <span className="word">Digital Systems</span>
                        </span>
                    </h1>

                    <p className="hero-subtitle" ref={subtitleRef}>
                        A developer-led studio designing, building, and shipping real digital products —{' '}
                        <span className="subtitle-accent">from concept to production.</span>
                    </p>

                    <div className="hero-buttons" ref={buttonsRef}>
                        <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                            <span className="btn-content">
                                Work With Us
                                <svg className="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                        <button className="btn btn-secondary" onClick={() => scrollToSection('products')}>
                            View Our Products
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">Production</span>
                            <span className="stat-label">Ready Builds</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">Full-Stack</span>
                            <span className="stat-label">Systems</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <span className="stat-number">Real</span>
                            <span className="stat-label">Users Shipped</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-orb" ref={orbRef}>
                        <div className="orb-core"></div>
                        <div className="orb-ring orb-ring-1"></div>
                        <div className="orb-ring orb-ring-2"></div>
                        <div className="orb-ring orb-ring-3"></div>
                        <div className="orb-glow"></div>
                    </div>

                    <div className="hero-card hero-card-1">
                        <div className="card-icon">🤖</div>
                        <div className="card-content">
                            <span className="card-label">AI Agents</span>
                            <span className="card-status active">Active</span>
                        </div>
                    </div>

                    <div className="hero-card hero-card-2">
                        <div className="card-icon">📱</div>
                        <div className="card-content">
                            <span className="card-label">Mobile Apps</span>
                            <span className="card-status">Production</span>
                        </div>
                    </div>

                    <div className="hero-card hero-card-3">
                        <div className="card-icon">🌐</div>
                        <div className="card-content">
                            <span className="card-label">Web Apps</span>
                            <span className="card-status active">Live</span>
                        </div>
                    </div>

                    <div className="hero-card hero-card-4">
                        <div className="card-icon">⚡</div>
                        <div className="card-content">
                            <span className="card-label">Automation</span>
                            <span className="card-status">Running</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span className="scroll-text">Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;
