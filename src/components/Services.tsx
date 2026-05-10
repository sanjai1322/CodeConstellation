import './Services.css';

const services = [
    {
        icon: '🤖',
        num: '01',
        title: 'AI Products',
        description: 'Custom LLM agents, R&D prototypes, and production AI systems built for scale.',
    },
    {
        icon: '🌐',
        num: '02',
        title: 'Web Systems',
        description: 'High-performance full-stack applications and SaaS platforms built with React.',
    },
    {
        icon: '⚙️',
        num: '03',
        title: 'Automation',
        description: 'Deeply integrated workflows and automated pipelines for complex business logic.',
    },
];

const Services = () => {
    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="services-header">
                    <div className="section-label">Capabilities</div>
                    <h2 className="section-title">
                        What we <span className="gradient-text">build</span>
                    </h2>
                    <p className="section-subtitle">
                        We build AI-powered digital products across the full stack.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((s) => (
                        <div key={s.num} className="service-card">
                            <div className="service-card-top">
                                <div className="service-icon-box">{s.icon}</div>
                                <span className="service-num">{s.num}</span>
                            </div>
                            <h3 className="service-title">{s.title}</h3>
                            <p className="service-description">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
