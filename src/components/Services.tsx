import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: '📱',
        title: 'App Development',
        description: 'Qt desktop apps, Android apps, and internal tools built for production and scale.',
        features: ['Cross-platform', 'Play Store Ready', 'Native Performance'],
    },
    {
        icon: '🌐',
        title: 'Websites & Web Apps',
        description: 'AI-powered websites with modern frontend and robust backend systems.',
        features: ['React/Next.js', 'Full-Stack', 'SEO Optimized'],
    },
    {
        icon: '🤖',
        title: 'AI & Automation',
        description: 'AI agents, intelligent workflows, and MCP-style multi-tool pipelines.',
        features: ['Custom Agents', 'Workflows', 'API Integration'],
    },
    {
        icon: '🎨',
        title: 'UI / UX & Design',
        description: 'Clean interfaces, stunning posters, and cohesive brand identity systems.',
        features: ['User Research', 'Prototyping', 'Brand Design'],
    },
];

const Services = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate title
            gsap.fromTo('.services .section-title',
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.8, scrollTrigger: {
                        trigger: '.services',
                        start: 'top 80%',
                    }
                }
            );

            // Animate cards with stagger
            gsap.fromTo('.service-card',
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.services-grid',
                        start: 'top 85%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" className="services section" ref={sectionRef}>
            <div className="services-bg">
                <div className="services-glow"></div>
            </div>

            <div className="container">
                <h2 className="section-title">
                    What We <span className="gradient-text">Build</span>
                </h2>
                <p className="section-subtitle">
                    We build AI-powered digital products across the full stack — from mobile apps to automation systems.
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="service-card"
                            style={{ '--index': index } as React.CSSProperties}
                        >
                            <div className="card-glow"></div>
                            <div className="card-border"></div>
                            <div className="card-content">
                                <div className="service-icon-wrapper">
                                    <span className="service-icon">{service.icon}</span>
                                    <div className="icon-ring"></div>
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-features">
                                    {service.features.map((feature) => (
                                        <span key={feature} className="feature-tag">{feature}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
