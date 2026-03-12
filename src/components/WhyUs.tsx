import './WhyUs.css';

const features = [
    {
        icon: '🚀',
        title: 'We Ship Real Products',
        description: 'Our apps are live, used by real users, and published on the Play Store. We know what breaks in production.',
    },
    {
        icon: '💡',
        title: 'Product Thinking First',
        description: 'We focus on usability, performance, and long-term maintainability — not just features.',
    },
    {
        icon: '⚡',
        title: 'Modern Stack, Practical Use',
        description: 'React, backend systems, automation, and AI — applied where they add real value.',
    },
    {
        icon: '👥',
        title: 'Direct Ownership',
        description: 'Clients work directly with the builders. No handoffs. No confusion. No middlemen.',
    },
    {
        icon: '🎯',
        title: 'Built Fast, Built Right',
        description: 'Clean architecture, tested flows, and scalable systems — delivered efficiently.',
    },
    {
        icon: '🔒',
        title: 'Production-Grade Quality',
        description: 'Every system we deliver is battle-tested with our own products before reaching clients.',
    },
];

const WhyUs = () => {
    return (
        <section className="why-us section">
            <div className="container">
                <div className="why-us-header">
                    <div className="section-label">Why Us</div>
                    <h2 className="section-title">
                        Why Teams Choose{' '}
                        <span className="gradient-text">Code Constellation</span>
                    </h2>
                    <p className="section-subtitle">
                        A small, developer-led team that builds, launches, and maintains real products — not just prototypes.
                    </p>
                </div>

                <div className="why-grid">
                    {features.map((f, i) => (
                        <div key={i} className="why-card">
                            <div className="why-card-icon">{f.icon}</div>
                            <h3 className="why-card-title">{f.title}</h3>
                            <p className="why-card-desc">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
