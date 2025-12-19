import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Education.css';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    return (
        <section className="education section">
            <div className="education-bg">
                <div className="education-line"></div>
            </div>

            <div className="container">
                <div className="education-content spotlight-card">
                    <div className="education-glow"></div>
                    <div className="education-inner">
                        <div className="education-icon-wrapper">
                            <span className="education-icon">📚</span>
                            <div className="icon-ring icon-ring-1"></div>
                            <div className="icon-ring icon-ring-2"></div>
                        </div>
                        <h2 className="education-title">
                            We Also <span className="gradient-text">Teach</span> What We Build
                        </h2>
                        <p className="education-description">
                            Learn app development, AI systems, and automation from builders who ship real products.
                            We share our knowledge through courses, tutorials, and content.
                        </p>
                        <div className="education-tags">
                            <span className="education-tag">
                                <span className="tag-icon">📱</span>
                                App Development
                            </span>
                            <span className="education-tag">
                                <span className="tag-icon">🤖</span>
                                AI Systems
                            </span>
                            <span className="education-tag">
                                <span className="tag-icon">⚡</span>
                                Automation
                            </span>
                            <span className="education-tag">
                                <span className="tag-icon">🚀</span>
                                Real Projects
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
