import './Services.css';

const services = [
    {
        icon: '🤖',
        num: '01',
        title: 'AI & Automation',
        description: 'Intelligent agents and automated workflows designed to handle complex business logic without human intervention.',
        features: ['Custom Agents', 'Multi-Tool Pipelines', 'LLM Integration'],
    },
    {
        icon: '🌐',
        num: '02',
        title: 'Web Systems',
        description: 'Elite full-stack applications built with Next.js and React for maximum performance and impact.',
        features: ['Scalable Architecture', 'SEO Optimized', 'Real-time Data'],
    },
    {
        icon: '📱',
        num: '03',
        title: 'Mobile Apps',
        description: 'Native-feel cross-platform experiences for iOS and Android, built with Flutter and React Native.',
        features: ['Flutter / React Native', 'Offline Support', 'Push Notifications'],
    },
    {
        icon: '🎨',
        num: '04',
        title: 'UI / UX Design',
        description: 'Premium visual identities and user-centric interfaces that convert visitors into loyal users.',
        features: ['Brand Identity', 'Prototyping', 'Design Systems'],
    },
];

const Services = () => {
    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="services-header">
                    <div className="section-label">What We Build</div>
                    <h2 className="section-title">
                        Full-Stack <span className="gradient-text">Capabilities</span>
                    </h2>
                    <p className="section-subtitle">
                        We build AI-powered digital products across the full stack — from mobile apps to automation systems.
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
                            <div className="service-tags">
                                {s.features.map((f) => (
                                    <span key={f} className="tag">{f}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
