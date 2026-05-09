import './Ticker.css';

const capabilities = [
    'AI Agents', 'Mobile Apps', 'Web Systems', 'Automation',
    'UI/UX Design', 'LLM Integration', 'Flutter', 'React',
    'Next.js', 'Python', 'Cloud Deploy', 'API Design',
    'Data Pipelines', 'Computer Vision', 'Full-Stack',
];

const logos = [
    'NovaScan', 'BioMetric', 'FinFlow', 'EduSpark', 'SolarGuard', 'LeafCare'
];

const Ticker = () => {
    // Double the arrays for seamless infinite scroll
    const items = [...capabilities, ...capabilities];
    const clientLogos = [...logos, ...logos];

    return (
        <section className="ticker-section">
            <div className="ticker">
                <div className="ticker-track">
                    {items.map((item, i) => (
                        <span key={i} className="ticker-item">
                            {item}
                            <span className="ticker-dot">✦</span>
                        </span>
                    ))}
                </div>
            </div>
            
            <div className="ticker logos-ticker">
                <div className="ticker-track reverse">
                    {clientLogos.map((logo, i) => (
                        <span key={i} className="ticker-item logo-item">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ticker;
