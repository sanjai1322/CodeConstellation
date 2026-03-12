import './Approach.css';

const steps = [
    {
        number: '01',
        icon: '🔍',
        title: 'Analyze',
        subtitle: 'the Vision',
        description: 'We dissect your objectives and constraints to architect a future-proof roadmap.',
        features: ['Requirements Mapping', 'Feasibility Study', 'Tech Audit'],
    },
    {
        number: '02',
        icon: '🏗️',
        title: 'Architect',
        subtitle: 'the Solution',
        description: 'Elite technical planning and UI/UX engineering for maximum scalability.',
        features: ['System Design', 'Data Modeling', 'UI Prototyping'],
    },
    {
        number: '03',
        icon: '⚡',
        title: 'Engineer',
        subtitle: 'with Precision',
        description: 'Developing high-performance systems with AI-augmented workflows.',
        features: ['Full-Stack Dev', 'AI Integration', 'Testing'],
    },
    {
        number: '04',
        icon: '🚀',
        title: 'Deploy',
        subtitle: '& Accelerate',
        description: 'Seamless launch followed by rapid iteration and ongoing support.',
        features: ['CI/CD Pipeline', 'Monitoring', 'Iteration'],
    },
];

const Approach = () => {
    return (
        <section id="process" className="approach section">
            <div className="container">
                <div className="approach-header">
                    <div className="section-label">Our Process</div>
                    <h2 className="section-title">
                        Digital <span className="gradient-text">Mastery</span>
                    </h2>
                    <p className="section-subtitle">
                        Our methodology for engineering world-class digital systems.
                    </p>
                </div>

                {/* Horizontal connector line */}
                <div className="approach-connector">
                    <div className="connector-line" />
                    <div className="connector-glow" />
                </div>

                <div className="approach-grid">
                    {steps.map((step, i) => (
                        <div key={step.number} className="approach-card" style={{ '--delay': `${i * 0.08}s` } as React.CSSProperties}>
                            {/* Top: large number watermark */}
                            <div className="card-number-bg">{step.number}</div>

                            {/* Node on the connector */}
                            <div className="card-node">
                                <div className="card-node-dot" />
                                <div className="card-node-ring" />
                            </div>

                            <div className="card-icon">{step.icon}</div>

                            <div className="card-content">
                                <span className="card-num-badge">{step.number}</span>
                                <h3 className="card-title">{step.title}</h3>
                                <span className="card-subtitle">{step.subtitle}</span>
                                <p className="card-description">{step.description}</p>

                                <div className="card-features">
                                    {step.features.map((f) => (
                                        <span key={f} className="card-feature">{f}</span>
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

export default Approach;
