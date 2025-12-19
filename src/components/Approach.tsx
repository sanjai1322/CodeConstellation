import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Approach.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: '01',
        title: 'Understand',
        subtitle: 'the Problem',
        description: 'Deep dive into your needs, goals, and constraints.',
        color: '#8b5cf6',
    },
    {
        number: '02',
        title: 'Design',
        subtitle: 'the System',
        description: 'Architecture, UX flows, and technical planning.',
        color: '#6366f1',
    },
    {
        number: '03',
        title: 'Build',
        subtitle: 'with AI + Code',
        description: 'Modern development with AI-assisted tooling.',
        color: '#3b82f6',
    },
    {
        number: '04',
        title: 'Ship',
        subtitle: 'Test & Iterate',
        description: 'Launch fast, gather feedback, and improve.',
        color: '#06b6d4',
    },
];

const Approach = () => {
    return (
        <section className="approach section">
            <div className="approach-bg">
                <div className="approach-glow"></div>
            </div>

            <div className="container">
                <h2 className="section-title">
                    Our <span className="gradient-text">Approach</span>
                </h2>
                <p className="section-subtitle">
                    A streamlined process from idea to production-ready product.
                </p>

                <div className="approach-steps">
                    {steps.map((step, index) => (
                        <div key={step.number} className="approach-step-wrapper">
                            <div
                                className="approach-step spotlight-card card-premium"
                                style={{ '--step-color': step.color } as React.CSSProperties}
                            >
                                <div className="step-number-wrapper">
                                    <span className="step-number">{step.number}</span>
                                    <div className="step-number-ring"></div>
                                </div>
                                <h3 className="step-title">
                                    {step.title}
                                    <span className="step-subtitle">{step.subtitle}</span>
                                </h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="step-connector">
                                    <div className="connector-line"></div>
                                    <div className="connector-dot"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Approach;
