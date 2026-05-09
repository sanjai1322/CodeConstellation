import './StudioCulture.css';

const capabilities = [
    {
        icon: '🎬',
        title: 'AI Creative Studio',
        description: 'Cinematic films, brand stories, and animated explainers powered by next-gen AI video models.',
        tags: ['Runway', 'Sora', 'Kling'],
    },
    {
        icon: '📚',
        title: 'Education & Mentorship',
        description: 'We teach what we build. Premium courses and mentorship on AI engineering and app development.',
        tags: ['Workshops', 'Mentorship', 'Curriculum'],
    },
    {
        icon: '🛠️',
        title: 'Studio Lab',
        description: 'Incubating internal products like NovaScan to test the limits of production-grade AI.',
        tags: ['R&D', 'Prototyping', 'OSS'],
    },
];

const StudioCulture = () => {
    return (
        <section id="culture" className="culture section">
            <div className="container">
                <div className="culture-layout">
                    <div className="culture-content">
                        <div className="section-label">Studio Culture</div>
                        <h2 className="section-title">
                            Beyond <span className="gradient-text">Engineering</span>
                        </h2>
                        <p className="section-subtitle">
                            We aren't just a dev shop. We are a creative laboratory where we build products, 
                            produce films, and educate the next generation of engineers.
                        </p>
                        
                        <div className="culture-grid">
                            {capabilities.map((cap, i) => (
                                <div key={i} className="culture-card">
                                    <div className="culture-icon">{cap.icon}</div>
                                    <h3 className="culture-title">{cap.title}</h3>
                                    <p className="culture-desc">{cap.description}</p>
                                    <div className="culture-tags">
                                        {cap.tags.map(t => <span key={t} className="tag">{t}</span>)}
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

export default StudioCulture;
