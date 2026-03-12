import './Pillars.css';

const pillars = [
    {
        icon: '🛠️',
        title: 'Studio',
        description: 'We build our own products — from AI-powered focus apps to automation tools. Real products, real users, shipped to production.',
    },
    {
        icon: '🚀',
        title: 'Agency',
        description: 'We partner with businesses to design, build, and launch digital products. Full-stack engineering from concept to deployment.',
    },
    {
        icon: '📚',
        title: 'Education',
        description: 'We teach what we build. Courses, tutorials, and mentorship on app development, AI systems, and modern engineering.',
    },
];

const Pillars = () => {
    return (
        <section className="pillars section">
            <div className="container">
                <div className="pillars-header">
                    <div className="section-label">What We Do</div>
                    <h2 className="section-title">
                        Three <span className="gradient-text">Pillars</span>
                    </h2>
                    <p className="section-subtitle">
                        We operate at the intersection of product, service, and knowledge — building, shipping, and teaching.
                    </p>
                </div>

                <div className="pillars-grid">
                    {pillars.map((p) => (
                        <div key={p.title} className="pillar-card">
                            <div className="pillar-icon">{p.icon}</div>
                            <h3 className="pillar-title">{p.title}</h3>
                            <p className="pillar-description">{p.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pillars;
