import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhyUs.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: '🚀',
        title: 'We Ship Real Products',
        description: 'Our apps are live, used by real users, and published on the Play Store. We know what breaks in production — and how to fix it.',
        tags: ['Production-Tested', 'Shipped to Real Users']
    },
    {
        icon: '💡',
        title: 'Product Thinking, Not Just Code',
        description: 'We focus on usability, performance, and long-term maintainability — not just features.',
        tags: ['Built for Scale']
    },
    {
        icon: '⚡',
        title: 'Modern Stack, Used Practically',
        description: 'React, backend systems, automation, and AI — applied where they add real value.',
        tags: ['React-Based Systems']
    },
    {
        icon: '👥',
        title: 'Small Team, Direct Ownership',
        description: 'Clients work directly with the builders. No handoffs. No confusion.',
        tags: ['Developer-Owned']
    },
    {
        icon: '🎯',
        title: 'Built Fast, Built Right',
        description: 'Clean architecture, tested flows, and scalable systems — delivered efficiently.',
        tags: ['Long-Term Maintainable']
    }
];

const WhyUs = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate cards with fade + upward motion
            gsap.fromTo('.why-card',
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.why-grid',
                        start: 'top 80%',
                    }
                }
            );

            // Animate tags with subtle pulse
            gsap.fromTo('.why-tag',
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: '.why-grid',
                        start: 'top 75%',
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="why-us section" ref={sectionRef}>
            <div className="why-us-bg">
                <div className="why-glow why-glow-1"></div>
                <div className="why-glow why-glow-2"></div>
            </div>

            <div className="container">
                <h2 className="section-title">
                    Why Teams Choose <span className="gradient-text">Code Constellation</span>
                </h2>
                <p className="section-subtitle why-subtitle">
                    We're a small, developer-led team that builds, launches, and maintains real products — not just prototypes.
                    <br />
                    <span className="subtitle-highlight">Everything we offer is tested in our own apps before it reaches clients.</span>
                </p>

                <div className="why-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="why-card"
                        >
                            <div className="card-header">
                                <div className="card-icon-wrapper">
                                    <span className="card-icon">{feature.icon}</span>
                                </div>
                                <h3 className="card-title">{feature.title}</h3>
                            </div>

                            <p className="card-description">{feature.description}</p>

                            <div className="card-tags">
                                {feature.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="why-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
