import './Strategy.css';

const features = [
    {
        icon: '🚀',
        title: 'Production First',
        description: 'We don\'t just build MVPs. We build production-ready systems that are battle-tested in the real world.',
    },
    {
        icon: '🎯',
        title: 'Direct Ownership',
        description: 'Work directly with the engineers. No middlemen, no confusion, just technical expertise.',
    },
];

const steps = [
    { num: '01', title: 'Analyze', desc: 'Requirements Mapping & Tech Audit' },
    { num: '02', title: 'Architect', desc: 'System Design & UI Prototyping' },
    { num: '03', title: 'Engineer', desc: 'Full-Stack Dev & AI Integration' },
    { num: '04', title: 'Deploy', desc: 'CI/CD & Ongoing Iteration' },
];

const Strategy = () => {
    return (
        <section id="process" className="strategy section">
            <div className="container">
                <div className="strategy-layout">
                    <div className="strategy-left">
                        <div className="section-label">Our Strategy</div>
                        <h2 className="section-title">
                            How We <span className="gradient-text">Deliver Value</span>
                        </h2>
                        <p className="section-subtitle">
                            We combine deep technical expertise with a product-first mindset to build 
                            high-impact digital systems.
                        </p>
                        
                        <div className="strategy-features">
                            {features.map((f, i) => (
                                <div key={i} className="strategy-feature-item">
                                    <span className="feature-icon">{f.icon}</span>
                                    <div>
                                        <h4 className="feature-title">{f.title}</h4>
                                        <p className="feature-desc">{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="strategy-right">
                        <div className="process-timeline">
                            {steps.map((step, i) => (
                                <div key={i} className="process-step">
                                    <div className="process-num">{step.num}</div>
                                    <div className="process-info">
                                        <h4 className="process-title">{step.title}</h4>
                                        <p className="process-desc">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Strategy;
