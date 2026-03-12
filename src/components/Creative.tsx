import './Creative.css';

const capabilities = [
    {
        icon: '🎬',
        title: 'AI Animation & Films',
        description: 'Cinematic short films, brand stories, and animated explainers powered by next-gen AI video models.',
        tools: ['Runway', 'Sora', 'Kling'],
    },
    {
        icon: '🖼️',
        title: 'AI Image Generation',
        description: 'Photorealistic visuals, brand imagery, and custom art created with state-of-the-art diffusion models.',
        tools: ['Midjourney', 'Flux', 'DALL·E'],
    },
    {
        icon: '✂️',
        title: 'AI Video Editing',
        description: 'Reels, ads, and branded content with AI-enhanced color grading, transitions, and post-production.',
        tools: ['CapCut AI', 'Premiere', 'After Effects'],
    },
    {
        icon: '🎵',
        title: 'AI Music & Sound',
        description: 'Original scores, sound design, voiceovers, and audio branding generated and refined with AI.',
        tools: ['Suno', 'Udio', 'ElevenLabs'],
    },
];

const Creative = () => {
    return (
        <section className="creative section">
            <div className="container">
                <div className="creative-header">
                    <div className="section-label">AI Creative Studio</div>
                    <h2 className="section-title">
                        Not Just Code.{' '}
                        <span className="gradient-text">We Make Art.</span>
                    </h2>
                    <p className="section-subtitle">
                        The only tech studio that produces cinematic AI films, photorealistic visuals,
                        original music, and premium video — alongside your AI systems.
                    </p>
                </div>

                <div className="creative-grid">
                    {capabilities.map((cap, i) => (
                        <div key={i} className="creative-card">
                            <div className="creative-card-glow" />
                            <div className="creative-icon">{cap.icon}</div>
                            <h3 className="creative-title">{cap.title}</h3>
                            <p className="creative-desc">{cap.description}</p>
                            <div className="creative-tools">
                                {cap.tools.map((t) => (
                                    <span key={t} className="creative-tool">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Creative;
